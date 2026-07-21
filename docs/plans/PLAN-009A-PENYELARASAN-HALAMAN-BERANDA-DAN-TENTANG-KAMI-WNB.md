# PLAN 009A — PENYELARASAN HALAMAN BERANDA DAN TENTANG KAMI WNB

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Jenis pekerjaan:** Penyelarasan implementasi halaman, konten, navigasi, dan struktur section  
**Status plan:** Final — disetujui untuk dieksekusi pada working tree lokal  
**Tanggal penyusunan:** 22 Juli 2026  
**Baseline repository saat plan disusun:** `18b374c59a8e9ee83be52b81d37a11c4a56fc334`  
**Lokasi salinan plan di repository:** `docs/plans/PLAN-009A-PENYELARASAN-HALAMAN-BERANDA-DAN-TENTANG-KAMI-WNB.md`

---

## 0. PERINTAH UTAMA UNTUK GEMINI ANTIGRAVITY

Baca seluruh file ini sampai selesai sebelum mengubah file apa pun.

File ini merupakan instruksi resmi dan mandiri untuk pelaksanaan Plan 009A. Anda tidak mempunyai akses ke Google Drive dan tidak perlu mencoba membuka Google Drive. Seluruh keputusan perencanaan yang diperlukan untuk pekerjaan ini telah dirangkum langsung di dalam plan.

Sebelum melakukan perubahan:

1. Periksa repository dan working tree lokal saat ini.
2. Pastikan repository yang dibuka adalah:
   `syahputrawork98-sketch/WNB-WisataNgaprakBandung`.
3. Periksa `git status --short`.
4. Periksa commit HEAD.
5. Baca berkas konteks berikut:
   - `docs/context/current-state.md`
   - `docs/context/business-facts.md`
   - `docs/context/project-context.md`
   - `docs/context/workflow-rules.md`
   - `docs/context/README.md`
6. Baca implementasi Beranda, Tentang Kami, route, komponen bersama, dan data konten yang berkaitan.
7. Salin file plan ini secara sama persis ke:
   `docs/plans/PLAN-009A-PENYELARASAN-HALAMAN-BERANDA-DAN-TENTANG-KAMI-WNB.md`
8. Jangan membuat keputusan bisnis baru.
9. Jangan memperluas scope.
10. Jangan mengubah Google Drive.
11. Jangan melakukan commit atau push.
12. Jangan menjalankan browser testing, browser automation, screenshot testing, dev-server inspection, build, typecheck, lint, atau test otomatis kecuali pengguna secara eksplisit meminta setelah pekerjaan ini.

Jika kondisi repository berbeda secara material dari baseline, tetap baca kode terbaru dan lakukan penyesuaian minimal yang mempertahankan seluruh tujuan, batas, dan kriteria penerimaan dalam plan ini. Laporkan perbedaan tersebut pada akhir pekerjaan.

---

## 1. LATAR BELAKANG

Halaman Beranda dan Tentang Kami telah lebih dahulu diimplementasikan di GitHub. Setelah itu, perencanaan website WNB di Google Drive disusun dan diperjelas.

Hasil audit menunjukkan bahwa implementasi GitHub mempunyai fondasi yang baik, tetapi belum sepenuhnya sesuai dengan perencanaan terbaru:

### Beranda saat ini

`HomePage` masih memakai enam bagian utama:

1. Hero.
2. Manifesto.
3. Explore.
4. Vehicle.
5. Experience.
6. Final CTA.

Perencanaan terbaru mengharuskan fungsi halaman lebih jelas:

- Hero sebagai penawaran utama.
- Pengenalan WNB yang singkat.
- Arah menuju Paket dan Rute.
- Satu bagian pembeda pengalaman WNB.
- Penjelasan cara merencanakan perjalanan.
- CTA penutup.
- Paket pilihan, Rute pilihan, dan dokumentasi perjalanan hanya boleh ditampilkan setelah data atau aset yang sesuai benar-benar siap.

### Tentang Kami saat ini

`AboutPage` masih memakai sepuluh bagian:

1. Hero.
2. Origin Story.
3. Journey Timeline.
4. Makna Ngaprak.
5. Land Rover Klasik.
6. Brand Values.
7. Brand Promise.
8. Adventure for Everyone.
9. Operational Base.
10. CTA.

Perencanaan terbaru mengharuskan:

- Origin Story dan Timeline digabung secara fungsi.
- Brand Values dan Brand Promise digabung menjadi satu bagian prinsip pengalaman.
- Narasi yang berulang dipadatkan.
- Tahun 2026 tidak digunakan sebagai fakta publik yang telah final.
- Kelompok peserta diperluas.
- `/tentang-kami` menjadi URL utama.
- `/about` dipertahankan sebagai URL lama yang mengarahkan ke URL utama.
- Aset ilustrasi tidak boleh dianggap dokumentasi asli WNB.

---

## 2. TUJUAN PLAN 009A

Plan ini bertujuan menyelaraskan implementasi Beranda dan Tentang Kami dengan perencanaan website terbaru tanpa membangun ulang aplikasi dari nol.

Hasil akhir harus:

1. Mempertahankan identitas visual monokromatik, tangguh, dan editorial yang sudah ada.
2. Mengurangi pengulangan informasi antara Beranda dan Tentang Kami.
3. Membuat fungsi setiap section lebih jelas.
4. Menambahkan penjelasan alur merencanakan perjalanan di Beranda.
5. Menggabungkan bagian yang tumpang tindih.
6. Menjadikan `/tentang-kami` sebagai route utama.
7. Mempertahankan `/about` sebagai route lama yang melakukan redirect.
8. Menggunakan bahasa publik yang proporsional dan tidak mengarang kepastian.
9. Menandai aset non-WNB sebagai ilustrasi.
10. Menjaga halaman Paket, Detail Paket, Rute, Galeri, dan Booking tetap di luar scope perubahan isi.

---

## 3. BATAS SCOPE

### 3.1 Termasuk dalam scope

Pekerjaan hanya mencakup:

- halaman Beranda;
- halaman Tentang Kami;
- komponen yang secara langsung dipakai oleh kedua halaman;
- data konten Home dan About;
- route `/tentang-kami`;
- redirect dari `/about`;
- tautan internal yang menuju halaman Tentang Kami;
- aksesibilitas dasar pada bagian yang diubah;
- salinan file plan ke `docs/plans/`.

### 3.2 Tidak termasuk dalam scope

Dilarang mengubah isi atau arsitektur:

- `/paket`;
- `/paket/:slug`;
- data paket;
- kartu paket;
- detail paket;
- `/rute`;
- `/rute/:slug`;
- data rute;
- `/gallery` atau halaman Galeri;
- `/booking` atau formulir Booking;
- server;
- API;
- database;
- CMS;
- dependency;
- `package.json`;
- `package-lock.json`;
- konfigurasi deployment;
- sistem autentikasi;
- nomor WhatsApp;
- data harga;
- fakta operasional baru;
- foto resmi WNB yang belum tersedia.

Perubahan referensi route Tentang Kami pada komponen global diperbolehkan hanya bila diperlukan agar tautan internal menuju URL canonical baru.

---

## 4. ATURAN FAKTA DAN KONTEN

### 4.1 Fakta yang boleh digunakan

- WNB adalah Wisata Ngaprak Bandung.
- WNB berhubungan dengan pengalaman petualangan menggunakan Land Rover klasik.
- WNB tumbuh dari hobi Land Rover klasik, off-road, eksplorasi alam, dan kebersamaan.
- Aktivitas mulai dikenal atau dijalankan sejak 2019.
- Aktivitas pernah mengalami masa perlambatan.
- WNB kini sedang dikembangkan kembali.
- Pengalaman dapat disesuaikan dengan peserta dan kondisi perjalanan.
- Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi merupakan kantor pusat administrasi dan garasi unit cadangan.
- Alamat tersebut bukan titik temu perjalanan tetap.
- Titik temu perjalanan bersifat fleksibel dan ditentukan melalui proses perencanaan.
- Land Rover klasik merupakan karakter dan bagian pengalaman WNB, bukan hanya alat transportasi.
- Pengalaman WNB diarahkan agar bertanggung jawab, autentik, fleksibel secara terarah, hangat, dan berkesan.

### 4.2 Fakta yang belum boleh ditampilkan sebagai kepastian

Dilarang menyatakan sebagai fakta final:

- tahun 2026 sebagai tahun resmi peluncuran kembali;
- jumlah pelanggan;
- jumlah perjalanan;
- statistik keberhasilan;
- jaminan keselamatan mutlak;
- seluruh rute cocok untuk seluruh peserta;
- seluruh anak dapat mengikuti seluruh rute;
- ketersediaan otomatis;
- keberangkatan otomatis;
- jam layanan;
- nomor kontak resmi;
- legalitas atau nama badan usaha yang belum final;
- foto stock atau ilustrasi sebagai dokumentasi asli WNB.

### 4.3 Gaya bahasa

Gunakan bahasa Indonesia yang:

- hangat;
- jelas;
- tidak terlalu formal;
- tidak berlebihan;
- tidak menggunakan urgensi palsu;
- tidak menjanjikan kepastian otomatis;
- tidak mengulang pesan yang sama pada banyak section;
- tidak menyebut layanan sekadar sebagai penyewaan kendaraan;
- tetap mudah dipahami oleh pengunjung baru.

---

## 5. TARGET STRUKTUR BERANDA

Setelah Plan 009A, Beranda menggunakan enam section aktif berikut.

### 5.1 Section 1 — Hero Beranda

**Fungsi:**  
Menjelaskan penawaran utama WNB dalam satu pandangan.

**Pertahankan:**

- satu H1;
- foto hero yang sudah tersedia;
- identitas Land Rover klasik;
- dua CTA;
- layout responsif yang sudah bekerja.

**Arah copy:**

- Headline saat ini `Rasakan Bandung dari Jalur yang Berbeda.` dapat dipertahankan.
- Subheadline harus menjelaskan pengalaman Land Rover klasik yang dapat disesuaikan.
- Jangan menambahkan klaim keselamatan, harga, jadwal, atau ketersediaan.

**CTA final:**

1. `Lihat Paket` → `/paket`
2. `Jelajahi Rute` → `/rute`

Jangan gunakan lebih dari dua CTA pada Hero.

**Aset:**

- gambar yang bukan dokumentasi resmi WNB harus tetap jelas berstatus ilustrasi;
- alt text harus menjelaskan isi gambar tanpa menyatakan bahwa kendaraan atau perjalanan tersebut adalah unit atau perjalanan asli WNB.

---

### 5.2 Section 2 — Pengenalan Singkat WNB

**Fungsi:**  
Menjelaskan secara singkat bahwa WNB bukan sekadar kendaraan, lalu mengarahkan pengguna ke Tentang Kami.

Komponen `ManifestoSection` dapat dipertahankan dan dipadatkan atau diganti namanya secara minimal.

**Batas isi:**

- maksimal dua paragraf pendek;
- tidak mengulang seluruh sejarah;
- tidak mengulang timeline;
- tidak menjelaskan spesifikasi Short dan Long;
- tidak mengulang seluruh prinsip pengalaman.

**Arah copy yang harus dicapai:**

Paragraf pertama menjelaskan bahwa pengalaman WNB dibentuk oleh Land Rover klasik, alam, jalur, kebersamaan, dan penyesuaian peserta.

Paragraf kedua menjelaskan bahwa kendaraan merupakan bagian karakter perjalanan, bukan sekadar transportasi.

**CTA final:**

`Kenali WNB` → `/tentang-kami`

Aset non-WNB harus ditandai sebagai ilustrasi atau mempunyai keterangan sumber yang jelas. Jangan menampilkan ilustrasi seolah-olah dokumentasi sejarah WNB.

---

### 5.3 Section 3 — Arah Pilihan Perjalanan

Data Paket pilihan dan Rute pilihan belum ditetapkan secara final. Karena itu, Plan 009A tidak boleh memilih tiga atau empat Paket unggulan dan tidak boleh memilih dua atau tiga Rute unggulan berdasarkan asumsi.

Gunakan `ExploreSection` sebagai struktur transisi yang sederhana dan mudah diganti pada plan berikutnya.

**Ubah fungsi Explore menjadi dua jalur utama:**

1. Paket.
2. Rute.

**Hapus Galeri dari section ini.**

**Arah section:**

- judul menjelaskan bahwa pengunjung dapat mulai dari jenis pengalaman atau karakter jalur;
- satu kartu menuju Paket;
- satu kartu menuju Rute;
- jangan menampilkan data harga, durasi, foto paket tertentu, atau rute tertentu;
- jangan mengarang status siap publik.

**CTA:**

- `Lihat Paket` → `/paket`
- `Jelajahi Rute` → `/rute`

Halaman Rute saat ini masih placeholder. Tautan tetap diperbolehkan karena halaman tersebut memberikan penjelasan, tetapi copy pada kartu tidak boleh menyatakan bahwa seluruh data Rute sudah tersedia.

Contoh arah copy:

**Paket**  
“Kenali pilihan pengalaman berdasarkan kebutuhan peserta, durasi, dan tujuan perjalanan.”

**Rute**  
“Pelajari arah karakter jalur WNB. Informasi rinci akan ditampilkan setelah data siap dipublikasikan.”

Jangan menjadikan wording contoh sebagai kewajiban kata demi kata bila copy existing dapat dipadatkan dengan makna yang sama.

---

### 5.4 Section 4 — Pembeda Pengalaman WNB

Fungsi `VehicleSection` dan `ExperienceSection` harus digabung menjadi satu section aktif.

Beranda tidak lagi menampilkan katalog terpisah Land Rover Short dan Long.

Gunakan satu section dengan empat pembeda:

1. **Berkarakter**  
   Land Rover klasik, alam, jalur, dan suasana perjalanan menjadi identitas pengalaman.

2. **Dipersiapkan secara Bertanggung Jawab**  
   Perjalanan dipertimbangkan berdasarkan kesiapan dan kondisi aktual, tanpa klaim keselamatan mutlak.

3. **Disesuaikan dengan Peserta**  
   Pengalaman mempertimbangkan kebutuhan, pengalaman, jumlah, dan karakter peserta.

4. **Hangat dan Berkesan**  
   Pelayanan, kebersamaan, dan cerita perjalanan menjadi bagian dari pengalaman.

**Aturan implementasi:**

- `HomePage` hanya merender satu section pembeda;
- gunakan ikon yang sudah tersedia bila sesuai;
- jangan menambahkan spesifikasi kendaraan;
- jangan mengulang paragraf dari Tentang Kami;
- jangan menggunakan frasa yang menjamin hasil atau keselamatan.

Komponen lama yang tidak lagi digunakan boleh dihapus hanya setelah memastikan tidak dipakai oleh file lain. Jika masih digunakan, pertahankan tanpa refactor yang tidak diperlukan.

---

### 5.5 Section 5 — Cara Merencanakan Perjalanan

Tambahkan satu section baru yang menjelaskan tiga langkah.

**Langkah final:**

1. **Pilih Pengalaman**  
   Pengunjung mengenali Paket atau Rute yang paling mendekati kebutuhannya.

2. **Sampaikan Kebutuhan**  
   Pengunjung menyampaikan jumlah peserta, rencana waktu, karakter kelompok, dan kebutuhan tambahan.

3. **WNB Memeriksa dan Mengonfirmasi**  
   Tim WNB memeriksa kondisi, ketersediaan, dan penyesuaian sebelum memberikan konfirmasi.

**Aturan copy:**

- jangan menyebut form sebagai konfirmasi otomatis;
- jangan menjanjikan unit tersedia;
- jangan menjanjikan tanggal tersedia;
- jangan menyatakan permintaan sebagai booking final;
- hindari kata `keberangkatan` sebagai hasil otomatis dari langkah ketiga.

**CTA:**

`Rencanakan Perjalanan` → `/booking`

Booking masih placeholder dan tidak perlu diubah dalam Plan 009A.

Section dapat menggunakan pola visual tiga kartu seperti `PackageProcessSection`, tetapi jangan memindahkan atau mengubah komponen Paket. Buat komponen khusus Home atau gunakan pola yang konsisten tanpa membuat dependency silang yang tidak perlu.

---

### 5.6 Section 6 — CTA Penutup

Pertahankan fungsi `FinalCtaSection`.

**CTA final:**

1. `Rencanakan Perjalanan` → `/booking`
2. `Kenali WNB` → `/tentang-kami`

Copy harus:

- mengajak pengunjung menceritakan kebutuhan;
- menjelaskan bahwa WNB membantu menyesuaikan pengalaman;
- tidak menjanjikan ketersediaan otomatis.

Background dekoratif boleh dipertahankan. Jika gambar dekoratif menggunakan `alt=""`, pastikan fungsi visualnya memang dekoratif.

---

### 5.7 Bagian Beranda yang ditunda

Jangan mengimplementasikan hal berikut dalam Plan 009A:

- tiga atau empat Paket pilihan;
- dua atau tiga Rute pilihan;
- foto perjalanan asli;
- section Dokumentasi Perjalanan;
- integrasi Galeri;
- data status publikasi Paket atau Rute;
- perubahan data Paket;
- perubahan data Rute.

Bagian tersebut akan diputuskan pada plan lain setelah data dan aset selesai.

---

## 6. TARGET STRUKTUR TENTANG KAMI

Setelah Plan 009A, Tentang Kami menggunakan delapan section aktif berikut.

### 6.1 Section 1 — Hero Tentang Kami

Pertahankan:

- logo resmi;
- satu H1;
- posisi visual utama;
- desain hero yang sudah tersedia.

Headline saat ini dapat dipertahankan:

`Berawal dari Hobi, Tumbuh Menjadi Petualangan.`

Ringkasan hero harus pendek dan tidak menceritakan seluruh timeline.

Arah ringkasan:

“WNB tumbuh dari kecintaan terhadap Land Rover klasik, off-road, alam, dan kebersamaan. Kini, pengalaman tersebut dikembangkan kembali menjadi perjalanan yang berkarakter, terarah, dan dapat disesuaikan dengan peserta.”

Tidak wajib menggunakan kalimat tersebut kata demi kata, tetapi makna dan batasnya harus sama.

---

### 6.2 Section 2 — Kisah dan Perjalanan WNB

Gabungkan fungsi:

- `OriginStorySection`;
- `JourneyTimelineSection`.

Hasil akhir harus menjadi satu alur yang tidak berulang.

**Pokok informasi yang boleh ditampilkan:**

1. Berawal dari hobi Land Rover klasik, off-road, alam, dan komunitas.
2. Sejak 2019 mulai dikenal atau dibagikan kepada kelompok yang lebih luas.
3. Aktivitas mengalami masa perlambatan.
4. Kini sedang dikembangkan kembali dengan arah yang lebih teratur.

**Dilarang:**

- menyebut 2026 sebagai tahun peluncuran kembali yang telah final;
- mengulang paragraf Hero;
- menjadikan foto stock sebagai foto sejarah;
- membuat statistik atau tonggak sejarah baru.

**Bentuk visual:**

Boleh memakai narasi ringkas dengan timeline tunggal.

Label periode yang direkomendasikan:

- `Awal Perjalanan`
- `Sejak 2019`
- `Masa Perlambatan`
- `Kini`

Hapus label `2026` dari data publik.

Jika menggunakan aset existing, tandai sebagai ilustrasi. Bila aset mengganggu kredibilitas sejarah, gunakan layout tipografi tanpa foto.

---

### 6.3 Section 3 — Makna Ngaprak

Pertahankan satu section khusus.

Arah makna:

“Ngaprak menggambarkan semangat menyusuri dan menemukan jalur berbeda. Dalam pengalaman WNB, semangat tersebut tetap dipersiapkan secara terarah dan disesuaikan dengan kondisi perjalanan.”

Aturan:

- jangan mengklaim definisi linguistik formal;
- jangan menjelaskan istilah secara berlebihan;
- jangan mengulang seluruh brand promise;
- gunakan bahasa yang mudah dipahami orang di luar budaya Sunda.

---

### 6.4 Section 4 — Land Rover Klasik sebagai Karakter

Pertahankan fungsi `ClassicLandRoverSection`.

Isi harus menjelaskan:

- Land Rover klasik sebagai identitas;
- sensasi dan karakter kendaraan sebagai bagian cerita;
- kendaraan bukan hanya pajangan atau transportasi.

Dilarang:

- membuat katalog spesifikasi;
- menyebut seri atau tahun produksi;
- menyebut modifikasi teknis;
- menganggap foto ilustrasi sebagai unit resmi WNB.

Aset existing dapat dipertahankan dengan penanda ilustrasi dan alt text yang akurat.

CTA opsional pada section ini tidak wajib. Jika ditambahkan, maksimal menuju:

- `/paket`;
- `/rute`.

Jangan menambah CTA bila membuat halaman terlalu ramai.

---

### 6.5 Section 5 — Prinsip Pengalaman WNB

Gabungkan fungsi:

- `BrandValuesSection`;
- `BrandPromiseSection`.

Hasil akhir hanya satu section dengan empat prinsip:

1. **Bertanggung Jawab**  
   Kesiapan dan kelayakan perjalanan lebih penting daripada memaksakan pelaksanaan.

2. **Autentik**  
   Pengalaman dibangun dari Land Rover klasik, alam, jalur, dan karakter WNB.

3. **Fleksibel Terarah**  
   Perjalanan dapat disesuaikan, tetapi tetap mempertimbangkan kondisi dan keputusan operasional.

4. **Hangat dan Berkesan**  
   Komunikasi, pelayanan, kebersamaan, dan cerita perjalanan menjadi bagian pengalaman.

Dilarang:

- membuat delapan kartu dari dua kumpulan lama;
- mengulang janji yang sama dengan istilah berbeda;
- menjamin keselamatan;
- mengklaim seluruh perjalanan selalu berjalan sesuai rencana.

Gunakan satu judul section, satu pengantar singkat, dan empat kartu atau empat item.

---

### 6.6 Section 6 — Pengalaman untuk Berbagai Kelompok

Perbarui `AdventureForEveryoneSection`.

Bagian ini tidak lagi hanya membagi:

- pemula;
- peserta yang kembali.

Tampilkan kelompok yang dapat dilayani:

- pemula;
- pasangan;
- keluarga;
- teman atau kelompok pertemanan;
- komunitas;
- perusahaan atau organisasi.

Tidak perlu membuat enam section terpisah. Gunakan satu section ringkas, kartu, daftar, atau chip yang mudah dipindai.

Sertakan batas penting:

“Tidak semua rute sesuai untuk semua peserta. Penyesuaian akhir mengikuti karakter kelompok, kondisi perjalanan, dan hasil pemeriksaan WNB.”

Jangan menetapkan batas usia atau aturan anak yang belum final.

---

### 6.7 Section 7 — Basis Administrasi WNB

Pertahankan `OperationalBaseSection`.

Informasi final:

**Judul:**  
`Kantor Pusat Administrasi dan Garasi Unit Cadangan`

**Alamat:**  
`Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi`

**Penjelasan:**  
Alamat digunakan sebagai kantor administrasi dan garasi unit cadangan. Alamat bukan titik temu perjalanan tetap. Titik temu ditentukan berdasarkan kesepakatan dalam proses perencanaan.

Dilarang menambahkan:

- jam layanan;
- nomor kontak;
- peta;
- klaim bahwa seluruh perjalanan berangkat dari alamat tersebut.

---

### 6.8 Section 8 — CTA Penutup

Pertahankan fungsi `AboutCtaSection`.

CTA final:

1. `Lihat Paket` → `/paket`
2. `Rencanakan Perjalanan` → `/booking`

Copy tidak boleh mengulang seluruh filosofi halaman. Gunakan satu kalimat ajakan yang singkat.

---

## 7. URL DAN NAVIGASI

### 7.1 URL canonical

Ubah URL utama halaman Tentang Kami menjadi:

`/tentang-kami`

### 7.2 URL lama

Pertahankan:

`/about`

sebagai route lama yang melakukan redirect ke:

`/tentang-kami`

Gunakan redirect client-side yang sesuai dengan router saat ini, misalnya `Navigate` dengan `replace`, setelah memeriksa versi dan pola routing repository.

### 7.3 Route constants

Perbarui konstanta route agar:

- `ROUTE_PATHS.about` mengarah ke `/tentang-kami`;
- tersedia konstanta terpisah untuk `/about` bila diperlukan, misalnya `aboutLegacy`;
- semua tautan internal baru menggunakan canonical route;
- tidak ada loop redirect;
- refresh langsung pada `/tentang-kami` tetap ditangani oleh konfigurasi SPA yang sudah ada.

### 7.4 Tautan yang harus diaudit

Audit seluruh repository untuk tautan internal `/about`, terutama:

- header;
- footer;
- Home;
- About CTA;
- komponen navigasi;
- dokumentasi yang benar-benar perlu diselaraskan dalam scope.

Jangan mengubah URL Galeri, Paket, Rute, atau Booking dalam plan ini.

---

## 8. ASET VISUAL DAN INTERNET

Gemini Antigravity dapat mengakses internet, tetapi Plan 009A tidak membutuhkan pencarian atau pengunduhan foto baru.

