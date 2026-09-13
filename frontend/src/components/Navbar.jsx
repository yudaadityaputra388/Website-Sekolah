// Navbar.jsx
// Komponen navigasi utama. Dipakai di semua halaman (lewat App.jsx)
// NavLink dipakai (bukan <a> biasa) supaya browser tidak reload saat pindah menu

import { NavLink } from 'react-router-dom'

function Navbar() {
  // Daftar menu disimpan dalam array supaya gampang ditambah/diubah
  // tanpa perlu duplikasi kode <NavLink> berkali-kali
  const menuItems = [
    { path: '/', label: 'Beranda' },
    { path: '/profil', label: 'Profil Sekolah' },
    { path: '/ekstrakurikuler', label: 'Ekstrakurikuler' },
    { path: '/galeri', label: 'Galeri' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">SMA Contoh</div>
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              // className function: NavLink otomatis kasih tahu status "active"
              // dari sini styling menu aktif jadi otomatis, tanpa state manual
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar