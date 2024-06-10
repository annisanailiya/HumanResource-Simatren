/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// PresensiContext.js
import React, { createContext, useContext, useState } from 'react';

const PresensiContext = createContext();

export const usePresensi = () => {
  return useContext(PresensiContext);
};

export const PresensiProvider = ({ children }) => {
  const [dataPresensi, setDataPresensi] = useState([
    {
      id: '1',
      nomor: '1',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-14T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '2',
      nomor: '2',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-22T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '3',
      nomor: '3',
      nip: '465476354635',
      nama: 'anis',
      tanggal: '2024-05-16T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '4',
      nomor: '4',
      nip: '111111111111',
      nama: 'laaa',
      tanggal: '2024-05-17T05:24:00',
      jam_masuk: '',
      jam_keluar: '',
      total_jam: ''
    },
    {
      id: '5',
      nomor: '5',
      nip: '222222222',
      nama: 'lae',
      tanggal: '2024-05-18T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '6',
      nomor: '6',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-19T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '7',
      nomor: '7',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-05-20T05:24:00',
      jam_masuk: '08:00',
      jam_keluar: '17:00',
      total_jam: ''
    },
    {
      id: '8',
      nomor: '8',
      nip: '19860926201500',
      nama: 'Laela Anggraeni',
      tanggal: '2024-06-10T05:24:00',
      jam_masuk: '05:00',
      jam_keluar: '',
      total_jam: ''
    },
    {
      id: '9',
      nomor: '9',
      nip: '4565734526526',
      nama: 'Laela',
      tanggal: '2024-06-10T05:24:00',
      jam_masuk: '05:00',
      jam_keluar: '',
      total_jam: ''
    },
  ]);

  const updatePresensi = (id, updatedPresensi) => {
    setDataPresensi(prevData =>
      prevData.map(p => p.id === id ? { ...p, ...updatedPresensi } : p)
    );
  };

  return (
    <PresensiContext.Provider value={{ dataPresensi, updatePresensi }}>
      {children}
    </PresensiContext.Provider>
  );
};
