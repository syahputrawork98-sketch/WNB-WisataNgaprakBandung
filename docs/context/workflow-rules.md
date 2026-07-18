# Development Workflow Rules — WNB

Dokumen ini mendefinisikan pembagian peran, siklus pengembangan, status verifikasi commit, dan kontrol perubahan pada proyek **WNB (Wisata Ngaprak Bandung)**.

---

## 1. Pembagian Peran (Roles)

### 1.1 Pemilik Proyek / Pengguna
- Memiliki otoritas tertinggi atas keputusan bisnis, cakupan fitur (*scope*), desain, dan arah visual.
- Menentukan kapan diskusi dirasa sudah cukup.
- Memberikan persetujuan terhadap scope pekerjaan.
- Secara eksplisit meminta file plan final di chat.
- Men-download file plan `.md` yang dihasilkan oleh ChatGPT.
- Meninjau file plan tersebut secara mandiri.
- Memasukkan file plan `.md` ke dalam workspace Gemini Antigravity.
<<<<<<< HEAD
- Meminta Gemini Antigravity membaca dan mengeksekusi file plan tersebut pada working tree lokal.
- Melakukan pemeriksaan dan review mandiri terhadap perubahan di working tree secara langsung di browser atau editor.
- Melakukan commit dan push secara manual ke repository Git setelah menyetujui perubahan di working tree.
- Mengirimkan SHA commit manual dari Git ke ChatGPT untuk di-review.
=======
- Meminta Gemini Antigravity membaca dan mengeksekusi file plan tersebut.
- Melakukan pengujian visual/manual secara langsung di web browser.
- Mengirimkan SHA commit kandidat dari Antigravity ke ChatGPT untuk di-review.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
- Memutuskan apakah akan melanjutkan ke rencana/tahap berikutnya.

### 1.2 ChatGPT — Planner & Reviewer Read-Only
- **ChatGPT beroperasi dengan akses repository read-only.**

#### ChatGPT hanya boleh:
- Membaca berkas kode sumber dan dokumentasi di repository.
- Membaca commit, membandingkan commit, dan memeriksa diff.
- Membaca issue atau pull request jika relevan.
- Berdiskusi secara interaktif dengan pengguna untuk menyelaraskan dan merangkum scope.
- Menjelaskan status terkini dan risiko repository.
- Menyusun rencana implementasi (*implementation plan*) sebagai satu file `.md` di lingkungan percakapan.
- Menyediakan tautan (link) download untuk file plan `.md` tersebut.
<<<<<<< HEAD
- Meninjau SHA commit manual dan diff perubahan yang dikirim oleh pengguna.
=======
- Meninjau SHA commit kandidat dan diff perubahan yang dibuat oleh Gemini Antigravity.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
- Menilai kepatuhan commit dan merekomendasikan status `Candidate`, `Verified`, atau `Needs Correction`.
- Memberikan instruksi koreksi kecil langsung di chat jika perubahan bersifat lokal dan sederhana.

#### ChatGPT dilarang keras:
- Membuat, memperbarui, atau menghapus file secara langsung di repository.
- Menulis file plan langsung ke GitHub.
- Membuat commit, branch, pull request, issue, atau melakukan merge.
- Menjalankan implementasi kode apa pun di repository.
- Meminta tool GitHub/write actions untuk memodifikasi repository.
- Menganggap mention `@GitHub` sebagai izin menulis ke repository.
- Menganggap persetujuan scope dari pengguna sebagai izin untuk mengimplementasikan perubahan.
- Menganggap permintaan "buat plan" sebagai izin untuk menyimpan file plan ke repository.
- Melanjutkan ke rencana berikutnya secara otomatis tanpa diskusi dan persetujuan pengguna.

> Bila ChatGPT memiliki kemampuan teknis untuk melakukan write action pada repository, aturan proyek tetap melarang penggunaan kemampuan tersebut.

<<<<<<< HEAD
### 1.3 Gemini Antigravity — Executor Working Tree
- Membaca file plan `.md` yang diberikan oleh pengguna.
- Memeriksa kondisi repository terkini sebelum memodifikasi file.
- Menyimpan salinan file plan yang sama persis ke lokasi `docs/plans/` yang ditentukan di repository.
- Mengubah working tree lokal hanya sesuai ruang lingkup yang diperbolehkan plan.
- Tidak membuat keputusan bisnis baru secara mandiri.
- Tidak memperluas cakupan pekerjaan (*scope creep*).
- Menjalankan pengujian validasi (misalnya typecheck atau build jika ada perubahan kode).
- Menampilkan ringkasan perubahan, status git, dan `git diff --check`.
- Menyarankan nama commit dan perintah Git manual yang dapat disalin oleh pengguna.
- **Dilarang keras** menjalankan `git add`, `git commit`, `git push`, atau sinkronisasi otomatis ke remote repository.
- Melaporkan status pekerjaan sebagai `Uncommitted / Pending User Review`.
- Menunggu hasil review mandiri pengguna dan proses commit/push manual oleh pengguna.
=======
### 1.3 Gemini Antigravity — Executor
- Membaca file plan `.md` yang diberikan oleh pengguna.
- Memeriksa kondisi repository terkini sebelum memodifikasi file.
- Menyimpan salinan file plan yang sama persis ke lokasi `docs/plans/` yang ditentukan di repository.
- Mengubah file repository secara hati-hati dan hanya sesuai ruang lingkup yang diperbolehkan plan.
- Tidak membuat keputusan bisnis baru secara mandiri.
- Tidak memperluas cakupan pekerjaan (*scope creep*).
- Menjalankan pengujian validasi (misalnya typecheck atau build jika ada perubahan kode).
- Membuat satu commit Git dengan pesan commit yang ditentukan di dalam plan.
- Melaporkan daftar file yang berubah, hasil validasi, status git, dan SHA commit kepada pengguna.
- **Dilarang** menyebut commit buatannya sendiri sebagai `Verified`.
- Menunggu hasil review dari ChatGPT yang diteruskan oleh pengguna.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d

---

## 2. Siklus Kerja Standar (Standard Lifecycle)

Setiap penambahan fitur, perubahan dokumentasi, atau perbaikan sistem mengikuti siklus berurutan berikut:

```text
[Diskusi Scope]
  → ChatGPT membaca repository secara read-only
  → ChatGPT merangkum kondisi terkini dan risiko
  → Pengguna dan ChatGPT menyepakati scope pekerjaan
  → Pengguna meminta plan final secara eksplisit
  → ChatGPT membuat satu file .md yang dapat di-download
  → ChatGPT memberikan link download untuk file plan tersebut
  → Pengguna meninjau dan mengunduh file plan
  → Pengguna menyerahkan file plan ke Gemini Antigravity
  → Gemini Antigravity membaca file plan tersebut
  → Gemini menyimpan file plan ke docs/plans/
<<<<<<< HEAD
  → Gemini mengimplementasikan perubahan pada working tree lokal
  → Gemini menjalankan pengujian validasi
  → Gemini menampilkan status git, diff check, dan menyarankan perintah commit manual
  → Gemini berhenti tanpa melakukan commit atau push (status: Uncommitted / Pending User Review)
  → Pengguna membaca dan memeriksa perubahan pada working tree secara langsung
  → Pengguna melakukan commit dan push secara manual, lalu mendapatkan SHA commit
  → Pengguna mengirimkan SHA commit manual ke ChatGPT
=======
  → Gemini mengimplementasikan perubahan di repository
  → Gemini menjalankan pengujian validasi
  → Gemini membuat satu commit dan melaporkan SHA commit kandidat
  → Pengguna melakukan pengujian visual/manual di browser
  → Pengguna mengirimkan SHA commit kandidat ke ChatGPT
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
  → ChatGPT membaca diff commit secara read-only untuk memverifikasi kepatuhan
  → Commit dinilai Verified atau Rejected / Needs Correction
  → Dokumentasi current-state.md diperbarui pada siklus dokumentasi berikutnya
  → Baru memulai diskusi untuk rencana tahap berikutnya
```

---

## 3. Aturan Pengiriman Rencana (Plan Delivery Rule)

### Rencana Implementasi Final (Implementation Plan)
- Hanya dibuat setelah scope pekerjaan disepakati sepenuhnya.
- Hanya dibuat setelah pengguna meminta plan secara eksplisit.
<<<<<<< HEAD
- Dihassan oleh ChatGPT sebagai **satu file `.md` terpisah yang dapat di-download** (bukan ditulis langsung ke GitHub).
- Penamaan file harus menggunakan nomor rencana yang telah disepakati (contoh: `005A-project-context-and-handoff-documentation.md`).
- File plan tersebut menjadi satu-satunya instruksi resmi bagi Gemini Antigravity.
- Gemini Antigravity wajib menyalin file plan tersebut ke folder `docs/plans/` sebagai bagian dari modifikasi working tree lokalnya.
=======
- Dihasilkan oleh ChatGPT sebagai **satu file `.md` terpisah yang dapat di-download** (bukan ditulis langsung ke GitHub).
- Penamaan file harus menggunakan nomor rencana yang telah disepakati (contoh: `005A-project-context-and-handoff-documentation.md`).
- File plan tersebut menjadi satu-satunya instruksi resmi bagi Gemini Antigravity.
- Gemini Antigravity wajib menyalin file plan tersebut ke folder `docs/plans/` sebagai bagian dari commit eksekusinya.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
- ChatGPT dilarang mengeksekusi isi file plan tersebut ke repository.

---

## 4. Konvensi Penomoran dan Aturan Koreksi (Numbering & Correction Rules)

### 4.1 Rencana Utama (Main Plans)
- Menggunakan penomoran tiga digit berurutan: `001`, `002`, `003`, `004`, `005`, `006`, `007`, dst.
- Digunakan untuk penambahan fitur utama, setup arsitektur, atau milestone besar proyek.

### 4.2 Rencana Sisipan (Inset Plans)
- Menggunakan nomor rencana induk diikuti akhiran huruf: `005A`, `005B`, `006A`, `006B`, dst.
- Digunakan jika perubahan cukup besar, menyentuh beberapa file/struktur, harus menjadi dokumen konteks permanen, memiliki kriteria penerimaan tersendiri, dan perlu dibaca oleh room baru di masa mendatang.
- **Dilarang** mengubah penomoran atau sejarah rencana lama yang sudah selesai agar kronologi monorepo tetap konsisten.

### 4.3 Instruksi Koreksi Kecil (Minor Corrections)
- Tidak memerlukan pembuatan file plan baru jika perubahan bersifat lokal (typo, spasi, perubahan teks statis, perbaikan class CSS, tautan rusak, label, atau bug sederhana).
- Perubahan tidak boleh mengubah arsitektur, fakta bisnis, batas MVP, route, dependency, atau aturan workflow.
- **Alur Koreksi Kecil:**
  1. ChatGPT memberikan instruksi perubahan langsung di chat.
  2. Pengguna menyalin instruksi tersebut ke Gemini Antigravity.
<<<<<<< HEAD
  3. Gemini Antigravity mengubah working tree lokal dan melakukan validasi.
  4. Gemini Antigravity berhenti tanpa commit/push (status: Uncommitted / Pending User Review).
  5. Pengguna meninjau working tree, melakukan commit dan push secara manual.
  6. Pengguna mengirimkan SHA commit manual kepada ChatGPT untuk di-review.
=======
  3. Gemini Antigravity melakukan modifikasi lokal dan membuat commit perbaikan.
  4. Pengguna mengirimkan SHA commit perbaikan kepada ChatGPT untuk di-review.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d

