# Non-Functional Requirements Document (NFRD) — WNB

Dokumen ini mendefinisikan kebutuhan nonfungsional, batasan kualitas, dan standar teknis aplikasi **WNB (Wisata Ngaprak Bandung)** versi MVP.

## 1. Responsivitas (`NFR-RESP`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-RESP-001` | Multi-perangkat | Tampilan antarmuka (UI) harus berfungsi dengan baik dan proporsional pada berbagai ukuran layar, termasuk ponsel pintar (mobile), tablet, laptop, dan komputer meja (desktop). |
| `NFR-RESP-002` | Navigasi Mobile | Pada resolusi layar di bawah 768px (lebar mobile), navbar utama wajib menyembunyikan menu teks dan menggantinya dengan tombol hamburger menu. |
| `NFR-RESP-003` | Grid Fleksibel | Susunan kolom pada grid daftar paket, rute, dan galeri harus secara dinamis menyesuaikan lebar layar (misal: 1 kolom di mobile, 2 kolom di tablet, dan 3 atau 4 kolom di desktop). |
| `NFR-RESP-004` | Bebas Overflow | Aplikasi harus dipastikan tidak memiliki kebocoran tata letak berupa pengguliran horizontal yang tidak disengaja (*accidental horizontal overflow*) pada semua resolusi standar perangkat. |

## 2. Kinerja Aplikasi (`NFR-PERF`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-PERF-001` | Optimasi Aset | Seluruh aset gambar yang digunakan harus dikompresi ke format modern yang efisien (seperti WebP atau AVIF) dengan resolusi yang disesuaikan dengan kebutuhan display untuk mencegah pemuatan file yang terlalu besar. |
| `NFR-PERF-002` | Lazy Loading | Gambar-gambar non-kritis (seperti daftar galeri bawah, card paket di bagian bawah) harus menerapkan teknik *lazy loading* bawaan browser (`loading="lazy"`) agar tidak memperlambat waktu muat awal halaman. |
| `NFR-PERF-003` | Pustaka Eksternal | Pengembang harus menghindari penggunaan dependensi atau library JavaScript pihak ketiga berukuran besar (misal: jQuery atau library animasi berat) tanpa kebutuhan teknis yang sangat mendesak. |
| `NFR-PERF-004` | Koneksi Terbatas | Halaman web harus tetap ringan, responsif, dan dapat diakses dengan cepat bahkan pada koneksi internet seluler (3G/4G dengan latensi tinggi). |

## 3. Aksesibilitas (`NFR-A11Y`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-A11Y-001` | Alternatif Teks | Semua elemen gambar yang memiliki fungsi informasi atau navigasi wajib dibekali atribut `alt` yang deskriptif untuk dibaca oleh pembaca layar (*screen reader*). |
| `NFR-A11Y-002` | Navigasi Keyboard | Seluruh elemen interaktif seperti tombol, link, dan input formulir harus dapat dijangkau dan dioperasikan menggunakan navigasi keyboard (menggunakan tombol `Tab` dan `Enter` / `Space`). |
| `NFR-A11Y-003` | Kontras Warna | Perbandingan kontras antara teks dengan latar belakangnya harus memenuhi standar minimum aksesibilitas (kontras memadai, terutama teks putih di atas gambar gelap atau background abu-abu gelap). |
| `NFR-A11Y-004` | Struktur Heading | Penggunaan tag heading HTML (`<h1>` hingga `<h6>`) harus terstruktur secara hierarkis (misalnya hanya ada satu `<h1>` utama di setiap halaman, diikuti oleh `<h2>` untuk bagian utama, dan `<h3>` untuk sub-bagian). |
| `NFR-A11Y-005` | Form Labeling | Setiap kolom input pada Form Pemesanan (`/booking`) wajib memiliki elemen `<label>` yang terasosiasi secara eksplisit menggunakan atribut `htmlFor` (atau `for`). |

## 4. Kemudahan Pemeliharaan (`NFR-MAIN`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-MAIN-001` | TypeScript Strict | Kode frontend wajib ditulis menggunakan mode TypeScript Strict (`"strict": true` pada tsconfig) guna mencegah bug runtime akibat tipe data yang tidak aman. |
| `NFR-MAIN-002` | Kering (DRY) | Data paket dan data rute harus disimpan dalam sebuah file data terpusat (sebagai array of objects ter-type). Data tersebut tidak boleh ditulis secara manual (hardcode) berulang kali di berbagai komponen UI yang berbeda. |
| `NFR-MAIN-003` | Reusabilitas | Komponen umum seperti Tombol (Button), Card, Layout Utama, dan Page Header harus dipisahkan menjadi komponen modular mandiri agar dapat digunakan kembali di seluruh aplikasi. |
| `NFR-MAIN-004` | Routing Terpusat | Definisi rute aplikasi dan parameter URL harus dikelola dalam berkas konfigurasi rute terpusat untuk meminimalkan kesalahan penulisan alamat tautan. |
| `NFR-MAIN-005` | Variabel Lingkungan | Nilai konfigurasi sensitif atau yang rentan berubah (seperti URL API di masa depan atau nomor WhatsApp tujuan sementara) harus dibaca melalui variabel lingkungan (`process.env` atau `import.meta.env`) dan tidak di-hardcode langsung di dalam logika bisnis. |

## 5. Konsistensi Visual (`NFR-VIS`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-VIS-001` | Design Tokens | Semua nilai warna, jarak (spacing/padding/margin), ukuran huruf (typography), dan radius sudut kotak (border-radius) harus mengacu pada token desain yang didefinisikan secara terpusat (misal via CSS Variables atau konfigurasi Tailwind). |
| `NFR-VIS-002` | Identitas Visual | Gaya visual aplikasi wajib konsisten mencerminkan tema petualangan (adventure, rugged, modern) dengan warna dominan gelap/monokrom dan font heading yang tebal. |
| `NFR-VIS-003` | Konsistensi Tombol | Tombol dengan tingkat kepentingan yang sama (Primary vs Secondary) harus memiliki visualisasi yang seragam di seluruh halaman (warna, efek hover, ukuran font). |
| `NFR-VIS-004` | Pola Card | Desain card untuk menampilkan Paket Wisata dan Rute Perjalanan harus mengikuti pola visual yang sama agar antarmuka terasa menyatu dan rapi. |

## 6. Kualitas Konten (`NFR-CONT`)

| Kode ID | Kategori | Deskripsi Kebutuhan Nonfungsional |
| :--- | :--- | :--- |
| `NFR-CONT-001` | Bebas Placeholder | Dilarang menggunakan teks bawaan kosong (*Lorem Ipsum*) atau gambar placeholder generic pada rilis final aplikasi. Semua teks harus ditulis dalam Bahasa Indonesia yang informatif dan relevan. |
| `NFR-CONT-002` | Penanda Draft | Semua data yang masih berupa perkiraan atau belum dikonfirmasi oleh pemilik proyek harus ditandai dengan label "Draft" atau penanda khusus agar tidak menyesatkan calon pelanggan. |
| `NFR-CONT-003` | Validasi Informasi | Informasi kritis seperti harga paket, kontak WhatsApp, koordinat titik awal rute, dan alamat fisik kantor tidak boleh dibuat-buat secara sepihak oleh pengembang tanpa persetujuan tertulis dari pemilik proyek. |
| `NFR-CONT-004` | Akurasi Deskripsi | Deskripsi mengenai keindahan alam, rute off-road, dan tingkat kesulitan lintasan harus ditulis secara realistis dan objektif berdasarkan kondisi lapangan Bandung yang sebenarnya. |
