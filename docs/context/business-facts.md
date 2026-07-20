# Business Facts and Terminology — WNB

Dokumen ini memetakan fakta bisnis resmi, terminologi wajib, dan daftar asumsi yang dilarang keras guna menjaga integritas dan validitas informasi pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Fakta Terkonfirmasi (Confirmed Facts)
*   **Identitas Brand:** Proyek ini menggunakan nama **WNB — Wisata Ngaprak Bandung**.
*   **Konteks Bisnis:** WNB adalah penyedia pengalaman wisata petualangan alam dan off-road di wilayah Bandung.
*   **Sejarah:** WNB mulai beroperasi pada tahun **2019** dan memasuki tahap pengaktifan dan pengembangan kembali pada tahun **2026**.
*   **Makna Brand:** `Ngaprak` berkaitan dengan semangat menyusuri jalan, menjelajahi jalur, dan menemukan sisi alam yang tidak biasa. Kesan utama brand adalah **tangguh dan penuh adrenalin**, tetapi tetap hangat, terarah, berkesan, dan dapat disesuaikan dengan karakter peserta.
*   **Target Pasar & Layanan:** Melayani keluarga, pasangan, kelompok pertemanan, komunitas, perusahaan/organisasi, dan wisatawan. Bentuk pengalaman mencakup perjalanan privat, open trip, kegiatan perusahaan, perayaan momen khusus, camping, dan perjalanan yang disesuaikan.
*   **Armada Utama:** Kendaraan operasional inti WNB menggunakan kendaraan off-road klasik **Land Rover**.
*   **Varian Kendaraan:** Kategori armada dibedakan menjadi dua konfigurasi sasis:
    -   Land Rover Short / Short Wheelbase (SWB)
    -   Land Rover Long / Long Wheelbase (LWB)
*   **Pemilihan Kendaraan:** Pemilihan unit menyesuaikan jumlah peserta, karakter rute, kebutuhan perjalanan, dan keputusan operasional WNB.
*   **Basis Operasional & Titik Temu:** Basis operasional berada di Cimahi. Alamat `Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi` berfungsi sebagai **kantor pusat administrasi dan garasi unit cadangan**, bukan titik temu utama pelanggan. Titik temu perjalanan bersifat fleksibel dan ditentukan berdasarkan kesepakatan pemesanan.
*   **Persiapan Perjalanan:** Persiapan perjalanan mempertimbangkan kondisi kendaraan, cuaca, kondisi jalur, rute, kebutuhan peserta, dan keputusan tim lapangan.
*   **Perbedaan Konsep:** Paket Wisata dan Rute Perjalanan merupakan entitas yang berbeda:
    -   *Paket* = layanan atau produk perjalanan yang ditawarkan WNB.
    -   *Rute* = jalur perjalanan yang digunakan dalam suatu kegiatan.
*   **Integrasi Reservasi:** Booking MVP direncanakan menggunakan form singkat yang menghasilkan WhatsApp Click-to-Chat setelah nomor resmi dikonfirmasi.
*   **Status Visual:** Halaman Beranda menggunakan foto stock berlisensi bebas pakai sebagai **aset ilustrasi sementara** yang disimpan secara lokal. Foto stock yang memperlihatkan kendaraan wajib menyertakan keterangan bahwa foto tersebut merupakan ilustrasi dan bukan dokumentasi armada WNB. Aset foto resmi WNB masih menunggu ketersediaan.
*   **Mockup:** Arah mockup/desain grafis yang diberikan bersifat panduan visual saja (*visual direction*), bukan blueprint struktur halaman final yang wajib ditiru 100%.

---

## 2. Terminologi Wajib (Required Terminology)
Gunakan istilah-istilah berikut secara konsisten di seluruh kode sumber dan dokumentasi:
-   `Land Rover klasik` (bukan Jeep, mobil Jeep, atau mobil off-road biasa).
-   `Land Rover Short` atau `Short Wheelbase (SWB)` untuk armada sasis pendek.
-   `Land Rover Long` atau `Long Wheelbase (LWB)` untuk armada sasis panjang.
-   `WhatsApp Click-to-Chat` untuk mekanisme integrasi reservasi.
-   `Paket` untuk menunjuk paket wisata.
-   `Rute` untuk menunjuk jalur lintasan perjalanan.
-   `Galeri` untuk grid dokumentasi foto.
-   `Booking` untuk formulir pemesanan.

---

## 3. Istilah Dilarang (Prohibited Terminology)
Dilarang keras menuliskan istilah berikut untuk armada atau booking WNB:
-   `Jeep` (merupakan merek dagang lain dan tidak sesuai dengan armada Land Rover WNB).
-   `armada Jeep`
-   `Jeep Adventure`
-   `WhatsApp API` (karena tidak menggunakan integrasi API WhatsApp Business berbayar).

> [!NOTE]
> Pengecualian diperbolehkan untuk alamat URL teknis seperti `https://api.whatsapp.com/send` yang secara valid digunakan oleh browser, namun penamaan mekanismenya tetap wajib ditulis sebagai *WhatsApp Click-to-Chat*.

---

## 4. Informasi Belum Terkonfirmasi (TBD Facts)
Detail-detail di bawah ini berstatus **TBD (To Be Determined / Menunggu Konfirmasi)** dan dilarang disajikan sebagai fakta di UI web publik:
-   Nomor WhatsApp resmi tujuan admin WNB.
-   Daftar harga paket wisata.
-   Durasi paket wisata, dan detail paket komersial final.
-   Kapasitas penumpang numerik per kendaraan (Short/Long).
-   Seri Land Rover (Series I, II, III, Defender, dsb.).
-   Tahun produksi kendaraan.
-   Jenis mesin (diesel/bensin) dan spesifikasi modifikasi mesin Land Rover.
-   Jumlah total unit armada kendaraan.
-   Koordinat, peta detail, nama rute perjalanan, titik start/finish presisi, jalur evakuasi, atau informasi internal rute.
-   Tingkat kesulitan lintasan (Easy, Medium, Hard).
-   Nama badan hukum, bentuk badan usaha, legalitas usaha, atau hak cipta final.
-   Nama, jabatan, atau profil pendiri/pengelola yang masih memerlukan konfirmasi.
-   Sertifikasi atau klaim `driver terlatih` / `driver bersertifikat`.
-   Standar keselamatan absolut, prosedur darurat, batas usia, batasan kesehatan peserta, dan nama/kontak fasilitas kesehatan yang belum diverifikasi.
-   Grid ulasan/testimoni pelanggan, statistik rating, jumlah pelanggan, atau angka kepuasan.
-   Diskon, slot terbatas, urgensi palsu, atau klaim promosi yang tidak memiliki sumber resmi.
-   Aset foto dokumentasi asli masih menunggu ketersediaan. (Logo resmi WNB telah tersedia dan diimplementasikan).

---

## 4.5. Status Logo Resmi
- Logo resmi WNB telah tersedia (sumber file: `Logo Utama WNB.png`).
- Logo diterapkan sebagai aset lokal website, bukan external hotlink.
- Penggunaan logo harus mempertahankan bentuk, warna, isi, dan proporsi aslinya.

---

## 4.6. Status Data Paket Wisata (Plan 009)
- Delapan paket reguler dan satu pengalaman khusus (Trail Exploration — Buka Jalur) telah disetujui sebagai data publik resmi dan diimplementasikan melalui `typed local data` pada `client/src/features/packages/packagesData.ts`.
- Harga publik disajikan dalam format "Mulai dari" dengan satuan Rupiah Indonesia yang jelas (per unit / per peserta).
- Rincian biaya internal, margin, honor driver, dan kode administrasi internal dilarang keras ditampilkan di antarmuka publik.

---

## 5. Asumsi Dilarang Keras (Prohibited Assumptions)
Model AI pelaksana (Antigravity) atau pengembang dilarang keras mengarang informasi berikut:
*   Mengklaim area operasional di Bandung Barat, Bandung Selatan, Ciwidey, Lembang, Pangalengan, atau wilayah spesifik lainnya sebelum ada konfirmasi resmi.
*   Mengarang bahwa driver WNB bersertifikat nasional, memiliki standar keselamatan tertentu, atau menggunakan kalimat "driver terlatih" tanpa persetujuan prosedur tertulis.
*   Mengarang testimoni fiktif pelanggan, angka kepuasan, rating, diskon harga, urgensi palsu, atau masa garansi.
*   Menuliskan klaim kenyamanan (misal: "SWB lebih nyaman dari LWB") atau keunggulan performa modifikasi mesin tanpa pembuktian teknis.
*   Mengklaim bahwa seluruh paket, rute, Galeri, atau WhatsApp Click-to-Chat sudah aktif bila halaman terkait masih placeholder.

---

## 6. Aturan Pembaruan Konfirmasi (Confirmation Rule)
1.  **Google Drive sebagai Referensi Data Inti:** Google Drive WNB berfungsi sebagai referensi data inti, bukan sumber yang disalin mentah-mentah atau otomatis.
2.  Jika pemilik proyek memberikan fakta atau data baru (seperti nomor telepon resmi atau harga paket), fakta publik baru tersebut harus melalui keputusan eksplisit di rencana implementasi berikutnya.
3.  Ubah entri TBD terkait di dalam berkas `business-facts.md` ini menjadi status **CONFIRMED** hanya setelah disetujui.
4.  Terapkan data tersebut ke dalam file kode data lokal secara presisi tanpa menambah asumsi atau dekorasi teks tambahan.
