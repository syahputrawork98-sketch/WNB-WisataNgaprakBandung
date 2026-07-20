# Current State — WNB

Dokumen ini mencatat status implementasi terkini, daftar halaman yang sudah selesai, informasi dependensi terpasang, dan daftar masalah terbuka (*open corrections*) pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Posisi Baseline Repository
*   **Tanggal Peninjauan Konteks Terakhir:** 2026-07-21
*   **Konteks Baseline Proyek:** `d7c6c1631bdaf73357aa5a68bbcddef6f4daad73`
*   **Latest Verified Implementation Commit:** `d7c6c1631bdaf73357aa5a68bbcddef6f4daad73`

---

## 2. Daftar Rencana yang Telah Selesai (Completed Plans)
*   `001` — Project structure setup: **Complete** (Struktur monorepo, npm workspaces, dan konfigurasi compiler awal).
*   `002` — Product requirements and page map: **Complete** (Dokumen PRD, FRD, NFRD, sitemap, dan user flow).
*   `003` — Client foundation setup: **Complete** (Inisialisasi React, Vite, Tailwind CSS v4, dan React Router).
*   `004` — Design system and responsive shell: **Complete** (Design tokens monokrom, common components, dan navigasi mobile aksesibel).
*   `005` — Home page implementation: **Complete** (Implementasi section Beranda statis dengan visual pattern placeholder).
*   `005A` — Project context and handoff documentation: **Revised and current**. Menetapkan alur kerja ChatGPT read-only → downloadable .md plan → pengguna → Gemini Antigravity executor working tree (no commit/push/testing) → pengguna testing manual & commit manual → SHA review.
*   `006` — Home page visual enhancement: **Complete** (Peningkatan visual halaman Home menggunakan aset ilustrasi lokal WebP, layout editorial, dan accessibility).
*   `006A` — Aktualisasi konteks bisnis dan penyempurnaan Beranda: **Complete** (Penghapusan bahasa TBD, perapian struktur Beranda, dan penyempurnaan halaman Beranda).
*   `007` — Penyelarasan Homepage dan Implementasi Halaman Tentang Kami WNB: **Complete** (Halaman About diimplementasikan dengan layout modular dan narasi editorial. Placeholder visual dihapus dan diganti ilustrasi lokal).
*   `008` — Implementasi Logo Resmi dan Identitas Global WNB: **Complete** (Logo resmi WNB diterapkan pada header, footer, hero About, favicon, serta perbaikan navigasi dan koreksi visual pendukung).
*   `009` — Implementasi Halaman Daftar dan Detail Paket WNB: **Implementation Candidate** (Delapan paket reguler dan satu pengalaman khusus Buka Jalur berbasis typed local data disajikan pada `/paket` dan `/paket/:slug`. Menunggu pengujian manual dan commit SHA).

---

## 3. Status Halaman Aplikasi (Route Status)

| Rute URL | Halaman (Page) | Status | Keterangan |
| :--- | :--- | :--- | :--- |
| `/` | Home | **Implemented** | Selesai disempurnakan dengan aset ilustrasi sementara WebP dan narasi yang selaras. |
| `/about` | About | **Implemented** | Halaman cerita WNB, sejarah, karakter, janji pengalaman, logo resmi, dan CTA lengkap. |
| `/paket` | Package list | **Implemented** | Halaman daftar 8 paket reguler dengan filter 6 kategori, kartu harga transparan, section Buka Jalur, dan alur proses booking. |
| `/paket/:slug` | Package detail | **Implemented** | Halaman detail dinamis untuk 8 paket reguler berbasis typed local data, penanganan slug tidak valid, ringkasan fakta, dan rekomendasi paket terkait. |
| `/rute` | Route list | **Placeholder** | Menampilkan info sebaran rute fisik menunggu konfirmasi. |
| `/rute/:slug` | Route detail | **Placeholder** | Menampilkan technical preview parameter slug rute terpilih. |
| `/gallery` | Gallery | **Placeholder** | Menampilkan grid dokumentasi pasif menunggu konfirmasi foto. |
| `/booking` | Booking | **Placeholder** | Menampilkan info awal alur redirect WhatsApp Click-to-Chat. |
| `*` | Not Found | **Implemented** | Halaman error 404 interaktif dengan tombol kembali ke Beranda. |

---

## 4. Gambaran Teknis Frontend Saat Ini (Frontend Status)
-   Monorepo berbasis npm workspaces terkonfigurasi untuk `client` dan `server`.
-   Gaya desain monokromatik tangguh (*rugged & monokrom*) diterapkan secara konsisten melalui `@theme` Tailwind CSS v4.
-   Kerangka navigasi (*responsive shell*) desktop navbar, mobile menu drawer (dengan body scroll lock & Escape listener), dan semantic footer menggunakan logo resmi WNB.
-   Halaman Paket (`/paket` dan `/paket/:slug`) mengggunakan data lokal bertipe (`typed local data`) tanpa bergantung pada API eksternal, CMS, Google Drive, atau Google Sheets.
-   Seluruh halaman internal terhubung secara aman menggunakan React Router Declarative Mode dengan navigasi Bahasa Indonesia.
-   Pengguliran halaman otomatis (`ScrollToTop`) di bawah browser router telah berjalan dengan sukses saat transisi rute.
-   Nomor WhatsApp tujuan, rute fisik resmi, dan galeri foto asli belum dimasukkan karena berstatus TBD.
-   Backend server (`server/`), sistem database, autentikasi admin, dan unit testing dinonaktifkan pada MVP ini.

---

## 5. Masalah Terbuka Menunggu Koreksi (Open Corrections)
Plan 009 telah diimplementasikan pada working tree dan menunggu verifikasi serta commit manual dari pengguna.

---

## 6. Status Diskusi Terkini (Active Discussion State)
-   Commit baseline terverifikasi: `d7c6c1631bdaf73357aa5a68bbcddef6f4daad73`.
-   Plan 009 (Implementasi Halaman Daftar dan Detail Paket WNB): Implemented pada working tree. Delapan paket reguler, satu pengalaman khusus, filter kategori, dan detail dinamis telah aktif. Menunggu pengguna melakukan testing manual dan commit SHA.
-   Halaman rute, galeri, dan booking tetap menjadi placeholder.

---

## 7. Kemungkinan Milestone Berikutnya (Next Likely Milestone)
*   **Likely next milestone:** Plan 010 — Implementasi Data dan Detail Rute WNB (TBD)
*   **Status:** Proposed, not approved
*   *Final scope must be discussed and approved first*


