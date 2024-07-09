import React, { useEffect, useState } from 'react';
import { HiOutlineSearch , HiChevronRight} from 'react-icons/hi';
import { TbCheck } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { getPegawaiStatus } from '../../utils/status';

function HistoryPelatihan() {
  const [historiPelatihan, setHistoriPelatihan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistoriPelatihan();
  }, []);

  const fetchHistoriPelatihan = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data_pelatihan/pelatihan');
      const data = await response.json();
      const filteredData = data.filter(item => item.status === 'Selesai');
      setHistoriPelatihan(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPelatihan = historiPelatihan.filter((data) =>
    data.nama_pegawai.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.nama_kegiatan.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
      <p className="text-xl font-bold px-5">Histori Pelatihan</p>

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

      <div className="px-4 text-sm rounded-sm border-[1.5px] border-gray-200 items-center overflow-x-auto">
        <div className="h-96 md:w-full w-[34rem] max-[500px]:w-[24rem] overflow-auto">
          <table className='text-gray-700 min-w-[900px]'>
            <thead className="sticky top-0 bg-white">
              <tr className="border-b-[1.5px]">
                <td className='font-bold py-4'>No.</td>
                <td className='font-bold py-4'>NIP</td>
                <td className='font-bold py-4'>Nama Pegawai</td>
                <td className='font-bold py-4'>Penyelenggara</td>
                <td className='font-bold py-4'>Nama Kegiatan</td>
                <td className='font-bold py-4'>Status</td>
                <td className='font-bold py-4'>Sertifikat</td>
                <td className='font-bold py-4'>Action</td>
              </tr>
            </thead>

            <tbody>
              {filteredPelatihan.map((data, index) => (
                <tr key={index}>
                  <td className="p-1 pt-2">{index + 1}</td>
                  <td>{data.nip}</td>
                  <td>{data.nama_pegawai}</td>
                  <td>{data.nama_penyelenggara}</td>
                  <td>{data.nama_kegiatan}</td>
                  <td>{getPegawaiStatus(data.status)}</td>
                  <td className='flex items-center justify-center pt-2'>
                    {data.sertifikat ?
                      <TbCheck fontSize={18} className='text-green-600' />
                      :
                      <IoMdClose fontSize={18} className='text-red-600' />
                    }
                  </td>
                  <td className='font-semibold'>
                    <button onClick={() => navigate(`/AdminPage/detail_history_pelatihan/${data.id_pelatihan}`)} className='flex justify-start items-center'>
                      Detail
                      <HiChevronRight fontSize={18} className='ml-1' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoryPelatihan;
