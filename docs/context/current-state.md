# Current State — WNB

Dokumen ini mencatat status implementasi terkini, daftar halaman yang sudah selesai, informasi dependensi terpasang, dan daftar masalah terbuka (*open corrections*) pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Posisi Baseline Repository
*   **Tanggal Peninjauan Konteks Terakhir:** 2026-07-20
*   **Konteks Baseline Proyek:** `ea0c8e100e923401018b93bfdd7f2653a3ad6874`
*   **Latest Verified Implementation Commit:** `ea0c8e100e923401018b93bfdd7f2653a3ad6874`

---

## 2. Daftar Rencana yang Telah Selesai (Completed Plans)
*   `001` — Project structure setup: **Complete** (Struktur monorepo, npm workspaces, dan konfigurasi compiler awal).
*   `002` — Product requirements and page map: **Complete** (Dokumen PRD, FRD, NFRD, sitemap, dan user flow).
*   `003` — Client foundation setup: **Complete** (Inisialisasi React, Vite, Tailwind CSS v4, dan React Router).
*   `004` — Design system and responsive shell: **Complete** (Design tokens monokrom, common components, dan navigasi mobile aksesibel).
*   `005` — Home page implementation: **Complete** (Implementasi section Beranda statis dengan visual pattern placeholder).
*   `005A` — Project context and handoff documentation: **Revised and current**. Menetapkan alur kerja ChatGPT read-only → downloadable .md plan → pengguna → Gemini Antigravity executor working tree (no commit/push/testing) → pengguna testing manual & commit manual → SHA review.
*   `006` — Home page visual enhancement: **Complete** (Peningkatan visual halaman Home menggunakan aset ilustrasi lokal WebP, layout editorial, dan accessibility).
*   `006A` — Aktualisasi konteks bisnis dan penyempurnaan Beranda: **Complete** (Penghapusan bahasa TBD, perapian struktur Beranda, dan penambahan ExperienceSection. Logo resmi berstatus deferred karena aset belum tersedia).
*   `007` — Penyelarasan Homepage dan Implementasi Halaman Tentang Kami WNB: **Complete** (Halaman About diimplementasikan dengan layout modular dan narasi editorial. Placeholder visual dihapus dan diganti ilustrasi lokal. Koreksi diselesaikan secara terpadu).
*   `008` — Implementasi Logo Resmi dan Identitas Global WNB: **Implementation Candidate** (Penerapan logo resmi pada header, footer, hero About, dan perbaikan identitas navigasi. Menunggu review manual).

---

## 3. Status Halaman Aplikasi (Route Status)

| Rute URL | Halaman (Page) | Status | Keterangan |
| :--- | :--- | :--- | :--- |
| `/` | Home | **Implemented** | Selesai dengan aset ilustrasi sementara WebP dan narasi yang selaras. |
| `/about` | About | **Implemented** | Halaman cerita WNB, sejarah, karakter, janji pengalaman, dan CTA lengkap (koreksi pasca-review diterapkan pada working tree, menunggu verifikasi commit berikutnya). |
| `/paket` | Package list | **Placeholder** | Menampilkan info daftar paket dengan typed local data kelak. |
| `/paket/:slug` | Package detail | **Placeholder** | Menampilkan technical preview parameter slug paket terpilih. |
| `/rute` | Route list | **Placeholder** | Menampilkan info sebaran rute fisik menunggu konfirmasi. |
| `/rute/:slug` | Route detail | **Placeholder** | Menampilkan technical preview parameter slug rute terpilih. |
| `/gallery` | Gallery | **Placeholder** | Menampilkan grid dokumentasi pasif menunggu konfirmasi foto. |
| `/booking` | Booking | **Placeholder** | Menampilkan info awal alur redirect WhatsApp Click-to-Chat. |
| `*` | Not Found | **Implemented** | Halaman error 404 interaktif dengan tombol kembali ke Beranda. |

---

## 4. Gambaran Teknis Frontend Saat Ini (Frontend Status)
-   Monorepo berbasis npm workspaces terkonfigurasi untuk `client` dan `server`.
-   Gaya desain monokromatik tangguh (*rugged & monokrom*) diterapkan secara konsisten melalui `@theme` Tailwind CSS v4.
-   Kerangka navigasi (*responsive shell*) desktop navbar, mobile menu drawer (dengan body scroll lock & Escape listener), dan semantic footer sudah aktif.
-   Seluruh halaman internal terhubung secara aman menggunakan React Router Declarative Mode.
-   Pengguliran halaman otomatis (`ScrollToTop`) di bawah browser router telah berjalan dengan sukses saat transisi rute.
-   Halaman Beranda & About menggunakan aset stock photo lokal WebP sebagai ilustrasi berlisensi bebas dengan notice keterangan.
-   Nomor WhatsApp tujuan, rute resmi, spesifikasi armada, dan paket wisata komersial belum dimasukkan karena berstatus TBD.
-   Backend server (`server/`), sistem database, autentikasi admin, dan unit testing dinonaktifkan pada MVP ini.

---

## 5. Masalah Terbuka Menunggu Koreksi (Open Corrections)
Koreksi pasca-review Plan 007 telah diterapkan pada working tree dan menunggu verifikasi commit berikutnya.

---

## 6. Status Diskusi Terkini (Active Discussion State)
-   Commit baseline terverifikasi: `ea0c8e100e923401018b93bfdd7f2653a3ad6874`.
-   Plan 008 (Implementasi Logo Resmi dan Identitas Global WNB): Implemented; logo resmi telah diunduh, navigasi disesuaikan, dan dokumentasi terkait diperbarui. Menunggu pengguna melakukan testing manual dan commit SHA.
-   Halaman paket, rute, galeri, dan booking tetap menjadi placeholder.

---

## 7. Kemungkinan Milestone Berikutnya (Next Likely Milestone)
*   **Likely next milestone:** Plan 009 — Implementasi Data Paket / Rute (TBD)
*   **Status:** Proposed, not approved
*   *Final scope must be discussed and approved first*
