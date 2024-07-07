import express from 'express';
import db from '../db.js';

const router = express.Router();

// Data Pegawai di Admin
router.get('/presensi', (req, res) => {
    console.log("GET /api/data_presensi/presensi");
    const query = 'SELECT * FROM data_presensi';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        return res.json(results);
    });
});

// Dashboard
router.get('/presensi/count', (req, res) => {
    const date = req.query.date; // Mengambil parameter tanggal dari query string
    let queryPresensi;
    if (date) {
        queryPresensi = 'SELECT COUNT(*) AS presensi_count FROM data_presensi WHERE DATE(tanggal_presensi) = ?';
    } else {
        queryPresensi = 'SELECT COUNT(*) AS presensi_count FROM data_presensi';
    }
    const queryPegawaiAktif = 'SELECT COUNT(*) AS active_count FROM data_pegawai WHERE status_kepegawaian = "aktif"';

    // Mendapatkan jumlah presensi
    db.query(queryPresensi, [date], (errPresensi, resultsPresensi) => {
        if (errPresensi) {
            console.error('Error executing presensi query:', errPresensi);
            return res.status(500).json({ error: 'Internal server error' });
        }
        
        const presensiCount = resultsPresensi[0].presensi_count;

        // Mendapatkan jumlah pegawai aktif
        db.query(queryPegawaiAktif, (errPegawai, resultsPegawai) => {
            if (errPegawai) {
                console.error('Error executing pegawai query:', errPegawai);
                return res.status(500).json({ error: 'Internal server error' });
            }
            
            const activeCount = resultsPegawai[0].active_count;

            const presensiPercentage = (presensiCount / activeCount) * 100;

            let formattedPercentage;
            if (Number.isInteger(presensiPercentage)) {
                formattedPercentage = presensiPercentage.toFixed(0);
            } else {
                formattedPercentage = presensiPercentage.toFixed(2);
            }
            
            const responseData = {
                presensi_count: presensiCount,
                total_active_pegawai: activeCount,
                presensi_percentage: formattedPercentage,
            };

            res.json(responseData);
        });
    });
});

// // Endpoint untuk mendapatkan jumlah presensi per tanggal
router.get('/presensi/daily', (req, res) => {
    const query = `
        SELECT 
            DATE(tanggal_presensi) as date, 
            COUNT(*) as Hadir
        FROM data_presensi 
        GROUP BY DATE(tanggal_presensi)
        ORDER BY DATE(tanggal_presensi)`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        console.log('Data presensi harian:', results); // Log data presensi
        res.json(results);
    });
});

// Histori Presensi
// router.get('/presensi/all', (req, res) => {
//     const query = 'SELECT * FROM data_presensi'; // Query untuk mengambil semua data presensi
    
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }

//         return res.json(results);
//     });
// });

router.get('/presensi/user/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM data_presensi WHERE id_pegawai = ?'; // Query untuk mengambil data presensi berdasarkan ID user
    
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        return res.json(results);
    });
});



// presensi
router.post('/save-presensi', (req, res) => {
    const { result, type, timestamp } = req.body;

    const idPegawai = parseInt(result); // Assuming the QR code text is the id_pegawai
    const datetime = new Date(timestamp);
    const tanggalPresensi = datetime.toISOString().split('T')[0];
    const waktuPresensi = datetime.toTimeString().split(' ')[0];

    let query = '';
    if (type === 'masuk') {
        query = 'INSERT INTO data_presensi (id_pegawai, tanggal_presensi, jam_masuk) VALUES (?, ?, ?)';
        db.query(query, [idPegawai, tanggalPresensi, waktuPresensi], (err, results) => {
            if (err) {
                console.error('Error inserting presensi masuk:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            res.json({ message: 'Presensi masuk berhasil disimpan' });
        });
    } else if (type === 'keluar') {
        query = 'UPDATE data_presensi SET jam_keluar = ? WHERE id_pegawai = ? AND tanggal_presensi = ?';
        db.query(query, [waktuPresensi, idPegawai, tanggalPresensi], (err, results) => {
            if (err) {
                console.error('Error updating presensi keluar:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            // Calculate total jam kerja
            const queryTotalJamKerja = `
                UPDATE data_presensi
                SET total_jam_kerja = TIMEDIFF(jam_keluar, jam_masuk)
                WHERE id_pegawai = ? AND tanggal_presensi = ?
            `;
            db.query(queryTotalJamKerja, [idPegawai, tanggalPresensi], (err, results) => {
                if (err) {
                    console.error('Error calculating total jam kerja:', err);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }
                res.json({ message: 'Presensi keluar berhasil disimpan dan total jam kerja diperbarui' });
            });
        });
    } else {
        res.status(400).json({ message: 'Invalid presensi type' });
    }
});


export default router;