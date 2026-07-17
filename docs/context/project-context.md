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
1.  Memperkenalkan pengalaman wisata petualangan berkendara off-road secara aman dan menyenangkan.
2.  Menampilkan Katalog Paket Wisata komersial yang tersedia bagi individu maupun korporasi.
3.  Menampilkan Katalog Rute lintasan fisik (off-road, jalur pegunungan, dsb.) sebagai bukti variasi tingkat kesulitan.
4.  Menampilkan Galeri dokumentasi foto keseruan perjalanan sebelumnya.
5.  Menyediakan formulir pemesanan (*booking*) awal dengan alur pengalihan pengiriman pesan ke WhatsApp Click-to-Chat.
6.  Berfungsi sebagai portal informasi publik statis pada versi MVP.

---

## 3. Rute URL Aplikasi MVP (MVP Routes)
Aplikasi mengonfigurasi jalur navigasi Single Page Application (SPA) berikut:
*   `/` (Beranda): Hero, Manifesto, eksplorasi menu, dan pengenalan armada WNB.
*   `/about` (Tentang Kami): Cerita WNB, profil armada, dan prosedur keamanan operasional.
*   `/paket` (Katalog Paket): Grid katalog seluruh paket wisata yang tersedia.
*   `/paket/:slug` (Detail Paket): Rincian durasi, harga, rute, dan fasilitas masuk/keluar dari suatu paket tertentu.
*   `/rute` (Katalog Rute): Daftar seluruh jalur off-road fisik yang ditawarkan.
*   `/rute/:slug` (Detail Rute): Rincian kondisi jalan, titik awal/akhir, dan tingkat kesulitan rute tertentu.
*   `/gallery` (Galeri): Grid dokumentasi foto perjalanan dengan filter kategori.
*   `/booking` (Booking): Formulir reservasi awal terintegrasi WhatsApp.
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
