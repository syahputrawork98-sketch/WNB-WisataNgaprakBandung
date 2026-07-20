# PLAN 007 — Penyelarasan Homepage dan Implementasi Halaman Tentang Kami WNB

## 1. Identitas Pekerjaan

- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch kerja:** branch aktif pengguna
- **Baseline yang telah diverifikasi:** `eaa9a79446ec84edd05578cba392a1fd20506bce`
- **Area utama:** aplikasi frontend pada folder `client`
- **Jenis pekerjaan:** penyelarasan narasi homepage dan implementasi penuh halaman `/about`
- **Status instruksi:** siap dieksekusi

## 2. Peran Executor

Laksanakan perubahan langsung pada working tree repository yang sedang terbuka. Pelajari struktur kode yang sudah ada terlebih dahulu, kemudian implementasikan pekerjaan dengan mengikuti pola komponen, sistem desain, penamaan, routing, dan konvensi TypeScript yang telah digunakan repository.

Instruksi ini sudah memuat seluruh fakta dan narasi yang diperlukan. **Jangan mencoba membuka, mengakses, mencari, atau meminta akses ke Google Drive. Jangan menunggu dokumen eksternal. Jangan melakukan riset internet untuk mengganti fakta WNB.** Jika diperlukan improvisasi copy, improvisasi hanya boleh memperhalus hubungan antarkalimat tanpa mengubah fakta, janji brand, atau batas klaim yang tercantum di file ini.

## 3. Aturan Eksekusi

1. Kerjakan hanya ruang lingkup Plan 007.
2. Jangan mengubah backend.
3. Jangan membangun halaman Paket, Rute, Galeri, atau Booking pada plan ini.
4. Jangan merombak arsitektur, tema visual, navigasi, routing, atau sistem desain yang sudah berjalan apabila tidak dibutuhkan.
5. Pertahankan tampilan dark, editorial, klasik, tangguh, hangat, dan responsif yang sudah digunakan homepage.
6. Gunakan komponen umum yang sudah ada seperti `Container`, `SectionHeading`, `LinkButton`, dan komponen lain yang relevan.
7. Buat halaman About secara modular; jangan menumpuk seluruh implementasi dalam satu komponen besar.
8. Gunakan `ROUTE_PATHS` untuk internal link. Jangan menulis path internal secara manual jika konstanta sudah tersedia.
9. Jangan menambahkan dependency baru kecuali benar-benar tidak dapat dihindari. Untuk plan ini seharusnya dependency baru tidak diperlukan.
10. Jangan menampilkan informasi internal seperti SOP teknis kendaraan, daftar perlengkapan recovery, detail P3K, alur penanganan keluhan, kompensasi, atau batas kewenangan kru.
11. Jangan membuat klaim absolut tentang keselamatan, keberangkatan, ketersediaan rute, kondisi medan, atau pemenuhan seluruh permintaan pelanggan.
12. Jangan menjalankan build, test, lint, typecheck, server development, atau preview.
13. Jangan melakukan commit, push, pull request, merge, atau tindakan GitHub lainnya.
14. Setelah perubahan selesai, cukup berikan ringkasan file yang dibuat/diubah dan catatan pemeriksaan statis yang dilakukan.

## 4. Kondisi Repository Saat Ini

Pada baseline yang diverifikasi:

- `client/src/pages/HomePage/HomePage.tsx` sudah menyusun homepage secara modular melalui `HeroSection`, `ManifestoSection`, `ExploreSection`, `VehicleSection`, `ExperienceSection`, dan `FinalCtaSection`.
- Komponen homepage berada di `client/src/features/home/components/`.
- `client/src/pages/AboutPage/AboutPage.tsx` masih menggunakan `PagePlaceholder` dengan teks bahwa profil dan informasi WNB belum dikonfirmasi.
- Halaman `/about` harus menggantikan placeholder tersebut dengan halaman publik yang lengkap.
- Homepage sudah cukup baik secara visual. Perubahannya harus terarah pada sinkronisasi pesan dan penguatan hubungan menuju halaman About, bukan desain ulang menyeluruh.

## 5. Sumber Kebenaran Konten untuk Plan Ini

