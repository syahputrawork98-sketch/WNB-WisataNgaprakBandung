# PLAN 006A — Aktualisasi Konteks Bisnis dan Penyempurnaan Beranda WNB

## 1. Identitas Plan

- **Proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** branch aktif pengguna yang berbasis pada `main`
- **Nomor plan:** `006A`
- **Jenis pekerjaan:** sinkronisasi konteks terpilih + penyempurnaan konten dan presentasi Beranda
- **Executor:** Gemini Antigravity
- **Status awal:** Approved for working-tree execution
- **Status akhir yang wajib dilaporkan Gemini:** `Uncommitted / Pending User Review and Manual Testing`

## 2. Tujuan

Plan ini bertujuan untuk:

1. Mengaktualisasikan konteks bisnis repository berdasarkan fakta WNB yang telah dipilih dan disetujui pemilik proyek.
2. Menjadikan Google Drive sebagai referensi data inti, bukan sumber yang disalin mentah-mentah.
3. Mengubah Beranda dari tampilan prototipe yang banyak menyebut status TBD menjadi halaman publik yang meyakinkan, ringkas, persuasif, dan berorientasi pengalaman pelanggan.
4. Mempertahankan identitas visual WNB yang tangguh, klasik, penuh adrenalin, modern, dan berkelas.
5. Menjaga agar informasi internal, draf, sensitif, atau belum diverifikasi tidak dipublikasikan.

## 3. Konteks dan Sumber Kebenaran

Sebelum mengubah file apa pun, baca secara berurutan:

1. `docs/context/current-state.md`
2. `docs/context/business-facts.md`
3. `docs/context/project-context.md`
4. `docs/context/workflow-rules.md`
5. `docs/context/README.md`
6. `docs/design/home-page.md`
7. `docs/design/visual-direction.md`
8. `docs/design/design-system.md`
9. `docs/requirements/product-requirements.md`
10. Seluruh file yang membentuk Beranda di `client/src/pages/HomePage/` dan `client/src/features/home/`.

Gunakan hierarki sumber kebenaran berikut:

1. Plan 006A ini dan keputusan eksplisit terbaru pemilik proyek.
2. Kode repository pada working tree saat eksekusi.
3. Dokumen konteks repository.
4. Dokumen Google Drive WNB sebagai referensi data inti.

Dokumen Drive tidak boleh disalin otomatis. Gunakan hanya fakta publik yang secara eksplisit diizinkan dalam plan ini.

## 4. Fakta Publik yang Disetujui untuk Plan 006A

Fakta berikut boleh dimasukkan ke dokumentasi repository dan digunakan dalam Beranda:

- Nama brand adalah **WNB — Wisata Ngaprak Bandung**.
- WNB adalah penyedia pengalaman wisata petualangan alam dan off-road.
- Inti pengalaman WNB adalah perjalanan menggunakan **Land Rover klasik**.
- Gunakan istilah `Land Rover klasik`, bukan `Jeep`.
- WNB mulai beroperasi pada tahun **2019**.
- WNB memasuki tahap pengaktifan dan pengembangan kembali pada tahun **2026**.
- Makna `Ngaprak` berkaitan dengan semangat menyusuri jalan, menjelajahi jalur, dan menemukan sisi alam yang tidak biasa.
- Kesan utama brand adalah **tangguh dan penuh adrenalin**, tetapi tetap hangat, terarah, berkesan, dan dapat disesuaikan dengan karakter peserta.
- WNB melayani keluarga, pasangan, kelompok pertemanan, komunitas, perusahaan/organisasi, dan wisatawan.
- Bentuk pengalaman dapat mencakup perjalanan privat, open trip, kegiatan perusahaan, perayaan momen khusus, camping, dan perjalanan yang disesuaikan.
- Armada utama dibedakan menjadi Land Rover Short/SWB dan Land Rover Long/LWB.
- Pemilihan kendaraan menyesuaikan jumlah peserta, karakter rute, kebutuhan perjalanan, dan keputusan operasional WNB.
- Basis operasional berada di Cimahi.
- Alamat `Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi` berfungsi sebagai **kantor pusat administrasi dan garasi unit cadangan**, bukan titik temu utama pelanggan.
- Titik temu perjalanan bersifat fleksibel dan ditentukan berdasarkan kesepakatan pemesanan.
- Persiapan perjalanan mempertimbangkan kondisi kendaraan, cuaca, kondisi jalur, rute, kebutuhan peserta, dan keputusan tim lapangan.
- Foto stock yang telah ada tetap berstatus ilustrasi sementara dan tidak boleh diklaim sebagai dokumentasi armada WNB.

