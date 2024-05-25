import { getPegawaiStatus } from "../../lib/utils/status"

const detailPegawai = [
    {
        id: '1',
        nip: '19860926201500',
        nama: 'Albert Eisten',
        tgl_mulai: '2024-05-21T05:24:00',
        tgl_selesai: '2024-05-22T05:24:00',
        nama_kegiatan: 'Pelatihan Mengajar',
        deskrisi_kegiatan: 'Lorem Ipsum is simply dummy text.',
        status: 'SELESAI',
        bukti: '-',
    }
]

export default function DetailHistoriPelatihan() {
    return (
        <div>

            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold flex justify-center">Detail Pelatihan</span>
            </div>

            <div className='py-4 mr-36 ml-36'>
                <div className="bg-white py-60 rounded-sm border border-gray-200 flex-1 drop-shadow-md h-[26rem] scrollbar-w-2 overflow-y-scroll">
                    <div className="absolute top-5 w-full flex justify-center">
                        <table className='table-fixed border-separate border-spacing-2 text-gray-950 text-sm'>
                            <tbody>
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Nomor Induk Pegawai</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{pelatihan.nip}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Nama Pegawai</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{pelatihan.nama}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Tanggal Mulai</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{new Date(pelatihan.tgl_mulai).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Tanggal Selesai</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{new Date(pelatihan.tgl_selesai).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Nama Kegiatan</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{pelatihan.nama_kegiatan}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Deskripsi Kegiatan</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{pelatihan.deskrisi_kegiatan}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Status</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-opacity-0">{getPegawaiStatus(pelatihan.status)}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((pelatihan) => (
                                    <tr key={pelatihan.id}>
                                        <td className="border border-opacity-0">Bukti Pelaksanaan</td>
                                        <td className="border border-opacity-0 text-end">:</td>
                                        <td className="border border-opacity-0">{pelatihan.bukti}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
