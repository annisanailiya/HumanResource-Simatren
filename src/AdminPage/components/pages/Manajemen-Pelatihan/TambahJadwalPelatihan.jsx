import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TambahJadwalPelatihan = () => {
  const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false);

  const handleSave = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        navigate('/AdminPage/jadwal_pelatihan');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className='px-5'>
      <span className="text-2xl text-gray-950 font-semibold flex justify-center">Tambah Data Pegawai</span>
      
      <div className='md:w-[100%] w-[90%] mx-auto h-full flex flex-col py-5 justify-between'>
        <div className="relative rounded-sm box-border border border-gray-200 shadow-lg shadow-gray-500 p-10">

          {/* Form Tambah Data Pegawai */}
          <div className="relative w-full gap-2 grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Nama Kegiatan</span>
                <span className='text-red-700'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan nama kegiatan"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-full h-10 pl-2 rounded-md"
                required
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Tanggal Mulai</span>
                <span className='text-red-700'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih tanggal mulai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-full h-10 pl-2 rounded-md"
                required
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Tanggal Selesai</span>
                <span className='text-red-700'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih tanggal selesai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-full h-10 pl-2 rounded-md"
                required
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Deskripsi Kegiatan</span>
                <span className='text-red-700'>*</span>
              </div>
              <input
                type="textarea"
                placeholder="Masukkan deskripsi kegiatan"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-full h-10 pl-2 rounded-md"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Konfirmasi */}
        <div className="flex flex-row gap-6 justify-end md:w-[100%] w-[90%] mx-auto">
          <button
            type="button"
            className="w-28 text-black bg-gray-300 hover:bg-green-900 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => navigate('/AdminPage/jadwal_pelatihan')}>
            Batal
          </button>
          <button
            type="submit"
            className="w-28 text-black bg-gray-300 hover:bg-green-900 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white font-semibold text-green-900 p-5 rounded-md shadow-lg">
            <p>Jadwal Pelatihan Berhasil Dibuat!</p>
          </div>
        </div>
      )}
  </div>
  )
}

export default TambahJadwalPelatihan;
