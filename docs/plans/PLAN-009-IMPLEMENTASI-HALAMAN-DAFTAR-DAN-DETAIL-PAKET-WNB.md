# PLAN 009 — Implementasi Halaman Daftar dan Detail Paket WNB

## 1. Identitas Pekerjaan

- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch kerja:** branch aktif pengguna
- **Baseline terverifikasi:** `d7c6c1631bdaf73357aa5a68bbcddef6f4daad73`
- **Area utama:** frontend pada folder `client`
- **Jenis pekerjaan:** implementasi halaman daftar paket, detail paket dinamis, dan data paket lokal bertipe
- **Status instruksi:** siap dieksekusi

## 2. Tujuan Plan 009

Plan 009 mengganti placeholder pada `/paket` dan `/paket/:slug` dengan pengalaman publik yang lengkap, responsif, aksesibel, dan konsisten dengan identitas WNB. Halaman harus membantu calon pelanggan memahami pilihan perjalanan tanpa membuka catatan biaya internal atau menyajikan data yang belum layak sebagai kepastian publik.

Hasil akhir yang diharapkan:

1. `/paket` menampilkan delapan paket reguler yang dapat dibandingkan dengan mudah.
2. `Trail Exploration — Buka Jalur` tampil sebagai pengalaman khusus berdasarkan permintaan, bukan paket reguler berharga Rp0.
3. `/paket/:slug` menampilkan detail paket berdasarkan typed local data.
4. Slug tidak valid ditangani dengan pengalaman yang jelas dan aman.
5. Harga publik menggunakan format `Mulai dari` dan satuan yang benar.
6. Informasi internal seperti margin dan komponen biaya tidak tampil di antarmuka.
7. CTA paket mengarah ke alur perencanaan perjalanan yang sudah ada.
8. Dokumentasi repository mencatat Plan 009 dan status halaman Paket secara akurat.

## 3. Peran Executor dan Sumber Fakta

Laksanakan perubahan langsung pada working tree repository yang sedang terbuka. Pelajari struktur kode sebelum mengubah file dan ikuti pola React, TypeScript, React Router, Tailwind CSS, aksesibilitas, design token, routing, komponen common, serta organisasi feature yang telah digunakan.

Gemini tidak dapat dan tidak perlu membaca Google Drive pengguna. Seluruh fakta publik yang diperlukan untuk implementasi telah dituliskan di dalam plan ini. Jangan meminta akses Drive, jangan meminta pengguna mengunduh dokumen, dan jangan menunda pekerjaan untuk mencari data lain.

Jika ada perbedaan antara placeholder lama di repository dan fakta dalam plan ini, gunakan plan ini. Jangan mengarang harga, rute, nomor kontak, kapasitas, fasilitas, atau kebijakan baru.

## 4. Aturan Eksekusi

1. Kerjakan hanya ruang lingkup Plan 009.
2. Jangan mengubah backend, server, database, atau autentikasi.
3. Jangan membuat integrasi Google Drive, Google Sheets, CMS, API, atau fetch data eksternal.
4. Gunakan typed local data di frontend sebagai sumber halaman Paket.
5. Jangan mengimplementasikan halaman Rute, Galeri, atau sistem Booking baru.
6. Jangan memasukkan nomor WhatsApp karena nomor publik belum ditetapkan dalam plan ini.
7. Jangan menampilkan biaya internal, margin, target margin, pendapatan asumsi, atau catatan verifikasi.
8. Jangan menampilkan kode internal seperti `PK-01`, `AD-01`, `KB-01`, atau status `Perlu Verifikasi` kepada pengunjung.
9. Jangan menampilkan harga Rp0 untuk pengalaman Buka Jalur.
10. Jangan mengklaim foto ilustratif sebagai dokumentasi asli paket tertentu.
11. Jangan membuat foto baru atau aset generatif.
12. Jangan menambah dependency baru.
13. Jangan merombak header, footer, homepage, halaman Tentang Kami, atau identitas visual global.
14. Pertahankan bahasa antarmuka dalam Bahasa Indonesia.
15. Jangan menjalankan build, test, lint, typecheck, development server, atau preview.
16. Jangan melakukan commit, push, pull request, merge, atau operasi GitHub lainnya.
17. Jangan meminta konfirmasi tambahan selama pekerjaan masih berada dalam ruang lingkup plan ini.
18. Setelah selesai, lakukan pemeriksaan statis manual dan berikan ringkasan hasil.

