# Catatan Desain & Implementasi: Halaman About WNB

Dokumen ini mencatat struktur, logika konten, dan komposisi teknis untuk halaman Tentang Kami (`/about`) pada aplikasi Wisata Ngaprak Bandung. Halaman ini diimplementasikan pada **Plan 007**.

---

## 1. Tujuan Halaman

1. **Membangun Karakter:** Menceritakan latar belakang WNB dari hobi hingga menjadi layanan petualangan terarah.
2. **Menjelaskan Filosofi:** Menjabarkan makna "Ngaprak" dan peran Land Rover klasik sebagai inti dari sensasi perjalanan.
3. **Mengomunikasikan Janji:** Memaparkan empat nilai utama dan empat pilar janji pengalaman WNB kepada publik.
4. **Menyambut Berbagai Peserta:** Mengakomodasi peserta pemula yang mencari pengalaman sesuai kesiapan, sekaligus menarik peserta yang kembali untuk tantangan berbeda.
5. **Transparansi Operasional:** Menginformasikan lokasi kantor pusat administrasi dan garasi unit cadangan serta titik temu yang fleksibel.

---

## 2. Struktur Komponen (Modular)

Halaman ini tidak dibangun dalam satu file panjang, melainkan dipecah menjadi beberapa komponen (*features/about/components*) agar mudah dirawat:

1. **AboutHeroSection:** Section pendaratan dengan headline *"Berawal dari Hobi, Tumbuh Menjadi Petualangan."*
2. **OriginStorySection:** Cerita awal WNB dengan label "Kisah Awal" (*Dari Hobi yang Terus Bergerak*).
3. **JourneyTimelineSection:** Perjalanan perkembangan WNB dari sebelum 2019 hingga 2026 yang dirender dari `TIMELINE_EVENTS`.
4. **NgaprakMeaningSection:** Filosofi makna "Ngaprak" yang berkaitan dengan proses perjalanan, bukan sekadar tujuan.
5. **ClassicLandRoverSection:** Penekanan pada Land Rover klasik sebagai inti sensasi perjalanan, bukan alat transportasi biasa.
6. **BrandValuesSection:** Empat nilai inti (Tanggung Jawab, Keaslian, Fleksibilitas Terarah, Kehangatan) dirender dari `BRAND_VALUES`.
7. **BrandPromiseSection:** Janji pengalaman yang selaras dengan `ExperienceSection` di Beranda, dirender dari `BRAND_PROMISES`.
8. **AdventureForEveryoneSection:** Menjelaskan ruang pengalaman bagi peserta yang baru pertama kali mencoba serta peserta yang kembali untuk tantangan berbeda.
9. **OperationalBaseSection:** Informasi kantor pusat administrasi dan garasi unit cadangan di Cimahi.
10. **AboutCtaSection:** Penutup halaman dengan CTA *"Pilih Petualangan"* (ke `/paket`) dan *"Rencanakan Perjalanan"* (ke `/booking`).

Konstanta konten (seperti timeline, nilai, dan janji) disimpan dalam `aboutContent.ts` untuk menghindari duplikasi (*DRY principle*).

---

## 3. Penyelarasan dengan Beranda (Homepage)

Halaman About dirancang untuk bekerja sejalan dengan Beranda:
- **Janji Pengalaman:** Narasi 4 pilar di `BrandPromiseSection` sama dengan yang dipaparkan pada `ExperienceSection` di Beranda.
- **Ajakan (CTA):** CTA penutup konsisten dengan pembaruan pada `FinalCtaSection` di Beranda, yaitu menyasar pemula (*perjalanan pertama*) dan pelanggan berulang (*tantangan berikutnya*).
- **Desain Visual:** Menggunakan sistem desain `SectionHeading`, `Container`, dan palet monokromatik (Rugged & Monokrom) yang sama dengan seluruh situs.

---

## 4. Batasan Fakta dan Etika Konten

Sesuai arahan pada *business-facts.md*:
- **Tidak ada klaim mutlak** seperti "aman sepenuhnya" atau "pasti berangkat". Keputusan akhir selalu mengikuti kelayakan operasional.
- **Tidak ada janji foto/video tak terbatas:** Dokumentasi menyesuaikan dengan paket yang dipilih.
- **Fakta terverifikasi:** Alamat Cimahi ditegaskan sebagai kantor pusat administrasi dan garasi unit cadangan, bukan sebagai titik temu utama yang kaku.
- **Tidak ada istilah TBD, placeholder, atau data fiktif pada antarmuka publik:** Seluruh konten visual menggunakan gambar ilustrasi lokal terintegrasi dengan alt text faktual dan notice yang transparan.
