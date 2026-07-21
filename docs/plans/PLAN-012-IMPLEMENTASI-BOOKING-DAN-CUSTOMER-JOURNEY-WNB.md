# PLAN 012 — IMPLEMENTASI BOOKING DAN PENYELESAIAN CUSTOMER JOURNEY WNB

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Target aplikasi:** `client`  
**Versi plan:** 1.0  
**Status:** Siap Dieksekusi  
**Kondisi repository saat plan disusun:** Plan 011 telah diverifikasi pada commit `2255e0622ce99427862befdf3114b8a228b08aa3`

---

## 1. IDENTITAS DAN PERAN EXECUTOR

Kamu adalah executor teknis yang bekerja langsung pada repository lokal WNB melalui Antigravity.

Tugasmu adalah membaca kondisi kode terbaru, menyusun implementation plan singkat, lalu mengimplementasikan halaman publik **Rencanakan Perjalanan / Booking** dan menyelesaikan customer journey frontend WNB berdasarkan seluruh instruksi dalam Plan 012 ini.

Jangan meminta akses Google Drive. Seluruh keputusan, data yang boleh digunakan, batas publikasi, aturan formulir, fallback nomor WhatsApp, dan kriteria penerimaan sudah disediakan dalam plan ini.

Plan ini hanya mengatur perubahan kode di repository. Jangan mengubah Google Drive.

Sebelum mengubah kode:

1. baca seluruh Plan 012;
2. periksa repository terbaru;
3. pastikan commit dasar memuat hasil Verified Plan 011;
4. petakan file yang perlu diubah;
5. pertahankan hasil Plan 009A, Plan 009B, Plan 010, dan Plan 011;
6. jangan commit atau push sebelum laporan implementasi ditinjau.

---

## 2. TUJUAN PLAN 012

Plan 012 bertujuan untuk:

1. mengganti placeholder halaman `/booking` dengan halaman publik yang lengkap;
2. menggunakan nama publik **Rencanakan Perjalanan**;
3. menegaskan bahwa formulir merupakan permintaan awal, bukan booking terkonfirmasi;
4. menerima konteks Paket melalui query `?package=slug`;
5. menerima konteks Rute melalui query `?route=slug`;
6. tetap mendukung formulir umum tanpa query;
7. menyediakan data pemesan minimum yang proporsional;
8. menyediakan pilihan Paket publik yang layak diajukan;
9. menyediakan preferensi Rute publik tanpa menganggapnya sebagai keputusan final;
10. menyediakan tanggal atau pilihan belum ditentukan;
11. menyediakan jumlah peserta, jenis kelompok, titik temu umum, dan kebutuhan tambahan;
12. menyediakan validasi yang jelas dan aksesibel;
13. menyediakan ringkasan permintaan sebelum tindakan akhir;
14. membentuk pesan WhatsApp secara konsisten;
15. membuka WhatsApp Click-to-Chat hanya apabila nomor resmi telah dikonfigurasi;
16. menyediakan fallback **Salin Ringkasan** ketika nomor resmi belum tersedia atau WhatsApp gagal dibuka;
17. tidak menyimpan data pelanggan ke server, database, Google Sheet, localStorage, atau sessionStorage;
18. menyelesaikan integrasi CTA dari Detail Paket dan Detail Rute;
19. memastikan tidak ada customer journey publik yang berhenti pada placeholder;
20. memastikan halaman lulus typecheck dan production build.

---

## 3. POSISI PLAN 012 DALAM FASE PENGERJAAN

Plan 012 merupakan implementasi halaman publik terakhir dalam:

```text
Fase 1 — Website Publik WNB
```

Plan ini dilaksanakan setelah:

```text
Plan 001–010
Fondasi, identitas, Beranda, Tentang Kami,
Paket, Detail Paket, Rute, dan Detail Rute

Plan 011
Galeri WNB
```

Setelah Plan 012 selesai dan diverifikasi, jangan langsung membuat backend.

Tahap berikutnya adalah:

```text
Audit Akhir Frontend Publik WNB
```

Audit tersebut akan memeriksa seluruh halaman, navigasi, CTA, responsive layout, accessibility, fallback media, redirect, error state, dan customer journey dari Beranda sampai tindakan pemesanan awal.

---

## 4. KEPUTUSAN PRODUK YANG WAJIB DIPERTAHANKAN

### 4.1 Nama dan URL

Nama publik halaman:

```text
Rencanakan Perjalanan
```

Nama teknis:

```text
Booking
```

URL canonical:

```text
/booking
```

Jangan membuat route lain seperti:

```text
/booking/success
/booking/confirmation
/checkout
/payment
```

### 4.2 Status permintaan

Formulir ini hanya membuat **permintaan rencana perjalanan**.

Formulir tidak boleh menyatakan bahwa:

- booking telah dikonfirmasi;
- jadwal telah tersedia;
- kendaraan telah dipesan;
- Rute telah disetujui;
- harga akhir telah disepakati;
- pembayaran telah diterima;
- pesan WhatsApp pasti telah terkirim.

Gunakan istilah:

```text
Permintaan perjalanan
Rencana perjalanan
Menunggu pemeriksaan WNB
Lanjutkan ke WhatsApp
```

Jangan gunakan istilah:

```text
Booking berhasil
Konfirmasi booking
Jadwal terpesan
Bayar sekarang
Pesanan selesai
```

### 4.3 Pemrosesan data

Pada Plan 012:

- data hanya berada dalam state React selama halaman dibuka;
- data digunakan untuk validasi, ringkasan, dan pembentukan pesan;
- data tidak dikirim ke backend;
- data tidak disimpan ke database;
- data tidak disimpan ke Google Sheet;
- data tidak disimpan ke localStorage;
- data tidak disimpan ke sessionStorage;
- data tidak dikirim ke analytics;
- data tidak membentuk akun atau riwayat booking.

### 4.4 Kanal WhatsApp

Nomor WhatsApp resmi WNB belum ditetapkan pada saat Plan 012 disusun.

Karena itu:

1. jangan menggunakan nomor lama dari Facebook;
2. jangan menulis nomor tujuan secara hard-coded;
3. jangan mengarang nomor sementara;
4. gunakan konfigurasi environment terpusat;
5. nilai default harus kosong;
6. jika nomor kosong atau tidak valid, halaman tetap berfungsi melalui **Salin Ringkasan**;
7. tombol WhatsApp hanya aktif jika nomor resmi valid tersedia.

---

## 5. KONDISI REPOSITORY YANG SUDAH DIKETAHUI

### 5.1 Halaman Booking

File berikut sudah tersedia:

```text
client/src/pages/BookingPage/BookingPage.tsx
```

Kondisinya masih menggunakan `PagePlaceholder`.

Plan 012 harus mengganti placeholder tersebut sepenuhnya.

### 5.2 URL Booking

`ROUTE_PATHS.booking` sudah tersedia:

```ts
booking: "/booking"
```

Jangan mengubah URL tersebut.

### 5.3 Detail Paket

Detail Paket sudah memiliki CTA yang menghasilkan:

```text
/booking?package=slug-paket
```

Helper saat ini:

```ts
buildPackageBookingPath(slug)
```

Plan 012 harus mempertahankan kompatibilitas helper tersebut.

Halaman Booking harus membaca dan memvalidasi query `package`.

### 5.4 Detail Rute

Detail Rute saat ini memiliki CTA **Rencanakan Rute Ini**, tetapi masih menuju `/booking` tanpa konteks Rute.

Plan 012 harus mengubah CTA Detail Rute agar menghasilkan:

```text
/booking?route=slug-rute
```

### 5.5 Data Paket

Sumber data Paket tersedia di:

```text
client/src/features/packages/packagesData.ts
```

Jangan menggandakan nama, slug, kategori, durasi, kapasitas, harga, atau status Paket ke sumber Booking.

### 5.6 Data Rute

Sumber data Rute tersedia di:

```text
client/src/features/routes/routesData.ts
```

Gunakan helper publik yang sudah tersedia, terutama:

```ts
getAllRoutes()
getRouteBySlug(slug)
```

Jangan menggandakan data Rute.

### 5.7 Main layout

`MainLayout` sudah menyediakan elemen:

```tsx
<main id="main-content">
  <Outlet />
</main>
```

Karena itu, `BookingPage` dilarang membuat `<main>` baru dan dilarang menambahkan `id="main-content"` baru.

Gunakan wrapper `<div>`, fragment, dan `<section>`.

---

## 6. SUMBER KEBENARAN PLAN 012

Gunakan urutan prioritas berikut:

1. instruksi eksplisit dalam Plan 012 ini;
2. kondisi repository terbaru;
3. pola komponen, design token, dan accessibility yang sudah digunakan halaman Paket, Rute, dan Galeri;
4. data Paket dari `packagesData.ts`;
5. data Rute dari `routesData.ts`;
6. konfigurasi dan pilihan tetap yang didefinisikan dalam Plan 012.

Jangan menggunakan ketentuan pemesanan lama sebagai kebijakan publik.

Jangan menampilkan:

- DP 50%;
- aturan refund;
- batas H-7 atau H-14 sebagai aturan final umum;
- rekening pembayaran;
- jam layanan yang belum ditetapkan;
- nomor WhatsApp lama;
- kebijakan pembatalan yang masih berstatus Draf.

---

## 7. BATAS SCOPE

### 7.1 Wajib dikerjakan

- mengganti placeholder `BookingPage`;
- membuat controlled form React;
- membuat type data Booking;
- membuat sumber pilihan tetap Booking;
- mengambil pilihan Paket dari data Paket publik;
- mengambil pilihan Rute dari data Rute publik;
- membaca query Paket;
- membaca query Rute;
- menangani query valid dan tidak valid;
- menampilkan konteks Paket/Rute terpilih;
- membuat validasi;
- membuat error dekat field;
- memindahkan fokus ke error pertama;
- membuat ringkasan permintaan;
- membuat persetujuan penggunaan data;
- membentuk pesan WhatsApp;
- membuat konfigurasi nomor WhatsApp resmi;
- membuat fallback salin ringkasan;
- menangani popup/tab yang diblokir;
- menampilkan status berhasil terbatas dan error;
- memperbarui CTA Detail Rute agar membawa query Rute;
- mempertahankan CTA Detail Paket yang membawa query Paket;
- memeriksa CTA generik Booking pada Beranda, Paket, Rute, Galeri, Navbar, dan Footer;
- memastikan seluruh CTA generik tetap menuju `ROUTE_PATHS.booking`;
- membuat tampilan responsive;
- menerapkan accessibility dasar;
- menjalankan typecheck dan production build.

### 7.2 Boleh dikerjakan jika langsung diperlukan

- menambahkan generic helper pembentuk path Booking;
- membuat helper clipboard;
- membuat helper normalisasi nomor;
- menambahkan deklarasi type untuk environment Vite;
- menambahkan `client/.env.example` jika belum tersedia;
- menambahkan komponen kecil untuk section, field error, summary, atau status;
- merapikan import terkait langsung dengan Plan 012;
- memperbaiki hard-coded `/booking` yang ditemukan dalam scope customer journey.

### 7.3 Dilarang dikerjakan

- jangan membuat backend;
- jangan membuat API;
- jangan membuat database;
- jangan membuat akun pelanggan;
- jangan membuat dashboard pelanggan;
- jangan membuat dashboard admin;
- jangan membuat pembayaran;
- jangan membuat upload bukti transfer;
- jangan membuat invoice;
- jangan membuat email otomatis;
- jangan mengirim data ke Google Sheet;
- jangan membuat wizard multi-halaman;
- jangan membuat route konfirmasi baru;
- jangan menggunakan dependency form baru;
- jangan menggunakan dependency validasi baru;
- jangan menggunakan dependency date baru;
- jangan menggunakan dependency modal baru;
- jangan mengubah harga Paket;
- jangan mengubah fasilitas Paket;
- jangan mengubah data Rute;
- jangan membuat hubungan Paket–Rute sebagai fakta baru;
- jangan menampilkan data internal;
- jangan menggunakan nomor WhatsApp lama;
- jangan mempublikasikan Ketentuan Pemesanan yang masih Draf;
- jangan menyimpan data browser secara persisten;
- jangan melakukan commit;
- jangan melakukan push;
- jangan membuka pull request.

---

## 8. PRINSIP INFORMASI PUBLIK

Halaman harus selalu menjelaskan bahwa:

1. pengguna menyampaikan kebutuhan awal;
2. WNB akan memeriksa Paket, jadwal, kendaraan, Rute, kru, cuaca, dan kebutuhan tambahan;
3. pilihan Paket dan Rute dalam formulir merupakan preferensi awal;
4. harga akhir dapat berubah sesuai kebutuhan dan hasil pemeriksaan;
5. permintaan belum menjadi booking terkonfirmasi;
6. pengguna masih harus menekan tombol Kirim di WhatsApp;
7. formulir tidak melakukan pembayaran;
8. formulir tidak menyimpan data ke server;
9. informasi titik temu bersifat area umum;
10. informasi keselamatan diminta secara umum, bukan diagnosis medis.

---

## 9. CUSTOMER JOURNEY TARGET

Setelah Plan 012, alur berikut harus berfungsi:

```text
Beranda
→ Paket atau Rute
→ Detail Paket atau Detail Rute
→ Rencanakan Perjalanan
→ Isi Form
→ Periksa Ringkasan
→ Setujui Penggunaan Data
→ WhatsApp atau Salin Ringkasan
→ Menunggu pemeriksaan WNB
```

Alur alternatif juga harus berfungsi:

```text
Galeri
→ Detail Paket
→ Rencanakan Paket Ini
→ Form dengan Paket terpilih
```

```text
Detail Rute
→ Rencanakan Rute Ini
→ Form dengan Rute terpilih
```

```text
CTA generik
→ /booking
→ Form umum tanpa Paket/Rute terpilih
```

---

## 10. DATA PAKET UNTUK BOOKING