### 4.4 Pengecualian Dampak Besar
Perubahan dengan jumlah baris yang sedikit tetap wajib didokumentasikan dalam file plan baru jika memengaruhi:
- Fakta bisnis resmi atau terminologi terlarang.
- Aturan workflow atau pembagian peran.
- Struktur arsitektur atau keputusan teknologi.
- Batas ruang lingkup MVP.
- Dependency pihak ketiga (package.json).
- Keputusan yang akan memengaruhi langkah milestone berikutnya.

---

## 5. Status Verifikasi Commit (Commit Verification)

Setiap commit Git hasil eksekusi diklasifikasikan ke dalam tiga status berikut:
<<<<<<< HEAD
1.  **Candidate (Kandidat):** Status awal ketika commit manual dibuat oleh pengguna setelah eksekusi Antigravity. Commit belum divalidasi oleh ChatGPT.
2.  **Verified (Terverifikasi):** Status yang diberikan oleh ChatGPT setelah meninjau diff commit secara read-only dan memastikan kepatuhan penuh terhadap plan. Commit terverifikasi terakhir menjadi baseline baru.
3.  **Rejected / Needs Correction:** Status jika commit mengandung deviasi, error kompilasi, data bisnis palsu, atau melanggar plan. Antigravity wajib memperbaiki perubahan tersebut pada working tree lokal.

> Berkas `current-state.md` dilarang mencatat SHA kandidat sebagai *latest verified implementation commit* sebelum ChatGPT memberikan keputusan verifikasi secara eksplisit.
=======
1.  **Candidate (Kandidat):** Status awal saat Gemini Antigravity selesai membuat commit. Commit belum divalidasi oleh ChatGPT.
2.  **Verified (Terverifikasi):** Status yang diberikan oleh ChatGPT setelah meninjau diff commit secara read-only dan memastikan kepatuhan penuh terhadap plan. Commit terverifikasi terakhir menjadi baseline baru.
3.  **Rejected / Needs Correction:** Status jika commit mengandung deviasi, error kompilasi, data bisnis palsu, atau melanggar plan. Antigravity wajib memperbaiki perubahan tersebut.

> Berkas `current-state.md` dilarang mencatat candidate commit sebagai *latest verified implementation commit* sebelum ChatGPT memberikan keputusan verifikasi secara eksplisit.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d

---

## 6. Aturan Kontrol Perubahan (Change Control)

<<<<<<< HEAD
- **Minimal Scope:** Ubah hanya file dan baris yang benar-benar ditargetkan oleh plan. Dilarang merapikan kode atau refactor file lain secara ad-hoc.
=======
- **Minimal Scope:** Ubah hanya baris/file yang benar-benar ditargetkan oleh plan. Dilarang merapikan kode atau refactor file lain secara ad-hoc.
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
- **Lockfile Protection:** `package-lock.json` tidak boleh berubah tanpa perintah instalasi dependensi baru yang disepakati di plan.
- **No Code on Documentation Plans:** Rencana berjenis *documentation-only* (seperti `005A`) dilarang keras mengubah baris kode apa pun di folder `client/` atau `server/`.
- **No file:/// Scheme Links:** Dokumentasi wajib menggunakan tautan relatif (relative path), dilarang menggunakan tautan absolut lokal (`file:///`).
- **No Urgency Copy:** Dilarang keras menggunakan copy/teks yang mengarang urgensi komersial palsu (misalnya diskon terbatas, slot terbatas) demi menjaga identitas brand WNB yang premium.
- **No Write Action by ChatGPT:** ChatGPT dilarang melakukan modifikasi repository secara langsung dalam kondisi apa pun.
<<<<<<< HEAD
- **No Commit/Push by Antigravity:** Gemini Antigravity dilarang keras melakukan commit atau push otomatis. Semua commit wajib dilakukan secara manual oleh pengguna.
=======
>>>>>>> 48c1f0327a44c827b82513b497f48a442f10017d
- **No Automatic Next Steps:** Gemini Antigravity dilarang melanjutkan ke plan berikutnya secara otomatis setelah menyelesaikan tugas aktif.