Untuk menjaga scope dan hak penggunaan:

1. Gunakan aset lokal yang sudah ada.
2. Jangan mengunduh foto baru dari internet.
3. Jangan mengganti aset dengan foto yang lisensinya tidak jelas.
4. Jangan menyatakan foto stock sebagai dokumentasi WNB.
5. Gunakan `illustrationNotice`, caption, atau mekanisme existing untuk menjelaskan status ilustrasi.
6. Foto dekoratif boleh memakai alt kosong hanya jika benar-benar dekoratif.
7. Foto informatif harus mempunyai alt text yang menjelaskan isi visual.
8. Jangan menambahkan logo, foto founder, foto tim, atau foto sejarah yang belum tersedia.

Jika ditemukan aset existing dengan atribusi Pexels atau sumber lain, pertahankan atribusinya dan pastikan tidak dianggap dokumentasi WNB.

---

## 9. AKSESIBILITAS DAN RESPONSIVE

Pada seluruh bagian yang diubah:

- gunakan tepat satu H1 per halaman;
- jaga urutan heading;
- gunakan `section` dan `aria-labelledby` secara konsisten;
- pastikan ID heading unik;
- pastikan CTA dapat difokuskan dengan keyboard;
- pertahankan focus state existing;
- jangan bergantung hanya pada warna;
- gunakan alt text yang tepat;
- pastikan layout kartu menjadi satu kolom pada layar kecil;
- maksimal dua CTA pada Hero dan CTA penutup;
- hindari teks yang terlalu panjang pada mobile;
- jangan membuat elemen horizontal overflow;
- pertahankan ukuran logo yang sudah dikoreksi pada commit terbaru;
- jangan memperbesar logo About kembali ke ukuran lama.

---

## 10. ARAH IMPLEMENTASI FILE

Gemini harus memeriksa struktur repository terlebih dahulu. Daftar berikut merupakan perkiraan area yang relevan, bukan izin untuk mengubah semuanya tanpa kebutuhan.

### Beranda

Kemungkinan file terkait:

- `client/src/pages/HomePage/HomePage.tsx`
- `client/src/features/home/components/HeroSection.tsx`
- `client/src/features/home/components/ManifestoSection.tsx`
- `client/src/features/home/components/ExploreSection.tsx`
- `client/src/features/home/components/ExploreCard.tsx`
- `client/src/features/home/components/VehicleSection.tsx`
- `client/src/features/home/components/VehicleCard.tsx`
- `client/src/features/home/components/ExperienceSection.tsx`
- `client/src/features/home/components/FinalCtaSection.tsx`
- `client/src/features/home/homeContent.ts`
- komponen baru untuk langkah perencanaan bila diperlukan.

### Tentang Kami

Kemungkinan file terkait:

- `client/src/pages/AboutPage/AboutPage.tsx`
- `client/src/features/about/components/AboutHeroSection.tsx`
- `client/src/features/about/components/OriginStorySection.tsx`
- `client/src/features/about/components/JourneyTimelineSection.tsx`
- `client/src/features/about/components/NgaprakMeaningSection.tsx`
- `client/src/features/about/components/ClassicLandRoverSection.tsx`
- `client/src/features/about/components/BrandValuesSection.tsx`
- `client/src/features/about/components/BrandPromiseSection.tsx`
- `client/src/features/about/components/AdventureForEveryoneSection.tsx`
- `client/src/features/about/components/OperationalBaseSection.tsx`
- `client/src/features/about/components/AboutCtaSection.tsx`
- `client/src/features/about/aboutContent.ts`
- komponen gabungan baru bila diperlukan.

### Routing dan navigasi

Kemungkinan file terkait:

- `client/src/routes/routePaths.ts`
- `client/src/routes/AppRoutes.tsx`
- komponen header/footer/nav yang memakai `ROUTE_PATHS.about`.

### Dokumentasi

Wajib dibuat:

- `docs/plans/PLAN-009A-PENYELARASAN-HALAMAN-BERANDA-DAN-TENTANG-KAMI-WNB.md`

### Aturan perubahan file

- Ubah hanya file yang dibutuhkan.
- Jangan melakukan format ulang massal.
- Jangan mengganti pola import secara menyeluruh.
- Jangan memindahkan folder tanpa kebutuhan.
- Jangan menambah dependency.
- Jangan mengubah lockfile.
- Hapus komponen lama hanya jika sudah tidak mempunyai referensi.
- Sebelum menghapus file, cari seluruh pemakaiannya.
- Bila komponen dapat dipakai ulang secara aman, pertahankan.
- Jangan melakukan refactor unrelated.

---

## 11. KEPUTUSAN TEKNIS YANG DIIZINKAN

Gemini boleh menentukan detail implementasi lokal berikut:

- nama komponen gabungan;
- apakah komponen lama dipadatkan atau diganti komponen baru;
- penggunaan array data untuk empat prinsip;
- penggunaan array data untuk kelompok peserta;
- susunan kelas Tailwind yang mempertahankan design system;
- cara paling minimal menambahkan redirect;
- pemisahan file data dan presentasi sesuai pola repository.

Gemini tidak boleh menentukan:

