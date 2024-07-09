import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getPegawaiStatus } from "../../utils/status";
import moment from 'moment-timezone';
import { MdImage } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUpload } from "react-icons/tb";
import { MdZoomOutMap } from "react-icons/md";

const DetailHistoryPelatihan = () => {
  const { id_pelatihan } = useParams();
  const [pelatihan, setDataPelatihan] = useState(null);
  const [uploadingId, setUploadingId] = useState(null);
  const fileInputRef = useRef(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchDetailPelatihan();
  }, [id_pelatihan]);

  const fetchDetailPelatihan = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data_pelatihan/pelatihan/${id_pelatihan}`);
      const data = await response.json();
      const formattedData = {
        ...data,
        tanggal_mulai: moment.utc(data.tanggal_mulai).tz('Asia/Jakarta').format('DD/MM/YYYY'),
        tanggal_selesai: moment.utc(data.tanggal_selesai).tz('Asia/Jakarta').format('DD/MM/YYYY'),
      };
      setDataPelatihan(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!pelatihan) {
    return <div>Loading...</div>;
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && uploadingId) {
      await handleUpload(uploadingId, file);
    }
  };

  const handleUpload = async (id_pelatihan, file) => {
    if (!file) {
      setPopupMessage("Pilih file terlebih dahulu!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    }

    const formData = new FormData();
    formData.append("sertifikat", file);

    try {
      const response = await fetch(`http://localhost:5000/api/data_pelatihan/upload/${id_pelatihan}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setPopupMessage("Sertifikat berhasil diupload.");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setUploadingId(null);
        fetchDetailPelatihan();
      } else {
        setPopupMessage("Sertifikat gagal diupload. Coba Lagi!");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setPopupMessage("Error uploading file.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  const handleViewSertifikat = async (id_pelatihan) => {
    try {
      const response = await fetch(`http://localhost:5000/api/data_pelatihan/sertifikat/${id_pelatihan}`);
      if (!response.ok) {
        throw new Error('Failed to view sertifikat');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      window.open(url, '_blank').focus();
    } catch (error) {
      console.error('Error viewing sertifikat:', error);
      alert('Failed to view sertifikat');
    }
  };

  const handleZoomOutMapClick = () => {
    const imageUrl = `data:image/${pelatihan.bukti_pelaksanaan.type};base64,${pelatihan.bukti_pelaksanaan.data}`;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><body style="display:flex; justify-content:center; align-items:center; height:70vh;"><img src="${imageUrl}" class="max-w-[80%] max-h-[80%]" /></body></html>`);
    newWindow.document.close();
  };

  return (
    <div className="px-5">
      <span className="text-2xl text-gray-950 font-semibold flex justify-center mb-5">Detail Histori Pelatihan</span>

      <div className='md:w-[100%] w-[90%] mx-auto h-full flex flex-col justify-between'>
        <div className="box-border rounded-sm border border-gray-200 flex-1 shadow-lg overflow-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <table className='w-full border-separate p-5 text-gray-950 text-sm'>
                <tbody>
                  <tr>
                    <td>Nomor Induk Pegawai</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="number"
                        name="nip"
                        value={pelatihan.nip}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Pegawai</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="text"
                        name="nama_pegawai"
                        value={pelatihan.nama_pegawai}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Penyelenggara</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="text"
                        name="nama_penyelenggara"
                        value={pelatihan.nama_penyelenggara}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Penyelenggara</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">{pelatihan.nama_penyelenggara}</td>
                  </tr>
                  <tr>
                    <td>Nama Kegiatan</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="text"
                        name="nama_kegiatan"
                        value={pelatihan.nama_kegiatan}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tanggal Mulai</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="date"
                        name="tanggal_mulai"
                        value={moment(pelatihan.tanggal_mulai, 'DD/MM/YYYY').format('YYYY-MM-DD')}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tanggal Selesai</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="date"
                        name="tanggal_selesai"
                        value={moment(pelatihan.tanggal_selesai, 'DD/MM/YYYY').format('YYYY-MM-DD')}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Deskripsi Kegiatan</td>
                    <td className="p-2">:</td>
                    <td className="px-2 border border-gray-400 rounded-md">
                      <input
                        type="text"
                        name="deskripsi_kegiatan"
                        value={pelatihan.deskripsi_kegiatan}
                        className="w-full border-none bg-transparent focus:outline-none"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="p-2">:</td>
                    <td>{getPegawaiStatus(pelatihan.status)}</td>
                  </tr>
                  <tr>
                    <td>Bukti Pelaksanaan</td>
                    <td className="p-2">:</td>
                    <td className="flex items-center">
                      <div className="flex space-x-4">
                        {pelatihan.bukti_pelaksanaan ? (
                          <div className="relative">
                            <img
                              src={`data:image/${pelatihan.bukti_pelaksanaan.type};base64,${pelatihan.bukti_pelaksanaan.data}`}
                              alt="Bukti Pelaksanaan"
                              className="w-24 h-16 border border-gray-400"
                            />
                            <MdZoomOutMap
                              fontSize={14}
                              className="absolute top-0 right-0 m-1 bg-white p-0 cursor-pointer"
                              onClick={handleZoomOutMapClick}
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 border border-gray-400 text-gray-400 flex justify-center items-center">
                            <MdImage fontSize={72} />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Sertifikat Pelatihan</td>
                    <td className="p-2">:</td>
                    <td className='font-semibold text-xs'>
                      {pelatihan.sertifikat ? (
                        <button
                          className='flex justify-start items-center bg-green-500 px-3 py-1 rounded-sm'
                          onClick={() => handleViewSertifikat(pelatihan.id_pelatihan)}
                        >
                          Lihat Sertifikat
                          <MdOutlineRemoveRedEye fontSize={16} className='ml-1' />
                        </button>
                      ) : (
                        <div>
                          <button
                            className='flex justify-start items-center bg-red-500 px-3 py-1 rounded-sm'
                            onClick={() => {
                              setUploadingId(pelatihan.id_pelatihan);
                              fileInputRef.current.click();
                            }}>
                            Upload Sertifikat
                            <TbUpload fontSize={18} className='ml-1' />
                          </button>
                          <input
                            type="file"
                            accept="application/pdf"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white font-semibold text-green-900 p-5 rounded-md shadow-lg">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailHistoryPelatihan;