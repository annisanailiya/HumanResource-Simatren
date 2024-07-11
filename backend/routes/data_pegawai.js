import express from 'express';
import db from '../db.js';
import multer from 'multer';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Konfigurasi multer untuk menyimpan file foto profil
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//ADMIN
//Menambah data pegawai
router.post('/pegawai', (req, res) => {
    const { nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, password, role, status_bpjs, status_kawin, anggota_keluarga, jumlah_tanggungan } = req.body;
    const status_kepegawaian = 'Aktif'; // Default status kepegawaian "Aktif"
    const sql = `
        INSERT INTO data_pegawai (nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, password, role, status_bpjs, status_kepegawaian, status_kawin, anggota_keluarga, jumlah_tanggungan)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, password, role, status_bpjs, status_kepegawaian, status_kawin, anggota_keluarga, jumlah_tanggungan];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Pegawai added successfully', id: result.insertId });
        }
    });
});

//Menampilkan seluruh data pegawai
router.get('/pegawai', (req, res) => {
    console.log("GET /api/data_pegawai/pegawai");
    const query = 'SELECT * FROM data_pegawai';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        return res.json(results);
    });
});

//Menampilkan detail setiap pegawai
router.get('/pegawai/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    const sql = `SELECT * FROM data_pegawai WHERE id_pegawai = ?`;
    db.query(sql, [id_pegawai], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.length > 0) {
                const pegawai = result[0];
                if (pegawai.foto_profil) {
                    let imageType = 'jpeg'; // Default
                    const buffer = Buffer.from(pegawai.foto_profil, 'base64');
                    if (buffer.slice(0, 4).toString('hex') === '89504e47') {
                        imageType = 'png';
                    }
                    pegawai.foto_profil = {
                        data: buffer.toString('base64'),
                        type: imageType
                    };
                }
                res.json(pegawai);
            } else {
                res.status(404).json({ error: 'Pegawai not found' });
            }
        }
    });
});

//Menghapus data pegawai 
router.delete('/pegawai/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    const sql = 'DELETE FROM data_pegawai WHERE id_pegawai = ?';
    db.query(sql, [id_pegawai], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Pegawai deleted successfully' });
        }
    });
});

//Mengedit data pegawai
router.put('/pegawai/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    const { nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, role, status_bpjs, status_kepegawaian, anggota_keluarga, jumlah_tanggungan } = req.body;
    const sql = `
        UPDATE data_pegawai
        SET
            nama_pegawai = ?,
            nip = ?,
            tempat_lahir = ?,
            tanggal_lahir = ?,
            jenis_kelamin = ?,
            alamat = ?,
            no_telp = ?,
            email = ?,
            role =  ?,
            status_bpjs = ?,
            status_kepegawaian = ?,
            anggota_keluarga = ?,
            jumlah_tanggungan = ?
        WHERE id_pegawai = ?
    `;
    const values = [nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, role, status_bpjs, status_kepegawaian, anggota_keluarga, jumlah_tanggungan, id_pegawai];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Pegawai updated successfully' });
        }
    });
});

//USER
//Menampilkan data pegawai sesuai id pegawai yang sedang login
router.get('/pegawai/profil/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    const sql = `SELECT * FROM data_pegawai WHERE id_pegawai = ?`;
    db.query(sql, [id_pegawai], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.length > 0) {
                const profil = result[0];
                if (profil.foto_profil) {
                    let imageType = 'jpeg'; // Default
                    const buffer = Buffer.from(profil.foto_profil, 'base64');
                    if (buffer.slice(0, 4).toString('hex') === '89504e47') {
                        imageType = 'png';
                    }
                    profil.foto_profil = {
                        data: buffer.toString('base64'),
                        type: imageType
                    };
                }
                res.json(profil);
            } else {
                res.status(404).json({ error: 'Profil Pegawai not found' });
            }
        }
    });
});

// Mengupload foto profil
router.post('/pegawai/upload-foto/:id_pegawai', upload.single('foto_profil'), (req, res) => {
    const { id_pegawai } = req.params;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const fileBuffer = file.buffer;

    const query = 'UPDATE data_pegawai SET foto_profil = ? WHERE id_pegawai = ?';
    db.query(query, [fileBuffer, id_pegawai], (err, result) => {
        if (err) {
            console.error('Error uploading file to the database:', err);
            return res.status(500).json({ message: 'Error uploading file' });
        }
        res.status(200).json({ message: 'Photo Profile uploaded successfully' });
    });
});

//Mengedit profil pegawai
router.put('/pegawai/profil/:id_pegawai', async (req, res) => {
    const { id_pegawai } = req.params;
    const { nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, password, role, status_bpjs, status_kepegawaian, anggota_keluarga, jumlah_tanggungan } = req.body;

    // Mengambil password lama dari database
    const sqlSelect = `SELECT password FROM data_pegawai WHERE id_pegawai = ?`;
    db.query(sqlSelect, [id_pegawai], async (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        let hashedPassword = result[0].password;
        if (password && password !== '') {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        const sqlUpdate = `
            UPDATE data_pegawai
            SET
                nama_pegawai = ?,
                nip = ?,
                tempat_lahir = ?,
                tanggal_lahir = ?,
                jenis_kelamin = ?,
                alamat = ?,
                no_telp = ?,
                email = ?,
                password = ?,
                role = ?,
                status_bpjs = ?,
                status_kepegawaian = ?,
                anggota_keluarga = ?,
                jumlah_tanggungan = ?
            WHERE id_pegawai = ?
        `;
        const values = [nama_pegawai, nip, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, no_telp, email, hashedPassword, role, status_bpjs, status_kepegawaian, anggota_keluarga, jumlah_tanggungan, id_pegawai];

        db.query(sqlUpdate, values, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Internal server error' });
            } else {
                return res.json({ message: 'Pegawai updated successfully' });
            }
        });
    });
});

export default router;