- Paket unggulan;
- Rute unggulan;
- foto resmi;
- fakta sejarah baru;
- harga;
- nomor kontak;
- jam layanan;
- status legal;
- tahun resmi peluncuran kembali;
- fitur baru di luar scope.

---

## 12. LANGKAH KERJA YANG DIHARAPKAN

1. Baca konteks dan kode.
2. Catat kondisi working tree awal.
3. Salin plan ke `docs/plans/`.
4. Perbarui route canonical Tentang Kami dan redirect legacy.
5. Audit tautan internal Tentang Kami.
6. Restrukturisasi Beranda sesuai enam section aktif.
7. Gabungkan fungsi Vehicle dan Experience.
8. Tambahkan section Cara Merencanakan Perjalanan.
9. Restrukturisasi Tentang Kami sesuai delapan section aktif.
10. Gabungkan Origin Story dan Timeline.
11. Hapus tahun 2026 dari timeline publik.
12. Gabungkan Brand Values dan Brand Promise.
13. Perluas kelompok peserta.
14. Audit penanda ilustrasi dan alt text.
15. Pastikan tidak ada perubahan Paket, Rute, Galeri, Booking, server, dependency, atau lockfile.
16. Periksa diff secara manual melalui terminal, tanpa menjalankan testing otomatis.
17. Laporkan hasil dan berhenti.

---

## 13. KRITERIA PENERIMAAN BERANDA

Plan dianggap sesuai untuk Beranda jika:

- [ ] `HomePage` mempunyai enam section aktif sesuai urutan plan.
- [ ] Hero mempunyai satu H1.
- [ ] Hero mempunyai maksimal dua CTA.
- [ ] CTA Hero menuju `/paket` dan `/rute`.
- [ ] CTA Paket berlabel `Lihat Paket`.
- [ ] Pengenalan WNB maksimal dua paragraf pendek.
- [ ] Pengenalan menuju `/tentang-kami`.
- [ ] Explore hanya mengarahkan ke Paket dan Rute.
- [ ] Galeri tidak lagi menjadi item pada Explore Beranda.
- [ ] Explore tidak mengarang Paket atau Rute unggulan.
- [ ] Vehicle dan Experience tidak tampil sebagai dua section terpisah.
- [ ] Terdapat satu section empat pembeda WNB.
- [ ] Terdapat section tiga langkah merencanakan perjalanan.
- [ ] Langkah ketiga menegaskan pemeriksaan dan konfirmasi WNB.
- [ ] Tidak ada janji booking otomatis.
- [ ] CTA akhir menuju `/booking` dan `/tentang-kami`.
- [ ] Dokumentasi perjalanan belum ditampilkan.
- [ ] Tidak ada perubahan data Paket atau Rute.
- [ ] Aset non-WNB tidak dianggap dokumentasi asli.

---

## 14. KRITERIA PENERIMAAN TENTANG KAMI

Plan dianggap sesuai untuk Tentang Kami jika:

- [ ] URL canonical adalah `/tentang-kami`.
- [ ] `/about` melakukan redirect ke `/tentang-kami`.
- [ ] Tautan internal menggunakan canonical route.
- [ ] `AboutPage` mempunyai delapan section aktif sesuai urutan plan.
- [ ] Hero mempunyai satu H1.
- [ ] Ukuran logo tidak kembali membesar ke ukuran sebelum koreksi terakhir.
- [ ] Hero tidak mengulang seluruh sejarah.
- [ ] Origin Story dan Timeline menjadi satu fungsi section.
- [ ] Tidak ada label tahun `2026` sebagai fakta publik.
- [ ] Timeline menggunakan arah periode awal, 2019, perlambatan, dan kini.
- [ ] Makna Ngaprak dijelaskan secara ringkas dan tidak diklaim sebagai definisi linguistik formal.
- [ ] Land Rover dijelaskan sebagai karakter, bukan katalog teknis.
- [ ] Brand Values dan Brand Promise tidak tampil sebagai dua section.
- [ ] Terdapat satu section empat prinsip pengalaman.
- [ ] Kelompok peserta mencakup pemula, pasangan, keluarga, teman, komunitas, dan perusahaan/organisasi.
- [ ] Ada penjelasan bahwa tidak semua rute cocok untuk semua peserta.
- [ ] Alamat Cimahi dijelaskan sebagai kantor administrasi dan garasi unit cadangan.
- [ ] Alamat tidak disebut sebagai titik temu tetap.
- [ ] CTA akhir menuju `/paket` dan `/booking`.
- [ ] Aset sejarah yang bukan foto resmi diberi status ilustrasi.

---

## 15. KRITERIA PENERIMAAN TEKNIS DAN SCOPE

- [ ] Tidak ada perubahan pada halaman Paket.
- [ ] Tidak ada perubahan pada halaman Detail Paket.
- [ ] Tidak ada perubahan data Paket.
- [ ] Tidak ada perubahan halaman atau data Rute.
- [ ] Tidak ada perubahan Galeri.
- [ ] Tidak ada perubahan Booking selain tautan yang menuju route existing.
- [ ] Tidak ada perubahan server.
- [ ] Tidak ada dependency baru.
- [ ] `package.json` tidak berubah.
- [ ] `package-lock.json` tidak berubah.
- [ ] Tidak ada commit.
- [ ] Tidak ada push.
- [ ] Tidak ada browser testing oleh Gemini.
- [ ] Tidak ada typecheck, build, lint, atau test otomatis.
- [ ] File plan tersalin ke `docs/plans/`.
- [ ] Working tree berhenti pada status belum di-commit.
- [ ] Tidak ada data bisnis yang dibuat berdasarkan asumsi.

