# Implementation Plan 005A — Project Context and Handoff Documentation

## Status Persetujuan

- **Status:** APPROVED FOR IMPLEMENTATION
- **Jenis pekerjaan:** Documentation-only
- **Pemilik keputusan:** Pemilik proyek WNB
- **Planner dan reviewer:** ChatGPT
- **Executor:** Gemini Antigravity
- **Tanggal revisi workflow:** 2026-07-18
- **Status dokumen:** REVISED — CURRENT SOURCE OF TRUTH
- **Aturan penggantian:** Isi terbaru Plan 005A ini menggantikan isi Plan 005A sebelumnya sebagai sumber kebenaran workflow dan handoff proyek.

Plan 005A tetap menggunakan nomor yang sama karena fungsinya tidak berubah. Dokumen ini tetap menjadi plan khusus untuk konteks proyek, pembagian peran, workflow, handoff room baru, pembuatan implementation plan, dan proses review commit.

Riwayat versi lama tetap tersedia melalui Git history. Tidak perlu membuat Plan 006A hanya untuk memperbaiki workflow Plan 005A.

---

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (Low/Medium)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Pekerjaan hanya memperbarui dan menyelaraskan dokumentasi lintas beberapa file. Tidak ada perubahan kode aplikasi, dependency, konfigurasi build, atau refactor frontend.
- **Token-efficiency rule:** Gunakan Flash Low/Medium untuk eksekusi awal. Gunakan Pro High hanya jika ditemukan konflik nyata antardokumen yang tidak dapat diselesaikan dari instruksi plan dan repository.
- **Mode kerja:** Planning/agent mode yang mampu membaca beberapa file, mengedit dokumentasi, memeriksa diff, dan melaporkan perubahan.
- **Dilarang:** Menggunakan model untuk mengambil keputusan bisnis atau memperluas scope di luar plan.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Workspace frontend:** `client/`
- **Workspace backend:** `server/` — tetap ditunda
- **Latest verified implementation baseline yang tercatat:** `c30d027bc33113412b3f596685cb43990888ee48`
- **Repository HEAD kandidat Plan 006:** `2ae86326be4086209017fa38e74ff19c45aa2305`
- **Plan 006:** Home Page Visual Enhancement
- **Tahap berikutnya setelah Plan 005A selesai:** diskusi dan penyusunan Plan 006A untuk penyempurnaan halaman Home
- **Status Plan 006A:** proposed, not started, scope belum ditentukan

> Repository HEAD atau SHA baru tidak boleh disebut `Verified` sebelum ChatGPT memeriksa diff dan memberikan keputusan eksplisit.

---

## Tujuan Revisi Plan 005A

Plan ini memperbaiki dokumentasi handoff agar room ChatGPT baru tidak salah menafsirkan akses GitHub sebagai izin untuk langsung mengubah repository.

Hasil akhir wajib:

1. Menetapkan ChatGPT sebagai **planner dan reviewer dengan akses repository read-only**.
2. Menetapkan Gemini Antigravity sebagai **executor di working tree** yang hanya mengubah kode lokal dan dilarang keras melakukan commit atau push otomatis, serta dilarang melakukan pemeriksaan manual atau pengujian visual (no browser testing, no automated checks unless explicitly requested).
3. Menetapkan pengguna sebagai pemilik keputusan, penghubung file plan, pelaksana pengujian manual/visual di browser secara langsung, serta pihak yang melakukan commit dan push secara manual.
4. Menjelaskan bahwa mention `@GitHub` tidak mengubah status read-only ChatGPT.
5. Menjelaskan bahwa ChatGPT tidak boleh membuat commit, branch, pull request, issue, atau perubahan file.
6. Menjelaskan bahwa implementation plan final dibuat ChatGPT sebagai **file `.md` yang dapat di-download**, bukan ditulis langsung ke GitHub.
7. Menambahkan tahap review dan persetujuan pengguna sebelum file plan diserahkan ke Antigravity.
8. Menjelaskan bahwa Antigravity menyalin file plan ke `docs/plans/`, mengeksekusi perubahan pada working tree lokal, menampilkan git diff/status, lalu berhenti tanpa commit/push/testing.
9. Menjelaskan perbedaan antara plan utama, plan sisipan A/B/C, dan instruksi koreksi kecil.
10. Memperbarui prompt handoff room baru agar aturan tersebut tidak dapat ditafsirkan secara longgar.
11. Memperbarui current state agar mencatat workflow terbaru.
12. Mencatat bahwa setelah Plan 005A selesai, tahap berikutnya adalah diskusi Plan 006A untuk penyempurnaan Home.
13. Tidak mengubah Plan 006, frontend, backend, package, atau dependency.

---

## Karakter Pekerjaan

```text
documentation-only
```

### Dilarang Mengubah

```text
client/
server/
package.json
package-lock.json
tsconfig*
vite.config.*
.env*
docs/plans/001-project-structure-setup.md
docs/plans/002-product-requirements-and-page-map.md
docs/plans/003-client-foundation-setup.md
docs/plans/004-design-system-and-responsive-shell.md
docs/plans/005-home-page-implementation.md
docs/plans/006-home-page-visual-enhancement.md
```

### Dilarang Melakukan

- Mengubah kode aplikasi.
- Mengubah tampilan Home.
- Membuat Plan 006A final.
- Menentukan scope Plan 006A.
- Memperbaiki komponen frontend.
- Menginstal dependency.
- Mengubah lockfile.
- Menjalankan refactor.
- Membuat data bisnis baru.
- Menjalankan `git add`, `git commit`, `git push`, atau sinkronisasi otomatis ke remote repository.
- Melakukan pemeriksaan manual, pengujian visual, membuka browser, dev server testing, responsive checks, screenshot, typecheck/build otomatis, atau menyatakan layout/fitur sudah Verified.
- Mengubah riwayat plan selain Plan 005A yang sedang direvisi.

---

## File Target

### Perbarui

```text
README.md
docs/README.md
docs/context/README.md
docs/context/workflow-rules.md
docs/context/new-chat-prompt.md
docs/context/current-state.md
docs/plans/005A-project-context-and-handoff-documentation.md
```

### Pertahankan Tanpa Perubahan

```text
docs/context/project-context.md
docs/context/business-facts.md
docs/plans/006-home-page-visual-enhancement.md
client/
server/
package.json
package-lock.json
```

`project-context.md` dan `business-facts.md` tidak perlu berubah karena revisi ini tidak mengubah arsitektur produk atau fakta bisnis.

---

# 1. Revisi Plan 005A

Perbarui:

```text
docs/plans/005A-project-context-and-handoff-documentation.md
```

Ganti isi lama dengan isi Plan 005A versi terbaru ini secara substantif.

Bagian atas dokumen wajib menyatakan:

```text
Status: APPROVED FOR IMPLEMENTATION
Jenis pekerjaan: Documentation-only
Status dokumen: REVISED — CURRENT SOURCE OF TRUTH
```

Tambahkan penjelasan bahwa:

- Plan 005A tetap memakai nomor yang sama.
- Isi terbaru menggantikan versi sebelumnya.
- Versi lama tetap tersedia di Git history.
- Tidak dibuat Plan 006A hanya untuk koreksi workflow 005A.
- Plan 006A dicadangkan untuk pekerjaan besar lanjutan yang masih terkait Plan 006/Home.

---

# 2. Revisi Context Hub

Perbarui:

```text
docs/context/README.md
```

## 2.1 Fungsi folder context

Pastikan folder `docs/context/` dijelaskan sebagai sumber utama bagi:

1. ChatGPT sebagai planner dan reviewer read-only.
2. Gemini Antigravity sebagai executor working tree lokal (tanpa commit/push/testing otomatis).
3. Pengguna sebagai pemilik keputusan, pelaksana pengujian manual/visual di browser, dan pelaksana commit manual.
4. Reviewer yang memeriksa commit dan status verifikasi.

## 2.2 Reading order

Gunakan urutan:

```text
1. current-state.md
2. business-facts.md
3. project-context.md
4. workflow-rules.md
5. new-chat-prompt.md
6. requirements/design/architecture yang relevan
7. implementation plan aktif
```

## 2.3 Tambahkan workflow summary

Tambahkan ringkasan tegas:

```text
ChatGPT membaca dan merencanakan secara read-only.
ChatGPT membuat plan final sebagai file .md yang dapat di-download.
Pengguna meninjau dan menyerahkan file tersebut kepada Gemini Antigravity.
Gemini Antigravity menyimpan plan ke repository dan mengeksekusi perubahan pada working tree lokal, lalu berhenti tanpa commit/push/testing.
Pengguna melakukan pengujian browser secara manual (visual, fungsional, responsif) pada working tree.
Pengguna melakukan commit dan push secara manual ke repository setelah menyetujui perubahan.
ChatGPT meninjau SHA dan diff secara read-only setelah pengguna mengirimkannya.
```

## 2.4 Tambahkan non-write rule

Tambahkan aturan:

- Akses GitHub oleh ChatGPT adalah read-only.
- Mention `@GitHub` bukan izin menulis.
- Kemampuan teknis untuk menulis tidak berarti tindakan tersebut diizinkan.
- Instruksi pengguna yang meminta diskusi atau pembuatan plan tidak boleh ditafsirkan sebagai izin implementasi.
- Gemini Antigravity hanya memodifikasi working tree lokal dan dilarang keras membuat commit/push otomatis atau melakukan pengujian browser.
- Hanya pengguna yang berwenang melakukan commit, push, dan pengujian browser secara langsung.

---

# 3. Revisi Workflow Rules

Perbarui:

```text
docs/context/workflow-rules.md
```

Gunakan struktur berikut.

## 3.1 Pemilik Proyek / Pengguna

Pengguna:

- memiliki otoritas tertinggi atas keputusan bisnis, fitur, desain, dan scope;
- menentukan kapan diskusi cukup;
- memberikan persetujuan scope;
- secara eksplisit meminta file plan final;
- men-download file `.md` dari ChatGPT;
- meninjau file plan;
- memasukkan file plan ke workspace Gemini Antigravity;
- meminta Antigravity membaca dan mengeksekusi file tersebut pada working tree lokal;
- **melakukan seluruh pemeriksaan visual, fungsional, responsif (desktop/mobile layout), navigasi, interaksi halaman, dan pengujian browser secara langsung;**
- melakukan commit dan push secara manual ke repository setelah menyetujui perubahan di working tree;
- mengirim SHA commit manual kepada ChatGPT;
- memutuskan apakah akan melanjutkan ke tahap berikutnya.

## 3.2 ChatGPT — Planner & Reviewer Read-Only

Tuliskan secara eksplisit:

```text
ChatGPT beroperasi dengan akses repository read-only.
```

### ChatGPT hanya boleh:

- membaca repository;
- membaca file kode dan dokumentasi;
- membaca commit;
- membandingkan commit;
- membaca diff;
- membaca issue atau pull request jika relevan;
- berdiskusi dengan pengguna;
- menjelaskan kondisi repository;
- menyusun scope;
- membuat implementation plan sebagai file `.md` di lingkungan percakapan;
- memberikan link download file plan;
- meninjau SHA dan diff hasil commit pengguna;
- menetapkan status Candidate, Verified, atau Needs Correction;
- membuat instruksi koreksi kecil di chat apabila perubahan tidak memerlukan plan permanen.

### ChatGPT dilarang:

- membuat atau memperbarui file di repository secara langsung;
- menghapus file repository;
- menulis plan langsung ke GitHub;
- membuat commit;
- membuat branch;
- membuat pull request;
- membuat issue;
- melakukan merge;
- menjalankan implementasi;
- mengedit kode atau dokumentasi secara langsung;
- meminta tool GitHub melakukan write action;
- menganggap mention `@GitHub` sebagai izin menulis;
- menganggap persetujuan scope sebagai izin implementasi;
- menganggap permintaan “buat plan” sebagai izin menyimpan plan ke repository;
- melanjutkan ke plan berikutnya tanpa diskusi dan persetujuan pengguna.

Tambahkan aturan:

> Bila ChatGPT memiliki kemampuan teknis untuk melakukan write action, aturan proyek tetap melarang penggunaan kemampuan tersebut.

## 3.3 Gemini Antigravity — Executor Working Tree

Gemini Antigravity:

- membaca file plan `.md` yang diberikan pengguna;
- memeriksa repository sebelum mengubah file;
- menyimpan salinan plan yang sama ke lokasi `docs/plans/` yang ditentukan;
- mengubah working tree lokal hanya sesuai file yang diperbolehkan;
- tidak membuat keputusan bisnis baru atau memperluas scope (*scope creep*);
- menampilkan daftar file yang berubah, ringkasan perubahan, `git diff`, dan `git status --short`;
- menyarankan nama commit dan perintah Git manual untuk disalin pengguna;
- **dilarang keras melakukan pengujian visual/manual** (seperti membuka browser, browser automation, dev server checks, responsive layout checks, screenshot validation, dsb.);
- **dilarang keras menjalankan typecheck, build, test, lint, atau validasi otomatis** kecuali pengguna memintanya secara eksplisit;
- **dilarang keras** menjalankan `git add`, `git commit`, `git push`, atau sinkronisasi otomatis;
- melaporkan status pekerjaan sebagai `Uncommitted / Pending User Review and Manual Testing`;
- menunggu pengguna menguji secara manual dan melakukan commit/push manual.

