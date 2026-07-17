# Development Workflow Rules — WNB

Dokumen ini mendefinisikan pembagian peran, siklus pengembangan, status verifikasi commit, dan kontrol perubahan pada proyek **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Pembagian Peran (Roles)

### 1.1 Pemilik Proyek / Pengguna (User)
-   Memiliki otoritas tertinggi atas keputusan bisnis, fitur, dan arah visual.
-   Melakukan pengujian manual dan verifikasi fungsionalitas di web browser secara langsung.
-   Mengirimkan SHA commit ke ChatGPT setelah Gemini Antigravity menyelesaikan tugasnya.
-   Menyetujui transisi ke rencana implementasi (*implementation plan*) berikutnya atau membuka room ChatGPT baru.

### 1.2 ChatGPT (Planner & Reviewer)
-   Membaca kode sumber *repository* dan berkas dokumentasi di folder `docs/context/`.
-   Berdiskusi dengan pengguna untuk menyelaraskan cakupan fitur sebelum membuat rencana.
-   Menyusun rencana implementasi (*implementation plan*) secara bertahap dan terstruktur.
-   Merekomendasikan tipe model Gemini Antigravity yang paling efisien berdasarkan bobot tugas.
-   Memeriksa hasil pekerjaan Gemini Antigravity (berdasarkan perbedaan SHA commit / diff) untuk memvalidasi kepatuhan terhadap rencana.
-   **DILARALANG** memicu eksekusi rencana baru secara otomatis sebelum pengguna memberikan persetujuan eksplisit.

### 1.3 Gemini Antigravity (Executor)
-   Membaca dokumen rencana implementasi yang disetujui.
-   Mengubah kode sumber *repository* sesuai ruang lingkup rencana secara tepat.
-   Menjalankan pengujian kompilasi (build & typecheck) wajib.
-   Membuat commit Git otomatis dengan format pesan yang telah ditentukan.
-   Melaporkan rincian file yang berubah, hasil kompilasi, status git, dan SHA commit kepada pengguna.
-   **DILARANG** membuat keputusan bisnis baru, mengarang data, atau mengubah bagian file di luar instruksi rencana.

---

## 2. Siklus Kerja Standar (Standard Lifecycle)
Setiap penambahan fitur atau pembenahan sistem mengikuti langkah berurutan berikut:
```text
[Diskusi Scope] 
  ──> ChatGPT membaca folder docs/context
  ──> ChatGPT membuat Rencana Implementasi (Implementation Plan)
  ──> Pengguna meninjau dan menyetujui Rencana
  ──> Gemini Antigravity mengeksekusi rencana
  ──> Gemini Antigravity membuat commit Git dan melaporkan SHA
  ──> Pengguna mengirimkan SHA commit ke ChatGPT
  ──> ChatGPT meninjau diff commit untuk memeriksa kepatuhan
  ──> Commit disetujui (diberi status Verified) atau ditolak (Needs Correction)
  ──> Berkas docs/context/current-state.md diperbarui pada siklus dokumentasi berikutnya
  ──> Mulai diskusi untuk rencana berikutnya
```

---

## 3. Status Verifikasi Commit (Commit Verification Status)
Setiap commit implementasi yang dihasilkan oleh Gemini Antigravity diklasifikasikan ke dalam salah satu dari tiga status berikut:
1.  **Candidate (Kandidat):** Status awal ketika Antigravity melaporkan SHA commit. Commit baru berstatus kandidat dan belum dinilai patuh sepenuhnya.
2.  **Verified (Terverifikasi):** Status yang diberikan oleh ChatGPT setelah memeriksa perubahan diff kode dan memastikannya bebas dari deviasi/asumsi. Commit terverifikasi terakhir dijadikan sebagai baseline pengembangan berikutnya.
3.  **Rejected / Needs Correction:** Status jika ditemukan pelanggaran terhadap rencana, error kompilasi, atau penambahan data palsu. Antigravity wajib melakukan perbaikan terarah pada siklus berikutnya.

> [!IMPORTANT]
> Berkas `current-state.md` dilarang mencatat SHA kandidat sebagai *latest verified implementation commit* sebelum ChatGPT memberikan verifikasi persetujuan di riwayat percakapan.

---

## 4. Konvensi Penomoran Rencana (Plan Numbering)
-   Rencana implementasi utama menggunakan penomoran berurutan tiga digit (contoh: `001`, `002`, `003`, `004`, `005`, `006`).
-   Rencana sisipan darurat atau penataan dokumentasi sebelum milestone utama menggunakan akhiran huruf (contoh: `005A`, `005B`).
-   **DILARANG** melakukan penamaan ulang (*renumbering*) atau mengubah riwayat rencana lama yang sudah selesai agar dokumentasi monorepo tetap konsisten secara kronologis.

---

## 5. Pedoman Pemilihan Model AI (Model Recommendation Rule)
Untuk menjaga efisiensi penggunaan token, ikuti pedoman pemilihan model Gemini Antigravity berikut:
*   **Flash Low:** Digunakan untuk koreksi typo minor, perbaikan satu baris kode, atau tugas investigasi sederhana.
*   **Flash Medium:** Digunakan untuk penulisan dokumentasi teks, penyelarasan file indeks, atau tugas-tugas koordinasi non-kode.
*   **Flash High (Primary):** Digunakan untuk implementasi fitur multi-file, konfigurasi bundler/TypeScript, integrasi styling Tailwind, dan refactor layout.
*   **Pro High (Fallback):** Digunakan hanya jika terjadi konflik dependency parah, error kompilasi TypeScript misterius, atau setelah model Flash gagal memecahkan masalah dalam satu kali upaya koreksi.

---

## 6. Aturan Kontrol Perubahan (Change Control)
*   **Minimal Scope:** Ubah hanya file dan baris yang benar-benar diperintahkan di dalam rencana. Jangan merapikan kode atau melakukan refactor file lain secara ad-hoc tanpa izin.
*   **Lockfile Protection:** Jangan mengubah isi berkas `package-lock.json` kecuali jika ada perintah instalasi paket baru yang disepakati bersama.
*   **No Code on Documentation Plans:** Rencana yang berkarakter *documentation-only* (seperti `005A`) dilarang keras mengubah baris kode apa pun di folder `client/` atau `server/`.
*   **No file:/// Scheme Links:** Dokumentasi internal wajib menggunakan tautan relatif (relative path) yang valid pada monorepo, bukan tautan absolut lokal (`file:///`).
*   **No Urgency Copy:** Dilarang menggunakan urgensi palsu pada CTA web (seperti "pesan sebelum kehabisan" atau "diskon terbatas") demi menjaga integritas brand WNB yang premium.
