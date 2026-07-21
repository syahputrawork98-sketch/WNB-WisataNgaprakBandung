# PLAN 011 — IMPLEMENTASI HALAMAN GALERI WNB

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Target aplikasi:** `client`  
**Versi plan:** 1.0  
**Status:** Siap Dieksekusi  
**Kondisi repository saat plan disusun:** Plan 010 telah diverifikasi pada commit `4bf4d82bed11a51d10f12739b57f32b634a85dc0`

---

## 1. IDENTITAS DAN PERAN EXECUTOR

Kamu adalah executor teknis yang bekerja langsung pada repository lokal WNB melalui Antigravity.

Tugasmu adalah membaca kondisi kode terbaru, membuat rencana implementasi singkat, lalu mengimplementasikan **halaman Galeri WNB** berdasarkan instruksi lengkap dalam Plan 011 ini.

Jangan meminta akses Google Drive. Seluruh keputusan, batas penggunaan media, data awal, serta aturan implementasi yang diperlukan sudah disediakan dalam plan ini.

Plan ini hanya mengatur perubahan kode di repository. Jangan mengubah file di Google Drive.

---

## 2. TUJUAN PLAN 011

Plan 011 bertujuan untuk:

1. mengganti placeholder halaman Galeri dengan halaman publik yang lengkap;
2. mengubah URL canonical Galeri dari `/gallery` menjadi `/galeri`;
3. mempertahankan kompatibilitas URL lama melalui redirect `/gallery` menuju `/galeri`;
4. menampilkan delapan ilustrasi Paket WNB yang sudah digunakan di repository sebagai media awal Galeri;
5. memberi penanda yang jelas bahwa seluruh media awal merupakan **gambar ilustrasi**, bukan dokumentasi pelanggan atau dokumentasi perjalanan asli;
6. membuat filter kategori sederhana;
7. membuat grid Galeri responsif;
8. membuat lightbox yang dapat digunakan dengan mouse, keyboard, dan perangkat seluler;
9. menghubungkan setiap media Galeri dengan halaman Detail Paket yang sesuai;
10. melengkapi kartu Galeri pada section eksplorasi Beranda tanpa merombak Beranda;
11. menyiapkan arsitektur data agar dokumentasi asli dapat ditambahkan kemudian tanpa refactor besar;
12. memastikan halaman lulus typecheck dan production build.

---

## 3. POSISI PLAN 011 DALAM FASE PENGERJAAN

Plan 011 merupakan bagian dari:

```text
Fase 1 — Website Publik WNB
```

Plan ini dilaksanakan setelah:

```text
Plan 001–010
Fondasi, Beranda, Tentang Kami, Paket, Detail Paket,
Daftar Rute, dan Detail Rute
```

Plan ini belum masuk ke backend, admin, upload media, database, atau sistem manajemen konten.

Setelah Plan 011 selesai, pekerjaan Fase 1 dilanjutkan ke Plan 012 untuk halaman **Rencanakan Perjalanan / Booking** dan penyelesaian alur pelanggan.

---

## 4. KONDISI REPOSITORY YANG SUDAH DIKETAHUI

### 4.1 Halaman Galeri

File berikut sudah tersedia:

```text
client/src/pages/GalleryPage/GalleryPage.tsx
```

Kondisinya masih menggunakan `PagePlaceholder`.

Placeholder saat ini menyebut dokumentasi akan ditampilkan setelah foto resmi tersedia. Plan 011 harus mengganti placeholder tersebut sepenuhnya.

### 4.2 Routing saat ini

`routePaths.ts` saat ini menggunakan:

```ts
gallery: "/gallery";
```

URL canonical yang harus digunakan setelah Plan 011 adalah:

```text
/galeri
```

URL lama harus tetap ditangani melalui redirect:

```text
/gallery → /galeri
```

### 4.3 Navigasi

Navigasi desktop, mobile, dan footer menggunakan `ROUTE_PATHS.gallery` melalui sumber navigasi terpusat.

Karena itu, setelah nilai `ROUTE_PATHS.gallery` diubah menjadi `/galeri`, seluruh navigasi yang memakai constant tersebut harus otomatis mengarah ke URL baru.

Tetap lakukan pemeriksaan agar tidak ada link hard-coded `/gallery` yang tertinggal.

### 4.4 Data Paket

Sumber data berikut sudah tersedia:

```text
client/src/features/packages/packagesData.ts
```

Data Paket sudah memuat:

- nama Paket;
- slug Paket;
- deskripsi singkat;
- media utama;
- fallback media;
- alt text;
- penanda `illustrationNotice`.

Plan 011 harus menggunakan kembali sumber media tersebut. Jangan menggandakan URL gambar, fallback, atau alt text ke data Galeri.

### 4.5 Beranda

Section eksplorasi Beranda menyebut Paket, Rute, dan Galeri, tetapi data kartu eksplorasi saat ini baru berisi Paket dan Rute.

Plan 011 harus menambahkan satu kartu **Galeri** ke sumber data eksplorasi Beranda.

Jangan mengubah struktur, urutan section, atau copy lain di Beranda.

### 4.6 Main layout

`MainLayout` sudah menyediakan:

```tsx
<main id="main-content">
  <Outlet />
</main>
```

Karena itu, `GalleryPage` dilarang membuat elemen `<main>` baru dan dilarang membuat `id="main-content"` baru.

Gunakan wrapper `<div>`, fragment, atau section sesuai kebutuhan.

---

## 5. SUMBER KEBENARAN PLAN 011

Gunakan urutan prioritas berikut:

1. instruksi eksplisit dalam Plan 011 ini;
2. kondisi kode terbaru pada repository lokal;
3. pola visual dan teknis halaman Paket serta Rute yang sudah diverifikasi;
4. design token dan komponen umum yang sudah tersedia;
5. data Paket dari `packagesData.ts`;
6. keputusan media yang dicantumkan dalam bagian 9 plan ini.

Jangan menggunakan asumsi eksternal yang bertentangan dengan plan.

Jangan membaca Google Drive sebagai syarat eksekusi.

---

## 6. KEPUTUSAN PUBLIKASI MEDIA UNTUK VERSI AWAL

Pemilik proyek telah memberikan persetujuan untuk menggunakan delapan ilustrasi Paket utama sebagai media Galeri versi awal dengan menerima risiko keterbatasan aset saat ini.

Persetujuan tersebut berlaku dengan ketentuan berikut:

1. semua media wajib diberi label **Gambar Ilustrasi**;
2. media tidak boleh disebut dokumentasi asli WNB;
3. media tidak boleh disebut dokumentasi pelanggan;
4. media tidak boleh disebut dokumentasi perjalanan yang benar-benar telah berlangsung;
5. copy halaman harus menjelaskan bahwa Galeri awal menampilkan ilustrasi pengalaman;
6. dokumentasi asli dapat ditambahkan kemudian setelah pemeriksaan dan persetujuan publikasi;
7. persetujuan hanya berlaku untuk delapan media utama Paket yang tercantum dalam Plan 011;
8. gambar alternatif Corporate Adventure versi lama tidak digunakan;
9. video kandidat Beranda tidak digunakan;
10. media lain yang tidak tercantum tidak boleh ditambahkan tanpa keputusan baru.

Keputusan ini adalah keputusan proyek untuk implementasi frontend awal. Jangan mengubah status atau dokumen registri aset di Google Drive.

---

## 7. BATAS SCOPE

### 7.1 Wajib dikerjakan

- mengganti placeholder `GalleryPage`;
- mengubah URL canonical menjadi `/galeri`;
- menambahkan constant URL lama `/gallery`;
- menambahkan redirect URL lama ke URL canonical;
- membuat model/type Galeri;
- membuat sumber data Galeri yang diturunkan dari data Paket;
- membuat filter kategori;
- membuat kartu media Galeri;
- membuat fallback media;
- membuat lightbox aksesibel;
- membuat navigasi sebelumnya dan berikutnya dalam lightbox;
- menampilkan caption dan label ilustrasi;
- menghubungkan media dengan Detail Paket terkait;
- menambahkan empty state;
- menambahkan no-result state untuk filter;
- menambahkan CTA penutup;
- menambahkan kartu Galeri pada section eksplorasi Beranda;
- memeriksa desktop, tablet, dan mobile;
- menjalankan typecheck dan build.

### 7.2 Boleh diperbaiki jika langsung diperlukan

- import kecil;
- helper path Paket yang sudah tersedia;
- class responsif;
- focus state;
- penggunaan komponen umum;
- class `z-index` agar lightbox tampil di atas Navbar;
- pengecekan hard-coded `/gallery` yang berkaitan langsung dengan Galeri.

### 7.3 Dilarang dikerjakan

- jangan membuat halaman Detail Galeri;
- jangan membuat route `/galeri/:slug`;
- jangan membuat backend;
- jangan membuat database;
- jangan membuat upload media;
- jangan membuat admin Galeri;
- jangan membuat sistem login;
- jangan membuat fitur unduh;
- jangan membuat tombol share media;
- jangan menambahkan video;
- jangan menggunakan gambar Corporate Adventure versi alternatif;
- jangan mengunduh atau membuat gambar baru;
- jangan mengubah data harga Paket;
- jangan mengubah nama, fasilitas, durasi, kapasitas, status, atau ketentuan Paket;
- jangan mengubah data Rute;
- jangan mengisi `routeSlugs`;
- jangan membuat hubungan media dengan Rute;
- jangan mengubah Plan 009B atau Plan 010;
- jangan merombak Beranda;
- jangan merombak Navbar atau Footer;
- jangan memasang dependency baru;
- jangan melakukan commit;
- jangan melakukan push;
- jangan membuka pull request.

---

## 8. PRINSIP INFORMASI PUBLIK

Halaman Galeri harus mengikuti prinsip berikut:

1. Galeri berfungsi sebagai gambaran visual pengalaman WNB;
2. versi awal menggunakan ilustrasi Paket yang sudah ada;
3. penanda ilustrasi harus terlihat pada kartu dan lightbox;
4. copy tidak boleh menimbulkan kesan bahwa gambar merupakan foto pelanggan nyata;
5. caption tidak boleh menetapkan lokasi, waktu, peserta, atau kejadian tertentu yang tidak dapat dibuktikan;
6. dekorasi, makanan, perlengkapan, dan aktivitas yang terlihat pada ilustrasi tidak otomatis dianggap termasuk dalam Paket;
7. hubungan media hanya diarahkan ke Paket yang memang menjadi sumber media;
8. hubungan media dengan Rute belum dibuat;
9. informasi internal, nama file mentah, ID Drive, bukti izin, dan catatan verifikasi tidak ditampilkan;
10. halaman tetap harus berfungsi apabila satu atau seluruh media gagal dimuat;
11. dokumentasi asli nantinya dapat menggantikan atau menambah data tanpa mengubah struktur halaman;
12. jangan menggunakan kata-kata seperti “pelanggan kami”, “perjalanan ini berlangsung”, atau klaim dokumentasi nyata.

---

## 9. MEDIA YANG DIIZINKAN

Gunakan tepat delapan media utama berikut melalui data Paket yang sudah tersedia di repository:

| Urutan | ID Paket | Slug Paket | Judul Publik | Kategori Galeri |
|---:|---|---|---|---|
| 1 | PK-01 | `corporate-adventure` | Corporate Adventure | Kebersamaan & Perayaan |
| 2 | PK-02 | `family-adventure-short-trip` | Family Adventure — Short Trip | Petualangan & Alam |
| 3 | PK-03 | `family-adventure-full-experience` | Family Adventure — Full Experience | Petualangan & Alam |
| 4 | PK-04 | `birthday-adventure` | Birthday Adventure | Kebersamaan & Perayaan |
| 5 | PK-05 | `anniversary-adventure` | Anniversary Adventure | Kebersamaan & Perayaan |
| 6 | PK-06 | `surprise-adventure` | Surprise Adventure | Kebersamaan & Perayaan |
| 7 | PK-07 | `adventure-camping` | Adventure Camping | Camping & Aktivitas |
| 8 | PK-08 | `open-trip-adventure` | Open Trip Adventure | Petualangan & Alam |

### 9.1 Media yang tidak boleh digunakan

Jangan gunakan:

```text
package-corporate-adventure-main-v1.png
```

Alasan: media tersebut merupakan alternatif/arsip. Media utama Corporate Adventure sudah menggunakan versi 2 pada data Paket.

Jangan gunakan:

```text
video-hero-classic-offroad-wnb-v1.mp4
```

Alasan: video adalah kandidat Beranda dan berada di luar scope Plan 011.

### 9.2 Aturan sumber media

Jangan menulis ulang URL Drive dari tabel eksternal.

Ambil media dari object Paket:

```ts
pkg.media
```

Gunakan kembali:

```ts
pkg.media.src
pkg.media.fallbackSrc
pkg.media.alt
pkg.media.illustrationNotice
```

Gunakan kembali:

```ts
pkg.name
pkg.slug
pkg.shortDescription
```

Dengan cara tersebut:

- title Galeri berasal dari `pkg.name`;
- caption berasal dari `pkg.shortDescription`;
- media dan alt text berasal dari `pkg.media`;
- link Paket berasal dari `pkg.slug`.

Jangan menduplikasi informasi tersebut dalam string baru apabila tidak diperlukan.

---

## 10. KATEGORI GALERI

Gunakan kategori berikut:

```ts
export type GalleryCategory =
  | "semua"
  | "petualangan-alam"
  | "kebersamaan-perayaan"
  | "camping-aktivitas";
```

Label publik:

```text
Semua
Petualangan & Alam
Kebersamaan & Perayaan
Camping & Aktivitas
```

Urutan filter wajib sama dengan urutan di atas.

Filter harus menggunakan tombol, bukan link route baru.

Setiap tombol harus mempunyai:

```tsx
aria-pressed={isActive}
```

Filter harus dapat dipakai dengan keyboard dan mempunyai focus state yang terlihat.

Karena tersedia delapan media dan lebih dari satu kategori, filter ditampilkan pada Plan 011.

Arsitektur harus tetap memungkinkan filter disembunyikan kemudian apabila jumlah media tidak memadai.

---

## 11. ARSITEKTUR FILE YANG DIREKOMENDASIKAN

Buat struktur minimal berikut:

```text
client/src/features/gallery/
├── galleryTypes.ts
├── galleryData.ts
└── components/
    ├── GalleryCard.tsx
    ├── GalleryFilter.tsx
    ├── GalleryLightbox.tsx
    └── GalleryMediaView.tsx
```

Perbarui:

```text
client/src/pages/GalleryPage/GalleryPage.tsx
client/src/routes/routePaths.ts
client/src/routes/AppRoutes.tsx
client/src/features/home/homeContent.ts
```

File tambahan hanya boleh dibuat apabila benar-benar diperlukan, misalnya:

```text
client/src/features/gallery/galleryUtils.ts
```

Jangan memecah kode menjadi terlalu banyak file kecil tanpa manfaat.

---

## 12. MODEL DATA YANG DIREKOMENDASIKAN

Nama type boleh disesuaikan dengan pola repository, tetapi cakupannya minimal seperti berikut:

```ts
import type { PackageMedia } from "@/features/packages/packagesTypes";

export type GalleryCategoryKey =
  | "petualangan-alam"
  | "kebersamaan-perayaan"
  | "camping-aktivitas";

export type GalleryFilterKey = GalleryCategoryKey | "semua";

export type GalleryCategoryFilterItem = {
  key: GalleryFilterKey;
  label: string;
};

export type GalleryItem = {
  id: string;
  order: number;
  packageId: string;
  packageSlug: string;
  title: string;
  caption: string;
  category: GalleryCategoryKey;
  categoryLabel: string;
  sourceType: "illustration";
  sourceLabel: "Gambar Ilustrasi";
  media: PackageMedia;
};
```

Tidak wajib menyalin type persis jika struktur repository mempunyai pendekatan yang lebih konsisten.

Syarat wajib:

- jangan menggunakan `any`;
- `sourceType` harus membedakan ilustrasi dari dokumentasi asli;
- struktur harus dapat diperluas kelak, misalnya dengan source type `original-documentation`;
- data publik Galeri tidak menyimpan informasi internal registri aset;
- `media` harus mereferensikan media Paket, bukan copy URL baru.

---

## 13. PENYUSUNAN DATA GALERI

### 13.1 Config kurasi

Buat konfigurasi kurasi berdasarkan slug Paket.

Contoh pendekatan:

```ts
const GALLERY_PACKAGE_CONFIG = [
  {
    packageSlug: "corporate-adventure",
    category: "kebersamaan-perayaan",
    categoryLabel: "Kebersamaan & Perayaan",
  },
  {
    packageSlug: "family-adventure-short-trip",
    category: "petualangan-alam",
    categoryLabel: "Petualangan & Alam",
  },
  // lanjutkan sampai delapan Paket
] as const;
```

### 13.2 Membentuk data dari Paket

Ambil Paket dari `REGULAR_PACKAGES` atau helper yang tersedia.

Hasil item Galeri harus dibentuk dari data Paket:

```ts
{
  id: `gallery-${pkg.id.toLowerCase()}`,
  order,
  packageId: pkg.id,
  packageSlug: pkg.slug,
  title: pkg.name,
  caption: pkg.shortDescription,
  category: config.category,
  categoryLabel: config.categoryLabel,
  sourceType: "illustration",
  sourceLabel: "Gambar Ilustrasi",
  media: pkg.media,
}
```

Gunakan guard/type predicate agar Paket yang tidak ditemukan tidak menghasilkan nilai `undefined` dalam array akhir.

### 13.3 Urutan tampil

Urutan wajib mengikuti PK-01 sampai PK-08.

Jangan mengurutkan secara alfabetis.

### 13.4 Helper data

Sediakan helper minimal:

```ts
getAllGalleryItems()
getGalleryItemsByCategory(category)
getGalleryItemIndex(itemId)
```

Helper terakhir boleh diganti dengan pendekatan yang lebih sederhana di komponen, selama kode tetap jelas.

### 13.5 Konsistensi data

Jangan mengubah `packagesData.ts` hanya untuk kebutuhan Galeri.

Galeri harus menjadi consumer data Paket, bukan pemilik media Paket.

---

## 14. ROUTING DAN URL CANONICAL

Perbarui `ROUTE_PATHS` menjadi:

```ts
export const ROUTE_PATHS = {
  // path lain tetap
  gallery: "/galeri",
  galleryLegacy: "/gallery",
  // path lain tetap
} as const;
```

Tambahkan redirect di `AppRoutes.tsx`:

```tsx
<Route path={ROUTE_PATHS.gallery} element={<GalleryPage />} />
<Route
  path={ROUTE_PATHS.galleryLegacy}
  element={<Navigate to={ROUTE_PATHS.gallery} replace />}
/>
```

Urutan route harus jelas dan tidak mengganggu route lain.

Lakukan pencarian repository untuk string:

```text
/gallery
```

Klasifikasikan hasil:

- hard-coded link internal harus diganti ke `ROUTE_PATHS.gallery`;
- redirect legacy tetap memakai `/gallery` melalui constant;
- teks dokumentasi lama tidak perlu diubah kecuali berada dalam source runtime;
- jangan melakukan perubahan massal yang tidak berkaitan.

URL `/galeri` harus menjadi URL yang tampil setelah redirect.

---

## 15. IMPLEMENTASI HALAMAN GALERI

`GalleryPage` harus mengganti placeholder sepenuhnya.

Gunakan wrapper:

```tsx
<div className="...">
```

atau fragment.

Dilarang menggunakan:

```tsx
<main>
```

Dilarang menggunakan:

```tsx
id="main-content"
```

karena keduanya sudah disediakan oleh `MainLayout`.

### 15.1 Urutan section

Gunakan urutan berikut:

1. Hero Galeri;
2. pemberitahuan media ilustrasi;
3. filter kategori;
4. grid media;
5. CTA penutup.

Lightbox bukan section halaman. Lightbox muncul ketika pengguna membuka media.

---

## 16. HERO GALERI

Hero minimal memuat:

```text
Eyebrow: Galeri WNB
H1: Gambaran Visual Pengalaman WNB
```

Gunakan deskripsi yang jujur dan tidak berlebihan.

Copy yang direkomendasikan:

```text
Jelajahi gambaran visual Paket, kebersamaan, petualangan,
dan aktivitas WNB. Media awal pada halaman ini merupakan
ilustrasi pengalaman yang membantu pengunjung memahami suasana
perjalanan sebelum merencanakannya bersama tim WNB.
```

Copy boleh dirapikan agar konsisten dengan gaya website, tetapi maknanya tidak boleh berubah.

Hero boleh memiliki CTA ringan menuju Paket atau Rute, tetapi tidak wajib karena CTA utama sudah tersedia di bagian penutup.

Hero tidak boleh menulis:

```text
Dokumentasi pelanggan WNB
Foto perjalanan pelanggan
Momen nyata pelanggan kami
```

---

## 17. PEMBERITAHUAN MEDIA ILUSTRASI

Tampilkan satu notice yang mudah terlihat setelah Hero.

Copy yang direkomendasikan:

```text
Tentang media Galeri

Galeri versi awal menampilkan gambar ilustrasi untuk menggambarkan
karakter pengalaman WNB. Dokumentasi asli akan ditambahkan setelah
melalui pemeriksaan dan persetujuan publikasi.
```

Notice harus:

- mempunyai icon yang sesuai dari dependency yang sudah tersedia;
- tidak bergantung pada warna saja;
- menggunakan teks yang dapat dibaca pembaca layar;
- konsisten dengan komponen notice pada halaman Paket atau Rute;
- tidak tampil seperti error atau peringatan berbahaya.

Jangan menambahkan modal persetujuan.

---

## 18. FILTER GALERI

Filter diletakkan sebelum grid.

Tampilkan:

```text
Semua
Petualangan & Alam
Kebersamaan & Perayaan
Camping & Aktivitas
```

Aturan:

1. default aktif adalah `Semua`;
2. gunakan state lokal;
3. filter tidak mengubah URL;
4. gunakan tombol;
5. gunakan `aria-pressed`;
6. focus visible wajib;
7. jumlah item boleh ditampilkan apabila desainnya tetap rapi, tetapi tidak wajib;
8. jangan membuat dropdown pada desktop;
9. tombol boleh wrap pada mobile;
10. jangan membuat horizontal scroll yang sulit digunakan.

Apabila sebuah filter tidak menghasilkan media, tampilkan no-result state dengan tombol:

```text
Tampilkan Semua
```

Meskipun config saat ini seharusnya selalu menghasilkan media, state tersebut tetap dibuat sebagai perlindungan data masa depan.

---

## 19. GRID GALERI

Gunakan grid responsif.

Rekomendasi:

```text
Mobile kecil: 1 kolom
Mobile lebar/tablet kecil: 2 kolom
Desktop: 3 kolom
Desktop besar: tetap 3 atau maksimal 4 kolom jika proporsional
```

Jangan membuat masonry layout pada Plan 011.

Alasan:

- aset awal mempunyai orientasi serupa;
- grid biasa lebih stabil;
- lebih mudah untuk keyboard dan responsif;
- tidak memerlukan dependency.

Gunakan rasio thumbnail yang konsisten, misalnya:

```text
aspect-[4/3]
```

atau rasio lain yang paling sesuai dengan komponen Paket saat ini.

Grid harus mencegah layout shift melalui container aspect ratio.

---

## 20. KARTU GALERI

Setiap kartu minimal menampilkan:

- media thumbnail;
- label `Gambar Ilustrasi`;
- kategori;
- judul Paket;
- caption singkat;
- tindakan `Lihat Visual`.

Kartu harus dibuka melalui button atau elemen interaktif yang tepat.

Rekomendasi:

```tsx
<button
  type="button"
  aria-haspopup="dialog"
  aria-label={`Buka visual ${item.title}`}
  onClick={...}
>
```

Jangan membungkus seluruh kartu dengan link Paket karena tindakan utama kartu adalah membuka lightbox.

Link menuju Paket ditampilkan di dalam lightbox.

Pastikan:

- tombol mempunyai focus state;
- hover tidak menjadi satu-satunya penanda interaksi;
- teks tidak terpotong secara berlebihan;
- caption maksimal sekitar 2–3 baris pada kartu;
- title tetap terbaca pada mobile;
- tidak ada nested interactive elements.

---

## 21. MEDIA VIEW DAN FALLBACK

Buat `GalleryMediaView` atau gunakan pola aman yang setara dengan `PackageMediaView`.

Urutan sumber:

1. `item.media.src`;
2. `item.media.fallbackSrc`;
3. fallback CSS resmi jika keduanya gagal.

Fallback akhir harus menampilkan konteks minimal seperti:

```text
Visual WNB belum dapat dimuat
```

atau:

```text
Gambar Ilustrasi
```

Fallback tidak boleh menghasilkan broken image icon.

Aturan gambar:

```tsx
loading="lazy"
decoding="async"
```

Media yang sedang dibuka di lightbox boleh memakai loading eager atau browser default jika sudah tersedia dalam cache.

Jangan membuat request manual menggunakan `fetch` terhadap URL gambar.

Jangan mengubah URL Google Drive yang sudah dipakai Paket.

Seluruh gambar tetap diberi label ilustrasi selama `sourceType` adalah `illustration`.

---

## 22. LIGHTBOX

Lightbox adalah komponen interaksi pada halaman Galeri, bukan route baru.

### 22.1 Isi lightbox

Lightbox minimal menampilkan:

- media ukuran besar;
- judul;
- caption;
- kategori;
- label `Gambar Ilustrasi`;
- urutan media, misalnya `2 dari 8`;
- tombol sebelumnya;
- tombol berikutnya;
- tombol tutup;
- CTA menuju Detail Paket terkait.

CTA Paket:

```text
Lihat Detail Paket
```

Gunakan helper:

```ts
buildPackageDetailPath(item.packageSlug)
```

Jangan menampilkan CTA Rute karena hubungan media–Rute belum diputuskan.

### 22.2 Interaksi wajib

Lightbox harus dapat:

1. dibuka dari kartu;
2. ditutup dari tombol tutup;
3. ditutup dengan tombol `Escape`;
4. berpindah dengan tombol sebelumnya dan berikutnya;
5. berpindah menggunakan tombol panah kiri dan kanan;
6. mencegah navigasi melewati batas dengan wrap-around atau disabled state yang konsisten;
7. mengunci scroll body ketika terbuka;
8. mengembalikan scroll body ketika ditutup;
9. mengembalikan fokus ke kartu yang sebelumnya membuka lightbox;
10. tampil di atas Navbar dan seluruh konten;
11. dapat digunakan pada mobile tanpa overflow horizontal.

### 22.3 Aksesibilitas dialog

Gunakan pendekatan tanpa dependency baru.

Boleh memakai:

- native `<dialog>` apabila implementasinya konsisten dan browser target mendukung;
- portal/custom overlay dengan `role="dialog"`.

Jika menggunakan custom overlay, wajib ada:

```tsx
role="dialog"
aria-modal="true"
aria-labelledby="..."
aria-describedby="..."
```

Ketika dialog dibuka:

- fokus awal diarahkan ke tombol tutup atau elemen dialog yang logis;
- Tab dan Shift+Tab tidak boleh menyebabkan fokus hilang ke halaman di belakang;
- Escape menutup dialog;
- fokus kembali ke trigger setelah dialog ditutup.

Klik pada backdrop boleh menutup dialog, tetapi klik pada panel media tidak boleh menutupnya.

### 22.4 Mobile

Pada mobile:

- panel dapat memenuhi sebagian besar layar;
- gambar tidak boleh melebihi viewport;
- caption berada di bawah media dan tidak menutupi bagian penting;
- tombol tutup mudah dijangkau;
- tombol sebelumnya/berikutnya mempunyai area sentuh minimal yang memadai;
- tidak ada scroll horizontal;
- content yang panjang boleh scroll secara vertikal di dalam dialog.

---

## 23. EMPTY STATE

Walaupun Plan 011 memiliki delapan media, empty state tetap wajib tersedia untuk perlindungan apabila data Paket berubah.

Jika seluruh data Galeri kosong, tampilkan:

```text
Visual Galeri Belum Tersedia

Media Galeri sedang dipersiapkan. Anda tetap dapat mengenal
pilihan perjalanan melalui halaman Paket dan Rute.
```

CTA:

```text
Lihat Paket WNB
Jelajahi Rute
```

Empty state tidak boleh menyembunyikan Hero dan CTA penutup secara tidak logis.

Jangan mengisi empty state dengan media palsu.

---

## 24. CTA PENUTUP

CTA utama:

```text
Rencanakan Perjalanan
```

Tujuan:

```ts
ROUTE_PATHS.booking
```

CTA pendukung:

```text
Lihat Paket WNB
Jelajahi Rute
```

Tujuan:

```ts
ROUTE_PATHS.packages
ROUTE_PATHS.routes
```

Copy yang direkomendasikan:

```text
Temukan Gambaran Perjalanan yang Sesuai

Setiap perjalanan WNB dapat disesuaikan dengan peserta, Paket,
Rute, durasi, dan kebutuhan kegiatan. Lanjutkan ke halaman
perencanaan untuk menyusun pengalaman bersama tim WNB.
```

CTA utama harus paling menonjol.

Jangan menambahkan query Paket ke Booking pada Plan 011.

Integrasi query Booking akan dikerjakan pada Plan 012 saat halaman Booking sudah mendukungnya.

---

## 25. KARTU GALERI PADA BERANDA

Perbarui sumber data section eksplorasi Beranda agar memiliki tiga kartu:

```text
Paket Perjalanan
Rute Petualangan
Galeri WNB
```

Tambahkan item Galeri dengan data yang direkomendasikan:

```ts
{
  title: "Galeri WNB",
  description:
    "Lihat gambaran visual Paket, kebersamaan, petualangan, dan aktivitas WNB.",
  path: ROUTE_PATHS.gallery,
  linkLabel: "Lihat Galeri",
  icon: Images,
  media: {
    src: "/images/home/explore-gallery.webp",
    alt: "Ilustrasi visual pengalaman perjalanan WNB",
    illustrationNotice: true,
  },
}
```

Nama icon boleh menggunakan icon set yang sudah tersedia, misalnya `Images` atau `Image` dari `lucide-react`.

Jangan menambah dependency.

Jangan mengubah dua item yang sudah ada kecuali ada perbaikan import yang diperlukan untuk compile.

Jangan mengubah layout `ExploreSection`, karena grid tiga kolom sudah tersedia.

Pastikan kartu baru mengarah ke:

```text
/galeri
```

melalui `ROUTE_PATHS.gallery`.

---

## 26. ATURAN VISUAL

Ikuti design system WNB yang sudah ada:

- latar gelap;
- surface dan border yang konsisten;
- aksen brand yang sudah tersedia;
- typography display untuk heading;
- rounded token WNB;
- focus token WNB;
- spacing yang konsisten dengan halaman Paket dan Rute;
- card hover yang tidak berlebihan;
- tidak membuat style baru yang bertentangan dengan token.

Jangan menetapkan warna hex baru apabila token Tailwind yang sesuai sudah tersedia.

Jangan membuat tampilan Galeri sebagai halaman putih terpisah.

Jangan menggunakan efek parallax, carousel otomatis, animasi berat, atau masonry.

Transisi sederhana diperbolehkan:

```text
opacity
transform ringan
hover scale media ringan
```

Hormati `prefers-reduced-motion` apabila repository sudah mempunyai pola terkait. Jangan menambah sistem animasi baru.

---

## 27. RESPONSIVE

Lakukan pemeriksaan minimal pada lebar:

```text
320 px
375 px
768 px
1024 px
1440 px
```

Pastikan:

- heading tidak keluar viewport;
- notice tidak sempit atau terpotong;
- filter wrap dengan baik;
- kartu tidak terlalu padat;
- grid tidak menghasilkan scroll horizontal;
- tombol mempunyai area sentuh memadai;
- lightbox tidak keluar layar;
- caption lightbox tetap terbaca;
- tombol tutup tidak tertutup Navbar;
- gambar menggunakan `object-cover` pada thumbnail;
- gambar lightbox menggunakan `object-contain` agar visual tidak terpotong berlebihan.

---

## 28. ACCESSIBILITY

Checklist wajib:

- tepat satu H1 pada `GalleryPage`;
- heading section berurutan;
- jangan membuat `<main>` baru;
- jangan membuat `id="main-content"` baru;
- setiap media memakai alt text dari data Paket;
- tombol filter menggunakan `aria-pressed`;
- kartu mempunyai label aksi yang jelas;
- kartu yang membuka dialog memakai `aria-haspopup="dialog"`;
- lightbox menggunakan semantic dialog;
- lightbox mempunyai accessible name;
- tombol tutup mempunyai `aria-label`;
- tombol sebelumnya/berikutnya mempunyai `aria-label`;
- focus terlihat pada seluruh elemen interaktif;
- Escape menutup lightbox;
- fokus dikembalikan ke trigger;
- label ilustrasi dapat dibaca pembaca layar;
- informasi tidak disampaikan hanya melalui warna;
- body scroll pulih setelah lightbox ditutup;
- tidak ada nested button/link;
- link Paket tetap dapat digunakan dengan keyboard.

Gunakan teks sebagai key untuk list yang stabil apabila memungkinkan. Hindari indeks sebagai key untuk data yang memiliki ID stabil.

---

## 29. PERFORMA

Aset sumber saat ini berukuran besar dan menggunakan URL yang sudah dipakai halaman Paket.

Plan 011 tidak memindahkan aset ke CDN dan tidak mengunduh aset ke repository.

Lakukan mitigasi berikut:

1. gunakan lazy loading pada thumbnail;
2. gunakan aspect ratio container untuk mencegah layout shift;
3. jangan preload seluruh delapan gambar;
4. jangan membuat request gambar kedua untuk lightbox apabila browser dapat menggunakan source yang sama;
5. jangan memuat video;
6. jangan memakai background image untuk semua media;
7. gunakan fallback lokal yang sudah dimiliki Paket;
8. jangan membuat base64 image;
9. jangan menambahkan library lightbox;
10. jangan mengubah Vite config hanya untuk Plan 011.

Optimasi file media secara menyeluruh dapat dilakukan pada tahap performance frontend setelah Fase 1 selesai.

---

## 30. KUALITAS KODE

Syarat:

- TypeScript strict-friendly;
- tidak menggunakan `any`;
- tidak menggunakan non-null assertion tanpa alasan;
- tidak menyimpan state yang dapat dihitung dari state lain;
- helper data bersifat pure;
- cleanup event listener wajib dilakukan;
- cleanup body scroll wajib dilakukan;
- hindari duplikasi copy dan data Paket;
- jangan menggunakan query DOM global tanpa kebutuhan;
- gunakan ref React untuk fokus;
- jangan membuat komponen lebih kompleks daripada kebutuhan;
- jangan meninggalkan console log;
- jangan meninggalkan commented-out implementation;
- jangan menambahkan TODO yang sebenarnya dapat diselesaikan pada Plan 011.

---

## 31. URUTAN EKSEKUSI

Lakukan pekerjaan secara berurutan:

### Langkah 1 — Pemeriksaan repository

Periksa:

```text
routePaths.ts
AppRoutes.tsx
GalleryPage.tsx
packagesData.ts
packagesTypes.ts
PackageMediaView.tsx
homeContent.ts
ExploreSection.tsx
ExploreCard.tsx
MainLayout.tsx
```

Pastikan kondisi lokal tidak berbeda secara material dari kondisi plan.

Jika ada perbedaan kecil, adaptasikan implementasi tanpa memperluas scope.

### Langkah 2 — Routing

- ubah canonical `/gallery` menjadi `/galeri`;
- tambahkan `galleryLegacy`;
- tambahkan redirect dengan `replace`;
- periksa hard-coded link.

### Langkah 3 — Types dan data

- buat `galleryTypes.ts`;
- buat config delapan Paket;
- bentuk data Galeri dari data Paket;
- buat filter dan helper.

### Langkah 4 — Komponen media dan kartu

- buat fallback;
- buat label ilustrasi;
- buat kartu yang dapat membuka dialog.

### Langkah 5 — Filter

- buat filter kategori;
- pastikan keyboard dan `aria-pressed`.

### Langkah 6 — Lightbox

- implementasikan dialog;
- navigasi sebelumnya/berikutnya;
- Escape;
- arrow keys;
- focus management;
- body scroll lock;
- link Detail Paket.

### Langkah 7 — GalleryPage

- Hero;
- notice ilustrasi;
- filter;
- grid;
- empty/no-result state;
- CTA penutup.

### Langkah 8 — Beranda

- tambahkan hanya satu kartu Galeri;
- pastikan grid tiga kolom terisi.

### Langkah 9 — Pemeriksaan dan pengujian

- typecheck;
- build;
- cek URL;
- cek lightbox;
- cek mobile;
- cek regresi Paket dan Rute.

---

## 32. URL WAJIB DIPERIKSA

Periksa URL berikut:

```text
/galeri
/gallery
/paket/corporate-adventure
/paket/family-adventure-short-trip
/paket/family-adventure-full-experience
/paket/birthday-adventure
/paket/anniversary-adventure
/paket/surprise-adventure
/paket/adventure-camping
/paket/open-trip-adventure
```

Ekspektasi:

- `/galeri` menampilkan halaman Galeri;
- `/gallery` redirect ke `/galeri` dengan replace;
- setiap CTA Paket dari lightbox membuka Detail Paket yang benar;
- tidak ada route `/galeri/:slug`;
- invalid route lain tetap ditangani NotFoundPage global.

---

## 33. PENGUJIAN WAJIB

Jalankan dari direktori aplikasi yang sesuai:

```bash
npm run typecheck
npm run build
```

Apabila repository menggunakan working directory berbeda, jalankan command pada lokasi package yang benar tanpa mengubah script.

### 33.1 Pemeriksaan manual Galeri

- halaman bukan placeholder;
- Hero tampil;
- notice ilustrasi tampil;
- delapan media tampil pada filter Semua;
- urutan PK-01 sampai PK-08 benar;
- semua kartu mempunyai label Gambar Ilustrasi;
- filter kategori menghasilkan item yang tepat;
- no-result state dapat bekerja secara logis;
- fallback bekerja ketika source gagal;
- lightbox membuka media yang dipilih;
- judul/caption sesuai Paket;
- label ilustrasi tampil di lightbox;
- link Paket mengarah ke slug benar;
- tombol previous/next bekerja;
- arrow left/right bekerja;
- Escape menutup;
- tombol close bekerja;
- klik backdrop bekerja apabila diimplementasikan;
- fokus kembali ke kartu;
- body tidak tetap terkunci setelah dialog ditutup;
- tidak ada scroll horizontal.

### 33.2 Pemeriksaan redirect

- buka `/gallery`;
- pastikan berpindah ke `/galeri`;
- pastikan tombol back browser tidak terjebak dalam redirect loop;
- pastikan menu Galeri aktif pada `/galeri`.

### 33.3 Pemeriksaan Beranda