Gunakan hierarki pesan berikut secara konsisten.

### 5.1 Tagline resmi utama

> Rasakan Bandung dari Jalur yang Berbeda.

Tagline ini merupakan headline utama homepage. Tanda titik dapat dihilangkan jika lebih sesuai dengan tampilan heading.

### 5.2 Esensi brand

> Petualangan yang menjadi cerita.

Esensi brand merupakan dasar emosional komunikasi. Esensi ini tidak perlu dipaksakan menjadi headline di semua bagian.

### 5.3 Pesan pelanggan berulang

> Mulai dari perjalanan pertama. Kembali untuk tantangan berikutnya.

### 5.4 Pesan berkarakter

> Land Rover klasik, jalur yang berbeda, dan petualangan yang menjadi cerita.

### 5.5 Rumusan publik janji brand

> Petualangan Land Rover klasik yang dipersiapkan untuk menjadi cerita.

### 5.6 Janji brand lengkap

WNB menghadirkan petualangan bersama Land Rover klasik yang berkarakter, dipersiapkan secara bertanggung jawab, disesuaikan dengan peserta, dan dirancang menjadi pengalaman yang berkesan.

### 5.7 Empat unsur janji brand

1. **Berkarakter** — pengalaman mempunyai identitas kuat melalui Land Rover klasik, alam, jalur, suasana petualangan, dan pelayanan yang hangat.
2. **Dipersiapkan secara Bertanggung Jawab** — perjalanan dipertimbangkan berdasarkan kendaraan, kru, cuaca, jalur, perlengkapan, perizinan, kebutuhan peserta, dan keputusan operasional.
3. **Disesuaikan dengan Peserta** — tingkat tantangan mempertimbangkan pengalaman, jumlah dan karakter peserta, tujuan kegiatan, kondisi rute, cuaca, kendaraan, serta keputusan tim lapangan.
4. **Dirancang Menjadi Pengalaman Berkesan** — perjalanan menghadirkan petualangan, interaksi, kebersamaan, adrenalin, dan cerita; fasilitas dokumentasi hanya berlaku sesuai paket.

## 6. Fakta Brand yang Boleh Dipublikasikan

- Nama brand: Wisata Ngaprak Bandung atau WNB.
- WNB berawal dari hobi terhadap Land Rover klasik, off-road, eksplorasi alam, dan kebersamaan komunitas.
- Kegiatan WNB dikenal dan tumbuh dalam lingkungan komunitas sejak 2019.
- Aktivitas sempat melambat akibat pandemi dan kondisi ekonomi.
- WNB dikembangkan kembali pada 2026 menjadi layanan yang lebih tertata dan bertanggung jawab.
- Makna “Ngaprak” berkaitan dengan bergerak, menyusuri, menjelajah, dan menemukan tempat melalui jalur yang tidak selalu menjadi jalur wisata biasa.
- Bagi WNB, perjalanan dan proses menjelajah sama pentingnya dengan tempat tujuan.
- Land Rover klasik bukan sekadar pajangan atau alat transportasi; kendaraan ini merupakan inti karakter dan sensasi pengalaman WNB.
- WNB dapat melayani karakter peserta yang beragam, mulai dari pemula sampai peserta yang ingin kembali untuk tingkat tantangan berikutnya.
- Tingkat tantangan dapat dibicarakan dan disesuaikan, tetapi keputusan akhir tetap mengikuti kondisi dan kelayakan operasional.
- Kantor Pusat Administrasi dan Garasi Unit Cadangan berada di **Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi**.
- Alamat tersebut bukan titik temu utama semua perjalanan. Titik temu bersifat fleksibel dan mengikuti kesepakatan pemesanan.

## 7. Informasi yang Tidak Boleh Dipublikasikan atau Dikarang

- Jangan menyebut nama pendiri pada Plan 007.
- Jangan mengarang status badan hukum, sertifikasi, jumlah kru, pengalaman kru dalam tahun, jumlah perjalanan, jumlah pelanggan, jumlah unit kendaraan, penghargaan, kemitraan, atau statistik apa pun.
- Jangan menulis bahwa WNB “aman sepenuhnya”, “tanpa risiko”, “pasti berangkat”, “selalu tersedia”, “durasi selalu tepat”, “rute selalu sama”, “paling ekstrem”, “paling murah”, atau “cocok untuk semua orang”.
- Jangan menjanjikan dokumentasi, makanan, merchandise, aktivitas tambahan, atau fasilitas tertentu sebagai standar semua perjalanan.
- Jangan menyebut kantor Cimahi sebagai titik kumpul wajib.
- Jangan menampilkan detail teknis pemeriksaan kendaraan dan prosedur lapangan sebagai materi pemasaran.
- Jangan menambah nomor WhatsApp, harga, kapasitas kendaraan, daftar rute, atau fasilitas paket pada halaman About.

## 8. Pekerjaan A — Penyelarasan Homepage

Perbarui hanya bagian yang diperlukan. Pertahankan struktur dan kekuatan visual homepage saat ini.

### 8.1 Hero homepage

Pada `client/src/features/home/components/HeroSection.tsx`:

- Pertahankan eyebrow `Land Rover Classic Adventure — Bandung` jika masih cocok dengan layout.
- Ganti headline utama menjadi:

> Rasakan Bandung dari Jalur yang Berbeda.

- Gunakan subheadline berikut sebagai acuan utama:

> Jelajahi alam Bandung bersama Land Rover klasik melalui petualangan yang dapat disesuaikan, dari perjalanan pertama hingga tantangan berikutnya.

- Ganti label tombol utama menjadi **Pilih Petualangan** dan tetap arahkan ke halaman Paket.
- Ganti label tombol kedua menjadi **Jelajahi Rute** dan tetap arahkan ke halaman Rute.
- Pertahankan struktur, background, overlay, aksesibilitas, dan perilaku responsif yang sudah ada.

### 8.2 Manifesto/Cerita WNB

Pada `client/src/features/home/components/ManifestoSection.tsx`:

- Pertahankan komposisi visual dan narasi ringkas mengenai WNB sejak 2019, makna Ngaprak, dan Land Rover klasik.
- Selaraskan judul atau copy bila diperlukan dengan pesan berkarakter dan esensi brand.
- Hindari pengulangan headline hero secara utuh.
- Tambahkan CTA yang jelas menuju halaman About dengan label **Baca Cerita WNB** atau **Kenali WNB**.
- Gunakan `LinkButton` dan `ROUTE_PATHS.about` jika pola tersebut paling sesuai dengan struktur kode.
- CTA harus menjadi penghubung alami dari cerita ringkas homepage menuju penjelasan lengkap di halaman About.

### 8.3 Experience section

Pada `client/src/features/home/components/ExperienceSection.tsx`:

- Ubah eyebrow dari `Standar Kami` menjadi **Janji Pengalaman**.
- Judul dapat tetap **Standar Pengalaman WNB** atau disesuaikan secara ringan jika hasil visual lebih baik.
- Gunakan deskripsi:

> Petualangan Land Rover klasik yang dipersiapkan secara bertanggung jawab, disesuaikan dengan peserta, dan dirancang menjadi cerita yang berkesan.

- Selaraskan empat kartu menjadi:

  1. **Petualangan Berkarakter**  
     Deskripsi: Land Rover klasik, alam, jalur, dan suasana hangat menjadi identitas pengalaman WNB.

  2. **Dipersiapkan secara Bertanggung Jawab**  
     Deskripsi: Perjalanan dipertimbangkan berdasarkan kesiapan operasional dan kondisi yang dihadapi.

  3. **Disesuaikan dengan Peserta**  
     Deskripsi: Tingkat petualangan mempertimbangkan pengalaman, kebutuhan, dan karakter peserta.

  4. **Dirancang Menjadi Cerita**  
     Deskripsi: Adrenalin, kebersamaan, dan perjalanan dirangkai menjadi pengalaman yang berkesan.

- Pilih ikon Lucide yang sesuai dari dependency yang sudah tersedia.
- Jangan menguraikan daftar pemeriksaan atau SOP internal dalam kartu.

### 8.4 Final CTA homepage

Pada `client/src/features/home/components/FinalCtaSection.tsx`:

- Pertahankan struktur visual saat ini.
- Perkuat copy agar selaras dengan pesan pemula dan pelanggan berulang.
- Gunakan pesan berikut sebagai acuan:

> Mulai dari perjalanan pertama. Kembali untuk tantangan berikutnya.

- Narasi pendukung harus menjelaskan bahwa pilihan pengalaman disesuaikan dengan peserta dan mengikuti kondisi perjalanan.
- Pertahankan CTA perencanaan perjalanan dan CTA menuju About selama keduanya tetap sesuai dengan route yang tersedia.
- Jangan memakai CTA `Pesan Sekarang` apabila sistem belum benar-benar mendukung pemesanan langsung.

### 8.5 Bagian homepage lainnya

- Jangan mengubah `ExploreSection` dan `VehicleSection` kecuali terdapat penyesuaian kecil yang benar-benar diperlukan agar narasinya konsisten.
- Jangan menghapus konten yang telah berfungsi baik.
- Jangan membuat section homepage baru hanya untuk mengulang konten About.

## 9. Pekerjaan B — Implementasi Penuh Halaman Tentang Kami

Ganti placeholder pada `client/src/pages/AboutPage/AboutPage.tsx` dengan halaman About yang lengkap dan modular.

### 9.1 Struktur kode yang diharapkan

Gunakan organisasi yang konsisten dengan feature homepage. Struktur berikut merupakan rekomendasi, bukan kewajiban nama literal apabila repository mempunyai pola yang lebih tepat:

```text
client/src/features/about/
├── aboutContent.ts
└── components/
    ├── AboutHeroSection.tsx
    ├── OriginStorySection.tsx
    ├── JourneyTimelineSection.tsx
    ├── NgaprakMeaningSection.tsx
    ├── ClassicLandRoverSection.tsx
    ├── BrandValuesSection.tsx
    ├── BrandPromiseSection.tsx
    ├── AdventureForEveryoneSection.tsx
    ├── OperationalBaseSection.tsx
    └── AboutCtaSection.tsx
```

Gabungkan section yang sangat kecil jika itu menghasilkan kode lebih bersih. Namun, jangan membuat satu file halaman yang sangat panjang dan sulit dipelihara. Data berulang seperti timeline, nilai, atau kartu janji brand sebaiknya disimpan sebagai typed content array.

### 9.2 Section 1 — Hero About

- Eyebrow: **Tentang WNB**
- Headline:

> Berawal dari Hobi, Tumbuh Menjadi Petualangan.

- Narasi utama:

> WNB lahir dari kecintaan terhadap Land Rover klasik, off-road, alam, dan kebersamaan komunitas. Pengalaman tersebut kini dikembangkan agar lebih banyak orang dapat menjelajahi sisi berbeda Bandung melalui perjalanan yang berkarakter, terarah, dan berkesan.

- Gunakan komposisi visual yang berhubungan dengan homepage, tetapi jangan menyalin hero homepage secara mentah.
- Pastikan hanya ada satu `h1` pada halaman About.

### 9.3 Section 2 — Cerita awal WNB

Bangun narasi manusiawi dan tidak terlalu korporat dari fakta berikut:

- WNB berawal dari hobi terhadap Land Rover klasik, off-road, dan eksplorasi alam.
- Hobi tersebut tumbuh melalui perjalanan dan kebersamaan komunitas.
- Sejak 2019, kegiatan itu mulai dikenal sebagai pengalaman yang dapat dibagikan kepada lebih banyak orang.
- WNB bukan lahir dari gagasan kendaraan wisata biasa, tetapi dari pengalaman menggunakan Land Rover klasik untuk benar-benar menjelajah.

Gunakan judul yang singkat, misalnya **Dari Hobi yang Terus Bergerak**. Jangan menyebut nama pendiri.

### 9.4 Section 3 — Perjalanan perkembangan WNB

Tampilkan timeline ringkas dan jujur:

- **Sebelum 2019 — Berawal dari Hobi**: kecintaan pada Land Rover klasik, off-road, alam, dan perjalanan komunitas menjadi fondasi awal.
- **2019 — Mulai Dikenal sebagai WNB**: pengalaman ngaprak mulai dibagikan kepada kelompok yang lebih luas.
- **Masa Perlambatan — Menjaga Semangat**: aktivitas melambat akibat pandemi dan kondisi ekonomi; hindari dramatisasi atau klaim kegiatan tetap berjalan tanpa bukti.
- **2026 — Dikembangkan Kembali**: WNB ditata kembali sebagai layanan petualangan yang lebih terarah, bertanggung jawab, dan siap berkembang.

Gunakan gaya timeline yang responsif, mudah dipindai, dan sesuai sistem desain. Timeline harus tetap terbaca tanpa bergantung pada animasi.

### 9.5 Section 4 — Makna Ngaprak

Jelaskan bahwa “Ngaprak” berkaitan dengan bergerak, menyusuri, menjelajah, dan menemukan tempat melalui jalur yang tidak selalu menjadi jalur wisata biasa. Tekankan bahwa perjalanan bukan sekadar perpindahan menuju tujuan; proses, medan, interaksi, dan cerita sepanjang jalan merupakan bagian dari pengalaman.

Copy boleh dipoles, tetapi jangan menyatakan definisi linguistik yang terlalu pasti atau mengarang kutipan bahasa Sunda.

### 9.6 Section 5 — Land Rover klasik sebagai karakter

Jelaskan bahwa:

- Land Rover klasik merupakan inti pengalaman WNB.
- Kendaraan bukan sekadar pajangan atau alat transportasi.
- Bentuk, karakter, kemampuan menjelajah, dan sensasi perjalanannya membantu membentuk identitas petualangan WNB.
- Jangan mengklaim spesifikasi, tahun produksi, jumlah armada, atau kemampuan teknis yang tidak tersedia dalam instruksi.

Gunakan pesan berkarakter sebagai acuan:

> Land Rover klasik, jalur yang berbeda, dan petualangan yang menjadi cerita.

### 9.7 Section 6 — Nilai dan cara WNB bekerja

Tampilkan empat nilai publik dalam bentuk kartu atau susunan visual yang seimbang:

1. **Tanggung Jawab** — kesiapan dan kelayakan perjalanan lebih penting daripada memaksakan keberangkatan.
2. **Keaslian** — pengalaman dibangun dari karakter Land Rover klasik, alam, jalur, dan sejarah WNB yang nyata.
3. **Fleksibilitas Terarah** — perjalanan dapat disesuaikan, tetapi tetap mengikuti kondisi dan keputusan operasional.
4. **Kehangatan** — komunikasi dan pelayanan harus ramah, jelas, tidak kaku, dan tidak meremehkan pemula.

Hindari istilah abstrak tanpa penjelasan. Gunakan kalimat singkat dan konkret.

### 9.8 Section 7 — Janji pengalaman WNB

Tampilkan rumusan publik:

> Petualangan Land Rover klasik yang dipersiapkan untuk menjadi cerita.

Kemudian tampilkan empat unsur janji brand:

- **Berkarakter**
- **Dipersiapkan secara Bertanggung Jawab**
- **Disesuaikan dengan Peserta**
- **Dirancang Menjadi Pengalaman Berkesan**

Gunakan penjelasan publik yang sudah ditetapkan dalam Bagian 5.7 file ini. Jangan mengubah section menjadi halaman SOP. Hindari jaminan mutlak.

### 9.9 Section 8 — Dari perjalanan pertama hingga tantangan berikutnya

Section ini harus membuat pemula merasa diterima tanpa menghilangkan daya tarik bagi peserta berulang.

Pesan pemula:

> Baru pertama kali mencoba off-road? Mulai dari petualangan yang sesuai dengan kesiapanmu dan nikmati karakter Land Rover klasik di jalur alam Bandung.

Pesan pelanggan berulang:

> Sudah pernah ngaprak bersama WNB? Kembali untuk mencoba rute, musim, durasi, dan tingkat tantangan yang berbeda.

Gunakan pesan penghubung:

> Mulai dari perjalanan pertama. Kembali untuk tantangan berikutnya.

