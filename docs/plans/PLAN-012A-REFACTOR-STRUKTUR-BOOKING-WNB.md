# PLAN 012A — REFACTOR STRUKTUR BOOKING WNB TANPA PERUBAHAN PERILAKU

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Target aplikasi:** `client`  
**Jenis pekerjaan:** Refactor internal tanpa perubahan perilaku  
**Versi plan:** 1.0  
**Status:** Siap Dieksekusi  
**Baseline wajib:** `76d7a3a80a5855cb3e1a83cb6a4da22440c37959`  
**Status baseline:** Verified — Plan 012  

---

## 1. IDENTITAS DAN PERAN EXECUTOR

Kamu adalah executor teknis yang bekerja langsung pada repository lokal WNB melalui Antigravity.

Tugasmu adalah merapikan struktur kode halaman Booking atau **Rencanakan Perjalanan** tanpa mengubah hasil yang dilihat dan digunakan pengunjung.

Plan 012A bukan penambahan fitur.

Plan 012A bukan redesign.

Plan 012A bukan penyederhanaan produk.

Plan 012A adalah refactor internal untuk:

1. mengurangi tanggung jawab `BookingPage.tsx`;
2. memisahkan logika form dari markup halaman;
3. memecah section form berdasarkan fungsi;
4. mempertahankan seluruh perilaku Verified Plan 012;
5. mempermudah pemeliharaan dan integrasi backend di masa depan;
6. mengurangi risiko perubahan lintas bagian pada satu file besar.

Jangan meminta akses Google Drive.

Seluruh keputusan yang diperlukan sudah tertulis dalam plan ini dan sudah tersedia dalam repository.

Jangan mengubah Google Drive.

Sebelum mengubah kode:

1. baca seluruh Plan 012A;
2. periksa commit aktif;
3. pastikan baseline sama dengan atau merupakan kelanjutan langsung dari commit Verified Plan 012;
4. baca seluruh implementasi Booking terbaru;
5. petakan tanggung jawab yang akan dipindahkan;
6. buat implementation plan singkat;
7. tunggu persetujuan sebelum mulai eksekusi apabila workflow Antigravity meminta persetujuan;
8. jangan commit atau push setelah implementasi;
9. berhenti setelah laporan eksekusi diberikan.

---

## 2. TUJUAN PLAN 012A

Plan 012A bertujuan untuk:

1. mengurangi ukuran dan kompleksitas `BookingPage.tsx`;
2. membuat `BookingPage.tsx` berfungsi sebagai page composition;
3. memindahkan state dan orchestration form ke custom hook;
4. memisahkan section Data Pemesan;
5. memisahkan section Rencana Perjalanan;
6. memisahkan section Preferensi dan Kebutuhan Tambahan;
7. memisahkan section Persetujuan;
8. memisahkan area status dan tindakan akhir;
9. mempertahankan komponen Booking yang sudah tersedia;
10. mempertahankan seluruh query Paket dan Rute;
11. mempertahankan seluruh validasi;
12. mempertahankan fokus ke field error pertama;
13. mempertahankan status WhatsApp dan Clipboard;
14. mempertahankan fallback nomor WhatsApp kosong;
15. mempertahankan format pesan;
16. mempertahankan copy publik;
17. mempertahankan urutan section;
18. mempertahankan visual dan responsive layout;
19. mempertahankan accessibility;
20. memastikan typecheck dan production build tetap lulus.

---

## 3. POSISI PLAN 012A DALAM FASE PENGERJAAN

Urutan pekerjaan WNB:

```text
Plan 001–011
Fondasi dan halaman informasi publik

Plan 012
Booking dan penyelesaian customer journey

Plan 012A
Refactor internal Booking tanpa perubahan perilaku

Plan 013
Sistem, fallback, 404, Error Boundary, dan final frontend hardening

Audit Akhir Frontend Publik

Verified — Fase 1 Frontend Publik WNB
```

Plan 012A dikerjakan sebelum Plan 013 agar audit akhir memeriksa struktur kode yang benar-benar akan dipertahankan.

Jangan mengerjakan Plan 013 dalam Plan 012A.

Jangan memperbaiki halaman 404 umum dalam Plan 012A.

Jangan menambahkan Error Boundary dalam Plan 012A.

Jangan mengubah fallback media Paket, Rute, atau Galeri dalam Plan 012A.

---

## 4. SIFAT PEKERJAAN: BEHAVIOR-PRESERVING REFACTOR

Definisi refactor dalam Plan 012A:

> Mengubah struktur internal kode tanpa mengubah perilaku eksternal aplikasi.

Perilaku eksternal mencakup:

- URL;
- query parameter;
- nilai default;
- pilihan Paket;
- pilihan Rute;
- urutan form;
- label;
- helper text;
- pesan error;
- status;
- copy publik;
- CTA;
- tampilan desktop;
- tampilan mobile;
- warna;
- spacing;
- validasi;
- fokus;
- Clipboard;
- WhatsApp;
- ringkasan;
- format pesan.

Apabila hasil setelah refactor berbeda dari baseline, refactor dianggap gagal meskipun typecheck dan build lulus.

---

## 5. BASELINE WAJIB

Gunakan baseline:

```text
76d7a3a80a5855cb3e1a83cb6a4da22440c37959
```

Commit tersebut telah diverifikasi sebagai hasil final Plan 012.

Sebelum mengubah kode:

1. catat branch aktif;
2. catat HEAD aktif;
3. bandingkan dengan baseline;
4. apabila terdapat perubahan lokal yang tidak berkaitan, jangan hapus atau menimpanya;
5. laporkan perbedaan material sebelum eksekusi;
6. jangan melakukan reset destruktif;
7. jangan menggunakan force checkout;
8. jangan menghapus file yang tidak dibuat dalam Plan 012A.

---

## 6. DIAGNOSIS KONDISI SAAT INI

File utama:

```text
client/src/pages/BookingPage/BookingPage.tsx
```

File tersebut sudah berfungsi dan sudah Verified.

Namun, file masih memuat terlalu banyak tanggung jawab:

1. initial state;
2. parsing query Paket;
3. parsing query Rute;
4. context notice;
5. field refs;
6. perubahan input;
7. checkbox kebutuhan tambahan;
8. pembersihan error;
9. focus first error;
10. validasi;
11. pembentukan pesan;
12. submit WhatsApp;
13. fallback Clipboard;
14. state status;
15. rendering Hero;
16. rendering context notice;
17. rendering error summary;
18. rendering Data Pemesan;
19. rendering Rencana Perjalanan;
20. rendering Preferensi;
21. rendering Persetujuan;
22. rendering actions;
23. rendering ringkasan;
24. rendering langkah berikutnya.

Masalah utama bukan sekadar jumlah baris.

Masalah utamanya adalah terlalu banyak alasan bagi satu file untuk berubah.

Plan 012A harus mengurangi coupling tersebut tanpa mengubah hasil.

---

## 7. FILE BOOKING YANG SUDAH ADA DAN WAJIB DIPERTAHANKAN

File logika yang sudah tersedia:

```text
client/src/features/booking/bookingTypes.ts
client/src/features/booking/bookingData.ts
client/src/features/booking/bookingValidation.ts
client/src/features/booking/bookingContact.ts
client/src/features/booking/bookingMessage.ts
client/src/features/booking/bookingClipboard.ts
```

Komponen yang sudah tersedia:

```text
client/src/features/booking/components/BookingFieldError.tsx
client/src/features/booking/components/BookingContextNotice.tsx
client/src/features/booking/components/BookingSummary.tsx
client/src/features/booking/components/BookingStatusNotice.tsx
client/src/features/booking/components/BookingNextSteps.tsx
```

File tersebut tidak boleh ditulis ulang tanpa kebutuhan langsung.

Plan 012A hanya boleh mengubah file lama apabila diperlukan untuk:

- mengekspor tipe props bersama;
- menghapus duplikasi hasil ekstraksi;
- menyambungkan hook dan section baru;
- mempertahankan perilaku yang sama.

Jangan mengubah copy atau logika bisnis pada file lama.

---

## 8. STRUKTUR TARGET

Struktur target yang direkomendasikan:

```text
client/src/features/booking/
├── bookingTypes.ts
├── bookingData.ts
├── bookingValidation.ts
├── bookingContact.ts
├── bookingMessage.ts
├── bookingClipboard.ts
├── hooks/
│   └── useBookingForm.ts
└── components/
    ├── BookingFieldError.tsx
    ├── BookingContextNotice.tsx
    ├── BookingSummary.tsx
    ├── BookingStatusNotice.tsx
    ├── BookingNextSteps.tsx
    ├── BookingCustomerSection.tsx
    ├── BookingTravelPlanSection.tsx
    ├── BookingPreferencesSection.tsx
    ├── BookingConsentSection.tsx
    └── BookingActions.tsx
```

File halaman tetap:

```text
client/src/pages/BookingPage/BookingPage.tsx
```

Direktori baru yang boleh dibuat:

```text
client/src/features/booking/hooks/
```

Jangan membuat folder generik baru di luar fitur Booking.

Jangan membuat `utils/` baru apabila fungsi sudah memiliki lokasi yang jelas.

Jangan membuat barrel export baru hanya untuk menyembunyikan import.

---

## 9. TARGET TANGGUNG JAWAB SETIAP FILE

### 9.1 `useBookingForm.ts`

Custom hook menjadi pusat orchestration form.

Hook harus menangani:

1. `useSearchParams` atau menerima search params dari page;
2. initial form values;
3. state values;
4. state errors;
5. state status;
6. state loading atau submitting;
7. fallback text;
8. package notice;
9. route notice;
10. field refs;
11. parsing query `package`;
12. parsing query `route`;
13. validasi eligibility Paket;
14. label konsultasi Rute;
15. `handleChange`;
16. checkbox kebutuhan tambahan;
17. reset status saat nilai berubah;
18. pembersihan field error;
19. pembersihan error tanggal saat tanggal belum ditentukan;
20. pembaruan notice Paket;
21. pembaruan notice Rute;
22. `focusFirstError`;
23. `validateAndBuildMessage`;
24. `handleSubmit`;
25. `handleCopySummary`;
26. penentuan `hasErrors`;
27. penentuan `isWaAvailable`.

Hook tidak boleh merender JSX halaman.

Hook boleh mengembalikan refs yang diperlukan section.

Hook tidak boleh mengubah kontrak fungsi helper yang sudah Verified.

### 9.2 `BookingCustomerSection.tsx`

Komponen ini merender:

- Nama Lengkap;
- Nomor WhatsApp;
- Instansi atau Organisasi;
- field error terkait.

Komponen menerima hanya data dan callback yang dibutuhkan.

Jangan menerima seluruh object hook apabila props yang diperlukan dapat dibuat eksplisit.

### 9.3 `BookingTravelPlanSection.tsx`

Komponen ini merender:

- pilihan Paket;
- Tanggal Rencana;
- checkbox Tanggal belum ditentukan;
- Fleksibilitas Tanggal;
- Jumlah Peserta;
- Jenis Kelompok;
- helper kapasitas;
- field error terkait.

Pilihan Paket tetap berasal dari helper yang sama.

Pilihan tidak boleh di-hardcode ulang.

### 9.4 `BookingPreferencesSection.tsx`

Komponen ini merender:

- Preferensi Rute;
- Preferensi Titik Temu;
- Kebutuhan Tambahan;
- Kebutuhan Kenyamanan atau Keselamatan;
- Catatan Tambahan;
- penghitung karakter;
- helper text.

Pilihan Rute tetap berasal dari helper yang sama.

Kebutuhan tambahan tetap menggunakan data yang sama.

### 9.5 `BookingConsentSection.tsx`

Komponen ini merender:

- checkbox persetujuan;
- label persetujuan;
- deskripsi pemrosesan data;
- field error persetujuan.

Copy persetujuan tidak boleh diubah.

### 9.6 `BookingActions.tsx`

Komponen ini merender:

- `BookingStatusNotice`;
- notice nomor WhatsApp belum tersedia;
- tombol Lanjutkan ke WhatsApp;
- tombol Salin Ringkasan;
- tombol Salin Saja;
- disabled state selama submit.

Komponen tidak boleh membentuk pesan sendiri.

Komponen hanya memanggil handler dari hook.

### 9.7 `BookingPage.tsx`

Setelah refactor, halaman bertugas untuk:

1. memanggil hook;
2. merender Hero;
3. merender layout dua kolom;
4. merender form;
5. merender context notice;
6. merender error summary;
7. menyusun section components;
8. merender BookingSummary;
9. merender BookingNextSteps.

`BookingPage.tsx` tidak boleh lagi memiliki:

- logika normalisasi nomor;
- logika validasi;
- logika query detail;
- logika Clipboard;
- logika WhatsApp;
- manipulasi error kompleks;
- parsing Paket atau Rute;
- pembentukan pesan.

---

## 10. TARGET UKURAN FILE

Target ukuran merupakan panduan, bukan aturan absolut.

```text
BookingPage.tsx                 sekitar 100–170 baris
useBookingForm.ts               sekitar 180–280 baris
BookingCustomerSection.tsx      sekitar 60–110 baris
BookingTravelPlanSection.tsx    sekitar 100–180 baris
BookingPreferencesSection.tsx   sekitar 110–200 baris
BookingConsentSection.tsx       sekitar 40–90 baris
BookingActions.tsx              sekitar 60–120 baris
```

Jangan memadatkan kode secara berlebihan hanya untuk mengejar jumlah baris.

Jangan membuat komponen satu input per file.

Jangan memecah section secara artifisial.

Setiap file harus memiliki fungsi yang jelas.

---

## 11. KONTRAK PERILAKU YANG WAJIB TETAP SAMA

### 11.1 URL

Tetap:

```text
/booking
```

### 11.2 Query Paket

Tetap mendukung:

```text
/booking?package=slug
```

Perilaku wajib:

- slug valid dan eligible memilih Paket otomatis;
- slug tidak ditemukan menampilkan notice;
- Paket tidak eligible menampilkan notice;
- formulir tetap dapat digunakan;
- query tidak valid tidak mengubah halaman menjadi 404.

### 11.3 Query Rute

Tetap mendukung:

```text
/booking?route=slug
```

Perilaku wajib:

- slug valid memilih Rute otomatis;
- slug tidak ditemukan menampilkan notice;
- Rute konsultasi khusus menampilkan notice;
- formulir tetap dapat digunakan.

### 11.4 Kombinasi query

Tetap mendukung:

```text
/booking?package=slug&route=slug
```

Paket dan Rute hanya menjadi preferensi.

Jangan membuat relasi Paket–Rute baru.

### 11.5 Perlindungan pilihan manual

Setelah pengguna mengubah pilihan manual:

- query tidak boleh terus menimpa state;
- notice lama harus dibersihkan atau disesuaikan;
- perubahan field tetap menjadi sumber state aktif.

### 11.6 Pilihan Paket

Tetap hanya memasukkan Paket dengan:

```text
publicationStatus !== "unpublished"
availabilityStatus === "available-by-confirmation"
```

Pilihan berikut tetap tersedia:

```text
Belum tahu — minta rekomendasi
Kebutuhan perjalanan khusus
```

Open Trip yang memerlukan jadwal tidak boleh masuk sebagai Paket reguler.

### 11.7 Pilihan Rute

Tetap menggunakan data publik yang sama.

Rute `special-consultation` tetap diberi label konsultasi khusus.

### 11.8 Validasi

Semua pesan dan aturan validasi wajib tetap sama:

- nama wajib;
- panjang nama;
- nomor WhatsApp valid;
- Paket wajib;
- tanggal atau tanggal belum ditentukan;
- tanggal masa lalu ditolak;
- tanggal hari ini valid;
- jumlah peserta lebih dari nol;
- jenis kelompok wajib;
- persetujuan wajib.

