# Implementation Plan 006 — Home Page Visual Enhancement

## Status Persetujuan

- **Status:** APPROVED FOR IMPLEMENTATION
- **Disetujui oleh:** Pemilik proyek WNB
- **Tanggal keputusan:** 2026-07-17
- **Tahap implementasi kode:** Belum dijalankan
- **Executor:** Gemini Antigravity
- **Planner dan reviewer:** ChatGPT

Plan 006 menggantikan usulan awal implementasi halaman About. Fokus proyek tetap berada pada halaman Home (`/`) sampai tampilan utama WNB cukup matang, rapi, responsif, dan layak diperlihatkan.

Keputusan terbaru pemilik proyek pada plan ini merupakan sumber kebenaran terbaru dan secara khusus menggantikan larangan penggunaan stock photo pada bagian strategi aset di `docs/design/home-page.md`. Foto stok berlisensi bebas pakai sekarang diperbolehkan sebagai **aset ilustrasi sementara**, dengan batasan kejujuran visual yang dijelaskan dalam plan ini.

---

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (High)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Tahap ini mengubah beberapa komponen Home, typed content, styling responsif, pengelolaan aset lokal, optimasi gambar, dokumentasi sumber aset, serta aksesibilitas tanpa menambah dependency.
- **Token-efficiency rule:** Gunakan Flash High untuk eksekusi awal. Gunakan Pro High hanya apabila terjadi error TypeScript/build yang tidak terselesaikan setelah satu koreksi terarah atau struktur responsif mengalami konflik yang sulit ditelusuri.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Workspace aktif:** `client`
- **Halaman target:** Home (`/`)
- **Latest verified implementation baseline:** `c30d027bc33113412b3f596685cb43990888ee48`
- **Backend:** Tetap ditunda untuk MVP
- **Mockup:** Arah visual, bukan blueprint yang harus disalin 100%

---

## Tujuan

Meningkatkan halaman Home dari tampilan fondasi dengan media placeholder menjadi landing page wisata yang kuat secara visual, rapi, modern, dan tetap jujur terhadap status data bisnis WNB.

Hasil akhir harus:

1. Terlihat layak dipresentasikan pada desktop maupun mobile.
2. Memperkuat karakter visual adventure, rugged, premium, dan monokrom.
3. Menggunakan foto stok berlisensi bebas pakai sebagai ilustrasi sementara.
4. Tidak mengesankan bahwa foto stok adalah dokumentasi resmi WNB.
5. Tidak mengarang harga, lokasi operasional spesifik, kapasitas kendaraan, nama rute, sejarah, testimoni, atau fakta bisnis lain yang belum dikonfirmasi.
6. Mempertahankan struktur komponen modular React + TypeScript yang sudah ada.
7. Tidak mengerjakan halaman About atau halaman lain.

---

## Keputusan Desain yang Telah Disetujui

### 1. Fokus tetap pada Home

Jangan mengimplementasikan `/about`. Placeholder About tetap dipertahankan.

### 2. Foto stok lokal diperbolehkan

Foto stok yang dipilih wajib:

- berasal dari Pexels;
- berstatus free to use menurut halaman sumber;
- diunduh dan disimpan lokal di repository;
- tidak di-hotlink dari URL eksternal;
- dikonversi ke format WebP;
- dicatat sumber, fotografer, URL, fungsi, dan status sementaranya;
- diganti dengan aset resmi WNB pada tahap berikutnya ketika tersedia.

Pexels License:
`https://www.pexels.com/license/`

### 3. Kejujuran visual

Foto yang menampilkan kendaraan wajib diberi penanda kecil tetapi terbaca:

`Foto ilustrasi — bukan dokumentasi armada WNB`

Penanda tidak perlu diulang pada foto yang hanya menampilkan lanskap/jalan tanpa kendaraan.

Dilarang:

- menyebut kendaraan stok sebagai armada WNB;
- menyatakan lokasi pada foto sebagai rute WNB;
- memasukkan foto stok ke Galeri seolah-olah dokumentasi pelanggan WNB;
- mengklaim fotografer atau subjek foto mendukung WNB;
- memakai istilah `Jeep` dalam UI atau dokumentasi bisnis WNB;
- memakai foto stok sebagai bukti Short Wheelbase atau Long Wheelbase tanpa verifikasi model kendaraan.

### 4. Vehicle Section tidak memetakan foto stok ke SWB/LWB

Card Land Rover Short dan Land Rover Long tetap berbasis informasi terkonfirmasi. Jangan memasang foto stok tertentu sebagai bukti visual SWB atau LWB.

Perindah card melalui:

- hierarki tipografi yang lebih kuat;
- label besar `SWB` dan `LWB`;
- nomor editorial `01` dan `02`;
- border, spacing, dan hover yang lebih baik;
- daftar informasi terkonfirmasi;
- latar tipografis/dekoratif sederhana yang tidak menggambarkan spesifikasi kendaraan palsu.

---

## Daftar Aset Foto yang Disetujui

Seluruh foto berikut berstatus **temporary editorial stock asset**.

### 1. Hero

- **Target file:** `client/public/images/home/hero-adventure.webp`
- **Source page:** `https://www.pexels.com/photo/red-car-on-muddy-road-near-trees-761820/`
- **Photographer:** ahmad syahrir
- **Source location metadata:** Bandung, Indonesia
- **Use:** Background Hero
- **Required notice:** Ya
- **Alt direction:** `Foto ilustrasi Land Rover klasik melintasi jalur berlumpur`
- **Object position:** Utamakan kendaraan dan jalur; teks tetap memiliki negative space.

### 2. Manifesto

- **Target file:** `client/public/images/home/manifesto-forest-road.webp`
- **Source page:** `https://www.pexels.com/photo/scenic-dirt-road-through-lush-forest-35010879/`
- **Photographer:** Dave Karani
- **Use:** Media editorial Manifesto
- **Required notice:** Tidak
- **Alt direction:** `Jalan tanah berkelok di tengah hutan hijau`

### 3. Explore — Paket

- **Target file:** `client/public/images/home/explore-package.webp`
- **Source page:** `https://www.pexels.com/photo/classic-off-road-suv-driving-on-country-road-30902477/`
- **Photographer:** shoreline vehicles
- **Use:** Background card Paket Perjalanan
- **Required notice:** Ya
- **Alt direction:** `Foto ilustrasi kendaraan klasik dalam perjalanan di jalan pedesaan`

### 4. Explore — Rute

- **Target file:** `client/public/images/home/explore-route.webp`
- **Source page:** `https://www.pexels.com/photo/dirt-road-through-scenic-mountain-landscape-30389857/`
- **Photographer:** Antares 1111
- **Use:** Background card Rute Petualangan
- **Required notice:** Tidak
- **Alt direction:** `Jalan tanah yang melintasi lanskap pegunungan`

### 5. Explore — Galeri

- **Target file:** `client/public/images/home/explore-gallery.webp`
- **Source page:** `https://www.pexels.com/photo/mountains-behind-trees-and-dirt-road-15852669/`
- **Photographer:** Jacob Moore
- **Use:** Background card Galeri Perjalanan
- **Required notice:** Tidak
- **Alt direction:** `Jalan hutan dengan pegunungan di kejauhan`

### 6. Final CTA

- **Target file:** `client/public/images/home/final-cta-road.webp`
- **Source page:** `https://www.pexels.com/photo/scenic-mountain-road-with-car-in-forest-landscape-33484194/`
- **Photographer:** Ahmet
- **Use:** Background Final CTA
- **Required notice:** Tidak; kendaraan sangat kecil dan bukan fokus utama.
- **Alt direction:** Gambar dekoratif; gunakan alt kosong jika diterapkan melalui elemen gambar presentasional.

### Aturan fallback aset

Jika salah satu halaman sumber tidak dapat diunduh oleh executor:

1. Jangan mengganti foto secara bebas.
2. Pertahankan placeholder untuk posisi tersebut.
3. Laporkan aset mana yang gagal diunduh.
4. Jangan memakai foto dari Google Images, Pinterest, blog otomotif, media berita, atau sumber lisensi yang tidak jelas.

