import React from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

const QrPresensi = () => {
  const navigate = useNavigate();
  
  const handleScan = (data) => {
    if (data) {
      try {
        const url = new URL(data.text || data);
        // Simpan data presensi ke dalam state atau konteks aplikasi di sini
        const timestamp = new Date().toLocaleString(); // Atau gunakan timestamp dari QR jika tersedia
        const presensiData = {
          url: url.href,
          timestamp: timestamp,
          // Data tambahan seperti ID pegawai, dll.
        };
        // Lakukan penyimpanan data presensi disini, contoh: dispatch ke konteks aplikasi
        // Setelah itu, navigasikan pengguna ke halaman histori
        navigate(`/UserPage/histori_presensi`, { state: { presensiData } });
      } catch (err) {
        console.error('URL yang dipindai tidak valid', err);
      }
    }
  };
  

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 340,
    width: 500,
  };

  return (
    <React.Fragment>
      <div className="relative py-4 w-full flex justify-between items-center">
        <p className="text-xl font-bold mb-4 px-5">Scan Presensi :</p>
      </div>
      <div className="flex justify-center">
        <QrScanner
          delay={300}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      </div>
    </React.Fragment>
  );
};

export default QrPresensi;
