# Product Requirements Document (PRD) — WNB

## 1. Ringkasan Produk
WNB (Wisata Ngaprak Bandung) adalah aplikasi web yang dirancang untuk memperkenalkan dan memasarkan pengalaman wisata petualangan di wilayah Bandung. Fokus utama aplikasi adalah pada kegiatan outdoor petualangan seperti perjalanan menggunakan kendaraan Jeep, off-road, wisata pegunungan, corporate outing, dan trip komunitas.

## 2. Tujuan
*   Menjadi pusat informasi terpercaya untuk paket wisata petualangan off-road dan pegunungan di Bandung.
*   Memudahkan calon pengunjung dalam mengeksplorasi pilihan paket, detail rute perjalanan, dan melakukan pemesanan awal secara mudah.
*   Membangun citra brand petualangan yang kuat, aman, menantang, namun tetap profesional dan terpercaya.

## 3. Sasaran Pengguna
*   Pecinta petualangan outdoor dan off-road.
*   Wisatawan domestik maupun mancanegara yang berkunjung ke Bandung.
*   Panitia corporate gathering / outing perusahaan.
*   Komunitas atau rombongan keluarga yang mencari aktivitas liburan unik.

## 4. Masalah yang Diselesaikan
*   Calon pengunjung sering kesulitan mencari rincian rute, estimasi durasi, tingkat kesulitan, serta fasilitas yang didapatkan secara transparan untuk aktivitas off-road di Bandung.
*   Alur pemesanan manual yang tidak terstruktur menghambat konversi penjualan. WNB menyederhanakan ini dengan form booking awal yang langsung menyusun format pesan WhatsApp yang rapi.

## 5. Ruang Lingkup MVP (Minimum Viable Product)
Aplikasi WNB tahap awal berfokus sebagai platform informasi interaktif (katalog) yang responsif dengan integrasi pemesanan langsung ke WhatsApp:
1.  **Halaman Utama (Beranda):** Ringkasan layanan, paket unggulan, rute pilihan, testimoni, dan ajakan bertindak (CTA).
2.  **Halaman Tentang Kami (About):** Cerita WNB, nilai utama, armada kendaraan, dan standar keselamatan.
3.  **Katalog Paket Wisata:** Daftar pilihan paket petualangan.
4.  **Detail Paket Wisata:** Informasi komprehensif mengenai fasilitas, durasi, harga mulai, serta rute yang dilewati paket terkait.
5.  **Katalog Rute Perjalanan:** Daftar rute fisik yang dapat dilalui.
6.  **Detail Rute Perjalanan:** Informasi tingkat kesulitan, kondisi jalur, durasi estimasi, dan pemandangan utama rute.
7.  **Galeri Dokumentasi:** Dokumentasi perjalanan berdasarkan kategori aktivitas.
8.  **Form Booking Terintegrasi:** Formulir pengisian data pemesanan awal tanpa penyimpanan database, yang langsung mengalihkan pengguna ke WhatsApp dengan pesan terformat.
9.  **Halaman Penanganan Error (404 Not Found):** Navigasi kembali ke Beranda jika rute tidak ditemukan.

## 6. Fitur yang Ditunda (Pasca-MVP)
Fitur-fitur berikut **tidak diimplementasikan** pada tahap MVP ini:
*   Registrasi dan login pengguna (akun pelanggan).
*   Sistem pembayaran online (payment gateway) dan keranjang belanja.
*   Dashboard admin (CMS) untuk pengelolaan konten secara dinamis.
*   Database pemesanan di sisi server.
*   Notifikasi email atau SMS otomatis.
*   Sistem ulasan (review) dan rating pengguna di dalam aplikasi.
*   Peta interaktif real-time atau pelacakan kendaraan.

## 7. Daftar Halaman dan Struktur URL
*   Beranda: `/`
*   Tentang Kami: `/about`
*   Daftar Paket: `/paket`
*   Detail Paket: `/paket/:slug`
*   Daftar Rute: `/rute`
*   Detail Rute: `/rute/:slug`
*   Galeri: `/gallery`
*   Booking: `/booking`
*   Halaman Error: `/*`

## 8. Batasan Produk
*   Aplikasi dikembangkan sebagai Single Page Application (SPA) berbasis React pada sisi frontend.
*   Seluruh data paket dan rute bersifat statis pada frontend (typed local data) dan belum terhubung ke database.
*   Pemesanan sepenuhnya mengandalkan pengalihan ke WhatsApp API.

## 9. Asumsi Awal
*   Pengguna memiliki koneksi internet aktif.
*   Pengguna memiliki aplikasi WhatsApp terpasang pada perangkat mereka (atau menggunakan WhatsApp Web).
*   Pemilik proyek memiliki admin WhatsApp yang aktif merespons pesan masuk.

## 10. Informasi yang Membutuhkan Konfirmasi Bisnis (TBD)
Informasi berikut belum ditentukan secara resmi dan memerlukan konfirmasi lebih lanjut dari pemilik proyek:
*   Nomor WhatsApp resmi WNB (`TBD — membutuhkan konfirmasi pemilik proyek`).
*   Harga resmi dan detail pembagian harga setiap paket (`TBD — membutuhkan konfirmasi pemilik proyek`).
*   Alamat kantor operasional, jam kerja, dan legalitas usaha (`TBD — membutuhkan konfirmasi pemilik proyek`).
*   Profil resmi tim manajemen dan daftar driver berlisensi (`TBD — membutuhkan konfirmasi pemilik proyek`).
*   Nama badan hukum dan detail hak cipta aplikasi (`TBD — membutuhkan konfirmasi pemilik proyek`).
