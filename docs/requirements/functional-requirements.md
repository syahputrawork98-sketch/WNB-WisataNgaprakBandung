# Functional Requirements Document (FRD) — WNB

Dokumen ini mendefinisikan kebutuhan fungsional sistem untuk aplikasi **WNB (Wisata Ngaprak Bandung)** versi MVP.

## 1. Navigasi (`FR-NAV`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-NAV-001` | Pengunjung dapat berpindah ke seluruh halaman utama (Home, About, Paket, Rute, Gallery) melalui menu navigasi utama (Navbar). |
| `FR-NAV-002` | Navbar harus memiliki tampilan responsif: horizontal list pada desktop dan ikon menu hamburger yang dapat di-toggle pada mobile. |
| `FR-NAV-003` | Logo WNB pada navbar harus selalu mengarahkan pengguna kembali ke halaman Beranda (`/`). |
| `FR-NAV-004` | Route atau halaman yang sedang aktif saat ini harus ditandai secara visual pada navbar (misal dengan perubahan warna atau garis bawah). |
| `FR-NAV-005` | Bagian bawah halaman (Footer) harus menyediakan link navigasi penting, informasi kontak operasional dasar, serta tautan ke media sosial resmi (bila tersedia). |

## 2. Halaman Beranda (`FR-HOME`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-HOME-001` | Beranda harus menampilkan bagian Hero dengan tajuk utama (headline) petualangan yang kuat, deskripsi singkat, dan tombol ajakan bertindak (CTA) utama menuju daftar paket. |
| `FR-HOME-002` | Beranda harus menampilkan daftar paket wisata unggulan (featured packages) dalam bentuk card ringkas yang terhubung ke detail paket masing-masing. |
| `FR-HOME-003` | Beranda harus menampilkan cuplikan rute perjalanan unggulan yang paling diminati. |
| `FR-HOME-004` | Beranda harus memuat bagian "Alasan Memilih WNB" yang menjelaskan keunggulan layanan secara poin per poin. |
| `FR-HOME-005` | Beranda harus menampilkan cuplikan galeri foto aktivitas petualangan terbaru dengan tombol navigasi menuju halaman Galeri lengkap. |
| `FR-HOME-006` | Beranda harus memuat tombol CTA di bagian bawah halaman untuk langsung mengarahkan pengunjung ke halaman pemesanan (`/booking`). |

## 3. Halaman Tentang Kami (`FR-ABOUT`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-ABOUT-001` | Pengunjung dapat membaca cerita latar belakang berdirinya WNB serta visi misi petualangan yang ditawarkan. |
| `FR-ABOUT-002` | Halaman menampilkan informasi mengenai standar keamanan operasional, kondisi armada Land Rover klasik, serta driver yang telah dikonfirmasi oleh pemilik proyek. |
| `FR-ABOUT-003` | Halaman harus memuat tombol navigasi yang mengarahkan pengunjung menuju daftar paket (`/paket`) atau formulir pemesanan (`/booking`) sebagai kelanjutan informasi. |

## 4. Halaman Paket Wisata (`FR-PKG`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-PKG-001` | Pengunjung dapat melihat daftar seluruh paket perjalanan yang tersedia dalam format grid card yang rapi dan konsisten. |
| `FR-PKG-002` | Pengunjung dapat mengklik tombol detail pada card paket untuk membuka halaman detail paket wisata terkait. |
| `FR-PKG-003` | Setiap paket wisata harus dapat diakses melalui URL unik menggunakan format slug ramah SEO (contoh: `/paket/land-rover-adventure`). |
| `FR-PKG-004` | Halaman detail paket harus menampilkan informasi lengkap meliputi: Nama paket, gambar sampul, deskripsi lengkap, highlight aktivitas, estimasi durasi, kapasitas peserta per kendaraan, kisaran harga (jika terkonfirmasi), serta daftar fasilitas yang termasuk (*included*) dan tidak termasuk (*excluded*). |
| `FR-PKG-005` | Halaman detail paket harus menyediakan tombol CTA "Pesan Paket Ini" yang secara otomatis mengarahkan pengunjung ke halaman `/booking` dengan parameter paket tersebut telah terpilih secara bawaan. |