## 5. Informasi yang Dilarang Dipublikasikan atau Ditetapkan dalam Plan Ini

Jangan mengarang, mengonfirmasi, atau memublikasikan:

- nomor WhatsApp/telepon resmi;
- email resmi;
- nama legal usaha, bentuk badan usaha, legalitas, atau hak cipta final;
- nama, jabatan, atau profil pendiri/pengelola yang masih memerlukan konfirmasi;
- harga paket;
- detail paket komersial final;
- kapasitas penumpang numerik per kendaraan;
- jumlah unit armada;
- seri, tahun produksi, mesin, atau spesifikasi modifikasi Land Rover;
- sertifikasi atau klaim `driver terlatih`/`driver bersertifikat`;
- klaim keselamatan absolut;
- testimoni, rating, statistik perjalanan, jumlah pelanggan, atau angka kepuasan;
- koordinat, peta detail, titik start/finish presisi, jalur evakuasi, atau informasi internal rute;
- batas usia dan batasan kesehatan peserta yang masih berstatus draf;
- nama/kontak fasilitas kesehatan yang belum diverifikasi;
- diskon, slot terbatas, urgensi palsu, atau klaim promosi yang tidak memiliki sumber resmi;
- klaim bahwa seluruh paket, rute, Galeri, atau WhatsApp Click-to-Chat sudah aktif bila halaman terkait masih placeholder.

## 6. Masalah Beranda Saat Ini yang Harus Diperbaiki

1. Copy masih menjelaskan status pengembangan aplikasi, bukan nilai pengalaman WNB.
2. Banyak kalimat seperti `setelah informasi tersedia`, `setelah dikonfirmasi`, dan `akan diaktifkan` tampil di halaman publik.
3. Hero belum cukup tegas menjelaskan WNB, karakter petualangan, dan Land Rover klasik sebagai pembeda utama.
4. Bagian manifesto lebih banyak menjelaskan fungsi website daripada cerita dan esensi brand.
5. Explore cards mengarahkan ke halaman placeholder dengan copy yang terasa belum siap.
6. Bagian kendaraan terlalu teknis dan miskin konteks pengalaman pelanggan.
7. Belum ada ringkasan alasan memilih WNB atau standar pengalaman yang dapat dikomunikasikan secara aman.
8. CTA akhir menyebut status teknis WhatsApp yang seharusnya tidak menjadi copy promosi utama.
9. Dokumentasi repository masih menandai sejumlah fakta yang kini sudah disetujui sebagai TBD.
10. Logo resmi tersedia sebagai referensi, tetapi implementasi harus aman dan tidak boleh menggunakan tautan Drive langsung sebagai `src` produksi.

## 7. Struktur Beranda Target

Pertahankan Beranda sebagai halaman ringkas dengan alur berikut:

### 7.1 Hero — Identitas dan Janji Pengalaman

Tujuan:

- menjelaskan WNB dalam beberapa detik;
- menempatkan Land Rover klasik sebagai ikon pengalaman;
- membangun kesan tangguh, penuh adrenalin, dan berkelas;
- menyediakan CTA eksplorasi tanpa membuat klaim bahwa katalog sudah final.

Arah copy:

- Eyebrow boleh menggunakan: `Land Rover Classic Adventure — Bandung` atau padanan Bahasa Indonesia yang lebih natural.
- H1 harus kuat, singkat, dan berorientasi pengalaman. Pertahankan `Lebih dari perjalanan. Ini cerita.` hanya jika secara visual dan naratif tetap menjadi pilihan terbaik; Gemini boleh memperhalusnya tanpa mengubah makna brand.
- Deskripsi harus menjelaskan bahwa WNB mengajak peserta menjelajahi sisi berbeda alam Bandung bersama Land Rover klasik melalui pengalaman yang dapat disesuaikan dengan karakter perjalanan.
- CTA utama: menuju `/paket` dengan label netral seperti `Jelajahi Pengalaman` atau `Lihat Pilihan Perjalanan`.
- CTA sekunder: menuju `/rute` dengan label `Kenali Rute`.
- Jangan menyebut varian Short dan Long dalam paragraf hero jika membuat copy terlalu teknis.

### 7.2 Cerita Singkat WNB

Ubah `ManifestoSection` menjadi pengantar brand yang berorientasi cerita:

- WNB mulai beroperasi pada 2019.
- Perjalanan usaha sempat melambat dan kini dikembangkan kembali pada 2026.
- Makna Ngaprak adalah menyusuri jalur dan menemukan sisi alam yang tidak biasa.
- Land Rover klasik bukan sekadar transportasi, tetapi bagian dari karakter, sensasi, dan kenangan perjalanan.

Copy harus ringkas; jangan menampilkan kronologi panjang atau kondisi ekonomi/pandemi secara berlebihan di Beranda.

### 7.3 Pilihan Eksplorasi

Pertahankan tiga kartu Paket, Rute, dan Galeri, tetapi:

- hilangkan semua copy `setelah tersedia` dan `setelah dikonfirmasi`;
- gunakan copy evergreen yang menjelaskan fungsi setiap halaman;
- jangan menyatakan data komersial tertentu sudah tersedia;
- kartu tetap boleh menuju halaman placeholder karena pembangunan halaman tersebut berada di plan berikutnya;
- pastikan label CTA tidak menyesatkan.

Arah isi:

- Paket: pilihan bentuk pengalaman berdasarkan kebutuhan perjalanan.
- Rute: gambaran karakter jalur dan tingkat petualangan.
- Galeri: ruang dokumentasi suasana dan cerita perjalanan WNB.

### 7.4 Land Rover Klasik sebagai Inti Pengalaman

Pertahankan bagian kendaraan, tetapi ubah fokus dari daftar spesifikasi menjadi peran kendaraan dalam pengalaman:

- Land Rover Short/SWB dan Long/LWB tetap boleh disebut.
- Jangan menampilkan kapasitas numerik.
- Jangan mengklaim kenyamanan atau performa salah satu varian.
- Jelaskan bahwa pemilihan unit mempertimbangkan jumlah peserta, karakter rute, dan kebutuhan perjalanan.
- Ganti label `Informasi Terkonfirmasi` dengan label yang lebih natural untuk pengunjung, misalnya `Karakter Utama`.
- Jangan gunakan fakta `bodi berbahan besi atau logam` sebagai selling point utama bila terasa terlalu teknis dan tidak persuasif.

### 7.5 Standar Pengalaman WNB

Tambahkan satu section baru yang ringan dan tidak menyerupai SOP internal. Section dapat menggunakan tiga atau empat pilar:

- **Disesuaikan dengan Peserta** — karakter perjalanan disesuaikan dengan kelompok dan kebutuhan.
- **Rute Dipertimbangkan** — kondisi jalur dan cuaca menjadi bagian dari persiapan.
- **Land Rover Berkarakter** — kendaraan klasik menjadi inti sensasi perjalanan.
- **Momen yang Berkesan** — pengalaman dirancang untuk kebersamaan dan cerita perjalanan.

Hindari klaim `pasti aman`, `tanpa risiko`, `bersertifikat`, atau klaim operasional yang belum diverifikasi.

### 7.6 CTA Akhir

Ubah CTA akhir agar berfokus pada konsultasi/perencanaan perjalanan, bukan status teknis aplikasi:

- Judul harus mengajak pengguna mulai merencanakan petualangan.
- Deskripsi boleh menyebut bahwa detail perjalanan disesuaikan berdasarkan kebutuhan peserta, pilihan pengalaman, dan kondisi perjalanan.
- CTA utama tetap menuju `/booking`, dengan label seperti `Rencanakan Perjalanan`.
- CTA sekunder menuju `/about`, dengan label `Kenali WNB`.
- Hapus kalimat publik tentang WhatsApp yang `akan diaktifkan setelah nomor resmi dikonfirmasi`.
- Jangan mengaktifkan Click-to-Chat atau hardcode nomor WhatsApp.

## 8. Arah Visual dan UX

- Pertahankan fondasi monokrom, rugged, editorial, modern, dan premium.
- Foto alam tetap menjadi aksen warna utama.
- Jangan melakukan redesign total application shell.
- Pertahankan penggunaan `Container`, `SectionHeading`, `LinkButton`, dan komponen umum yang sudah ada.
- Pastikan alur section tidak monoton: gunakan variasi grid, ritme ruang, dan kontras surface secara konsisten.
- Pertahankan keterbacaan overlay hero di mobile dan desktop.
- Hindari penambahan animasi berat atau dependency baru.
- Hormati `prefers-reduced-motion`.
- Pertahankan satu H1 dan hierarki heading yang benar.
- Setiap section utama harus memiliki nama yang dapat diakses dengan `aria-labelledby` bila relevan.
- Alt text harus menjelaskan isi visual secara objektif. Decorative images harus menggunakan `alt=""`.
- Semua foto stock kendaraan harus menampilkan notice bahwa foto tersebut bukan dokumentasi armada WNB.

## 9. Integrasi Logo Resmi

Logo referensi resmi berada di Google Drive dengan nama `Logo Utama WNB.png`.

Aturan:

1. Jangan menggunakan URL Google Drive sebagai `src` produksi.
2. Jika file logo resmi sudah tersedia di working tree saat eksekusi, optimalkan seperlunya dan simpan sebagai aset lokal dengan nama yang jelas, misalnya `client/public/brand/wnb-logo.png` atau format WebP yang tetap menjaga transparansi dan ketajaman.
3. Jika file belum tersedia dan Gemini tidak dapat mengambilnya secara andal, **jangan membuat logo pengganti dan jangan mengarang aset**. Pertahankan `BrandWordmark` berbasis teks dan laporkan logo sebagai deferred item.
4. Bila logo berhasil ditambahkan, integrasikan melalui komponen brand yang sudah ada agar navbar tidak mengalami layout shift dan tetap memiliki label aksesibel.
5. Integrasi logo bukan alasan untuk merombak seluruh Navbar atau Footer.

## 10. File yang Diperkirakan Boleh Diubah

Gemini harus memeriksa path aktual dan hanya mengubah file yang diperlukan. Daftar izin maksimum:

### Dokumentasi

- `docs/context/business-facts.md`
- `docs/context/project-context.md` bila fakta publik baru benar-benar memengaruhi ringkasan proyek
- `docs/context/current-state.md`
- `docs/context/README.md` hanya bila indeks/status perlu diselaraskan
- `docs/design/home-page.md`
- `docs/design/design-system.md` hanya untuk memperbaiki status logo atau tautan lokal `file:///`
- `docs/requirements/product-requirements.md` hanya untuk memperbarui TBD yang telah disetujui
- `docs/README.md`
- `docs/plans/006A-aktualisasi-konteks-bisnis-dan-penyempurnaan-beranda-wnb.md` — salin file plan ini secara persis

### Frontend Beranda

- `client/src/pages/HomePage/HomePage.tsx`
- `client/src/features/home/homeContent.ts`
- `client/src/features/home/homeTypes.ts` bila tipe baru benar-benar diperlukan
- `client/src/features/home/components/HeroSection.tsx`
- `client/src/features/home/components/ManifestoSection.tsx`
- `client/src/features/home/components/ExploreSection.tsx`
- `client/src/features/home/components/ExploreCard.tsx`
- `client/src/features/home/components/VehicleSection.tsx`
- `client/src/features/home/components/VehicleCard.tsx`
- `client/src/features/home/components/FinalCtaSection.tsx`
- komponen baru di `client/src/features/home/components/` untuk section standar pengalaman
- `client/src/features/home/components/EditorialImage.tsx` hanya jika diperlukan untuk aksesibilitas atau presentasi notice

