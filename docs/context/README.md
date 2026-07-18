# Project Context Hub — WNB

Folder ini merupakan titik masuk (*entry point*) utama untuk mendokumentasikan konteks proyek, fakta bisnis, aturan alur kerja (*workflow*), dan status pengembangan terbaru aplikasi **WNB (Wisata Ngaprak Bandung)**.

Dokumen-dokumen di bawah ini berfungsi sebagai sumber utama bagi:
1.  **ChatGPT (Planner & Reviewer Read-Only):** Membaca repository dan dokumen konteks secara read-only untuk merencanakan tugas tanpa mengubah repository.
2.  **Gemini Antigravity (Executor Working Tree):** Membaca file plan yang disetujui, menyalinnya ke repository, dan mengubah working tree sesuai scope tanpa testing, commit, atau push.
3.  **Pemilik Proyek / Pengguna:** Meninjau plan dan working tree, melakukan seluruh pengujian manual, serta menjalankan commit dan push secara manual.
4.  **Reviewer:** Memeriksa SHA dan diff commit manual pengguna untuk menilai kepatuhan terhadap plan.

---

## Ringkasan Alur Kerja (Workflow Summary)
- ChatGPT membaca repository dan membuat plan secara read-only.
- Pengguna menyerahkan file plan kepada Gemini Antigravity.
- Gemini mengubah working tree dan berhenti tanpa testing, commit, atau push.
- Pengguna membaca perubahan dan melakukan pengujian manual.
- Pengguna melakukan commit dan push secara manual.
- ChatGPT meninjau SHA dan diff commit manual secara read-only.

---

## Aturan Akses Read-Only (Non-Write Rule)
- Akses GitHub oleh ChatGPT adalah **read-only**.
- Mention `@GitHub` di chat bukan merupakan izin menulis repository.
- Kemampuan teknis model untuk menulis atau mengubah repository tidak berarti tindakan tersebut diizinkan dalam workflow proyek ini.
- Instruksi pengguna yang meminta diskusi atau pembuatan plan tidak boleh ditafsirkan oleh ChatGPT sebagai izin implementasi langsung ke repository.
- Gemini Antigravity hanya menjadi executor working tree. Pengguna merupakan satu-satunya pihak yang melakukan commit dan push.

---

## Urutan Pembacaan Wajib (Reading Order)
Bila Anda baru membuka room percakapan baru atau baru bergabung dalam proyek ini, bacalah dokumen berikut secara berurutan:
1.  **[current-state.md](current-state.md):** Status implementasi terbaru, kontribusi rencana, dan masalah terbuka yang sedang ditangani.
2.  **[business-facts.md](business-facts.md):** Kumpulan fakta bisnis resmi yang telah dikonfirmasi dan daftar asumsi yang dilarang keras.
3.  **[project-context.md](project-context.md):** Identitas proyek, cakupan MVP, alamat rute URL, dan gambaran umum arsitektur.
4.  **[workflow-rules.md](workflow-rules.md):** Aturan pembagian peran, siklus kerja standar, dan status verifikasi commit.
5.  **[new-chat-prompt.md](new-chat-prompt.md):** Templat instruksi pembuka (*handoff prompt*) yang wajib disalin ke room percakapan baru.
6.  Dokumen Requirements / Design / Architecture yang relevan pada folder induk `docs/`.
7.  Implementation Plan yang sedang aktif pada folder `docs/plans/`.

---

## Hierarki Sumber Kebenaran (Source-of-Truth Hierarchy)
Bila terjadi perbedaan informasi, ikuti urutan kepercayaan berikut (dari tingkat tertinggi ke terendah):
1.  Instruksi eksplisit terbaru dari pemilik proyek/pengguna.
2.  Kode sumber *repository* pada commit implementasi terverifikasi terakhir (*latest verified implementation commit*).
3.  Berkas `docs/context/current-state.md`.
4.  Berkas `docs/context/business-facts.md`.
5.  Dokumen kebutuhan (*Requirements*), desain (*Design*), dan keputusan arsitektur (*Architecture*) di folder induk `docs/`.
6.  Rencana implementasi (*Implementation Plan*) yang sedang aktif.
7.  Riwayat percakapan atau memori chat model AI (hanya bersifat pendukung).

### Aturan Resolusi Konflik:
*   Instruksi pengguna yang baru dapat menggantikan fakta lama, namun perubahan tersebut wajib didokumentasikan di berkas konteks ini pada plan/commit berikutnya.
*   Bila riwayat chat bertentangan dengan kode sumber *repository* terverifikasi, maka kode sumber *repository* yang dianggap benar.
*   Bila berkas dokumen konteks ini bertentangan dengan fakta eksplisit terbaru dari pengguna, maka fakta terbaru yang dianggap benar dan dokumen konteks harus diperbarui.
*   Commit baru dari Antigravity yang belum diperiksa oleh ChatGPT/reviewer tidak boleh dicantumkan sebagai *Verified* di dalam dokumen.

---

## Aturan Pemeliharaan (Maintenance Rules)
Untuk memastikan dokumen ini tetap sinkron dengan kemajuan proyek:
-   `project-context.md` hanya diubah bila ada pergeseran arsitektur utama atau perubahan cakupan MVP.
-   `business-facts.md` diperbarui setiap kali ada konfirmasi fakta baru dari pemilik proyek.
-   `workflow-rules.md` diperbarui jika disepakati proses kolaborasi baru.
-   `current-state.md` diperbarui pada akhir setiap siklus implementasi yang telah lolos review.
-   `new-chat-prompt.md` diperbarui bila instruksi handoff ChatGPT memerlukan perbaikan pemicu.
