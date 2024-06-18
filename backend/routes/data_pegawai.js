import express from 'express';
import db from '../db.js';

const router = express.Router();

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

router.get('/pegawai/:id_pegawai', (req, res) => {
    const { id_pegawai } = req.params;
    const sql = `SELECT * FROM data_pegawai WHERE id_pegawai = ?`;
    db.query(sql, [id_pegawai], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ error: 'Pegawai not found' });
            }
        }
    });
});

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

export default router;
