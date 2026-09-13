// routes/api.js
// Semua endpoint API dikumpulkan di satu router supaya server.js tetap bersih
// Setiap route baca file JSON dari folder data/ menggunakan fs (file system) bawaan Node.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Fungsi bantu: baca & parse file JSON dari folder data/
// Dipisah jadi fungsi supaya tidak menulis fs.readFileSync berulang di tiap route (DRY)
function bacaData(namaFile) {
  const filePath = path.join(__dirname, '..', 'data', namaFile);
  const isiFile = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(isiFile);
}

// GET /api/berita - daftar berita kegiatan sekolah
router.get('/berita', (req, res) => {
  const data = bacaData('berita.json');
  res.json(data);
});

// GET /api/galeri - daftar foto galeri
router.get('/galeri', (req, res) => {
  const data = bacaData('galeri.json');
  res.json(data);
});

// GET /api/profil - data profil sekolah untuk tabel
router.get('/profil', (req, res) => {
  const data = bacaData('profil.json');
  res.json(data);
});

// GET /api/statistik - jumlah guru & siswa
router.get('/statistik', (req, res) => {
  const data = bacaData('statistik.json');
  res.json(data);
});

module.exports = router;