---

## Struktur Home yang Harus Dihasilkan

### A. Hero Section

Ubah Hero dari layout dua kolom placeholder menjadi visual hero penuh atau split-overlay yang dominan foto.

Persyaratan:

- tinggi minimum desktop sekitar `min-h-[78vh]` dan tetap proporsional pada mobile;
- foto mengisi area utama dengan `object-cover`;
- gunakan overlay gradient gelap agar teks terbaca;
- headline tetap satu-satunya `h1` pada halaman;
- pertahankan teks utama:
  - `Lebih dari perjalanan. Ini cerita.`
- pertahankan CTA:
  - `Jelajahi Paket`
  - `Lihat Rute`
- tambahkan eyebrow kecil yang netral, misalnya:
  - `Land Rover Classic Adventure — Bandung`
- jangan menambah statistik palsu;
- tampilkan notice foto ilustrasi di bagian bawah area media;
- hero image harus `loading="eager"` dan `fetchPriority="high"`.

### B. Manifesto Section

Buat section terasa seperti editorial magazine:

- desktop dua kolom asimetris;
- media lebih besar daripada sebelumnya;
- nomor editorial kecil `01`;
- label `Tentang Pengalaman`;
- heading tetap:
  - `Petualangan dengan karakter klasik`
- body copy hanya memuat fakta yang sudah terkonfirmasi;
- gunakan frame foto, border, dan caption sumber secara halus;
- mobile menempatkan gambar di atas teks.

### C. Explore Section

Ubah tiga card teks menjadi visual navigation cards berbasis foto.

Setiap card harus:

- memakai `<Link>` sebagai area interaktif utama;
- mempunyai foto `object-cover`;
- memakai overlay gelap;
- menampilkan ikon, title, deskripsi ringkas, dan panah;
- memiliki hover zoom ringan pada gambar;
- memiliki focus-visible yang jelas;
- tidak menggunakan transform berlebihan;
- menghormati `prefers-reduced-motion`;
- tinggi card konsisten;
- satu kolom pada mobile, dua kolom pada tablet bila sesuai, tiga kolom pada desktop.

Untuk card dengan kendaraan, tampilkan notice ilustrasi secara ringkas.

### D. Vehicle Section

Pertahankan dua card:

- Land Rover Short / SWB;
- Land Rover Long / LWB.

Perubahan visual:

- hapus ketergantungan visual terhadap stock photo untuk membedakan varian;
- gunakan layout card editorial;
- tambahkan nomor `01` dan `02`;
- buat label SWB/LWB lebih dominan;
- tampilkan fakta terkonfirmasi secara rapi;
- judul daftar wajib diubah menjadi `Informasi Terkonfirmasi`;
- jangan menambah kapasitas, mesin, tahun, performa, atau tingkat kenyamanan.

### E. Final CTA Section

Gunakan foto aerial/scenic sebagai background section:

- overlay hitam kuat;
- heading tetap:
  - `Siapkan petualangan Anda bersama WNB`
- tombol utama menuju `/booking`;
- tombol sekunder menuju `/about` boleh dipertahankan, tetapi jangan mengimplementasikan About;
- section harus tetap terbaca tanpa bergantung pada foto;
- jangan menggunakan urgency copy, diskon, atau klaim ketersediaan terbatas.

---

## Komponen dan Data

### Buat

```text
client/src/features/home/components/EditorialImage.tsx
client/public/images/home/
docs/assets/image-sources.md
```

`EditorialImage` harus mendukung minimal:

```ts
type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  illustrationNotice?: boolean;
};
```

Nama props boleh disesuaikan bila hasil akhirnya lebih type-safe dan sederhana. Jangan membuat komponen terlalu abstrak.

### Perbarui sesuai kebutuhan