### 10.1 Aturan kelayakan

Pilihan Paket reguler hanya menampilkan Paket yang:

```ts
publicationStatus !== "unpublished"
```

serta:

```ts
availabilityStatus === "available-by-confirmation"
```

Dengan kondisi repository saat Plan 012 disusun, pilihan reguler berasal dari PK-01 sampai PK-07.

`Open Trip Adventure` tidak ditampilkan sebagai pilihan reguler aktif selama statusnya masih membutuhkan jadwal dan kuota.

### 10.2 Pilihan tambahan

Tambahkan dua pilihan non-Paket:

```text
Belum tahu — minta rekomendasi
Kebutuhan perjalanan khusus
```

Nilai teknis yang disarankan:

```ts
"recommendation"
"custom"
```

### 10.3 Query Paket

Gunakan query:

```text
?package=slug
```

Aturan:

- slug valid dan booking-eligible → otomatis dipilih;
- slug tidak ditemukan → tampilkan inline notice, formulir tetap dapat digunakan;
- slug ditemukan tetapi belum booking-eligible → tampilkan notice “Paket Belum Tersedia”, jangan otomatis dipilih;
- query kosong → gunakan formulir umum;
- pengguna tetap dapat mengganti Paket setelah auto-select;
- jangan mengubah URL ketika pengguna mengganti select secara manual;
- jangan menganggap Paket menentukan Rute final.

### 10.4 Konteks Paket terpilih

Jika query valid, tampilkan ringkasan singkat:

- nama Paket;
- kategori;
- durasi;
- kapasitas;
- harga publik atau teks harga publik;
- pemberitahuan bahwa Paket dapat diganti.

Ambil semua nilai dari object Paket yang sudah ada.

Jangan membuat copy data Paket baru.

---

## 11. DATA RUTE UNTUK BOOKING

### 11.1 Sumber

Gunakan:

```ts
getAllRoutes()
```

Jangan menggandakan nama atau area Rute.

### 11.2 Pilihan Rute

Pilihan Rute bersifat opsional.

Sediakan:

```text
Belum memilih Rute
Belum tahu — minta rekomendasi
Rute khusus sesuai pembahasan
RT-01 sampai RT-10 dari data publik
```

Nilai teknis tetap yang disarankan:

```ts
""
"recommendation"
"custom"
```

Slug Rute digunakan untuk Rute publik.

### 11.3 RT-10

RT-10 tetap boleh dipilih sebagai preferensi, tetapi label atau helper harus menyebut:

```text
Rute Khusus — Perlu Konsultasi
```

Jangan menampilkannya sebagai pemesanan reguler otomatis.

### 11.4 Query Rute

Gunakan query:

```text
?route=slug
```

Aturan:

- slug valid → otomatis dipilih;
- slug tidak valid → tampilkan notice tanpa memblokir form;
- query kosong → tidak ada Rute yang dipilih;
- pengguna dapat mengganti pilihan;
- query Rute tidak otomatis menetapkan Paket;
- query Paket dan Rute dapat muncul bersamaan;
- kombinasi query tidak berarti pasangan Paket–Rute telah diverifikasi.

### 11.5 CTA Detail Rute

Tambahkan helper path terpusat dan ubah CTA Detail Rute menjadi:

```text
/booking?route=slug-rute
```

Jangan hard-code string query langsung di JSX jika helper path terpusat dapat digunakan.

---

## 12. HELPER PATH BOOKING

Rekomendasi arsitektur:

```ts
type BookingPathParams = {
  packageSlug?: string;
  routeSlug?: string;
};

export function buildBookingPath(params: BookingPathParams = {}): string {
  const searchParams = new URLSearchParams();

  if (params.packageSlug) {
    searchParams.set("package", params.packageSlug);
  }

  if (params.routeSlug) {
    searchParams.set("route", params.routeSlug);
  }

  const query = searchParams.toString();
  return query ? `${ROUTE_PATHS.booking}?${query}` : ROUTE_PATHS.booking;
}
```

Letakkan helper pada lokasi yang tidak menimbulkan circular dependency, disarankan:

```text
client/src/routes/routePaths.ts
```

Pertahankan helper lama:

```ts
buildPackageBookingPath(slug)
```

Helper lama boleh didelegasikan ke `buildBookingPath` agar tidak memutus import yang ada.

Gunakan helper yang sama untuk Detail Rute.

---

## 13. FIELD FORMULIR

Gunakan tepat field utama berikut.

### 13.1 Data Pemesan

#### Nama Pemesan

Nama teknis:

```ts
customerName
```

Tipe:

```text
text
```

Status:

```text
Wajib
```

#### Nomor WhatsApp Pemesan

Nama teknis:

```ts
customerWhatsapp
```

Tipe:

```text
tel
```

Status:

```text
Wajib
```

Nomor ini adalah nomor calon pelanggan untuk ditindaklanjuti.

Nomor ini bukan nomor tujuan `wa.me`.

#### Perusahaan / Komunitas

Nama teknis:

```ts
organizationName
```

Tipe:

```text
text
```

Status:

```text
Opsional
```

Label publik:

```text
Perusahaan, Instansi, Organisasi, atau Komunitas
```

### 13.2 Rencana Perjalanan

#### Pilihan Paket

Nama teknis:

```ts
packageChoice
```

Tipe:

```text
select
```

Status:

```text
Wajib
```

#### Tanggal Rencana

Nama teknis:

```ts
plannedDate
```

Tipe:

```text
date
```

Status:

```text
Wajib secara kondisional
```

#### Tanggal Belum Ditentukan

Nama teknis:

```ts
dateUndecided
```

Tipe:

```text
checkbox
```

Aturan:

- salah satu `plannedDate` atau `dateUndecided` harus tersedia;
- ketika dicentang, input tanggal dinonaktifkan;
- tanggal kosong tidak dianggap error jika checkbox dicentang.

#### Fleksibilitas Tanggal

Nama teknis:

```ts
dateFlexibility
```

Tipe:

```text
select
```

Status:

```text
Opsional
```

Pilihan:

```text
Belum ditentukan
Tanggal harus sesuai pilihan
Fleksibel 1–3 hari
Fleksibel dalam satu minggu
```

#### Jumlah Peserta

Nama teknis:

```ts
participantCount
```

Tipe:

```text
number
```

Status:

```text
Wajib
```

Jumlah besar tidak otomatis ditolak. Tampilkan helper bahwa jumlah unit akan diperiksa oleh WNB.

#### Jenis Kelompok

Nama teknis:

```ts
groupType
```

Tipe:

```text
select
```

Status:

```text
Wajib
```

Pilihan:

```text
Keluarga
Pasangan
Kelompok Pertemanan
Perusahaan atau Instansi
Komunitas atau Organisasi
Individu atau Open Trip
Lainnya
```

### 13.3 Preferensi Rute dan Titik Temu

#### Preferensi Rute

Nama teknis:

```ts
routeChoice
```

Tipe:

```text
select
```

Status:

```text
Opsional
```

#### Preferensi Titik Temu

Nama teknis:

```ts
meetingPoint
```

Tipe:

```text
select
```

Status:

```text
Opsional
```

Pilihan area umum:

```text
Belum ditentukan
Hotel atau lokasi menginap
Area Lembang
Area Cikole
Area Sukawana
Area Ciwidey atau Rancabali
Area Pangalengan
Area Bogor atau Sentul
Lokasi lain sesuai pembahasan
```

Berikan helper:

```text
Titik temu final ditentukan setelah Paket, Rute, dan kondisi perjalanan diperiksa.
```

Jangan menampilkan koordinat atau titik operasional internal.

### 13.4 Kebutuhan Tambahan

Nama teknis:

```ts
additionalNeeds
```

Tipe:

```text
checkbox group / multi-select sederhana
```

Status:

```text
Opsional
```

Gunakan kategori umum berikut:

```text
Aktivitas tambahan
Dokumentasi foto atau video
Konsumsi
Dekorasi atau perayaan
Camping
Kebutuhan rombongan
Penyesuaian kendaraan atau kapasitas
Kebutuhan lainnya
```

Jangan menampilkan harga aktivitas.

Jangan menjanjikan ketersediaan aktivitas.

#### Kebutuhan Kenyamanan atau Keselamatan

Nama teknis:

```ts
safetyNeeds
```

Tipe:

```text
textarea
```

Status:

```text
Opsional
```

Helper:

```text
Jelaskan kebutuhan umum yang perlu dipertimbangkan. Jangan memasukkan diagnosis atau riwayat medis rinci.
```

#### Catatan Tambahan

Nama teknis:

```ts
additionalNotes
```

Tipe:

```text
textarea
```

Status:

```text
Opsional
```

### 13.5 Persetujuan

Nama teknis:

```ts
privacyConsent
```

Tipe:

```text
checkbox
```

Status:

```text
Wajib
```

Teks wajib menjelaskan bahwa:

- data digunakan untuk menindaklanjuti permintaan;
- data dimasukkan ke ringkasan dan pesan WhatsApp;
- pengguna masih harus menekan Kirim;
- permintaan belum menjadi konfirmasi booking;
- persetujuan ini bukan izin publikasi foto atau dokumentasi.

---

## 14. DATA YANG DILARANG DIMINTA

Jangan menambahkan field:

- NIK;
- nomor paspor;
- alamat rumah lengkap;
- tanggal lahir;
- foto identitas;
- riwayat medis rinci;
- diagnosis;
- nama lengkap seluruh peserta;
- manifes peserta;
- nomor rekening;
- bukti transfer;
- kartu kredit;
- dokumen perusahaan;
- kontak darurat seluruh peserta;
- password;
- akun pelanggan.

---

## 15. ARSITEKTUR FILE YANG DIREKOMENDASIKAN

Buat struktur yang proporsional seperti:

```text
client/src/features/booking/
├── bookingTypes.ts
├── bookingData.ts
├── bookingValidation.ts
├── bookingMessage.ts
├── bookingContact.ts
└── components/
    ├── BookingSection.tsx
    ├── BookingFieldError.tsx
    ├── BookingContextNotice.tsx
    ├── BookingSummary.tsx
    ├── BookingStatusNotice.tsx
    └── BookingNextSteps.tsx
```

Perbarui:

```text
client/src/pages/BookingPage/BookingPage.tsx
client/src/routes/routePaths.ts
client/src/features/packages/packagesData.ts
client/src/pages/RouteDetailPage/RouteDetailPage.tsx
```

File yang mungkin ditambahkan jika diperlukan:

```text
client/.env.example
client/src/vite-env.d.ts
client/src/features/booking/bookingClipboard.ts
```

Tidak wajib membuat semua file di atas secara persis.

Jangan memecah kode menjadi terlalu banyak komponen kecil tanpa manfaat.

Syarat utama:

- tipe, data, validasi, pembentukan pesan, dan konfigurasi kontak tidak ditumpuk seluruhnya dalam `BookingPage.tsx`;
- jangan menggunakan `any`;
- jangan menduplikasi data Paket atau Rute;
- jangan memasang dependency baru.

---

## 16. MODEL DATA YANG DIREKOMENDASIKAN

Contoh arah type:

```ts
export type DateFlexibility =
  | ""
  | "fixed"
  | "one-to-three-days"
  | "one-week";

export type GroupType =
  | ""
  | "family"
  | "couple"
  | "friends"
  | "corporate"
  | "community"
  | "individual"
  | "other";

export type MeetingPoint =
  | ""
  | "undecided"
  | "hotel"
  | "lembang"
  | "cikole"
  | "sukawana"
  | "ciwidey"
  | "pangalengan"
  | "bogor"
  | "discussion";

export type AdditionalNeed =
  | "activity"
  | "documentation"
  | "consumption"
  | "celebration"
  | "camping"
  | "group-needs"
  | "vehicle-capacity"
  | "other";

export type BookingFormValues = {
  customerName: string;
  customerWhatsapp: string;
  organizationName: string;
  packageChoice: string;
  plannedDate: string;
  dateUndecided: boolean;
  dateFlexibility: DateFlexibility;
  participantCount: string;
  groupType: GroupType;
  routeChoice: string;
  meetingPoint: MeetingPoint;
  additionalNeeds: AdditionalNeed[];
  safetyNeeds: string;
  additionalNotes: string;
  privacyConsent: boolean;
};

export type BookingFieldErrors = Partial<
  Record<keyof BookingFormValues, string>
>;
```

Struktur boleh disesuaikan dengan pola repository.

---

## 17. SUMBER PILIHAN TETAP

Simpan pilihan tetap dalam data terpusat, misalnya `bookingData.ts`.

Setiap pilihan minimal memiliki:

```ts
{
  value: "...",
  label: "..."
}
```

Pilihan tetap:

- fleksibilitas tanggal;
- jenis kelompok;
- titik temu;
- kebutuhan tambahan;
- Paket recommendation/custom;
- Rute recommendation/custom.

Pilihan Paket reguler dan Rute publik harus diturunkan dari sumber data masing-masing.

---

## 18. INITIAL STATE DAN QUERY PARAMETER

Gunakan `useSearchParams` dari React Router.

Query yang didukung:

```text
package
route
```

### 18.1 Initial state

Pada saat halaman dibuka:

1. baca query Paket;
2. validasi terhadap Paket booking-eligible;
3. baca query Rute;
4. validasi terhadap Rute publik;
5. buat initial state;
6. tampilkan notice jika query tidak valid;
7. jangan memblokir form.

### 18.2 Perubahan query

Jika komponen tetap mounted dan URL query berubah, sinkronkan konteks dengan hati-hati.

Jangan menimpa pilihan manual pengguna secara berulang karena re-render biasa.

Gunakan pendekatan yang stabil, misalnya:

- initial state dari query pada mount; atau
- effect yang hanya berjalan ketika nilai query benar-benar berubah.

### 18.3 Notice query

Gunakan inline notice terpisah untuk:

```text
Paket Tidak Tersedia
Rute Tidak Ditemukan
```

Notice harus:

- tidak memakai status internal;
- tidak membuat halaman 404;
- tidak menghapus data form;
- memberi tindakan fokus ke select terkait atau melihat daftar Paket/Rute.

---

## 19. VALIDASI FORMULIR

Buat helper validasi terpisah.

### 19.1 Nama

Aturan:

- wajib;
- trim whitespace;
- tidak hanya spasi;
- panjang wajar, misalnya maksimal 80 karakter.

Pesan:

```text
Nama pemesan wajib diisi.
```

### 19.2 Nomor WhatsApp pemesan

Terima format umum:

```text
08xxxxxxxxxx
628xxxxxxxxxx
+628xxxxxxxxxx
```

Boleh menerima spasi, tanda hubung, dan tanda kurung untuk input, kemudian normalisasi karakter non-digit.

Aturan minimum:

- setelah normalisasi mempunyai panjang masuk akal;
- menggunakan prefix Indonesia `0`, `62`, atau `+62`;
- bukan hanya angka pendek;
- jangan melakukan panggilan jaringan untuk memverifikasi nomor.

Pesan:

```text
Masukkan nomor WhatsApp yang dapat dihubungi.
```

### 19.3 Paket

Aturan:

- wajib;
- harus berupa `recommendation`, `custom`, atau slug Paket booking-eligible;
- nilai query yang tidak layak tidak dianggap valid.

Pesan:

```text
Pilih Paket atau minta rekomendasi.
```

### 19.4 Tanggal

Aturan:

- salah satu tanggal atau `dateUndecided` wajib;
- tanggal tidak boleh pada masa lalu;
- hitung tanggal minimum menggunakan tanggal lokal browser, bukan konversi UTC yang dapat bergeser satu hari;
- jika `dateUndecided` aktif, jangan memvalidasi input tanggal sebagai wajib.

Pesan:

```text
Pilih tanggal rencana atau tandai tanggal belum ditentukan.
```

```text
Tanggal rencana tidak boleh berada pada masa lalu.
```

### 19.5 Jumlah peserta

Aturan:

- wajib;
- integer;
- lebih dari nol;
- jangan menetapkan batas bisnis kecil;
- boleh memakai batas teknis sangat tinggi untuk mencegah input tidak masuk akal.

Pesan:

```text
Jumlah peserta harus lebih dari nol.
```

### 19.6 Jenis kelompok

Aturan:

- wajib;
- harus termasuk daftar pilihan tetap.

Pesan:

```text
Pilih jenis kelompok.
```

### 19.7 Pilihan opsional

Jika diisi:

- Rute harus valid;
- titik temu harus valid;
- fleksibilitas tanggal harus valid;
- kebutuhan tambahan harus berasal dari daftar tetap.

### 19.8 Textarea

Rekomendasi batas:

```text
Kebutuhan kenyamanan/keselamatan: maksimal 500 karakter
Catatan tambahan: maksimal 1000 karakter
```

Tampilkan hitungan karakter bila konsisten dengan pola desain.

### 19.9 Persetujuan

Wajib dicentang.

Pesan:

```text
Setujui penggunaan data untuk melanjutkan.
```

### 19.10 Fokus error pertama

Ketika submit invalid:

1. tampilkan error summary singkat;
2. tentukan field invalid pertama berdasarkan urutan visual;
3. pindahkan fokus ke field tersebut;
4. hubungkan error menggunakan `aria-describedby`;
5. gunakan `aria-invalid="true"`.

Jangan hanya menampilkan toast tanpa fokus field.

---

## 20. NORMALISASI NOMOR PEMESAN

Buat helper terpisah.

Contoh perilaku:

```text
081234567890 → 6281234567890
+6281234567890 → 6281234567890
6281234567890 → 6281234567890
```

Nomor hasil normalisasi dapat digunakan di ringkasan dan pesan.

Jangan mengubah input pengguna secara agresif saat mengetik jika mengganggu UX.

Normalisasi dapat dilakukan saat validasi atau pembentukan pesan.

---

## 21. FORMAT PESAN WHATSAPP

Buat pure function terpisah, misalnya:

```ts
buildBookingMessage(values, lookups)
```

Format pesan:

```text
Halo WNB, saya ingin mengajukan rencana perjalanan.

Nama: [Nama Pemesan]
Nomor WhatsApp: [Nomor]
Perusahaan/Komunitas: [Jika diisi]
Paket: [Nama Paket / Minta Rekomendasi / Perjalanan Khusus]
Tanggal Rencana: [Tanggal Indonesia / Belum Ditentukan]
Fleksibilitas Tanggal: [Jika diisi]
Jumlah Peserta: [Jumlah]
Jenis Kelompok: [Label]
Preferensi Rute: [Jika diisi]
Preferensi Titik Temu: [Jika diisi]
Kebutuhan Tambahan: [Jika diisi]
Kebutuhan Kenyamanan/Keselamatan: [Jika diisi]
Catatan: [Jika diisi]

Saya memahami bahwa permintaan ini belum menjadi konfirmasi booking dan masih menunggu pemeriksaan dari tim WNB.
```

Aturan:

1. baris opsional kosong tidak dimasukkan;
2. gunakan label publik, bukan value teknis;
3. gunakan nama Paket dan Rute dari source data;
4. jangan memasukkan ID database;
5. jangan memasukkan status verifikasi;
6. jangan memasukkan koordinat;
7. jangan memasukkan catatan internal;
8. jangan memasukkan harga internal;
9. jangan memasukkan nama kru;
10. jangan menyatakan booking berhasil.

Gunakan newline yang rapi sebelum `encodeURIComponent`.

---

## 22. KONFIGURASI NOMOR WHATSAPP RESMI

### 22.1 Environment variable

Gunakan:

```text
VITE_WNB_WHATSAPP_NUMBER
```

Contoh file environment:

```text
VITE_WNB_WHATSAPP_NUMBER=
```

Jangan mengisi nomor lama.

Jika membuat `.env.example`, nilai harus tetap kosong.

Environment variable frontend bukan secret. Tujuannya adalah konfigurasi terpusat, bukan menyembunyikan nomor publik.

### 22.2 Helper config

Buat helper seperti:

```ts
getOfficialWhatsAppNumber(): string | null
```

Aturan:

- trim;
- hapus karakter non-digit;
- normalisasi `0` menjadi `62` jika diperlukan;
- validasi panjang dan prefix;
- return `null` jika kosong atau tidak valid.

### 22.3 URL WhatsApp

Bentuk:

```text
https://wa.me/[nomor]?text=[encoded-message]
```

Jangan gunakan API tidak resmi.

Jangan menggunakan nomor pemesan sebagai nomor tujuan.

---

## 23. KONDISI NOMOR WHATSAPP TERSEDIA

Jika nomor resmi valid tersedia:

1. validasi form;
2. bentuk message;
3. bentuk URL `wa.me`;
4. coba buka tab baru;
5. jika tab berhasil dipanggil, tampilkan status:

```text
WhatsApp telah dibuka. Silakan periksa pesan dan tekan Kirim untuk meneruskan permintaan kepada WNB.
```

6. jangan mengosongkan form;
7. tetap sediakan tombol **Salin Ringkasan** sebagai fallback sekunder;
8. jangan menyatakan pesan telah terkirim.

---

## 24. KONDISI NOMOR WHATSAPP BELUM TERSEDIA

Ini merupakan kondisi default Plan 012 sampai nomor resmi ditetapkan.

Form tetap harus dapat:

- diisi;
- divalidasi;
- diringkas;
- disalin.

Tampilkan status:

```text
Kanal Pemesanan Sedang Dilengkapi
```

Pesan:

```text
Nomor WhatsApp resmi WNB belum dikonfigurasi. Anda tetap dapat menyalin ringkasan permintaan untuk disimpan atau disampaikan melalui kanal resmi setelah tersedia.
```

Tindakan utama:

```text
Salin Ringkasan
```

Tindakan pendukung:

```text
Lihat Paket
Jelajahi Rute
```

Jangan menampilkan tombol WhatsApp aktif yang tidak mempunyai tujuan valid.

---

## 25. CLIPBOARD FALLBACK

Buat helper yang:

1. menggunakan `navigator.clipboard.writeText` jika tersedia;
2. menyediakan fallback textarea sementara apabila Clipboard API tidak tersedia;
3. membersihkan element sementara;
4. mengembalikan status berhasil/gagal;
5. tidak mengubah data form.

Status berhasil:

```text
Ringkasan permintaan berhasil disalin.
```

Status gagal:

```text
Ringkasan belum dapat disalin. Pilih teks ringkasan dan salin secara manual.
```

Jika copy gagal, tampilkan ringkasan dalam elemen readonly yang mudah dipilih.

---

## 26. WHATSAPP GAGAL DIBUKA

Jika `window.open` gagal atau browser memblokir tab:

Tampilkan:

```text
WhatsApp Tidak Dapat Dibuka
```

Pesan:

```text
Browser mungkin memblokir tab baru atau WhatsApp tidak tersedia pada perangkat ini. Coba kembali atau salin ringkasan permintaan.
```

Tindakan:

```text
Coba Lagi
Salin Ringkasan
```

Data form tidak boleh hilang.

---

## 27. STRUKTUR HALAMAN

Gunakan urutan berikut.

### 27.1 Hero dan Penjelasan Proses

Eyebrow:

```text
Permintaan Perjalanan
```

H1:

```text
Rencanakan Perjalanan WNB
```

Pesan utama:

```text
Sampaikan kebutuhan perjalanan Anda. Tim WNB akan memeriksa Paket, kendaraan, Rute, jadwal, dan kebutuhan lainnya sebelum memberikan konfirmasi.
```

Tambahkan notice bahwa form bukan pembayaran dan bukan konfirmasi otomatis.

### 27.2 Notice Query Paket/Rute

Tampil kondisional.

### 27.3 Konteks Paket/Rute Terpilih

Tampil jika query valid.

Jangan membuat section kosong ketika tidak ada query.

### 27.4 Form Data Pemesan

Section dengan heading dan helper.

### 27.5 Form Rencana Perjalanan

Section dengan Paket, tanggal, fleksibilitas, peserta, dan jenis kelompok.

### 27.6 Preferensi Rute dan Titik Temu

Section opsional.

### 27.7 Kebutuhan Tambahan

Section opsional.

### 27.8 Ringkasan Permintaan

Tampilkan ringkasan live atau setelah field utama mulai terisi.

Ringkasan harus menggunakan label publik.

### 27.9 Persetujuan Penggunaan Data

Checkbox wajib dan penjelasan lengkap.

### 27.10 CTA Pengiriman

Kondisional berdasarkan ketersediaan nomor resmi.

### 27.11 Informasi Proses Berikutnya

Tiga tahap:

```text
1. Anda menyampaikan kebutuhan awal.
2. WNB memeriksa jadwal, unit, Rute, kru, dan kebutuhan tambahan.
3. WNB memberikan konfirmasi dan langkah berikutnya melalui komunikasi resmi.
```

---

## 28. LAYOUT DESKTOP DAN MOBILE

### Desktop

Gunakan layout yang nyaman, misalnya:

```text
Form utama: 2/3
Ringkasan: 1/3 sticky
```

Atau gunakan ringkasan di bagian akhir jika lebih konsisten dengan komponen yang tersedia.

Syarat:

- lebar field mudah dibaca;
- section terlihat jelas;
- ringkasan tidak menutupi form;
- sticky tidak bertabrakan dengan Navbar;
- tidak terjadi horizontal overflow.

### Mobile

- satu kolom;
- ringkasan tampil setelah field atau sebelum CTA;
- tombol memenuhi lebar bila diperlukan;
- input mempunyai area sentuh memadai;
- keyboard sesuai tipe input;
- checkbox tidak terlalu kecil;
- error dekat field;
- tidak ada sticky sidebar yang mengganggu.

---

## 29. KOMPONEN FIELD DAN ACCESSIBILITY

Setiap input wajib memiliki:

- `<label htmlFor>` yang valid;
- `id` unik;
- `name`;
- `autoComplete` yang sesuai;
- helper text bila diperlukan;
- error text yang terhubung melalui `aria-describedby`;
- `aria-invalid` ketika error;
- focus-visible state;
- disabled state yang dapat dipahami.

Rekomendasi autocomplete:

```text
Nama: name
Nomor WhatsApp: tel
Organisasi: organization
```

Form:

```tsx
<form noValidate>
```

Gunakan custom validation agar pesan konsisten.

Error summary:

- gunakan `role="alert"` atau `aria-live="assertive"`;
- jangan mengambil fokus secara membingungkan;
- setelah submit invalid, fokus ke field invalid pertama.

Status copy/WhatsApp:

- gunakan `aria-live="polite"`;
- jangan hanya dibedakan melalui warna.

---

## 30. RINGKASAN PERMINTAAN

Ringkasan harus menampilkan:

- nama;
- nomor WhatsApp;
- organisasi bila ada;
- Paket;
- tanggal;
- fleksibilitas;
- peserta;
- jenis kelompok;
- Rute bila ada;
- titik temu bila ada;
- kebutuhan tambahan bila ada;
- kebutuhan kenyamanan/keselamatan bila ada;
- catatan bila ada.

Ringkasan tidak menampilkan:

- key teknis;
- nilai slug mentah apabila label tersedia;
- data internal;
- status verifikasi;
- nomor WhatsApp tujuan WNB;
- informasi pembayaran.

Sediakan tindakan:

```text
Ubah Data
```

Tindakan dapat memindahkan fokus ke awal form atau field tertentu.

---

## 31. STATUS SISTEM YANG WAJIB DITANGANI

### Informasi

```text
Permintaan Anda akan diperiksa terlebih dahulu oleh tim WNB.
```

### Query Paket tidak valid

```text
Paket Tidak Tersedia
Paket dari tautan yang Anda buka tidak dapat dipilih. Anda tetap dapat menggunakan formulir umum.
```

### Query Rute tidak valid

```text
Rute Tidak Ditemukan
Rute dari tautan yang Anda buka tidak tersedia. Anda tetap dapat memilih Rute lain atau meminta rekomendasi.
```

### Form invalid

```text
Periksa Kembali Formulir
Beberapa informasi wajib belum dilengkapi.
```

### Nomor tujuan belum tersedia

```text
Kanal Pemesanan Sedang Dilengkapi
```

### Copy berhasil

```text
Ringkasan permintaan berhasil disalin.
```

### WhatsApp dibuka

```text
WhatsApp telah dibuka. Silakan periksa pesan dan tekan Kirim untuk meneruskan permintaan kepada WNB.
```

### WhatsApp gagal

```text
WhatsApp Tidak Dapat Dibuka
```

Tidak ada state bernama **Booking Berhasil**.

---

## 32. CUSTOMER JOURNEY DAN CTA YANG HARUS DIPERIKSA

Periksa seluruh repository untuk link menuju Booking.

### Generic Booking CTA

CTA generik harus tetap menggunakan:

```ts
ROUTE_PATHS.booking
```

Contoh:

- Beranda;
- Galeri;
- Daftar Paket;
- Daftar Rute;
- Footer;
- CTA umum lainnya.

### Paket Context CTA

Detail Paket harus tetap membawa:

```text
?package=slug
```

### Rute Context CTA

Detail Rute harus membawa:

```text
?route=slug
```

### Larangan

- jangan mengganti semua generic CTA menjadi query kosong buatan;
- jangan membuat hubungan Paket–Rute otomatis;
- jangan menghapus CTA Paket atau Rute;
- jangan merombak halaman lain.

---

## 33. PROSES SUBMIT

Alur submit wajib:

```text
Pengguna menekan CTA
→ validasi seluruh form
→ jika invalid, tampilkan error dan fokus ke error pertama
→ jika valid, bentuk ringkasan dan message
→ cek konfigurasi nomor resmi
→ jika nomor tersedia, coba buka WhatsApp
→ jika nomor tidak tersedia, salin ringkasan
→ tampilkan status terbatas
→ pertahankan data form
```

Jangan reset form otomatis setelah WhatsApp dibuka atau ringkasan disalin.

---

## 34. IMPLEMENTASI TANPA DEPENDENCY BARU

Gunakan:

- React state;
- React hooks;
- React Router;
- TypeScript;
- komponen umum repository;
- Lucide yang sudah tersedia;
- Tailwind/design token yang sudah tersedia.

Jangan memasang:

- React Hook Form;
- Formik;
- Zod;
- Yup;
- date-fns;
- Moment;
- library toast;
- library clipboard;
- library modal.

---

## 35. URUTAN IMPLEMENTASI YANG DIREKOMENDASIKAN

1. baca `BookingPage.tsx`;
2. baca `routePaths.ts`;
3. baca helper Booking Paket;
4. baca data Paket dan type Paket;
5. baca data Rute dan type Rute;
6. cari seluruh link Booking;
7. buat helper generic path Booking;
8. pertahankan kompatibilitas helper Paket;
9. perbarui CTA Detail Rute;
10. buat booking types;
11. buat booking fixed data;
12. buat helper eligibility Paket;
13. buat helper query context;
14. buat validasi;
15. buat normalisasi nomor;
16. buat message builder;
17. buat contact config;
18. buat clipboard helper;
19. buat komponen Booking;
20. implementasikan BookingPage;
21. periksa responsive dan accessibility;
22. jalankan typecheck;
23. jalankan build;
24. lakukan pemeriksaan manual;
25. buat laporan akhir;
26. berhenti tanpa commit atau push.

---

## 36. FILE YANG DIPERKIRAKAN BERUBAH

Minimal:

```text
client/src/pages/BookingPage/BookingPage.tsx
client/src/routes/routePaths.ts
client/src/features/packages/packagesData.ts
client/src/pages/RouteDetailPage/RouteDetailPage.tsx
```

File baru yang direkomendasikan:

```text
client/src/features/booking/bookingTypes.ts
client/src/features/booking/bookingData.ts
client/src/features/booking/bookingValidation.ts
client/src/features/booking/bookingMessage.ts
client/src/features/booking/bookingContact.ts
client/src/features/booking/components/BookingSection.tsx
client/src/features/booking/components/BookingFieldError.tsx
client/src/features/booking/components/BookingContextNotice.tsx
client/src/features/booking/components/BookingSummary.tsx
client/src/features/booking/components/BookingStatusNotice.tsx
client/src/features/booking/components/BookingNextSteps.tsx
```

File opsional:

```text
client/.env.example
client/src/features/booking/bookingClipboard.ts
```

Jangan mengubah file lain tanpa alasan langsung dan jelas.

---

## 37. ACCEPTANCE CRITERIA — ROUTING DAN QUERY

- [ ] `/booking` menampilkan halaman aktual, bukan placeholder;
- [ ] query Paket valid otomatis memilih Paket;
- [ ] query Paket tidak valid tidak membuat 404;
- [ ] Paket tidak eligible tidak otomatis dipilih;
- [ ] query Rute valid otomatis memilih Rute;
- [ ] query Rute tidak valid tidak membuat 404;
- [ ] query Paket dan Rute dapat digunakan bersamaan;
- [ ] Detail Paket tetap menuju `?package=slug`;
- [ ] Detail Rute menuju `?route=slug`;
- [ ] generic CTA tetap menuju `/booking`;
- [ ] tidak ada hard-coded path Booking yang tidak diperlukan.

---

## 38. ACCEPTANCE CRITERIA — FORM

- [ ] seluruh field wajib tersedia;
- [ ] field opsional tersedia sesuai plan;
- [ ] Paket menggunakan data repository;
- [ ] Rute menggunakan data repository;
- [ ] PK-08 tidak ditampilkan sebagai Paket reguler aktif;
- [ ] RT-10 diberi konteks konsultasi khusus;
- [ ] tanggal masa lalu ditolak;
- [ ] tanggal belum ditentukan berfungsi;
- [ ] jumlah peserta lebih dari nol;
- [ ] kebutuhan tambahan menggunakan kategori umum;
- [ ] tidak ada harga aktivitas tambahan;
- [ ] tidak ada data sensitif yang tidak diperlukan;
- [ ] form tidak disimpan secara persisten.

---

## 39. ACCEPTANCE CRITERIA — VALIDASI DAN ACCESSIBILITY

- [ ] setiap field mempunyai label;
- [ ] helper dan error terhubung melalui `aria-describedby`;
- [ ] field invalid mempunyai `aria-invalid`;
- [ ] submit invalid memindahkan fokus ke error pertama;
- [ ] error summary dapat dibaca pembaca layar;
- [ ] status copy/WhatsApp menggunakan live region;
- [ ] focus-visible terlihat;
- [ ] checkbox dapat digunakan keyboard;
- [ ] select dapat digunakan keyboard;
- [ ] tidak ada nested `<main>`;
- [ ] tidak ada duplikasi `id="main-content"`;
- [ ] heading berurutan;
- [ ] satu H1.

