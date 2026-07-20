# PLAN 008 — Implementasi Logo Resmi dan Penyempurnaan Identitas Global WNB

## 1. Identitas Pekerjaan

- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch kerja:** branch aktif pengguna
- **Baseline terverifikasi:** `e844dcc5b032d6a287a759eba41fb32a3a988b3d`
- **Area utama:** frontend pada folder `client`
- **Jenis pekerjaan:** implementasi aset logo resmi dan penyempurnaan identitas visual global
- **Status instruksi:** siap dieksekusi

## 2. Tujuan Plan 008

Plan 008 mengganti identitas teks sementara dengan logo resmi WNB dan merapikan elemen global website yang masih menggunakan bahasa prototipe. Pekerjaan ini tidak membangun halaman Paket atau Rute karena data kedua bagian tersebut masih diperbarui secara terpisah.

Hasil akhir yang diharapkan:

1. Logo resmi tampil secara proporsional pada header.
2. Logo resmi tampil pada footer.
3. Logo resmi menjadi elemen identitas pada hero halaman Tentang Kami.
4. Logo resmi digunakan sebagai favicon atau icon browser.
5. Navigasi menggunakan Bahasa Indonesia secara konsisten.
6. CTA global tidak menjanjikan sistem booking langsung yang belum tersedia.
7. Bahasa prototipe dan informasi TBD tidak tampil pada antarmuka publik.
8. Dokumentasi repository mencatat bahwa logo resmi telah tersedia dan diterapkan.

## 3. Peran Executor

Laksanakan perubahan langsung pada working tree repository yang sedang terbuka. Pelajari struktur kode dan sistem desain yang sudah ada sebelum mengubah file. Ikuti pola React, TypeScript, React Router, Tailwind CSS, aksesibilitas, dan organisasi komponen yang telah digunakan repository.

Gemini tidak perlu mencari atau membaca dokumen Google Drive. Satu-satunya sumber eksternal yang boleh diakses dalam pekerjaan ini adalah link file logo resmi yang dicantumkan pada Bagian 5.

Jangan meminta pengguna mengunduh atau memindahkan logo secara manual. Ambil logo dari link yang diberikan, lalu simpan sebagai aset lokal di dalam repository.

## 4. Aturan Eksekusi

1. Kerjakan hanya ruang lingkup Plan 008.
2. Jangan mengubah backend.
3. Jangan membangun atau mengisi halaman Paket, Rute, Galeri, atau Booking.
4. Jangan memasukkan harga, kapasitas kendaraan, detail rute, nomor WhatsApp, atau data komersial baru.
5. Jangan merombak desain homepage atau halaman About.
6. Jangan mengganti warna, bentuk, isi, tulisan, orientasi, atau proporsi logo.
7. Jangan membuat logo baru dan jangan menggunakan logo hasil generatif.
8. Jangan menggunakan link Google Drive sebagai `src` gambar pada website produksi.
9. Logo harus diunduh satu kali dan disimpan sebagai aset lokal repository.
10. Jangan menambahkan dependency baru hanya untuk menampilkan atau mengolah logo.
11. Jangan melakukan hotlink terhadap aset Google Drive.
12. Jangan menjalankan build, test, lint, typecheck, development server, atau preview.
13. Jangan melakukan commit, push, pull request, merge, atau operasi GitHub lainnya.
14. Jangan meminta konfirmasi tambahan selama pekerjaan masih berada dalam ruang lingkup plan ini.
15. Setelah selesai, cukup berikan ringkasan file dan hasil pemeriksaan statis manual.

## 5. Sumber Logo Resmi

### 5.1 Link utama

```text
https://drive.google.com/file/d/1VyrULLpz-xU1gIMAlv62pXcJj7K5vD2F/view?usp=drive_link
```

### 5.2 Link akses langsung berdasarkan ID file

```text
https://drive.google.com/uc?export=download&id=1VyrULLpz-xU1gIMAlv62pXcJj7K5vD2F
```

### 5.3 Identitas file

- Nama sumber: `Logo Utama WNB.png`
- Jenis file: PNG
- Fungsi: logo resmi utama Wisata Ngaprak Bandung
- File ID: `1VyrULLpz-xU1gIMAlv62pXcJj7K5vD2F`

Gunakan link langsung terlebih dahulu untuk mengambil file. Apabila endpoint meminta konfirmasi unduhan, gunakan link utama atau mekanisme pengunduhan file publik Google Drive yang tersedia pada lingkungan kerja.

Jika kedua link benar-benar tidak dapat diakses:

- jangan mengganti logo dengan aset lain;
- jangan membuat ulang logo;
- jangan mempertahankan implementasi setengah jadi yang merusak tampilan;
- laporkan secara jelas bahwa pengambilan aset gagal dan sebutkan pesan kesalahannya.

## 6. Penempatan Aset di Repository

Simpan logo di lokasi yang konsisten dengan strategi aset publik repository. Rekomendasi path:

```text
client/public/images/brand/wnb-logo.png
```

Ketentuan:

1. Gunakan nama file lowercase dan stabil.
2. Pertahankan transparansi jika file sumber memiliki background transparan.
3. Pertahankan rasio asli logo.
4. Jangan melakukan crop.
5. Jangan menambahkan background permanen ke dalam file logo.
6. Jangan meregangkan logo melalui kombinasi `width` dan `height` yang tidak mempertahankan rasio.
7. Jangan menyimpan file hasil duplikasi yang tidak diperlukan.
8. Jangan memasukkan file logo ke dalam typed content atau base64 source code.

Jika tersedia utilitas pengolahan gambar bawaan lingkungan, optimasi lossless boleh dilakukan tanpa mengubah tampilan. Jangan memasang package baru. Jika optimasi berisiko mengubah transparansi atau kualitas, gunakan PNG sumber apa adanya dan atur ukuran melalui CSS.

## 7. Kondisi Repository yang Harus Diperbaiki

Pada baseline terverifikasi:

### 7.1 BrandWordmark masih sementara

File:

```text
client/src/components/brand/BrandWordmark.tsx
```

Masih menampilkan teks besar `WNB`, teks kecil `Wisata Ngaprak Bandung`, dan komentar bahwa wordmark teks bersifat sementara sampai logo tersedia.

### 7.2 Footer masih memakai teks identitas sementara

File:

```text
client/src/components/navigation/Footer.tsx
```

Masih menampilkan `WNB` sebagai teks besar, frasa `Fondasi aplikasi`, dan informasi kontak yang akan ditambahkan setelah dikonfirmasi.

### 7.3 Hero About belum memakai logo

File:

```text
client/src/features/about/components/AboutHeroSection.tsx
```

Area identitas hanya menggunakan eyebrow teks `Tentang WNB`.

### 7.4 CTA global masih memakai Booking Sekarang

File yang relevan:

```text
client/src/components/navigation/Navbar.tsx
client/src/components/navigation/MobileNavigation.tsx
```

Halaman Booking masih placeholder, sehingga CTA `Booking Sekarang` terlalu jauh menjanjikan kemampuan sistem.

### 7.5 Label navigasi bercampur bahasa

File:

```text
client/src/components/navigation/navigationItems.ts
```

Label `Home` dan `About` belum diseragamkan dengan Bahasa Indonesia.

### 7.6 Metadata belum memakai favicon resmi

File:

```text
client/index.html
```

Belum terdapat favicon resmi WNB.

## 8. Pekerjaan A — Komponen Logo Reusable

Buat atau ubah komponen brand agar logo dapat digunakan secara konsisten di beberapa lokasi.

Pilihan implementasi:

- ubah `BrandWordmark.tsx` menjadi komponen berbasis gambar sambil mempertahankan nama export untuk meminimalkan perubahan; atau
- buat `BrandLogo.tsx`, kemudian perbarui seluruh import yang relevan.

Pilih solusi yang paling bersih berdasarkan struktur repository. Jangan mempertahankan dua komponen dengan fungsi sama tanpa alasan.

Komponen logo minimal mendukung:

- path aset lokal yang tetap;
- alt text atau aksesibilitas sesuai konteks;
- variasi ukuran header, footer, dan hero About;
- className tambahan bila pola repository membutuhkannya;
- rasio gambar yang tidak berubah;
- link menuju Beranda jika digunakan pada header atau footer.

Aturan aksesibilitas:

1. Header: logo berada di dalam link menuju Beranda dengan `aria-label="Wisata Ngaprak Bandung — kembali ke Beranda"`.
2. Jika alt text dan aria-label akan mengulang informasi yang sama, gunakan alt kosong pada gambar di dalam link yang sudah mempunyai aria-label.
3. Hero About: gunakan alt `Logo Wisata Ngaprak Bandung` jika logo merupakan gambar informatif dan tidak dibungkus link.
4. Footer: jika logo dibungkus link dengan aria-label yang jelas, gunakan alt kosong pada gambar.
5. Jangan memakai kata `image`, `gambar`, atau nama file pada alt text.

## 9. Pekerjaan B — Header/Navbar

Perbarui header pada:

```text
client/src/components/navigation/Navbar.tsx
```

Ketentuan:

1. Ganti wordmark teks sementara dengan logo resmi lokal.
2. Logo menjadi link menuju Beranda.
3. Logo harus terlihat jelas pada background gelap.
4. Pertahankan sticky header, backdrop blur, border, navigasi desktop, dan tombol menu mobile.
5. Gunakan ukuran visual yang seimbang; logo tidak boleh mendominasi seluruh header.
6. Sediakan ruang yang cukup agar logo tidak terpotong.
7. Pastikan logo tetap terbaca pada mobile.
8. Jangan menampilkan ulang teks `WNB` dan `Wisata Ngaprak Bandung` di samping logo jika tulisan tersebut sudah menjadi bagian dari logo resmi.
9. Jika isi logo terlalu kecil ketika seluruh kanvas ditampilkan, sesuaikan tinggi secara proporsional tanpa melakukan crop destruktif.
10. Ubah label CTA desktop dari `Booking Sekarang` menjadi:

```text
Rencanakan Perjalanan
```

11. CTA tetap menuju `ROUTE_PATHS.booking`.
12. Pertahankan fokus keyboard yang terlihat jelas.

## 10. Pekerjaan C — Mobile Navigation

Perbarui:

```text
client/src/components/navigation/MobileNavigation.tsx
```

Ketentuan:

1. Ubah CTA `Booking Sekarang` menjadi `Rencanakan Perjalanan`.
2. Pertahankan perilaku close on route change, Escape, body scroll lock, dan restore focus.
3. Periksa nilai posisi atas mobile drawer yang saat ini menggunakan `top-[73px]`.
4. Sesuaikan nilai tersebut hanya jika tinggi header berubah setelah logo diterapkan.
5. Jangan biarkan drawer menutupi logo/header atau meninggalkan celah besar.
6. Pastikan perubahan tinggi header tidak merusak transisi antara mobile dan desktop.

## 11. Pekerjaan D — Navigasi Bahasa Indonesia

Perbarui label pada:

```text
client/src/components/navigation/navigationItems.ts
```

Gunakan urutan dan label:

1. `Beranda`
2. `Tentang Kami`
3. `Paket`
4. `Rute`
5. `Galeri`

Ketentuan:

- Jangan mengubah route path.
- Jangan mengubah struktur route.
- Jangan mengubah slug.
- Jangan menambahkan item baru.
- Pastikan label baru otomatis digunakan pada navbar desktop, mobile navigation, dan footer.

## 12. Pekerjaan E — Footer

Perbarui:

```text
client/src/components/navigation/Footer.tsx
```

### 12.1 Kolom brand

Ganti teks besar `WNB` dengan logo resmi. Logo dapat menjadi link menuju Beranda.

Ganti:

```text
Fondasi aplikasi wisata petualangan Land Rover klasik di Bandung.
```

Menjadi:

```text
Petualangan Land Rover klasik untuk menjelajahi sisi berbeda Bandung.
```

### 12.2 Kolom reservasi

Pertahankan link:

```text
Rencanakan Perjalanan
```

Hapus sepenuhnya kalimat publik:

```text
Informasi kontak resmi akan ditambahkan setelah dikonfirmasi.
```

Jangan menggantinya dengan `TBD`, `segera hadir`, `coming soon`, atau pesan internal lain.

Jika kolom terlihat terlalu kosong setelah kalimat dihapus, gunakan narasi publik berikut:

```text
Diskusikan karakter peserta dan pengalaman yang ingin direncanakan bersama WNB.
```

Kalimat tersebut tidak boleh disertai nomor kontak rekaan atau janji booking langsung.

### 12.3 Struktur footer

- Pertahankan navigasi footer.
- Pertahankan layout responsif.
- Pastikan ukuran logo footer seimbang dengan kolom lain.
- Jangan membuat logo footer lebih besar daripada identitas utama halaman.

## 13. Pekerjaan F — Hero Halaman Tentang Kami

Perbarui:

```text
client/src/features/about/components/AboutHeroSection.tsx
```

Ketentuan:

1. Gunakan logo resmi sebagai elemen identitas visual di atas headline.
2. Ganti eyebrow teks `Tentang WNB` dengan komposisi logo yang proporsional.
3. Logo tidak perlu menjadi link karena pengunjung sudah berada pada halaman About.
4. Pertahankan headline:

```text
Berawal dari Hobi, Tumbuh Menjadi Petualangan.
```

5. Pertahankan narasi utama yang sudah disetujui.
6. Pertahankan satu `h1` pada halaman.
7. Jangan membuat logo lebih dominan daripada headline.
8. Pastikan logo tetap terbaca pada background radial gelap.
9. Jika diperlukan, gunakan ruang/padding atau container transparan secara halus; jangan mengubah logo dengan filter warna yang merusak identitas.
10. Jangan mengganti setiap penggunaan kata `WNB` dalam narasi dengan gambar logo.

## 14. Penggunaan Kata WNB dalam Konten

Logo digunakan pada area identitas visual. Nama `WNB` tetap digunakan sebagai teks apabila berada dalam kalimat atau judul yang membutuhkan nama brand.

Contoh yang tetap benar dan tidak perlu diganti gambar:

- `WNB lahir dari kecintaan terhadap Land Rover klasik...`
- `Bagi WNB, perjalanan terbaik...`
- `Nilai WNB`
- `Standar Pengalaman WNB`
- `Janji pengalaman WNB`
- `Kantor pusat administrasi dan garasi unit cadangan WNB`

Jangan memasukkan `<img>` logo di tengah paragraf hanya untuk menggantikan kata WNB.

## 15. Pekerjaan G — Favicon dan Metadata Dasar

Perbarui:

```text
client/index.html
```

Tambahkan favicon menggunakan aset logo lokal. Contoh path jika rekomendasi penempatan diikuti:

```html
<link rel="icon" type="image/png" href="/images/brand/wnb-logo.png" />
```

Jika membuat turunan favicon terpisah tanpa dependency baru, gunakan nama yang jelas seperti:

```text
client/public/favicon.png
```

Ketentuan:

1. Favicon harus berasal dari logo resmi yang sama.
2. Jangan menggunakan favicon Vite/default.
3. Jangan membuat simbol baru yang tidak berasal dari logo.
4. Pertahankan title:

```text
WNB — Wisata Ngaprak Bandung
```

5. Perbaiki meta description bila diperlukan agar tidak terdengar seperti aplikasi prototipe. Rekomendasi:

```text
Wisata Ngaprak Bandung menghadirkan petualangan Land Rover klasik untuk menjelajahi sisi berbeda Bandung.
```

6. Jangan menambahkan keyword stuffing atau klaim SEO yang tidak terbukti.

## 16. Pemeriksaan Area Global Lain

Lakukan pencarian statis pada folder `client/src` dan `client/index.html` untuk menemukan:

- komentar `logo sementara`;
- teks identitas `WNB` yang berfungsi sebagai wordmark buatan;
- `Booking Sekarang`;
- `Fondasi aplikasi`;
- `Informasi kontak resmi akan ditambahkan`;
- `logo resmi berstatus deferred` pada dokumentasi;
- bahasa `TBD`, `akan ditampilkan`, `akan ditambahkan`, atau `setelah dikonfirmasi` yang tampil kepada pengguna.

Jangan menghapus penggunaan kata WNB yang wajar di dalam narasi. Jangan memperluas pencarian menjadi perubahan konten Paket dan Rute.

