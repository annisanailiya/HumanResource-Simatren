import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './Auth/LoginPage';
import ForgotPassword from './Auth/ForgotPassword';

import Layout from './AdminPage/components/content/Layout';
import Dashboard from './AdminPage/components/pages/Dashboard/Dashboard';
import ManajemenPegawai from './AdminPage/components/pages/Manajemen-Pegawai/ManajemenPegawai';
import ManajemenGaji from './AdminPage/components/pages/Manajemen-Gaji/ManajemenGaji';
import ManajemenPresensi from './AdminPage/components/pages/Manajemen-Presensi/ManajemenPresensi';
import TambahDataPegawai from './AdminPage/components/pages/Manajemen-Pegawai/TambahDataPegawai';
import DetailDataPegawai from './AdminPage/components/pages/Manajemen-Pegawai/DetailDataPegawai';
import TambahDataGaji from './AdminPage/components/pages/Manajemen-Gaji/TambahDataGaji';
import HistoriPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/HistoriPelatihan';
import JadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/JadwalPelatihan';
import TambahJadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/TambahJadwalPelatihan';
import DetailJadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/DetailJadwalPelatihan';
import DetailHistoriPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/DetailHistoriPelatihan';
import ManajemenKinerja from './AdminPage/components/pages/Manajemen-Kinerja/ManajemenKinerja';
import GrafikManajemenKinerja from './AdminPage/components/pages/Manajemen-Kinerja/Grafik-Kinerja/GrafikManajemenKinerja';

import LayoutUser from "./UserPage/components/content/LayoutUser";
import ProfilEdit from "./UserPage/components/pages/ProfilEdit";
import HistoriPresensi from "./UserPage/components/pages/Presensi/HistoriPresensi";
import Penggajian from './UserPage/components/pages/Penggajian';
import PengajuanCuti from "./UserPage/components/pages/Cuti/PengajuanCuti";
import HistoriCuti from "./UserPage/components/pages/Cuti/HistoriCuti";
import PelaporanPelatihan from "./UserPage/components/pages/Pelatihan/PelaporanPelatihan";
import HistoriPelatihanUser from "./UserPage/components/pages/Pelatihan/HistoriPelatihanUser";
import JadwalPelatihanUser from "./UserPage/components/pages/Pelatihan/JadwalPelatihanUser";
import Kinerja from './UserPage/components/pages/Kinerja/Kinerja';
import QrPresensi from './UserPage/components/pages/Presensi/QrPresensi';
import FormPresensi from './UserPage/components/pages/Presensi/FormPresensi';
import { PresensiProvider } from './UserPage/components/pages/Presensi/PresensiContext';

import { AuthProvider } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <PresensiProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />

          {/* Admin Page */}
          <Route path="/AdminPage" element={<PrivateRoute allowedRoles={['admin']}><Layout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="/AdminPage/manajemen_pegawai" element={<ManajemenPegawai />} />
            <Route path="/AdminPage/tambah_data_pegawai" element={<TambahDataPegawai />} />
            <Route path="/AdminPage/detail_data_pegawai" element={<DetailDataPegawai />} />
            <Route path="/AdminPage/manajemen_gaji" element={<ManajemenGaji />} />
            <Route path="/AdminPage/tambah_data_gaji" element={<TambahDataGaji />} />
            <Route path="/AdminPage/manajemen_presensi" element={<ManajemenPresensi />} />
            <Route path="/AdminPage/histori_pelatihan" element={<HistoriPelatihan />} />
            <Route path="/AdminPage/jadwal_pelatihan" element={<JadwalPelatihan />} />
            <Route path="/AdminPage/detail_histori_pelatihan" element={<DetailHistoriPelatihan />} />
            <Route path="/AdminPage/detail_jadwal_pelatihan" element={<DetailJadwalPelatihan />} />
            <Route path="/AdminPage/atur_jadwal_pelatihan" element={<TambahJadwalPelatihan />} />
            <Route path="/AdminPage/manajemen_kinerja" element={<ManajemenKinerja />} />
            <Route path="/AdminPage/grafik_kinerja" element={<GrafikManajemenKinerja />} />
          </Route>

          {/* User Page */}
          <Route path="/UserPage" element={<PrivateRoute allowedRoles={['user']}><LayoutUser /></PrivateRoute>}>
            <Route index element={<ProfilEdit />} />
            
            <Route path="/UserPage/histori_presensi" element={<HistoriPresensi />} />
            <Route path="/UserPage/form_presensi/:id" element={<FormPresensi />} />
            
            <Route path="/UserPage/qr_presensi" element={<QrPresensi />} />
            <Route path="/UserPage/penggajian" element={<Penggajian />} />
            <Route path="/UserPage/pengajuan_cuti" element={<PengajuanCuti />} />
            <Route path="/UserPage/histori_cuti" element={<HistoriCuti />} />
            <Route path="/UserPage/pelaporan_pelatihan" element={<PelaporanPelatihan />} />
            <Route path="/UserPage/histori_pelatihan" element={<HistoriPelatihanUser />} />
            <Route path="/UserPage/jadwal_pelatihan" element={<JadwalPelatihanUser />} />
            <Route path="/UserPage/grafik_kinerja" element={<Kinerja />} />
          </Route>

          <Route path="logout" element={<LoginPage />} />
        </Routes>
      </Router>
      </PresensiProvider>
    </AuthProvider>
  );
}

export default App;