---

## 40. ACCEPTANCE CRITERIA — MESSAGE DAN CONTACT

- [ ] message sesuai format Plan 012;
- [ ] baris opsional kosong tidak dimasukkan;
- [ ] message menggunakan label publik;
- [ ] nomor pemesan dinormalisasi;
- [ ] nomor tujuan berasal dari environment config;
- [ ] tidak ada nomor lama dalam repository;
- [ ] env default kosong;
- [ ] nomor kosong menghasilkan fallback;
- [ ] fallback Salin Ringkasan berfungsi;
- [ ] copy gagal mempunyai fallback manual;
- [ ] WhatsApp gagal dibuka tidak menghapus data;
- [ ] status WhatsApp tidak menyatakan pesan telah terkirim;
- [ ] form tidak reset otomatis.

---

## 41. ACCEPTANCE CRITERIA — UI DAN RESPONSIVE

- [ ] hero menjelaskan permintaan awal;
- [ ] query notice jelas;
- [ ] section form mudah dipindai;
- [ ] ringkasan mudah dibaca;
- [ ] CTA kondisional jelas;
- [ ] next steps tampil;
- [ ] desktop nyaman;
- [ ] tablet tidak overflow;
- [ ] mobile satu kolom;
- [ ] tidak ada horizontal scroll;
- [ ] tombol mempunyai area sentuh memadai;
- [ ] error dekat field;
- [ ] sticky summary tidak menutupi content.

---

## 42. PERINTAH PENGUJIAN

Jalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

Kedua perintah wajib lulus.

Jangan mengganti perintah menjadi nama script yang tidak tersedia.

---

## 43. PEMERIKSAAN MANUAL WAJIB

### 43.1 Form umum

Buka:

```text
/booking
```

Pastikan form umum dapat digunakan.

### 43.2 Query Paket valid

Buka contoh:

```text
/booking?package=family-adventure-full-experience
```

Pastikan Paket terpilih otomatis.

### 43.3 Query Paket tidak valid

Buka:

```text
/booking?package=paket-tidak-ada
```

Pastikan notice muncul dan form tetap digunakan.

### 43.4 Query Paket tidak eligible

Buka:

```text
/booking?package=open-trip-adventure
```

Pastikan Paket tidak otomatis dipilih sebagai reguler dan notice sesuai muncul.

### 43.5 Query Rute valid

Buka:

```text
/booking?route=sukawana-cikole
```

Pastikan Rute terpilih otomatis.

### 43.6 Query RT-10

Buka:

```text
/booking?route=rute-khusus-bogor
```

Pastikan konteks konsultasi khusus terlihat.

### 43.7 Query gabungan

Buka:

```text
/booking?package=family-adventure-full-experience&route=sukawana-cikole
```

Pastikan kedua konteks dipilih tanpa klaim kompatibilitas otomatis.

### 43.8 Validasi

Uji:

- submit kosong;
- nama spasi;
- nomor tidak valid;
- tanggal masa lalu;
- tanggal belum ditentukan;
- peserta nol;
- Paket kosong;
- jenis kelompok kosong;
- consent tidak dicentang;
- textarea melewati batas.

### 43.9 Fokus

Pastikan fokus pindah ke error pertama.

### 43.10 Nomor resmi kosong

Dengan environment default kosong:

- WhatsApp tidak aktif;
- fallback status muncul;
- Salin Ringkasan berfungsi;
- data tidak hilang.

### 43.11 Nomor resmi tersedia

Uji hanya menggunakan nomor yang memang dimiliki atau dikendalikan untuk pengujian lokal.

Jangan memakai nomor lama WNB.

Pastikan:

- URL terbentuk;
- message terisi;
- tab baru dipanggil;
- status terbatas muncul;
- pengguna masih harus menekan Kirim.

Hapus nilai test sebelum commit apabila bukan nomor resmi produksi.

### 43.12 Popup diblokir

Simulasikan tab baru diblokir.

Pastikan error dan copy fallback tersedia.

### 43.13 Responsive

Periksa minimal:

```text
Mobile kecil
Mobile besar
Tablet
Desktop
Desktop lebar
```

### 43.14 Regresi

Periksa:

- Beranda;
- Tentang Kami;
- Daftar Paket;
- Detail Paket;
- Daftar Rute;
- Detail Rute;
- Galeri;
- Footer;
- navigasi mobile;
- 404.

---

## 44. KRITERIA LAPORAN EKSEKUSI

Setelah implementasi, laporkan dengan format berikut:

```md
# LAPORAN EKSEKUSI PLAN 012

## Ringkasan

## Kondisi Awal
- Commit/branch yang digunakan
- Perbedaan material dari asumsi plan

## File Dibuat
- path
- fungsi

## File Diubah
- path
- perubahan

## Routing dan Query
- Paket
- Rute
- kombinasi query

## Data Form
- Paket yang tersedia
- Rute yang tersedia
- pilihan tetap

## Validasi
- field wajib
- date validation
- phone validation
- focus error

## Pesan WhatsApp
- pembentukan pesan
- normalisasi nomor
- optional lines

## Konfigurasi Kontak
- environment variable
- kondisi nomor kosong
- kondisi nomor tersedia

## Fallback
- copy ringkasan
- popup diblokir
- clipboard gagal

## Customer Journey
- Detail Paket
- Detail Rute
- CTA generik

## Accessibility
- label
- aria-invalid
- aria-describedby
- live region
- focus management

## Pengujian
- npm run typecheck:client
- npm run build:client
- pemeriksaan manual

## Masalah Tersisa

## Status
SELESAI / BELUM SELESAI
```

Jangan hanya menulis “selesai”.

Sebutkan masalah yang masih ada secara jujur.

---

## 45. INSTRUKSI PENUTUP UNTUK EXECUTOR

1. laksanakan seluruh Plan 012;
2. gunakan kondisi repository terbaru sebagai dasar teknis;
3. pertahankan seluruh hasil plan yang sudah diverifikasi;
4. jangan gunakan nomor WhatsApp lama;
5. jangan membuat backend atau pembayaran;
6. jangan menyimpan data pelanggan;
7. jangan mempublikasikan ketentuan yang masih Draf;
8. jangan menambahkan dependency;
9. jalankan typecheck dan build;
10. lakukan pemeriksaan manual;
11. buat laporan lengkap;
12. jangan commit;
13. jangan push;
14. jangan membuat PR;
15. berhenti setelah laporan agar hasil dapat diperiksa terlebih dahulu.

---

## 46. STATUS YANG DIHARAPKAN SETELAH VERIFIKASI

Jika seluruh acceptance criteria terpenuhi dan commit hasil eksekusi telah diperiksa, statusnya menjadi:

```text
Verified — Plan 012
```

Setelah itu:

```text
Plan 001–012
Fase 1 — Website Publik WNB
Implementasi halaman selesai
```

Tahap berikutnya:

```text
Audit Akhir Frontend Publik WNB
```

Backend baru direncanakan setelah audit akhir frontend selesai dan keputusan arsitektur backend disetujui.
