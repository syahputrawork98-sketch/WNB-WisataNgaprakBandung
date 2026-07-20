# Design System — WNB

Dokumen ini mendefinisikan sistem desain dasar (*design system foundation*) awal yang digunakan sebagai panduan visual untuk frontend **WNB (Wisata Ngaprak Bandung)**.

> [!IMPORTANT]
> **Status:** Sistem desain ini berstatus **Foundation** (dasar fondasi teknis) dan belum bersifat final. Rincian visual dapat disesuaikan pada fase pengembangan lanjutan setelah disepakati dengan pemilik proyek.

---

## 1. Arah Visual (Visual Direction)
*   **Tema:** Petualangan tangguh, klasik, premium, modern, dan profesional (*adventure, rugged, modern, monochrome, professional*).
*   **Warna Utama:** Monokromatik (hitam, abu-abu, putih) untuk memberikan kontras ekstrem, mempertegas estetika minimalis, dan membiarkan konten fotografi alam Bandung menjadi fokus warna utama di kemudian hari.

---

## 2. Token Desain (Design Tokens)

Seluruh token didefinisikan menggunakan variabel kustom Tailwind CSS v4 di dalam berkas [globals.css](../../client/src/styles/globals.css):

### Warna (Colors)
*   `--color-wnb-black` (`#0a0a0a`): Latar belakang utama aplikasi (*pitch black*).
*   `--color-wnb-surface` (`#171717`): Latar belakang panel kontainer (*dark grey*).
*   `--color-wnb-surface-elevated` (`#222222`): Latar belakang elemen melayang / hover (*medium grey*).
*   `--color-wnb-white` (`#ffffff`): Teks utama dan aksen solid (*pure white*).
*   `--color-wnb-text` (`#f5f5f5`): Teks konten standar (*off-white*).
*   `--color-wnb-muted` (`#a3a3a3`): Teks penjelas / link pasif (*neutral grey*).
*   `--color-wnb-subtle` (`#737373`): Teks sekunder / elemen non-aktif (*light subtle grey*).
*   `--color-wnb-border` (`#404040`): Garis pembatas panel standar (*border grey*).
*   `--color-wnb-border-strong` (`#737373`): Garis pembatas fokus / tombol.
*   `--color-wnb-focus` (`#ffffff`): Warna indikator fokus keyboard.
*   `--color-wnb-danger` (`#ef4444`): Warna pesan error / status kritis.

### Tipografi (Typography)
*   **Font Sans-Serif (`--font-sans`):** `Inter, ui-sans-serif, system-ui, sans-serif`. Digunakan untuk teks isi (*body copy*), label tombol, dan menu navigasi.
*   **Font Display (`--font-display`):** `"Arial Narrow", "Roboto Condensed", Impact, sans-serif`. Digunakan untuk heading halaman (`h1`, `h2`) dan judul besar agar mencerminkan kesan berani (*bold & rugged*).

### Kebulatan Sudut (Border Radius)
*   `--radius-wnb-sm` (`0.25rem` / `4px`): Untuk tombol kecil dan label.
*   `--radius-wnb-md` (`0.5rem` / `8px`): Untuk tombol standar dan card.
*   `--radius-wnb-lg` (`0.75rem` / `12px`): Untuk kontainer panel halaman besar.

### Bayangan Elemen (Shadows)
*   `--shadow-wnb-card` (`0 18px 45px rgb(0 0 0 / 0.25)`): Memberikan efek elevasi pada kontainer di atas latar belakang hitam pekat.

---

## 3. Aturan Tata Letak & Komponen (Layout & Component Rules)

