import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniPlus } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const dataGajiPegawai = [
  {
      id: '1',
      nomor: '1',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '2',
      nomor: '2',
      nip: '547654543',
      nama: 'Laela Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '3',
      nomor: '3',
      nip: '65465765',
      nama: 'Laela Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '4',
      nomor: '4',
      nip: '56576',
      nama: 'Laela Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '5',
      nomor: '5',
      nip: '876587655',
      nama: 'Laela Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '6',
      nomor: '6',
      nip: '19860926201500',
      nama: 'chani',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '7',
      nomor: '7',
      nip: '19860926201500',
      nama: 'do',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '8',
      nomor: '8',
      nip: '19860926201500',
      nama: 'pcy',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '9',
      nomor: '9',
      nip: '6545646756',
      nama: 'Jennie',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  },
  {
      id: '10',
      nomor: '10',
      nip: '19860926201500',
      nama: 'Lisa Anggraeni',
      gaji_dasar: 'Rp5000.000',
      tunjangan: 'Rp5000.000',
      potongan: 'Rp500.000',
      pph: '10%',
      total: 'Rp5000.000'
  }, 
]

function ManajemenGaji() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGaji = dataGajiPegawai.filter((data) =>
    data.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
          <button onClick={() => navigate('/AdminPage/tambah_data_gaji')} className="text-xs text-white bg-green-900 rounded-sm h-10 px-10 w-fit">
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
                <td className='font-bold py-4'>Gaji Dasar</td>
                <td className='font-bold py-4'>Tunjangan</td>
                <td className='font-bold py-4'>Potongan</td>
                <td className='font-bold py-4'>PPh</td>
                <td className='font-bold py-4'>Total</td>
              </tr>
            </thead>

            <tbody>
              {filteredGaji.map((gaji) => (
                <tr key={gaji.id}>
                  <td className="p-1 pt-2">{gaji.nomor}</td>
                  <td>{gaji.nip}</td>
                  <td>{gaji.nama}</td>
                  <td>{gaji.gaji_dasar}</td>
                  <td>{gaji.tunjangan}</td>
                  <td>{gaji.potongan}</td>
                  <td className="pr-4">{gaji.pph}</td>
                  <td>{gaji.total}</td>
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
