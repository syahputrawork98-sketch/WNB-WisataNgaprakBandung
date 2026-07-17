# Project Context Hub — WNB

Folder ini merupakan titik masuk (*entry point*) utama untuk mendokumentasikan konteks proyek, fakta bisnis, aturan alur kerja, dan status pengembangan terbaru aplikasi **WNB (Wisata Ngaprak Bandung)**.

Dokumen-dokumen di bawah ini berfungsi untuk membantu:
1.  **ChatGPT / Planner AI** di dalam room percakapan baru untuk langsung memahami status proyek tanpa perlu membaca seluruh riwayat percakapan yang panjang.
2.  **Gemini Antigravity / Pelaksana AI** untuk memahami batasan, dependensi, dan arah implementasi teknis sebelum mengeksekusi rencana.
3.  **Pengembang Baru** yang ingin melanjutkan pengembangan *repository*.
4.  **Reviewer** yang perlu memeriksa kualitas pengerjaan dan status verifikasi kompilasi.

---

## Urutan Pembacaan Wajib (Reading Order)
Bila Anda baru membuka percakapan baru atau baru bergabung dalam proyek ini, bacalah dokumen berikut secara berurutan:
1.  **[current-state.md](current-state.md):** Status implementasi terbaru, kontribusi rencana, dan masalah terbuka yang sedang ditangani.
2.  **[business-facts.md](business-facts.md):** Kumpulan fakta bisnis resmi yang telah dikonfirmasi dan daftar asumsi yang dilarang keras.
3.  **[project-context.md](project-context.md):** Identitas proyek, cakupan MVP, alamat rute URL, dan gambaran umum arsitektur.
4.  **[workflow-rules.md](workflow-rules.md):** Aturan pembagian peran (ChatGPT, Antigravity, Pengguna), siklus kerja, dan verifikasi status commit.
5.  **[new-chat-prompt.md](new-chat-prompt.md):** Templat instruksi pembuka (*handoff prompt*) yang dapat langsung disalin ke room percakapan baru.
6.  **Dokumen Requirements / Design / Architecture** yang relevan pada folder induk `docs/`.
7.  **Implementation Plan** yang sedang aktif saat ini pada folder `docs/plans/`.

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
*   Commit baru dari pengembang/Antigravity yang belum diperiksa oleh ChatGPT/reviewer tidak boleh dicantumkan sebagai *verified* di dalam dokumen.

---

## Aturan Pemeliharaan (Maintenance Rules)
Untuk memastikan dokumen ini tetap sinkron dengan kemajuan proyek:
-   `project-context.md` hanya diubah bila ada pergeseran arsitektur utama atau perubahan cakupan MVP.
-   `business-facts.md` diperbarui setiap kali ada konfirmasi fakta baru dari pemilik proyek.
-   `workflow-rules.md` diperbarui jika disepakati proses kolaborasi baru.
-   `current-state.md` diperbarui pada akhir setiap siklus implementasi yang telah lolos review.
-   `new-chat-prompt.md` diperbarui bila instruksi handoff ChatGPT memerlukan perbaikan pemicu.
