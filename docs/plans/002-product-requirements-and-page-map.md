# Implementation Plan 002 — Product Requirements dan Page Map WNB

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Tahap sebelumnya:** Implementation Plan 001 — Struktur monorepo
- **Jenis pekerjaan:** Dokumentasi produk dan arsitektur awal
- **Status frontend:** Belum diinisialisasi
- **Status backend:** Belum diinisialisasi

---

## Tujuan

Susun dokumentasi kebutuhan produk WNB sebelum menginisialisasi frontend dan backend.

Tahap ini bertujuan untuk menetapkan:

1. Tujuan aplikasi.
2. Ruang lingkup MVP.
3. Peran pengguna.
4. Daftar halaman.
5. Route aplikasi.
6. Hubungan antarhalaman.
7. User flow utama.
8. Kebutuhan fungsional.
9. Kebutuhan nonfungsional.
10. Arah visual berdasarkan mockup.
11. Keputusan teknologi awal.
12. Batasan fitur yang belum dikerjakan.

Tahap ini **tidak mengimplementasikan kode aplikasi**.

---

## Konteks Produk

WNB adalah singkatan dari **Wisata Ngaprak Bandung**.

WNB direncanakan sebagai aplikasi web untuk memperkenalkan dan memasarkan pengalaman wisata petualangan di Bandung, terutama kegiatan seperti:

- Perjalanan menggunakan kendaraan off-road Land Rover klasik dengan varian Short dan Long.
- Off-road.
- Wisata pegunungan.
- Corporate outing.
- Perjalanan kelompok atau komunitas.
- Paket perjalanan khusus.
- Dokumentasi dan galeri perjalanan.
- Pemesanan melalui WhatsApp pada tahap MVP.

Aplikasi harus menampilkan citra petualangan yang kuat, profesional, aman, dan mudah digunakan.

---

## Posisi Mockup

Mockup yang telah dibuat digunakan sebagai:

- Referensi identitas visual.
- Referensi nuansa desain.
- Referensi gaya card, heading, gambar, dan tombol.
- Referensi jenis konten yang dapat ditampilkan.

Mockup **bukan** susunan halaman final yang harus disalin secara persis.

Konten dalam mockup akan dibagi menjadi beberapa halaman terpisah agar:

- Navigasi lebih jelas.
- Konten lebih mudah dikelola.
- Struktur frontend lebih rapi.
- Data backend nantinya lebih mudah dipisahkan.
- Aplikasi lebih mudah dikembangkan.

Jangan menganggap tiga kolom pada mockup sebagai tiga halaman final atau satu layout yang harus dipertahankan.

---

## Arah Visual

Gunakan mockup sebagai dasar arah visual berikut:

### Karakter desain

- Adventure.
- Rugged.
- Modern.
- Monokrom.
- Profesional.
- Berani.
- Fotografi alam dan kendaraan sebagai elemen utama.

### Warna utama

- Hitam.
- Putih.
- Abu-abu.
- Warna foto alam digunakan sebagai aksen visual.

### Tipografi

- Heading besar.
- Heading tebal.
- Banyak menggunakan huruf kapital.
- Font heading dapat menggunakan gaya condensed.
- Body text menggunakan sans-serif yang mudah dibaca.

### Komponen visual

- Card berlatar gelap.
- Border tipis.
- Tombol putih pada background gelap.
- Tombol gelap pada background terang bila diperlukan.
- Siluet gunung atau bentuk sobekan sebagai pemisah visual.
- Perpaduan foto berwarna dan hitam-putih.
- Ikon sederhana dan tegas.

### Prinsip penggunaan mockup

- Jangan menyalin posisi elemen secara mutlak.
- Jangan mempertahankan placeholder Lorem Ipsum.
- Jangan menyalin teks acak yang tidak relevan.
- Jangan menggunakan path lokal komputer untuk gambar atau tautan.
- Jangan menganggap jumlah card pada mockup sebagai jumlah data final.
- Gunakan mockup hanya sebagai visual direction.

---

## Ruang Lingkup MVP

MVP WNB harus berfokus pada informasi, eksplorasi, dan kontak pemesanan.

### Fitur yang termasuk MVP

1. Halaman beranda.
2. Halaman tentang WNB.
3. Daftar paket perjalanan.
4. Detail paket perjalanan.
5. Daftar rute.
6. Detail rute.
7. Galeri.
8. Halaman booking.
9. Integrasi booking melalui WhatsApp.
10. Responsive layout.
11. Navigasi antarseluruh halaman.
12. Halaman tidak ditemukan.
13. Data sementara menggunakan typed local data pada tahap frontend awal.

### Fitur yang belum termasuk MVP

Jangan memasukkan fitur berikut ke dalam implementasi awal:

- Registrasi pengguna.
- Login pengguna.
- Akun pelanggan.
- Pembayaran online.
- Keranjang.
- Sistem tiket.
- Dashboard admin.
- Pengelolaan konten melalui CMS.
- Database booking.
- Notifikasi otomatis.
- Sistem ulasan pengguna.
- Rating pengguna.
- Chat internal.
- Rekomendasi berbasis AI.
- Integrasi peta interaktif.
- Pelacakan kendaraan.
- Backend API.
- Database.
- Upload gambar melalui aplikasi.

Fitur tersebut dapat dipertimbangkan setelah MVP frontend selesai dan kebutuhan bisnis telah dikonfirmasi.

---

## Peran Pengguna

Untuk perencanaan jangka panjang, dokumentasikan dua peran pengguna:

### 1. Pengunjung

Pengunjung dapat:

- Membuka beranda.
- Membaca informasi WNB.
- Melihat daftar paket.
- Melihat detail paket.
- Melihat daftar rute.
- Melihat detail rute.
- Membuka galeri.
- Mengisi informasi awal booking.
- Menghubungi WNB melalui WhatsApp.

Pengunjung tidak perlu login pada MVP.

### 2. Admin

Admin direncanakan untuk tahap pengembangan berikutnya.

Admin nantinya dapat:

- Mengelola paket.
- Mengelola rute.
- Mengelola galeri.
- Mengelola konten halaman.
- Mengelola informasi booking.

Dashboard dan autentikasi admin tidak dibuat pada tahap MVP.

---

## Sitemap

Gunakan sitemap berikut:

```text
/
├── Home
├── About
├── Paket
│   └── Detail Paket
├── Rute
│   └── Detail Rute
├── Gallery
├── Booking
└── Not Found
```

---

## Route Aplikasi

Dokumentasikan route berikut:

```text
/                     Home
/about                About
/paket                Daftar paket
/paket/:slug          Detail paket
/rute                 Daftar rute
/rute/:slug           Detail rute
/gallery              Gallery
/booking              Booking
/*                    Not Found
```

Gunakan slug yang mudah dibaca.

Contoh:

```text
/paket/land-rover-adventure
/paket/corporate-outing
/rute/:slug
/rute/nama-rute
```

Jangan gunakan ID numerik pada URL utama bila slug dapat digunakan.

---

## Struktur Navigasi

Navbar utama harus direncanakan dengan menu:

```text
Home
About
Paket
Rute
Gallery
```

Tambahkan tombol utama:

```text
Booking Sekarang
```

Tujuan route:

```text
Home              → /
About             → /about
Paket             → /paket
Rute              → /rute
Gallery           → /gallery
Booking Sekarang  → /booking
```

Navbar harus dapat digunakan pada desktop dan mobile.

Pada mobile, navbar menggunakan hamburger menu.

---

## Definisi Halaman

## 1. Home

### Tujuan

Memberikan gambaran singkat mengenai WNB dan mengarahkan pengguna menuju halaman utama lainnya.

### Konten minimum

- Navbar.
- Hero.
- Headline utama.
- Deskripsi singkat.
- CTA menuju paket.
- Ringkasan tentang WNB.
- Paket unggulan.
- Rute unggulan.
- Alasan memilih WNB.
- Cuplikan galeri.
- Testimoni.
- CTA booking.
- Footer.

### Interaksi utama

- CTA hero menuju `/paket`.
- Card paket menuju detail paket.
- Card rute menuju detail rute.
- Tombol gallery menuju `/gallery`.
- CTA booking menuju `/booking`.

Home hanya menampilkan ringkasan, bukan seluruh konten.

---

## 2. About

### Tujuan

Menjelaskan identitas, nilai, dan keunggulan WNB.

### Konten minimum

- Hero atau page header.
- Cerita WNB.
- Manifesto.
- Visi perjalanan.
- Nilai utama.
- Tim atau komunitas.
- Kendaraan yang digunakan.
- Standar keamanan.
- Keunggulan WNB.
- CTA menuju paket atau booking.