## 5. Prinsip Penyajian Data Publik

### 5.1 Informasi yang boleh tampil

- nama paket;
- kategori dan varian publik;
- deskripsi pengalaman;
- sasaran pelanggan;
- durasi;
- kapasitas pelanggan;
- jenis kendaraan bila relevan;
- fasilitas yang termasuk;
- aktivitas tambahan relevan;
- titik temu fleksibel;
- harga jual publik;
- satuan harga;
- ketentuan perjalanan;
- catatan bahwa susunan akhir menyesuaikan cuaca, rute, kebutuhan peserta, dan ketersediaan unit.

### 5.2 Informasi yang tidak boleh tampil

- biaya kendaraan dan BBM internal;
- honor driver dan helper;
- biaya risiko internal;
- target atau persentase margin;
- harga rekomendasi internal;
- pendapatan asumsi;
- sumber data kerja;
- status kelengkapan atau verifikasi internal;
- catatan administrasi internal;
- kode paket, aktivitas, biaya, atau kendaraan;
- nama mitra yang belum dikonfirmasi;
- harga aktivitas tambahan sebagai kepastian jika masih bergantung pada mitra.

### 5.3 Bahasa harga

Gunakan pola berikut:

```text
Mulai dari Rp1.500.000 per unit
```

atau:

```text
Mulai dari Rp450.000 per peserta
```

Tambahkan catatan umum yang mudah ditemukan:

```text
Harga akhir menyesuaikan kebutuhan perjalanan, jumlah peserta, pilihan aktivitas, rute, dan ketersediaan unit.
```

Jangan memakai tanda bintang tanpa penjelasan. Jangan menyembunyikan satuan harga.

## 6. Data Paket Publik yang Harus Diimplementasikan

Gunakan delapan paket berikut sebagai paket reguler.

### 6.1 Corporate Adventure

- **Slug:** `corporate-adventure`
- **Kategori filter:** `perusahaan`
- **Label kategori:** `Perusahaan & Komunitas`
- **Varian:** perjalanan yang disesuaikan kebutuhan rombongan
- **Deskripsi singkat:** Paket off-road untuk perusahaan, instansi, organisasi, atau komunitas dengan susunan kegiatan yang dapat disesuaikan.
- **Cocok untuk:** perusahaan, instansi, organisasi, dan komunitas
- **Durasi:** 8–10 jam
- **Kapasitas:** mulai 10 peserta; jumlah unit menyesuaikan rombongan
- **Kendaraan:** Land Rover Classic Short atau Long sesuai jumlah peserta
- **Harga numerik:** `450000`
- **Harga tampil:** `Mulai dari Rp450.000 per peserta`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, makan siang, snack, dan air mineral
- **Aktivitas relevan:** paintball, dokumentasi premium, dan sajian Sunda dapat disusun sebagai tambahan atau bagian perjalanan sesuai kebutuhan
- **Titik temu:** fleksibel berdasarkan kesepakatan pemesanan
- **Ketentuan:** pemesanan disarankan minimal 14 hari sebelum perjalanan
- **Catatan publik:** rute, jumlah unit, aktivitas, dan harga akhir disesuaikan dengan kebutuhan rombongan

### 6.2 Family Adventure — Short Trip

- **Slug:** `family-adventure-short-trip`
- **Kategori filter:** `keluarga`
- **Label kategori:** `Keluarga & Pemula`
- **Varian:** Short Trip
- **Deskripsi singkat:** Perjalanan off-road singkat untuk keluarga, pemula, pasangan, atau kelompok kecil yang ingin mengenal pengalaman WNB dengan ritme lebih ringan.
- **Cocok untuk:** keluarga, pemula, pasangan, dan kelompok kecil
- **Durasi:** 3–4 jam
- **Kapasitas:** maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `1500000`
- **Harga tampil:** `Mulai dari Rp1.500.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, snack, dan air mineral
- **Aktivitas relevan:** kunjungan destinasi alam atau sejarah dapat ditambahkan setelah dikonfirmasi
- **Titik temu:** fleksibel di area Cikole atau Lembang berdasarkan kesepakatan
- **Ketentuan:** kapasitas akhir dan kesesuaian perjalanan untuk anak dikonfirmasi saat perencanaan
- **Catatan publik:** rute ringan dipilih berdasarkan kondisi lapangan dan kebutuhan peserta

### 6.3 Family Adventure — Full Experience

- **Slug:** `family-adventure-full-experience`
- **Kategori filter:** `keluarga`
- **Label kategori:** `Keluarga & Petualangan`
- **Varian:** Full Experience
- **Deskripsi singkat:** Pengalaman off-road berdurasi lebih panjang dengan jalur lebih menantang, suasana alam Bandung, dan fasilitas makan.
- **Cocok untuk:** keluarga dan pencinta petualangan
- **Durasi:** 5–7 jam menyesuaikan cuaca dan kondisi jalur
- **Kapasitas:** maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `2200000`
- **Harga tampil:** `Mulai dari Rp2.200.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, makan siang Sunda, snack, dan air mineral
- **Aktivitas relevan:** kunjungan destinasi dan sajian Sunda dapat disesuaikan dengan susunan perjalanan
- **Titik temu:** fleksibel di Sukawana, Cikole, Lembang, atau lokasi kesepakatan
- **Ketentuan:** peserta dalam kondisi sehat dan mengikuti instruksi kru
- **Catatan publik:** durasi mengikuti musim, cuaca, dan kondisi jalur pada hari perjalanan

### 6.4 Birthday Adventure

- **Slug:** `birthday-adventure`
- **Kategori filter:** `perayaan`
- **Label kategori:** `Perayaan`
- **Varian:** Birthday Adventure
- **Deskripsi singkat:** Perayaan ulang tahun yang memadukan pengalaman off-road dengan penataan momen sederhana dan berkesan.
- **Cocok untuk:** pasangan, keluarga, anak, dewasa, dan kelompok kecil
- **Durasi:** 4–5 jam
- **Kapasitas:** maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `1850000`
- **Harga tampil:** `Mulai dari Rp1.850.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, snack khusus, air mineral, dan dokumentasi dasar
- **Aktivitas relevan:** dekorasi perayaan; dokumentasi premium bersifat opsional
- **Titik temu:** fleksibel di area Cikole atau Lembang berdasarkan kesepakatan
- **Ketentuan:** tema dekorasi dan kebutuhan kue dikonfirmasi paling lambat H-3
- **Catatan publik:** dekorasi khusus dan dokumentasi premium dapat memengaruhi harga akhir

### 6.5 Anniversary Adventure

- **Slug:** `anniversary-adventure`
- **Kategori filter:** `perayaan`
- **Label kategori:** `Perayaan`
- **Varian:** Anniversary Adventure
- **Deskripsi singkat:** Pengalaman off-road untuk merayakan hari jadi pasangan dengan suasana piknik dan dekorasi sederhana.
- **Cocok untuk:** pasangan dan keluarga
- **Durasi:** 4–5 jam
- **Kapasitas:** 2 sampai maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `1850000`
- **Harga tampil:** `Mulai dari Rp1.850.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, piknik sederhana, dan air mineral
- **Aktivitas relevan:** dekorasi perayaan; dokumentasi premium bersifat opsional
- **Titik temu:** fleksibel di area Cikole atau Lembang berdasarkan kesepakatan
- **Ketentuan:** konsep perayaan dan dekorasi dikonfirmasi paling lambat H-3
- **Catatan publik:** isi piknik, dekorasi, dan dokumentasi dapat disesuaikan

### 6.6 Surprise Adventure

- **Slug:** `surprise-adventure`
- **Kategori filter:** `perayaan`
- **Label kategori:** `Perayaan`
- **Varian:** Surprise Adventure
- **Deskripsi singkat:** Paket kejutan yang menggabungkan perjalanan off-road, koordinasi rahasia, dan momen perayaan yang disusun bersama tim WNB.
- **Cocok untuk:** pasangan, keluarga, dan kelompok kecil
- **Durasi:** 5–6 jam
- **Kapasitas:** maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `1950000`
- **Harga tampil:** `Mulai dari Rp1.950.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket kawasan, snack khusus, air mineral, dan dokumentasi dasar
- **Aktivitas relevan:** dekorasi perayaan; dokumentasi premium bersifat opsional
- **Titik temu:** fleksibel berdasarkan skenario kejutan dan kesepakatan
- **Ketentuan:** skenario kejutan dan kebutuhan teknis dikonfirmasi paling lambat H-2
- **Catatan publik:** koordinasi kontak peserta dan titik pertemuan dijaga sesuai skenario kejutan

### 6.7 Adventure Camping

- **Slug:** `adventure-camping`
- **Kategori filter:** `camping`
- **Label kategori:** `Camping`
- **Varian:** Off-road & Camping
- **Deskripsi singkat:** Kombinasi perjalanan off-road dan bermalam di kawasan pegunungan dengan perlengkapan camping.
- **Cocok untuk:** keluarga, komunitas, perusahaan, dan kelompok pertemanan
- **Durasi:** 2 hari 1 malam
- **Kapasitas:** 2 sampai maksimal 4 pelanggan per unit untuk kenyamanan logistik
- **Kendaraan:** Land Rover Classic Long dengan rak atap
- **Harga numerik:** `2500000`
- **Harga tampil:** `Mulai dari Rp2.500.000 per unit`
- **Fasilitas utama:** kendaraan, driver, helper, BBM, tiket camping, tenda, matras, sleeping bag, makan tiga kali, dan air mineral
- **Aktivitas relevan:** camping; dokumentasi premium bersifat opsional
- **Titik temu:** fleksibel di Sukawana, Cikole, atau lokasi kesepakatan
- **Ketentuan:** peserta membawa pakaian hangat, obat pribadi, dan kebutuhan pribadi
- **Catatan publik:** lokasi camping, cuaca, kapasitas logistik, dan ketersediaan tempat dikonfirmasi untuk setiap tanggal perjalanan

### 6.8 Open Trip Adventure

- **Slug:** `open-trip-adventure`
- **Kategori filter:** `open-trip`
- **Label kategori:** `Open Trip`
- **Varian:** jadwal dan kuota tertentu
- **Deskripsi singkat:** Perjalanan gabungan dengan peserta lain pada jadwal dan susunan rute yang ditentukan WNB.
- **Cocok untuk:** individu, pasangan, dan kelompok kecil
- **Durasi:** 4–5 jam
- **Kapasitas:** minimal 4 peserta dan maksimal 6 pelanggan per unit
- **Kendaraan:** Land Rover Classic Long
- **Harga numerik:** `350000`
- **Harga tampil:** `Mulai dari Rp350.000 per peserta`
- **Fasilitas utama:** berbagi kendaraan, driver, helper, BBM, tiket kawasan, snack, dan air mineral
- **Aktivitas relevan:** aktivitas pendamping dapat ditetapkan pada setiap jadwal
- **Titik temu:** ditentukan pada pengumuman setiap keberangkatan
- **Ketentuan:** keberangkatan mengikuti pemenuhan kuota dan jadwal yang diumumkan
- **Catatan publik:** rute, aktivitas, dan titik temu ditetapkan pada setiap jadwal open trip

## 7. Pengalaman Khusus — Trail Exploration / Buka Jalur

Jangan memasukkannya ke dalam array paket reguler yang memiliki harga. Implementasikan sebagai data atau section khusus.

- **Judul:** `Trail Exploration — Buka Jalur`
- **Label:** `Pengalaman Khusus`
- **Deskripsi:** Perjalanan eksplorasi untuk mencoba atau membuka jalur dengan tingkat tantangan yang mengikuti hasil survei, kesiapan tim, dan kondisi medan.
- **Cocok untuk:** komunitas, kelompok berpengalaman, dan pelanggan dengan permintaan khusus
- **Durasi:** sekitar 6–8 jam atau menyesuaikan kondisi lapangan
- **Kapasitas awal:** mulai 4 peserta; susunan unit ditentukan setelah diskusi
- **Kendaraan:** Land Rover Classic sesuai kebutuhan perjalanan
- **Fasilitas inti:** kendaraan, driver, helper, BBM, P3K, winch, snatch block, tali penarik, dan perlengkapan pemulihan kendaraan
- **Harga:** jangan ditampilkan; gunakan `Disusun berdasarkan kebutuhan`
- **CTA:** `Diskusikan Perjalanan`
- **Tujuan CTA:** route booking yang sudah tersedia
- **Catatan keselamatan:** hanya dilaksanakan setelah pemeriksaan jalur, cuaca, kendaraan, kru, izin, dan perlengkapan keselamatan

Jangan membuat detail route publik untuk Buka Jalur dalam plan ini. Section ini berfungsi sebagai teaser dan pintu konsultasi.

## 8. Aktivitas Tambahan Publik

Gunakan informasi berikut hanya pada paket yang relevan. Jangan membuat halaman aktivitas terpisah.

### Paintball Simulation

- permainan taktis di area hutan pinus;
- cocok untuk Corporate Adventure dan jadwal Open Trip tertentu;
- durasi sekitar 60–90 menit;
- kapasitas minimal 10 peserta;
- fasilitas dapat mencakup seragam, goggle, marker, peluru, instruktur, dan air mineral;
- harga tidak perlu ditampilkan karena mitra dan ketersediaan harus dikonfirmasi.

### Kunjungan Destinasi Alam dan Sejarah

- kunjungan pendamping sebagai tambahan perjalanan off-road;
- relevan untuk Family Adventure dan Open Trip;
- durasi sekitar 60–90 menit;
- lokasi akhir dan tiket dikonfirmasi dalam perencanaan;
- jangan menjanjikan Goa Belanda atau mitra tertentu sebagai tujuan pasti.

### Camping

- akomodasi bermalam di kawasan hutan pinus;
- relevan untuk Adventure Camping;
- perlengkapan dapat mencakup tenda, matras, sleeping bag, lampu, akses toilet, dan api unggun sesuai aturan lokasi;
- lokasi dan ketersediaan dikonfirmasi untuk setiap tanggal.

### Dokumentasi Premium

- foto, video, dan kemungkinan drone sesuai kondisi;
- relevan untuk Corporate dan paket Perayaan;
- bersifat opsional;
- jangan menjanjikan drone jika cuaca atau aturan lokasi tidak memungkinkan;
- harga akhir dikonfirmasi berdasarkan kebutuhan.

### Dekorasi Perayaan

- dekorasi sederhana, kue, dan penataan momen;
- relevan untuk Birthday, Anniversary, dan Surprise Adventure;
- konsep, tulisan, ukuran kue, dan kebutuhan khusus dikonfirmasi sebelum pelaksanaan.

### Sajian Sunda

- makan komunal dengan menu khas Jawa Barat;
- relevan untuk Corporate dan Full Experience;
- menu, jumlah peserta, serta lokasi penyajian disesuaikan saat perencanaan.

## 9. Struktur Typed Local Data

Pelajari dahulu pola typed data yang sudah ada. Buat struktur feature yang konsisten, misalnya di bawah:

```text
client/src/features/packages/
```

Gunakan penamaan folder yang paling sesuai dengan repository (`packages` atau pola existing lain), tetapi jangan menduplikasi sumber data.

Tipe data minimal perlu mendukung:

```ts
type PackageCategory =
  | "keluarga"
  | "perayaan"
  | "perusahaan"
  | "camping"
  | "open-trip";

