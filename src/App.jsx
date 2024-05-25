import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import Layout from "./components/shared/Layout.jsx";
import ManajemenPegawai from "./pages/pegawai/ManajemenPegawai.jsx";
import TambahPegawai from "./pages/pegawai/TambahPegawai.jsx";
import DetailPegawai from "./pages/pegawai/DetailPegawai.jsx";
import ManajemenGaji from "./pages/gaji/ManajemenGaji.jsx";
import ManajemenPresensi from "./pages/presensi/ManajemenPresensi.jsx";
import TambahPelatihan from "./pages/pelatihan/TambahPelatihan.jsx";
import JadwalPelatihan from "./pages/pelatihan/JadwalPelatihan.jsx";
import HistoriPelatihan from "./pages/pelatihan/HistoriPelatihan.jsx";
import DetailHistoriPelatihan from "./pages/pelatihan/DetailHistoriPelatihan.jsx";
import DetailJadwalPelatihan from "./pages/pelatihan/DetailJadwalPelatihan.jsx";

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path='login' element={<LoginPage />} />
        {/* <LoginPage /> */}
      </Routes>
    </Router>
  )
}

export default App;
