# Home Page Design — WNB

Dokumen ini mendefinisikan rancangan, arsitektur komponen, salinan isi (*copywriting*), dan status implementasi halaman utama (**Home Page / Beranda**) WNB (Wisata Ngaprak Bandung).

---

## 1. Tujuan Halaman
Home Page (`/`) berfungsi sebagai pintu gerbang utama aplikasi WNB untuk:
- Membangun impresi awal petualangan klasik dan premium yang tangguh (*adventure, rugged, premium*).
- Mengarahkan pengunjung secara taktis untuk mengeksplorasi Katalog Paket, Katalog Rute, dan Galeri Foto WNB.
- Menyediakan alur langsung menuju halaman Booking.
- Menyajikan pengenalan konseptual dua kategori armada Land Rover WNB (Short SWB dan Long LWB).

---

## 2. Urutan Bagian Halaman (Section Sequence) & Warna
Untuk menjaga kedalaman dan kontras visual, diterapkan pola berselang-seling (*alternating background*) berikut:
1.  **Hero Section** (`bg-wnb-black`): Introduksi utama headline petualangan dan tombol aksi utama.
2.  **Manifesto Section** (`bg-wnb-surface`): Penjabaran karakter petualangan klasik WNB dan detail armada konseptual.
3.  **Explore Section** (`bg-wnb-black`): Navigasi taktis berupa grid card penghubung Paket, Rute, dan Galeri.
4.  **Vehicle Section** (`bg-wnb-surface`): Ulasan dua varian armada Land Rover (Short SWB dan Long LWB).
5.  **Final CTA Section** (`bg-wnb-surface-elevated`): Ajakan bertindak penutup dengan garis pembatas di atas dan bawah.

---

## 3. Komponen & Struktur File
Komponen diletakkan secara modular di dalam folder fitur `client/src/features/home/`:
- `homeTypes.ts`: Pendefinisian tipe data `ExploreItem` dan `VehicleItem`.
- `homeContent.ts`: Penyimpanan konten statis terpusat.
- `components/HomeMediaPlaceholder.tsx`: Komponen visual abu-abu bermotif garis (*media pattern*) sebagai pengganti foto resmi.
- `components/HeroSection.tsx`: Section pendaratan awal.
- `components/ManifestoSection.tsx`: Manifesto konsep WNB.
- `components/ExploreCard.tsx` & `ExploreSection.tsx`: Katalog navigasi interaktif.
- `components/VehicleCard.tsx` & `VehicleSection.tsx`: Informasi armada WNB.
- `components/FinalCtaSection.tsx`: CTA penutup halaman.

---

## 4. Strategi Aset Visual & Media Placeholder
- Karena aset foto dokumentasi asli WNB belum tersedia, halaman ini **tidak menggunakan foto palsu dari AI atau stock photo eksternal** demi menjaga kejujuran informasi.
- Digunakan komponen kontainer bermotif latar belakang garis abu-abu dengan label:
  `Aset foto resmi WNB akan ditambahkan`
- Kontainer placeholder ini dirancang dengan rasio aspek standar (`landscape aspect-video` dan `hero aspect-height`) sehingga mempermudah proses penggantian dengan tag `<img>` atau `<picture>` di masa mendatang tanpa merusak tata letak halaman.

---

## 5. Salinan Isi (*Copywriting*) Terpilih & Hubungan Rute
Semua salinan bahasa menggunakan Bahasa Indonesia yang netral, ramah SEO, dan tidak menggunakan klaim operasional yang belum terverifikasi:

*   **Hero Heading:** `LEBIH DARI PERJALANAN. INI CERITA.`
    *   *Jelajahi Paket* mengarah ke `/paket`
    *   *Lihat Rute* mengarah ke `/rute`
*   **Manifesto Heading:** `PETUALANGAN DENGAN KARAKTER KLASIK`
    *   Menjabarkan Land Rover klasik berbodi besi/logam varian Short dan Long di Bandung tanpa menyebut area operasional Lembang, Ciwidey, atau Pangalengan.
*   **Explore Heading:** `PILIH INFORMASI YANG ANDA BUTUHKAN`
    *   *Lihat Paket* mengarah ke `/paket`
    *   *Lihat Rute* mengarah ke `/rute`
    *   *Buka Galeri* mengarah ke `/gallery`
*   **Vehicle Heading:** `LAND ROVER SHORT DAN LONG`
    *   Mencantumkan fakta bahwa armada terbuat dari besi/logam dan merupakan kendaraan off-road klasik. Spesifikasi performa lainnya ditandai TBD.
*   **Final CTA Heading:** `SIAPKAN PETUALANGAN ANDA BERSAMA WNB`
    *   *Buka Halaman Booking* mengarah ke `/booking`
    *   *Pelajari WNB* mengarah ke `/about`

---

## 6. Daftar Data Menunggu Konfirmasi (TBD)
Data-data berikut belum terintegrasi di halaman utama karena masih membutuhkan keputusan pemilik proyek:
- Foto utama Hero.
- Foto Manifesto.
- Foto unit Land Rover Short (SWB) & Long (LWB).
- Daftar 3 Paket Wisata Unggulan.
- Daftar 3 Rute Perjalanan Terfavorit.
- Grid Galeri Foto Pilihan.
- Ulasan & Testimoni Pelanggan.
- Nomor WhatsApp Resmi.

---

## 7. Perilaku Responsif & Aksesibilitas
*   **Responsif:** Menggunakan CSS Grid Tailwind (`grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`) agar halaman menyesuaikan otomatis pada perangkat seluler, tablet, hingga desktop tanpa kebocoran layar (*horizontal overflow*).
*   **Satu H1:** Halaman utama hanya memuat satu elemen `<h1>` yang terletak di bagian Hero. Section lainnya menggunakan tag `<h2>` dan `<h3>` secara runtut.
*   **Landmark Navigation:** Kontainer navigasi di Navbar (`aria-label="Navigasi utama"`), Mobile Drawer (`aria-label="Navigasi utama mobile"`), dan Footer (`aria-label="Navigasi footer"`) telah dilabeli secara aksesibel untuk alat pembaca layar (*screen reader*).
*   **Media Description:** Setiap placeholder gambar menyertakan `role="img"` dan `aria-label` yang menerangkan perannya secara tekstual.

---

## 8. Langkah Kerja Lanjutan
Ketika aset foto resmi dan data bisnis telah dikonfirmasi, langkah lanjutan meliputi:
1.  Mengganti komponen `HomeMediaPlaceholder` dengan tag `<img>` atau `<picture>` responsif.
2.  Membuat data paket nyata di file data terpusat dan menyalurkannya ke dalam komponen `PackageCard` dinamis di Beranda.
3.  Memasukkan data rute nyata ke dalam komponen `RouteCard` dinamis di Beranda.
