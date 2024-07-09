import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniPlus } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

function ManajemenGaji() {
  const [dataGaji, setDataGaji] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataGaji();
  }, []);

  const fetchDataGaji = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data_gaji/gaji');
      const result = await response.json();

      if (result && Array.isArray(result)) {
        const data = result.map(item => ({
          ...item,
          bulan_gaji_formatted: formatDate(item.bulan_gaji),
        }));
        setDataGaji(data);
      } else {
        console.error('Unexpected response data format:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGaji = dataGaji.filter((data) =>
    data.nama_pegawai.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.nip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <p className="text-xl font-bold px-5">Manajemen Gaji</p>

      <div className="relative py-4 w-fit md:w-full justify-between flex flex-row">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-2/3 h-10 pl-11 rounded-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className='flex justify-between mx-2 md:mx-10'>
          <HiMiniPlus fontSize={22} className="text-neutral-50 absolute top-1/2 -translate-y-1/2 ml-2" />
          <button onClick={() => navigate('/AdminPage/tambah_data_gaji')} className="font-semibold text-xs text-white bg-green-900 rounded-sm h-10 px-10 w-fit">
            Tambah Data Gaji
          </button>
        </div>
      </div>

      <div className="px-4 text-sm rounded-sm border-[1.5px] border-gray-200 items-center overflow-x-auto">
        <div className="h-96 md:w-full w-[34rem] max-[500px]:w-[24rem] overflow-auto">
          <table className='text-gray-700 min-w-[900px]'>
            <thead className="sticky top-0 bg-white">
              <tr className="border-b-[1.5px]">
                <td className='font-bold py-4'>No.</td>
                <td className='font-bold py-4'>NIP</td>
                <td className='font-bold py-4'>Nama</td>
                <td className='font-bold py-4'>Tanggal</td>
                <td className='font-bold py-4'>Gaji Dasar</td>
                <td className='font-bold py-4'>Tunjangan</td>
                <td className='font-bold py-4'>Potongan</td>
                <td className='font-bold py-4'>Total</td>
              </tr>
            </thead>

            <tbody>
              {filteredGaji.map((data, index) => (
                <tr key={index}>
                  <td className="p-1 pt-2">{index + 1}</td>
                  <td>{data.nip}</td>
                  <td>{data.nama_pegawai}</td>
                  <td>{data.bulan_gaji_formatted}</td>
                  <td>{formatCurrency(data.gaji_dasar)}</td>
                  <td>{formatCurrency(data.tunjangan)}</td>
                  <td>{formatCurrency(data.potongan)}</td>
                  <td>{formatCurrency(data.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className='py-2 justify-end flex flex-row items-center'>
          <button><HiChevronLeft fontSize={18} className='mr-2' /></button>
            <div className='flex gap-4'>
              <BoxWrapper>1</BoxWrapper>
              <BoxWrapper>2</BoxWrapper>
              <BoxWrapper>..</BoxWrapper>
              <BoxWrapper>8</BoxWrapper>
            </div>
         <button><HiChevronRight fontSize={18} className='ml-2' /></button>
        </div> */}
    </div>
  )
}

// function BoxWrapper({ children }) {
//   return <button className="bg-neutral-100 rounded-sm px-2.5 py-1 flex-1 border-none flex items-center text-xs font-semibold hover:bg-green-900 active:bg-green-900 focus:outline-none focus:bg focus:bg-green-900">{children}</button>
// }

export default ManajemenGaji;