type TravelPackage = {
  slug: string;
  name: string;
  category: PackageCategory;
  categoryLabel: string;
  variant: string;
  shortDescription: string;
  longDescription: string;
  audience: string[];
  duration: string;
  capacity: string;
  vehicle: string;
  price: number;
  priceUnit: "per unit" | "per peserta";
  inclusions: string[];
  optionalActivities: string[];
  meetingPoint: string;
  specialTerms: string[];
  publicNotes: string[];
  image?: string;
};
```

Nama tipe dan field boleh disesuaikan dengan konvensi repository, tetapi harus tetap typed, reusable, dan menjadi satu sumber untuk list maupun detail.

Sediakan helper yang aman untuk:

- mendapatkan paket berdasarkan slug;
- memfilter berdasarkan kategori;
- memformat harga Rupiah dengan locale Indonesia;
- menghasilkan teks harga lengkap beserta satuannya.

Jangan menggunakan `any`. Jangan menyimpan JSX di dalam data.

## 10. Halaman Daftar Paket `/paket`

Ganti placeholder existing tanpa mengubah route path.

### 10.1 Hero

Hero minimal memuat:

- eyebrow: `Paket WNB`;
- heading utama yang menekankan bahwa pengalaman dapat dipilih sesuai ritme perjalanan;
- paragraf singkat mengenai Land Rover klasik, alam Bandung, pilihan perjalanan, dan penyesuaian kebutuhan;
- catatan harga yang transparan tetapi tidak defensif.

Gunakan copywriting alami dan persuasif. Jangan mengklaim `terbaik`, `nomor satu`, `paling aman`, atau klaim absolut lain.

### 10.2 Filter kategori

Sediakan filter sederhana:

1. `Semua`
2. `Keluarga`
3. `Perayaan`
4. `Perusahaan`
5. `Camping`
6. `Open Trip`

Ketentuan:

- state lokal sudah cukup;
- tidak perlu query API;
- tombol filter dapat digunakan dengan keyboard;
- state aktif dapat dikenali secara visual dan semantik;
- hasil kosong tidak diperlukan karena semua kategori memiliki data, tetapi struktur tidak boleh rusak jika array kosong;
- jangan menambahkan pencarian, filter harga, sorting kompleks, atau pagination.

### 10.3 Grid kartu paket

Setiap kartu minimal menampilkan:

- kategori;
- nama paket;
- deskripsi singkat;
- durasi;
- kapasitas ringkas;
- maksimal tiga fasilitas utama;
- harga `Mulai dari` beserta satuan;
- CTA `Lihat Detail` menuju `/paket/:slug`.

Ketentuan desain:

- kartu harus memiliki hierarchy yang mudah dipindai;
- harga dan satuannya tidak boleh terpisah secara membingungkan;
- tinggi kartu dalam satu baris sebaiknya terasa seimbang;
- CTA tetap mudah ditemukan;
- gunakan border, surface, spacing, radius, dan focus state dari design system;
- grid responsif satu kolom pada mobile dan bertambah secara wajar pada layar lebih besar;
- jangan mengandalkan hover sebagai satu-satunya cara menemukan informasi.

### 10.4 Section Buka Jalur

Letakkan setelah grid paket reguler sebagai section yang secara visual berbeda tetapi masih konsisten.

Tampilkan:

- label `Pengalaman Khusus`;
- judul `Trail Exploration — Buka Jalur`;
- deskripsi singkat;
- penekanan pada survei, kesiapan, dan diskusi kebutuhan;
- teks harga `Disusun berdasarkan kebutuhan`;
- CTA `Diskusikan Perjalanan` menuju booking.

### 10.5 Penutup halaman

Tambahkan section singkat mengenai proses memilih paket:

1. pilih pengalaman;
2. diskusikan peserta, tanggal, dan kebutuhan;
3. WNB menyusun rute, unit, aktivitas, dan harga akhir.

CTA penutup menggunakan `Rencanakan Perjalanan` menuju route booking existing.

## 11. Halaman Detail Paket `/paket/:slug`

Gunakan satu halaman detail dinamis untuk delapan paket reguler.

### 11.1 Penanganan slug

- baca parameter slug melalui pola React Router repository;
- cari paket dalam typed local data;
- jika ditemukan, render detail;
- jika tidak ditemukan, tampilkan state `Paket tidak ditemukan` dengan tombol kembali ke `/paket`;
- jangan menampilkan error mentah, slug mentah yang tidak aman, atau halaman kosong;
- jangan redirect diam-diam ke paket pertama.

### 11.2 Susunan detail

Detail paket minimal memiliki:

1. breadcrumb atau navigasi kembali ke Paket;
2. label kategori dan nama paket;
3. deskripsi pengalaman;
4. blok harga dan CTA utama;
5. ringkasan durasi, kapasitas, kendaraan, dan titik temu;
6. section `Yang Termasuk`;
7. section `Cocok untuk`;
8. section aktivitas atau penyesuaian yang tersedia;
9. section ketentuan dan catatan perjalanan;
10. CTA penutup menuju booking;
11. rekomendasi maksimal tiga paket lain yang relevan, tanpa menampilkan paket yang sedang dibuka.

### 11.3 CTA detail

Gunakan bahasa:

- CTA utama: `Rencanakan Paket Ini`;
- CTA sekunder: `Lihat Paket Lain`;
- CTA akhir: `Diskusikan Perjalanan` atau `Rencanakan Perjalanan`.

CTA utama menuju booking existing. Jika route booking mendukung state atau query yang sudah ada, paket dapat diteruskan secara aman. Jika belum ada dukungan, jangan mengubah sistem booking dalam plan ini; cukup arahkan ke `/booking`.

## 12. Visual dan Aset

Gunakan aset lokal yang telah ada bila cocok secara visual. Sebelum memilih gambar, baca `docs/assets/image-sources.md` dan struktur aset repository.

Ketentuan:

1. Foto stock hanya berfungsi sebagai ilustrasi suasana.
2. Jangan menyebut foto stock sebagai dokumentasi paket WNB.
3. Jangan memberi foto yang sama makna seolah-olah merupakan kendaraan atau rute spesifik yang telah diverifikasi.
4. Jika aset tidak cukup untuk delapan paket, gunakan treatment visual editorial, gradient, pattern, typography, atau pemakaian ulang aset secara jujur dan terkontrol.
5. Jangan mengunduh foto baru dari internet.
6. Jangan menggunakan remote URL sebagai sumber gambar produksi.
7. Pertahankan nuansa monokrom, rugged, tangguh, berkarakter, dan premium-terjangkau.
8. Pastikan teks tetap terbaca pada gambar atau background dekoratif.
9. Gunakan alt text berdasarkan makna visual, bukan nama file.
10. Decorative image menggunakan alt kosong.

Jika menggunakan aset pada kartu, data boleh menyimpan path aset. Jangan menyimpan komponen React di dalam data.

## 13. Responsivitas dan Aksesibilitas

Pastikan:

- halaman dapat digunakan mulai viewport mobile kecil;
- tidak ada horizontal overflow;
- harga panjang tetap terbaca dan tidak terpotong;
- filter dapat bergeser atau membungkus tanpa merusak layout;
- touch target memadai;
- heading hierarchy hanya memiliki satu `h1` per halaman;
- section memakai heading berurutan;
- list fasilitas menggunakan elemen list semantik;
- focus state jelas;
- kontras mengikuti design system;
- link dan button digunakan sesuai fungsi;
- icon dekoratif diberi `aria-hidden`;
- state filter aktif mempunyai indikator selain warna bila memungkinkan;
- reduced motion dihormati bila ada animasi;
- detail paket tetap mudah dibaca tanpa gambar.

## 14. Routing dan Integrasi

Periksa route yang sudah tersedia sebelum membuat file baru. Pertahankan:

```text
/paket
/paket/:slug
```

Ketentuan:

1. Jangan mengganti path menjadi Bahasa Inggris.
2. Jangan membuat satu file halaman manual untuk setiap paket.
3. Gunakan route detail dinamis.
4. Pertahankan ScrollToTop yang sudah ada.
5. Gunakan komponen link internal repository, bukan `window.location`.
6. Pastikan navigasi browser back/forward tetap bekerja.
7. Jangan memodifikasi route Rute, Galeri, About, Home, atau Booking kecuali import/routing minimum yang benar-benar dibutuhkan untuk halaman Paket.

## 15. Dokumentasi Repository

Perbarui dokumentasi yang benar-benar relevan, terutama:

```text
docs/context/current-state.md
docs/context/business-facts.md
```

Ketentuan dokumentasi:

1. Catat baseline Plan 009 sebagai `d7c6c1631bdaf73357aa5a68bbcddef6f4daad73`.
2. Catat bahwa Plan 008 dan koreksi logo About telah selesai.
3. Catat Plan 009 sedang diimplementasikan pada working tree.
4. Setelah implementasi, status `/paket` dan `/paket/:slug` menjadi implemented, menunggu pengujian manual dan SHA pengguna.
5. Catat bahwa paket menggunakan typed local data berdasarkan fakta publik yang disediakan dalam Plan 009.
6. Jangan menyalin seluruh data paket ke banyak dokumen jika hanya menciptakan duplikasi.
7. Jangan menulis bahwa website terhubung langsung ke Google Drive atau Google Sheets.
8. Jangan menyatakan data rute, Galeri, Booking, atau nomor WhatsApp sudah final.

Jika dokumentasi memiliki status lama yang mengatakan koreksi Plan 008 masih berlangsung, rapikan status tersebut sebagai bagian dari sinkronisasi Plan 009.

## 16. File dan Organisasi yang Diperkirakan

Nama aktual harus mengikuti struktur repository setelah diperiksa. Perubahan kemungkinan mencakup:

```text
client/src/features/packages/
client/src/pages/PackageListPage.tsx atau halaman existing yang setara
client/src/pages/PackageDetailPage.tsx atau halaman existing yang setara
client/src/routes/
docs/context/current-state.md
docs/context/business-facts.md
```

Komponen reusable yang mungkin diperlukan:

- `PackageCard`;
- `PackageFilter`;
- `PackagePrice`;
- `PackageFacts`;
- `SpecialExperienceSection`;
- `RelatedPackages`.

Jangan membuat abstraksi berlebihan. Komponen dibuat jika meningkatkan keterbacaan atau digunakan lebih dari sekali.

## 17. Kriteria Penerimaan

Plan 009 dianggap selesai hanya jika seluruh kondisi berikut terpenuhi:

### Data dan konten

- delapan paket reguler tersedia dalam satu typed local data source;
- semua nama, harga, satuan, durasi, kapasitas, dan fasilitas sesuai plan;
- Buka Jalur tidak tampil sebagai paket reguler dan tidak memiliki harga Rp0;
- informasi internal tidak tampil di UI;
- bahasa publik tidak memuat status verifikasi atau kode internal;
- harga selalu disertai `Mulai dari` dan satuan.

### Halaman daftar

- placeholder `/paket` telah diganti;
- enam filter bekerja berdasarkan data lokal;
- delapan kartu dapat ditampilkan dan difilter;
- kartu menuju slug yang benar;
- Buka Jalur tampil sebagai section khusus;
- CTA penutup menuju booking existing.

### Halaman detail

- placeholder `/paket/:slug` telah diganti;
- delapan slug valid dapat menampilkan paket masing-masing;
- slug tidak valid menampilkan state yang jelas;
- detail memuat harga, durasi, kapasitas, kendaraan, fasilitas, target pelanggan, ketentuan, dan CTA;
- rekomendasi paket lain tidak menampilkan paket aktif;
- tidak ada hardcoded switch besar yang menduplikasi seluruh data.

### Visual dan UX

- konsisten dengan design system WNB;
- responsif pada mobile, tablet, dan desktop secara statis;
- tidak ada informasi penting yang hanya muncul saat hover;
- focus state terlihat;
- tidak ada remote image baru;
- logo resmi dan navigasi global tidak rusak.

### Scope

- backend tidak berubah;
- halaman Rute, Galeri, dan Booking tidak diimplementasikan ulang;
- tidak ada dependency baru;
- tidak ada commit atau push;
- tidak ada build, test, lint, typecheck, server, atau preview yang dijalankan.

## 18. Urutan Eksekusi yang Disarankan

1. Baca struktur repository, route, halaman placeholder, design system, common components, dan dokumentasi.
2. Tentukan lokasi feature Paket yang konsisten.
3. Buat tipe, typed local data, helper slug, filter, dan format harga.
4. Implementasikan komponen kartu dan filter.
5. Implementasikan halaman daftar `/paket`.
6. Implementasikan section Buka Jalur.
7. Implementasikan halaman detail dinamis `/paket/:slug`.
8. Implementasikan state paket tidak ditemukan dan paket terkait.
9. Periksa semua link internal, heading, alt text, focus state, dan responsive classes secara statis.
10. Perbarui dokumentasi yang relevan.
11. Periksa `git diff` secara read-only untuk memastikan scope.
12. Laporkan hasil tanpa menjalankan perintah validasi atau melakukan commit.

## 19. Format Laporan Akhir Executor

Setelah pekerjaan selesai, berikan laporan ringkas dengan struktur:

```text
PLAN 009 SELESAI DI WORKING TREE