### 11.9 Fokus error

Submit invalid tetap:

- menyimpan seluruh nilai form;
- menampilkan error summary;
- menampilkan error dekat field;
- memindahkan fokus ke field invalid pertama;
- tidak membentuk pesan;
- tidak membuka WhatsApp;
- tidak menyalin ringkasan.

### 11.10 Error tanggal

Ketika `Tanggal belum ditentukan` dicentang:

- `plannedDate` dikosongkan;
- error `plannedDate` dibersihkan;
- tanggal tidak lagi diwajibkan;
- field tanggal tetap disabled seperti baseline.

### 11.11 Status

Status tetap direset ketika nilai form berubah.

Status yang didukung tetap:

```text
idle
success-whatsapp
error-whatsapp-blocked
success-copy
error-copy
```

### 11.12 WhatsApp

Sumber nomor tujuan tetap:

```text
VITE_WNB_WHATSAPP_NUMBER
```

Jangan menambahkan fallback nomor hard-coded.

Jangan menggunakan nomor calon pelanggan sebagai nomor tujuan.

Ketika nomor resmi tersedia:

- form divalidasi;
- pesan dibentuk;
- URL WhatsApp dibentuk;
- `window.open` dipanggil;
- hasil `null` diperlakukan sebagai blocked;
- form tidak direset;
- website tidak menyatakan pesan terkirim.

### 11.13 Clipboard

Semua jalur Clipboard tetap melewati validasi dan persetujuan.

Urutan fallback tetap:

```text
navigator.clipboard.writeText
→ textarea sementara
→ textarea readonly manual jika gagal
```

Focus restoration tetap dipertahankan.

### 11.14 Ringkasan

`BookingSummary` tetap menerima nilai form yang sama.

Label publik tetap berasal dari helper data.

Tidak boleh menampilkan ID internal sebagai pengganti label.

### 11.15 Pesan

Format pesan WhatsApp atau ringkasan tidak boleh berubah satu kata pun dalam Plan 012A.

Jangan mengubah:

- pembuka;
- nama field;
- urutan baris;
- format tanggal;
- normalisasi nomor;
- penutup disclaimer.

---

## 12. COPY FREEZE

Semua copy publik pada halaman Booking dibekukan selama Plan 012A.

Jangan mengubah:

- eyebrow;
- H1;
- deskripsi Hero;
- judul section;
- label input;
- placeholder;
- helper text;
- notice query;
- error summary;
- pesan field error;
- deskripsi persetujuan;
- status WhatsApp;
- status Clipboard;
- notice kanal pemesanan;
- label tombol;
- isi BookingSummary;
- isi BookingNextSteps.

Perubahan whitespace kode diperbolehkan.

Perubahan teks publik tidak diperbolehkan.

Apabila pemindahan JSX menyebabkan copy berubah, kembalikan copy ke baseline.

---

## 13. VISUAL FREEZE

Plan 012A tidak boleh mengubah desain.

Pertahankan:

- seluruh className;
- token WNB;
- grid desktop;
- layout mobile;
- spacing;
- sticky summary;
- ukuran tombol;
- warna WhatsApp;
- border;
- radius;
- ikon;
- urutan section;
- jumlah kolom;
- max width;
- padding halaman.

Jangan mengganti class Tailwind dengan class baru hanya untuk “merapikan”.

Jangan membuat design abstraction baru.

Jangan mengubah component library.

Jangan menambahkan CSS baru apabila tidak diperlukan untuk mempertahankan hasil.

---

## 14. ACCESSIBILITY FREEZE

Pertahankan seluruh accessibility yang sudah Verified:

- label dan `htmlFor`;
- ID field;
- `aria-invalid`;
- `aria-describedby`;
- error field live region;
- error summary `role="alert"`;
- error summary `aria-live="assertive"`;
- success status `aria-live="polite"`;
- error status `role="alert"`;
- focus first error;
- focus restoration Clipboard;
- native button semantics;
- native form submit;
- field order keyboard;
- disabled semantics;
- readonly manual fallback.

Jangan membuat `div` clickable sebagai pengganti button.

Jangan menghapus `noValidate` pada form.

Jangan mengganti field native dengan custom control.

---

## 15. TYPE DAN PROPS

Gunakan tipe eksplisit.

Hindari `any` baru.

Apabila baseline masih memiliki `as any`, jangan memperluas penggunaannya.

Plan 012A boleh memperbaiki `any` lokal hanya apabila:

- perilaku tidak berubah;
- perubahan kecil;
- typecheck tetap lulus;
- tidak memperluas scope.

Props section harus cukup eksplisit agar mudah dipahami.

Contoh arah, bukan kontrak wajib:

```ts
type BookingCustomerSectionProps = {
  values: Pick<
    BookingFormValues,
    "customerName" | "customerWhatsapp" | "organizationName"
  >;
  errors: Pick<
    BookingFieldErrors,
    "customerName" | "customerWhatsapp"
  >;
  fieldRefs: BookingFieldRefs;
  onChange: BookingChangeHandler;
};
```

Namun jangan membuat tipe terlalu kompleks hanya untuk menghindari beberapa props.

Prioritas:

1. jelas;
2. aman;
3. mudah dipelihara;
4. tidak duplikatif.

---

## 16. KONTRAK HOOK YANG DIREKOMENDASIKAN

Hook dapat mengembalikan object seperti berikut:

```ts
{
  values,
  errors,
  status,
  isSubmitting,
  fallbackText,
  packageNotice,
  routeNotice,
  fieldRefs,
  errorSummaryRef,
  hasErrors,
  isWaAvailable,
  handleChange,
  handleSubmit,
  handleCopySummary,
}
```

Nama boleh disesuaikan apabila lebih konsisten dengan repository.

Jangan mengembalikan setter mentah apabila tidak diperlukan oleh page.

Jangan mengekspor fungsi internal yang hanya digunakan hook.

Jangan menyembunyikan seluruh state dalam object tidak bertipe.

---

## 17. FIELD REFS

Field refs yang sudah digunakan wajib tetap tersedia:

```text
customerName
customerWhatsapp
packageChoice
plannedDate
participantCount
groupType
privacyConsent
```

`focusFirstError` harus tetap mengikuti urutan visual.

Jangan mengubah urutan fokus hanya karena section dipindahkan.

Apabila tipe object refs dipindahkan ke `bookingTypes.ts`, pastikan tidak menyebabkan circular import.

Pilihan yang aman:

- tipe refs didefinisikan dekat hook;
- props section menerima ref spesifik;
- tidak perlu mengekspor satu object ref global.

---

## 18. QUERY INITIALIZATION

Parsing query tetap dilakukan dengan React Router.

Query yang didukung:

```text
package
route
```

Jangan menambahkan query baru.

Jangan menghapus query dari URL.

Jangan melakukan navigate setelah parsing.

Jangan mengubah query menjadi path segment.

Effect harus mempertahankan perilaku baseline.

Pastikan React StrictMode tidak menyebabkan hasil yang berbeda.

Jangan menambahkan state persistence.

---

## 19. PENANGANAN EVENT

`handleChange` harus tetap menangani:

- input text;
- input tel;
- input date;
- input number;
- select;
- textarea;
- checkbox boolean;
- checkbox array `additionalNeeds`.

Saat perubahan terjadi:

1. nilai diperbarui;
2. status dikembalikan ke `idle`;
3. fallback text dibersihkan;
4. error field terkait dibersihkan;
5. notice Paket diperbarui bila perlu;
6. notice Rute diperbarui bila perlu;
7. error tanggal dibersihkan saat tanggal belum ditentukan.

Jangan mengubah urutan ini apabila dapat menimbulkan state stale.

Gunakan functional state update bila dibutuhkan untuk keamanan.

---

## 20. SUBMIT ORCHESTRATION

Submit utama harus tetap:

```text
preventDefault
→ reset status
→ set submitting
→ validate
→ focus first error jika invalid
→ build message jika valid
→ baca nomor resmi
→ buka WhatsApp jika tersedia
→ Clipboard fallback jika tidak tersedia
→ set status
→ set submitting false
```

Tombol `Salin Saja` harus tetap:

```text
reset status
→ validate
→ focus first error jika invalid
→ build message jika valid
→ copy
→ set status
```

Jangan membuat dua implementasi validasi yang berbeda.

Gunakan satu jalur `validateAndBuildMessage` seperti baseline.

---

## 21. BATAS SCOPE PLAN 012A

### 21.1 Masuk scope

- membuat `useBookingForm.ts`;
- membuat section components;
- memindahkan JSX dari BookingPage;
- memindahkan state dan handlers ke hook;
- membuat tipe props yang diperlukan;
- menghapus import yang tidak lagi digunakan;
- merapikan import;
- menghapus kode duplikat hasil ekstraksi;
- mempertahankan fungsi yang sama;
- memperbarui task atau walkthrough lokal Antigravity bila digunakan;
- menjalankan typecheck dan build;
- melakukan manual regression check.

### 21.2 Tidak masuk scope

- fitur baru;
- redesign;
- copy baru;
- perubahan validasi;
- perubahan format pesan;
- nomor WhatsApp resmi;
- backend;
- API;
- database;
- Google Sheet;
- localStorage;
- sessionStorage;
- analytics;
- unit test framework baru;
- dependency baru;
- route baru;
- halaman success;
- halaman confirmation;
- pembayaran;
- upload;
- auth;
- admin;
- Error Boundary;
- halaman 404;
- SystemState;
- refactor Paket;
- refactor Rute;
- refactor Galeri;
- perubahan Navbar;
- perubahan Footer;
- perubahan global CSS;
- perubahan Vite config;
- perubahan environment variable.

---

## 22. LARANGAN KHUSUS

Jangan:

1. mengubah `VITE_WNB_WHATSAPP_NUMBER`;
2. menambahkan nomor hard-coded;
3. menggunakan nomor pelanggan sebagai tujuan;
4. menghapus fallback Clipboard;
5. menghapus manual fallback textarea;
6. menghapus focus restoration;
7. menghapus query notice;
8. mengubah label `Salin Saja`;
9. mengubah label `Salin Ringkasan`;
10. mengubah disclaimer booking;
11. mengubah filter Paket;
12. mengubah daftar Rute;
13. mengubah urutan field;
14. mengubah field wajib menjadi opsional;
15. mengubah field opsional menjadi wajib;
16. mengubah maxLength;
17. mengubah placeholder;
18. mengubah warna atau layout;
19. menambahkan dependency form seperti React Hook Form;
20. menambahkan schema library seperti Zod;
21. menambahkan state management global;
22. membuat Context baru;
23. membuat service layer baru;
24. membuat abstraction generik untuk seluruh website;
25. mengubah file di luar Booking tanpa persetujuan.

