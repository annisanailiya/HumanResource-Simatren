// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const dataPelatihan = [
    {
        id: '1',
        nomor: '1',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '2',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '3',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '4',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '5',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '6',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '7',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '8',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '9',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI',
        action: 'Detail'
    }
]

function HistoriPelatihan() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold">Histori Pelatihan</span>
            </div>
            <div className="relative py-4 flex flex-row">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-full h-10 pl-11 pr-4 rounded-sm"
                />
            </div>

            <div className="bg-white px-4 rounded-sm border border-gray-200 flex-1 items-center">
                <div className="mt-3 hover:scrollbar-thumb-gray-400 active:scrollbar-thumb-gray-400 h-[26rem] scrollbar-w-2 scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-scroll">
                    <table className='w-full text-gray-700 '>
                        <thead>
                            <tr>
                                <td className='font-bold'>No.</td>
                                <td className='font-bold'>NIP</td>
                                <td className='font-bold'>Nama</td>
                                <td className='font-bold'>Nama Kegiatan</td>
                                <td className='font-bold'>Tanggal Mulai</td>
                                <td className='font-bold'>Tanggal Selesai</td>
                                <td className='font-bold'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPelatihan.map((pelatihan) => (
                                <tr key={pelatihan.id}>
                                    <td>{pelatihan.nomor}</td>
                                    <td>{pelatihan.nip}</td>
                                    <td>{pelatihan.nama}</td>
                                    <td>{pelatihan.kegiatan}</td>
                                    <td>{new Date(pelatihan.tgl_mulai).toLocaleDateString()}</td>
                                    <td>{new Date(pelatihan.tgl_selesai).toLocaleDateString()}</td>
                                    <td className='font-semibold'>
                                        <button onClick={() => navigate('/detailhistori')} className='flex justify-start items-center'>
                                            {pelatihan.action}
                                            <HiChevronRight fontSize={18} className='ml-2' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='py-2 justify-end flex flex-row items-center'>
                <button><HiChevronLeft fontSize={18} className='mr-2' /></button>
                <div className='flex gap-4'>
                    <BoxWrapper>1</BoxWrapper>
                    <BoxWrapper>2</BoxWrapper>
                    <BoxWrapper>..</BoxWrapper>
                    <BoxWrapper>8</BoxWrapper>
                </div>
                <button><HiChevronRight fontSize={18} className='ml-2' /></button>

            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function BoxWrapper({ children }) {
    return <button className="bg-neutral-100 rounded-sm px-2.5 py-1 flex-1 border-none flex items-center text-xs font-semibold hover:bg-green-900 active:bg-green-900 focus:outline-none focus:bg focus:bg-green-900">{children}</button>
}

export default HistoriPelatihan