// FormPresensi.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePresensi } from './PresensiContext';

const LOCAL_STORAGE_KEY = 'form-presensi';

function FormPresensi() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dataPresensi, updatePresensi } = usePresensi();
  const [presensi, setPresensi] = useState(null);
  const [jamKeluar, setJamKeluar] = useState('');

  useEffect(() => {
    const presensiData = dataPresensi.find(p => p.id === id);
    if (presensiData) {
      const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (savedData && savedData.id === id) {
        setPresensi(savedData);
      } else {
        setPresensi(presensiData);
      }
      setJamKeluar(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
  }, [id, dataPresensi]);

  useEffect(() => {
    if (presensi) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(presensi));
    }
  }, [presensi]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPresensi(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (presensi) {
      const jamMasukDate = new Date(`1970-01-01T${presensi.jam_masuk}:00`);
      const jamKeluarDate = new Date(`1970-01-01T${jamKeluar}:00`);
      const totalJam = ((jamKeluarDate - jamMasukDate) / (1000 * 60 * 60)).toFixed(2);

      const updatedPresensi = {
        jam_keluar: jamKeluar,
        total_jam: `${totalJam} jam`
      };

      updatePresensi(id, updatedPresensi);
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear local storage on submit
      navigate('/UserPage/histori_presensi');
    }
  };

  if (!presensi) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold px-5">Lengkapi Presensi</h1>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Jam Keluar</label>
          <input
            type="text"
            value={jamKeluar}
            disabled
            className="bg-gray-200 border border-gray-200 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Sholawat yang dibaca hari ini</label>
          <input
            type="text"
            name="sholawat"
            value={presensi.sholawat || ''}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Surat yang dibaca hari ini dari ayat berapa sampai berapa</label>
          <input
            type="text"
            name="alquran"
            value={presensi.alquran || ''}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Sholat yang sudah dilakukan hari ini</label>
          <input
            type="text"
            name="sholat"
            value={presensi.sholat || ''}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Kebaikan hari ini</label>
          <input
            type="text"
            name="kebaikan"
            value={presensi.kebaikan || ''}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-green-900 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default FormPresensi;