---

## 23. URUTAN IMPLEMENTASI YANG DIREKOMENDASIKAN

### Tahap 1 — Pemeriksaan baseline

1. catat HEAD;
2. baca `BookingPage.tsx` penuh;
3. baca seluruh file Booking;
4. catat jumlah baris awal;
5. petakan state;
6. petakan handlers;
7. petakan JSX section;
8. catat seluruh copy;
9. catat seluruh className;
10. catat seluruh ID dan ARIA.

### Tahap 2 — Buat custom hook

1. buat folder `hooks`;
2. buat `useBookingForm.ts`;
3. pindahkan state;
4. pindahkan refs;
5. pindahkan query initialization;
6. pindahkan handlers;
7. pindahkan validation orchestration;
8. pindahkan WhatsApp orchestration;
9. pindahkan Clipboard orchestration;
10. kembalikan API hook yang eksplisit.

Setelah tahap ini, jalankan typecheck.

### Tahap 3 — Ekstrak section satu per satu

Urutan aman:

1. `BookingCustomerSection`;
2. `BookingTravelPlanSection`;
3. `BookingPreferencesSection`;
4. `BookingConsentSection`;
5. `BookingActions`.

Setelah setiap ekstraksi:

- periksa copy;
- periksa className;
- periksa ID;
- periksa ARIA;
- periksa props;
- jalankan typecheck bila diperlukan.

### Tahap 4 — Sederhanakan page

`BookingPage.tsx` hanya menyusun:

- Hero;
- notices;
- error summary;
- section form;
- actions;
- summary;
- next steps.

Hapus import yang sudah dipindahkan.

Jangan mengubah layout wrapper.

### Tahap 5 — Regression verification

Jalankan seluruh test manual pada bagian 29.

### Tahap 6 — Automated verification

Jalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

### Tahap 7 — Laporan

Berikan laporan lengkap dan berhenti.

Jangan commit.

Jangan push.

---

## 24. PANDUAN EKSTRAKSI JSX

Saat memindahkan markup:

1. copy JSX terlebih dahulu tanpa mengubah;
2. pindahkan import ikon hanya jika digunakan section;
3. pertahankan urutan atribut bila memungkinkan;
4. pertahankan `className` persis;
5. pertahankan ID;
6. pertahankan `name`;
7. pertahankan `autoComplete`;
8. pertahankan `type`;
9. pertahankan `min`;
10. pertahankan `maxLength`;
11. pertahankan `rows`;
12. pertahankan `aria-*`;
13. pertahankan helper ID;
14. pertahankan field refs;
15. pertahankan event handler yang sama.

Jangan melakukan cleanup visual bersamaan dengan ekstraksi.

---

## 25. PANDUAN IMPORT DAN CIRCULAR DEPENDENCY

Hindari circular dependency.

Aliran import yang diharapkan:

```text
BookingPage
→ useBookingForm
→ bookingData / bookingValidation / bookingMessage / bookingContact / bookingClipboard

BookingPage
→ section components
→ bookingTypes / bookingData / BookingFieldError / BookingStatusNotice
```

Hindari:

```text
bookingData
→ BookingPage

section component
→ BookingPage

useBookingForm
→ BookingPage
```

Jangan memindahkan helper route ke fitur Booking.

Jangan mengubah `routePaths.ts`.

---

## 26. REACT STRICTMODE

Aplikasi menggunakan React StrictMode.

Pastikan:

- effect query tidak menyebabkan state overwrite tak terduga;
- handler tidak bergantung pada side effect sekali jalan;
- Clipboard hanya berjalan akibat aksi pengguna;
- WhatsApp hanya dibuka akibat submit pengguna;
- tidak ada `window.open` dalam effect;
- tidak ada copy otomatis dalam effect;
- tidak ada focus otomatis selain focus error yang sudah ada.

---

## 27. ERROR HANDLING

Plan 012A tidak menambahkan error baru.

Pertahankan:

- error summary;
- field error;
- WhatsApp blocked;
- copy failure;
- manual fallback text.

Jangan menangkap error secara diam-diam apabila baseline menampilkan status.

Jangan menampilkan pesan teknis.

Jangan menambahkan `console.log` permanen.

`console.warn` atau `console.error` yang sudah ada pada Clipboard boleh dipertahankan.

---

## 28. AUTOMATED VERIFICATION

Wajib dijalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya harus lulus.

Apabila gagal:

1. baca error;
2. perbaiki hanya file dalam scope;
3. jangan menonaktifkan TypeScript;
4. jangan menambahkan `@ts-ignore`;
5. jangan mengubah config;
6. jalankan ulang;
7. laporkan hasil akhir.

GitHub Actions tidak wajib ditambahkan.

---

## 29. MANUAL REGRESSION CHECK WAJIB

### 29.1 Halaman umum

- buka `/booking`;
- Hero tampil sama;
- urutan section sama;
- ringkasan tampil di sidebar desktop;
- layout satu kolom pada mobile;
- tidak ada horizontal overflow;
- tidak ada nested `<main>`;
- tidak ada console error.

### 29.2 Query Paket valid

- buka Detail Paket;
- klik CTA Booking;
- URL membawa `?package=slug`;
- Paket otomatis terpilih;
- tidak ada notice error;
- pilihan manual setelah itu tetap dapat dilakukan.

