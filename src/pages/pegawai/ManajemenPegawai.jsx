// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniPlus } from "react-icons/hi2";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { getPegawaiStatus } from '../../lib/utils/status';
import { useNavigate } from 'react-router-dom';

const dataPegawai = [
    {
        id: '1',
        nomor: '1',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'AKTIF',
        action: 'Detail'
    },
    {
        id: '2',
        nomor: '2',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'AKTIF',
        action: 'Detail'
    },
    {
        id: '3',
        nomor: '3',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'TIDAK AKTIF',
        action: 'Detail'
    },
    {
        id: '4',
        nomor: '4',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'TIDAK AKTIF',
        action: 'Detail'
    },
    {
        id: '5',
        nomor: '5',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'CUTI',
        action: 'Detail'
    },
    {
        id: '6',
        nomor: '6',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'tidak tau',
        action: 'Detail'
    },
    {
        id: '1',
        nomor: '7',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'AKTIF',
        action: 'Detail'
    },
    {
        id: '2',
        nomor: '8',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'AKTIF',
        action: 'Detail'
    },
    {
        id: '3',
        nomor: '9',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'TIDAK AKTIF',
        action: 'Detail'
    },
    {
        id: '4',
        nomor: '10',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'TIDAK AKTIF',
        action: 'Detail'
    },
    {
        id: '5',
        nomor: '11',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'CUTI',
        action: 'Detail'
    },
    {
        id: '6',
        nomor: '12',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'perempuan',
        role: 'guru',
        status_pegawai: 'tidak tau',
        action: 'Detail'
    }
]

function ManajemenPegawai() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold">Manajemen Pegawai</span>
            </div>
            <div className="relative py-4 justify-between flex flex-row">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-[48rem] h-10 pl-11 pr-4 rounded-sm"
                />
                <div className='flex justify-between'>
                    <HiMiniPlus fontSize={22} className="text-neutral-50 absolute top-1/2 -translate-y-1/2 ml-4" />
                    <button onClick={() => navigate('/formtambahpegawai')} className="text-white bg-green-900 rounded-sm h-10 py-2 px-10 text-center flex items-center">
                        Tambah Pegawai
                    </button>
                </div>
            </div>

            <div className="bg-white px-4 rounded-sm border border-gray-200 flex-1 items-center">
                <div className="mt-3 hover:scrollbar-thumb-gray-400 active:scrollbar-thumb-gray-400 h-[26rem] scrollbar-w-2 scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-scroll">
                    <table className='w-full text-gray-700 '>
                        <thead>
                            <tr>
                                <td className='font-bold'>No.</td>
                                <td className='font-bold'>NIP</td>
                                <td className='font-bold'>Nama</td>
                                <td className='font-bold'>Gender</td>
                                <td className='font-bold'>Role</td>
                                <td className='font-bold'>Status</td>
                                <td className='font-bold'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPegawai.map((data) => (
                                <tr key={data.nomor}>
                                    <td>{data.nomor}</td>
                                    <td>{data.nip}</td>
                                    <td>{data.nama}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.role}</td>
                                    <td>{getPegawaiStatus(data.status_pegawai)}</td>
                                    <td className='font-semibold'>
                                        <button onClick={() => navigate('/formdetailpegawai')} className='flex justify-start items-center'>
                                            {data.action}
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

export default ManajemenPegawai