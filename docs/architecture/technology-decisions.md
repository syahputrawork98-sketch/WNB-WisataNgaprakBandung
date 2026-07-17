# Technology Decisions Document — WNB

Dokumen ini mencatat keputusan arsitektur teknologi awal yang dipilih untuk pengembangan proyek **WNB (Wisata Ngaprak Bandung)** beserta justifikasi, risiko, dan status keputusannya.

---

## 1. Daftar Keputusan Arsitektur (Architecture Decision Registry)

| Keputusan ID | Topik Keputusan | Teknologi Terpilih | Status Keputusan | Justifikasi Utama |
| :--- | :--- | :--- | :--- | :--- |
| `AD-001` | Workspace & Package Manager | `npm Workspaces` | **Accepted** | Memungkinkan struktur monorepo yang bersih antara `client` dan `server` tanpa overhead konfigurasi lerna/nx. |
| `AD-002` | Bahasa Pemrograman | `TypeScript` | **Accepted** | Mencegah bug tipe data saat runtime dan mempermudah pemeliharaan model data Paket/Rute secara strict. |
| `AD-003` | UI Library (Frontend) | `React` | **Accepted** | Standar industri yang solid, ekosistem besar, dan komponen modular yang mudah dipelihara. Versi stabil yang kompatibel dipilih saat eksekusi dan dikunci via root `package-lock.json`. |
| `AD-004` | Build Tool (Frontend) | `Vite` | **Accepted** | Waktu start server lokal dan hot reload yang sangat cepat dibanding bundler tradisional. |
| `AD-005` | Styling CSS | `Tailwind CSS` | **Accepted** | Menggunakan Tailwind CSS v4 terintegrasi melalui `@tailwindcss/vite` plugin resmi untuk konfigurasi modern yang efisien. |
| `AD-006` | Client Routing | `React Router` | **Accepted** | Menggunakan React Router dalam **Declarative Mode** pada MVP untuk penanganan rute statis, dynamic slug, dan outlet layout. |
| `AD-007` | Perpustakaan Ikon | `Lucide React` | **Accepted** | Ikon berbasis SVG yang ringan, beresolusi tajam, konsisten, dan mudah disesuaikan. |
| `AD-008` | Penyimpanan Data Awal | `Typed Local Data` | **Accepted** | Karena data paket dan rute bersifat statis untuk MVP, data disimpan sebagai objek bertipe TypeScript di frontend. |
| `AD-009` | Integrasi Transaksi | `WhatsApp Click-to-Chat Redirect` | **Accepted** | Alur booking langsung dialihkan ke WhatsApp untuk menyederhanakan MVP tanpa perlu payment gateway. |
| `AD-010` | Database & Backend Server | *Tanpa Database* (Ditunda) | **Deferred** | Kebutuhan MVP sepenuhnya bersifat informasional. Pembuatan backend API ditunda untuk mempercepat validasi produk. |
| `AD-011` | State Management Global | *Tanpa Global State* | **Accepted** | Kompleksitas aplikasi masih rendah. Props drilling sederhana dan URL Query parameter sudah memadai. |
| `AD-012` | React Compiler | `React Compiler` | **Deferred** | React Compiler ditunda hingga ada kebutuhan nyata untuk optimasi rendering otomatis. |
| `AD-013` | Test Framework | *Tanpa Test Framework* | **Deferred** | Pengujian unit dan integrasi ditunda untuk mempercepat pengembangan fondasi awal MVP. |

---

## 2. Rincian & Justifikasi Penundaan Backend (`AD-010`)
Mengapa backend ditunda pada versi MVP?
1.  **Kecepatan Rilis:** Membuat API backend, skema database, migrasi, dan autentikasi admin membutuhkan waktu pengerjaan yang signifikan. Penundaan ini mempercepat waktu rilis awal secara signifikan.
2.  **Validasi Pasar:** Bisnis wisata off-road ini perlu memvalidasi minat calon pengunjung terlebih dahulu. Jika volume booking via WhatsApp tinggi, investasi pembuatan sistem admin & database dinamis baru dibenarkan secara finansial.
3.  **Biaya Operasional:** Menjalankan aplikasi web statis di hosting serverless adalah efisien secara biaya dibanding menyewa database VPS yang aktif secara terus-menerus.

---

## 3. Analisis Risiko dan Konsekuensi (Risk and Consequence Analysis)

### Keputusan: Menggunakan Typed Local Data (Data Statis di Frontend)
*   **Risiko:** Jika pemilik proyek ingin mengubah harga paket atau deskripsi rute, mereka tidak bisa melakukannya sendiri lewat dasbor CMS. Pengembang harus mengubah file kode data lokal dan melakukan redeploy aplikasi.
*   **Mitigasi:** Struktur data lokal didesain sangat rapi dalam satu file terpusat (misal `src/data/packages.ts`), sehingga perubahan harga dapat diselesaikan dengan cepat dan mudah oleh pengembang.

### Keputusan: Integrasi Transaksi via WhatsApp Click-to-Chat
*   **Risiko:** Tidak ada pencatatan reservasi otomatis di sistem WNB. Kehilangan pesan di WhatsApp admin berarti kehilangan data pesanan pelanggan. Selain itu, tidak ada pembayaran otomatis di muka.
*   **Mitigasi:** Admin WhatsApp dapat melakukan pengelolaan pesan masuk secara manual pada perangkat seluler mereka secara langsung.

### Keputusan: Tailwind CSS untuk Desain
*   **Risiko:** Ketergantungan tinggi pada utility classes yang dapat membuat elemen HTML terlihat panjang di file kode jika tidak dibungkus dengan komponen modular React yang baik.
*   **Mitigasi:** Menerapkan pembagian komponen React sekecil mungkin (*reusable components*) untuk menampung class Tailwind yang berulang.