Jelaskan bahwa peserta tidak harus memiliki pengalaman off-road, tingkat tantangan dapat dibicarakan, dan tim membantu memilih pengalaman yang relevan. Tambahkan bahwa keputusan akhir mengikuti kondisi dan kelayakan operasional.

Jangan memakai frasa `untuk semua orang` tanpa batasan.

### 9.10 Section 9 — Basis administrasi dan garasi

Tampilkan informasi berikut secara proporsional, bukan sebagai daya tarik utama:

- Label: **Kantor Pusat Administrasi dan Garasi Unit Cadangan**
- Alamat: **Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi**
- Catatan: titik temu perjalanan bersifat fleksibel dan ditentukan berdasarkan kesepakatan pemesanan.

Jangan menyebut alamat tersebut sebagai titik temu utama atau lokasi keberangkatan wajib. Jangan menambahkan peta, embed eksternal, atau koordinat yang belum diberikan.

### 9.11 Section 10 — Penutup dan CTA

Gunakan pesan penutup:

> Bagi WNB, perjalanan terbaik bukan hanya tentang tempat yang dituju, tetapi cerita yang terjadi sepanjang jalan.

Sediakan dua CTA:

- **Pilih Petualangan** atau **Lihat Paket** menuju halaman Paket.
- **Rencanakan Perjalanan** menuju halaman Booking/perencanaan yang sudah tersedia.

Jika sistem booking belum mendukung transaksi langsung, jangan memakai label **Pesan Sekarang**.

## 10. Arah Visual dan UX Halaman About

- Ikuti token warna, tipografi, radius, border, spacing, dan breakpoint yang sudah digunakan.
- Pertahankan karakter dark editorial dan nuansa petualangan klasik.
- Gunakan variasi background antarseksi secara terukur agar halaman panjang tetap mempunyai ritme.
- Gunakan whitespace yang cukup; jangan membuat semua section menjadi kartu.
- Timeline, nilai, dan janji brand harus dapat dipindai pada mobile maupun desktop.
- Pastikan urutan konten tetap logis pada viewport kecil.
- Hindari animasi berat dan carousel yang tidak diperlukan.
- Jangan menggunakan angka besar dekoratif yang dapat disalahartikan sebagai statistik bisnis.
- Gunakan ikon dari library yang sudah terpasang jika membantu, tetapi jangan berlebihan.
- Jika memakai gambar yang sudah tersedia di repository, pastikan alt text faktual dan tidak menyatakan bahwa gambar ilustrasi merupakan dokumentasi WNB.
- Jangan mengambil gambar baru dari internet pada plan ini.
- Jika tidak tersedia aset yang tepat, buat komposisi yang tetap kuat tanpa memaksakan gambar baru atau gunakan aset ilustrasi repository secara jujur.

## 11. Aksesibilitas dan Kualitas Implementasi

- Gunakan landmark dan elemen HTML semantik.
- Pastikan hierarchy heading benar: satu `h1`, kemudian `h2`, dan `h3` sesuai kebutuhan.
- Setiap section utama yang memakai `aria-labelledby` harus memiliki ID unik yang benar-benar ada.
- Link dan tombol harus mempunyai label yang jelas.
- Ikon dekoratif diberi `aria-hidden="true"`.
- Gambar informatif memiliki alt text yang tepat; gambar dekoratif menggunakan alt kosong.
- Pertahankan kontras teks sesuai tema.
- Hindari duplikasi konstanta konten apabila bisa disimpan di `aboutContent.ts`.
- Gunakan typing yang wajar dan jangan memakai `any`.
- Pastikan import path dan kapitalisasi nama file konsisten.

## 12. Dokumentasi Repository

Setelah implementasi halaman selesai, pelajari lokasi dan format dokumentasi yang benar-benar ada di repository. Perbarui dokumentasi yang relevan dengan perubahan ini, tanpa mengarang struktur file.

Minimal dokumentasikan:

- Halaman About tidak lagi placeholder.
- Struktur dan tujuan utama halaman About.
- Penyelarasan headline, CTA, janji pengalaman, dan narasi homepage.
- Fakta bisnis publik yang digunakan.
- Informasi yang tetap ditahan karena belum dikonfirmasi atau tidak tepat untuk web publik.
- Baseline pekerjaan Plan 007 dan status implementasinya.

