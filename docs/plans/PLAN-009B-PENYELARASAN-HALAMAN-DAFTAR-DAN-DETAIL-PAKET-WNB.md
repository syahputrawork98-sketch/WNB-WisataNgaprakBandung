# PLAN 009B — PENYELARASAN HALAMAN DAFTAR DAN DETAIL PAKET WNB

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Jenis pekerjaan:** Penyelarasan halaman Daftar Paket, Detail Paket, model data, aset Google Drive, status publikasi, dan CTA perencanaan  
**Status plan:** Final — disetujui untuk dieksekusi pada working tree lokal  
**Tanggal penyusunan:** 22 Juli 2026  
**Baseline repository:** `15cc78d472f4761d6b604333ed0f4fd9279f7bc1`  
**Plan sebelumnya:** `PLAN-009A-PENYELARASAN-HALAMAN-BERANDA-DAN-TENTANG-KAMI-WNB.md`  
**Lokasi salinan plan di repository:** `docs/plans/PLAN-009B-PENYELARASAN-HALAMAN-DAFTAR-DAN-DETAIL-PAKET-WNB.md`

---

## 0. PERINTAH UTAMA UNTUK GEMINI ANTIGRAVITY

Baca seluruh file ini sampai selesai sebelum mengubah file apa pun.

Plan ini merupakan instruksi resmi dan mandiri. Seluruh keputusan dari Google Drive yang diperlukan untuk pekerjaan Daftar dan Detail Paket sudah dimasukkan langsung ke dalam file ini.

Gemini Antigravity tidak perlu membuka Google Drive, tidak perlu meminta pengguna menyalin data tambahan, dan tidak boleh membuat keputusan bisnis baru.

Sebelum mengubah kode:

1. Pastikan repository yang dibuka adalah:
   `syahputrawork98-sketch/WNB-WisataNgaprakBandung`.
2. Jalankan dan catat:
   ```bash
   git status --short
   git rev-parse HEAD
   ```
3. Pastikan commit awal sebisa mungkin berada pada:
   `15cc78d472f4761d6b604333ed0f4fd9279f7bc1`.
4. Jika HEAD lebih baru, baca perubahan terbaru dan pertahankan hasil Plan 009A.
5. Baca dokumen konteks repository:
   - `docs/context/current-state.md`
   - `docs/context/business-facts.md`
   - `docs/context/project-context.md`
   - `docs/context/workflow-rules.md`
   - `docs/context/README.md`
6. Baca seluruh implementasi Paket, route, komponen gambar, dan komponen umum yang relevan.
7. Salin file plan ini secara sama persis ke:
   `docs/plans/PLAN-009B-PENYELARASAN-HALAMAN-DAFTAR-DAN-DETAIL-PAKET-WNB.md`
8. Jangan mengubah Google Drive.
9. Jangan mengunduh gambar atau video dari Google Drive.
10. Jangan menambahkan gambar Paket ke repository.
11. Jangan membuat folder aset baru.
12. Jangan melakukan commit atau push.
13. Jangan menjalankan browser automation, screenshot testing, build, typecheck, lint, atau test otomatis kecuali pengguna meminta secara terpisah.
14. Periksa diff secara manual melalui kode dan terminal.
15. Berhenti setelah melaporkan hasil.

Jika kondisi repository berbeda secara material dari baseline, lakukan penyesuaian minimal yang tetap memenuhi seluruh keputusan, batas scope, dan kriteria penerimaan pada plan ini.

---

## 1. LATAR BELAKANG

Halaman Daftar Paket dan Detail Paket telah diimplementasikan lebih dahulu di GitHub.

Setelah implementasi awal tersebut, data dan perencanaan Paket di Google Drive diperbaiki dan disinkronkan dengan kondisi kode aktual.

Hasil sinkronisasi menetapkan bahwa:

- implementasi GitHub mempunyai fondasi teknis yang baik;
- struktur tersebut tidak perlu dibangun ulang;
- Google Drive menjadi sumber utama keputusan isi, status, aturan publikasi, dan pemetaan aset;
- kelebihan GitHub dipertahankan;
- perbedaan antara GitHub dan Drive diperbaiki melalui Plan 009B.

### Fondasi GitHub yang sudah baik

Daftar Paket sudah mempunyai:

- route `/paket`;
- filter kategori;
- typed local data;
- grid responsive;
- kartu Paket;
- CTA menuju Detail Paket;
- kondisi daftar kosong;
- section alur perencanaan;
- section pengalaman khusus.

Detail Paket sudah mempunyai:

- route `/paket/:slug`;
- lookup berdasarkan slug;
- kondisi Paket tidak ditemukan;
- H1 dinamis;
- gambar utama;
- ringkasan perjalanan;
- fasilitas termasuk;
- target peserta;
- aktivitas tambahan;
- harga;
- ketentuan;
- CTA Booking;
- Paket terkait;
- layout desktop dan mobile.

### Masalah aktual yang harus diselesaikan

Daftar Paket:

- kartu belum merender gambar;
- gambar baru tersedia di Google Drive;
- kartu menampilkan tiga fasilitas, tetapi belum menampilkan target peserta;
- model harga selalu memakai frasa `Mulai dari`;
- model harga hanya mendukung `per unit` dan `per peserta`;
- semua Paket pada data langsung ditampilkan;
- status publikasi dan ketersediaan belum dimodelkan;
- Trail Exploration selalu dirender walaupun belum tayang;
- belum ada section Panduan Memilih yang jelas;
- belum ada Catatan Harga dan Ketersediaan yang terpisah;
- belum ada CTA penutup Paket dan Rute yang jelas.

Detail Paket:

- gambar masih memakai aset lokal lama;
- belum ada fallback apabila link gambar utama gagal;
- CTA Booking belum membawa slug Paket;
- breadcrumb baru berupa tautan kembali;
- fasilitas tidak termasuk belum dimodelkan;
- aktivitas tambahan dapat dianggap otomatis tersedia;
- hubungan Paket–Rute belum dimodelkan;
- Paket terkait dipilih otomatis berdasarkan kategori;
- harga tetap memakai `Mulai dari`;
- status ketersediaan Paket belum memengaruhi CTA.

---

## 2. TUJUAN PLAN 009B

Plan ini bertujuan:

1. Mempertahankan fondasi teknis Paket yang sudah baik.
2. Menyelaraskan Daftar dan Detail Paket dengan keputusan Drive terbaru.
3. Menampilkan gambar Paket menggunakan link media Google Drive.
4. Tidak menyalin atau mengunduh gambar ke repository.
5. Menambahkan fallback gambar yang aman.
6. Menampilkan target peserta pada kartu.
7. Menghapus ringkasan tiga fasilitas dari kartu.
8. Memperluas model harga.
9. Mengatur status publikasi dan ketersediaan.
10. Menyembunyikan Paket atau section yang belum boleh tampil.
11. Membawa slug Paket ke route Booking.
12. Menghentikan Paket terkait yang dibuat berdasarkan asumsi kategori.
13. Menyiapkan struktur relasi Paket–Rute tanpa mengarang relasi.
14. Menjaga tampilan tetap konsisten dengan Beranda dan Tentang Kami.
15. Membuat implementasi mudah diperbarui ketika data Drive berubah.

---

## 3. BATAS SCOPE

### 3.1 Termasuk dalam scope

- halaman `/paket`;
- halaman `/paket/:slug`;
- komponen Daftar Paket;
- komponen Detail Paket;
- model data dan tipe Paket;
- helper harga;
- helper status tampil;
- helper route Booking dengan query Paket;
- gambar Paket dari link media Drive;
- fallback gambar;
- status ilustrasi;
- filter kategori;
- section Panduan Memilih;
- section proses merencanakan;
- catatan harga dan ketersediaan;
- CTA penutup;
- kondisi Trail Exploration;
- kondisi Open Trip;
- Paket terkait;
- relasi Paket–Rute dalam bentuk struktur data kosong/opsional;
- salinan Plan 009B ke `docs/plans/`.

### 3.2 Tidak termasuk dalam scope

Dilarang mengubah:

- halaman Beranda;
- halaman Tentang Kami;
- video Hero Beranda;
- halaman Daftar Rute;
- halaman Detail Rute;
- data Rute;
- halaman Galeri;
- registri aset Drive;
- halaman Booking dan isi form Booking;
- server;
- API;
- database;
- CMS;
- autentikasi;
- dependency;
- `package.json`;
- `package-lock.json`;
- konfigurasi Vercel;
- konfigurasi build;
- logo;
- font global;
- warna global;
- header dan footer, kecuali terdapat tautan Paket yang benar-benar rusak;
- fakta bisnis di luar Plan 009B;
- status verified pada dokumentasi teknis.

### 3.3 Video

File:

`video-hero-classic-offroad-wnb-v1.mp4`

tidak termasuk dalam Plan 009B.

Jangan:

- memasukkan video ke Beranda;
- mengubah Hero Beranda;
- mengunduh video;
- menambahkan video ke repository;
- membuat komponen video.

Video akan dibahas pada plan penyempurnaan Beranda terpisah.

---

## 4. SUMBER KEPUTUSAN

Hierarki keputusan pada pekerjaan ini:

1. Instruksi pengguna.
2. Plan 009B.
3. Data Paket WNB yang sudah disinkronkan.
4. Perencanaan 03A dan 03B yang sudah disinkronkan.
5. Registri aset yang sudah disinkronkan.
6. Kondisi implementasi GitHub.
7. Keputusan teknis lokal yang tidak mengubah fakta bisnis.

Jika kode lama bertentangan dengan keputusan dalam plan ini, ikuti plan.

Jika detail tidak disebutkan dalam plan:

- pertahankan kode yang sudah bekerja;
- jangan mengarang data;
- jangan memperluas scope;
- gunakan kondisi tersembunyi atau fallback yang aman.

---

## 5. KEPUTUSAN DATA PAKET

### 5.1 Daftar Paket reguler

Paket reguler yang tetap dikelola pada data:

| ID | Slug | Nama |
|---|---|---|
| PK-01 | `corporate-adventure` | Corporate Adventure |
| PK-02 | `family-adventure-short-trip` | Family Adventure — Short Trip |
| PK-03 | `family-adventure-full-experience` | Family Adventure — Full Experience |
| PK-04 | `birthday-adventure` | Birthday Adventure |
| PK-05 | `anniversary-adventure` | Anniversary Adventure |
| PK-06 | `surprise-adventure` | Surprise Adventure |
| PK-07 | `adventure-camping` | Adventure Camping |
| PK-08 | `open-trip-adventure` | Open Trip Adventure |

### 5.2 Pengalaman khusus

| ID | Slug | Nama | Status |
|---|---|---|---|
| PK-09 | `trail-exploration-buka-jalur` | Trail Exploration — Buka Jalur | Belum Tayang |

PK-09:

- bukan Paket reguler;
- belum mempunyai aset;
- belum mempunyai harga final;
- belum mempunyai Rute final;
- tidak boleh dirender pada Daftar Paket saat ini;
- tidak boleh mempunyai Detail Paket publik;
- tidak boleh memiliki CTA pemesanan aktif;
- data konseptual boleh dipertahankan di kode bila tidak ikut dirender.

---

## 6. STATUS PUBLIKASI DAN KETERSEDIAAN

Jangan hanya mengandalkan keberadaan item di array.

Tambahkan model status yang jelas dan sederhana.

Contoh tipe yang diperbolehkan:

```ts
export type PackagePublicationStatus =
  | "published"
  | "published-updating"
  | "unpublished";

export type PackageAvailabilityStatus =
  | "available-by-confirmation"
  | "schedule-required"
  | "temporarily-unavailable";
```

Nama tipe dapat disesuaikan dengan konvensi repository, tetapi maknanya harus sama.

### 6.1 PK-01 sampai PK-07

Status:

```text
publicationStatus: published-updating
availabilityStatus: available-by-confirmation
```

Makna publik:

- dapat dilihat;
- dapat membuka Detail Paket;
- dapat mengirim permintaan;
- ketersediaan tetap memerlukan pemeriksaan WNB;
- jangan menampilkan teks internal `Tayang — Dalam Pembaruan` kepada pengunjung;
- gunakan kalimat publik seperti `Ketersediaan dikonfirmasi oleh WNB`.

### 6.2 PK-08 — Open Trip Adventure

Status:

```text
publicationStatus: published-updating
availabilityStatus: schedule-required
```

Kondisi saat Plan 009B:

- belum ada jadwal aktif yang tercatat;
- belum ada kuota aktif yang tercatat;
- tidak boleh tampil sebagai Paket yang dapat langsung dipilih;
- data dan Detail Paket boleh tetap tersedia secara teknis;
- jika direct URL dibuka, tampilkan kondisi `Jadwal belum tersedia`;
- CTA Booking harus disembunyikan atau dinonaktifkan;
- tampilkan CTA kembali ke Daftar Paket;
- jangan memberi kesan Open Trip tersedia setiap hari.

Untuk Daftar Paket:

- jangan masukkan PK-08 ke grid Paket yang dapat dipilih selama jadwal aktif belum tersedia;
- jangan menghapus datanya;
- helper daftar harus dapat menampilkannya kembali pada masa depan setelah status ketersediaan berubah.

### 6.3 PK-09 — Trail Exploration

Status:

```text
publicationStatus: unpublished
availabilityStatus: temporarily-unavailable
```