## 3.4 Standard Lifecycle

Ganti lifecycle lama dengan:

```text
[Diskusi Scope]
  → ChatGPT membaca repository secara read-only
  → ChatGPT merangkum kondisi dan risiko
  → Pengguna dan ChatGPT menyepakati scope
  → Pengguna meminta plan final
  → ChatGPT membuat satu file .md yang dapat di-download
  → ChatGPT memberikan link download
  → Pengguna meninjau file plan
  → Pengguna memasukkan file ke Gemini Antigravity
  → Gemini Antigravity membaca file plan
  → Gemini menyimpan plan ke docs/plans/
  → Gemini mengimplementasikan perubahan pada working tree lokal
  → Gemini menampilkan daftar file berubah, ringkasan, git diff, dan git status
  → Gemini menyarankan perintah commit dan push manual
  → Gemini berhenti tanpa melakukan commit, push, atau pengujian otomatis (status: Uncommitted / Pending User Review and Manual Testing)
  → Pengguna melakukan pengujian browser secara manual (visual, fungsional, responsif) pada working tree
  → Pengguna melakukan commit dan push manual, lalu mendapatkan SHA commit
  → Pengguna mengirim SHA commit manual kepada ChatGPT
  → ChatGPT membaca diff secara read-only
  → Commit dinilai Verified atau Needs Correction
  → Dokumentasi status diperbarui pada siklus yang diperintahkan
  → Baru memulai diskusi tahap berikutnya
```

## 3.5 Plan Delivery Rule

Tambahkan bagian khusus:

### Implementation Plan Final

- Dibuat setelah scope disepakati.
- Hanya dibuat setelah pengguna meminta plan final.
- Dibuat sebagai satu file `.md` yang dapat di-download.
- Tidak disimpan oleh ChatGPT langsung ke repository.
- Nama file mengikuti nomor plan yang telah disepakati.
- File plan menjadi instruksi utama bagi Antigravity.
- Antigravity menyalin file yang sama ke `docs/plans/`.
- ChatGPT tidak mengeksekusi isi file tersebut.

## 3.6 Plan Numbering and Correction Rule

Dokumentasikan:

### Plan utama

```text
001, 002, 003, 004, 005, 006, 007, dan seterusnya
```

Digunakan untuk milestone utama atau fitur utama.

### Plan sisipan

```text
006A, 006B, 006C, dan seterusnya
```

Digunakan hanya jika:

- perubahan cukup besar;
- berkaitan dengan plan induk;
- menyentuh beberapa file atau struktur;
- perlu menjadi sumber konteks permanen;
- memiliki acceptance criteria sendiri;
- perlu dibaca kembali oleh room berikutnya.

### Aturan Koreksi Kecil

Tidak memerlukan file plan baru apabila:

- perubahan bersifat lokal;
- hanya memperbaiki typo, spacing, copy, class, link, label, atau bug sederhana;
- tidak mengubah arsitektur, fakta bisnis, batas MVP, route, dependency, atau workflow;
- tidak perlu menjadi sumber konteks permanen.

Untuk koreksi kecil:

```text
ChatGPT membuat instruksi koreksi langsung di chat.
Pengguna menyalinnya ke Antigravity.
Antigravity mengubah working tree lokal (tanpa pengujian otomatis).
Antigravity berhenti tanpa commit/push (status: Uncommitted / Pending User Review and Manual Testing).
Pengguna menguji secara manual di browser, lalu melakukan commit dan push secara manual.
Pengguna mengirim SHA kepada ChatGPT untuk review.
```

### Pengecualian dampak besar

Perubahan sedikit baris tetap harus didokumentasikan bila mengubah:

- fakta bisnis;
- source of truth;
- workflow;
- pembagian peran;
- arsitektur;
- dependency;
- batas MVP;
- route utama;
- kebijakan aset;
- keputusan yang memengaruhi plan berikutnya.

## 3.7 Commit Verification

Pertahankan status:

```text
Candidate
Verified
Rejected / Needs Correction
```

Tambahkan:

- Commit yang dibuat secara manual oleh pengguna setelah eksekusi Antigravity berstatus awal Candidate.
- Hanya ChatGPT setelah membaca diff yang dapat merekomendasikan status Verified.
- ChatGPT tidak mengubah repository saat melakukan review.
- Pengguna tetap pemilik keputusan final.
- `current-state.md` tidak boleh mencatat candidate commit sebagai latest verified.

## 3.8 Change Control

Pertahankan dan perkuat:

- Minimal scope.
- Tidak ada refactor ad-hoc.
- Tidak ada dependency baru tanpa plan.
- `package-lock.json` tidak berubah tanpa instalasi yang disetujui.
- Tidak ada backend selama backend ditunda.
- Tidak ada data bisnis palsu.
- Tidak ada urgency copy palsu.
- Tidak ada tautan `file:///`.
- Tidak ada plan berikutnya secara otomatis.
- Tidak ada write action oleh ChatGPT.
- Tidak ada commit atau push otomatis oleh Antigravity.
- Tidak ada self-testing visual/manual otomatis oleh Antigravity.

---

# 4. Revisi New Chat Handoff Prompt

Perbarui:

```text
docs/context/new-chat-prompt.md
```

Dokumen harus menyediakan:

1. Current ready-to-use prompt.
2. Generic reusable prompt.
3. Usage instructions.
4. Checklist validasi perilaku ChatGPT baru.

## 4.1 Current Ready-to-Use Prompt

Gunakan prompt berikut secara substantif:

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

## 4.2 Generic Reusable Prompt

Gunakan template:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
<ISI_DARI_CURRENT_STATE>

Tugas room ini:
<TULIS_TUJUAN_DISKUSI>

Before answering:
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

## 4.3 Usage Instructions

Tambahkan:

- Buka room baru di Project WNB yang sama.
- Tempelkan current prompt or generic prompt sebagai pesan pertama.
- Mention `@GitHub` boleh digunakan untuk meminta pembacaan repository, tetapi bukan untuk write action.
- Jangan menempelkan seluruh chat lama.
- Pastikan ChatGPT hanya merangkum dan berdiskusi.
- Setelah scope final, minta secara eksplisit:
  `Buatkan implementation plan final sebagai file .md untuk saya download.`
- Download file tersebut.
- Masukkan file ke Gemini Antigravity.
- Setelah Antigravity selesai memodifikasi working tree lokal, tinjau perubahan secara manual.
- Lakukan commit dan push manual di terminal Anda.
- Kirim SHA commit manual ke ChatGPT untuk review.

## 4.4 New Room Behavior Checklist

Checklist perilaku:

```text
[ ] ChatGPT membaca repository
[ ] ChatGPT tidak melakukan write action
[ ] ChatGPT menyebut dirinya planner/reviewer
[ ] ChatGPT tidak membuat plan sebelum diskusi
[ ] ChatGPT membuat file .md hanya setelah diminta
[ ] ChatGPT memberikan link download
[ ] ChatGPT tidak mengunggah plan ke GitHub
[ ] Antigravity bertindak sebagai executor working tree saja (dilarang keras auto-commit/push)
[ ] Antigravity dilarang keras melakukan pengujian browser/visual secara otomatis
[ ] Pengguna melakukan pemeriksaan manual dan pengujian browser (visual/fungsional) pada working tree
[ ] Pengguna melakukan commit dan push manual
[ ] SHA kandidat manual direview sebelum disebut Verified
```

---

# 5. Revisi Current State

Perbarui:

```text
docs/context/current-state.md
```

## 5.1 Jangan mengubah status verified secara sembarangan

Pertahankan latest verified implementation commit sesuai status yang benar saat eksekusi.

Jangan menjadikan commit dokumentasi Plan 005A yang baru sebagai latest verified implementation commit secara otomatis.

## 5.2 Completed Plans

Ubah deskripsi Plan 005A menjadi:

```text
005A — Project context and handoff documentation:
Revised and current. Menetapkan workflow ChatGPT read-only → downloadable .md plan → pengguna → Gemini Antigravity executor working tree (no commit/push/testing) → pengguna testing manual & commit manual → SHA review.
```

Pertahankan Plan 006 sebagai:

```text
006 — Home Page Visual Enhancement: Complete / candidate implementation according to current repository state.
```