### Aset/brand, hanya bila logo resmi tersedia

- `client/src/components/brand/BrandWordmark.tsx`
- `client/public/brand/wnb-logo.png` atau aset lokal ekuivalen

Jangan mengubah file lain tanpa alasan langsung yang dijelaskan dalam laporan akhir Gemini.

## 11. File dan Area yang Dilarang Diubah

- `server/`
- file konfigurasi Vite/TypeScript kecuali terdapat blocker nyata yang sebelumnya tidak diketahui
- `package.json`
- `package-lock.json`
- dependency apa pun
- route structure dan URL yang sudah ada
- halaman About, Paket, Detail Paket, Rute, Detail Rute, Galeri, dan Booking selain tautan navigasi dari Beranda
- backend, database, autentikasi, CMS, payment gateway, atau API
- foto stock yang sudah ada, kecuali diperlukan koreksi metadata/notice; jangan mengganti seluruh paket aset
- commit history, branch, remote, atau konfigurasi Git

## 12. Pembaruan Dokumentasi yang Wajib

### `business-facts.md`

- Pindahkan hanya fakta pada Bagian 4 plan ini dari TBD menjadi confirmed.
- Pertahankan semua data Bagian 5 sebagai TBD/prohibited.
- Tambahkan aturan eksplisit bahwa Drive adalah referensi data inti dan fakta publik baru harus melalui keputusan pemilik proyek/plan.
- Catat fungsi alamat sebagai kantor pusat administrasi dan garasi unit cadangan, bukan titik temu utama.

### `product-requirements.md`

- Hilangkan status TBD hanya untuk fakta yang telah disetujui.
- Jangan memasukkan harga, kapasitas numerik, nomor WhatsApp, atau detail teknis armada.
- Pastikan target pasar dan tujuan Beranda selaras dengan konteks terbaru.

### `design/home-page.md`

- Dokumentasikan struktur Beranda hasil Plan 006A.
- Catat section baru, arah copy, status foto ilustrasi, dan batas publikasi.

### `current-state.md`

- Jangan mengganti `Latest Verified Implementation Commit` dengan SHA yang belum direview ChatGPT.
- Catat Plan 006A sebagai `Implemented / Candidate / Pending User Review and Manual Testing` setelah working tree selesai.
- Nyatakan halaman lain tetap placeholder.
- Nyatakan logo deferred bila aset resmi gagal diperoleh.

### `design-system.md`

- Perbaiki tautan lokal `file:///.../globals.css` menjadi tautan relatif repository.
- Jika logo resmi berhasil dipasang, perbarui status `BrandWordmark` dan deferred items secara presisi.

## 13. Urutan Eksekusi Gemini Antigravity

1. Baca seluruh konteks wajib dan file Beranda aktual.
2. Jalankan `git status --short` dan laporkan bila ada perubahan milik pengguna; jangan menimpa perubahan tersebut.
3. Salin file plan ini persis ke `docs/plans/006A-aktualisasi-konteks-bisnis-dan-penyempurnaan-beranda-wnb.md`.
4. Aktualisasikan fakta repository sesuai Bagian 4 dan 5.
5. Perbarui copy Beranda untuk menghapus bahasa prototipe/TBD.
6. Susun ulang atau tambah komponen Beranda hanya sejauh diperlukan oleh struktur target.
7. Integrasikan logo hanya bila aset resmi benar-benar tersedia.
8. Perbarui dokumentasi desain dan status proyek.
9. Tinjau diff secara statis untuk memastikan scope tidak melebar.
10. Jangan menjalankan test, lint, typecheck, build, dev server, browser automation, screenshot, atau validasi visual kecuali diminta eksplisit oleh pengguna setelah eksekusi.
11. Jangan menjalankan `git add`, `git commit`, atau `git push`.
12. Tampilkan ringkasan, daftar file berubah, `git diff --stat`, dan `git status --short`.

