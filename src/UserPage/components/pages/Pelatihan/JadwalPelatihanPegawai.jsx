import React, { useEffect, useState } from 'react';
import { HiOutlineSearch, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import axios from 'axios';
import { formatDate } from '../../utils/formatDate';
import { useNavigate } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";

function JadwalPelatihanPegawai() {
    const [dataPelatihan, setDataPelatihan] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchDataPelatihan();
    }, []);

    const fetchDataPelatihan = async () => {
        try {
            const token = localStorage.getItem('token');
            const id_pegawai = localStorage.getItem('id_pegawai');
            if (!id_pegawai) {
                console.error('id_pegawai is undefined');
                return;
            }
            const response = await axios.get(`http://localhost:5000/api/data_pelatihan/jadwalpelatihan/${id_pegawai}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = response.data
                .filter(item => item.status === 'Belum Dimulai')
                .map(item => ({
                    ...item,
                    tanggalMulai: formatDate(item.tanggal_mulai),
                    tanggalSelesai: formatDate(item.tanggal_selesai)
                }));
            setDataPelatihan(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleButtonClick = (id_pelatihan) => {
        updateStatusPelatihan(id_pelatihan, 'Proses');
        setShowPopup(true);
    };

    const updateStatusPelatihan = async (id_pelatihan, status) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/data_pelatihan/pelatihan/status/${id_pelatihan}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            // fetchDataPelatihan();
            setShowPopup(true);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate('/UserPage/histori_pelatihan_pegawai');
    };

    const filteredPelatihan = dataPelatihan.filter((data) =>
        data.nama_kegiatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.nama_penyelenggara.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Hitung total halaman berdasarkan data yang sudah difilter
    const totalPages = Math.ceil(filteredPelatihan.length / itemsPerPage);

    // Potong data berdasarkan halaman saat ini
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageData = filteredPelatihan.slice(startIndex, startIndex + itemsPerPage);

    // Fungsi untuk navigasi halaman
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const BoxWrapper = ({ children, isActive, onClick }) => (
        <button
            className={`rounded-sm px-2.5 py-1 flex-1 border-none flex items-center text-xs font-semibold ${isActive ? 'bg-green-900 text-white' : 'hover:bg-green-900'
                }`}
            onClick={onClick}
        >
            {children}
        </button>
    );

    return (
        <div>
            <p className="text-xl font-bold px-5">Jadwal Pelatihan</p>

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
                                    <td className='font-bold py-4'>Nama Penyelenggara</td>
                                    <td className='font-bold py-4'>Nama Kegiatan</td>
                                    <td className='font-bold py-4'>Tanggal Mulai</td>
                                    <td className='font-bold py-4'>Tanggal Selesai</td>
                                    <td className='font-bold py-4'>Action</td>

                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData.length === 0 && (
                                    <tr>
                                        <td colSpan="10" className="text-center py-4">
                                            Tidak ada jadwal pelatihan untuk ditampilkan.
                                        </td>
                                    </tr>
                                )}
                                {currentPageData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="p-1 pt-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td>{data.nama_penyelenggara}</td>
                                        <td>{data.nama_kegiatan}</td>
                                        <td>{data.tanggalMulai}</td>
                                        <td>{data.tanggalSelesai}</td>
                                        <td className='font-semibold text-xs'>
                                            <button
                                                className='flex justify-start items-center bg-green-400 px-3 py-1 rounded-sm'
                                                onClick={() => handleButtonClick(data.id_pelatihan)}
                                            >
                                                Oke
                                            </button>
                                        </td>
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
                            <BoxWrapper
                                key={index}
                                isActive={currentPage === index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </BoxWrapper>
                        ))}
                    </div>
                    <button onClick={goToNextPage} disabled={currentPage === totalPages}><HiChevronRight fontSize={18} className='ml-2' /></button>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="text-green-900 font-medium bg-white p-6 rounded-md shadow-lg text-sm w-96 relative">
                        <IoIosClose
                            fontSize={24}
                            className="absolute top-1 right-1 cursor-pointer text-red-700"
                            onClick={handleClosePopup}
                        />
                        <p>Pelatihan berhasil dikonfirmasi!</p>
                        <p>Silahkan untuk melaksanakan pelatihan tersebut dan</p>
                        <p>Kirim bukti pelaksanaan setelah pelatihan selesai!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default JadwalPelatihanPegawai;