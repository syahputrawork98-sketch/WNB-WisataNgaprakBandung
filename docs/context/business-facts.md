# Business Facts and Terminology — WNB

Dokumen ini memetakan fakta bisnis resmi, terminologi wajib, dan daftar asumsi yang dilarang keras guna menjaga integritas dan validitas informasi pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Fakta Terkonfirmasi (Confirmed Facts)
*   **Identitas Brand:** Proyek ini menggunakan nama **WNB — Wisata Ngaprak Bandung**.
*   **Konteks Bisnis:** Layanan yang ditawarkan adalah wisata petualangan off-road/outdoor di wilayah Bandung.
*   **Armada Utama:** Kendaraan operasional WNB menggunakan kendaraan off-road klasik **Land Rover** dengan bodi berbahan dasar besi atau logam.
*   **Varian Kendaraan:** Kategori armada dibagi menjadi dua konfigurasi panjang sasis:
    -   Land Rover Short / Short Wheelbase (SWB)
    -   Land Rover Long / Long Wheelbase (LWB)
*   **Perbedaan Konsep:** Paket Wisata dan Rute Perjalanan merupakan entitas yang berbeda:
    -   *Paket* = layanan atau produk perjalanan yang ditawarkan WNB.
    -   *Rute* = jalur perjalanan yang digunakan dalam suatu kegiatan.
*   **Integrasi Reservasi:** Booking MVP direncanakan menggunakan form singkat yang menghasilkan WhatsApp Click-to-Chat setelah nomor resmi dan data yang diperlukan dikonfirmasi.
*   **Status Visual:** Halaman Beranda (Home) menggunakan foto stock berlisensi bebas pakai sebagai **aset ilustrasi sementara** (*temporary stock illustration*) yang disimpan secara lokal. Foto stock unit kendaraan wajib menyertakan keterangan notice ilustrasi. Aset foto resmi WNB tetap TBD.
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
-   Durasi paket wisata.
-   Kapasitas penumpang spesifik per kendaraan (Short/Long).
-   Seri Land Rover (Series I, II, III, Defender, dsb.).
-   Tahun produksi kendaraan.
-   Jenis mesin (diesel/bensin) dan spesifikasi modifikasi mesin.
-   Ketebalan material bodi besi/logam dan konstruksi sasis.
-   Jumlah total unit armada kendaraan.
-   Nama rute perjalanan dan lokasi spesifiknya.
-   Tingkat kesulitan lintasan (Easy, Medium, Hard).
-   Titik awal (*starting point*) dan titik akhir rute perjalanan.
-   Wilayah operasional spesifik (kecuali sebutan umum "Bandung").
-   Alamat kantor fisik, jam operasional, email, dan akun sosial media resmi.
-   Nama badan hukum, nama pemilik, legalitas usaha, dan profil tim.
-   Nama driver dan kualifikasi/sertifikasi driver.
-   Standar atau prosedur keselamatan darurat terperinci.
-   Grid ulasan/testimoni pelanggan, statistik rating, dan jumlah perjalanan.
-   Aset foto dokumentasi asli dan logo gambar resmi.

---

## 5. Asumsi Dilarang Keras (Prohibited Assumptions)
Model AI pelaksana (Antigravity) atau pengembang dilarang keras mengarang informasi berikut:
*   Mengklaim area operasional di Bandung Barat, Bandung Selatan, Ciwidey, Lembang, Pangalengan, atau wilayah spesifik lainnya sebelum ada konfirmasi resmi.
*   Mengarang bahwa driver WNB bersertifikat nasional, memiliki standar keselamatan tertentu, atau menggunakan kalimat "driver terlatih" tanpa persetujuan prosedur tertulis.
*   Mengarang testimoni fiktif pelanggan, angka kepuasan, rating, diskon harga, atau masa garansi.
*   Menuliskan klaim kenyamanan (misal: "SWB lebih nyaman dari LWB") atau keunggulan performa modifikasi mesin tanpa pembuktian teknis.

---

## 6. Aturan Pembaruan Konfirmasi (Confirmation Rule)
Jika pemilik proyek memberikan fakta atau data baru (seperti nomor telepon resmi atau harga paket):
1.  Fakta tersebut harus dicatat sebagai keputusan eksplisit di rencana implementasi berikutnya.
2.  Ubah entri TBD terkait di dalam berkas `business-facts.md` ini menjadi status **CONFIRMED**.
3.  Terapkan data tersebut ke dalam file kode data lokal secara presisi tanpa menambah asumsi atau dekorasi teks tambahan.
