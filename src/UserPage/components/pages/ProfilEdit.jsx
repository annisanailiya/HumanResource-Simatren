import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import axios from 'axios';
import moment from 'moment-timezone';

const ProfilEdit = () => {
    const [profil, setProfil] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [showPopupEdit, setShowPopupEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [originalPassword, setOriginalPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [showPopupFoto, setShowPopupFoto] = useState(false);

    //Menampilkan Data Profil
    const fetchProfil = async () => {
        try {
            const token = localStorage.getItem('token');
            const id_pegawai = localStorage.getItem('id_pegawai');
            if (!id_pegawai) {
                console.error('id_pegawai is undefined');
                return;
            }
            const response = await axios.get(`http://localhost:5000/api/data_pegawai/pegawai/profil/${id_pegawai}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = response.data;
            if (data.tanggal_lahir) {
                data.tanggal_lahir = moment.tz(data.tanggal_lahir, 'Asia/Jakarta').format('YYYY-MM-DD');
            }
            setProfil(data);
            setOriginalPassword(data.password);
            // setOriginalPassword(response.data.originalPassword);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        fetchProfil();
    }, []);

    //Mengupload Foto Profil
    const uploadFotoProfil = async () => {
        const id_pegawai = localStorage.getItem('id_pegawai');
        const formData = new FormData();
        formData.append('foto_profil', selectedFile);
        try {
            const response = await axios.post(`http://localhost:5000/api/data_pegawai/pegawai/upload-foto/${id_pegawai}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Foto profil berhasil diunggah:', response.data);
            setShowPopupFoto(true);
            fetchProfil(); // Refresh profil setelah mengunggah foto
        } catch (error) {
            console.error('Error uploading profile photo:', error);
        }
    };

    useEffect(() => {
        if (selectedFile) {
            uploadFotoProfil();
        }
    }, [selectedFile]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleIconClick = () => {
        document.getElementById('fileInput').click();
    };

    useEffect(() => {
        if (showPopupFoto) {
            const timer = setTimeout(() => {
                setShowPopupFoto(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showPopupFoto]);

    //Mengedit Data Profil
    const updateProfil = async () => {
        const token = localStorage.getItem('token');
        const id_pegawai = localStorage.getItem('id_pegawai');
        if (!id_pegawai) {
            console.error('id_pegawai is undefined');
            return;
        }
        const updatedProfil = {
            ...profil,
            tanggal_lahir: moment(profil.tanggal_lahir).format('YYYY-MM-DD'),
            password: profil.password === originalPassword ? '' : profil.password
        };

        try {
            const response = await axios.put(`http://localhost:5000/api/data_pegawai/pegawai/profil/${id_pegawai}`, updatedProfil, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Profil berhasil diperbarui:', response.data);
            setShowPopupEdit(true);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfil((prevProfil) => ({
            ...prevProfil,
            [name]: value
        }));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEditClick = () => {
        if (isEditable) {
            updateProfil();
        }
        setIsEditable(!isEditable);
    };

    useEffect(() => {
        if (showPopupEdit) {
            const timer = setTimeout(() => {
                setShowPopupEdit(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showPopupEdit]);


    return (
        <div>
            <div className="relative py-4 flex items-center justify-between w-full">
                <p className="text-xl font-bold mb-4 px-5">Profil</p>

                <div className="absolute right-4">
                    <button
                        type="button"
                        onClick={handleEditClick}
                        className="w-fit text-black bg-gray-300 hover:bg-green-900 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        {isEditable ? 'Simpan' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className="box-border rounded-sm border border-gray-300 flex-1 shadow-lg overflow-auto">
                <div className="flex flex-row py-3 px-5 pt-2 border-t border-white">
                    <div className="flex flex-row py-3 px-5 pt-2 border-t border-white">
                        {/* Upload Foto Profil */}
                        <div className="relative flex flex-col justify-center items-center border border-gray-400 rounded-full w-24 h-24">
                            {profil.foto_profil ? (
                                <img
                                    src={`data:image/${profil.foto_profil.type};base64,${profil.foto_profil.data}`}
                                    alt="Foto Profil"
                                    className="border border-gray-400 rounded-full w-24 h-24"
                                />
                            ) : (
                                <FaUserCircle className="text-8xl text-gray-400" />
                            )}
                            <FaCirclePlus
                                className="absolute bottom-0 right-0 text-2xl text-green-900 mb-3 mr-1 transform translate-x-2 translate-y-2 cursor-pointer"
                                onClick={handleIconClick}
                            />
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                accept=".jpg, .jpeg, .png"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="py-7">
                        <p className="text-xl font-bold">{profil.nama_pegawai || 'S!MATREN'}</p>
                        <p className="text-md font-thin">NIP. {profil.nip}</p>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="flex px-6 pt-4 text-xs font-thin">INFORMASI PRIBADI</h1>
                    <table className='w-full border-separate px-10 py-3 text-gray-950 text-sm'>
                        <tbody>
                            <tr>
                                <td>Nama Lengkap</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="text"
                                        name="nama_pegawai"
                                        value={profil.nama_pegawai}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="email"
                                        name="email"
                                        value={profil.email}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                            {isEditable && (
                                <tr>
                                    <td>Password</td>
                                    <td className="p-2">:</td>
                                    <td className="px-2 border border-gray-400 rounded-md relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={profil.password}
                                            readOnly={!isEditable}
                                            onChange={handleChange}
                                            className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                        />
                                        {/* Icon mata untuk melihat/sembunyikan password */}
                                            <div className="absolute right-2 top-2 cursor-pointer" onClick={toggleShowPassword}>
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </div>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td>Tempat, Tanggal Lahir</td>
                                <td className="p-2">:</td>
                                <td className="flex items-center gap-2">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            name="tempat_lahir"
                                            value={profil.tempat_lahir}
                                            readOnly={!isEditable}
                                            onChange={handleChange}
                                            className={`w-full border border-gray-400 rounded-md px-2 py-2 bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                        />
                                    </div>
                                    <div className="flex-none w-1/3">
                                        <input
                                            type="date"
                                            name="tanggal_lahir"
                                            value={profil.tanggal_lahir}
                                            readOnly={!isEditable}
                                            onChange={handleChange}
                                            className={`w-full border border-gray-400 rounded-md px-2 py-2 bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="text"
                                        name="alamat"
                                        value={profil.alamat}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Nomor Telepon</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="text"
                                        name="no_telp"
                                        value={profil.no_telp}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Posisi</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="text"
                                        name="role"
                                        value={profil.role}
                                        readOnly={!isEditable}
                                        className='w-full border-none bg-transparent focus:outline-none'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Status BPJS</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <select
                                        name="status_bpjs"
                                        value={profil.status_bpjs}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    >
                                        <option value="Aktif">Aktif</option>
                                        <option value="Nonaktif">Nonaktif</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Status Perkawinan</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <select
                                        name="status_kawin"
                                        value={profil.status_kawin}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    >
                                        <option value="Menikah">Menikah</option>
                                        <option value="Belum Menikah">Belum Menikah</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Data Anggota Keluarga</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="text"
                                        name="anggota_keluarga"
                                        value={profil.anggota_keluarga}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Jumlah Tanggungan</td>
                                <td className="p-2">:</td>
                                <td className="px-2 border border-gray-400 rounded-md">
                                    <input
                                        type="number"
                                        name="jumlah_tanggungan"
                                        value={profil.jumlah_tanggungan}
                                        readOnly={!isEditable}
                                        onChange={handleChange}
                                        className={`w-full border-none bg-transparent focus:outline-none ${isEditable ? 'bg-white' : ''}`}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {showPopupEdit && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white font-semibold text-green-900 px-12 py-5 rounded-md shadow-lg">
                            <p>Data berhasil diperbarui.</p>
                        </div>
                    </div>
                )}

                {showPopupFoto && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white font-semibold text-green-900 px-12 py-5 rounded-md shadow-lg">
                            <p>Update Foto Profil Berhasil</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilEdit;