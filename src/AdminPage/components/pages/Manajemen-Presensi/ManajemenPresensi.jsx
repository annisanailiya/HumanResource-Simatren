import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'
// import { HiChevronRight } from "react-icons/hi2";

const dataPresensi = [
  {
      id: '1',
      nomor: '1',
      nip: '777777777777',
      nama: 'annisa',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '2',
      nomor: '2',
      nip: '8888888888',
      nama: 'lela',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '3',
      nomor: '3',
      nip: '735765656',
      nama: 'nisa',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '4',
      nomor: '4',
      nip: '5437645',
      nama: 'laaaa',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '5',
      nomor: '5',
      nip: '19860926201500',
      nama: 'nay',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '6',
      nomor: '6',
      nip: '19860926201500',
      nama: 'annis',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '7',
      nomor: '7',
      nip: '19860926201500',
      nama: 'anis',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '8',
      nomor: '8',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
  {
      id: '9',
      nomor: '9',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08.00',
      jam_keluar: '17.00',
      total_jam: '9 jam'
  },
]

function ManajemenPresensi() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPresensi = dataPresensi.filter((data) =>
    data.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.nip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <p className="text-xl font-bold px-5">Manajemen Presensi</p>

      <div>
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
                  <td className='font-bold py-4'>Nama</td>
                  <td className='font-bold py-4'>Tanggal</td>
                  <td className='font-bold py-4'>Jam Masuk</td>
                  <td className='font-bold py-4'>Jam Keluar</td>
                  <td className='font-bold py-4'>Total Jam Kerja</td>
                </tr>
              </thead>

              <tbody>
                {filteredPresensi.map((presensi) => (
                <tr key={presensi.id}>
                  <td className="p-1 pt-2">{presensi.nomor}</td>
                  <td>{presensi.nip}</td>
                  <td>{presensi.nama}</td>
                  <td>{new Date(presensi.tanggal).toLocaleDateString()}</td>
                  <td>{presensi.jam_masuk}</td>
                  <td>{presensi.jam_keluar}</td>
                  <td>{presensi.total_jam}</td>
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
    </div>
  )
}

// eslint-disable-next-line react/prop-types
// function BoxWrapper({ children }) {
//     return (
//     <button className="bg-neutral-100 rounded-sm px-2.5 py-1 flex-1 border-none flex items-center text-xs font-semibold hover:bg-green-900 active:bg-green-900 focus:outline-none focus:bg focus:bg-green-900">{children}</button>
//     )
// }

export default ManajemenPresensi;
