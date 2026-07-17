# Current State — WNB

Dokumen ini mencatat status implementasi terkini, daftar halaman yang sudah selesai, informasi dependensi terpasang, dan daftar masalah terbuka (*open corrections*) pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Posisi Baseline Repository
*   **Tanggal Peninjauan Konteks Terakhir:** 2026-07-17
*   **Konteks Baseline Proyek:** `c30d027bc33113412b3f596685cb43990888ee48`
*   **Latest Verified Implementation Commit:** `c30d027bc33113412b3f596685cb43990888ee48`

> [!NOTE]
> Perubahan visual Home pada Plan 006 merupakan commit kandidat (*candidate commit*). Karena SHA commit tidak dapat dituliskan di dalam commit itu sendiri, room ChatGPT baru wajib membaca repository HEAD terkini dan membandingkannya dengan baseline terverifikasi di atas.

---

## 2. Daftar Rencana yang Telah Selesai (Completed Plans)
*   `001` — Project structure setup: **Complete** (Struktur monorepo, npm workspaces, dan konfigurasi compiler awal).
*   `002` — Product requirements and page map: **Complete** (Dokumen PRD, FRD, NFRD, sitemap, dan user flow).
*   `003` — Client foundation setup: **Complete** (Inisialisasi React, Vite, Tailwind CSS v4, dan React Router).
*   `004` — Design system and responsive shell: **Complete** (Design tokens monokrom, common components, dan navigasi mobile aksesibel).
*   `005` — Home page implementation: **Complete** (Implementasi section Beranda statis dengan visual pattern placeholder).
*   `005A` — Project context and handoff documentation: **Complete** (Penyusunan folder konteks proyek untuk migrasi room chat baru).
*   `006` — Home page visual enhancement: **Complete** (Peningkatan visual halaman Home menggunakan aset ilustrasi lokal WebP, layout editorial, dan accessibility).

---

## 3. Status Halaman Aplikasi (Route Status)

| Rute URL | Halaman (Page) | Status | Keterangan |
| :--- | :--- | :--- | :--- |
| `/` | Home | **Implemented** | Selesai dengan aset ilustrasi sementara WebP. |
| `/about` | About | **Placeholder** | Menampilkan info dasar menunggu konfirmasi tim/keselamatan. |
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
-   Halaman Beranda menggunakan 6 aset stock photo lokal WebP sebagai ilustrasi berlisensi bebas dengan notice keterangan.
-   Nomor WhatsApp tujuan, rute resmi, spesifikasi armada, dan paket wisata komersial belum dimasukkan karena berstatus TBD.
-   Backend server (`server/`), sistem database, autentikasi admin, dan unit testing dinonaktifkan pada MVP ini.

---

## 5. Masalah Terbuka Menunggu Koreksi (Open Corrections)
Tidak ada masalah terbuka yang tertunda. Koreksi minor dari fase sebelumnya (typo `nama and detail rute`, heading `Informasi Terkonfirmasi`, dan `aria-labelledby` pada section Beranda) telah diselesaikan pada Plan 006.

---

## 6. Status Diskusi Terkini (Active Discussion State)
-   **Rencana 007 (Plan 007) belum dimulai.**
-   Setelah commit Rencana 006 diverifikasi oleh ChatGPT/pengguna, proyek akan dipindahkan ke room ChatGPT baru.
-   ChatGPT pada room baru wajib membaca berkas di folder `docs/context/` terlebih dahulu sebelum merekomendasikan scope pekerjaan berikutnya.
-   Cakupan pekerjaan Rencana 007 harus melalui tahap diskusi kesepakatan dan dilarang dibuat/dieksekusi secara otomatis oleh model.

---

## 7. Kemungkinan Milestone Berikutnya (Next Likely Milestone)
Likely next milestone: Plan 007
Possible focus: About Page Implementation
Status: Proposed, not approved
Final scope must be discussed and approved first