- jangan render `SpecialExperienceSection`;
- jangan render kartu;
- jangan membuat Detail Paket;
- jangan menampilkan harga;
- jangan menampilkan CTA konsultasi pada tahap ini;
- komponen lama boleh dipertahankan bila masih diperlukan untuk plan masa depan, tetapi tidak boleh dirender.

---

## 7. MODEL HARGA

Model saat ini:

```ts
price: number;
priceUnit: "per unit" | "per peserta";
```

dan helper selalu membentuk:

```text
Mulai dari Rp...
```

Model tersebut harus diperluas.

Contoh tipe yang diperbolehkan:

```ts
export type PriceUnit = "per unit" | "per peserta";

export type PriceDisplayMode =
  | "exact"
  | "starting-from"
  | "custom"
  | "hidden";

export type PackagePrice = {
  amount?: number;
  unit?: PriceUnit;
  displayMode: PriceDisplayMode;
  customText?: string;
  note?: string;
};
```

Struktur boleh berbeda selama memenuhi perilaku berikut.

### 7.1 Aturan format harga

- `exact`: `Rp1.500.000 per unit`
- `starting-from`: `Mulai dari Rp1.500.000 per unit`
- `custom`: gunakan `customText`
- `hidden`: jangan render blok harga
- nilai nol tidak boleh menjadi `Rp0`
- amount kosong tidak boleh menghasilkan `NaN`
- unit tidak boleh berdiri terpisah dari harga
- `Mulai dari` tidak boleh otomatis digunakan

### 7.2 Keputusan harga saat ini

| ID | Nilai | Satuan | Mode |
|---|---:|---|---|
| PK-01 | 450000 | per peserta | exact |
| PK-02 | 1500000 | per unit | exact |
| PK-03 | 2200000 | per unit | exact |
| PK-04 | 1850000 | per unit | exact |
| PK-05 | 1850000 | per unit | exact |
| PK-06 | 1950000 | per unit | exact |
| PK-07 | 2500000 | per unit | exact |
| PK-08 | 350000 | per peserta | exact, tetapi tidak ditawarkan selama jadwal belum tersedia |
| PK-09 | tidak ditetapkan | — | hidden |

### 7.3 Catatan harga publik

Gunakan catatan global atau per Paket yang proporsional:

`Harga akhir dapat menyesuaikan jumlah peserta, kebutuhan tambahan, kondisi perjalanan, dan ketersediaan unit.`

Jangan:

- menyatakan seluruh harga final tanpa syarat;
- menampilkan harga nol;
- menambahkan diskon;
- membuat harga baru;
- mengganti nilai harga berdasarkan asumsi.

---

## 8. PEMETAAN ASET GOOGLE DRIVE

### 8.1 Aturan umum

- gambar master tetap disimpan di Google Drive;
- jangan mengunduh gambar;
- jangan menyalin gambar ke repository;
- jangan membuat WebP;
- jangan membuat crop baru;
- jangan mengubah file Drive;
- jangan mengubah izin Drive;
- gunakan link media yang diberikan dalam plan;
- jangan memakai link halaman `/view` sebagai `src`;
- gunakan link file `/view` hanya sebagai referensi komentar/data bila diperlukan;
- semua gambar adalah ilustrasi AI;
- semua gambar bukan dokumentasi asli WNB;
- gambar harus mempunyai fallback.

### 8.2 Corporate Adventure

**ID:** PK-01  
**Aset utama:** Corporate v2  
**Corporate v1:** alternatif/arsip, jangan digunakan sebagai gambar utama.

```text
File:
package-corporate-adventure-main-v2.png

Drive ID:
1FHDa0Q1WooLLIWXvNlQzJxakoE_BLuZP

Link file:
https://drive.google.com/file/d/1FHDa0Q1WooLLIWXvNlQzJxakoE_BLuZP/view

Link media utama:
https://drive.google.com/uc?export=view&id=1FHDa0Q1WooLLIWXvNlQzJxakoE_BLuZP

Alt:
Ilustrasi kelompok perusahaan menikmati perjalanan bersama Land Rover klasik di alam Bandung
```

Fallback existing:

```text
/images/home/explore-package.webp
```

### 8.3 Family Adventure — Short Trip

```text
File:
package-family-adventure-short-trip-main-v1.png

Drive ID:
10mUGyrc8ifCTJJzrneaD0OoTd-34hCn0

Link media:
https://drive.google.com/uc?export=view&id=10mUGyrc8ifCTJJzrneaD0OoTd-34hCn0

Alt:
Ilustrasi keluarga menikmati perjalanan singkat bersama Land Rover klasik
```

Fallback existing:

```text
/images/home/hero-adventure.webp
```

### 8.4 Family Adventure — Full Experience

```text
File:
package-family-adventure-full-experience-main-v1.png

Drive ID:
1feY62AuvecJg4ESqodAaBHbzmQ0BvywS

Link media:
https://drive.google.com/uc?export=view&id=1feY62AuvecJg4ESqodAaBHbzmQ0BvywS

Alt:
Ilustrasi keluarga dalam perjalanan Land Rover klasik berdurasi lebih panjang
```

Fallback existing:

```text
/images/home/explore-route.webp
```

### 8.5 Birthday Adventure

```text
File:
package-birthday-adventure-main-v1.png

Drive ID:
1v8sUzybgf7c4JubuDkeXfgBGGWtswsxr

Link media:
https://drive.google.com/uc?export=view&id=1v8sUzybgf7c4JubuDkeXfgBGGWtswsxr

Alt:
Ilustrasi suasana ulang tahun dalam perjalanan bersama Land Rover klasik
```

Fallback existing:

```text
/images/home/manifesto-forest-road.webp
```

Batas visual:

- dekorasi pada gambar tidak otomatis termasuk;
- kue atau dokumentasi tidak otomatis termasuk;
- jangan menambahkan klaim fasilitas dari gambar.

### 8.6 Anniversary Adventure

```text
File:
package-anniversary-adventure-main-v1.png

Drive ID:
1WOJG-jdfSvsVMNted74UghM0ofIMME5N

Link media:
https://drive.google.com/uc?export=view&id=1WOJG-jdfSvsVMNted74UghM0ofIMME5N

Alt:
Ilustrasi pasangan merayakan hari jadi dalam perjalanan Land Rover klasik
```

Fallback existing:

```text
/images/home/explore-gallery.webp
```

Batas visual:

- piknik dan dekorasi tidak otomatis termasuk;
- jangan mengubah data fasilitas berdasarkan gambar.

### 8.7 Surprise Adventure

```text
File:
package-surprise-adventure-main-v1.png

Drive ID:
1XK4_bb2E7JO5uzEo6cbqSQ3E3MYllBBq

Link media:
https://drive.google.com/uc?export=view&id=1XK4_bb2E7JO5uzEo6cbqSQ3E3MYllBBq

Alt:
Ilustrasi momen kejutan dalam perjalanan bersama Land Rover klasik
```

Fallback existing:

```text
/images/home/final-cta-road.webp
```

Batas visual:

- gambar tidak menetapkan skenario;
- gambar tidak menetapkan lokasi;
- gambar tidak menjamin dekorasi tertentu.

### 8.8 Adventure Camping

```text
File:
package-adventure-camping-main-v1.png

Drive ID:
1bc0-hkEuwOfcxTt4vroDtRRJXo48JgVX

Link media:
https://drive.google.com/uc?export=view&id=1bc0-hkEuwOfcxTt4vroDtRRJXo48JgVX

Alt:
Ilustrasi Land Rover klasik dan suasana camping di kawasan pegunungan
```

Fallback existing:

```text
/images/home/explore-package.webp
```

Batas visual:

- tenda dan perlengkapan pada visual tidak otomatis menjadi fasilitas;
- gunakan data fasilitas Paket sebagai sumber kebenaran.

### 8.9 Open Trip Adventure

```text
File:
package-open-trip-adventure-main-v1.png

Drive ID:
1BLYerjJQMOK9mgM-Hs-yrjUWHhvOgxtZ

Link media:
https://drive.google.com/uc?export=view&id=1BLYerjJQMOK9mgM-Hs-yrjUWHhvOgxtZ

Alt:
Ilustrasi peserta open trip berbagi perjalanan bersama Land Rover klasik
```

Fallback existing:

```text
/images/home/hero-adventure.webp
```

Aset tetap disimpan pada data, tetapi jangan ditampilkan pada grid Paket saat jadwal belum tersedia.

### 8.10 Trail Exploration

```text
Aset:
Belum tersedia
```

- jangan menggunakan gambar Paket lain;
- jangan menggunakan fallback generik;
- jangan membuat gambar baru;
- jangan merender section.

---

## 9. KOMPONEN GAMBAR PAKET

Buat atau sesuaikan satu komponen gambar yang dapat digunakan oleh kartu dan Detail Paket.

Nama yang disarankan:

```text
PackageImage.tsx
```

atau nama lain sesuai pola repository.

### 9.1 Perilaku wajib

Props minimal:

- `src`;
- `fallbackSrc`;
- `alt`;
- `priority`;
- `className`;
- `imageClassName`;
- `showIllustrationNotice`.

Perilaku:

1. Mencoba link media Google Drive.
2. Jika gagal, mengganti ke fallback existing.
3. Jika fallback juga gagal, menampilkan placeholder netral.
4. Tidak melakukan loop `onError`.
5. Kartu memakai:
   - `loading="lazy"`;
   - `decoding="async"`.
6. Hero Detail dapat memakai priority/eager.
7. Alt text berasal dari data.
8. Status ilustrasi ditampilkan.
9. Jangan menyatakan foto sebagai armada resmi.
10. Jangan mengubah komponen `EditorialImage` secara global kecuali benar-benar perlu.
11. Lebih aman membuat wrapper khusus Paket agar perubahan tidak memengaruhi Home/About.

### 9.2 Label ilustrasi

Gunakan label singkat:

```text
Ilustrasi visual
```

atau:

```text
Foto ilustrasi — bukan dokumentasi asli WNB
```

Pada kartu, label boleh berupa badge kecil.

Pada Detail Paket, label dapat menggunakan notice yang lebih jelas.

### 9.3 Performa

Aset Drive berukuran besar.

Karena pengguna memilih untuk tetap menyimpan aset hanya di Drive:

- gunakan lazy loading pada kartu;
- jangan preload seluruh gambar;
- jangan merender gambar Open Trip ketika tidak tersedia;
- jangan menggunakan gambar sebagai CSS background;
- jangan menambahkan fetch manual atau base64;
- jangan menyimpan hasil response ke localStorage;
- jangan menambahkan library image optimization;
- jangan mengunduh atau mengonversi gambar.

Laporkan bahwa performa akhir link Drive perlu diperiksa manual oleh pengguna.

---

## 10. TARGET STRUKTUR DAFTAR PAKET

Halaman Daftar Paket mempunyai delapan fungsi section.

Section pengalaman khusus bersifat conditional dan tidak dirender pada status PK-09 saat ini.

### 10.1 Section 1 — Hero Daftar Paket

Pertahankan fondasi Hero saat ini:

- satu H1;
- label Paket WNB;
- deskripsi;
- catatan harga;
- layout terpusat.

Perbaiki copy agar tidak menyatakan seluruh Paket selalu tersedia.

Arah copy:

**H1 dapat dipertahankan:**

`Pilihan Petualangan Sesuai Karakter & Ritme Perjalanan`

Arah paragraf:

`Kenali pilihan pengalaman WNB berdasarkan peserta, durasi, tujuan perjalanan, dan suasana yang ingin dibangun. Setiap permintaan tetap diperiksa berdasarkan kondisi dan ketersediaan.`

Catatan:

`Harga dan ketersediaan dikonfirmasi berdasarkan jumlah peserta, kebutuhan tambahan, kondisi perjalanan, serta ketersediaan unit.`

Jangan menambah CTA pada Hero jika menyebabkan terlalu banyak navigasi.

---

### 10.2 Section 2 — Panduan Memilih Pengalaman

Tambahkan section ringkas sebelum filter.

Gunakan empat pertimbangan:

1. **Siapa Pesertanya**
   - keluarga;
   - pasangan;
   - teman;
   - komunitas;
   - perusahaan.

2. **Berapa Lama Perjalanannya**
   - singkat;
   - sehari;
   - menginap.

3. **Apa Tujuannya**
   - petualangan;
   - kebersamaan;
   - perayaan;
   - kegiatan kelompok.

4. **Bagaimana Formatnya**
   - privat;
   - rombongan;
   - jadwal gabungan ketika tersedia.

Jangan membuat form atau quiz.

Jangan mengubah filter menjadi sistem rekomendasi otomatis.

---

### 10.3 Section 3 — Filter Kategori

Pertahankan `PackageFilter`.

Kategori awal dipertahankan:

- Semua;
- Keluarga;
- Perayaan;
- Perusahaan;
- Camping;
- Open Trip.

Namun:

- Open Trip dapat tetap menjadi filter;
- ketika tidak ada Paket yang tersedia pada filter Open Trip, tampilkan empty state yang menjelaskan jadwal belum tersedia;
- jangan menghapus filter hanya karena data sementara kosong;
- pastikan filter keyboard accessible;
- pastikan active state dapat dibaca selain melalui warna.

---

### 10.4 Section 4 — Daftar Kartu Paket

Gunakan Paket yang memenuhi:

```text
publicationStatus != unpublished
```

dan:

```text
availabilityStatus == available-by-confirmation
```

PK-01 sampai PK-07 tampil.

PK-08 tidak tampil pada grid selectable saat ini.

PK-09 tidak tampil.

### Struktur kartu final

Kartu menampilkan:

1. gambar;
2. label ilustrasi;
3. kategori;
4. varian;
5. nama Paket;
6. deskripsi singkat;
7. target peserta;
8. durasi;
9. harga dan satuan;
10. CTA `Lihat Detail`.

Kartu tidak menampilkan:

- tiga fasilitas utama;
- ketentuan panjang;
- Rute spesifik;
- kode Paket;
- kode aktivitas;
- catatan internal;
- seluruh audience array tanpa pembatasan.

### Target peserta pada kartu

Gunakan ringkasan yang mudah dibaca.

Diperbolehkan:

- mengambil dua atau tiga audience pertama;
- menggunakan string ringkas yang disediakan pada data;
- menampilkan `Cocok untuk: ...`.

Jangan membuat target baru.

### Gambar kartu

- rasio konsisten, disarankan `4:3`;
- object-fit cover;
- gunakan focal point center kecuali ada alasan pada aset tertentu;
- gunakan remote Drive sebagai source utama;
- fallback existing;
- label ilustrasi;
- alt text dari data.

### Empty state

Untuk filter yang tidak mempunyai Paket tersedia:

- jangan menampilkan halaman kosong;
- jelaskan bahwa Paket atau jadwal pada kategori tersebut belum tersedia;
- CTA dapat menuju `/booking` untuk menyampaikan kebutuhan umum;
- jangan menyatakan pengguna telah melakukan booking.

---

### 10.5 Section 5 — Pengalaman Khusus atau Nonreguler

Struktur conditional boleh dipertahankan.

Kondisi saat ini:

```text
PK-09 publicationStatus = unpublished
```

Maka:

- `SpecialExperienceSection` tidak dirender;
- jangan menghapus data konseptual bila diperlukan pada masa depan;
- jangan menampilkan placeholder Trail Exploration;
- jangan menampilkan harga;
- jangan menampilkan CTA konsultasi.

Implementasi harus mudah diaktifkan pada masa depan dengan perubahan status, tetapi jangan membuat fitur berlebihan.

---

### 10.6 Section 6 — Cara Merencanakan Perjalanan

Pertahankan `PackageProcessSection`, tetapi perbaiki langkah ketiga.

Langkah final:

1. **Pilih Pengalaman**
   - kenali Paket yang mendekati kebutuhan.

2. **Sampaikan Kebutuhan**
   - jumlah peserta;
   - rencana tanggal;
   - karakter kelompok;
   - kebutuhan tambahan.

3. **WNB Memeriksa dan Mengonfirmasi**
   - ketersediaan unit;
   - kondisi perjalanan;
   - kecocokan pengalaman;
   - rincian permintaan.

Ganti judul lama:

`Penyesuaian & Keberangkatan`

karena memberi kesan perjalanan otomatis berlangsung.

Gunakan:

`WNB Memeriksa dan Mengonfirmasi`

Tambahkan keterangan:

`Pengiriman permintaan belum menjadi konfirmasi pemesanan.`

CTA:

`Rencanakan Perjalanan` → `/booking`

Jangan mengubah halaman Booking.

---

### 10.7 Section 7 — Catatan Harga dan Ketersediaan

Tambahkan section atau blok terpisah.

Isi minimum:

- harga ditampilkan bersama satuannya;
- harga dapat menyesuaikan kebutuhan;
- ketersediaan dikonfirmasi WNB;
- Open Trip bergantung pada jadwal dan kuota;
- cuaca, kondisi jalur, dan kesiapan unit dapat memengaruhi rencana;
- permintaan belum menjadi konfirmasi.

Gunakan bahasa ringkas.

Jangan mengulang seluruh ketentuan pemesanan.

---

### 10.8 Section 8 — CTA Penutup

Tambahkan CTA penutup setelah catatan harga.

CTA:

1. `Rencanakan Perjalanan` → `/booking`
2. `Jelajahi Rute` → `/rute`

Copy:

`Belum menemukan pilihan yang tepat? Sampaikan kebutuhan perjalanan Anda dan WNB akan membantu menyesuaikan pengalaman berdasarkan kondisi serta ketersediaan.`

Jangan menyatakan halaman Rute sudah mempunyai data final.

---

## 11. TARGET STRUKTUR DETAIL PAKET

Detail Paket tetap menggunakan route dinamis.

### 11.1 Breadcrumb

Ubah dari hanya tautan kembali menjadi breadcrumb aksesibel:

```text
Beranda → Paket → Nama Paket
```

Aturan:

- Beranda dapat ditautkan ke `/`;
- Paket ditautkan ke `/paket`;
- Nama Paket menjadi teks saat ini;
- gunakan `nav aria-label="Breadcrumb"`;
- tetap boleh menyediakan ikon kembali;
- jangan membuat dua navigasi berulang yang tidak perlu.

---

### 11.2 Hero dan identitas Paket

Hero memuat:

- gambar utama;
- label ilustrasi;
- kategori;
- varian;
- H1 nama Paket;
- long description atau ringkasan pengalaman.

Gunakan link Drive sebagai source utama.

Gunakan fallback.

Alt text berasal dari data.

Jangan menggunakan template:

```ts
`Suasana ilustrasi ${pkg.name}`
```

jika alt text spesifik sudah tersedia.

---

### 11.3 Status ketersediaan

Tambahkan perilaku berdasarkan `availabilityStatus`.

PK-01 sampai PK-07:

- tampilkan keterangan `Ketersediaan dikonfirmasi WNB`;
- CTA Booking aktif.

PK-08:

- tampilkan badge atau notice `Jadwal belum tersedia`;
- CTA Booking tidak aktif atau tidak dirender;
- tampilkan CTA `Kembali ke Daftar Paket`;
- jangan menyatakan keberangkatan berkala tanpa jadwal aktual;
- data informasi Paket masih boleh dibaca.

Paket unpublished:

- jangan dapat ditemukan melalui lookup publik;
- jika slug tidak valid atau unpublished, gunakan kondisi Paket tidak ditemukan.

---

### 11.4 Ringkasan perjalanan

Pertahankan facts grid:

- durasi;
- kapasitas pelanggan;
- kendaraan;
- titik temu.

Perbaiki label:

- jangan menyebut `Konfigurasi Armada` jika isinya hanya jenis kendaraan;
- gunakan label yang lebih mudah dipahami seperti `Kendaraan`;
- kapasitas harus menjelaskan pelanggan, bukan driver/helper;
- titik temu tetap dijelaskan fleksibel;
- jangan menampilkan kode Rute.

---

### 11.5 Gambaran pengalaman dan target peserta

Pertahankan:

- long description;
- audience chips.

Pastikan:

- copy tidak menjamin seluruh Rute cocok;
- children suitability tidak dibuat sebagai aturan final;
- target peserta berasal dari data;
- audience tidak membuat klaim keselamatan.

Tambahkan catatan umum bila perlu:

`Kesesuaian akhir mengikuti karakter peserta, kondisi perjalanan, dan pemeriksaan WNB.`

---

### 11.6 Fasilitas termasuk dan tidak termasuk

Pertahankan section fasilitas termasuk.

Tambahkan dukungan tipe:

```ts
exclusions?: string[];
```

atau nama setara.

Aturan:

- hanya render fasilitas tidak termasuk jika array mempunyai data terverifikasi;
- saat ini jangan membuat exclusions berdasarkan asumsi;
- jangan menampilkan section kosong;
- jangan menyalin catatan internal;
- gambar AI tidak boleh menjadi sumber fasilitas.

---

### 11.7 Rute, area, dan titik temu

Tambahkan dukungan relasi opsional:

```ts
routeSlugs?: string[];
```

atau:

```ts
relatedRouteIds?: string[];
```

Saat ini:

- belum ada pasangan Paket–Rute yang dinyatakan siap publik;
- seluruh array relasi publik harus kosong;
- jangan render section Rute;
- jangan membuat slug Rute;
- jangan mengambil Rute berdasarkan kategori;
- titik temu umum tetap berada di facts grid.

Implementasi harus dapat menerima relasi pada plan Rute masa depan, tetapi jangan membangun halaman Rute dalam Plan 009B.

---

### 11.8 Pilihan aktivitas tambahan

Pertahankan `optionalActivities` dengan perilaku conditional.

- jangan render jika array kosong;
- judul:
  `Pilihan Aktivitas Tambahan`
- tambahkan label:
  `Tidak otomatis termasuk dalam harga Paket`
- jangan menampilkan harga aktivitas jika belum disetujui;
- jangan menyatakan aktivitas selalu tersedia;
- gunakan bahasa `dapat didiskusikan`.

---

### 11.9 Harga dan ketentuan

Gunakan model harga baru.

Harga:

- tidak selalu memakai `Mulai dari`;
- nilai dan satuan dibaca sebagai satu informasi;
- jika hidden, blok harga tidak dirender;
- jika Paket tidak tersedia, CTA tidak aktif;
- note harga tetap ringkas.

Ketentuan:

- pertahankan `specialTerms`;
- pertahankan `publicNotes`;
- sembunyikan bagian jika array kosong;
- jangan menampilkan catatan internal.

---

### 11.10 Paket terkait

Hentikan algoritma berikut:

- kategori sama;
- kategori lain;
- ambil tiga pertama.

Tambahkan relasi eksplisit opsional:

```ts
relatedPackageSlugs?: string[];
```

Saat ini:

- belum ada aturan Paket terkait yang disetujui;
- semua `relatedPackageSlugs` kosong;
- `RelatedPackagesSection` tidak dirender;
- helper boleh dipertahankan tetapi harus hanya membaca slug eksplisit;
- jangan membuat relasi asumsi;
- jangan merekomendasikan Paket unpublished atau unavailable.

---

### 11.11 CTA Booking dengan slug

Tambahkan helper route.

Nama yang disarankan:

```ts
buildPackageBookingPath(slug: string)
```

Hasil:

```text
/booking?package=corporate-adventure
```

Gunakan:

```ts
encodeURIComponent(slug)
```

CTA Detail Paket:

```text
Rencanakan Paket Ini
```

menuju:

```text
/booking?package=slug-paket
```

Aturan:

- hanya slug Paket;
- jangan masukkan nama;
- jangan masukkan nomor WhatsApp;
- jangan masukkan tanggal;
- jangan masukkan jumlah peserta;
- jangan masukkan lokasi;
- jangan masukkan data pribadi;
- jangan mengubah BookingPage;
- query tetap boleh diteruskan walaupun Booking masih placeholder.

CTA hanya aktif untuk Paket yang tersedia berdasarkan konfirmasi.

PK-08 tidak mempunyai CTA aktif saat jadwal belum tersedia.

---

## 12. KEPUTUSAN COPY DAN FAKTA

### 12.1 Fakta yang boleh dipertahankan

- nama Paket PK-01 sampai PK-09;
- slug PK-01 sampai PK-08;
- kategori;
- audience;
- durasi;
- kapasitas;
- kendaraan;
- harga;
- satuan;
- fasilitas;
- aktivitas tambahan;
- titik temu fleksibel;
- ketentuan;
- public notes;
- Land Rover klasik;
- pengalaman dapat disesuaikan;
- WNB memeriksa kondisi dan ketersediaan.

### 12.2 Fakta yang tidak boleh dibuat

- jadwal Open Trip;
- kuota Open Trip aktif;
- tanggal keberangkatan;
- Rute Paket yang telah final;
- foto asli;
- jumlah pelanggan;
- promo;
- diskon;
- harga baru;
- fasilitas dari gambar;
- seluruh anak dapat mengikuti;
- seluruh Paket selalu tersedia;
- keselamatan mutlak;
- keberangkatan otomatis;
- Paket terkait berdasarkan asumsi;
- status legal;
- nomor kontak baru.

### 12.3 Istilah

Gunakan:

- `Paket`;
- `Detail Paket`;
- `Rencanakan Perjalanan`;
- `permintaan`;
- `ketersediaan dikonfirmasi`;
- `Ilustrasi visual`;
- `Land Rover klasik`.

Hindari:

- sewa mobil;
- booking otomatis;
- pasti berangkat;
- selalu tersedia;
- harga termurah;
- promo terbatas;
- dokumentasi asli untuk gambar AI.

---

## 13. ARAH IMPLEMENTASI FILE

Gemini harus memeriksa path aktual sebelum mengubah.

Kemungkinan file utama:

### Halaman

- `client/src/pages/PackageListPage/PackageListPage.tsx`
- `client/src/pages/PackageDetailPage/PackageDetailPage.tsx`

### Data dan tipe

- `client/src/features/packages/packagesTypes.ts`
- `client/src/features/packages/packagesData.ts`

### Komponen Paket

- `client/src/features/packages/components/PackageCard.tsx`
- `client/src/features/packages/components/PackageFilter.tsx`
- `client/src/features/packages/components/PackageProcessSection.tsx`
- `client/src/features/packages/components/SpecialExperienceSection.tsx`
- `client/src/features/packages/components/RelatedPackagesSection.tsx`

### Komponen baru yang diperbolehkan

- `client/src/features/packages/components/PackageImage.tsx`
- `client/src/features/packages/components/PackageGuideSection.tsx`
- `client/src/features/packages/components/PackageAvailabilityNote.tsx`
- `client/src/features/packages/components/PackageClosingCta.tsx`

