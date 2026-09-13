// ProfilSekolah.jsx
import { useState, useEffect } from 'react'
import { getProfil } from '../services/api'

function ProfilSekolah() {
  const [profilData, setProfilData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfil()
      .then((data) => setProfilData(data))
      .catch((error) => console.error('Gagal mengambil profil:', error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="page"><p>Memuat data...</p></div>
  }

  return (
    <div className="page profil-sekolah">
      <h1>Profil Sekolah</h1>
      <p>Berikut adalah informasi lengkap mengenai profil sekolah kami.</p>

      <table className="profil-table">
        <tbody>
          {profilData.map((item, index) => (
            <tr key={index}>
              <th>{item.label}</th>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="visi-misi">
        <h2>Visi</h2>
        <p>
          Menjadi sekolah unggul yang menghasilkan lulusan berkarakter,
          berprestasi, dan siap bersaing di era global.
        </p>
        <h2>Misi</h2>
        <ul>
          <li>Menyelenggarakan pembelajaran yang berkualitas dan inovatif</li>
          <li>Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler</li>
          <li>Membangun karakter siswa yang berakhlak mulia</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfilSekolah