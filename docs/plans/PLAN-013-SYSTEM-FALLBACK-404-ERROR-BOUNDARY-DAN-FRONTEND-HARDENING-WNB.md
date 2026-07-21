# PLAN 013 — SYSTEM, FALLBACK, 404, ERROR BOUNDARY, DAN FINAL FRONTEND HARDENING WNB

## 0. IDENTITAS PLAN

**Nama proyek:** WNB — Wisata Ngaprak Bandung  
**Jenis pekerjaan:** Final frontend hardening  
**Nomor plan:** 013  
**Baseline wajib:** `618209bd2c84ac54a14ec2415733e4d526433086`  
**Status baseline:** Verified — Plan 012A  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Eksekutor:** Gemini melalui Antigravity  
**Model rekomendasi:** Gemini 3.1 Pro — High  
**Karakter pekerjaan:** Perbaikan sistem lintas halaman tanpa redesign besar  
**Status plan:** Siap dieksekusi setelah Implementation Plan disetujui

---

# 1. TUJUAN PLAN

Plan 013 bertujuan menyelesaikan lapisan ketahanan frontend publik WNB sebelum audit akhir dan penetapan:

> **Verified — Fase 1 Frontend Publik WNB**

Plan ini tidak menambahkan halaman bisnis baru.

Plan ini menyelaraskan bagaimana website merespons kondisi berikut:

1. URL tidak ditemukan;
2. data Paket tidak ditemukan;
3. data Rute tidak ditemukan;
4. hasil filter kosong;
5. Galeri tidak mempunyai item pada kategori tertentu;
6. media gagal dimuat;
7. aplikasi mengalami error render yang tidak tertangani;
8. redirect URL lama;
9. duplicate atau nested landmark;
10. state error dan fallback yang belum konsisten;
11. kondisi publik yang masih memakai copy internal;
12. perbedaan pola recovery action antarhalaman.

Hasil akhirnya harus membuat website:

- tetap mudah dipahami ketika terjadi masalah;
- tidak menampilkan informasi teknis;
- memberikan tindakan pemulihan yang jelas;
- konsisten secara visual;
- konsisten secara aksesibilitas;
- tetap stabil di desktop dan mobile;
- tidak merusak seluruh halaman yang sudah Verified.

---

# 2. PRINSIP UTAMA

## 2.1 Final hardening, bukan redesign

Plan 013 adalah hardening.

Plan ini bukan:

- redesign halaman;
- perubahan identitas visual;
- penggantian layout utama;
- perubahan data Paket;
- perubahan data Rute;
- perubahan data Galeri;
- perubahan Booking;
- penambahan backend;
- penambahan database;
- penambahan pembayaran;
- penambahan autentikasi;
- optimasi SEO besar;
- perubahan arsitektur aplikasi secara menyeluruh.

## 2.2 Satu masalah, satu tindakan pemulihan yang jelas

Setiap state harus menjelaskan:

1. apa yang terjadi;
2. apa yang masih dapat dilakukan;
3. ke mana pengguna dapat melanjutkan.

## 2.3 Jangan menampilkan informasi internal

Jangan pernah menampilkan:

- stack trace;
- nama file;
- nomor baris;
- nama komponen;
- slug internal sebagai pesan error;
- token;
- environment variable;
- API key;
- data pengguna;
- status verifikasi internal;
- nama repository;
- informasi Git;
- teks `Informasi Fondasi MVP`;
- pesan JavaScript mentah;
- pesan error library;
- catatan operasional internal;
- isi exception;
- detail konfigurasi.

## 2.4 Tidak semua kondisi adalah 404

Gunakan 404 hanya untuk:

- URL publik yang tidak dikenali;
- Detail Paket dengan data yang tidak ditemukan;
- Detail Rute dengan data yang tidak ditemukan.

Jangan menggunakan 404 untuk:

- hasil filter kosong;
- media gagal dimuat;
- WhatsApp tidak tersedia;
- Clipboard gagal;
- jadwal Open Trip belum tersedia;
- fitur belum tersedia;
- error lokal;
- data kategori kosong.

---

# 3. BASELINE DAN KONDISI SAAT INI

Baseline yang wajib digunakan:

```text
618209bd2c84ac54a14ec2415733e4d526433086
```

Jangan menggunakan baseline sebelum SHA tersebut.

Baseline telah mencakup:

- Plan 001 sampai Plan 012;
- Plan 012A refactor Booking;
- canonical `/tentang-kami`;
- redirect `/about`;
- canonical `/galeri`;
- redirect `/gallery`;
- Paket dinamis;
- Rute dinamis;
- Galeri;
- Booking;
- query Paket dan Rute;
- fallback WhatsApp;
- fallback Clipboard;
- media fallback Paket;
- media fallback Rute;
- media fallback Galeri;
- empty state awal Paket;
- empty state awal Rute;
- empty state awal Galeri.

Plan 013 harus mempertahankan seluruh hasil tersebut.

---

# 4. SUMBER PERENCANAAN

Plan ini disusun berdasarkan pedoman Drive:

```text
07 — PERENCANAAN HALAMAN SISTEM WNB
```

dan register:

```text
07 — KONDISI SISTEM, FALLBACK, REDIRECT, DAN STATUS IMPLEMENTASI WNB
```

Namun, kondisi implementasi dalam Drive sudah tertinggal dibanding repository.

Karena itu:

- jangan meminta akses Google Drive;
- jangan meminta executor membaca Drive;
- jangan menggunakan status lama Drive sebagai kebenaran implementasi;
- gunakan plan ini sebagai sumber instruksi teknis utama;
- gunakan repository baseline sebagai sumber kode aktual;
- jangan mengulang pekerjaan Booking dan redirect yang sudah selesai.

---

# 5. RUANG LINGKUP WAJIB

Plan 013 mencakup delapan workstream utama.

## Workstream A — Komponen sistem bersama

Buat komponen bersama untuk state sistem.

## Workstream B — Halaman 404 umum

Perbaiki wildcard 404 agar tidak lagi menggunakan judul Rute Tidak Ditemukan.

## Workstream C — Paket dan Rute tidak ditemukan

Migrasikan kondisi Detail Paket dan Detail Rute ke pola bersama.

## Workstream D — Empty state

Selaraskan empty state Paket, Rute, dan Galeri.

## Workstream E — Global Error Boundary

Tambahkan fallback global untuk render error yang tidak tertangani.

## Workstream F — Media fallback

Selaraskan fallback akhir media tanpa merombak logika percobaan source.

## Workstream G — Semantic dan accessibility hardening

Hapus nested main, ID duplikat, dan masalah semantic lain yang ditemukan.

## Workstream H — Redirect dan regression verification

Pastikan canonical dan redirect tetap benar.

---

# 6. RUANG LINGKUP YANG DILARANG

Jangan mengubah:

- `packagesData`;
- `routesData`;
- `galleryData`;
- tipe Paket kecuali benar-benar diperlukan untuk compile;
- tipe Rute kecuali benar-benar diperlukan untuk compile;
- tipe Galeri kecuali benar-benar diperlukan untuk compile;
- format pesan Booking;
- validasi Booking;
- query Booking;
- Booking form;
- hook `useBookingForm`;
- nomor WhatsApp;
- `.env.example`;
- CTA bisnis utama;
- isi Beranda;
- isi Tentang Kami;
- isi Paket;
- isi Rute;
- isi Galeri;
- struktur navigasi utama;
- struktur Footer;
- warna brand;
- font;
- sistem spacing global;
- breakpoint global;
- Tailwind configuration;
- dependency;
- package manager;
- build tool;
- Vite config;
- router library;
- sistem linting;
- analytics;
- monitoring pihak ketiga;
- backend;
- database;
- localStorage;
- sessionStorage;
- service worker;
- PWA;
- sitemap;
- robots;
- metadata SEO besar;
- upload media;
- pembayaran;
- akun pengguna.

Jangan membuat:

- halaman admin;
- dashboard;
- login;
- API endpoint;
- error tracking eksternal;
- Sentry;
- LogRocket;
- database log;
- telemetry;
- toast library;
- form library;
- UI library baru;
- dependency baru.

---

# 7. FILE YANG BOLEH DIBUAT

Direktori baru yang direkomendasikan:

```text
client/src/components/system/
```

File baru yang diperbolehkan:

```text
client/src/components/system/SystemState.tsx
client/src/components/system/EmptyState.tsx
client/src/components/system/MediaFallback.tsx
client/src/components/system/GlobalErrorBoundary.tsx
client/src/components/system/GlobalErrorFallback.tsx
```

File tambahan opsional:

```text
client/src/components/system/systemTypes.ts
```

File tambahan hanya boleh dibuat jika:

- mengurangi duplikasi tipe;
- tidak menambah abstraksi yang sulit dibaca;
- tidak mengubah behavior;
- tidak membuat registry konfigurasi besar.

---

# 8. FILE YANG BOLEH DIUBAH

File utama:

```text
client/src/app/App.tsx
client/src/pages/NotFoundPage/NotFoundPage.tsx
client/src/pages/PackageListPage/PackageListPage.tsx
client/src/pages/PackageDetailPage/PackageDetailPage.tsx
client/src/pages/RouteListPage/RouteListPage.tsx
client/src/pages/RouteDetailPage/RouteDetailPage.tsx
client/src/pages/GalleryPage/GalleryPage.tsx
client/src/features/packages/components/PackageMediaView.tsx
client/src/features/routes/components/RouteMediaView.tsx
client/src/features/gallery/components/GalleryMediaView.tsx
```

File opsional yang boleh diubah jika diperlukan:

```text
client/src/routes/AppRoutes.tsx
client/src/routes/routePaths.ts
client/src/layouts/MainLayout/MainLayout.tsx
client/src/components/common/PagePlaceholder.tsx
```

Pembatasan:

- `AppRoutes.tsx` hanya untuk verifikasi posisi redirect dan wildcard;
- `routePaths.ts` hanya jika ditemukan konstanta yang salah;
- `MainLayout.tsx` hanya jika Error Boundary placement membutuhkan penyesuaian kecil;
- `PagePlaceholder.tsx` tidak perlu dihapus jika masih dipakai internal, tetapi tidak boleh muncul pada state publik final.

---

# 9. ARSITEKTUR KOMPONEN SISTEM

## 9.1 `SystemState.tsx`

Tujuan:

Komponen presentasional bersama untuk:

- 404 umum;
- Paket tidak ditemukan;
- Rute tidak ditemukan;
- state sistem publik yang membutuhkan satu atau dua CTA;
- fallback global melalui komponen terpisah jika dibutuhkan.

Komponen ini tidak boleh:

- membaca URL;
- membaca data Paket;
- membaca data Rute;
- membaca environment variable;
- membaca error object;
- melakukan logging;
- mengubah route;
- mengatur state bisnis;
- menangkap exception;
- membentuk copy sendiri berdasarkan string internal.

### API rekomendasi

```ts
import type { ReactNode } from "react";

type SystemStateAction = {
  label: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type SystemStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  primaryAction: SystemStateAction;
  secondaryAction?: SystemStateAction;
  className?: string;
};
```

Catatan:

- aksi harus mendukung link internal;
- aksi global reload dapat memakai `onClick`;
- jangan mendukung terlalu banyak variasi;
- maksimal dua CTA;
- jangan membuat registry copy di komponen.

### Struktur visual

Urutan:

1. ikon;
2. eyebrow;
3. H1;
4. deskripsi;
5. CTA utama;
6. CTA tambahan.

### Visual

Gunakan token WNB:

```text
bg-wnb-black
bg-wnb-surface
bg-wnb-surface-elevated
text-wnb-white
text-wnb-text
text-wnb-muted
text-wnb-subtle
text-wnb-accent
border-wnb-border
border-wnb-border-strong
```

Jangan memakai:

```text
dark:
text-gray-900
bg-white
border-gray-300
```

### Accessibility

- satu H1;
- ikon dekoratif `aria-hidden="true"`;
- CTA mempunyai label jelas;
- focus visible;
- tidak hanya mengandalkan warna;
- layout dapat dibaca screen reader;
- tidak membuat nested `<main>`.

---

## 9.2 `EmptyState.tsx`

Tujuan:

Komponen presentasional untuk:

- hasil filter Paket kosong;
- hasil filter Rute kosong;
- hasil filter Galeri kosong;
- data kategori kosong;
- kondisi non-error.

### API rekomendasi

```ts
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};
```

Komponen tidak perlu mendukung link bila seluruh penggunaan saat ini memakai reset filter.

Jika ada kebutuhan link yang nyata, boleh tambahkan:

```ts
actionTo?: string;
```

Jangan membuat API yang terlalu kompleks.

### Accessibility

- gunakan heading level yang sesuai konteks;
- bukan H1 karena berada di dalam halaman;
- ikon dekoratif;
- tombol reset memiliki `type="button"`;
- pesan tidak memakai `role="alert"` karena empty state bukan error;
- tidak menggunakan `aria-live` kecuali hasil filter memang berubah setelah aksi pengguna.

Jika hasil filter berubah secara dinamis, container boleh memakai:

```text
aria-live="polite"
```

Tetapi jangan mengumumkan seluruh halaman.

---

## 9.3 `MediaFallback.tsx`

Tujuan:

Menyediakan tampilan visual akhir bersama ketika:

- primary media gagal;
- fallback media gagal;
- media tidak tersedia;
- media tidak boleh ditampilkan.

Komponen ini hanya merender fallback akhir.

Komponen ini tidak:

- menentukan kapan primary source gagal;
- mengelola `onError`;
- mengubah URL media;
- membaca data bisnis;
- melakukan retry;
- memakai gambar random;
- mengarang dokumentasi.

### API rekomendasi

```ts
import type { ReactNode } from "react";

type MediaFallbackProps = {
  label: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  footer?: ReactNode;
};
```

Penggunaan:

- Paket: `Ilustrasi belum dapat dimuat`;
- Rute: menampilkan identitas route dan region;
- Galeri: `Visual WNB belum dapat dimuat`.

Boleh mempertahankan variasi konten melalui `footer`.

Jangan menyatukan seluruh logika media dalam komponen ini.

---

## 9.4 `GlobalErrorBoundary.tsx`

Tujuan:

Menangkap render error React yang tidak tertangani.

Karena Error Boundary React masih membutuhkan class component pada pola standar, gunakan class component yang sederhana.

### Tanggung jawab

- `getDerivedStateFromError`;
- menyimpan state `hasError`;
- menampilkan `GlobalErrorFallback`;
- menyediakan reset saat route berubah;
- tidak menampilkan error object;
- tidak mengirim log eksternal;
- tidak menyimpan data pengguna.

### API rekomendasi

```ts
type GlobalErrorBoundaryProps = {
  children: React.ReactNode;
  resetKey?: string;
};
```

State:

```ts
type GlobalErrorBoundaryState = {
  hasError: boolean;
};
```

### Reset behavior

Error Boundary harus dapat reset ketika lokasi berubah.

Rekomendasi:

1. buat wrapper function component yang membaca `useLocation`;
2. kirim `location.key` atau `location.pathname + location.search` sebagai `resetKey`;
3. pada `componentDidUpdate`, jika `resetKey` berubah dan `hasError` aktif, reset ke `false`.

Jangan:

- membuat reload otomatis;
- loop reset;
- membaca stack trace;
- mengirim error ke server;
- menampilkan pesan exception.

### Penempatan

Tempatkan Error Boundary di dalam konteks Router agar dapat membaca lokasi.

Struktur rekomendasi:

```tsx
export function App() {
  return (
    <GlobalErrorBoundaryWithLocation>
      <AppRoutes />
    </GlobalErrorBoundaryWithLocation>
  );
}
```

Jika wrapper memerlukan nama lain, gunakan nama yang jelas.

Jangan memindahkan `BrowserRouter` tanpa alasan.

---

## 9.5 `GlobalErrorFallback.tsx`

Copy publik wajib:

```text
Eyebrow: Sistem WNB
Judul: Terjadi Kendala
Deskripsi: Website mengalami kendala saat menampilkan halaman. Silakan muat ulang halaman atau kembali ke Beranda.
CTA utama: Muat Ulang Halaman
CTA tambahan: Kembali ke Beranda
```

Tombol reload:

```ts
window.location.reload();
```

Jangan melakukan reload saat komponen mount.

Jangan menyebut:

- error;
- exception;
- crash;
- React;
- JavaScript;
- render;
- browser console;
- bug internal.

Judul `Terjadi Kendala` sudah cukup.

---

# 10. HALAMAN 404 UMUM

## 10.1 Masalah saat ini

Wildcard 404 masih menggunakan:

```text
Rute Tidak Ditemukan
```

dan masih memakai `PagePlaceholder`.

Hal ini salah karena wildcard menangani semua URL tidak dikenal.

## 10.2 Hasil wajib

Route tetap:

```text
*
```

Copy publik:

```text
Eyebrow: Error 404
Judul: Halaman Tidak Ditemukan
Deskripsi:
Halaman yang Anda cari tidak tersedia, telah berpindah, atau alamat yang dibuka tidak sesuai. Anda dapat kembali ke Beranda atau melanjutkan menjelajahi Paket dan Rute WNB.
```

CTA:

```text
Utama: Kembali ke Beranda
Tambahan 1: Lihat Paket
Tambahan 2: Jelajahi Rute
```

Karena `SystemState` dibatasi maksimal dua CTA, gunakan salah satu pola berikut:

### Opsi rekomendasi

Primary:

```text
Kembali ke Beranda
```

Secondary:

```text
Lihat Paket
```

Lalu tambahkan link teks terpisah:

```text
Jelajahi Rute
```

atau buat area tiga link yang sederhana hanya di `NotFoundPage`.

Jangan memperbesar API `SystemState` hanya untuk satu kebutuhan.

### Opsi alternatif

Primary:

```text
Lihat Paket
```

Secondary:

```text
Jelajahi Rute
```

Tambahkan link teks:

```text
Kembali ke Beranda
```

Gunakan opsi yang paling konsisten dengan desain saat implementasi.

## 10.3 Larangan

Jangan menampilkan:

- `Informasi Fondasi MVP`;
- `Rute Tidak Ditemukan`;
- URL mentah;
- pathname;
- slug;
- nama route;
- nama file;
- error code selain 404;
- tombol browser back sebagai satu-satunya solusi.

---

# 11. DETAIL PAKET TIDAK DITEMUKAN

Migrasikan markup error Detail Paket ke `SystemState`.

Copy publik:

```text
Eyebrow: 404 — Paket Tidak Ditemukan
Judul: Paket Wisata Tidak Ditemukan
Deskripsi:
Paket yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan pilih Paket lain atau sampaikan kebutuhan perjalanan Anda kepada WNB.
```

CTA:

```text
Utama: Kembali ke Daftar Paket
Tambahan: Rencanakan Perjalanan
```

Route:

```text
/paket/:slug
```

Perilaku:

- kondisi muncul jika `getPackageBySlug(slug)` tidak menemukan Paket publik;
- tidak menampilkan status internal Paket;
- tidak menjelaskan `publicationStatus`;
- tidak menjelaskan `availabilityStatus`;
- tidak mengubah data;
- tidak redirect otomatis;
- tidak mengubah URL;
- tidak mengubah detail Paket normal.

## Semantic correction

Hapus nested:

```tsx
<main id="main-content">
```

Gunakan:

```tsx
<div>
```

atau:

```tsx
<section>
```

`MainLayout` tetap satu-satunya pemilik `<main id="main-content">`.

---

# 12. DETAIL RUTE TIDAK DITEMUKAN

Migrasikan markup error Detail Rute ke `SystemState`.

Copy publik:

```text
Eyebrow: 404 — Rute Tidak Ditemukan
Judul: Rute Perjalanan Tidak Ditemukan
Deskripsi:
Rute yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan periksa daftar Rute WNB untuk melihat pilihan perjalanan lainnya.
```

CTA:

```text
Utama: Kembali ke Daftar Rute
Tambahan: Lihat Paket
```

Route:

```text
/rute/:slug
```

Perilaku:

- tidak menampilkan status izin;
- tidak menampilkan hasil survei;
- tidak menampilkan koordinat;
- tidak menampilkan catatan keselamatan;
- tidak redirect otomatis;
- tidak mengubah URL;
- tidak mengubah detail Rute normal.

Pastikan tidak ada nested `<main>`.

---

# 13. EMPTY STATE PAKET

## 13.1 Kondisi

Muncul ketika filter Paket tidak menghasilkan data.

## 13.2 Copy

Untuk kategori umum:

```text
Judul: Tidak Ada Paket yang Sesuai
Deskripsi: Tidak ada Paket yang sesuai dengan pilihan Anda. Ubah kategori atau tampilkan kembali seluruh Paket.
Tombol: Hapus Filter
```

Untuk Open Trip:

```text
Judul: Jadwal Open Trip Belum Tersedia
Deskripsi: Keberangkatan Open Trip belum dibuka saat ini. Anda dapat melihat Paket lain atau merencanakan perjalanan privat bersama WNB.
Tombol: Hapus Filter
```

Jangan mengubah status Open Trip menjadi tersedia.

## 13.3 Behavior

Tombol `Hapus Filter`:

```ts
setActiveCategory("semua");
```

Jangan:

- redirect;
- mengubah URL;
- menyimpan filter;
- membuka Booking;
- menambahkan tanggal palsu.

## 13.4 Accessibility

- `type="button"`;
- focus visible;
- empty state bukan `role="alert"`;
- boleh `aria-live="polite"` pada container hasil filter.

---

# 14. EMPTY STATE RUTE

## 14.1 Copy

```text
Judul: Tidak Ada Rute yang Sesuai
Deskripsi: Tidak ada Rute yang sesuai dengan wilayah pilihan Anda. Tampilkan kembali seluruh Rute untuk melihat pilihan lainnya.
Tombol: Hapus Filter
```

## 14.2 Behavior

```ts
setActiveFilter("semua");
```

Jangan:

- mengubah data Rute;
- menghapus filter options;
- redirect otomatis;
- menyatakan Rute tidak tersedia secara permanen.

---

# 15. EMPTY STATE GALERI

Pertahankan semangat copy yang sudah ada.

Copy final:

```text
Judul: Visual Belum Tersedia
Deskripsi: Media Galeri untuk kategori ini sedang dipersiapkan.
Tombol: Tampilkan Semua
```

Behavior:

```ts
setActiveFilter("semua");
```

Migrasikan ke `EmptyState`.

Jangan mengubah:

- filter Galeri;
- lightbox;
- GalleryCard;
- caption;
- sourceLabel;
- media illustration notice;
- data Galeri.

---

# 16. GLOBAL ERROR BOUNDARY

## 16.1 Posisi

Error Boundary harus membungkus `AppRoutes` di dalam Router context.

Jangan membungkus `BrowserRouter` dari luar jika membutuhkan `useLocation`.

## 16.2 Recovery

CTA:

```text
Muat Ulang Halaman
Kembali ke Beranda
```

## 16.3 Reset

Jika pengguna pindah route setelah error fallback aktif, boundary dapat reset.

Jangan reset berulang kali tanpa perubahan route.

## 16.4 Development dan production

Copy publik harus sama di development dan production.

Jangan menampilkan detail error di development melalui UI.

Console logging:

- tidak wajib;
- jika ada `console.error` bawaan React, tidak perlu dihapus;
- jangan menambah logging manual;
- jangan menampilkan logging ke pengguna.

## 16.5 Error test

Karena tidak boleh menambahkan fitur debug publik, jangan membuat route permanen seperti:

```text
/debug-error
/test-error
```

Untuk manual verification, executor boleh membuat perubahan sementara lokal lalu menghapusnya sebelum final diff.

Tidak boleh ada test route dalam commit.

---

# 17. MEDIA FALLBACK HARDENING

## 17.1 Prinsip

Saat ini:

- `PackageMediaView` mempunyai primary dan fallback;
- `RouteMediaView` mempunyai primary/fallback/neutral;
- `GalleryMediaView` mempunyai primary/fallback/neutral.

Pertahankan logika tersebut.

Plan 013 hanya menyelaraskan fallback akhir.

## 17.2 Paket

Fallback akhir:

```text
Ilustrasi belum dapat dimuat
```

Gunakan `MediaFallback`.

Tetap pertahankan:

- area tinggi;
- aspect ratio;
- border dari parent;
- tidak menampilkan broken icon;
- hover tidak wajib pada fallback.

## 17.3 Rute

Fallback akhir tetap menampilkan:

- ikon gunung;
- `routeId`;
- `regionLabel`.

Boleh gunakan `MediaFallback` dengan footer custom.

Jangan menghilangkan identitas Rute.

## 17.4 Galeri

Fallback akhir:

```text
Visual WNB belum dapat dimuat
```

Gunakan `MediaFallback`.

## 17.5 Alt text

Saat gambar berhasil dimuat:

- alt tetap dari data;
- jangan mengubah alt menjadi generik;
- fallback visual non-image tidak memerlukan alt;
- ikon fallback `aria-hidden="true"`.

## 17.6 Source handling

Jangan:

- mengubah `media.src`;
- mengubah `media.fallbackSrc`;
- membuat random source;
- mengambil gambar eksternal;
- menambahkan image service;
- membuat retry tak terbatas;
- loop `onError`.

---

# 18. SEMANTIC LANDMARK HARDENING

## 18.1 Aturan utama

`MainLayout` harus menjadi satu-satunya pemilik:

```tsx
<main id="main-content">
```

Seluruh page component tidak boleh membuat:

```tsx
<main>
```

atau:

```tsx
<main id="main-content">
```

di dalam `Outlet`.

## 18.2 Pemeriksaan wajib

Cari seluruh repository untuk:

```text
<main
id="main-content"
```

Pastikan:

- hanya satu `<main id="main-content">`;
- tidak ada ID duplikat;
- tidak ada nested main;
- SkipLink tetap menuju `#main-content`;
- `tabIndex={-1}` tetap ada pada main layout.

## 18.3 File yang diketahui perlu koreksi

Minimal:

```text
PackageListPage.tsx
PackageDetailPage.tsx
```

Periksa juga halaman lain.

Jangan mengubah layout visual ketika mengganti `<main>` menjadi `<div>`.

---

# 19. `PagePlaceholder` HARDENING

`PagePlaceholder` masih mengandung:

```text
Informasi Fondasi MVP
```

Plan 013 tidak wajib menghapus file.

Namun:

- `NotFoundPage` tidak boleh menggunakannya;
- halaman publik final tidak boleh menampilkan copy tersebut;
- cari seluruh penggunaan `PagePlaceholder`;
- jika tidak digunakan lagi, boleh dipertahankan tanpa perubahan;
- boleh dihapus hanya jika benar-benar tidak digunakan dan TypeScript/build tetap bersih;
- jangan menghapus jika ada penggunaan yang masih diperlukan.

Pilihan paling aman:

- lepaskan dari NotFoundPage;
- jangan mengubah file kecuali perlu.

---

# 20. REDIRECT VERIFICATION

Canonical yang harus dipertahankan:

```text
/tentang-kami
/galeri
```

Legacy:

```text
/about
/gallery
```

Redirect harus:

- memakai `replace`;
- berada sebelum wildcard;
- tidak membuat loop;
- mempertahankan query hanya jika React Router secara alami melakukannya atau sesuai implementasi saat ini;
- tidak mengubah route lain.

Periksa:

```text
/about
/gallery
```

dan pastikan masing-masing menuju canonical.

Jangan membuat redirect lain berdasarkan asumsi.

---

# 21. ACCESSIBILITY HARDENING

## 21.1 System State

- satu H1;
- label CTA jelas;
- ikon dekoratif `aria-hidden`;
- focus visible;
- tidak hanya warna;
- copy mudah dipahami.

## 21.2 Empty State

- heading sesuai level;
- tombol reset mempunyai `type="button"`;
- bukan alert;
- dapat diumumkan dengan `aria-live="polite"` jika muncul setelah filter.

## 21.3 Global Error

- fallback dapat dinavigasi keyboard;
- tombol reload dapat difokuskan;
- link Beranda dapat difokuskan;
- tidak mengunci fokus;
- tidak membuka modal;
- tidak menghapus kemampuan browser back;
- tidak menampilkan detail teknis.

## 21.4 Media fallback

- ikon dekoratif;
- teks dapat dibaca;
- fallback tidak memakai image alt palsu;
- area tidak runtuh;
- kontras mengikuti token WNB.

## 21.5 Landmark

- satu main;
- H1 satu per halaman;
- heading order tidak dilompati tanpa alasan;
- navigation tetap mempunyai label;
- skip link tetap bekerja.

---

# 22. RESPONSIVE HARDENING

Periksa:

```text
320px
375px
768px
1024px
1440px
```

State yang diuji:

- 404 umum;
- Paket tidak ditemukan;
- Rute tidak ditemukan;
- empty Paket;
- empty Rute;
- empty Galeri;
- global error fallback;
- media fallback.

Pastikan:

- CTA tidak overflow;
- tombol menjadi stack pada mobile;
- judul tidak terpotong;
- ikon tidak terlalu besar;
- deskripsi tetap terbaca;
- tidak ada horizontal scroll;
- sticky layout lain tidak terganggu;
- fallback media mempertahankan tinggi.

---

# 23. COPY FREEZE

Copy berikut wajib dipertahankan kecuali ada typo jelas.

## 23.1 404 umum

```text
Error 404
Halaman Tidak Ditemukan

Halaman yang Anda cari tidak tersedia, telah berpindah, atau alamat yang dibuka tidak sesuai. Anda dapat kembali ke Beranda atau melanjutkan menjelajahi Paket dan Rute WNB.
```

## 23.2 Paket tidak ditemukan

```text
404 — Paket Tidak Ditemukan
Paket Wisata Tidak Ditemukan

Paket yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan pilih Paket lain atau sampaikan kebutuhan perjalanan Anda kepada WNB.
```

## 23.3 Rute tidak ditemukan

```text
404 — Rute Tidak Ditemukan
Rute Perjalanan Tidak Ditemukan

Rute yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan periksa daftar Rute WNB untuk melihat pilihan perjalanan lainnya.
```

## 23.4 Global error

```text
Sistem WNB
Terjadi Kendala

Website mengalami kendala saat menampilkan halaman. Silakan muat ulang halaman atau kembali ke Beranda.
```

## 23.5 Empty Paket

```text
Tidak Ada Paket yang Sesuai
Tidak ada Paket yang sesuai dengan pilihan Anda. Ubah kategori atau tampilkan kembali seluruh Paket.
```

## 23.6 Empty Rute

```text
Tidak Ada Rute yang Sesuai
Tidak ada Rute yang sesuai dengan wilayah pilihan Anda. Tampilkan kembali seluruh Rute untuk melihat pilihan lainnya.
```

## 23.7 Empty Galeri

```text
Visual Belum Tersedia
Media Galeri untuk kategori ini sedang dipersiapkan.
```

---

# 24. IMPLEMENTASI BERTAHAP

## Tahap 1 — Audit sebelum perubahan

Executor wajib memeriksa:

```text
App.tsx
AppProviders.tsx
AppRoutes.tsx
MainLayout.tsx
NotFoundPage.tsx
PackageListPage.tsx
PackageDetailPage.tsx
RouteListPage.tsx
RouteDetailPage.tsx
GalleryPage.tsx
PackageMediaView.tsx
RouteMediaView.tsx
GalleryMediaView.tsx
PagePlaceholder.tsx
```

Catat:

- penggunaan `<main>`;
- penggunaan `id="main-content"`;
- penggunaan `PagePlaceholder`;
- struktur empty state;
- media fallback;
- redirect;
- placement App Router.

Jangan langsung mengedit sebelum memahami struktur.

## Tahap 2 — Komponen sistem

Buat:

```text
SystemState
EmptyState
MediaFallback
GlobalErrorBoundary
GlobalErrorFallback
```

Jalankan typecheck awal.

## Tahap 3 — 404 umum

Perbaiki `NotFoundPage`.

Jalankan typecheck.

## Tahap 4 — Paket/Rute not found

Migrasikan kedua detail page.

Hapus nested main.

Jalankan typecheck.

## Tahap 5 — Empty state

Migrasikan:

```text
PackageListPage
RouteListPage
GalleryPage
```

Jalankan typecheck.

## Tahap 6 — Global Error Boundary

Integrasikan ke `App`.

Jalankan typecheck.

## Tahap 7 — Media fallback

Migrasikan fallback akhir tiga media component.

Jalankan typecheck.

## Tahap 8 — Semantic sweep

Cari:

```text
<main
id="main-content"
PagePlaceholder
Informasi Fondasi MVP
```

Perbaiki hanya yang relevan.

## Tahap 9 — Redirect verification

Periksa `AppRoutes`.

## Tahap 10 — Full verification

Jalankan build dan manual regression.

---

# 25. AUTOMATED VERIFICATION

Jalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya wajib lulus.

Jangan mengganti script.

Jangan memakai command alternatif untuk menutupi kegagalan.

Jika gagal:

1. perbaiki penyebab;
2. jalankan ulang;
3. laporkan error yang sempat muncul;
4. jangan menghapus tipe hanya agar compile.

---

# 26. MANUAL REGRESSION MATRIX

## 26.1 Navigasi utama

Uji:

```text
/
 /tentang-kami
/about
/paket
/rute
/galeri
/gallery
/booking
```

Pastikan semua terbuka.

## 26.2 404 umum

Uji:

```text
/url-yang-tidak-ada
/abc
/paket-tidak-valid
```

Ekspektasi:

- judul Halaman Tidak Ditemukan;
- tidak memakai Rute Tidak Ditemukan;
- tidak menampilkan MVP;
- CTA bekerja;
- header/footer tetap tampil.

## 26.3 Paket tidak ditemukan

Uji:

```text
/paket/slug-tidak-valid
```

Ekspektasi:

- Paket Wisata Tidak Ditemukan;
- CTA daftar Paket;
- CTA Booking;
- tidak redirect;
- tidak nested main.

## 26.4 Rute tidak ditemukan

Uji:

```text
/rute/slug-tidak-valid
```

Ekspektasi:

- Rute Perjalanan Tidak Ditemukan;
- CTA daftar Rute;
- CTA Paket;
- tidak redirect.

## 26.5 Empty Paket

Pilih kategori yang kosong.

Ekspektasi:

- EmptyState tampil;
- Hapus Filter kembali ke Semua;
- tidak dianggap error.

## 26.6 Empty Rute

Pilih filter kosong jika tersedia.

Ekspektasi:

- EmptyState tampil;
- Hapus Filter bekerja.

## 26.7 Empty Galeri

Pilih kategori kosong jika tersedia.

Ekspektasi:

- Visual Belum Tersedia;
- Tampilkan Semua bekerja;
- lightbox tetap berfungsi setelah reset.

## 26.8 Media Paket

Simulasikan source gagal secara lokal.

Ekspektasi:

- fallback source dicoba;
- jika fallback gagal, MediaFallback tampil;
- tidak ada broken icon;
- layout tidak runtuh.

## 26.9 Media Rute

Ekspektasi:

- routeId dan region tetap tampil;
- ikon dekoratif;
- layout konsisten.

## 26.10 Media Galeri

Ekspektasi:

- fallback akhir tampil;
- Card tetap mempunyai tinggi;
- tombol tidak menabrak layout.

## 26.11 Global Error Boundary

Simulasikan error render sementara secara lokal.

Ekspektasi:

- Terjadi Kendala;
- tidak ada stack trace;
- reload bekerja;
- Beranda bekerja;
- setelah kode simulasi dihapus, diff bersih;
- tidak ada debug route.

## 26.12 Booking regression

Uji singkat:

```text
/booking
/booking?package=<slug-valid>
/booking?route=<slug-valid>
/booking?package=slug-tidak-valid
```

Pastikan Plan 013 tidak merusak Booking.

## 26.13 Paket dan Rute normal

Buka minimal:

- satu Paket normal;
- Open Trip;
- satu Rute normal;
- satu Rute konsultasi khusus.

Pastikan tidak ada perubahan isi.

## 26.14 Galeri normal

- filter;
- buka lightbox;
- next;
- previous;
- close;
- focus kembali.

Plan 013 tidak boleh merusak lightbox.

---

# 27. SEMANTIC VERIFICATION MATRIX

Cari seluruh source:

```text
<main
id="main-content"
```

Ekspektasi:

```text
MainLayout.tsx
→ satu-satunya <main id="main-content">
```

Periksa:

- tidak ada duplicate ID;
- tidak ada nested main;
- SkipLink bekerja;
- footer berada di luar main;
- header berada di luar main;
- Outlet berada di dalam main.

---

# 28. ACCESSIBILITY VERIFICATION MATRIX

Gunakan keyboard:

```text
Tab
Shift+Tab
Enter
Space
```

Periksa:

- CTA 404;
- CTA Paket not found;
- CTA Rute not found;
- tombol reset empty state;
- reload global error;
- Beranda global error;
- filter Paket;
- filter Rute;
- filter Galeri.

Pastikan:

- focus ring terlihat;
- urutan logis;
- tidak ada elemen klik berupa div;
- tombol mempunyai type;
- link internal memakai router link;
- heading dapat dipahami.

---

# 29. VISUAL FREEZE

Plan 013 boleh memperbaiki state khusus.

Plan 013 tidak boleh mengubah layout normal:

- Beranda;
- Tentang Kami;
- Daftar Paket normal;
- Detail Paket normal;
- Daftar Rute normal;
- Detail Rute normal;
- Galeri normal;
- Booking normal.

Gunakan screenshot sebelum/sesudah secara lokal jika diperlukan.

Perubahan normal page hanya boleh berupa:

- mengganti `<main>` menjadi `<div>`;
- mengganti markup empty state;
- mengganti fallback akhir;
- menambahkan Error Boundary wrapper;
- migrasi error state ke komponen bersama.

---

# 30. TYPE-SAFETY

Jangan menggunakan:

```ts
any
as any
// @ts-ignore
// @ts-expect-error
```

kecuali benar-benar diperlukan dan dijelaskan. Untuk Plan 013, seharusnya tidak diperlukan.

Gunakan:

```ts
import type
```

untuk tipe React.

Komponen action harus mempunyai tipe discriminated bila mendukung link dan button.

Rekomendasi:

```ts
type LinkAction = {
  label: string;
  to: string;
  onClick?: never;
};

type ButtonAction = {
  label: string;
  onClick: () => void;
  to?: never;
};
```

Boleh menggunakan bentuk lain yang tetap type-safe.

---

# 31. ERROR BOUNDARY TYPE-SAFETY

Class component:

```ts
class GlobalErrorBoundary extends Component<
  GlobalErrorBoundaryProps,
  GlobalErrorBoundaryState
>
```

Jangan menyimpan:

```ts
error: Error
errorInfo: ErrorInfo
```

dalam state jika tidak digunakan.

Jika `componentDidCatch` dibuat, jangan log data sensitif.

Tidak perlu `componentDidCatch` jika tidak ada kebutuhan.

---

# 32. PERFORMA

Plan ini tidak membutuhkan:

- code splitting baru;
- lazy route;
- suspense;
- prefetch;
- cache;
- memoization besar.

Jangan mengoptimalkan hal yang tidak terkait.

Komponen sistem kecil harus tetap sederhana.

---

# 33. SECURITY DAN PRIVACY

Error fallback tidak boleh menampilkan:

- form Booking;
- nomor WhatsApp pengguna;
- additional notes;
- safety needs;
- query string mentah;
- environment;
- browser detail;
- user agent;
- referrer;
- path lengkap jika mengandung data;
- stack trace.

Tidak ada logging data pengguna.

Tidak ada penyimpanan error ke localStorage.

---

# 34. BROWSER BEHAVIOR

Uji minimal:

- Chrome desktop;
- mobile viewport.

Perhatikan:

- `window.location.reload()` aman;
- internal link menggunakan React Router;
- Browser back tetap bekerja;
- redirect legacy tidak menambah history entry karena `replace`.

---

# 35. DOKUMENTASI KODE

Komentar hanya jika membantu.

Jangan menambahkan komentar berlebihan seperti:

```text
PLAN 013 requirement 14.2.3
```

Gunakan komentar singkat:

```ts
// Reset the boundary after navigation.
```

Jangan menyimpan instruksi plan di source code.

---

# 36. PENAMAAN

Gunakan:

```text
SystemState
EmptyState
MediaFallback
GlobalErrorBoundary
GlobalErrorFallback
```

Jangan menggunakan nama:

```text
UltimateFallback
SuperError
UniversalError
Final404
MegaState
```

---

# 37. KOMPATIBILITAS DENGAN KOMPONEN EXISTING

Gunakan komponen yang ada:

```text
Container
LinkButton
```

Jangan membuat ulang button system.

SystemState sebaiknya menggunakan `LinkButton` untuk link internal.

Untuk button `onClick`, gunakan styling yang konsisten dengan LinkButton.

Jika `LinkButton` tidak mendukung button, boleh gunakan `<button>` dengan class setara.

Jangan memodifikasi `LinkButton` hanya untuk Plan 013 kecuali benar-benar diperlukan.

---

# 38. PERLAKUAN `PagePlaceholder`

Sebelum menghapus:

1. cari semua penggunaan;
2. pastikan tidak ada halaman yang masih membutuhkan;
3. jika tidak digunakan, penghapusan opsional;
4. jika digunakan, biarkan file;
5. yang wajib hanya: tidak dipakai pada NotFoundPage final.

Jangan menghapus komponen common secara agresif.

---

# 39. PENANGANAN OPEN TRIP

Empty state Open Trip hanya informasi.

Jangan:

- mengaktifkan booking Open Trip;
- membuat jadwal;
- membuat tanggal;
- mengubah CTA Paket;
- mengubah data availability;
- menjanjikan keberangkatan.

---

# 40. HUBUNGAN DENGAN BOOKING

SystemState tidak digunakan untuk mengganti Booking yang sudah aktif.

Kondisi nomor WhatsApp kosong tetap berada di Booking.

Jangan mengubah Booking menjadi:

```text
Kanal Pemesanan Sedang Disiapkan
```

secara penuh karena form fallback copy sudah tersedia.

File Drive 07 yang lama tidak boleh mengembalikan Booking menjadi placeholder.

---

# 41. HUBUNGAN DENGAN MEDIA ILUSTRASI

Galeri tetap menyatakan bahwa media awal merupakan ilustrasi.

Plan 013 tidak mengubah:

- sourceLabel;
- illustration notice;
- caption;
- disclaimer.

MediaFallback bukan pengganti dokumentasi.

---

# 42. OUT OF SCOPE SETELAH PLAN 013

Plan 013 tidak mencakup:

- sinkronisasi Google Drive;
- audit konten akhir;
- audit SEO;
- audit performa Lighthouse;
- deploy;
- domain;
- analytics;
- backend;
- nomor WhatsApp resmi;
- foto asli;
- pembayaran.

Sinkronisasi Drive dilakukan setelah Plan 013 Verified.

---

# 43. HASIL AKHIR YANG DIHARAPKAN

Setelah Plan 013:

```text
404 umum
→ benar dan konsisten

Paket/Rute tidak ditemukan
→ memakai pola bersama

Empty Paket/Rute/Galeri
→ konsisten dan dapat dipulihkan

Global render error
→ mempunyai fallback aman

Media failure
→ tidak menunjukkan broken image

Semantic
→ satu main

Redirect
→ tetap benar

Booking
→ tidak berubah

Frontend publik
→ siap audit akhir
```