Nama dapat disesuaikan.

Jangan membuat komponen baru jika fungsi dapat ditambahkan dengan bersih pada komponen existing.

### Routing

- `client/src/routes/routePaths.ts`

### Dokumentasi

- `docs/plans/PLAN-009B-PENYELARASAN-HALAMAN-DAFTAR-DAN-DETAIL-PAKET-WNB.md`

### Aturan file

- ubah hanya file yang diperlukan;
- jangan format ulang massal;
- jangan memindahkan folder;
- jangan mengubah alias import;
- jangan menambah dependency;
- jangan mengubah lockfile;
- jangan menghapus aset existing;
- jangan menghapus komponen lama sebelum mencari seluruh referensinya;
- jangan mengubah Home/About;
- jangan mengubah halaman Rute.

---

## 14. URUTAN IMPLEMENTASI

1. Periksa working tree.
2. Baca konteks repository.
3. Salin Plan 009B ke `docs/plans/`.
4. Audit seluruh file Paket.
5. Perluas tipe data Paket:
   - ID;
   - publication status;
   - availability status;
   - price model;
   - image source;
   - fallback;
   - alt;
   - related package slugs;
   - route relation opsional;
   - exclusions opsional.
6. Perbarui data PK-01 sampai PK-08.
7. Pertahankan data konseptual PK-09 sebagai unpublished.
8. Perbarui helper harga.
9. Perbarui helper filter Paket visible.
10. Hentikan related package berdasarkan kategori.
11. Tambahkan helper Booking query.
12. Buat/ubah komponen gambar Paket.
13. Perbarui `PackageCard`.
14. Tambahkan Panduan Memilih.
15. Pertahankan dan selaraskan filter.
16. Perbaiki proses perencanaan.
17. Sembunyikan Special Experience.
18. Tambahkan Catatan Harga/Ketersediaan.
19. Tambahkan CTA penutup.
20. Perbarui Detail Paket:
    - breadcrumb;
    - image;
    - status;
    - facts;
    - activities;
    - price;
    - CTA;
    - related;
    - route section conditional.
21. Pastikan PK-08 direct URL tidak mempunyai CTA aktif.
22. Pastikan PK-09 tidak dapat tampil publik.
23. Cari unused imports.
24. Cari referensi helper lama.
25. Periksa `git diff`.
26. Jangan menjalankan testing otomatis.
27. Laporkan hasil.
28. Berhenti tanpa commit dan push.

---

## 15. KRITERIA PENERIMAAN DAFTAR PAKET

- [ ] Halaman `/paket` tetap dapat dibuka.
- [ ] Terdapat tepat satu H1.
- [ ] Hero tidak menjanjikan seluruh Paket tersedia.
- [ ] Terdapat Panduan Memilih Pengalaman.
- [ ] Filter kategori dipertahankan.
- [ ] Filter dapat digunakan dengan keyboard.
- [ ] PK-01 sampai PK-07 tampil pada grid.
- [ ] PK-08 tidak tampil sebagai Paket selectable saat jadwal belum tersedia.
- [ ] PK-09 tidak tampil.
- [ ] Setiap kartu menampilkan gambar.
- [ ] Sumber utama gambar adalah link media Drive.
- [ ] Setiap gambar mempunyai fallback existing.
- [ ] Setiap gambar mempunyai alt text spesifik.
- [ ] Setiap gambar diberi label ilustrasi.
- [ ] Kartu tidak menampilkan tiga fasilitas utama.
- [ ] Kartu menampilkan target peserta.
- [ ] Kartu menampilkan durasi.
- [ ] Kartu menampilkan harga dan satuan.
- [ ] Tidak ada `Mulai dari` otomatis.
- [ ] CTA `Lihat Detail` bekerja.
- [ ] Tidak ada kartu yang bergantung pada data Rute.
- [ ] Process section memakai `WNB Memeriksa dan Mengonfirmasi`.
- [ ] Ada disclaimer bahwa permintaan belum menjadi konfirmasi.
- [ ] Ada catatan harga dan ketersediaan.
- [ ] Ada CTA penutup ke Booking dan Rute.
- [ ] Empty state menjelaskan kategori belum tersedia secara proporsional.
- [ ] Tidak ada aset baru di repository.
- [ ] Tidak ada gambar yang diunduh.

---

## 16. KRITERIA PENERIMAAN DETAIL PAKET

- [ ] `/paket/:slug` tetap bekerja.
- [ ] Slug tidak valid menampilkan kondisi Paket tidak ditemukan.
- [ ] Paket unpublished diperlakukan sebagai tidak ditemukan.
- [ ] Breadcrumb menggunakan Beranda → Paket → Nama Paket.
- [ ] Terdapat tepat satu H1.
- [ ] Gambar Detail menggunakan link Drive.
- [ ] Gambar mempunyai fallback.
- [ ] Gambar mempunyai alt text spesifik.
- [ ] Gambar mempunyai status ilustrasi.
- [ ] Ringkasan perjalanan tetap tersedia.
- [ ] Label kendaraan mudah dipahami.
- [ ] Kapasitas menjelaskan pelanggan.
- [ ] Audience tetap tersedia.
- [ ] Fasilitas termasuk tetap tersedia.
- [ ] Fasilitas tidak termasuk hanya tampil jika datanya ada.
- [ ] Aktivitas tambahan diberi label tidak otomatis termasuk.
- [ ] Aktivitas tambahan tersembunyi jika kosong.
- [ ] Section Rute tidak dirender karena relasi belum terverifikasi.
- [ ] Harga tidak otomatis memakai `Mulai dari`.
- [ ] Nilai nol tidak tampil.
- [ ] Paket terkait tidak dibuat dari kategori.
- [ ] Related section tersembunyi selama relasi eksplisit kosong.
- [ ] CTA aktif menggunakan `/booking?package=slug`.
- [ ] Query hanya membawa slug.
- [ ] PK-08 menampilkan jadwal belum tersedia.
- [ ] PK-08 tidak mempunyai CTA Booking aktif.
- [ ] Detail tetap responsive.
- [ ] Sticky sidebar desktop tidak menutupi konten.
- [ ] Mobile tidak mengalami horizontal overflow.

---

## 17. KRITERIA PENERIMAAN DATA DAN TEKNIS

