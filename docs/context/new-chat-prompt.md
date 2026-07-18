# New Chat Handoff Prompt — WNB

Dokumen ini menyediakan templat instruksi pembuka (*handoff prompt*) yang wajib digunakan ketika membuka room ChatGPT baru demi menjaga keberlanjutan konteks dan meminimalisasi overhead token.

---

## 1. Templat Instan Siap Pakai (Current Ready-to-Use Prompt)

Salin seluruh teks di dalam blok kutipan berikut dan tempelkan langsung sebagai pesan pertama pada room ChatGPT baru Anda:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Sebelum memberikan rekomendasi atau membuat implementation plan:

1. Baca repository terbaru.
2. Baca dokumen berikut secara berurutan:
   - docs/context/current-state.md
   - docs/context/business-facts.md
   - docs/context/project-context.md
   - docs/context/workflow-rules.md
   - docs/context/README.md
3. Periksa repository HEAD dan status latest verified implementation commit.
4. Jangan menyebut commit kandidat sebagai Verified sebelum diff diperiksa.
5. Gunakan repository dan docs/context sebagai sumber kebenaran utama.
6. Jangan mengandalkan memori percakapan saja.

PERAN ANDA:
Anda hanya bertugas sebagai planner dan reviewer dengan akses GitHub read-only.

ANDA BOLEH:
- membaca repository;
- membaca kode dan dokumentasi;
- membaca commit dan diff;
- berdiskusi dengan saya;
- membuat implementation plan sebagai file .md yang dapat saya download;
- meninjau SHA hasil commit saya.

ANDA DILARANG:
- membuat, memperbarui, atau menghapus file repository;
- menulis plan langsung ke GitHub;
- membuat commit, branch, pull request, issue, atau merge;
- langsung mengimplementasikan perubahan;
- menggunakan GitHub write action;
- menganggap mention @GitHub sebagai izin menulis.

WORKFLOW WAJIB:
- Kita berdiskusi terlebih dahulu.
- Setelah scope disepakati, tunggu sampai saya meminta plan final.
- Buat plan final sebagai satu file .md yang dapat saya download.
- Berikan link download.
- Jangan mengunggah file plan ke GitHub.
- Saya yang memasukkan file tersebut ke Gemini Antigravity.
- Gemini Antigravity bertindak sebagai executor working tree (hanya mengubah kode lokal tanpa commit/push/testing).
- Gemini Antigravity dilarang keras melakukan pengujian browser, pemeriksaan visual/responsif desktop atau mobile, screenshot, typecheck/build otomatis (kecuali saya minta).
- Setelah Gemini selesai, saya menjalankan aplikasi, membuka browser, melakukan pengujian manual visual/fungsional, lalu melakukan commit dan push secara manual.
- Saya mengirim SHA commit manual kepada Anda.
- Anda hanya membaca diff dan melakukan review secara read-only.

STATUS SAAT INI:
- Plan 005A sedang/baru direvisi untuk memperkuat alur handoff tanpa auto-commit/auto-testing oleh Antigravity.
- Plan 006 adalah Home Page Visual Enhancement.
- Setelah Plan 005A selesai dan diverifikasi, kita akan mendiskusikan Plan 006A untuk penyempurnaan Home.
- Jangan membuat atau mengeksekusi Plan 006A sebelum diskusi dan persetujuan saya.

Setelah membaca, berikan:
- ringkasan kondisi proyek;
- repository HEAD;
- latest verified implementation commit;
- status Plan 005A dan Plan 006;
- halaman yang sudah selesai;
- halaman yang masih placeholder;
- hal yang perlu didiskusikan sebelum Plan 006A.

