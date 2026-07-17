# User Roles Document — WNB

Dokumen ini mendefinisikan peran pengguna (*user roles*) dalam ekosistem aplikasi **WNB (Wisata Ngaprak Bandung)** untuk memandu desain hak akses dan pengembangan sistem jangka panjang.

## 1. Peran Pengguna saat ini (MVP)

Pada tahap MVP (Minimum Viable Product), aplikasi WNB sepenuhnya bersifat publik. Hanya ada satu peran aktif yang dapat berinteraksi dengan sistem secara langsung.

### Pengunjung (Visitor)
Pengunjung adalah masyarakat umum, calon wisatawan, atau perwakilan perusahaan yang mengakses aplikasi web WNB untuk mencari informasi wisata petualangan di Bandung.

*   **Autentikasi:** Tidak memerlukan login atau pendaftaran akun (`Tanpa Autentikasi`).
*   **Hak Akses:**
    *   Membaca dan menjelajahi halaman Beranda, Tentang Kami, Galeri, Katalog Paket Wisata, dan Katalog Rute.
    *   Melihat detail paket wisata (termasuk fasilitas, durasi, harga) dan detail rute perjalanan (tingkat kesulitan, medan, dsb.).
    *   Menyaring galeri dokumentasi berdasarkan kategori aktivitas.
    *   Mengisi form pemesanan awal (*Booking*) di aplikasi.
    *   Mengirim form pemesanan yang akan otomatis membuka WhatsApp dengan teks terformat berisi detail pesanan mereka.
*   **Batasan:**
    *   Tidak dapat menyimpan data pesanan di dalam aplikasi web.
    *   Tidak dapat memodifikasi konten visual maupun tekstual di aplikasi.
    *   Tidak dapat melihat riwayat pemesanan masa lalu di aplikasi.

---

## 2. Peran Pengguna Masa Depan (Pasca-MVP)

Peran berikut telah direncanakan untuk pengembangan tahap lanjutan setelah fondasi frontend MVP selesai dan divalidasi oleh pasar.

### Administrator (Admin)
Admin adalah pemilik bisnis WNB atau staf operasional yang bertanggung jawab mengelola penawaran paket, rute, galeri, dan meninjau pemesanan masuk.

*   **Autentikasi:** Direncanakan melewati proses autentikasi aman menggunakan email/password dan sesi token (Opsi: JWT, cookie session, dll. - Status: Open).
*   **Hak Akses:**
    *   Masuk ke dasbor admin khusus (URL potensial: /admin/dashboard - Status: Open).
    *   Melakukan operasi CRUD (Create, Read, Update, Delete) pada data Paket Wisata.
    *   Melakukan operasi CRUD pada data Rute Perjalanan.
    *   Mengunggah, mengedit, dan menghapus foto di Galeri Dokumentasi.
    *   Melihat daftar reservasi/booking masuk yang disimpan di database potensial, mengubah status booking (Opsi status: Pending, Confirmed, Cancelled, Completed - Status: Open).
    *   Mengubah konfigurasi umum aplikasi seperti nomor WhatsApp admin aktif, harga promosi global, dan alamat kontak.
*   **Batasan:**
    *   Tidak diizinkan mengubah kode program inti aplikasi secara langsung melalui antarmuka dasbor.

---

## 3. Matriks Hak Akses Fitur (MVP vs Pasca-MVP)

| Fitur Aplikasi | Pengunjung (MVP) | Admin (Rencana Masa Depan) | Status Autentikasi |
| :--- | :---: | :---: | :--- |
| Membaca Katalog Paket & Rute | Ya | Ya | Publik |
| Mengisi Form Booking & WhatsApp | Ya | Ya | Publik |
| Melihat Galeri | Ya | Ya | Publik |
| Menambah/Edit Paket & Rute | Tidak | Ya | Membutuhkan Login Admin |
| Mengunggah Foto Galeri | Tidak | Ya | Membutuhkan Login Admin |
| Melihat Database Reservasi | Tidak | Ya | Membutuhkan Login Admin |
| Mengubah Status Booking | Tidak | Ya | Membutuhkan Login Admin |

> [!IMPORTANT]
> **Pernyataan Penundaan Autentikasi:**
> Sistem manajemen akun, registrasi, login, reset password, otorisasi peran, dan dasbor admin **sama sekali tidak dikembangkan pada tahap MVP ini**. Seluruh interaksi admin saat ini dilakukan langsung oleh pengembang melalui pembaruan kode statis (*static data modification*).
