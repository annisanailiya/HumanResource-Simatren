import React, { useEffect, useState } from 'react';
import { HiOutlineSearch, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import axios from 'axios';
import { formatDate } from '../../utils/formatDate';

function HistoriPresensi() {
  const [dataPresensi, setDataPresensi] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchDataPresensi();
  }, []);

  const fetchDataPresensi = async () => {
    try {
      const token = localStorage.getItem('token');
      const id_pegawai = localStorage.getItem('id_pegawai');
      if (!id_pegawai) {
        console.error('id_pegawai is undefined');
        return;
      }
      const response = await axios.get(`http://localhost:5000/api/data_presensi/presensi/${id_pegawai}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data.map(item => ({
        ...item,
        tanggalPresensi: formatDate(item.tanggal_presensi)
      }));
      setDataPresensi(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredPresensi = dataPresensi.filter((data) =>
    data.nama_pegawai.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPresensi.length / itemsPerPage);
  const currentPageData = filteredPresensi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <p className="text-xl font-bold px-5">Histori Cuti</p>

      <div className="relative py-4 w-full justify-between flex flex-row">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-full h-10 pl-11 pr-4 rounded-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="px-4 text-sm rounded-sm border-[1.5px] border-gray-200 items-center">
        <div className="h-96 md:w-full w-[34rem] max[500px]:w-[24rem] overflow-auto">
          <table className='text-gray-700 min-w-[900px]'>
            <thead className="sticky top-0 bg-white">
              <tr className="border-b-[1.5px]">
                <td className='font-bold py-4'>No.</td>
                <td className='font-bold py-4'>Tanggal</td>
                <td className='font-bold py-4'>Jam Masuk</td>
                <td className='font-bold py-4'>Jam Keluar</td>
                <td className='font-bold py-4'>Total Jam Kerja</td>
              </tr>
            </thead>

            <tbody>
              {currentPageData.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    Tidak ada data presensi untuk ditampilkan
                  </td>
                </tr>
              )}
              {currentPageData.map((data, index) => (
                <tr key={index}>
                  <td className="p-1 pt-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{data.tanggalPresensi}</td>
                  <td>{data.jam_masuk}</td>
                  <td>{data.jam_keluar}</td>
                  <div className='flex-row'>
                    <td>{data.total_jam_kerja}</td>
                    <td>Jam</td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='py-2 justify-end flex flex-row items-center'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}><HiChevronLeft fontSize={18} className='mr-2' /></button>
        <div className='flex gap-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`rounded-sm px-2.5 py-1 flex-1 border-none flex items-center text-xs font-semibold ${currentPage === index + 1 ? 'bg-green-900 text-white' : 'hover:bg-green-900'
                }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}><HiChevronRight fontSize={18} className='ml-2' /></button>
      </div>
    </div>
  )
}

export default HistoriPresensi;
