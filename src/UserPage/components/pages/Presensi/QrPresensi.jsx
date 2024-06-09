import React from 'react';
import QrScanner from 'react-qr-scanner';

const QrPresensi = () => {
  const handleScan = (data) => {
    if (data) {
      try {
        const url = new URL(data.text || data);
        window.location.href = url.href;
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
