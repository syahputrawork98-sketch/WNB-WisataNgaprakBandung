# Current State — WNB

Dokumen ini mencatat status implementasi terkini, daftar halaman yang sudah selesai, informasi dependensi terpasang, rencana aktif, dan daftar masalah terbuka (*open corrections*) pada aplikasi **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Posisi Baseline Repository
*   **Tanggal Peninjauan Konteks Terakhir:** 2026-07-17
*   **Konteks Baseline Proyek:** `c30d027bc33113412b3f596685cb43990888ee48`
*   **Latest Verified Implementation Commit:** `c30d027bc33113412b3f596685cb43990888ee48`

> [!NOTE]
> Commit dokumentasi setelah baseline implementasi tidak mengubah status *latest verified implementation commit*. Room ChatGPT baru wajib membaca repository HEAD terkini dan membandingkannya dengan baseline terverifikasi di atas.

---

## 2. Daftar Rencana yang Telah Selesai (Completed Plans)
*   `001` — Project structure setup: **Complete** (Struktur monorepo, npm workspaces, dan konfigurasi compiler awal).
*   `002` — Product requirements and page map: **Complete** (Dokumen PRD, FRD, NFRD, sitemap, dan user flow).
*   `003` — Client foundation setup: **Complete** (Inisialisasi React, Vite, Tailwind CSS v4, dan React Router).
*   `004` — Design system and responsive shell: **Complete** (Design tokens monokrom, common components, dan navigasi mobile aksesibel).
*   `005` — Home page implementation: **Complete** (Implementasi section Beranda statis dengan visual pattern placeholder).
*   `005A` — Project context and handoff documentation: **Complete** (Penyusunan folder konteks proyek untuk migrasi room chat baru).

### Rencana Aktif

*   `006` — Home page visual enhancement: **Approved, Pending Implementation**.
*   Dokumen plan: [006-home-page-visual-enhancement.md](../plans/006-home-page-visual-enhancement.md).
*   Executor yang direncanakan: Gemini Antigravity.
*   Plan 006 menggantikan usulan awal About Page Implementation.

---

## 3. Status Halaman Aplikasi (Route Status)

| Rute URL | Halaman (Page) | Status | Keterangan |
| :--- | :--- | :--- | :--- |
| `/` | Home | **Implemented; enhancement pending** | Struktur section selesai; peningkatan foto, komposisi, dan tampilan visual menunggu eksekusi Plan 006. |
| `/about` | About | **Placeholder** | Tidak termasuk Plan 006. |
| `/paket` | Package list | **Placeholder** | Menampilkan info daftar paket dengan typed local data kelak. |
| `/paket/:slug` | Package detail | **Placeholder** | Menampilkan technical preview parameter slug paket terpilih. |
| `/rute` | Route list | **Placeholder** | Menampilkan info sebaran rute fisik menunggu konfirmasi. |
| `/rute/:slug` | Route detail | **Placeholder** | Menampilkan technical preview parameter slug rute terpilih. |
| `/gallery` | Gallery | **Placeholder** | Menampilkan grid dokumentasi pasif menunggu konfirmasi foto resmi. |
| `/booking` | Booking | **Placeholder** | Menampilkan info awal alur redirect WhatsApp Click-to-Chat. |
| `*` | Not Found | **Implemented** | Halaman error 404 interaktif dengan tombol kembali ke Beranda. |

---

## 4. Gambaran Teknis Frontend Saat Ini (Frontend Status)
-   Monorepo berbasis npm workspaces terkonfigurasi untuk `client` dan `server`.
-   Gaya desain monokromatik tangguh (*rugged & monokrom*) diterapkan secara konsisten melalui `@theme` Tailwind CSS v4.
-   Kerangka navigasi (*responsive shell*) desktop navbar, mobile menu drawer (dengan body scroll lock & Escape listener), dan semantic footer sudah aktif.
-   Seluruh halaman internal terhubung secara aman menggunakan React Router Declarative Mode.
-   Pengguliran halaman otomatis (`ScrollToTop`) di bawah browser router telah berjalan dengan sukses saat transisi rute.
-   Home saat ini masih memakai media placeholder; Plan 006 telah menyetujui penggunaan foto stok Pexels sebagai ilustrasi sementara yang disimpan lokal dan didokumentasikan sumbernya.
-   Foto kendaraan stok tidak boleh dianggap sebagai dokumentasi armada WNB dan wajib memiliki notice ilustrasi.
-   Nomor WhatsApp tujuan, daftar rute, spesifikasi armada, dan paket wisata komersial belum dimasukkan karena berstatus TBD.
-   Backend server (`server/`), sistem database, autentikasi admin, dan unit testing dinonaktifkan pada MVP ini.

---

## 5. Masalah Terbuka Menunggu Koreksi (Open Corrections)

Tiga koreksi berikut telah dimasukkan ke dalam Plan 006 dan belum dianggap selesai sebelum commit implementasi diperiksa:

1.  **Typo di `homeContent.ts`:**
    *   Berkas: [homeContent.ts](../../client/src/features/home/homeContent.ts)
    *   Koreksi: Mengubah teks `"nama and detail rute"` menjadi `"nama dan detail rute"`.
2.  **Label Heading di `VehicleCard.tsx`:**
    *   Berkas: [VehicleCard.tsx](../../client/src/features/home/components/VehicleCard.tsx)
    *   Koreksi: Mengubah tajuk `"Spesifikasi Terkonfirmasi"` menjadi `"Informasi Terkonfirmasi"`.
3.  **Aksesibilitas Landmark Beranda:**
    *   Berkas: [HeroSection.tsx](../../client/src/features/home/components/HeroSection.tsx) dan [ManifestoSection.tsx](../../client/src/features/home/components/ManifestoSection.tsx)
    *   Koreksi: Menambahkan `aria-labelledby` yang merujuk ke heading masing-masing section.

---

## 6. Status Diskusi Terkini (Active Discussion State)

-   Pemilik proyek telah menyetujui Plan 006 — Home Page Visual Enhancement.
-   Fokus proyek tetap pada Home; About Page belum dikerjakan.
-   Foto stok berlisensi Pexels diperbolehkan sebagai ilustrasi sementara dengan aturan atribusi internal dan notice kejujuran visual.
-   Plan 006 sudah tersedia di repository, tetapi belum dieksekusi oleh Gemini Antigravity.
-   Tidak ada kode aplikasi yang berubah dalam penyusunan plan ini.
-   Commit implementasi berikutnya wajib dilaporkan sebagai **Candidate** dan belum boleh disebut verified sebelum review diff oleh ChatGPT.

---

## 7. Milestone Berikutnya

-   **Milestone aktif:** Eksekusi Plan 006 — Home Page Visual Enhancement.
-   **Setelah Plan 006:** Arah halaman berikutnya ditentukan melalui diskusi baru setelah hasil Home diperiksa secara visual dan commit kandidat diverifikasi.
-   **About Page:** Ditunda; bukan scope aktif.
