/* eslint-disable react/prop-types */
import { HiOutlineSearch } from 'react-icons/hi';
import { IoDownloadOutline } from "react-icons/io5";
import { getStatus } from "../utils/status";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useState } from 'react';

const dataGaji = [
  {
    id: '1',
    nomor: '1',
    bulan: 'Agustus',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '2',
    nomor: '2',
    bulan: 'September',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '3',
    nomor: '3',
    bulan: 'Oktober',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '4',
    nomor: '4',
    bulan: 'November',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '5',
    nomor: '5',
    bulan: 'Desember',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '6',
    nomor: '6',
    bulan: 'Januari',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '7',
    nomor: '7',
    bulan: 'Februari',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '8',
    nomor: '8',
    bulan: 'Maret',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '9',
    nomor: '9',
    bulan: 'April',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  },
  {
    id: '10',
    nomor: '10',
    bulan: 'Mei',
    gaji: 'Rp 5.000.000',
    tunjangan: 'Rp 5.000.000',
    potongan: 'Rp 5.000.000',
    total: 'Rp 5.000.000',
    status_gaji: 'Lunas',
    action: 'Download Slip'
  }
];

function Pagination({ itemsPerPage, totalItems, currentPage, paginate }) {
  const pageNumbers = [];
  const maxPages = 2; // Jumlah maksimum halaman yang ditampilkan

  // Membuat daftar nomor halaman yang sesuai dengan posisi halaman saat ini
  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = Math.min(startPage + maxPages - 1, Math.ceil(totalItems / itemsPerPage));

  // Membuat daftar nomor halaman
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Fungsi untuk menavigasi ke halaman berikutnya
  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  // Fungsi untuk menavigasi ke halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav className="flex justify-end mt-4 pr-5">
      <ul className='pagination flex'>
        {/* Tombol navigasi ke halaman sebelumnya */}
        <li key="prev" className="page-item mx-1">
          <button onClick={prevPage} className="page-link bg-gray-200 px-3 py-1 rounded">Prev</button>
        </li>
        {/* Daftar nomor halaman */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button
              onClick={() => paginate(number)}
              className={`page-link bg-gray-200 px-3 py-1 rounded ${currentPage === number ? 'bg-green-900 text-white' : 'hover:bg-gray-300'}`}
            >
              {number}
            </button>
          </li>
        ))}
        {/* Tombol navigasi ke halaman berikutnya */}
        <li key="next" className="page-item mx-1">
          <button onClick={nextPage} className="page-link bg-gray-200 px-3 py-1 rounded">Next</button>
        </li>
      </ul>
    </nav>
  );
}


function Penggajian() {
  const [selectedGaji, setSelectedGaji] = useState([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Jumlah item per halaman

  const handleCheckboxChange = (id) => {
    setSelectedGaji(prevState =>
      prevState.includes(id)
        ? prevState.filter(gajiId => gajiId !== id)
        : [...prevState, id]
    );
  };

  const downloadPDF = (ids) => {
    const selectedData = dataGaji.filter(row => ids.includes(row.id));

    if (selectedData.length === 0) return;

    const doc = new jsPDF();
    doc.text('Slip Gaji', 14, 16);

    const tableColumn = ["No.", "Bulan", "Gaji", "Tunjangan", "Potongan", "Total", "Status"];
    const tableRows = selectedData.map(rowData => [
      rowData.nomor,
      rowData.bulan,
      rowData.gaji,
      rowData.tunjangan,
      rowData.potongan,
      rowData.total,
      rowData.status_gaji
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`Data Gaji_Selected.pdf`);

    // Reset state after download
    setIsSelectionMode(false);
    setSelectedGaji([]);
  };

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedGaji([]);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current items based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataGaji.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <p className="text-xl font-bold mb-4">Data Gaji</p>
        <button
          onClick={isSelectionMode ? () => downloadPDF(selectedGaji) : toggleSelectionMode}
          className="bg-green-900 text-white p-2 rounded"
        >
          {isSelectionMode ? 'Download Semua Pilihan' : 'Download'}
        </button>
      </div>

      <div>
        <div className="relative py-4 w-full justify-between flex flex-row">
          <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none bg-gray-200 border border-gray-200 w-full h-10 pl-11 pr-4 rounded-sm"
          />
        </div>

        <div className="px-4 text-sm rounded-sm border-[1.5px] border-gray-200 items-center overflow-x-auto">
          <div className="h-[21rem] md:w-full w-[34rem] max-[500px]:w-[24rem] overflow-auto">
            <table className='text-gray-700 min-w-[900px]'>
              <thead className="sticky top-0 bg-white">
                <tr className="border-b-[1.5px]">
                  {isSelectionMode && <td className='font-bold py-4'>Select</td>}
                  <td className='font-bold py-4'>No.</td>
                  <td className='font-bold py-4'>Bulan</td>
                  <td className='font-bold py-4'>Gaji</td>
                  <td className='font-bold py-4'>Tunjangan</td>
                  <td className='font-bold py-4'>Potongan</td>
                  <td className='font-bold py-4'>Total</td>
                  <td className='font-bold py-4'>Status</td>
                  <td className='font-bold py-4'>Action</td>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((data) => (
                  <tr key={data.id}>
                    {isSelectionMode && (
                      <td className="p-1 pt-2">
                        <input
                          type="checkbox"
                          checked={selectedGaji.includes(data.id)}
                          onChange={() => handleCheckboxChange(data.id)}
                        />
                      </td>
                    )}
                    <td className="p-1 pt-2">{data.nomor}</td>
                    <td>{data.bulan}</td>
                    <td>{data.gaji}</td>
                    <td>{data.tunjangan}</td>
                    <td>{data.potongan}</td>
                    <td>{data.total}</td>
                    <td>{getStatus(data.status_gaji)}</td>
                    <td className='font-semibold'>
                      <button onClick={() => downloadPDF([data.id])} className='flex justify-start items-center'>
                        {data.action}
                        <IoDownloadOutline fontSize={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Component */}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={dataGaji.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Penggajian;
