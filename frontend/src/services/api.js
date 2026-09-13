// services/api.js
// Semua fungsi pemanggilan API dikumpulkan di sini
// supaya komponen (Beranda, ProfilSekolah, dll) tidak perlu tahu detail axios/URL

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getBerita = async () => {
  const response = await axios.get(`${BASE_URL}/berita`);
  return response.data;
};

export const getGaleri = async () => {
  const response = await axios.get(`${BASE_URL}/galeri`);
  return response.data;
};

export const getProfil = async () => {
  const response = await axios.get(`${BASE_URL}/profil`);
  return response.data;
};

export const getStatistik = async () => {
  const response = await axios.get(`${BASE_URL}/statistik`);
  return response.data;
};