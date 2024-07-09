import React, { useEffect, useState } from 'react';
import { HiOutlineSearch, HiChevronRight } from 'react-icons/hi'
import { HiMiniPlus } from "react-icons/hi2";
import { getPegawaiStatus } from '../../utils/status';
import { useNavigate } from 'react-router-dom';

function ManajemenPegawai() {
    const [dataPegawai, setDataPegawai] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDataPegawai();
    }, []);

    const fetchDataPegawai = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data_pegawai/pegawai');
            const data = await response.json();
            setDataPegawai(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPegawai = dataPegawai.filter((data) =>
        data.nama_pegawai.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.nip.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <p className="text-xl font-bold px-5">Manajemen Pegawai</p>
            <div>
                <div className="relative py-4 w-fit md:w-full justify-between flex flex-row">
                    {/* Form pencarian */}
                    <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-2/3 h-10 pl-11 rounded-sm"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {/* Tombol tambah pegawai */}
                    <div className='flex justify-between mx-2 md:mx-10'>
                        <HiMiniPlus fontSize={22} className="text-neutral-50 absolute top-1/2 -translate-y-1/2 ml-2" />
                        <button onClick={() => navigate('/AdminPage/tambah_data_pegawai')} className="font-semibold text-xs text-white bg-green-900 rounded-sm h-10 px-10 w-fit">
                            Tambah Pegawai
                        </button>
                    </div>
                </div>

                {/* Tabel data pegawai */}
                <div className="px-4 text-sm rounded-sm border-[1.5px] border-gray-200 items-center overflow-x-auto">
                    <div className="h-96 md:w-full w-[34rem] max-[500px]:w-[24rem] overflow-auto">
                        <table className='text-gray-700 min-w-[900px]'>
                            <thead className="sticky top-0 bg-white">
                                <tr className="border-b-[1.5px]">
                                    <td className='font-bold py-4'>No.</td>
                                    <td className='font-bold py-4'>NIP</td>
                                    <td className='font-bold py-4'>Nama</td>
                                    <td className='font-bold py-4'>Gender</td>
                                    <td className='font-bold py-4'>Role</td>
                                    <td className='font-bold py-4'>Status</td>
                                    <td className='font-bold py-4'>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPegawai.map((data, index) => (
                                    <tr key={index}>
                                        <td className="p-1 pt-2">{index + 1}</td>
                                        <td>{data.nip}</td>
                                        <td>{data.nama_pegawai}</td>
                                        <td>{data.jenis_kelamin}</td>
                                        <td className='pr-4'>{data.role}</td>
                                        <td>{getPegawaiStatus(data.status_kepegawaian)}</td>
                                        <td className='font-semibold'>
                                            <button onClick={() => navigate(`/AdminPage/detail_pegawai/${data.id_pegawai}`)} className='flex justify-start items-center'>
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
        </div>
    );
}

export default ManajemenPegawai;