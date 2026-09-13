// App.jsx
// Komponen utama: mengatur layout (Navbar + Footer selalu tampil)
// dan Routes (menentukan halaman mana yang muncul sesuai URL)

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Beranda from './pages/Beranda'
import ProfilSekolah from './pages/ProfilSekolah'
import Ekstrakurikuler from './pages/Ekstrakurikuler'
import Galeri from './pages/Galeri'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<ProfilSekolah />} />
          <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App