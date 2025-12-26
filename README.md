
# 🌸 Ethereal Portfolio: Elaina Edition 🌸

> **"Penyihir Kelabu yang berkelana di dunia kode."**

Sebuah mahakarya portfolio FullStack Developer dengan estetika minimalis Jepang yang terinspirasi oleh karakter **Elaina** dari *Majo no Tabitabi*. Dibangun dengan presisi tinggi menggunakan **React**, **Framer Motion**, dan **Tailwind CSS**.

![Preview](https://cdn.nefusoft.cloud/IlX8o.jpg)

## ✨ Fitur Utama
- **Estetika Zen**: Desain minimalis dengan sentuhan tipografi Jepang.
- **Fluid Animations**: Transisi antar bagian yang sangat halus menggunakan Framer Motion.
- **Dynamic Routing**: URL bersih tanpa hash (`/waifu`, `/anime`).
- **Responsive Design**: Optimal untuk perangkat mobile maupun desktop.
- **Custom Loader**: Progress bar interaktif dengan tema Elaina.

## 🛠️ Teknologi
- **Core**: React 18.3.1
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion 11
- **Icons**: Lucide React & SimpleIcons
- **Fonts**: Noto Sans JP & Inter

## ⚙️ Panduan Kustomisasi (Rename)
Ingin mengubah portfolio ini menjadi milik Anda? Ikuti langkah mudah ini:

### 1. Identitas Utama
Buka file `App.tsx` dan `components/Hero.tsx`:
- Cari kata `Alif Bilal Rozzaqi` dan ubah menjadi nama Anda.
- Cari kata `LippWangsaff` untuk mengubah nama brand/logo.
- Ubah deskripsi Founder `NefuSoft` di `Hero.tsx`.

### 2. Keahlian (Tech Stack)
Buka file `constants.ts`:
- Edit array `SKILLS` untuk menambah atau menghapus teknologi yang Anda kuasai.
- Format: `{ name: 'Nama', slug: 'slug-simpleicons', color: 'hex-tanpa-#' }`.

### 3. Media & Sosial
Buka file `constants.ts`:
- Ubah link di array `SOCIALS` dengan URL profil GitHub, WhatsApp, atau website Anda.
- Ganti gambar di `ELAINA_GALLERY` jika ingin menggunakan foto lain.

### 4. Logo & Foto Profil
- **Logo**: Cari URL `https://cdn.nefusoft.cloud/s7xh2.jpg` di `App.tsx` dan `Loader.tsx`.
- **Foto Profil**: Cari URL `https://cdn.nefusoft.cloud/FyTzI.jpg` di `Hero.tsx`.

## 🚀 Deployment
Portfolio ini menggunakan `importmap` untuk performa maksimal tanpa bundler berat:
1. Pastikan semua aset gambar dapat diakses secara publik.
2. Deploy ke platform statis favorit Anda (Vercel, Netlify, atau GitHub Pages).
3. Untuk GitHub Pages, pastikan konfigurasi routing mendukung History API.

## 📜 Lisensi
Proyek ini bersifat **Open Source**. Silakan gunakan, modifikasi, dan sebarkan dengan tetap mencantumkan kredit original jika berkenan.

---
*Dibuat dengan ❤️ oleh [Alif Bilal Rozzaqi](https://github.com/alip-jmbd) untuk para pecinta Elaina.*