Gunakan status yang sesuai dengan isi repository dan jangan mengubah candidate menjadi Verified tanpa keputusan review.

## 5.3 Active Discussion State

Catat:

```text
- Revisi Plan 005A menjadi prioritas dokumentasi saat ini.
- Plan 006 tetap merupakan Home Page Visual Enhancement.
- Setelah revisi Plan 005A selesai pada working tree dan diverifikasi, proyek akan melanjutkan diskusi Plan 006A.
- Plan 006A akan membahas penyempurnaan atau perbaikan lanjutan halaman Home.
- Scope Plan 006A belum ditentukan dan tidak boleh dibuat atau dieksekusi otomatis.
- Plan 007 belum dimulai.
```

## 5.4 Next Likely Milestone

Ganti kemungkinan milestone berikutnya menjadi:

```text
Likely next milestone: Plan 006A — Home Page Refinement
Status: Proposed, not approved
Final scope must be discussed and approved first
```

Jangan menyebut About Page sebagai milestone berikutnya pada tahap ini.

---

# 6. Revisi Documentation Index

Perbarui:

```text
docs/README.md
```

Pada deskripsi Plan 005A, gunakan:

```md
[005A-project-context-and-handoff-documentation.md](plans/005A-project-context-and-handoff-documentation.md): Sumber workflow terbaru untuk handoff ChatGPT read-only, file plan unduhan, eksekusi Antigravity di working tree (tanpa commit otomatis / tanpa pengujian otomatis), pengujian manual dan commit manual oleh pengguna, serta review SHA.
```

Tambahkan catatan singkat pada bagian context:

- `workflow-rules.md` berisi batas read-only ChatGPT, larangan auto-commit, serta larangan auto-testing bagi Antigravity.
- `new-chat-prompt.md` wajib digunakan ketika membuka room baru.

Jangan menambahkan Plan 006A ke daftar plan karena file Plan 006A belum dibuat.

---

# 7. Revisi Root README

Perbarui:

```text
README.md
```

Pada bagian handoff, tambahkan atau perbarui kalimat:

```text
Untuk melanjutkan proyek di room ChatGPT baru, gunakan New Chat Handoff Prompt. ChatGPT hanya bertugas sebagai planner/reviewer read-only dan menyerahkan plan sebagai file .md; perubahan working tree dieksekusi melalui Gemini Antigravity (tanpa commit/push/testing otomatis), sedangkan pengujian manual serta commit dan push wajib dijalankan secara manual oleh pengguna.
```

Pertahankan ringkas. Jangan menyalin seluruh workflow ke root README.

---

# 8. Aturan Konsistensi Istilah

Gunakan secara konsisten:

```text
ChatGPT — Planner & Reviewer Read-Only
Gemini Antigravity — Executor Working Tree
Pemilik Proyek / Pengguna
downloadable .md implementation plan
repository HEAD
latest verified implementation commit
candidate commit
Verified
Needs Correction
Uncommitted / Pending User Review and Manual Testing
```

---

# 9. Validation

Karena perubahan hanya dokumentasi, jangan menjalankan:

```bash
npm install
npm run typecheck:client
npm run build:client
```

kecuali kode aplikasi ternyata berubah secara tidak sengaja. Jika ada perubahan kode, batalkan perubahan tersebut.

## 9.1 File Validation

Pastikan hanya file berikut yang berubah di working tree:

```text
README.md
docs/README.md
docs/context/README.md
docs/context/workflow-rules.md
docs/context/new-chat-prompt.md
docs/context/current-state.md
docs/plans/005A-project-context-and-handoff-documentation.md
```

## 9.2 Content Validation

Pastikan:

- Plan 005A berstatus revised/current source of truth.
- ChatGPT disebut read-only.
- Mention `@GitHub` bukan izin menulis.
- ChatGPT tidak boleh membuat file langsung di repository.
- Plan final dibuat sebagai file `.md` yang dapat di-download.
- Pengguna menjadi penghubung file plan.
- Gemini Antigravity menjadi executor working tree (dilarang auto-commit/push/testing).
- Lifecycle mencakup download, review pengguna, eksekusi working tree, git checks, pengujian manual oleh pengguna, manual commit/push, dan SHA review.
- Aturan plan utama, plan sisipan A/B/C, dan aturan koreksi kecil terdokumentasi.
- Plan 006 tidak diubah.
- Plan 006A belum dibuat.
- Next likely milestone adalah diskusi Plan 006A Home Page Refinement.
- Plan 007 belum dimulai.
- Tidak ada fakta bisnis baru.
- Tidak ada perubahan dependency.
- Tidak ada perubahan frontend/backend.

