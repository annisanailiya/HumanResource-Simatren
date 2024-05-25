import { FaUserCircle } from "react-icons/fa";
import { getPegawaiStatus } from "../../lib/utils/status";

const detailPegawai = [
    {
        id: '1',
        nip: '19860926201500',
        nama: 'Shirley A. Lape',
        gender: 'Perempuan',
        ttl: 'Bandung, 23 Mei 2000',
        alamat: 'Jalan Telekomunikasi No.54, Deyeuhkolot',
        no_telp: '0819373627636',
        email: 'user@gmail.com',
        role: 'Guru',
        status_pegawai: 'AKTIF',
    },
]

export default function DetailPegawai() {
    return (
        <div>

            <div className='py-0'>
                <span className="text-2xl text-gray-950 font-semibold flex justify-center">Detail Pegawai</span>
            </div>

            <div className='py-4 mr-12 ml-12'>
                <div className="bg-white py-60 rounded-sm border border-gray-200 flex-1 drop-shadow-md ">

                    <div className="absolute top-10 left-12 right-12 bg-gray-100 h-56 w-56 flex-1 shadow-md shadow-gray-400">
                        <FaUserCircle fontSize={128} className=" absolute top-4 text-gray-400 w-full flex justify-center" />
                        <div className="absolute top-40 text-sm w-full flex justify-center">
                            <p>{detailPegawai.map((data) => (data.nama))}</p>
                        </div>
                        <div className="absolute top-48 text-sm w-full flex flex-row justify-center">
                            <p>NIP.</p>
                            <p>{detailPegawai.map((data) => (data.nip))}</p>
                        </div>
                    </div>

                    <div className="absolute top-[17.5rem] left-12">
                        <div className="flex flex-row w-56 justify-center">
                            <p className="px-2 text-sm">Status :</p>
                            <p>{detailPegawai.map((data) => getPegawaiStatus(data.status_pegawai))}</p>
                        </div>
                    </div>

                    <div className="absolute top-5 left-72">
                        <table className='table-fixed border-separate border-spacing-2 text-gray-950 text-sm'>
                            <tbody>
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Nama Lengkap</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.nama}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Nomor Induk Pegawai</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.nip}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Tempat, Tanggal Lahir</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.ttl}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Jenis Kelamin</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.gender}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Alamat</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.alamat}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Nomor Telepon</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.no_telp}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Email</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.email}</td>
                                    </tr>
                                ))}
                                {detailPegawai.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-opacity-0 px-8">Posisi</td>
                                        <td className="border border-opacity-0 px-8 text-end">:</td>
                                        <td className="border border-gray-400 w-[20rem] rounded-md">{data.role}</td>
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
