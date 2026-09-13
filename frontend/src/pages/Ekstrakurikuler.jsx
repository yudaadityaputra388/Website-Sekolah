// Ekstrakurikuler.jsx
// Menampilkan daftar ekstrakurikuler sekolah dalam bentuk card grid

function Ekstrakurikuler() {
  const daftarEkskul = [
    { id: 1, nama: 'Pramuka', pembina: 'Bpk. Rudi Hartono', jadwal: 'Jumat, 14.00' },
    { id: 2, nama: 'Basket', pembina: 'Ibu Siti Aminah', jadwal: 'Rabu, 15.30' },
    { id: 3, nama: 'Paskibra', pembina: 'Bpk. Andi Wijaya', jadwal: 'Sabtu, 08.00' },
    { id: 4, nama: 'Karya Ilmiah Remaja', pembina: 'Ibu Dewi Lestari', jadwal: 'Selasa, 15.00' },
    { id: 5, nama: 'Futsal', pembina: 'Bpk. Yoga Pratama', jadwal: 'Kamis, 15.30' },
  ]

  return (
    <div className="page ekstrakurikuler">
      <h1>Ekstrakurikuler</h1>
      <p>Berikut adalah daftar kegiatan ekstrakurikuler yang tersedia di sekolah kami.</p>

      <div className="ekskul-grid">
        {daftarEkskul.map((ekskul) => (
          <div key={ekskul.id} className="ekskul-card">
            <h3>{ekskul.nama}</h3>
            <p><strong>Pembina:</strong> {ekskul.pembina}</p>
            <p><strong>Jadwal:</strong> {ekskul.jadwal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ekstrakurikuler