### 29.3 Query Paket tidak valid

- buka `/booking?package=slug-salah`;
- notice Paket Tidak Tersedia tampil;
- form umum tetap aktif;
- pilih Paket valid;
- notice lama hilang;
- state tidak di-reset.

### 29.4 Paket tidak eligible

- gunakan slug Paket yang tidak eligible apabila tersedia;
- notice eligibility tampil;
- Paket tidak otomatis dipilih;
- form tetap dapat digunakan.

### 29.5 Query Rute valid

- buka Detail Rute;
- klik Rencanakan Rute Ini;
- URL membawa `?route=slug`;
- Rute otomatis terpilih.

### 29.6 Query Rute tidak valid

- buka `/booking?route=slug-salah`;
- notice Rute Tidak Ditemukan tampil;
- form tetap aktif;
- pilih Rute valid;
- notice lama hilang.

### 29.7 Rute konsultasi khusus

- pilih Rute konsultasi khusus;
- label konsultasi tetap tampil di select;
- notice konsultasi tampil;
- ganti ke Rute reguler;
- notice konsultasi hilang.

### 29.8 Query kombinasi

- buka URL dengan package dan route;
- keduanya otomatis terpilih apabila valid;
- tidak ada relasi otomatis baru;
- pengguna dapat mengubah salah satunya.

### 29.9 Validasi kosong

Submit form kosong.

Pastikan:

- error summary tampil;
- fokus menuju Nama Lengkap;
- pesan field tampil;
- WhatsApp tidak terbuka;
- ringkasan tidak disalin.

### 29.10 Validasi nomor

Uji:

```text
081234567890
6281234567890
+6281234567890
nomor tidak valid
```

Hasil harus sama dengan baseline.

### 29.11 Validasi tanggal

- tanggal masa lalu ditolak;
- tanggal hari ini diterima;
- tanggal masa depan diterima;
- tanggal kosong ditolak jika checkbox tidak aktif;
- `Tanggal belum ditentukan` mengizinkan submit;
- error tanggal hilang saat checkbox dicentang.

### 29.12 Jumlah peserta

- kosong ditolak;
- nol ditolak;
- negatif ditolak;
- angka positif diterima.

### 29.13 Persetujuan

- semua field valid tetapi checkbox kosong tetap ditolak;
- fokus menuju checkbox;
- WhatsApp tidak terbuka;
- Clipboard tidak berjalan.

### 29.14 Salin Saja

Ketika nomor resmi tersedia:

- tombol Salin Saja tampil;
- form invalid tetap divalidasi;
- form valid menyalin pesan;
- status Ringkasan Disalin tampil;
- ubah field;
- status kembali idle.

### 29.15 Nomor resmi kosong

Dengan env kosong:

- notice kanal tampil;
- tombol utama menjadi Salin Ringkasan;
- form invalid tetap divalidasi;
- form valid menyalin;
- tidak ada nomor lama;
- tidak ada link WhatsApp.

### 29.16 WhatsApp tersedia

Dengan env valid:

- tombol Lanjutkan ke WhatsApp tampil;
- pesan dibentuk sama;
- URL menggunakan nomor resmi;
- tab baru dibuka;
- status tidak menyatakan pesan terkirim;
- form tidak direset.

### 29.17 WhatsApp blocked

Simulasikan `window.open()` mengembalikan `null`.

Pastikan:

- status error tampil;
- status menggunakan alert;
- tombol Salin Saja tetap tersedia;
- fallback text tersedia sesuai baseline;
- data form tidak hilang.

### 29.18 Clipboard gagal

Simulasikan:

- Clipboard API gagal;
- `execCommand` gagal.

Pastikan:

- textarea manual tampil;
- textarea readonly;
- seluruh pesan tersedia;
- fokus kembali dengan aman;
- tidak ada textarea sementara tertinggal.

### 29.19 Accessibility keyboard

- tab order sama;
- semua label dapat diklik;
- checkbox berfungsi;
- submit dengan Enter tetap berfungsi;
- fokus error bekerja;
- status dapat diumumkan.

### 29.20 Visual regression

Bandingkan sebelum dan sesudah pada:

```text
320px
375px
768px
1024px
1440px
```

Tidak boleh ada perubahan material.

---

## 30. PEMERIKSAAN SOURCE DIFF

Sebelum laporan:

1. periksa `git diff`;
2. pastikan file berubah hanya dalam fitur Booking dan BookingPage;
3. pastikan tidak ada perubahan data Paket;
4. pastikan tidak ada perubahan data Rute;
5. pastikan tidak ada perubahan Galeri;
6. pastikan tidak ada perubahan route;
7. pastikan tidak ada perubahan global style;
8. pastikan tidak ada dependency baru;
9. pastikan lockfile tidak berubah;
10. pastikan copy publik tidak berubah.

Perubahan yang diharapkan:

```text
Tambah:
- hooks/useBookingForm.ts
- lima komponen section/action

Ubah:
- BookingPage.tsx

Opsional, hanya bila diperlukan:
- bookingTypes.ts
- komponen Booking lama untuk tipe props kecil
```

Apabila file lain berubah, jelaskan alasan materialnya.

---

## 31. KRITERIA PENERIMAAN

Plan 012A diterima jika seluruh kondisi berikut terpenuhi:

### Struktur

