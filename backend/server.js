// server.js
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // import router yang baru dibuat

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Website Sekolah aktif 🚀' });
});

// Semua endpoint di routes/api.js akan diawali /api
// contoh: /api/berita, /api/galeri, /api/profil, /api/statistik
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});