- [ ] Setiap Paket reguler mempunyai ID.
- [ ] Setiap Paket mempunyai publication status.
- [ ] Setiap Paket mempunyai availability status.
- [ ] Setiap Paket mempunyai model harga yang aman.
- [ ] Setiap Paket mempunyai image URL.
- [ ] Setiap Paket mempunyai fallback image.
- [ ] Setiap Paket mempunyai image alt.
- [ ] PK-09 tidak mempunyai image palsu.
- [ ] Helper harga menangani exact, starting-from, custom, dan hidden.
- [ ] Helper harga tidak menghasilkan Rp0 atau NaN.
- [ ] Helper related packages hanya membaca relasi eksplisit.
- [ ] Helper daftar menghormati status.
- [ ] Tidak ada import tidak digunakan yang jelas.
- [ ] Tidak ada referensi helper lama yang rusak.
- [ ] Tidak ada dependency baru.
- [ ] `package.json` tidak berubah.
- [ ] `package-lock.json` tidak berubah.
- [ ] Beranda tidak berubah.
- [ ] Tentang Kami tidak berubah.
- [ ] Rute tidak berubah.
- [ ] Galeri tidak berubah.
- [ ] BookingPage tidak berubah.
- [ ] Video tidak berubah.
- [ ] Plan tersalin ke `docs/plans/`.
- [ ] Tidak ada commit.
- [ ] Tidak ada push.

---

## 18. LARANGAN KHUSUS

Gemini dilarang:

- mengakses atau mengubah Google Drive;
- mengunduh gambar;
- menyimpan gambar ke repository;
- membuat WebP;
- mengompres aset;
- mengubah izin Drive;
- mengganti Drive dengan layanan hosting lain;
- memakai URL `/view` sebagai `img src`;
- mencari gambar baru di internet;
- merender gambar baru;
- mengimplementasikan video Hero;
- membuat Plan 010;
- mengimplementasikan halaman Rute;
- mengubah BookingPage;
- menambahkan database;
- menambah API;
- membuat relasi Paket–Rute asumsi;
- membuat Paket terkait asumsi;
- mengaktifkan Trail Exploration;
- membuat jadwal Open Trip;
- membuat promo;
- mengubah harga;
- mengubah dependency;
- commit;
- push;
- menyatakan hasil Verified.

---

## 19. PEMERIKSAAN MANUAL OLEH PENGGUNA

Pengguna akan memeriksa:

### Daftar Paket

- `/paket`;
- gambar setiap kartu;
- Corporate menggunakan v2;
- label ilustrasi;
- fallback jika Drive gagal;
- kartu PK-01 sampai PK-07;
- Open Trip tidak selectable;
- Trail Exploration tidak tampil;
- filter;
- Panduan Memilih;
- target peserta;
- harga;
- mobile;
- CTA.

### Detail Paket

Periksa minimal:

- `/paket/corporate-adventure`;
- `/paket/family-adventure-short-trip`;
- `/paket/family-adventure-full-experience`;
- `/paket/birthday-adventure`;
- `/paket/anniversary-adventure`;
- `/paket/surprise-adventure`;
- `/paket/adventure-camping`;
- `/paket/open-trip-adventure`;
- slug yang tidak valid.

Periksa:

- gambar;
- fallback;
- alt;
- breadcrumb;
- facts;
- fasilitas;
- aktivitas tambahan;
- harga;
- query Booking;
- kondisi Open Trip;
- tidak ada related packages asumsi;
- tidak ada section Rute asumsi.

### Link Drive

Pengguna harus memeriksa pada browser:

- gambar dapat dimuat tanpa login;
- tidak meminta izin;
- tidak membuka halaman preview;
- desktop;
- mobile;
- loading;
- fallback.

Jika link Drive gagal, jangan commit sebelum menentukan langkah berikutnya.

---

## 20. FORMAT LAPORAN AKHIR GEMINI

### A. Status

```text
Uncommitted / Pending User Review and Manual Testing
```

### B. Ringkasan

Jelaskan:

- perubahan model data;
- perubahan Daftar Paket;
- perubahan Detail Paket;
- penggunaan link Drive;
- fallback;
- status Open Trip;
- status Trail Exploration;
- related packages;
- CTA Booking;
- bagian yang sengaja ditunda.

### C. Daftar file

Pisahkan:

- dibuat;
- diubah;
- dihapus.

### D. Penjelasan file

Jelaskan fungsi perubahan setiap file.

### E. Scope check

Konfirmasi:

- Home tidak berubah;
- About tidak berubah;
- Rute tidak berubah;
- Galeri tidak berubah;
- BookingPage tidak berubah;
- dependency tidak berubah;
- lockfile tidak berubah;
- tidak ada aset baru;
- tidak ada gambar diunduh;
- video tidak berubah.

### F. Git

Tampilkan:

```bash
git status --short
git diff --stat
```

Sertakan ringkasan diff.

### G. Testing

Nyatakan:

```text
Tidak menjalankan browser testing, build, typecheck, lint, atau test otomatis sesuai instruksi Plan 009B.
```

### H. Risiko yang perlu diuji pengguna

Laporkan:

- apakah link media Drive mungkin membutuhkan izin;
- apakah fallback aktif;
- potensi ukuran file besar;
- kondisi Open Trip;
- query Booking;
- responsive.

### I. Commit yang disarankan

Tampilkan, tetapi jangan jalankan:

```text
feat(packages): align package pages with planning and Drive assets
```

Perintah saran:

```bash
git status --short
git add <file-yang-sudah-ditinjau-pengguna>
git commit -m "feat(packages): align package pages with planning and Drive assets"
git push origin main
```

---

## 21. RINGKASAN KEPUTUSAN FINAL

### Daftar Paket

- fondasi GitHub dipertahankan;
- tambah Panduan Memilih;
- filter dipertahankan;
- gambar kartu memakai link Drive;
- fallback memakai aset lokal existing;
- kartu menampilkan target peserta;
- tiga fasilitas dihapus dari kartu;
- harga tidak otomatis `Mulai dari`;
- PK-01 sampai PK-07 tampil;
- PK-08 menunggu jadwal;
- PK-09 tidak tampil;
- proses perencanaan diperjelas;
- tambah catatan harga;
- tambah CTA penutup.

### Detail Paket

- breadcrumb diperbaiki;
- gambar memakai link Drive;
- fallback tersedia;
- status ilustrasi jelas;
- model harga diperluas;
- exclusions conditional;
- relasi Rute kosong dan disembunyikan;
- aktivitas tambahan diberi label;
- related packages tidak dibuat berdasarkan kategori;
- CTA membawa slug;
- Open Trip tidak mempunyai CTA aktif saat belum ada jadwal.

### Aset

- tidak diunduh;
- tidak disalin;
- tidak dikonversi;
- tetap di Google Drive;
- link media menjadi source utama;
- aset local existing hanya fallback;
- seluruh gambar AI disebut ilustrasi;
- video di luar scope.

### Workflow

- Gemini mengubah working tree;
- Gemini tidak commit;
- Gemini tidak push;
- pengguna menguji manual;
- pengguna commit dan push;
- SHA dikirim kepada ChatGPT untuk review read-only.

---

# END OF PLAN 009B
