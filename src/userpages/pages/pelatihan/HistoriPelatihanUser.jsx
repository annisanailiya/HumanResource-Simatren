// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { getStatus } from '../../lib/utils/status'

const dataPresensi = [
    {
        id: '1',
        nomor: '1',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '2',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '3',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '4',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '5',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '6',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '7',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '8',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '9',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    },
    {
        id: '1',
        nomor: '10',
        nip: '1802137672812',
        nama_kegiatan: 'Pelatihan Mengajar',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        status: 'SELESAI'
    }  
]

function HistoriPelatihanUser() {
    return (
        <div>
            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold">Histori Pelatihan</span>
            </div>
            <div className="relative py-4 justify-between flex flex-row">
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
                                <td className='font-bold'>Nama Kegiatan</td>
                                <td className='font-bold'>Tanggal Mulai</td>
                                <td className='font-bold'>Tanggal Selesai</td>
                                <td className='font-bold'>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPresensi.map((pelatihan) => (
                                <tr key={pelatihan.id}>
                                    <td>{pelatihan.nomor}</td>
                                    <td>{pelatihan.nip}</td>
                                    <td>{pelatihan.nama_kegiatan}</td>
                                    <td>{new Date(pelatihan.tgl_mulai).toLocaleDateString()}</td>
                                    <td>{new Date(pelatihan.tgl_selesai).toLocaleDateString()}</td>
                                    <td>{getStatus(pelatihan.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HistoriPelatihanUser