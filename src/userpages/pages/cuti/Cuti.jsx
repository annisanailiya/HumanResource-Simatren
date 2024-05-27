import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cuti = () => {
    const navigate = useNavigate()
    const [tglMulai, setTglMulai] = useState('');
    const [tglSelesai, setTglSelesai] = useState('');
    const [alasanCuti, setAlasanCuti] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data form
        console.log({ tglMulai, tglSelesai, alasanCuti });
        // Reset form setelah submit
        setTglMulai('');
        setTglSelesai('');
        setAlasanCuti('');
        // Menampilkan pop up
        setShowPopup(true);
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
                navigate('/user/historicuti');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    return (
        <div className="px-5">
            <div className='py-4 justify-between flex flex-row'>
                <span className="text-2xl text-gray-950 font-semibold">Pengajuan Cuti</span>
                <button onClick={() => navigate('/user/historicuti')} className="text-white bg-green-900 rounded-md h-10 py-2 px-4 text-center flex items-center">
                    Lihat Histori
                </button>
            </div>

            <div className='md:w-[100%] w-[90%] mx-auto h-full flex flex-col py-5 justify-between'>
                <div className="relative rounded-sm border border-gray-900 shadow-lg p-10">
                    <div className='font-semibold mb-6'>Form Pengajuan Cuti</div>

                    {/* Form Tambah Data Gaji */}
                    <form className="space-y-6">
                        <div>
                            <table className="w-full">
                                <tr>
                                    <td className="p-2 text-sm">Tanggal Mulai Cuti<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="date"
                                            name="tgl_mulai"
                                            id="tgl_mulai"
                                            value={tglMulai}
                                            onChange={(e) => setTglMulai(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="21/5/2024"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 text-sm">Tanggal Selesai Cuti<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="date"
                                            name="tgl_selesai"
                                            id="tgl_selesai"
                                            value={tglSelesai}
                                            onChange={(e) => setTglSelesai(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="23/5/2024"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 text-sm">Alasan Cuti<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            name="alasan_cuti"
                                            id="alasan_cuti"
                                            value={alasanCuti}
                                            onChange={(e) => setAlasanCuti(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder=""
                                            required
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="flex flex-row px-3 justify-end gap-4 mx-auto">
                            <button
                                type="button"
                                onClick={() => navigate('#')}
                                className="w-28 text-black bg-gray-300 hover:bg-green-900 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-28 text-black bg-gray-300 hover:bg-green-900 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white font-semibold text-green-900 p-5 rounded-md shadow-lg">
                        <p>Pengajuan Cuti Berhasil Dikirimkan!</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cuti