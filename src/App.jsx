import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./adminpages/components/shared/Layout";
import Dashboard from "./adminpages/pages/dashboard/Dashboard";
import ManajemenPegawai from "./adminpages/pages/pegawai/ManajemenPegawai";
import TambahPegawai from "./adminpages/pages/pegawai/TambahPegawai";
import DetailPegawai from "./adminpages/pages/pegawai/DetailPegawai";
import ManajemenGaji from "./adminpages/pages/gaji/ManajemenGaji";
import ManajemenPresensi from "./adminpages/pages/presensi/ManajemenPresensi";
import HistoriPelatihan from "./adminpages/pages/pelatihan/HistoriPelatihan";
import JadwalPelatihan from "./adminpages/pages/pelatihan/JadwalPelatihan";
import TambahPelatihan from "./adminpages/pages/pelatihan/TambahPelatihan";
import DetailHistoriPelatihan from "./adminpages/pages/pelatihan/DetailHistoriPelatihan";
import DetailJadwalPelatihan from "./adminpages/pages/pelatihan/DetailJadwalPelatihan";
import LoginPage from "./adminpages/pages/LoginPage";
import LayoutUser from "./userpages/components/shared/LayoutUser";
import Profil from "./userpages/pages/profil.jsx/Profil";
import DataPresensi from "./userpages/pages/presensi/DataPresensi";
import DataGaji from "./userpages/pages/gaji/DataGaji";
import Cuti from "./userpages/pages/cuti/Cuti";
import HistoriCuti from "./userpages/pages/cuti/HistoriCuti";
import Pelatihan from "./userpages/pages/pelatihan/pelatihan";
import HistoriPelatihanUser from "./userpages/pages/pelatihan/HistoriPelatihanUser";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='login' element={<LoginPage />} />

        {/* Route Admin */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='pegawai' element={<ManajemenPegawai />} />
          <Route path='formtambahpegawai' element={<TambahPegawai />} />
          <Route path='formdetailpegawai' element={<DetailPegawai />} />
          <Route path='gaji' element={<ManajemenGaji />} />
          <Route path='presensi' element={<ManajemenPresensi />} />
          <Route path='historipelatihan' element={<HistoriPelatihan />} />
          <Route path='jadwalpelatihan' element={<JadwalPelatihan />} />
          <Route path='formtambahpelatihan' element={<TambahPelatihan />} />
          <Route path='detailhistori' element={<DetailHistoriPelatihan />} />
          <Route path='detailjadwal' element={<DetailJadwalPelatihan />} />
        </Route>

        <Route path="/user" element={<LayoutUser />}>
          <Route index element={<Profil />} />
          <Route path='/user/presensi' element={<DataPresensi />} />
          <Route path='/user/gaji' element={<DataGaji />} />
          <Route path='/user/cuti' element={<Cuti />} />
          <Route path='/user/historicuti' element={<HistoriCuti />} />
          <Route path='/user/pelatihan' element={<Pelatihan />} />
          <Route path='/user/histori_pelatihan_user' element={<HistoriPelatihanUser />} />
        </Route>


      </Routes>
    </Router>
  )
}

export default App;
