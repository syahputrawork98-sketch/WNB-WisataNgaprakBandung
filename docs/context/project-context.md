# Project Context — WNB

Dokumen ini menyediakan ringkasan profil umum, tujuan produk, arsitektur frontend, dan batasan sistem aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Identitas Proyek (Project Identity)
*   **Nama Proyek:** WNB — Wisata Ngaprak Bandung
*   **Tipe Produk:** Aplikasi web informasi wisata petualangan
*   **Wilayah Umum Operasional:** Bandung
*   **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
*   **Arsitektur Monorepo:** npm workspaces
*   **Workspace Frontend:** `client/`
*   **Workspace Backend:** `server/` (Belum Aktif)

---

## 2. Tujuan Produk (Product Purpose)
Aplikasi WNB dibangun sebagai platform digital untuk:
1.  Memperkenalkan pengalaman wisata petualangan menggunakan Land Rover klasik.
2.  Menampilkan informasi Paket setelah data resminya dikonfirmasi.
3.  Menampilkan informasi Rute setelah nama, lokasi, dan detail jalurnya dikonfirmasi.
4.  Menampilkan Galeri setelah aset foto resmi tersedia.
5.  Menyediakan halaman Booking dengan rencana WhatsApp Click-to-Chat setelah nomor resmi dikonfirmasi.
6.  Menjadi portal informasi publik pada MVP.

---

## 3. Rute URL Aplikasi MVP (MVP Routes)
Aplikasi mengonfigurasi jalur navigasi Single Page Application (SPA) berikut:
*   `/` (Beranda): Halaman utama pengenalan WNB.
*   `/about` (Tentang Kami): Informasi profil WNB yang hanya menggunakan konten terkonfirmasi.
*   `/paket` (Katalog Paket): Daftar paket setelah data paket resmi tersedia.
*   `/paket/:slug` (Detail Paket): Detail satu paket berdasarkan data yang telah dikonfirmasi.
*   `/rute` (Katalog Rute): Daftar rute setelah nama dan lokasi rute dikonfirmasi.
*   `/rute/:slug` (Detail Rute): Detail satu rute berdasarkan data yang telah dikonfirmasi.
*   `/gallery` (Galeri): Dokumentasi visual setelah aset resmi tersedia.
*   `/booking` (Booking): Halaman persiapan booking; integrasi Click-to-Chat belum aktif sampai nomor WhatsApp resmi dikonfirmasi.
*   `*` (Error 404): Halaman penanganan alamat rute yang tidak ditemukan.

---

## 4. Arsitektur Teknis Frontend
Frontend WNB menggunakan susunan teknologi (*tech stack*) berikut:
-   **Core Library:** React
-   **Client Routing:** React Router (Declarative Mode)
-   **Styling CSS:** Tailwind CSS v4 (via plugin Vite resmi `@tailwindcss/vite`)
-   **Icons:** Lucide React
-   **Build & Bundler:** Vite
-   **Bahasa:** TypeScript
-   **Penyimpanan Data:** Objek statis bertipe TypeScript (*Typed Local Data*) pada frontend.

> [!NOTE]
> Versi pasti dependensi tercantum langsung di berkas [client/package.json](../../client/package.json) dan dikunci secara monorepo di berkas [package-lock.json](../../package-lock.json).

---

## 5. Batasan Aplikasi MVP (Application Boundaries)
Untuk mempercepat validasi pasar awal, fitur-fitur berikut **TIDAK TERMASUK** dalam ruang lingkup MVP:
-   Sistem autentikasi & login pengguna/admin.
-   Halaman Dashboard Admin untuk pengelolaan data.
-   Penyimpanan database transaksi pesanan atau manajemen status pemesanan.
-   Sistem CMS (Content Management System) dinamis.
-   Integrasi payment gateway (pembayaran langsung di web).
-   Sistem pemantauan / tracking armada secara real-time.
-   Pembangunan backend API server dinamis.
-   Penerapan test framework (unit/integration testing).
-   Penggunaan library animasi berat atau CSS framework tambahan di luar Tailwind.
