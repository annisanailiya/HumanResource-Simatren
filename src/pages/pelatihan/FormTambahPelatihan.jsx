// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function FormTambahPelatihan() {
  return (
    <div>
      <div className='py-8 mr-12 ml-12'>
        <div className="bg-white py-48 rounded-sm border border-gray-200 flex-1 drop-shadow-md ">

          {/* Form Tambah Data Pegawai */}
          <div className="absolute top-6 inset-10 flex gap-2 w-full grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>NIP (Nomor Induk Pegawai)</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan  Nomor Induk Pegawai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Nama Pegawai</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan nama pegawai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Tanggal Mulai</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih tanggal mulai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Tanggal Selesai</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Pilih tanggal selesai"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Nama Kegiatan</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan nama kegiatan"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
              />
            </div>
            <div>
              <div className='flex flex-row mb-2'>
                <span className='text-gray-900 text-sm font-medium'>Deskripsi Kegiatan</span>
                <span className='text-red-700 px-1'>*</span>
              </div>
              <input
                type="text"
                placeholder="Masukkan deskripsi kegiatan"
                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-24 pl-2 rounded-md"
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