## 9.3 Link Validation

Periksa:

- seluruh relative link di `README.md`;
- seluruh relative link di `docs/README.md`;
- seluruh relative link di `docs/context/`;
- tidak ada `file:///`;
- tidak ada absolute local path;
- tidak ada link ke file yang belum ada, termasuk file Plan 006A.

## 9.4 Repository Validation

Jalankan:

```bash
git diff --check
git diff --name-only
git status --short
```

---

# 10. Commit Rules

Gemini Antigravity dilarang keras melakukan commit atau push secara otomatis atau menjalankan pengujian visual/manual otomatis. Setelah memodifikasi working tree lokal, laporkan status sebagai:

```text
Uncommitted / Pending User Review and Manual Testing
```

Pengguna yang akan menguji secara langsung dan menjalankan git commit serta git push secara manual.

Saran commit message:

```text
docs: revise planner and antigravity handoff workflow
```

Saran perintah manual:

```bash
git add README.md docs/README.md docs/context/README.md docs/context/workflow-rules.md docs/context/new-chat-prompt.md docs/context/current-state.md docs/plans/005A-project-context-and-handoff-documentation.md
git commit -m "docs: revise planner and antigravity handoff workflow"
git push origin main
```

---

# 11. Laporan Executor yang Wajib Dikirim

Setelah selesai, Gemini Antigravity harus melaporkan:

1. Model yang digunakan.
2. Daftar file diperbarui di working tree.
3. Konfirmasi Plan 005A ditulis ulang sebagai current source of truth.
4. Ringkasan aturan read-only ChatGPT.
5. Konfirmasi mention `@GitHub` bukan izin menulis.
6. Konfirmasi file plan harus di-download pengguna.
7. Ringkasan lifecycle terbaru dengan manual commit dan manual testing oleh pengguna.
8. Ringkasan aturan plan utama, A/B/C, dan koreksi kecil.
9. Konfirmasi Plan 006 tidak diubah.
10. Konfirmasi Plan 006A belum dibuat.
11. Konfirmasi current-state mengarah ke diskusi Plan 006A berikutnya.
12. Hasil `git diff`.
13. Hasil `git status --short`.
14. Konfirmasi status pekerjaan `Uncommitted / Pending User Review and Manual Testing`.
15. Saran commit message dan perintah Git manual untuk disalin pengguna.
16. Kendala atau deviasi, jika ada.

---

# 12. Acceptance Criteria

Plan 005A dianggap berhasil jika:

1. Plan 005A tetap menggunakan nama dan nomor yang sama.
2. Isi terbaru menggantikan versi sebelumnya.
3. ChatGPT dikunci sebagai planner/reviewer read-only.
4. Mention `@GitHub` tidak dapat ditafsirkan sebagai izin menulis.
5. ChatGPT dilarang membuat commit, branch, PR, issue, merge, atau perubahan file.
6. Implementation plan final dibuat sebagai downloadable `.md`.
7. Pengguna menjadi pihak yang men-download dan menyerahkan file kepada Antigravity.
8. Antigravity bertindak sebagai executor working tree saja (dilarang commit/push/testing otomatis).
9. Lifecycle mencakup diskusi, persetujuan, download, eksekusi working tree, manual testing dan manual commit oleh pengguna, dan SHA review.
10. Aturan plan utama terdokumentasi.
11. Aturan plan sisipan A/B/C terdokumentasi.
12. Koreksi kecil tidak wajib disimpan sebagai plan permanen.
13. Perubahan kecil berdampak besar tetap wajib didokumentasikan.
14. `new-chat-prompt.md` memiliki current prompt dan generic prompt yang tegas.
15. `current-state.md` mencatat Plan 006A sebagai tahap diskusi berikutnya.
16. Plan 006 tidak diubah.
17. File Plan 006A belum dibuat.
18. Plan 007 belum dimulai.
19. Tidak ada perubahan kode.
20. Tidak ada perubahan dependency.
21. Tidak ada perubahan backend.
22. Semua relative link valid.
23. `git diff --check` berhasil.
24. Antigravity tidak melakukan commit atau push otomatis.
25. Status pekerjaan dilaporkan sebagai `Uncommitted / Pending User Review and Manual Testing`.
