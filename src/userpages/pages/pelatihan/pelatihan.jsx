import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Pelatihan = () => {
    const navigate = useNavigate()
    const [namaKegiatan, setNamaKegiatan] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [buktiKegiatan, setBuktiKegiatan] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data form
        console.log({ namaKegiatan, tanggalMulai, tanggalSelesai, buktiKegiatan });
        // Reset form setelah submit
        setNamaKegiatan('');
        setTanggalMulai('');
        setTanggalSelesai('');
        setBuktiKegiatan('');
        // Menampilkan pop up
        setShowPopup(true);
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
                navigate('/user/histori_pelatihan_user');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    return (
        <div className="px-5">
            <div className='py-4 justify-between flex flex-row'>
                <span className="text-2xl text-gray-950 font-semibold">Pelaporan Pelatihan</span>
                <button onClick={() => navigate('/user/histori_pelatihan_user')} className="text-white bg-green-900 rounded-md h-10 py-2 px-4 text-center flex items-center">
                    Lihat Histori
                </button>
            </div>

            <div className='md:w-[100%] w-[90%] mx-auto h-full flex flex-col py-5 justify-between'>
                <div className="relative rounded-sm border border-gray-900 shadow-lg p-10">
                    <div className='font-semibold mb-6'>Unggah Bukti Pelatihan</div>

                    {/* Form Tambah Data Gaji */}
                    <form className="space-y-6">
                        <div>
                            <table className="w-full">
                                <tr>
                                    <td className="p-2 text-sm">Nama Kegiatan<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            name="nama_kegiatan"
                                            id="nama_kegiatan"
                                            value={namaKegiatan}
                                            onChange={(e) => setNamaKegiatan(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder=""
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 text-sm">Tanggal Mulai<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="date"
                                            name="tgl_mulai"
                                            id="tgl_mulai"
                                            value={tanggalMulai}
                                            onChange={(e) => setTanggalMulai(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="23/5/2024"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 text-sm">Tanggal Selesai<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="date"
                                            name="tgl_selesai"
                                            id="tgl_selesai"
                                            value={tanggalSelesai}
                                            onChange={(e) => setTanggalSelesai(e.target.value)}
                                            className="bg-gray-50 border-[1.5px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="24/5/2024"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 text-sm">Bukti Kegiatan<span className="text-red-600">*</span></td>
                                    <td className="p-2">:</td>
                                    <td className="p-2">
                                        <input
                                            type="file"
                                            name="bukti_kegiatan"
                                            id="bukti_kegiatan"
                                            value={buktiKegiatan}
                                            onChange={(e) => setBuktiKegiatan(e.target.value)}
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
                        <p>Pelaporan Pelatihan Berhasil Dikirimkan!</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Pelatihan