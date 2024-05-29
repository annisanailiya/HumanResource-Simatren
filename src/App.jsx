import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider, useAuth } from './AuthContext';
import Layout from './AdminPage/components/content/Layout';
import Dashboard from './AdminPage/components/pages/Dashboard/Dashboard';
import ManajemenPegawai from './AdminPage/components/pages/Manajemen-Pegawai/ManajemenPegawai';
import LoginPage from './AdminPage/components/pages/LoginPage';
import ManajemenGaji from './AdminPage/components/pages/Manajemen-Gaji/ManajemenGaji';
import ManajemenPresensi from './AdminPage/components/pages/Manajemen-Presensi/ManajemenPresensi';
import TambahDataPegawai from './AdminPage/components/pages/Manajemen-Pegawai/TambahDataPegawai';
import DetailDataPegawai from './AdminPage/components/pages/Manajemen-Pegawai/DetailDataPegawai';
import TambahDataGaji from './AdminPage/components/pages/Manajemen-Gaji/TambahDataGaji';
import HistoryPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/HistoryPelatihan';
import JadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/JadwalPelatihan';
import TambahJadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/TambahJadwalPelatihan';
import DetailJadwalPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/DetailJadwalPelatihan';
import DetailHistoryPelatihan from './AdminPage/components/pages/Manajemen-Pelatihan/DetailHistoryPelatihan';


<<<<<<< Updated upstream
// import Layout from "./UserPage/components/content/Layout";
    
=======
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import JadwalPelatihanUser from './UserPage/components/pages/Pelatihan/JadwalPelatihanUser';
>>>>>>> Stashed changes

function App() {
  return (
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/AdminPage" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/AdminPage/manajemen_pegawai" element={<ManajemenPegawai />} />
                <Route path="/AdminPage/tambah_data_pegawai" element={<TambahDataPegawai />} />
                <Route path="/AdminPage/detail_data_pegawai" element={<DetailDataPegawai />} />

                <Route path="/AdminPage/manajemen_gaji" element={<ManajemenGaji />} />
                <Route path="/AdminPage/tambah_data_gaji" element={<TambahDataGaji />} />

<<<<<<< Updated upstream
                <Route path="/AdminPage/manajemen_presensi" element={<ManajemenPresensi />} />
=======
          {/* User Page */}
          <Route path="/UserPage" element={<PrivateRoute allowedRoles={['user']}><LayoutUser /></PrivateRoute>}>
            <Route index element={<ProfilEdit />} />
            <Route path="/UserPage/presensi" element={<Presensi />} />
            <Route path="/UserPage/penggajian" element={<Penggajian />} />
            <Route path="/UserPage/pengajuan_cuti" element={<PengajuanCuti />} />
            <Route path="/UserPage/histori_cuti" element={<HistoriCuti />} />
            <Route path="/UserPage/pelaporan_pelatihan" element={<PelaporanPelatihan />} />
            <Route path="/UserPage/histori_pelatihan" element={<HistoriPelatihan />} />
            <Route path="/UserPage/jadwal_pelatihan" element={<JadwalPelatihanUser />} />
          </Route>
>>>>>>> Stashed changes

                <Route path="/AdminPage/histori_pelatihan" element={<HistoryPelatihan />} />
                <Route path="/AdminPage/jadwal_pelatihan" element={<JadwalPelatihan />} />
                <Route path="/AdminPage/detail_history_pelatihan" element={<DetailHistoryPelatihan />} />
                <Route path="/AdminPage/detail_jadwal_pelatihan" element={<DetailJadwalPelatihan />} />
                <Route path="/AdminPage/atur_jadwal_pelatihan" element={<TambahJadwalPelatihan />} />
              </Route>
              <Route path="logout" element={<LoginPage />} />

              {/* <Route path="/UserPage" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/AdminPage/manajemen_pegawai" element={<ManajemenPegawai />} />
                <Route path="/AdminPage/tambah_data_pegawai" element={<TambahDataPegawai />} />
                <Route path="/AdminPage/detail_data_pegawai" element={<DetailDataPegawai />} />

                <Route path="/AdminPage/manajemen_gaji" element={<ManajemenGaji />} />
                <Route path="/AdminPage/tambah_data_gaji" element={<TambahDataGaji />} />

                <Route path="/AdminPage/manajemen_presensi" element={<ManajemenPresensi />} />

                <Route path="/AdminPage/histori_pelatihan" element={<HistoryPelatihan />} />
                <Route path="/AdminPage/jadwal_pelatihan" element={<JadwalPelatihan />} />
                <Route path="/AdminPage/detail_history_pelatihan" element={<DetailHistoryPelatihan />} />
                <Route path="/AdminPage/detail_jadwal_pelatihan" element={<DetailJadwalPelatihan />} />
                <Route path="/AdminPage/atur_jadwal_pelatihan" element={<TambahJadwalPelatihan />} />
              </Route>
              <Route path="logout" element={<LoginPage />} /> */}
            </Routes>
          </Router>
      )
    }

export default App;
