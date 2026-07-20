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
1.  **Hero Section** (`bg-wnb-black`): Introduksi utama headline petualangan dengan background visual full-bleed dan tombol aksi utama.
2.  **Manifesto Section** (`bg-wnb-surface`): Pengantar brand WNB, makna Ngaprak, dan cerita singkat berbasis layout asimetris.
3.  **Explore Section** (`bg-wnb-black`): Navigasi taktis berupa grid card berbasis foto yang menghubungkan Paket, Rute, dan Galeri.
4.  **Vehicle Section** (`bg-wnb-surface`): Ulasan peran armada Land Rover (Short SWB dan Long LWB) dalam pengalaman menggunakan card editorial.
5.  **Experience Section** (`bg-wnb-black`): Ringkasan standar pengalaman WNB yang berfokus pada personalisasi, rute, karakter armada, dan momen.
6.  **Final CTA Section** (`bg-wnb-surface-elevated`): Ajakan bertindak penutup untuk konsultasi perjalanan dengan background lanskap pegunungan.

---

## 3. Komponen & Struktur File
Komponen diletakkan secara modular di dalam folder fitur `client/src/features/home/`:
- `homeTypes.ts`: Pendefinisian tipe data `ExploreItem`, `VehicleItem`, dan `HomeEditorialMedia`.
- `homeContent.ts`: Penyimpanan konten statis terpusat.
- `components/HomeMediaPlaceholder.tsx`: Komponen visual abu-abu bermotif garis (*media pattern*) sebagai fallback.
- `components/EditorialImage.tsx`: Komponen wrapper gambar stok dengan caption sumber dan label notice ilustrasi otomatis.
- `components/HeroSection.tsx`: Section pendaratan awal dengan background penuh.
- `components/ManifestoSection.tsx`: Cerita brand dan makna Ngaprak WNB.
- `components/ExploreCard.tsx` & `ExploreSection.tsx`: Katalog navigasi interaktif berbasis gambar latar.
- `components/VehicleCard.tsx` & `VehicleSection.tsx`: Informasi peran armada WNB bertema tipografis bersih.
- `components/ExperienceSection.tsx`: Section standar pengalaman WNB yang berisi empat pilar pengalaman.
- `components/FinalCtaSection.tsx`: CTA penutup halaman untuk merencanakan perjalanan.

---

## 4. Strategi Aset Visual & Media Placeholder
- Karena aset foto dokumentasi asli WNB belum tersedia, halaman ini menggunakan foto stok dari Pexels sebagai **aset ilustrasi sementara** (*temporary stock illustration*).
- Untuk menjaga kejujuran visual, setiap gambar yang memperlihatkan unit kendaraan wajib menyertakan keterangan: `"Foto ilustrasi — bukan dokumentasi armada WNB"`.
- Foto stok disimpan secara lokal dalam format WebP terkompresi guna memangkas bandwidth muatan halaman. Detail lisensi dan URL dicatat di dalam [docs/assets/image-sources.md](../assets/image-sources.md).
- Card spesifikasi armada pada `VehicleSection` sengaja tidak menyertakan foto unit agar tidak memicu misrepresentasi visual Short Wheelbase atau Long Wheelbase sebelum kendaraan aslinya dikonfirmasi.

---

## 5. Salinan Isi (*Copywriting*) Terpilih & Hubungan Rute
Semua salinan bahasa menggunakan Bahasa Indonesia yang netral, ramah SEO, berorientasi pengalaman, dan evergreen tanpa menggunakan klaim operasional yang belum terverifikasi atau menyebut ketiadaan data.

*   **Hero Heading:** `LEBIH DARI PERJALANAN. INI CERITA.`
    *   Eyebrow: `Land Rover Classic Adventure — Bandung`
    *   *Jelajahi Pengalaman* mengarah ke `/paket`
    *   *Kenali Rute* mengarah ke `/rute`
*   **Manifesto Heading:** `PETUALANGAN DENGAN KARAKTER KLASIK`
    *   Menjabarkan cerita operasi sejak 2019, makna Ngaprak, dan Land Rover klasik sebagai inti sensasi.
*   **Explore Heading:** `PILIH INFORMASI YANG ANDA BUTUHKAN`
    *   Copy *evergreen* menjelaskan fungsi masing-masing halaman.
    *   *Lihat Paket* mengarah ke `/paket`
    *   *Lihat Rute* mengarah ke `/rute`
    *   *Buka Galeri* mengarah ke `/gallery`
*   **Vehicle Heading:** `LAND ROVER SHORT DAN LONG`
    *   Mencantumkan peran varian Short dan Long dalam pengalaman tanpa spesifikasi numerik. Label fakta menggunakan `Karakter Utama`.
*   **Experience Heading:** `STANDAR PENGALAMAN WNB`
    *   Pilar pengalaman: Disesuaikan dengan Peserta, Rute Dipertimbangkan, Land Rover Berkarakter, dan Momen yang Berkesan.
*   **Final CTA Heading:** `SIAPKAN PETUALANGAN ANDA BERSAMA WNB`
    *   Fokus pada konsultasi perjalanan.
    *   *Rencanakan Perjalanan* mengarah ke `/booking`
    *   *Kenali WNB* mengarah ke `/about`

---

## 6. Daftar Data Menunggu Konfirmasi (TBD)
Data-data berikut belum terintegrasi di halaman utama karena masih membutuhkan keputusan pemilik proyek:
- Foto utama Hero resmi WNB.
- Foto Manifesto resmi WNB.
- Foto unit asli Land Rover Short (SWB) & Long (LWB) WNB.
- Daftar Paket Wisata Unggulan.
- Daftar Rute Perjalanan Terfavorit.
- Grid Galeri Foto Pilihan WNB.
- Ulasan & Testimoni Pelanggan.
- Nomor WhatsApp Resmi Admin.

---

## 7. Perilaku Responsif & Aksesibilitas
*   **Responsif:** Menggunakan CSS Grid Tailwind (`grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`) agar halaman menyesuaikan otomatis pada perangkat seluler, tablet, hingga desktop tanpa kebocoran layar (*horizontal overflow*).
*   **Satu H1:** Halaman utama hanya memuat satu elemen `<h1>` yang terletak di bagian Hero. Section lainnya menggunakan tag `<h2>` dan `<h3>` secara runtut.
*   **Landmark Navigation:** Kontainer navigasi di Navbar (`aria-label="Navigasi utama"`), Mobile Drawer (`aria-label="Navigasi utama mobile"`), dan Footer (`aria-label="Navigasi footer"`) telah dilabeli secara aksesibel untuk alat pembaca layar (*screen reader*).
*   **Aksesibilitas Section:** Tiap section besar telah dilabeli menggunakan `aria-labelledby` yang dipetakan ke ID tajuk utama masing-masing section.
