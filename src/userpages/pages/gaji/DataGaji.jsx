// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineFileDownload } from "react-icons/md";
import { getStatus } from '../../lib/utils/status'
import { useNavigate } from 'react-router-dom'

const dataGajiPegawai = [
    {
        id: '1',
        nomor: '1',
        bulan: 'September',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '2',
        bulan: 'Oktober',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '3',
        bulan: 'November',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '4',
        bulan: 'Desember',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '5',
        bulan: 'Januari',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '6',
        bulan: 'Februari',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '7',
        bulan: 'Maret',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '8',
        bulan: 'April',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '9',
        bulan: 'Mei',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    },
    {
        id: '1',
        nomor: '10',
        bulan: 'Juni',
        gaji: 'Rp5.000.000',
        tunjangan: 'Rp5.000.000',
        potongan: 'Rp500.000',
        total: 'Rp9.500.000',
        status: 'LUNAS',
        action: 'Download Slip'
    }
]

function DataGaji() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold">Detail Penggajian</span>
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
                                <td className='font-bold'>Bulan</td>
                                <td className='font-bold'>Gaji</td>
                                <td className='font-bold'>Tunjangan</td>
                                <td className='font-bold'>Potongan</td>
                                <td className='font-bold'>Total</td>
                                <td className='font-bold'>Status</td>
                                <td className='font-bold'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataGajiPegawai.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.nomor}</td>
                                    <td>{data.bulan}</td>
                                    <td>{data.gaji}</td>
                                    <td>{data.tunjangan}</td>
                                    <td>{data.potongan}</td>
                                    <td>{data.total}</td>
                                    <td>{getStatus(data.status)}</td>
                                    <td className='font-semibold'>
                                        <button onClick={() => navigate('#')} className='underline flex justify-start items-center'>
                                            {data.action}
                                            <MdOutlineFileDownload fontSize={20} className='ml-2' />
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
export default DataGaji