import LoginPage from "./pages/LoginPage.jsx"

function App() {
  return (
<<<<<<< Updated upstream
    <>
      <LoginPage />
    </>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manajemen_pegawai" element={<ManajemenPegawai />} />
          <Route path="manajemen_gaji" element={<ManajemenGaji />} />
          <Route path="manajemen_presensi" element={<ManajemenPresensi />} />
          <Route path="manajemen_pelatihan" element={<ManajemenPelatihan />} />
          <Route path="manajemen_kinerja" element={<ManajemenKinerja />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path ="logout" element={<LoginPage />} />
      </Routes>
    </Router>
>>>>>>> Stashed changes
  )
}

export default App;
