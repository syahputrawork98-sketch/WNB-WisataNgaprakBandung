# Page Map Document — WNB

Dokumen ini memetakan struktur navigasi, rute URL, konten halaman, dan komponen konseptual yang diperlukan untuk aplikasi **WNB (Wisata Ngaprak Bandung)** versi MVP.

## 1. Sitemap

Berikut adalah struktur hierarki halaman aplikasi WNB:

```text
/ (Beranda)
├── /about (Tentang Kami)
├── /paket (Daftar Paket Wisata)
│   └── /paket/:slug (Detail Paket Wisata)
├── /rute (Daftar Rute Perjalanan)
│   └── /rute/:slug (Detail Rute Perjalanan)
├── /gallery (Galeri Dokumentasi)
├── /booking (Formulir Pemesanan)
└── Not Found (Halaman Error 404)
```

## 2. Daftar Rute URL (Route Registry)

| Rute URL | Nama Halaman | Parameter URL | Keterangan |
| :--- | :--- | :--- | :--- |
| `/` | Home (Beranda) | Tidak ada | Halaman pendaratan utama (*landing page*). |
| `/about` | About (Tentang Kami) | Tidak ada | Profil WNB dan standar keamanan. |
| `/paket` | Paket List | Tidak ada | Katalog seluruh paket wisata yang tersedia. |
| `/paket/:slug` | Paket Detail | `slug` (String unik paket) | Informasi lengkap dari satu paket tertentu. |
| `/rute` | Rute List | Tidak ada | Katalog rute perjalanan off-road dan gunung. |
| `/rute/:slug` | Rute Detail | `slug` (String unik rute) | Rincian teknis jalur medan rute tertentu. |
| `/gallery` | Gallery | Tidak ada | Dokumentasi foto perjalanan dengan filter kategori. |
| `/booking` | Booking | `package` (Optional query) | Formulir pemesanan awal yang terhubung ke WhatsApp. |
| `/*` | Not Found | Wildcard | Halaman error jika URL tidak ditemukan. |

*Contoh slug:*
*   `/paket/land-rover-adventure`
*   `/paket/corporate-outing`
*   `/rute/:slug`
*   `/rute/nama-rute`

---

## 3. Definisi Halaman (Page Definitions)

### 1. Home (`/`)
*   **Tujuan:** Memberikan impresi awal petualangan yang kuat tentang WNB dan mengarahkan pengunjung mengeksplorasi layanan.
*   **Konten Utama:**
    *   Hero section dengan headline berani dan latar belakang video/foto Land Rover klasik off-road.
    *   Highlight Paket Unggulan (maksimal 3 paket).
    *   Highlight Rute Terfavorit (maksimal 3 rute).
    *   Sekilas cerita WNB & standar keamanan armada (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   Grid testimonial / review dari pengunjung terdahulu (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   CTA Booking di bagian bawah.
*   **CTA Utama:** Tombol "Jelajahi Paket" (mengarahkan ke `/paket`) dan "Pesan Sekarang" (mengarahkan ke `/booking`).

### 2. About (`/about`)
*   **Tujuan:** Membangun kredibilitas bisnis dengan menjelaskan sejarah WNB, visi, dan prioritas keamanan kami.
*   **Konten Utama:**
    *   Cerita asal mula WNB.
    *   Manifesto Petualangan (Visi & Misi).
    *   Spesifikasi armada Land Rover klasik yang digunakan (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   Dokumentasi pelatihan driver profesional & standar keselamatan darurat (TBD — hanya ditampilkan setelah dikonfirmasi).
*   **CTA Utama:** Tombol "Pilih Paket Perjalanan" (mengarahkan ke `/paket`).

### 3. Paket List (`/paket`)
*   **Tujuan:** Menyajikan seluruh paket perjalanan komersial WNB yang dapat disewa kelompok/individu.
*   **Konten Utama:**
    *   Grid card daftar paket wisata.
    *   Filter kategori paket (Land Rover Offroad, Family Trip, Corporate Gathering, Custom).
    *   Section khusus "Custom Trip" bagi yang ingin merancang perjalanan sendiri.
*   **CTA Utama:** Tombol "Detail Paket" pada setiap card paket (mengarahkan ke `/paket/:slug`).

### 4. Paket Detail (`/paket/:slug`)
*   **Tujuan:** Menyediakan seluruh informasi keputusan yang dihadapi pengunjung untuk memesan paket tersebut.
*   **Konten Utama:**
    *   Nama dan deskripsi lengkap paket.
    *   Galeri slide foto aktivitas dalam paket.
    *   Durasi (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   Kapasitas peserta (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   Fasilitas yang Didapat (*Included*) dan Tidak Didapat (*Excluded*).
    *   Rute perjalanan yang akan ditempuh (terkait dengan `/rute/:slug`).
    *   Estimasi harga mulai dari (startingPrice — TBD — hanya ditampilkan setelah dikonfirmasi).
*   **CTA Utama:** Tombol "Booking Paket Ini" (mengarahkan ke `/booking?package=slug`).

### 5. Rute List (`/rute`)
*   **Tujuan:** Memaparkan peta sebaran jalur petualangan yang ditawarkan WNB sebagai bukti variasi medan.
*   **Konten Utama:**
    *   Grid card daftar rute fisik.
    *   Informasi ringkas tingkat kesulitan dan pemandangan utama di setiap card.
*   **CTA Utama:** Tombol "Detail Rute" pada setiap card rute (mengarahkan ke `/rute/:slug`).

### 6. Rute Detail (`/rute/:slug`)
*   **Tujuan:** Memberikan panduan teknis medan dan visual jalur untuk meyakinkan pengunjung.
*   **Konten Utama:**
    *   Nama rute, lokasi, titik start, dan titik finish.
    *   Tingkat kesulitan (Easy, Medium, Hard) dengan indikator warna.
    *   Kondisi lintasan (lumpur, tanah liat, bebatuan tajam, sungai).
    *   Highlight pemandangan alam (TBD — hanya ditampilkan setelah dikonfirmasi).
    *   Daftar paket wisata WNB yang menggunakan rute ini.
*   **CTA Utama:** Tombol "Pilih Paket Rute Ini" (mengarahkan ke `/paket` atau langsung ke `/booking`).

### 7. Gallery (`/gallery`)
*   **Tujuan:** Memajang bukti kepuasan pelanggan dan keseruan aktivitas off-road secara visual.
*   **Konten Utama:**
    *   Filter tab kategori (Semua, Offroad, Gunung, Corporate Outing, Camping).
    *   Grid foto dokumentasi dengan efek hover dinamis.
*   **CTA Utama:** Klik pada foto membuka Lightbox Modal untuk melihat versi resolusi penuh.

### 8. Booking (`/booking`)
*   **Tujuan:** Mengumpulkan data reservasi awal pengunjung dan mengalihkan proses transaksi ke WhatsApp.
*   **Konten Utama:**
    *   Form isian: Nama, Nomor WhatsApp, Pilihan Paket, Tanggal Trip, Jumlah Peserta, dan Pesan Khusus.
    *   Panel ringkasan instruksi pemesanan WhatsApp.
*   **CTA Utama:** Tombol "Kirim Pemesanan via WhatsApp" yang memicu pengalihan URL WhatsApp.

### 9. Not Found (`/*`)
*   **Tujuan:** Mengembalikan pengunjung yang tersesat kembali ke halaman utama secara ramah.
*   **Konten Utama:**
    *   Ilustrasi ban bocor / tersesat di hutan (gaya petualangan).
    *   Pesan "Rute Tidak Ditemukan".
*   **CTA Utama:** Tombol "Kembali ke Jalur Utama (Beranda)" (mengarahkan ke `/`).

---

## 4. Pemetaan Komponen Konseptual (Conceptual Component Mapping)

Berikut adalah komponen React terencana yang akan dibuat pada tahapan inisialisasi frontend:

### Komponen Global (Layout & UI Common)
*   `MainLayout`: Wrapper utama pembungkus halaman (memuat Navbar dan Footer).
*   `Navbar`: Navigasi atas responsif dengan hamburger toggle untuk mobile.
*   `MobileMenu`: Menu overlay navigasi seluler saat hamburger aktif.
*   `Footer`: Navigasi bawah, informasi hak cipta, dan kontak singkat.
*   `PageHeader`: Header atas standar untuk halaman non-Home.
*   `Button`: Komponen tombol konsisten dengan varian `primary`, `secondary`, dan `outline`.

### Komponen Fitur Paket
*   `PackageCard`: Card visual untuk katalog paket wisata di `/paket` dan `/`.
*   `PackageGrid`: Grid responsif pembungkus `PackageCard`.
*   `PackageHighlights`: List detail keunggulan paket di halaman detail.
*   `PackageFacilities`: Panel pemisah list Fasilitas *Included* & *Excluded*.

### Komponen Fitur Rute
*   `RouteCard`: Card visual untuk katalog rute perjalanan di `/rute` dan `/`.
*   `RouteGrid`: Grid responsif pembungkus `RouteCard`.
*   `DifficultyBadge`: Label visual penanda tingkat kesulitan (Easy: hijau, Medium: kuning, Hard: merah).

### Komponen Fitur Galeri
*   `GalleryGrid`: Layout grid foto responsif.
*   `GalleryFilter`: Bar tab filter kategori foto.
*   `GalleryLightbox`: Modal peninjau foto resolusi penuh saat diklik.

### Komponen Fitur Booking
*   `BookingForm`: Formulir masukan data pemesanan.
*   `WhatsAppBookingButton`: Tombol khusus yang menangani validasi formulir dan menyusun redirect URL WhatsApp.
