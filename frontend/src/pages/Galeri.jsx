// Galeri.jsx
// Menampilkan seluruh koleksi foto kegiatan sekolah dalam grid
// Placeholder warna dipakai karena belum ada file foto asli - tinggal ganti <img src={item.url} />

function Galeri() {
  const galeriData = [
    { id: 1, judul: 'Upacara Bendera', kategori: 'Kegiatan Rutin' },
    { id: 2, judul: 'Lomba Cerdas Cermat', kategori: 'Prestasi' },
    { id: 3, judul: 'Ekstrakurikuler Basket', kategori: 'Ekstrakurikuler' },
    { id: 4, judul: 'Perpustakaan Sekolah', kategori: 'Fasilitas' },
    { id: 5, judul: 'Laboratorium Komputer', kategori: 'Fasilitas' },
    { id: 6, judul: 'Bakti Sosial', kategori: 'Kegiatan Sosial' },
  ]

  return (
    <div className="page galeri">
      <h1>Galeri</h1>
      <p>Dokumentasi kegiatan dan fasilitas sekolah.</p>

      <div className="galeri-full-grid">
        {galeriData.map((item) => (
          <div key={item.id} className="galeri-item">
            <div className="galeri-placeholder">{item.judul}</div>
            <p className="galeri-kategori">{item.kategori}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Galeri