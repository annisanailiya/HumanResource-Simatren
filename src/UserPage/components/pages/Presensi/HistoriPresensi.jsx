// HistoriPresensi.jsx
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { usePresensi } from './PresensiContext';

function HistoriPresensi() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { dataPresensi } = usePresensi();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLengkapiPresensi = (id) => {
    navigate(`/UserPage/form_presensi/${id}`);
  };

  const filteredPresensi = dataPresensi.filter((data) =>
    data.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.nip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <p className="text-xl font-bold px-5">Data Presensi</p>

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
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {filteredPresensi.map((presensi) => {
                  const isSameDay = new Date(presensi.tanggal).toDateString() === new Date().toDateString();
                  const isComplete = presensi.jam_masuk && presensi.jam_keluar;

                  return (
                    <tr key={presensi.id}>
                      <td className="p-1 pt-2">{presensi.nomor}</td>
                      <td>{presensi.nip}</td>
                      <td>{presensi.nama}</td>
                      <td>{new Date(presensi.tanggal).toLocaleDateString()}</td>
                      <td>{presensi.jam_masuk}</td>
                      <td>{presensi.jam_keluar}</td>
                      <td>
                        {isComplete ? (
                          <span>{presensi.total_jam}</span>
                        ) : (
                          isSameDay && presensi.jam_masuk && !presensi.jam_keluar && (
                            <button
                              onClick={() => handleLengkapiPresensi(presensi.id)}
                              className="text-green-900 underline p-1 text-center"
                            >
                              Lengkapi Presensi
                            </button>
                          )
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoriPresensi;
