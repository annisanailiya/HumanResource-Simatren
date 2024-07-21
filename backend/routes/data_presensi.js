import express from 'express';
import db from '../db.js';

const router = express.Router();

//ADMIN
//Menampilkan Seluruh Data Presensi
router.get('/presensi', (req, res) => {
    console.log("GET /api/data_presensi/presensi");
    const query = `
    SELECT 
        p.nip,
        p.nama_pegawai,
        pr.id_presensi,
        pr.id_pegawai,
        pr.tanggal_presensi,
        pr.jam_masuk,
        pr.jam_keluar,
        pr.total_jam_kerja
    FROM 
        data_presensi pr
    JOIN 
        data_pegawai p ON pr.id_pegawai = p.id_pegawai
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        return res.json(results);
    });
});

//USER
//Menampilkan Data Presensi Berdasarkan id_pegawai
router.get('/presensi/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    console.log("GET /api/data_presensi/presensi/:id_pegawai");
    const query = `
    SELECT 
        p.nip,
        p.nama_pegawai,
        pr.id_presensi,
        pr.id_pegawai,
        pr.tanggal_presensi,
        pr.jam_masuk,
        pr.jam_keluar,
        pr.total_jam_kerja
    FROM 
        data_presensi pr
    JOIN 
        data_pegawai p ON pr.id_pegawai = p.id_pegawai
    WHERE 
        pr.id_pegawai = ?
    `;
    db.query(query, [id_pegawai], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        return res.json(results);
    });
});


export default router;