### Container (`client/src/components/common/Container.tsx`)
- Digunakan untuk membungkus konten di seluruh halaman agar memiliki margin samping dan lebar maksimal yang seragam.
- Utility Tailwind dasar: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`.

### Button (`client/src/components/common/Button.tsx`)
Tombol menggunakan tag HTML asli `<button>` dan memiliki 3 varian utama:
1.  **Primary:** Background putih, teks hitam, border putih. Digunakan untuk CTA utama.
2.  **Secondary:** Background transparan, teks putih, border border-wnb-border. Hover menjadi background putih dan teks hitam.
3.  **Ghost:** Tanpa latar dan border, teks abu-abu redup. Menjadi teks putih saat disorot.

### LinkButton (`client/src/components/common/LinkButton.tsx`)
- Komponen pembungkus React Router `Link` yang menggunakan gaya visual yang sama persis dengan `Button` melalui fungsi pengekstraksi class terpadu `getButtonClassName`.

### BrandWordmark (`client/src/components/brand/BrandWordmark.tsx`)
- Wordmark berbasis teks sementara untuk menampilkan logo teks `WNB` di pojok kiri atas aplikasi. Pada layar desktop, ditambahkan sub-teks kecil `"Wisata Ngaprak Bandung"`.
- Dilengkapi dengan properti aksesibilitas `aria-label="WNB — kembali ke Beranda"`.

### SkipLink (`client/src/components/common/SkipLink.tsx`)
- Tautan aksesibilitas tersembunyi yang hanya muncul saat pengguna keyboard menekan tombol `Tab` pertama kali. Menghubungkan langsung ke target ID `#main-content`.

### SectionHeading (`client/src/components/common/SectionHeading.tsx`)
- Digunakan untuk memisahkan bagian konten halaman.
- Mendukung dynamic heading tags (`h2` / `h3`), alignment kiri/tengah, eyebrow di atas judul, dan paragraf deskripsi dengan batasan lebar pembacaan.

### PageHeader (`client/src/components/common/PageHeader.tsx`)
- Header besar di bagian atas halaman non-Beranda yang memuat H1 tunggal, deskripsi, dan slot opsional untuk tombol aksi di sebelah kanan.

---

## 4. Application Shell & Navigasi responsif

### Navbar Desktop (`client/src/components/navigation/Navbar.tsx`)
- Bersifat lengket (*sticky*) di bagian atas layar dengan efek backdrop blur semi-transparan.
- Menampilkan logo teks, daftar menu dari navigasi terpusat, dan tombol CTA booking.

### Mobile Navigation (`client/src/components/navigation/MobileNavigation.tsx`)
- Muncul di bawah breakpoint `md` (`768px`) dalam bentuk drawer layar penuh.
- **Fitur Aksesibilitas & Kontrol:**
  *   Menutup otomatis jika tautan menu diklik.
  *   Menutup otomatis saat berpindah route/alamat.
  *   Menutup otomatis jika menekan tombol keyboard `Escape`.
  *   Mengunci gulir halaman utama (`body` overflow hidden) ketika menu sedang terbuka untuk mencegah disorientasi layar.

### Footer (`client/src/components/navigation/Footer.tsx`)
- footer statis dengan format grid 3-kolom (Brand, Navigasi internal, dan Info Reservasi).
- Dilengkapi kalimat status netral: *"Informasi kontak resmi akan ditambahkan setelah dikonfirmasi."*

---

## 5. Panduan Aksesibilitas (Accessibility Rules)
1.  **Semantic Elements:** Wajib menggunakan `<nav>`, `<footer>`, `<header>`, dan `<main>` pada struktur shell.
2.  **Keyboard Navigation:** Fokus visual harus jelas melalui gaya `focus-visible` (outline putih tebal dengan offset).
3.  **Screen Reader:** Tombol ikonik / menu toggle wajib menyertakan `aria-label`, `aria-controls`, dan `aria-expanded`.
4.  **Reduced Motion:** Gaya default meminimalkan durasi transisi dan animasi bila pengguna mengaktifkan preferensi pembatasan gerakan sistem.

---

## 6. Daftar Elemen yang Ditunda (*Deferred Items*)
Beberapa elemen penting berikut ditunda pengembangannya dan akan diimplementasikan pada fase berikutnya setelah detailnya dikonfirmasi:
*   Aset gambar logo resmi WNB.
*   Pemasangan file font tipografi resmi via hosting lokal (font sistem digunakan saat ini).
*   Aset foto dokumentasi asli.
*   Garis pembatas visual berpola pegunungan / off-road.
*   Animasi transisi kompleks (*motion library*).
*   Komponen fungsional card paket dan card rute.
