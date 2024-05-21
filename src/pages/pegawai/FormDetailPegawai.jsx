// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function FormDetailPegawai() {
    return (
        <div>
            <div className='py-8 mr-12 ml-12'>
                <div className="bg-white py-48 rounded-sm border border-gray-200 flex-1 drop-shadow-md ">

                    {/* Form Tambah Data Pegawai */}
                    <div className="absolute top-6 inset-4 flex gap-2 w-full grid grid-cols-2">
                        <div>
                            <div className='flex flex-row mb-2'>
                                <span className='text-gray-900 text-sm font-medium'>Nama Akhir :</span>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Masukkan nama awal"
                                className="text-sm focus:outline-gray-400 active:outline-gray-400 border border-gray-300 w-[24rem] h-10 pl-2 rounded-md"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