---

## 16. LARANGAN KHUSUS

Gemini dilarang:

- membuka atau mengandalkan Google Drive;
- meminta pengguna menyalin dokumen Drive tambahan;
- membuat Plan 010;
- melanjutkan ke halaman Rute;
- memperbaiki Paket atau Detail Paket;
- menambahkan foto internet;
- menambahkan dependency;
- melakukan redesign global;
- mengubah warna brand;
- mengubah logo;
- mengganti font global;
- mengubah header/footer di luar kebutuhan route;
- mengubah isi `business-facts.md` tanpa fakta baru eksplisit;
- menetapkan commit baru sebagai `Verified`;
- memperbarui latest verified SHA secara mandiri;
- melakukan commit atau push;
- menyatakan visual sudah benar tanpa pengujian manual pengguna.

---

## 17. FORMAT LAPORAN AKHIR GEMINI

Setelah selesai, berikan laporan dengan struktur berikut:

### A. Status

`Uncommitted / Pending User Review and Manual Testing`

### B. Ringkasan

Jelaskan secara singkat:

- perubahan Beranda;
- perubahan Tentang Kami;
- perubahan route;
- penanganan aset ilustrasi;
- bagian yang sengaja ditunda.

### C. Daftar file berubah

Tampilkan seluruh file yang:

- dibuat;
- diubah;
- dihapus.

### D. Penjelasan per file

Jelaskan fungsi perubahan setiap file dalam satu atau dua kalimat.

### E. Scope check

Nyatakan secara eksplisit:

- halaman Paket tidak diubah;
- halaman Rute tidak diubah;
- Booking tidak diimplementasikan;
- dependency tidak berubah;
- lockfile tidak berubah.

### F. Git

Tampilkan:

```bash
git status --short
git diff --stat
```

Kemudian tampilkan ringkasan diff yang relevan.

### G. Pengujian

Nyatakan:

`Tidak menjalankan browser testing, build, typecheck, lint, atau test otomatis sesuai instruksi Plan 009A.`

### H. Saran commit untuk pengguna

Tampilkan commit message berikut, tetapi jangan mengeksekusinya:

```text
feat(home-about): align pages with website planning
```

Tampilkan perintah sebagai saran saja:

```bash
git add <file-yang-telah-ditinjau-pengguna>
git commit -m "feat(home-about): align pages with website planning"
git push origin main
```

Jangan menjalankan perintah tersebut.

---

## 18. PEMERIKSAAN MANUAL OLEH PENGGUNA

Setelah Gemini selesai, pengguna akan melakukan pengujian sendiri.

Hal yang harus diperiksa pengguna:

### Beranda

- urutan section;
- tampilan desktop;
- tampilan mobile;
- Hero dan CTA;
- Explore Paket dan Rute;
- section empat pembeda;
- section tiga langkah;
- CTA penutup;
- tidak ada pengulangan berlebihan;
- tidak ada gambar yang dianggap dokumentasi asli.

### Tentang Kami

- redirect `/about`;
- URL `/tentang-kami`;
- logo;
- jumlah dan urutan section;
- cerita dan timeline;
- tidak ada tahun 2026;
- makna Ngaprak;
- empat prinsip;
- kelompok peserta;
- alamat;
- CTA akhir;
- tampilan desktop dan mobile.

### Global

- header dan footer;
- navigasi;
- focus keyboard;
- tidak ada tautan rusak;
- tidak ada overflow;
- tidak ada perubahan Paket atau Rute yang tidak diminta.

Pengguna merupakan pihak yang memutuskan apakah hasil implementasi benar.

---

## 19. RINGKASAN KEPUTUSAN FINAL

Plan 009A melakukan penyelarasan Beranda dan Tentang Kami, bukan pembangunan ulang.

### Beranda

- enam section aktif;
- Explore sementara hanya Paket dan Rute;
- Vehicle dan Experience digabung;
- tambah tiga langkah perencanaan;
- Paket pilihan, Rute pilihan, dan dokumentasi ditunda.

### Tentang Kami

- delapan section aktif;
- Origin Story dan Timeline digabung;
- Brand Values dan Brand Promise digabung;
- tahun 2026 dihapus dari fakta publik;
- kelompok peserta diperluas;
- alamat dipertahankan dengan fungsi yang benar;
- canonical route menjadi `/tentang-kami`;
- `/about` menjadi redirect legacy.

### Workflow

- Gemini hanya mengubah working tree.
- Gemini tidak mengakses Drive.
- Gemini tidak testing.
- Gemini tidak commit.
- Gemini tidak push.
- Pengguna melakukan review, testing, commit, dan push.
- SHA commit dikirim kepada ChatGPT untuk review read-only.

---

# END OF PLAN 009A
