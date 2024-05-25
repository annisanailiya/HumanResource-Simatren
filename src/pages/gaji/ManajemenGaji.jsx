// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniPlus } from "react-icons/hi2";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

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
        id: '1',
        nomor: '2',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '3',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '4',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '5',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '6',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '7',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '8',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '9',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },
    {
        id: '1',
        nomor: '10',
        nip: '19860926201500',
        nama: 'Laela Anggraeni',
        gaji_dasar: 'Rp5000.000',
        tunjangan: 'Rp5000.000',
        potongan: 'Rp500.000',
        pph: '10%',
        total: 'Rp5000.000'
    },

]

function ManajemenGaji() {
    return (
        <div>
            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold">Manajemen Gaji</span>
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
                    <button className="text-white bg-green-900 rounded-sm h-10 py-2 px-10 text-center flex items-center">
                        Tambah Data Gaji
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
                                <td className='font-bold'>Gaji Dasar</td>
                                <td className='font-bold'>Tunjangan</td>
                                <td className='font-bold'>Potongan</td>
                                <td className='font-bold'>PPh</td>
                                <td className='font-bold'>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataGajiPegawai.map((gaji) => (
                                <tr key={gaji.id}>
                                    <td>{gaji.nomor}</td>
                                    <td>{gaji.nip}</td>
                                    <td>{gaji.nama}</td>
                                    <td>{gaji.gaji_dasar}</td>
                                    <td>{gaji.tunjangan}</td>
                                    <td>{gaji.potongan}</td>
                                    <td>{gaji.pph}</td>
                                    <td>{gaji.total}</td>
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

export default ManajemenGaji