### Nilai yang dapat ditampilkan

- Adventure experience.
- Keselamatan.
- Driver profesional.
- Kendaraan terawat.
- Perjalanan kelompok.
- Fleksibilitas perjalanan.
- Pengalaman lokal Bandung.

---

## 3. Paket

### Tujuan

Menampilkan pilihan layanan atau produk perjalanan yang dapat dipilih pengunjung.

### Konten minimum

- Page header.
- Penjelasan singkat.
- Filter kategori bila dibutuhkan nanti.
- Grid card paket.
- CTA custom trip.
- CTA booking.

### Contoh kategori paket

- Land Rover Adventure.
- Open Off-Road.
- Mountain Adventure.
- Corporate Outing.
- Community Trip.
- Custom Trip.

Kategori tersebut masih dapat disesuaikan.

### Informasi card paket

- Nama paket.
- Slug.
- Gambar.
- Deskripsi singkat.
- Durasi.
- Kapasitas.
- Harga mulai, bila tersedia.
- Daftar highlight.
- Tombol detail.
- Tombol booking.

---

## 4. Detail Paket

### Tujuan

Memberikan informasi lengkap mengenai satu paket.

### Konten minimum

- Nama paket.
- Hero image.
- Deskripsi.
- Highlight paket.
- Durasi.
- Kapasitas peserta.
- Lokasi.
- Fasilitas.
- Hal yang tidak termasuk.
- Pilihan rute.
- Galeri terkait.
- Informasi harga atau permintaan penawaran.
- CTA booking.
- Paket lain yang direkomendasikan.

### Interaksi utama

- Booking menuju `/booking` dengan paket terpilih.
- Rute terkait menuju halaman detail rute.
- Paket rekomendasi menuju halaman detail paket lain.

---

## 5. Rute

### Tujuan

Menampilkan jalur perjalanan yang tersedia.

Paket dan rute harus dianggap sebagai dua entitas berbeda.

### Perbedaan paket dan rute

- **Paket** adalah layanan yang dipilih atau dibeli pengguna.
- **Rute** adalah jalur atau lokasi perjalanan yang digunakan oleh satu atau lebih paket.

### Informasi card rute

- Nama rute.
- Slug.
- Gambar.
- Lokasi.
- Tingkat kesulitan.
- Estimasi durasi.
- Kondisi jalur.
- Pemandangan utama.
- Paket terkait.
- Tombol detail.

---

## 6. Detail Rute

### Tujuan

Memberikan informasi lengkap mengenai satu jalur perjalanan.

### Konten minimum

- Nama rute.
- Hero image.
- Lokasi.
- Deskripsi.
- Tingkat kesulitan.
- Estimasi durasi.
- Kondisi jalur.
- Titik keberangkatan.
- Destinasi atau titik akhir.
- Highlight pemandangan.
- Catatan keamanan.
- Paket yang menggunakan rute tersebut.
- CTA booking.

Peta interaktif belum wajib pada MVP.

---

## 7. Gallery

### Tujuan

Menampilkan dokumentasi pengalaman perjalanan WNB.

### Konten minimum

- Page header.
- Grid gallery.
- Kategori gallery.
- Foto perjalanan.
- Foto kendaraan.
- Foto alam.
- Foto corporate outing.
- Foto komunitas.
- Foto camping bila relevan.
- Lightbox atau preview gambar dapat direncanakan.

### Kategori awal

- All.
- Off-Road.
- Mountain.
- Corporate.
- Community.
- Camping.

Kategori dapat disesuaikan dengan aset yang tersedia.

---

## 8. Booking

### Tujuan

Mengumpulkan informasi dasar sebelum pengguna diarahkan ke WhatsApp.

### Data minimum

- Nama.
- Nomor WhatsApp.
- Paket pilihan.
- Rute pilihan bila tersedia.
- Tanggal rencana.
- Jumlah peserta.
- Catatan tambahan.

### Alur MVP

```text
Pengunjung memilih paket
        ↓
Membuka halaman booking
        ↓
Mengisi informasi singkat
        ↓
Aplikasi menyusun pesan WhatsApp
        ↓
Pengunjung diarahkan ke WhatsApp WNB
```

Pada MVP:

- Data tidak disimpan ke database.
- Tidak ada pembayaran.
- Tidak ada akun.
- Tidak ada status booking.
- Tidak ada email otomatis.

Nomor WhatsApp harus ditempatkan melalui environment atau konfigurasi terpusat pada tahap implementasi berikutnya.

Jangan hardcode nomor pribadi ke banyak komponen.

---

## 9. Not Found

### Tujuan

Menangani route yang tidak ditemukan.

### Konten minimum

- Pesan halaman tidak ditemukan.
- Tombol kembali ke Home.
- Visual yang tetap sesuai identitas WNB.

---

## User Flow Utama

## Flow 1 — Menjelajahi paket

```text
Home
  ↓
Paket unggulan
  ↓
Daftar paket
  ↓
Detail paket
  ↓
Booking
  ↓
WhatsApp
```

## Flow 2 — Menjelajahi rute

```text
Home
  ↓
Rute unggulan
  ↓
Daftar rute
  ↓
Detail rute
  ↓
Paket terkait
  ↓
Detail paket
  ↓
Booking
```

## Flow 3 — Melihat identitas WNB

```text
Home
  ↓
About
  ↓
Keunggulan dan keamanan
  ↓
Paket
```

## Flow 4 — Melihat dokumentasi

```text
Home
  ↓
Gallery
  ↓
Preview gambar
  ↓
Booking
```

---

## Kebutuhan Fungsional

Gunakan kode kebutuhan berikut:

### Navigasi

- `FR-NAV-001`: Pengunjung dapat berpindah ke semua halaman utama melalui navbar.
- `FR-NAV-002`: Navbar memiliki tampilan desktop dan mobile.
- `FR-NAV-003`: Logo mengarahkan pengguna ke Home.
- `FR-NAV-004`: Route aktif dapat ditandai secara visual.
- `FR-NAV-005`: Footer menyediakan navigasi penting.

### Home

- `FR-HOME-001`: Home menampilkan hero utama.
- `FR-HOME-002`: Home menampilkan paket unggulan.
- `FR-HOME-003`: Home menampilkan rute unggulan.
- `FR-HOME-004`: Home menampilkan alasan memilih WNB.
- `FR-HOME-005`: Home menampilkan cuplikan gallery.
- `FR-HOME-006`: Home menampilkan CTA booking.

### About

- `FR-ABOUT-001`: Pengunjung dapat membaca cerita WNB.
- `FR-ABOUT-002`: Pengunjung dapat melihat nilai dan standar keamanan WNB.
- `FR-ABOUT-003`: Pengunjung dapat menuju paket atau booking dari halaman About.

### Paket

- `FR-PKG-001`: Pengunjung dapat melihat daftar paket.
- `FR-PKG-002`: Pengunjung dapat membuka detail paket.
- `FR-PKG-003`: Setiap paket memiliki slug unik.
- `FR-PKG-004`: Detail paket menampilkan informasi penting.
- `FR-PKG-005`: Pengunjung dapat memilih paket untuk booking.

### Rute

- `FR-ROUTE-001`: Pengunjung dapat melihat daftar rute.
- `FR-ROUTE-002`: Pengunjung dapat membuka detail rute.
- `FR-ROUTE-003`: Setiap rute memiliki slug unik.
- `FR-ROUTE-004`: Detail rute menampilkan tingkat kesulitan dan durasi.
- `FR-ROUTE-005`: Detail rute menampilkan paket terkait.

### Gallery

- `FR-GAL-001`: Pengunjung dapat melihat kumpulan gambar.
- `FR-GAL-002`: Gambar dapat dikelompokkan berdasarkan kategori.
- `FR-GAL-003`: Pengunjung dapat membuka preview gambar.
- `FR-GAL-004`: Gambar memiliki alt text.

### Booking

- `FR-BOOK-001`: Pengunjung dapat memilih paket.
- `FR-BOOK-002`: Pengunjung dapat mengisi informasi booking.
- `FR-BOOK-003`: Form melakukan validasi input minimum.
- `FR-BOOK-004`: Aplikasi menyusun pesan WhatsApp.
- `FR-BOOK-005`: Pengunjung diarahkan ke WhatsApp.
- `FR-BOOK-006`: Data tidak disimpan ke database pada MVP.

### Error

- `FR-ERR-001`: Route yang tidak dikenal menampilkan halaman Not Found.
- `FR-ERR-002`: Pengunjung dapat kembali ke Home.

---

## Kebutuhan Nonfungsional

Gunakan kode kebutuhan berikut:

### Responsive

- `NFR-RESP-001`: Tampilan harus berfungsi pada mobile, tablet, laptop, dan desktop.
- `NFR-RESP-002`: Navbar mobile menggunakan hamburger menu.
- `NFR-RESP-003`: Card dan gallery menyesuaikan jumlah kolom berdasarkan lebar layar.
- `NFR-RESP-004`: Tidak boleh ada horizontal overflow yang tidak disengaja.

### Performance

- `NFR-PERF-001`: Gambar harus menggunakan ukuran yang sesuai kebutuhan.
- `NFR-PERF-002`: Gambar nonkritis menggunakan lazy loading.
- `NFR-PERF-003`: Hindari dependency besar tanpa kebutuhan jelas.
- `NFR-PERF-004`: Halaman harus tetap ringan pada koneksi mobile.

### Accessibility

- `NFR-A11Y-001`: Semua gambar informatif memiliki alt text.
- `NFR-A11Y-002`: Tombol dan link dapat digunakan dengan keyboard.
- `NFR-A11Y-003`: Warna memiliki kontras yang memadai.
- `NFR-A11Y-004`: Heading menggunakan hierarki yang benar.
- `NFR-A11Y-005`: Form memiliki label yang jelas.

### Maintainability

- `NFR-MAIN-001`: Kode frontend menggunakan TypeScript strict mode.
- `NFR-MAIN-002`: Data paket dan rute tidak ditulis berulang di banyak komponen.
- `NFR-MAIN-003`: Komponen umum harus dapat digunakan ulang.
- `NFR-MAIN-004`: Route disimpan dalam konfigurasi terpusat.
- `NFR-MAIN-005`: Environment value tidak di-hardcode di banyak tempat.

### Visual consistency

- `NFR-VIS-001`: Warna, spacing, typography, dan radius menggunakan design tokens.
- `NFR-VIS-002`: Seluruh halaman mengikuti identitas visual WNB.
- `NFR-VIS-003`: Tombol utama memiliki gaya yang konsisten.
- `NFR-VIS-004`: Card paket dan rute memiliki pola desain yang konsisten.

### Content

- `NFR-CONT-001`: Jangan menggunakan Lorem Ipsum pada hasil final.
- `NFR-CONT-002`: Konten sementara harus ditandai sebagai draft.
- `NFR-CONT-003`: Jangan menulis data harga, nomor WhatsApp, atau alamat tanpa konfirmasi.
- `NFR-CONT-004`: Jangan mengarang fakta mengenai WNB.

---

## Model Data Konseptual

Dokumentasikan model konseptual tanpa membuat kode atau database.

### Package

```text
Package
- id
- slug
- name
- shortDescription
- description
- coverImage
- galleryImages
- duration
- capacity
- startingPrice
- priceNote
- highlights
- facilitiesIncluded
- facilitiesExcluded
- routeSlugs
- featured
```

### Route

```text
Route
- id
- slug
- name
- shortDescription
- description
- coverImage
- galleryImages
- location
- startingPoint
- endPoint
- difficulty
- estimatedDuration
- terrainCondition
- highlights
- safetyNotes
- packageSlugs
- featured
```

### GalleryItem

```text
GalleryItem
- id
- image
- alt
- caption
- category
- relatedPackageSlug
- relatedRouteSlug
```

### Testimonial

```text
Testimonial
- id
- name
- organization
- quote
- image
```

### BookingDraft

```text
BookingDraft
- name
- whatsappNumber
- packageSlug
- routeSlug
- plannedDate
- participantCount
- notes
```

### Vehicle

```text
Vehicle
- id
- name
- variant: short | long
- image
- description
- capacity
- technicalSpecifications
```
*Catatan: Nilai `capacity` dan `technicalSpecifications` masih `TBD — membutuhkan konfirmasi pemilik proyek`.*

Model tersebut hanya referensi awal dan dapat direvisi saat backend direncanakan.

---

## Pemetaan Komponen Konseptual

Dokumentasikan komponen yang kemungkinan dibutuhkan saat frontend diinisialisasi.

### Global

```text
MainLayout
Navbar
MobileMenu
Footer
PageHeader
SectionHeading
PrimaryButton
SecondaryButton
ImageWithFallback
LoadingState
EmptyState
```

### Paket

```text
PackageCard
PackageGrid
FeaturedPackageSection
PackageHighlights
PackageFacilities
RelatedPackages
```

### Rute

```text
RouteCard
RouteGrid
FeaturedRouteSection
DifficultyBadge
RouteHighlights
RelatedRoutes
```

### Gallery

```text
GalleryGrid
GalleryFilter
GalleryItem
GalleryLightbox
```

### Booking

```text
BookingForm
PackageSelect
RouteSelect
ParticipantInput
WhatsAppBookingButton
```

Jangan membuat file komponen pada tahap ini.

---

## Keputusan Teknologi Awal

Dokumentasikan keputusan berikut:

### Frontend

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- React Router.
- Lucide React untuk ikon.
- Data awal menggunakan typed local data.
- Tidak menggunakan state management global sebelum ada kebutuhan nyata.

### Backend

Belum dipilih dan belum diinisialisasi.

Keputusan framework backend, ORM, dan database dilakukan setelah frontend MVP serta kebutuhan data telah lebih jelas.

### Package manager

Gunakan npm dan npm workspaces yang sudah dibuat pada Implementation Plan 001.

### Prinsip arsitektur

- Pisahkan `pages`, `features`, `components`, `services`, dan `types`.
- Pisahkan data paket dan rute.
- Hindari file komponen terlalu besar.
- Hindari abstraksi yang belum diperlukan.
- Gunakan route dan constants terpusat.
- Jangan membuat backend hanya untuk melayani data statis pada tahap awal.

---

## Dokumen yang Harus Dibuat

Buat file berikut:

```text
docs/
├── requirements/
│   ├── product-requirements.md
│   ├── functional-requirements.md
│   ├── non-functional-requirements.md
│   └── user-roles.md
│
├── design/
│   ├── page-map.md
│   ├── user-flow.md
│   └── visual-direction.md
│
├── architecture/
│   └── technology-decisions.md
│
└── plans/
    └── 002-product-requirements-and-page-map.md
```

File implementation plan ini harus disimpan sebagai:

```text
docs/plans/002-product-requirements-and-page-map.md
```

---

## Isi Setiap Dokumen

### `docs/requirements/product-requirements.md`

Wajib berisi:

- Ringkasan produk.
- Tujuan.
- Sasaran pengguna.
- Masalah yang diselesaikan.
- Ruang lingkup MVP.
- Fitur yang ditunda.
- Daftar halaman.
- Batasan produk.
- Asumsi awal.
- Hal yang membutuhkan konfirmasi bisnis.

### `docs/requirements/functional-requirements.md`

Wajib berisi seluruh functional requirements dengan kode:

```text
FR-NAV
FR-HOME
FR-ABOUT
FR-PKG
FR-ROUTE
FR-GAL
FR-BOOK
FR-ERR
```

### `docs/requirements/non-functional-requirements.md`

Wajib berisi seluruh nonfunctional requirements dengan kode:

```text
NFR-RESP
NFR-PERF
NFR-A11Y
NFR-MAIN
NFR-VIS
NFR-CONT
```

### `docs/requirements/user-roles.md`

Wajib berisi:

- Pengunjung.
- Admin masa depan.
- Hak dan batasan masing-masing.
- Penjelasan bahwa autentikasi belum termasuk MVP.

### `docs/design/page-map.md`

Wajib berisi:

- Sitemap.
- Daftar route.
- Tujuan setiap halaman.
- Konten utama setiap halaman.
- CTA utama setiap halaman.
- Hubungan antarrute.
- Pemetaan komponen konseptual.

### `docs/design/user-flow.md`

Wajib berisi:

- Flow menjelajahi paket.
- Flow menjelajahi rute.
- Flow melihat About.
- Flow membuka Gallery.
- Flow booking melalui WhatsApp.
- Gunakan Mermaid flowchart yang valid.
- Sertakan penjelasan teks di bawah diagram.

### `docs/design/visual-direction.md`

Wajib berisi:

- Posisi mockup sebagai visual reference.
- Karakter desain.
- Warna.
- Tipografi.
- Photography direction.
- Card direction.
- Button direction.
- Responsive direction.
- Hal yang tidak boleh disalin secara mutlak dari mockup.
- Catatan bahwa detail final menunggu aset dan konten asli.

### `docs/architecture/technology-decisions.md`

Wajib berisi:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- React Router.
- Lucide React.
- npm workspaces.
- Typed local data.
- Alasan backend ditunda.
- Alasan state management global belum diperlukan.
- Risiko dan konsekuensi setiap keputusan.
- Status keputusan: `Accepted`, `Deferred`, atau `Open`.

Gunakan format tabel keputusan bila sesuai.

---

## Pembaruan Dokumentasi yang Ada

Perbarui `docs/README.md` agar menambahkan daftar dokumen baru dengan tautan relatif.

Contoh:

```md
## Dokumen Produk

- [Product Requirements](requirements/product-requirements.md)
- [Functional Requirements](requirements/functional-requirements.md)
- [Non-Functional Requirements](requirements/non-functional-requirements.md)
- [User Roles](requirements/user-roles.md)

## Dokumen Desain

- [Page Map](design/page-map.md)
- [User Flow](design/user-flow.md)
- [Visual Direction](design/visual-direction.md)

## Dokumen Arsitektur

- [Technology Decisions](architecture/technology-decisions.md)
```

Jangan menggunakan link `file:///`.

Gunakan tautan relatif repository.

---

## Informasi yang Belum Boleh Dikarang

Jangan menentukan secara sepihak:

- Nomor WhatsApp WNB.
- Harga paket.
- Alamat kantor.
- Nama pemilik.
- Nama driver.
- Nama anggota tim.
- Kapasitas kendaraan.
- Durasi perjalanan final.
- Daftar rute final.
- Standar keamanan resmi.
- Legalitas perusahaan.
- Testimoni nyata.
- Akun media sosial.
- Copyright year atau nama badan usaha.

Gunakan penanda berikut bila informasi tersebut dibutuhkan:

```text
TBD — membutuhkan konfirmasi pemilik proyek
```

---

## Aturan Implementasi

1. Kerjakan pada branch `main`.
2. Jangan membuat branch baru.
3. Jangan menghapus Implementation Plan 001.
4. Jangan mengubah struktur root.
5. Jangan menginstal dependency.
6. Jangan menginisialisasi React atau Vite.
7. Jangan membuat file `.tsx`, `.ts`, `.css`, atau `.html`.
8. Jangan membuat UI.
9. Jangan membuat API.
10. Jangan membuat database.
11. Jangan membuat Docker atau CI/CD.
12. Jangan mengubah `package.json`.
13. Jangan mengubah `tsconfig`.
14. Jangan mengubah `.env.example`.
15. Jangan menambahkan informasi bisnis yang belum dikonfirmasi.
16. Gunakan Bahasa Indonesia yang jelas dan profesional.
17. Gunakan tautan relatif.
18. Pastikan Mermaid valid.
19. Hindari isi dokumen yang saling bertentangan.
20. Jangan membuat dokumen di luar daftar yang ditentukan tanpa alasan jelas.

---

## Pemeriksaan Sebelum Selesai

Pastikan:

- Semua file dokumentasi telah dibuat.
- Implementation Plan 002 tersimpan di `docs/plans`.
- Sitemap dan route konsisten.
- Paket dan rute dipisahkan sebagai entitas berbeda.
- Booking MVP diarahkan ke WhatsApp.
- Tidak ada backend atau database.
- Tidak ada autentikasi.
- Tidak ada informasi bisnis yang dikarang.
- Tidak ada link lokal `file:///`.
- Tidak ada dependency baru.
- Tidak ada perubahan pada package configuration.
- `docs/README.md` telah diperbarui.
- Seluruh dokumen menggunakan istilah yang konsisten.
- Mermaid dapat dibaca dan tidak memiliki sintaks yang rusak.
- Tidak ada kode aplikasi yang dibuat.

---

## Output yang Harus Dilaporkan

Setelah selesai, berikan laporan singkat berisi:

1. Daftar file yang dibuat.
2. Daftar file yang diperbarui.
3. Ringkasan sitemap.
4. Ringkasan ruang lingkup MVP.
5. Daftar keputusan teknologi.
6. Daftar informasi yang masih berstatus TBD.
7. Konfirmasi bahwa tidak ada dependency yang diinstal.
8. Konfirmasi bahwa belum ada kode frontend atau backend.
9. Ringkasan `git status`.
10. Rekomendasi nama commit:

```text
docs: define product requirements and page map
```

Jangan melakukan perubahan tambahan di luar implementation plan ini.