File dibuat:
- ...

File diubah:
- ...

Hasil:
- Jumlah paket reguler: 8
- Pengalaman khusus: Trail Exploration — Buka Jalur
- Filter kategori: ...
- Slug detail yang tersedia: ...
- Penanganan slug tidak valid: ...
- CTA booking: ...
- Aset visual: ...
- Dokumentasi: ...

Pemeriksaan statis:
- Informasi internal tidak tampil: ya/tidak
- Harga dan satuan konsisten: ya/tidak
- Remote image baru: ya/tidak
- Perubahan di luar scope: ya/tidak

Tidak dijalankan:
- build
- test
- lint
- typecheck
- dev server/preview
- commit/push

Catatan untuk pengujian manual pengguna:
- ...
```

Jangan menyatakan build atau pengujian berhasil karena perintah tersebut memang tidak boleh dijalankan dalam workflow ini.

## 20. Batas Akhir

Plan ini mengimplementasikan data dan pengalaman frontend halaman Paket. Plan ini tidak menetapkan ulang kebenaran komersial di luar fakta yang diberikan, tidak mengimplementasikan detail Rute, tidak mengaktifkan transaksi atau pembayaran, dan tidak menghubungkan website secara langsung ke Google Drive.

Jika menemukan masalah kecil yang masih dapat diselesaikan tanpa keluar dari scope, selesaikan langsung tanpa meminta konfirmasi. Jika menemukan konflik yang benar-benar membuat implementasi tidak aman, jangan mengarang solusi; pertahankan working tree tetap terkontrol dan jelaskan konflik tersebut pada laporan akhir.
