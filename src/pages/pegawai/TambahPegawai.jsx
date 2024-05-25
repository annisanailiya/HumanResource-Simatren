// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function TambahPegawai() {
  return (
    <div>

      <div className='py-3'>
        <span className="text-2xl text-gray-950 font-semibold flex justify-center">Tambah Data Pegawai</span>
      </div>

      <div className='py-8 mr-12 ml-12'>
        <div className="bg-white py-48 rounded-sm border border-gray-200 flex-1 drop-shadow-md ">

          {/* Form Tambah Data Pegawai */}
          <div className="absolute top-6 inset-10 flex gap-4 w-full grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Nama Awal</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan nama awal"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Nama Akhir</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan nama akhir"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>NIP (Nomor Induk Pegawai)</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan Nomor Induk Pegawai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Jenis Kelamin</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih jenis kelamin"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Posisi</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih posisi"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Status</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih status"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Email</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan email"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Password</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan password"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Konfirmasi */}
      <div className='flex gap-8 flex-row justify-end'>
        <button className="text-black bg-gray-400 rounded-sm h-9 px-4 text-center text-sm font-semibold flex items-center">Batal</button>
        <button className="text-white bg-green-900 rounded-sm h-9 px-4 text-center text-sm font-semibold flex items-center mr-12">Simpan</button>
      </div>

    </div>
  )
}
