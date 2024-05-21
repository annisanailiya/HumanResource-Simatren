import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import Layout from "./components/shared/Layout.jsx";
import ManajemenPegawai from "./pages/pegawai/ManajemenPegawai.jsx";
import TambahPegawai from "./pages/pegawai/TambahPegawai.jsx";
import DetailPegawai from "./pages/pegawai/DetailPegawai.jsx";
import ManajemenGaji from "./pages/gaji/ManajemenGaji.jsx";
import ManajemenPresensi from "./pages/presensi/ManajemenPresensi.jsx";
import ManajemenPelatihan from "./pages/pelatihan/ManajemenPelatihan.jsx";
import TambahPelatihan from "./pages/pelatihan/TambahPelatihan.jsx";

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

          <Route path='pelatihan' element={<ManajemenPelatihan />} />
          <Route path='formtambahpelatihan' element={<TambahPelatihan />} />
          
        </Route>
        <Route path='login' element={<LoginPage />} />
        {/* <LoginPage /> */}
      </Routes>
    </Router>
  )
}

export default App;