## 17. Dokumentasi Repository

Perbarui dokumentasi yang benar-benar relevan dan sudah ada di repository.

### 17.1 Business facts

Periksa:

```text
docs/context/business-facts.md
```

Perbarui status logo:

- logo resmi WNB telah tersedia;
- sumber logo merupakan file resmi `Logo Utama WNB.png`;
- logo diterapkan sebagai aset lokal website;
- penggunaan logo harus mempertahankan bentuk, warna, isi, dan proporsi;
- hapus logo resmi dari daftar informasi TBD;
- foto dokumentasi asli boleh tetap berstatus belum tersedia jika memang belum berubah.

Jangan menyebut link Drive sebagai runtime dependency website.

### 17.2 Current state

Periksa:

```text
docs/context/current-state.md
```

Perbarui dengan ketentuan:

- baseline terakhir yang telah diverifikasi sebelum Plan 008 adalah `e844dcc5b032d6a287a759eba41fb32a3a988b3d`;
- Plan 007 dinyatakan selesai dan terverifikasi;
- Plan 008 dicatat sebagai implementasi kandidat pada working tree;
- logo resmi tidak lagi berstatus deferred;
- jangan menulis SHA commit Plan 008 yang belum dibuat;
- halaman Paket, Rute, Galeri, dan Booking tetap placeholder.

### 17.3 Design system atau dokumentasi shell

Cari dokumentasi yang benar-benar mengatur header, footer, responsive shell, brand component, atau aset. Perbarui hanya file yang relevan.

Minimal catat:

- path aset logo;
- penggunaan logo pada header, footer, dan About;
- aturan ukuran responsif;
- favicon;
- accessible label pada logo link;
- label navigasi Bahasa Indonesia;
- CTA `Rencanakan Perjalanan`.

Jika belum ada dokumentasi yang tepat, buat satu catatan singkat dengan penamaan konsisten, misalnya:

```text
docs/design/brand-identity-web.md
```

Jangan membuat beberapa dokumen dengan isi berulang.

### 17.4 Dokumentasi sumber aset

Jika repository memiliki `docs/assets/image-sources.md` atau dokumen sumber aset lain, tambahkan logo resmi dengan keterangan:

- nama file;
- status sebagai logo resmi milik WNB;
- path lokal;
- link sumber yang diberikan pengguna;
- penggunaan pada header, footer, About, dan favicon.

Jangan menyebut logo sebagai stock image atau ilustrasi sementara.

## 18. Arah Visual

1. Pertahankan tema dark, editorial, rugged, klasik, dan hangat.
2. Logo harus mempunyai ruang napas yang cukup.
3. Jangan menambahkan efek glow berlebihan.
4. Jangan menambahkan drop shadow berat yang mengubah karakter logo.
5. Jangan mengubah logo menjadi monokrom melalui CSS kecuali file sumber memang monokrom.
6. Jangan menggunakan `filter: invert()` tanpa verifikasi visual karena dapat mengubah identitas resmi.
7. Jangan menempatkan logo pada background yang membuatnya tidak terbaca.
8. Jangan membuat logo gepeng atau memanjang.
9. Hindari tinggi header yang berlebihan.
10. Pastikan logo footer tetap terbaca tetapi lebih tenang daripada logo header.
11. Pada About, logo berfungsi sebagai pembuka identitas, bukan menggantikan headline.

## 19. Aksesibilitas

1. Logo header dapat diakses keyboard melalui link Beranda.
2. Focus outline pada link logo harus tetap terlihat.
3. Jangan mengulang nama brand dua kali kepada screen reader melalui alt dan aria-label.
4. Menu button tetap memiliki aria-label, aria-expanded, dan aria-controls yang benar.
5. Mobile navigation tetap dapat ditutup dengan Escape.
6. Urutan tab tetap logis.
7. Satu-satunya `h1` pada About tetap berada pada headline utama.
8. Logo dekoratif menggunakan alt kosong; logo informatif menggunakan alt yang tepat.
9. Favicon tidak menggantikan title halaman.

## 20. Responsivitas

Periksa secara statis class responsif pada:

- header mobile;
- header desktop;
- tombol CTA desktop;
- mobile menu toggle;
- posisi mobile drawer;
- logo footer;
- logo About;
- breakpoint `md` yang sudah digunakan.

Logo harus:

- tidak terpotong pada layar kecil;
- tidak bertabrakan dengan menu hamburger;
- tidak mendorong CTA desktop keluar container;
- tidak menyebabkan horizontal overflow;
- tidak menyebabkan mobile drawer salah posisi;
- tidak kehilangan proporsi pada layar lebar.

## 21. Pemeriksaan Statis Wajib

Tanpa menjalankan build, test, lint, typecheck, server, atau preview:

1. Baca ulang seluruh file yang diubah.
2. Pastikan file logo benar-benar tersimpan di path yang digunakan kode.
3. Pastikan file bukan halaman HTML Google Drive yang salah tersimpan sebagai `.png`.
4. Periksa signature atau tipe file menggunakan fasilitas read-only yang tersedia jika memungkinkan.
5. Pastikan ukuran file tidak nol.
6. Pastikan import/export komponen logo benar.
7. Pastikan tidak ada import lama `BrandWordmark` yang rusak setelah perubahan nama.
8. Pastikan header, footer, dan About menggunakan aset lokal yang sama.
9. Pastikan favicon mengarah ke file yang benar.
10. Pastikan tidak ada link Google Drive dalam atribut `src` runtime.
11. Pastikan link Google Drive hanya dicatat sebagai sumber dokumentasi.
12. Pastikan tidak ada `Booking Sekarang` pada UI publik.
13. Pastikan tidak ada `Fondasi aplikasi` pada UI publik.
14. Pastikan tidak ada informasi kontak TBD pada footer.
15. Pastikan label navigasi menjadi `Beranda` dan `Tentang Kami`.
16. Pastikan kata WNB dalam narasi tidak dihapus secara membabi buta.
17. Pastikan tidak ada dependency baru.
18. Pastikan tidak ada perubahan pada data Paket atau Rute.
19. Pastikan dokumentasi tidak lagi menyebut logo resmi belum tersedia.
20. Pastikan format dan kapitalisasi path aset cocok dengan sistem file produksi.

## 22. Kriteria Selesai

Plan 008 dianggap selesai apabila:

- logo resmi berhasil diambil dari link yang diberikan;
- logo disimpan sebagai aset lokal repository;
- header tidak lagi memakai wordmark teks sementara;
- footer memakai logo resmi;
- hero About memakai logo resmi;
- favicon berasal dari logo resmi;
- logo tidak di-hotlink dari Google Drive;
- proporsi dan tampilan logo tidak diubah;
- CTA global menjadi `Rencanakan Perjalanan`;
- navigasi menggunakan `Beranda` dan `Tentang Kami`;
- footer tidak lagi memakai bahasa prototipe atau TBD;
- mobile drawer tetap selaras dengan tinggi header;
- aksesibilitas link logo dan navigasi tetap benar;
- dokumentasi brand, aset, dan current state diperbarui;
- Plan 007 tercatat selesai dan terverifikasi;
- Paket, Rute, Galeri, dan Booking tetap di luar ruang lingkup;
- tidak ada build, test, lint, typecheck, commit, atau push yang dijalankan.

## 23. Format Laporan Akhir Executor

Setelah selesai, laporkan secara ringkas:

1. Apakah logo berhasil diambil dari link.
2. Path aset logo lokal.
3. File kode yang dibuat atau diubah.
4. Lokasi website yang sekarang memakai logo.
5. Perubahan navigasi dan CTA.
6. Bahasa prototipe/TBD yang dihapus.
7. Dokumentasi yang diperbarui.
8. Hasil pemeriksaan statis file logo, path, import, aksesibilitas, dan responsivitas.
9. Konfirmasi bahwa Paket dan Rute tidak diubah.
10. Konfirmasi bahwa build, test, lint, typecheck, commit, dan push tidak dijalankan.

Jangan meminta konfirmasi tambahan selama seluruh pekerjaan masih berada dalam ruang lingkup Plan 008 ini. Jika menemukan perbedaan kecil pada lokasi dokumentasi atau penamaan komponen, ikuti struktur repository yang benar sambil mempertahankan maksud instruksi.