---

# 44. LAPORAN EKSEKUSI WAJIB

Setelah implementasi, executor harus melaporkan:

## 44.1 File baru

Daftar lengkap file baru.

## 44.2 File diubah

Daftar lengkap file diubah.

## 44.3 Komponen sistem

Jelaskan:

- SystemState;
- EmptyState;
- MediaFallback;
- GlobalErrorBoundary;
- GlobalErrorFallback.

## 44.4 Semantic correction

Laporkan:

- jumlah `<main>` sebelum;
- jumlah `<main>` sesudah;
- lokasi final `main-content`;
- duplicate ID yang dihapus.

## 44.5 Redirect

Laporkan hasil:

```text
/about → /tentang-kami
/gallery → /galeri
```

## 44.6 Typecheck

Salin ringkasan hasil:

```bash
npm run typecheck:client
```

## 44.7 Build

Salin ringkasan hasil:

```bash
npm run build:client
```

## 44.8 Manual regression

Laporkan status:

```text
PASS
FAIL
NOT TESTED
```

untuk seluruh matrix penting.

## 44.9 Known issue

Laporkan masalah yang belum selesai.

Jangan menulis “semua sempurna” tanpa pemeriksaan.

---

# 45. LARANGAN COMMIT DAN PUSH

Setelah implementasi:

- jangan commit;
- jangan push;
- jangan membuat branch baru;
- jangan membuat PR;
- jangan merge;
- jangan mengubah remote;
- jangan deploy.

Berikan laporan dan berhenti.

Commit dilakukan setelah pemeriksaan ChatGPT.

---

# 46. COMMIT MESSAGE SETELAH VERIFIED

Commit message yang direkomendasikan:

```text
feat(system): implement Plan 013 system states and frontend hardening
```

Alternatif:

```text
feat(system): add 404 error boundary and shared fallbacks
```

Gunakan rekomendasi pertama kecuali scope commit berbeda.

---

# 47. BRANCH REKOMENDASI

Jika menggunakan branch:

```text
feat/plan-013-system-hardening
```

Jangan membuat branch sebelum user memintanya.

---

# 48. VERIFICATION CHECKLIST RINGKAS

## Sistem

- [ ] SystemState dibuat
- [ ] EmptyState dibuat
- [ ] MediaFallback dibuat
- [ ] GlobalErrorBoundary dibuat
- [ ] GlobalErrorFallback dibuat

## 404

- [ ] judul umum benar
- [ ] bukan Rute Tidak Ditemukan
- [ ] tidak ada MVP
- [ ] CTA Beranda
- [ ] CTA Paket
- [ ] CTA Rute

## Paket

- [ ] state tidak ditemukan memakai SystemState
- [ ] CTA Paket
- [ ] CTA Booking
- [ ] normal detail tidak berubah

## Rute

- [ ] state tidak ditemukan memakai SystemState
- [ ] CTA Rute
- [ ] CTA Paket
- [ ] normal detail tidak berubah

## Empty

- [ ] Paket
- [ ] Rute
- [ ] Galeri
- [ ] reset filter bekerja

## Error Boundary

- [ ] menangkap render error
- [ ] copy aman
- [ ] reload
- [ ] Beranda
- [ ] reset route
- [ ] tidak ada debug route

## Media

- [ ] Paket
- [ ] Rute
- [ ] Galeri
- [ ] tidak ada broken image

## Semantic

- [ ] satu main
- [ ] satu main-content
- [ ] SkipLink bekerja
- [ ] tidak ada nested main

## Redirect

- [ ] /about
- [ ] /gallery

## Build

- [ ] typecheck
- [ ] production build

---

# 49. ACCEPTANCE CRITERIA

Plan 013 dinyatakan selesai hanya jika:

1. `npm run typecheck:client` lulus;
2. `npm run build:client` lulus;
3. 404 umum benar;
4. Paket not found benar;
5. Rute not found benar;
6. Error Boundary bekerja;
7. empty state konsisten;
8. fallback media konsisten;
9. tidak ada nested main;
10. tidak ada duplicate main-content;
11. redirect legacy tetap bekerja;
12. Booking tidak mengalami regresi;
13. Galeri tidak mengalami regresi;
14. tidak ada dependency baru;
15. tidak ada data bisnis berubah;
16. tidak ada copy internal tampil;
17. executor memberikan laporan lengkap;
18. executor berhenti tanpa commit/push.

---

# 50. STATUS SETELAH EKSEKUSI

Setelah implementasi, status awal:

```text
Plan 013 — Menunggu Verifikasi
```

Setelah SHA diperiksa dan seluruh koreksi selesai:

```text
Verified — Plan 013
```

Setelah itu:

```text
Audit Final Frontend Publik WNB
```

Kemudian:

```text
Sinkronisasi Google Docs dan Google Sheet 07
```

Dan status akhir:

```text
Verified — Fase 1 Frontend Publik WNB
```

---

# 51. INSTRUKSI FINAL UNTUK EXECUTOR

1. Baca seluruh Plan 013.
2. Periksa baseline.
3. Susun Implementation Plan.
4. Jangan langsung mengubah kode sebelum Implementation Plan disetujui.
5. Gunakan scope ketat.
6. Jangan mengulang pekerjaan Plan 012.
7. Jangan mengubah Booking.
8. Jangan mengubah data bisnis.
9. Jangan menambah dependency.
10. Implementasikan komponen sistem sederhana.
11. Jalankan typecheck bertahap.
12. Jalankan build akhir.
13. Lakukan manual regression.
14. Berikan laporan lengkap.
15. Jangan commit atau push.
16. Berhenti setelah laporan.

---

# 52. BASELINE FINAL

Gunakan:

```text
618209bd2c84ac54a14ec2415733e4d526433086
```

Jangan menggunakan SHA lain sebagai baseline tanpa persetujuan.

---

# 53. PENUTUP

Plan 013 adalah lapisan hardening terakhir.

Prioritasnya bukan membuat website terlihat berbeda.

Prioritasnya adalah memastikan website tetap:

- jelas;
- aman;
- dapat dipulihkan;
- konsisten;
- accessible;
- mudah dipelihara;
- siap diaudit;
- siap menjadi baseline frontend publik WNB.

Jangan melakukan improvisasi di luar plan.