- section eksplorasi memiliki tiga kartu;
- kartu Galeri tampil;
- link mengarah ke `/galeri`;
- dua kartu lama tetap bekerja;
- layout desktop dan mobile tidak rusak.

### 33.4 Pemeriksaan regresi

Periksa minimal:

```text
/
/tentang-kami
/paket
/paket/corporate-adventure
/rute
/rute/sukawana-cikole
/booking
```

Pastikan Plan 011 tidak mengubah isi atau fungsi Paket dan Rute.

---

## 34. KRITERIA PENERIMAAN

Plan 011 dianggap selesai hanya jika seluruh poin berikut terpenuhi.

### Routing

- [ ] `/galeri` menjadi URL canonical;
- [ ] `/gallery` redirect ke `/galeri`;
- [ ] navigasi mengarah ke `/galeri`;
- [ ] tidak ada redirect loop;
- [ ] tidak dibuat route Detail Galeri.

### Data

- [ ] tepat delapan media utama digunakan;
- [ ] media berasal dari data Paket;
- [ ] URL dan alt text tidak diduplikasi;
- [ ] Corporate v1 tidak digunakan;
- [ ] video tidak digunakan;
- [ ] urutan PK-01 sampai PK-08 benar;
- [ ] hubungan media hanya ke Paket terkait.

### Informasi publik

- [ ] semua media diberi label Gambar Ilustrasi;
- [ ] Hero menjelaskan sifat ilustrasi;
- [ ] notice ilustrasi tampil;
- [ ] tidak ada klaim dokumentasi pelanggan;
- [ ] tidak ada klaim lokasi atau kejadian nyata;
- [ ] informasi internal tidak ditampilkan.

### Halaman

- [ ] placeholder dihapus;
- [ ] Hero selesai;
- [ ] filter selesai;
- [ ] grid selesai;
- [ ] kartu selesai;
- [ ] fallback selesai;
- [ ] empty state tersedia;
- [ ] no-result state tersedia;
- [ ] CTA penutup selesai.

### Lightbox

- [ ] lightbox bukan route baru;
- [ ] dapat dibuka dan ditutup;
- [ ] Escape bekerja;
- [ ] previous/next bekerja;
- [ ] arrow keys bekerja;
- [ ] fokus dikelola;
- [ ] body scroll dikelola;
- [ ] label ilustrasi tampil;
- [ ] link Detail Paket bekerja;
- [ ] mobile tidak overflow.

### Beranda

- [ ] kartu Galeri ditambahkan;
- [ ] kartu mengarah ke `/galeri`;
- [ ] dua kartu lama tidak rusak;
- [ ] section lain tidak diubah.

### Semantic dan aksesibilitas

- [ ] tidak ada nested `<main>`;
- [ ] tidak ada duplikasi `id="main-content"`;
- [ ] H1 tepat satu;
- [ ] alt text tersedia;
- [ ] focus visible;
- [ ] `aria-pressed` tersedia;
- [ ] dialog mempunyai accessible name;
- [ ] tombol mempunyai accessible label;
- [ ] tidak ada nested interactive element.

### Quality gate

- [ ] tidak ada dependency baru;
- [ ] tidak ada `any`;
- [ ] tidak ada console log;
- [ ] typecheck lulus;
- [ ] build lulus;
- [ ] tidak ada perubahan di luar scope.

---

## 35. FORMAT LAPORAN SETELAH EKSEKUSI

Setelah implementasi selesai, berhenti dan berikan laporan dengan format berikut.

```md
# LAPORAN EKSEKUSI PLAN 011

## Ringkasan
Jelaskan hasil implementasi secara singkat.

## Kondisi Awal
- Commit/branch yang digunakan
- Perbedaan material dari asumsi plan, jika ada

## File Dibuat
- path file
- fungsi file

## File Diubah
- path file
- ringkasan perubahan

## Routing
- URL canonical
- URL legacy
- hasil redirect

## Data Galeri
- jumlah media
- sumber data
- urutan Paket
- kategori
- media yang sengaja tidak digunakan

## Implementasi Halaman
- Hero
- notice ilustrasi
- filter
- grid
- empty/no-result state
- CTA

## Lightbox
- open/close
- keyboard
- focus management
- body scroll
- link Paket
- mobile

## Perubahan Beranda
Jelaskan hanya penambahan kartu Galeri.

## Pengujian
- npm run typecheck: LULUS/GAGAL
- npm run build: LULUS/GAGAL
- URL /galeri: LULUS/GAGAL
- Redirect /gallery: LULUS/GAGAL
- Delapan media: LULUS/GAGAL
- Filter: LULUS/GAGAL
- Lightbox keyboard: LULUS/GAGAL
- Responsive: LULUS/GAGAL
- Regresi Paket dan Rute: LULUS/GAGAL

## Catatan
Tuliskan keterbatasan yang benar-benar masih ada.

## Status
SELESAI / BELUM SELESAI
```

Laporan harus faktual. Jangan menulis pengujian lulus apabila command atau pemeriksaan tidak benar-benar dijalankan.

---

## 36. INSTRUKSI PENUTUP

Kerjakan Plan 011 secara penuh sesuai scope.

Prinsip utama:

```text
Galeri versi awal harus menarik, berfungsi, dan jujur.
```

Jangan menunggu dokumentasi asli untuk menyelesaikan halaman. Gunakan delapan ilustrasi Paket yang telah disetujui, tetapi pastikan penanda ilustrasi selalu jelas.

Jangan mengubah data Paket atau Rute.

Jangan membuat backend.

Jangan membuat Detail Galeri.

Jangan membuat atau mengunduh media baru.

Jangan melakukan commit, push, atau pull request.

Setelah typecheck, build, dan pemeriksaan manual selesai, kirim laporan eksekusi dan berhenti.
