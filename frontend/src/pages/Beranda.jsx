// Beranda.jsx
// Sekarang data diambil dari backend via useEffect + useState
// bukan lagi array hardcode

import { useState, useEffect } from 'react'
import { getBerita, getGaleri, getStatistik } from '../services/api'

function Beranda() {
  // State untuk menyimpan data dari API. Awalnya kosong/null sebelum data datang
  const [beritaList, setBeritaList] = useState([])
  const [galeriPreview, setGaleriPreview] = useState([])
  const [statistik, setStatistik] = useState({ jumlahGuru: 0, jumlahSiswa: 0 })
  const [loading, setLoading] = useState(true)

  // useEffect dengan [] artinya hanya dijalankan SEKALI saat komponen pertama kali muncul
  useEffect(() => {
    async function ambilData() {
      try {
        // Promise.all supaya 3 request jalan bersamaan, bukan berurutan (lebih cepat)
        const [berita, galeri, statistikData] = await Promise.all([
          getBerita(),
          getGaleri(),
          getStatistik(),
        ])
        setBeritaList(berita)
        setGaleriPreview(galeri.slice(0, 3)) // ambil 3 foto pertama saja untuk preview
        setStatistik(statistikData)
      } catch (error) {
        console.error('Gagal mengambil data:', error)
      } finally {
        setLoading(false)
      }
    }

    ambilData()
  }, [])

  // Tampilkan pesan loading selama data belum datang dari server
  if (loading) {
    return <div className="page"><p>Memuat data...</p></div>
  }

  return (
    <div className="page beranda">
      <h1>Selamat Datang di Website SMA</h1>

      <section className="statistik-section">
        <h2>Statistik Sekolah</h2>
        <div className="statistik-cards">
          <div className="stat-card">
            <span className="stat-number">{statistik.jumlahGuru}</span>
            <span className="stat-label">Guru</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{statistik.jumlahSiswa}</span>
            <span className="stat-label">Siswa</span>
          </div>
        </div>
      </section>

      <section className="berita-section">
        <h2>Berita Kegiatan Sekolah</h2>
        <div className="berita-list">
          {beritaList.map((berita) => (
            <article key={berita.id} className="berita-card">
              <h3>{berita.judul}</h3>
              <p className="berita-tanggal">{berita.tanggal}</p>
              <p>{berita.ringkasan}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="galeri-preview-section">
        <h2>Galeri</h2>
        <div className="galeri-grid">
          {galeriPreview.map((item) => (
            <div key={item.id} className="galeri-item">
              <div className="galeri-placeholder">{item.judul}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Beranda