- `BookingPage.tsx` jauh lebih ringkas;
- state dan orchestration pindah ke hook;
- section form terpisah berdasarkan fungsi;
- tidak ada circular import;
- tidak ada duplikasi logika.

### Perilaku

- seluruh query bekerja sama;
- seluruh validasi sama;
- seluruh status sama;
- seluruh fallback sama;
- seluruh copy sama;
- seluruh desain sama;
- seluruh accessibility sama;
- seluruh customer journey sama.

### Teknis

- typecheck lulus;
- build lulus;
- tidak ada dependency baru;
- tidak ada config change;
- tidak ada console error;
- diff hanya dalam scope.

### Pelaporan

- daftar file dibuat;
- daftar file diubah;
- line count sebelum dan sesudah;
- penjelasan tanggung jawab hook;
- penjelasan tanggung jawab section;
- hasil typecheck;
- hasil build;
- hasil manual regression;
- masalah tersisa;
- konfirmasi belum commit dan belum push.

---

## 32. HAL YANG TIDAK DIANGGAP KEBERHASILAN

Plan dianggap belum selesai apabila:

- hanya memindahkan beberapa input tetapi logika tetap di page;
- page masih memuat seluruh handler kompleks;
- copy berubah;
- className berubah;
- validasi berubah;
- query berubah;
- status berubah;
- pesan WhatsApp berubah;
- Clipboard bypass validasi;
- nomor lama muncul;
- dependency baru ditambahkan;
- build lulus tetapi manual regression gagal;
- file lain diubah tanpa alasan;
- executor langsung commit atau push.

---

## 33. FORMAT LAPORAN EKSEKUSI

Gunakan format:

```md
# LAPORAN EKSEKUSI PLAN 012A

## Ringkasan

## Baseline
- Commit awal:
- Branch:
- Perbedaan material:

## Diagnosis Awal
- Line count BookingPage sebelum:
- Tanggung jawab awal:

## File Dibuat
- path
  - fungsi

## File Diubah
- path
  - perubahan

## Struktur Akhir

## Pemindahan Tanggung Jawab
### useBookingForm
### Customer Section
### Travel Plan Section
### Preferences Section
### Consent Section
### Actions
### BookingPage

## Behavior Preservation
- Query Paket:
- Query Rute:
- Validasi:
- Focus error:
- WhatsApp:
- Clipboard:
- Copy:
- Visual:
- Accessibility:

## Line Count Setelah
- BookingPage:
- Hook:
- Setiap section:

## Pengujian
- npm run typecheck:client:
- npm run build:client:

## Manual Regression
- daftar hasil

## Scope Check
- dependency baru:
- perubahan route:
- perubahan data Paket:
- perubahan data Rute:
- perubahan copy:
- perubahan desain:

## Masalah Tersisa

## Status
SELESAI / PERLU KOREKSI
```

Jangan menulis “semua sama” tanpa rincian.

---

## 34. STOP CONDITION

Setelah implementasi dan laporan:

1. jangan commit;
2. jangan push;
3. jangan membuat branch baru kecuali diperintahkan pengguna;
4. jangan mulai Plan 013;
5. jangan memperbaiki 404;
6. jangan menambah Error Boundary;
7. jangan melakukan audit frontend penuh;
8. berhenti dan tunggu pemeriksaan SHA atau diff.

---

## 35. COMMIT MESSAGE SETELAH VERIFIKASI

Commit hanya dilakukan setelah hasil diperiksa dan dinyatakan Verified.

Commit message yang direkomendasikan:

```text
refactor(booking): split booking page into focused sections
```

Alternatif:

```text
refactor(booking): extract form logic and section components
```

Jangan commit sebelum mendapat instruksi.

---

## 36. RINGKASAN INSTRUKSI EKSEKUSI

1. gunakan baseline Verified Plan 012;
2. jangan mengubah perilaku;
3. buat `useBookingForm`;
4. ekstrak lima komponen section/action;
5. pertahankan komponen lama;
6. ringkaskan `BookingPage` menjadi composition layer;
7. pertahankan query;
8. pertahankan validasi;
9. pertahankan WhatsApp;
10. pertahankan Clipboard;
11. pertahankan copy;
12. pertahankan UI;
13. pertahankan accessibility;
14. jangan menambah dependency;
15. jalankan typecheck;
16. jalankan build;
17. lakukan regression check;
18. laporkan seluruh perubahan;
19. jangan commit;
20. jangan push;
21. berhenti.

---

## 37. PERINTAH AWAL UNTUK ANTIGRAVITY

Setelah file ini dibaca, lakukan hal berikut:

```text
Baca seluruh Plan 012A.
Periksa repository pada baseline yang diberikan.
Baca BookingPage dan seluruh fitur Booking terbaru.
Susun implementation plan yang berfokus pada refactor internal tanpa perubahan perilaku.
Jelaskan file baru, props, hook API, urutan ekstraksi, dan verification plan.
Jangan mulai implementasi sebelum implementation plan ditinjau apabila workflow meminta persetujuan.
```

---

# STATUS PLAN

```text
PLAN 012A
REFACTOR STRUKTUR BOOKING WNB TANPA PERUBAHAN PERILAKU

Status: Siap Dieksekusi
Baseline: 76d7a3a80a5855cb3e1a83cb6a4da22440c37959
Tahap berikutnya setelah Verified: Plan 013
```