```text
client/src/features/home/homeTypes.ts
client/src/features/home/homeContent.ts
client/src/features/home/components/HeroSection.tsx
client/src/features/home/components/ManifestoSection.tsx
client/src/features/home/components/ExploreCard.tsx
client/src/features/home/components/ExploreSection.tsx
client/src/features/home/components/VehicleCard.tsx
client/src/features/home/components/VehicleSection.tsx
client/src/features/home/components/FinalCtaSection.tsx
client/src/styles/globals.css
docs/context/business-facts.md
docs/context/current-state.md
docs/design/home-page.md
docs/README.md
README.md
```

### Pertahankan

- `HomeMediaPlaceholder.tsx` sebagai fallback reusable sampai seluruh aset resmi tersedia.
- `HomePage.tsx` tetap hanya menyusun section.
- route registry dan MainLayout.

### Jangan buat

- dependency baru;
- library animasi;
- image carousel;
- video background;
- parallax;
- CMS;
- backend;
- database;
- test framework;
- halaman About final;
- halaman Paket, Rute, Galeri, atau Booking final.

---

## Typed Content

Tambahkan properti media ke typed content agar path dan metadata gambar tidak tersebar di banyak komponen.

Arah tipe yang diperbolehkan:

```ts
type HomeEditorialMedia = {
  src: string;
  alt: string;
  objectPosition?: string;
  illustrationNotice?: boolean;
};
```

`ExploreItem` dapat memiliki properti `media` bertipe tersebut.

Hindari hardcode path gambar langsung di lebih dari satu komponen.

---

## Optimasi Gambar

Untuk setiap gambar:

1. Unduh versi yang cukup besar untuk target tampilan.
2. Crop sesuai komposisi section.
3. Konversi ke WebP.
4. Hapus metadata yang tidak diperlukan bila tooling tersedia.
5. Jangan commit file original JPEG/PNG jika versi WebP sudah cukup.
6. Target ukuran:
   - Hero: maksimal sekitar 500 KB.
   - Gambar lain: maksimal sekitar 300 KB per file.
7. Jangan menurunkan kualitas sampai terlihat pecah pada layar desktop.
8. Semua gambar selain Hero memakai `loading="lazy"`.
9. Tetapkan `width` dan `height` atau gunakan aspect ratio stabil untuk mencegah layout shift.

Jangan memasang package optimasi baru. Gunakan tooling yang sudah tersedia di sistem executor. Jika tidak tersedia, gunakan konversi bawaan yang dapat dijalankan tanpa mengubah dependency project.

---

## Aksesibilitas

Wajib:

1. Tambahkan `aria-labelledby` pada Hero dan Manifesto section yang merujuk ke heading masing-masing.
2. Pastikan dekorasi overlay tidak dibaca screen reader.
3. Alt text menjelaskan isi gambar, bukan mengulang headline.
4. Foto dekoratif murni menggunakan `alt=""`.
5. Notice `Foto ilustrasi` harus terbaca secara visual dan tidak hanya disimpan dalam `aria-label`.
6. Semua interactive card dapat dioperasikan dengan keyboard.
7. Focus state harus terlihat jelas di atas foto dan overlay.
8. Pertahankan satu `h1`.
9. Urutan heading harus logis.
10. Pastikan kontras teks tetap cukup pada seluruh breakpoint.

---

## Tiga Open Corrections yang Wajib Diselesaikan

Plan ini sekaligus menyelesaikan koreksi yang tertunda:

1. `homeContent.ts`
   - ubah `nama and detail rute` menjadi `nama dan detail rute`.
2. `VehicleCard.tsx`
   - ubah `Spesifikasi Terkonfirmasi` menjadi `Informasi Terkonfirmasi`.
3. `HeroSection.tsx` dan `ManifestoSection.tsx`
   - tambahkan hubungan `aria-labelledby` yang valid.

---

## Dokumentasi Aset

Buat `docs/assets/image-sources.md` dengan tabel minimal:

| File Lokal | Bagian UI | Fotografer | Source Page | License | Status | Notice |
|---|---|---|---|---|---|---|

Isi seluruh enam aset yang dipakai.

Gunakan status:

`Temporary stock illustration — replace with official WNB asset`

Dokumentasi juga harus menjelaskan:

- foto stok bukan dokumentasi resmi WNB;
- foto resmi WNB masih TBD;
- semua aset disimpan lokal dan tidak menggunakan hotlink;
- sumber lisensi adalah Pexels License.

Perbarui `docs/design/home-page.md` agar strategi aset baru tidak lagi bertentangan dengan keputusan pemilik proyek.

Perbarui `docs/context/business-facts.md` dengan kebijakan terkonfirmasi:

- stock imagery sementara diperbolehkan pada Home;
- kendaraan stok wajib diberi notice ilustrasi;
- aset resmi WNB tetap TBD.

Perbarui `docs/context/current-state.md` setelah implementasi selesai, tetapi jangan menulis SHA kandidat sebagai verified.

---

## Responsive Requirements

Minimum pemeriksaan manual oleh executor:

- lebar sekitar 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1280 px atau lebih.

Pastikan:

- tidak ada horizontal overflow;
- headline Hero tidak terpotong;
- CTA tidak keluar viewport;
- notice ilustrasi tetap terbaca;
- overlay tidak membuat teks hilang;
- gambar tidak gepeng;
- Explore cards tidak terlalu tinggi pada mobile;
- Vehicle cards memiliki ritme spacing konsisten.

---

## Batasan Copywriting

Boleh menggunakan:

- `wisata petualangan`;
- `Land Rover klasik`;
- `varian Short dan Long`;
- `Bandung` sebagai wilayah umum;
- `Paket`, `Rute`, `Galeri`, dan `Booking`.

Dilarang menambahkan:

- Bandung Barat, Bandung Selatan, Lembang, Ciwidey, Pangalengan, atau lokasi spesifik lain;
- harga, diskon, durasi, kapasitas, rating, jumlah perjalanan, jumlah armada;
- nama rute;
- testimoni;
- driver terlatih atau bersertifikat;
- klaim keselamatan yang belum terkonfirmasi;
- sejarah WNB;
- klaim kendaraan pada foto sebagai armada WNB;
- istilah `Jeep` untuk menyebut armada WNB.

---

## Validation Commands

Jalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya wajib berhasil.

Selain itu periksa:

```bash
git diff --check
git status --short
```

Lakukan pemeriksaan manual bahwa seluruh file gambar lokal dapat dimuat saat development server berjalan.

---

## Commit Rules

Gunakan satu commit implementasi dengan pesan:

```text
feat(client): enhance home page visuals
```

Jangan mencampurkan perubahan halaman lain.

Jangan mengubah `package-lock.json`.

Jangan memasang dependency baru.

---

## Laporan Executor yang Wajib Dikirim

Setelah selesai, Gemini Antigravity harus melaporkan:

1. Daftar file dibuat.
2. Daftar file diperbarui.
3. Daftar aset gambar dan ukuran masing-masing.
4. Konfirmasi seluruh source page dan photographer dicatat.
5. Hasil `npm run typecheck:client`.
6. Hasil `npm run build:client`.
7. Hasil `git diff --check`.
8. Hasil `git status --short` setelah commit.
9. SHA commit kandidat.
10. Catatan aset yang gagal diunduh, bila ada.

Commit tersebut berstatus **Candidate** sampai diperiksa oleh ChatGPT berdasarkan diff dari baseline terverifikasi.

---

## Acceptance Criteria

Plan 006 dianggap berhasil bila:

- Home tidak lagi terlihat sebagai halaman placeholder utama;
- Hero memiliki visual kuat dan teks tetap terbaca;
- Manifesto memiliki layout editorial;
- Explore cards menggunakan foto dan tetap aksesibel;
- Vehicle cards lebih rapi tanpa mengarang perbedaan teknis;
- Final CTA memiliki background visual yang kuat;
- semua stock image kendaraan diberi notice ilustrasi;
- semua gambar disimpan lokal dalam WebP;
- semua sumber foto terdokumentasi;
- tiga open corrections selesai;
- tidak ada halaman lain yang diimplementasikan;
- tidak ada dependency baru;
- typecheck dan build berhasil;
- tidak ada data bisnis palsu;
- repository tetap modular dan mudah diperbaiki.
