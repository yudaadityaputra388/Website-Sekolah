// Footer.jsx
// Komponen footer sederhana, ditampilkan di semua halaman

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SMA Contoh. Semua hak dilindungi.</p>
    </footer>
  )
}

export default Footer