Jika repository mempunyai dokumen seperti current state, page map, business facts, design notes, atau indeks dokumentasi, perbarui file-file yang benar-benar relevan sesuai pola yang sudah ada. Jika diperlukan, buat satu dokumen desain About baru dengan penamaan yang konsisten. Jangan membuat banyak dokumen duplikat.

Catatan self-reference: jangan mencoba menulis SHA commit hasil Plan 007 karena commit belum dibuat. Catat baseline `eaa9a79446ec84edd05578cba392a1fd20506bce` dan tandai hasil Plan 007 sebagai perubahan working tree yang belum memiliki SHA sampai pengguna melakukan commit.

## 13. Pemeriksaan Statis Wajib Sebelum Berhenti

Tanpa menjalankan build, test, lint, typecheck, server, atau preview:

1. Baca ulang semua file yang diubah.
2. Periksa import/export dan nama komponen secara manual.
3. Pastikan `AboutPage` mengimpor komponen dari path yang benar.
4. Pastikan seluruh target internal menggunakan konstanta route yang tersedia.
5. Pastikan tidak ada `PagePlaceholder` tersisa pada halaman About.
6. Pastikan tidak ada instruksi, placeholder, `TBD`, atau bahasa internal yang tampil kepada pengguna.
7. Pastikan tidak ada fakta baru yang dikarang.
8. Cari klaim terlarang seperti `aman sepenuhnya`, `tanpa risiko`, `pasti berangkat`, `selalu tersedia`, `paling ekstrem`, atau `paling murah` pada konten publik yang dibuat.
9. Pastikan alamat Cimahi diberi konteks sebagai kantor administrasi dan garasi unit cadangan, bukan titik temu wajib.
10. Pastikan tampilan yang dirancang tetap masuk akal pada mobile, tablet, dan desktop berdasarkan class responsif yang digunakan.

## 14. Kriteria Selesai

Plan 007 dianggap selesai apabila:

- Homepage menggunakan tagline resmi **Rasakan Bandung dari Jalur yang Berbeda**.
- Hero homepage mempunyai CTA **Pilih Petualangan** dan **Jelajahi Rute**.
- Manifesto homepage mempunyai penghubung yang jelas ke halaman About.
- Experience section mencerminkan empat unsur janji brand terbaru.
- Final CTA mengakomodasi perjalanan pertama dan tantangan berikutnya tanpa klaim berlebihan.
- `/about` bukan lagi placeholder dan sudah menjadi halaman publik yang lengkap.
- Halaman About mencakup cerita awal, perjalanan perkembangan, makna Ngaprak, karakter Land Rover klasik, nilai WNB, janji pengalaman, rentang karakter peserta, basis administrasi, dan CTA.
- Konten mengikuti fakta serta hierarki pesan di instruksi ini.
- Detail operasional internal dan fakta yang belum dikonfirmasi tidak dipublikasikan.
- Implementasi modular, responsif, semantik, dan konsisten dengan desain repository.
- Dokumentasi repository yang relevan telah diperbarui.
- Tidak ada dependency baru yang tidak diperlukan.
- Tidak ada build, test, lint, typecheck, commit, atau push yang dijalankan.

## 15. Format Laporan Akhir Executor

Setelah selesai, laporkan secara ringkas:

1. Daftar file yang dibuat.
2. Daftar file yang diubah.
3. Ringkasan perubahan homepage.
4. Ringkasan struktur halaman About.
5. Dokumentasi yang diperbarui.
6. Hasil pemeriksaan statis manual.
7. Konfirmasi bahwa tidak ada build, test, lint, typecheck, commit, atau push yang dijalankan.

Jangan meminta konfirmasi tambahan selama seluruh pekerjaan masih berada dalam ruang lingkup Plan 007 ini. Jika menemukan perbedaan kecil pada nama folder atau pola komponen, ikuti struktur repository yang benar dan lanjutkan pekerjaan dengan tetap mempertahankan maksud instruksi.