## 5. Halaman Rute Perjalanan (`FR-ROUTE`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-ROUTE-001` | Pengunjung dapat melihat daftar seluruh jalur/rute off-road atau gunung yang ditawarkan. |
| `FR-ROUTE-002` | Pengunjung dapat membuka detail rute perjalanan untuk mempelajari kondisi lapangan secara spesifik. |
| `FR-ROUTE-003` | Setiap rute harus dapat diakses melalui URL unik menggunakan format slug (contoh: `/rute/:slug` atau `/rute/nama-rute`). |
| `FR-ROUTE-004` | Detail rute harus menampilkan tingkat kesulitan jalur (misal: Easy, Medium, Hard), estimasi waktu tempuh, kondisi medan (berbatu, lumpur, dll.), titik awal (starting point), dan titik akhir rute. |
| `FR-ROUTE-005` | Halaman detail rute harus menampilkan daftar paket wisata terkait yang menggunakan rute perjalanan tersebut. |

## 6. Halaman Galeri Dokumentasi (`FR-GAL`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-GAL-001` | Pengunjung dapat melihat grid dokumentasi berupa foto-foto berkualitas tinggi dari perjalanan petualangan WNB sebelumnya. |
| `FR-GAL-002` | Galeri harus dilengkapi dengan filter kategori (misal: Semua, Off-Road, Mountain, Corporate, Community) agar pengunjung dapat menyaring tipe foto yang diinginkan. |
| `FR-GAL-003` | Pengunjung dapat mengklik salah satu foto untuk memperbesar tampilan foto tersebut menggunakan modal peninjau gambar (lightbox). |
| `FR-GAL-004` | Setiap gambar di dalam galeri harus memiliki deskripsi alternatif (`alt` text) demi kebutuhan aksesibilitas dan SEO. |

## 7. Halaman Pemesanan (`FR-BOOK`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-BOOK-001` | Pengunjung dapat memilih paket wisata (dan opsi rute jika relevan) melalui input pilihan dropdown di dalam form booking. |
| `FR-BOOK-002` | Pengunjung dapat mengisi informasi pemesanan yang meliputi: Nama lengkap, Nomor WhatsApp aktif, Tanggal rencana perjalanan, Jumlah peserta, dan Catatan tambahan/khusus. |
| `FR-BOOK-003` | Form harus melakukan validasi input dasar di sisi klien (seperti memastikan kolom nama, nomor WhatsApp, tanggal, dan jumlah peserta terisi dan berformat valid) sebelum form dikirimkan. |
| `FR-BOOK-004` | Sistem harus menyusun pesan teks terformat secara otomatis dari input form (contoh pesan: *"Halo WNB, saya ingin booking paket [Nama Paket] untuk [Jumlah] orang pada tanggal [Tanggal]..."*). |
| `FR-BOOK-005` | Saat form dikirimkan, aplikasi harus membuka tautan WhatsApp Click-to-Chat (`https://wa.me/` atau `https://api.whatsapp.com/send`) di tab baru dengan nomor tujuan resmi WNB beserta teks pesan terformat yang telah disusun. |
| `FR-BOOK-006` | Sesuai dengan batasan MVP, sistem **tidak menyimpan** data transaksi atau formulir ke dalam database lokal maupun database server apa pun. |

## 8. Penanganan Error (`FR-ERR`)

| Kode ID | Deskripsi Kebutuhan Fungsional |
| :--- | :--- |
| `FR-ERR-001` | Jika pengunjung memasukkan URL atau rute navigasi yang tidak terdaftar di aplikasi, sistem harus menampilkan halaman 404 (Not Found). |
| `FR-ERR-002` | Halaman Not Found harus menyediakan pesan kesalahan yang informatif serta tombol pintas yang jelas untuk mengarahkan pengguna kembali ke halaman Beranda (`/`). |
