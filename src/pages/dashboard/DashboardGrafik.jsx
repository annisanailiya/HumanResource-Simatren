// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function DashboardGrafik() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="pl-0 space-y-4">
                    <span className="text-lg text-gray-700 font-semibold">Pegawai Aktif</span>
                    <div className="flex items-start space-x-10">
                        <span className="text-l text-gray-700 font-semibold">120 Orang/127 Orang</span>
                        <span className="text-sm text-green-500 pl-2">80%</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="pl-0 space-y-4">
                    <span className="text-lg text-gray-700 font-semibold">Presensi</span>
                    <div className="flex items-start space-x-10">
                        <span className="text-l text-gray-700 font-semibold">120 Orang/127 Orang</span>
                        <span className="text-sm text-green-500 pl-2">80%</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="pl-0 space-y-4">
                    <span className="text-lg text-gray-700 font-semibold">Pegawai Cuti</span>
                    <div className="flex items-start space-x-10">
                        <span className="text-l text-gray-700 font-semibold">120 Orang/127 Orang</span>
                        <span className="text-sm text-red-500 pl-2">80%</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-10 flex-1 border border-gray-200 flex items-center shadow-md">{children}</div>
}