Jangan mengubah repository.
```

---

## 2. Templat Generik Reusable (Generic Reusable Template)

Gunakan templat di bawah ini di masa mendatang jika Anda perlu membuka room baru setelah milestone implementasi lainnya selesai:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
<ISI_DARI_CURRENT_STATE>

Tugas room ini:
<TULIS_TUJUAN_DISKUSI>

Sebelum menjawab:
- baca repository terbaru;
- baca docs/context/current-state.md;
- baca docs/context/business-facts.md;
- baca docs/context/project-context.md;
- baca docs/context/workflow-rules.md;
- baca docs/context/README.md;
- periksa repository HEAD;
- jangan mengarang fakta bisnis;
- jangan menyebut candidate sebagai Verified.

Peran Anda hanya planner dan reviewer read-only.

Dilarang:
- mengubah repository;
- membuat file di GitHub;
- membuat commit, branch, pull request, issue, atau merge;
- mengeksekusi perubahan;
- menganggap @GitHub sebagai izin menulis.

Setelah scope disepakati dan saya meminta plan final:
- buat satu file .md yang dapat saya download;
- berikan link download;
- jangan simpan file tersebut langsung ke repository;
- saya yang menyerahkan file tersebut ke Gemini Antigravity;
- Gemini Antigravity memodifikasi working tree lokal dan dilarang keras melakukan commit/push atau melakukan pengujian browser/visual;
- setelah Antigravity selesai, saya yang menguji secara manual di browser, serta memeriksa dan melakukan commit/push secara manual;
- saya menyerahkan SHA commit manual untuk Anda tinjau.

Jangan mulai plan berikutnya sebelum diskusi dan persetujuan eksplisit.
```

---

## 3. Instruksi Penggunaan (Usage Instructions)

1.  **Buka Project WNB:** Pastikan room ChatGPT baru berada di dalam workspace project WNB yang sama agar memiliki akses baca berkas lokal.
2.  **Kirim Prompt:** Tempelkan current prompt atau generic prompt di atas sebagai pesan pertama pada room baru.
3.  **Gunakan Mention `@GitHub` dengan Tepat:** Penggunaan `@GitHub` diperbolehkan untuk memicu pembacaan repository oleh ChatGPT, tetapi bukan untuk meminta write action.
4.  **Jangan Menyalin Chat Lama:** Hindari menempelkan seluruh riwayat chat yang panjang untuk menghemat token dan menjaga fokus model.
5.  **Batasi Aktivitas ChatGPT:** Pastikan ChatGPT hanya merangkum dan berdiskusi. Jika ChatGPT mencoba mengubah repository secara langsung, segera ingatkan bahwa perannya adalah read-only.
6.  **Alur Plan Final:** Setelah cakupan (*scope*) disepakati secara final di chat, minta ChatGPT membuat plan secara eksplisit:
    `Buatkan implementation plan final sebagai file .md untuk saya download.`
7.  **Eksekusi Antigravity:** Unduh file `.md` tersebut, lalu masukkan ke dalam workspace Gemini Antigravity untuk dieksekusi pada working tree lokal.
8.  **Pemeriksaan Manual:** Setelah Gemini Antigravity selesai memodifikasi working tree lokal, tinjau perubahan tersebut secara manual di editor atau browser.
9.  **Commit dan Push Manual:** Lakukan commit (`git commit`) dan push (`git push`) secara manual di terminal Anda sendiri.
10. **Kirim SHA:** Kirimkan SHA commit manual tersebut kepada ChatGPT untuk dilakukan peninjauan diff secara read-only.

---

## 4. Checklist Validasi Perilaku Room Baru (New Room Behavior Checklist)

Saat memulai room baru, pastikan seluruh checklist berikut terpenuhi:

- [ ] ChatGPT membaca repository.
- [ ] ChatGPT tidak melakukan write action.
- [ ] ChatGPT menyebut dirinya planner/reviewer.
- [ ] ChatGPT tidak membuat plan sebelum diskusi.
- [ ] ChatGPT membuat file `.md` hanya setelah diminta pengguna.
- [ ] ChatGPT memberikan link download untuk file plan.
- [ ] ChatGPT tidak mengunggah file plan ke GitHub.
- [ ] Antigravity bertindak sebagai executor working tree saja (dilarang keras auto-commit/push).
- [ ] Antigravity dilarang keras melakukan pengujian browser/visual secara otomatis.
- [ ] Pengguna melakukan pemeriksaan manual dan pengujian browser (visual/fungsional) pada working tree.
- [ ] Pengguna melakukan commit dan push manual.
- [ ] SHA commit manual dari pengguna di-review oleh ChatGPT secara read-only sebelum disebut `Verified`.