## 14. Kriteria Penerimaan

Implementasi dinilai memenuhi Plan 006A jika:

- [ ] File plan tersalin persis ke `docs/plans/`.
- [ ] Beranda tidak lagi dipenuhi copy `setelah tersedia`, `setelah dikonfirmasi`, atau status teknis serupa.
- [ ] Hero menjelaskan WNB dan Land Rover klasik secara jelas serta persuasif.
- [ ] Cerita singkat WNB dan makna Ngaprak tersampaikan tanpa menjadi halaman About lengkap.
- [ ] Explore cards memiliki copy evergreen dan tidak mengarang kesiapan halaman tujuan.
- [ ] Bagian kendaraan berorientasi pengalaman, bukan spesifikasi yang belum diverifikasi.
- [ ] Terdapat section standar pengalaman yang aman dan tidak membuat klaim absolut.
- [ ] CTA akhir berorientasi perencanaan perjalanan dan tidak mengaktifkan WhatsApp.
- [ ] Foto stock kendaraan tetap memiliki notice ilustrasi.
- [ ] Tidak ada harga, kapasitas numerik, nomor WhatsApp, koordinat, testimoni fiktif, atau detail internal yang dipublikasikan.
- [ ] `business-facts.md`, PRD, dan dokumentasi Beranda selaras dengan fakta yang disetujui.
- [ ] `Latest Verified Implementation Commit` tidak diganti dengan SHA kandidat.
- [ ] Halaman non-Beranda tetap placeholder dan tidak ikut dibangun.
- [ ] Tidak ada dependency atau lockfile yang berubah.
- [ ] Tidak ada commit atau push otomatis.
- [ ] Gemini melaporkan status akhir `Uncommitted / Pending User Review and Manual Testing`.

## 15. Checklist Pengujian Manual untuk Pengguna

Setelah Gemini berhenti, pengguna melakukan pemeriksaan manual berikut:

### Desktop

- hero terbaca jelas dan tidak tertutup overlay;
- urutan section terasa logis;
- grid kartu seimbang;
- seluruh CTA menuju route yang benar;
- tidak ada layout shift pada logo/wordmark;
- foto dan notice ilustrasi tampil benar.

### Mobile

- hero tidak terlalu tinggi atau memotong copy penting;
- H1 tidak overflow;
- tombol tidak terpotong;
- kartu tersusun satu kolom dengan jarak yang rapi;
- notice foto tetap terbaca;
- menu mobile tetap berfungsi dan tidak terganggu perubahan brand.

### Konten

- tidak ada istilah `Jeep`;
- tidak ada bahasa internal seperti TBD atau status pengembangan;
- tidak ada fakta baru yang belum disetujui;
- alamat, jika ditampilkan, tidak disebut sebagai titik temu utama;
- seluruh copy terasa natural, ringkas, dan sesuai identitas WNB.

## 16. Format Laporan Akhir Gemini

Gemini harus mengakhiri pekerjaan dengan format:

1. **Status:** `Uncommitted / Pending User Review and Manual Testing`
2. **Ringkasan perubahan**
3. **Daftar file yang berubah/ditambahkan**
4. **Fakta repository yang diaktualisasikan**
5. **Perubahan section Beranda**
6. **Status integrasi logo:** berhasil atau deferred beserta alasan
7. **Hal yang sengaja tidak dikerjakan**
8. **`git diff --stat`**
9. **`git status --short`**
10. **Saran pesan commit manual**, tanpa menjalankan commit

## 17. Larangan Akhir

Gemini Antigravity tidak boleh:

- memperluas scope ke halaman lain;
- mengarang fakta bisnis;
- menyalin seluruh isi Drive ke website;
- membuat logo pengganti;
- menambah dependency;
- menjalankan pengujian otomatis tanpa permintaan eksplisit;
- melakukan commit atau push;
- menyatakan implementasi `Verified`;
- melanjutkan ke Plan 007 secara otomatis.

