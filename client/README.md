# WNB Client (Frontend)

Folder ini berisi kode sumber untuk frontend aplikasi **Wisata Ngaprak Bandung (WNB)**.

## Deskripsi
Frontend WNB dikembangkan sebagai Single Page Application (SPA) berbasis komponen modular yang menyajikan informasi paket wisata, rute perjalanan, galeri dokumentasi, dan reservasi langsung.

## Desain & Application Shell Responsif
Aplikasi saat ini telah dilengkapi dengan *responsive application shell* lengkap yang menyesuaikan tata letak untuk ukuran layar ponsel, tablet, dan desktop secara otomatis tanpa adanya kebocoran visual (*horizontal overflow*).

### Halaman Beranda (`client/src/pages/HomePage/`)
Halaman utama WNB telah diimplementasikan penuh menggunakan pembagian section berikut:
- **Hero Section:** Headline utama, deskripsi pengantar, dan CTA menuju katalog paket/rute.
- **Manifesto Section:** Ulasan konseptual tentang karakter petualangan off-road klasik.
- **Explore Section:** Tautan navigasi grid tiga kolom (`Compass`, `Map`, `Images`).
- **Vehicle Section:** Pengenalan detail dua varian utama kendaraan Land Rover klasik (Short SWB dan Long LWB).
- **Final CTA Section:** Aksen penutup untuk mengarahkan pengguna ke halaman Booking.

> [!NOTE]
> Semua foto dokumentasi di halaman utama menggunakan komponen `HomeMediaPlaceholder` karena aset resmi WNB belum dikonfirmasi.

### Komponen Reusable UI (`src/components/common/`)
*   `Container`: Kontainer grid responsif yang menyelaraskan lebar maksimum konten.
*   `Button`: Tombol interaktif dengan varian *primary*, *secondary*, dan *ghost*.
*   `LinkButton`: Tautan transisi rute dengan styling visual tombol.
*   `SkipLink`: Tautan aksesibilitas keyboard cepat menuju konten utama.
*   `PageHeader`: Panel atas halaman dinamis.
*   `SectionHeading`: Header bagian halaman dengan dukungan subtitle dan deskripsi.
*   `PagePlaceholder`: Template tata letak halaman sementara untuk MVP.

### Navigasi & Shell (`src/components/navigation/` & `src/layouts/`)
*   `Navbar`: Navigasi desktop atas dengan backdrop blur lengket.
*   `MobileNavigation`: Menu laci (*drawer*) seluler aksesibel yang mendukung penguncian gulir, penutupan otomatis via Escape, dan pemicu perubahan rute.
*   `Footer`: Panel bawah terstruktur.
*   `BrandWordmark`: Representasi logo teks sementara (wordmark teks murni, bukan logo resmi gambar).
*   `MainLayout`: Struktur shell utama pembungkus aplikasi.

## Stack Teknologi Terpasang
- **Core Library:** React
- **Client Routing:** React Router (Declarative Mode)
- **Styling:** Tailwind CSS (via Vite plugin resmi v4)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Bahasa:** TypeScript

> [!NOTE]
> Semua nomor versi dependensi yang terpasang secara rinci dapat dilihat langsung pada berkas [package.json](package.json).

## Prasyarat
Sebelum menjalankan proyek ini, pastikan sistem Anda telah memiliki:
- **Node.js:** `^20.19.0 || >=22.12.0`
- **npm:** `>=10.0.0`

## Cara Menjalankan & Membangun Proyek

Jalankan perintah berikut dari **root repository** (bukan dari dalam folder `client`):

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```
2. **Menjalankan Server Pengembangan Lokal:**
   ```bash
   npm run dev:client
   ```
3. **Melakukan Typecheck TypeScript:**
   ```bash
   npm run typecheck:client
   ```
4. **Membangun Bundel Produksi (Build):**
   ```bash
   npm run build:client
   ```

## Daftar Route Aplikasi
Aplikasi mengonfigurasi jalur navigasi berikut:
*   Beranda (`/`): Halaman pendaratan utama. [Selesai]
*   Tentang Kami (`/about`): Profil dan cerita WNB. [Placeholder]
*   Katalog Paket (`/paket`): Grid penawaran petualangan. [Placeholder]
*   Detail Paket (`/paket/:slug`): Rincian spesifik satu paket petualangan. [Placeholder]
*   Katalog Rute (`/rute`): Daftar lintasan perjalanan fisik. [Placeholder]
*   Detail Rute (`/rute/:slug`): Informasi kondisi medan dan kesulitan rute. [Placeholder]
*   Galeri (`/gallery`): Dokumentasi foto aktivitas. [Placeholder]
*   Booking (`/booking`): Formulir reservasi awal via WhatsApp Click-to-Chat. [Placeholder]
*   Halaman Error 404 (`*`): Tampilan rute tidak ditemukan. [Selesai]

## Status Implementasi Saat Ini
- **Desain Halaman:** Halaman Beranda (`HomePage`) telah dibuat lengkap, sedangkan halaman utama lainnya masih menggunakan format placeholder terstruktur dasar.
- **Backend/API:** Belum dihubungkan/digunakan pada tahap MVP ini.
- **Data Bisnis:** Semua harga, nomor kontak, detail rute operasional, dan info driver masih berstatus TBD (menunggu konfirmasi pemilik proyek).
