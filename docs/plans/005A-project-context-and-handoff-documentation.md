# Implementation Plan 005A — Project Context and Handoff Documentation

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (Medium)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Pekerjaan hanya menyusun dan menyelaraskan dokumentasi lintas beberapa file. Tidak ada implementasi kode, dependency, build configuration, atau refactor aplikasi.
- **Token-efficiency note:** Gunakan Gemini 3.5 Flash (Medium). Model High/Pro hanya diperlukan apabila ditemukan konflik nyata antardokumen yang tidak dapat diselesaikan dari sumber kebenaran repository.
- **Do not use:** Model thinking berat atau Claude Opus untuk eksekusi awal.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Latest verified implementation commit:** `c30d027bc33113412b3f596685cb43990888ee48`
- **Tahap aplikasi terakhir:** Implementation Plan 005 — Home Page Implementation
- **Status Plan 005:** Diterima
- **Tahap berikutnya:** Belum memulai Plan 006
- **Tujuan Plan 005A:** Menjamin kelanjutan konteks yang aman ketika proyek dipindahkan ke room ChatGPT baru

---

## Tujuan

Membuat dokumentasi konteks proyek yang:

1. Menjadi titik awal utama ketika membuka room ChatGPT baru.
2. Mengurangi ketergantungan pada panjang riwayat percakapan.
3. Mencegah model mengarang fakta bisnis WNB.
4. Mencegah model melupakan status implementasi terakhir.
5. Menjelaskan pembagian peran pengguna, ChatGPT, dan Gemini Antigravity.
6. Menentukan urutan sumber kebenaran.
7. Mencatat pekerjaan yang sudah selesai, pekerjaan terbuka, dan keputusan berikutnya.
8. Menyediakan prompt pembuka room baru yang dapat langsung disalin.
9. Memastikan commit yang belum direview tidak keliru disebut sebagai commit terverifikasi.
10. Menjadi mekanisme handoff yang dipelihara sepanjang proyek.

---

## Karakter Plan

Plan ini bersifat:

```text
documentation-only
```

Plan ini tidak boleh:

- Mengubah kode aplikasi.
- Memperbaiki typo pada frontend.
- Mengubah tampilan Home.
- Mengubah package atau dependency.
- Mengubah konfigurasi Vite.
- Mengubah TypeScript.
- Mengubah route.
- Mengubah server.
- Membuat Plan 006.
- Mengimplementasikan halaman About.
- Menjalankan instalasi dependency.
- Mengubah `package-lock.json`.

Koreksi minor frontend yang masih terbuka tetap dicatat di `current-state.md` dan dikerjakan pada plan implementasi berikutnya.

---

## Masalah yang Diselesaikan

Riwayat room proyek WNB sudah panjang. Ketika proyek dilanjutkan di room baru, terdapat risiko:

- Model hanya mengandalkan memori percakapan.
- Model salah menyebut kendaraan sebagai Jeep.
- Model mengarang harga, kapasitas, lokasi, driver, atau nomor WhatsApp.
- Model tidak mengetahui commit terakhir yang sudah diverifikasi.
- Model mengulang pekerjaan yang sudah selesai.
- Model langsung membuat Plan 006 tanpa diskusi.
- Model keliru menganggap mockup sebagai struktur halaman final.
- Model memilih dependency atau teknologi baru tanpa kebutuhan.
- Model tidak memahami alur ChatGPT → Antigravity → SHA review.
- Model menyebut commit kandidat sebagai “verified” sebelum direview.

Dokumentasi konteks baru harus mengatasi seluruh risiko tersebut.

---

## Sumber Kebenaran yang Harus Dibaca

Sebelum membuat file konteks, baca:

```text
README.md
docs/README.md

docs/requirements/product-requirements.md
docs/requirements/functional-requirements.md
docs/requirements/non-functional-requirements.md
docs/requirements/user-roles.md

docs/design/page-map.md
docs/design/user-flow.md
docs/design/visual-direction.md
docs/design/design-system.md
docs/design/home-page.md

docs/architecture/technology-decisions.md

docs/plans/001-project-structure-setup.md
docs/plans/002-product-requirements-and-page-map.md
docs/plans/003-client-foundation-setup.md
docs/plans/004-design-system-and-responsive-shell.md
docs/plans/005-home-page-implementation.md
```

Gunakan repository pada commit:

```text
c30d027bc33113412b3f596685cb43990888ee48
```

sebagai baseline implementasi yang sudah diverifikasi.

Jangan mengambil fakta bisnis baru dari asumsi, copy sementara, nama contoh, atau placeholder UI.

---

## Struktur File Target

Buat:

```text
docs/
├── context/
│   ├── README.md
│   ├── project-context.md
│   ├── business-facts.md
│   ├── workflow-rules.md
│   ├── current-state.md
│   └── new-chat-prompt.md
│
└── plans/
    └── 005A-project-context-and-handoff-documentation.md
```

Perbarui:

```text
README.md
docs/README.md
```

Tidak boleh mengubah file lain.

---

# 1. Context Index

Buat:

```text
docs/context/README.md
```

Judul:

```md
# Project Context Hub — WNB
```

Dokumen ini harus menjelaskan bahwa folder `docs/context/` merupakan titik masuk utama untuk:

- ChatGPT pada room baru.
- Gemini Antigravity sebelum menjalankan plan.
- Pengembang baru yang melanjutkan repository.
- Reviewer yang perlu memahami posisi proyek.

## Reading order wajib

Tuliskan urutan berikut:

```text
1. current-state.md
2. business-facts.md
3. project-context.md
4. workflow-rules.md
5. new-chat-prompt.md
6. requirements/design/architecture yang relevan
7. implementation plan yang sedang aktif
```

`current-state.md` dibaca lebih dahulu karena paling dinamis.

## Source-of-truth hierarchy

Dokumentasikan urutan kepercayaan:

```text
1. Instruksi eksplisit terbaru dari pemilik proyek
2. Repository pada latest verified implementation commit
3. docs/context/current-state.md
4. docs/context/business-facts.md
5. Requirements, design, dan architecture documents
6. Implementation plan aktif
7. Riwayat atau memori percakapan
```

Tambahkan ketentuan:

- Instruksi pengguna yang baru dapat menggantikan fakta lama.
- Perubahan tersebut harus dimasukkan ke dokumentasi pada plan/commit berikutnya.
- Bila riwayat chat bertentangan dengan repository terverifikasi, repository menang.
- Bila dokumen konteks bertentangan dengan fakta eksplisit terbaru dari pemilik proyek, fakta terbaru menang dan dokumentasi harus diperbarui.
- Commit yang belum diperiksa ChatGPT tidak boleh disebut “verified”.

## Maintenance rule

Jelaskan bahwa:

- `project-context.md` jarang berubah.
- `business-facts.md` berubah ketika pemilik proyek mengonfirmasi fakta.
- `workflow-rules.md` berubah ketika proses kerja disepakati ulang.
- `current-state.md` diperbarui setiap kali ada commit implementasi yang telah diperiksa.
- `new-chat-prompt.md` diperbarui bila alur handoff berubah.

---

# 2. Stable Project Context

Buat:

```text
docs/context/project-context.md
```

Judul:

```md
# Project Context — WNB
```

Dokumen harus singkat, stabil, dan tidak memuat detail status yang cepat berubah.

Gunakan struktur berikut.

## 2.1 Project identity

Isi:

```text
Nama: WNB — Wisata Ngaprak Bandung
Tipe produk: aplikasi web informasi wisata petualangan
Wilayah umum: Bandung
Repository: syahputrawork98-sketch/WNB-WisataNgaprakBandung
Arsitektur repository: npm workspaces monorepo
Frontend workspace: client
Backend workspace: server
```

Jangan menyebut wilayah operasional lebih spesifik.

## 2.2 Product purpose

Jelaskan bahwa aplikasi WNB bertujuan:

- Memperkenalkan pengalaman wisata petualangan.
- Menampilkan informasi Paket.
- Menampilkan informasi Rute.
- Menampilkan Galeri.
- Menyediakan alur booking awal melalui WhatsApp Click-to-Chat.
- Menjadi pusat informasi publik pada MVP.

Jangan menyatakan booking Click-to-Chat sudah aktif karena nomor resmi belum dikonfirmasi.

## 2.3 MVP routes

Catat:

```text
/
 /about
 /paket
 /paket/:slug
 /rute
 /rute/:slug
 /gallery
 /booking
 *
```

Jelaskan secara singkat fungsi setiap route.

## 2.4 Current architecture

Catat stack yang sudah terpasang:

- React.
- TypeScript.
- Vite.
- Tailwind CSS melalui plugin Vite.
- React Router Declarative Mode.
- Lucide React.
- npm workspaces.
- Typed local data untuk MVP.
- Backend dan database ditunda.

Jangan mencantumkan versi dependency secara manual. Arahkan ke:

```text
client/package.json
package-lock.json
```

## 2.5 Design direction

Catat:

- Adventure.
- Rugged.
- Modern.
- Monokrom.
- Profesional.
- Photography-led ketika aset resmi tersedia.
- Heading condensed/display.
- Mockup adalah arah visual, bukan blueprint halaman final.

## 2.6 Application boundaries

Catat bahwa MVP belum mencakup:

- Login pengguna.
- Dashboard admin.
- Payment gateway.
- Database booking.
- CMS.
- Tracking kendaraan.
- Backend API.
- Test framework.

Jangan menjadikan fitur masa depan sebagai keputusan final.

---

# 3. Business Facts

Buat:

```text
docs/context/business-facts.md
```

Judul:

```md
# Business Facts and Terminology — WNB
```

Gunakan kategori status berikut:

```text
CONFIRMED
TBD
DEFERRED
PROHIBITED ASSUMPTION
```

## 3.1 Confirmed facts

Masukkan hanya fakta berikut:

- Nama proyek/brand yang digunakan adalah WNB — Wisata Ngaprak Bandung.
- Konteks umum layanan adalah wisata petualangan di Bandung.
- Kendaraan WNB adalah Land Rover klasik.
- Kendaraan WNB bukan Jeep.
- Terdapat varian Land Rover Short dan Land Rover Long.
- Istilah teknis konseptual yang digunakan adalah Short Wheelbase (SWB) dan Long Wheelbase (LWB).
- Bodi kendaraan dikonfirmasi berbahan besi/logam.
- Mockup yang diberikan merupakan arah visual, bukan struktur halaman yang harus disalin persis.
- Paket dan Rute merupakan konsep berbeda:
  - Paket = layanan/produk perjalanan.
  - Rute = jalur/lokasi perjalanan.
- MVP menggunakan website publik tanpa login.
- Booking MVP direncanakan melalui WhatsApp Click-to-Chat.
- Home sudah menggunakan placeholder hingga aset resmi tersedia.

Jangan memperluas fakta di atas menjadi klaim performa atau kualitas.

## 3.2 Required terminology

Gunakan:

```text
Land Rover klasik
Land Rover Short
Land Rover Long
Short Wheelbase (SWB)
Long Wheelbase (LWB)
WhatsApp Click-to-Chat
Paket
Rute
Galeri
Booking
```

## 3.3 Prohibited terminology

Jangan menggunakan:

```text
Jeep
armada Jeep
Jeep Adventure
WhatsApp API
```

Pengecualian:

```text
https://api.whatsapp.com/send
```

boleh digunakan sebagai URL teknis, tetapi mekanismenya tetap disebut WhatsApp Click-to-Chat.

## 3.4 TBD facts

Masukkan sebagai belum terkonfirmasi:

- Nomor WhatsApp resmi.
- Harga paket.
- Durasi paket.
- Kapasitas penumpang.
- Seri Land Rover.
- Tahun produksi.
- Jenis mesin.
- Detail modifikasi.
- Ketebalan atau tipe teknis material bodi.
- Jumlah unit kendaraan.
- Nama dan lokasi rute.
- Tingkat kesulitan rute.
- Titik awal dan akhir rute.
- Wilayah operasional spesifik.
- Alamat kantor.
- Jam operasional.
- Email.
- Media sosial.
- Legalitas usaha.
- Nama badan hukum.
- Nama pemilik.
- Profil tim.
- Nama dan kualifikasi driver.
- Prosedur keselamatan.
- Testimoni.
- Rating.
- Statistik pelanggan.
- Foto resmi.
- Logo resmi.

## 3.5 Prohibited assumptions

Model atau pengembang tidak boleh mengarang:

- Bandung Barat.
- Bandung Selatan.
- Ciwidey.
- Pangalengan.
- Lembang.
- Driver terlatih.
- Driver bersertifikat.
- Standar keamanan tertentu.
- Kendaraan lebih nyaman.
- Kendaraan lebih tangguh.
- Kendaraan cocok untuk jumlah peserta tertentu.
- Testimoni pelanggan.
- Jumlah perjalanan.
- Tahun berdiri.
- Diskon.
- Harga mulai.
- Ketersediaan real-time.

Lokasi di atas hanya boleh digunakan setelah dikonfirmasi pemilik proyek.

## 3.6 Confirmation rule

Setiap fakta baru dari pemilik proyek harus:

1. Dicatat sebagai keputusan eksplisit.
2. Dimasukkan ke `business-facts.md` pada perubahan dokumentasi berikutnya.
3. Menggantikan entri TBD terkait.
4. Tidak diperluas melampaui hal yang benar-benar dikonfirmasi.

---

# 4. Workflow Rules

Buat:

```text
docs/context/workflow-rules.md
```

Judul:

```md
# Development Workflow Rules — WNB
```

## 4.1 Roles

Catat pembagian peran:

### Pemilik proyek/pengguna

- Menentukan fakta bisnis.
- Menyetujui arah fitur dan desain.
- Menjalankan pemeriksaan visual/manual.
- Mengirim SHA commit setelah Antigravity selesai.
- Menentukan kapan pindah ke plan atau room berikutnya.

### ChatGPT

- Membaca repository.
- Memeriksa latest verified commit.
- Berdiskusi sebelum menentukan scope.
- Menyusun implementation plan rinci.
- Merekomendasikan model Antigravity yang hemat token.
- Memeriksa SHA commit hasil eksekusi.
- Menemukan kekurangan, penyimpangan, dan asumsi.
- Tidak mengeksekusi plan berikutnya sebelum pengguna menyetujui.

### Gemini Antigravity

- Membaca implementation plan.
- Mengubah repository sesuai scope.
- Tidak membuat keputusan bisnis sendiri.
- Tidak mengubah bagian di luar instruksi.
- Menjalankan pemeriksaan yang diminta.
- Membuat commit dengan message yang ditentukan.
- Melaporkan hasil implementasi dan SHA.

## 4.2 Standard lifecycle

Dokumentasikan:

```text
Diskusi
→ ChatGPT membaca repository
→ ChatGPT membuat implementation plan
→ Pengguna memilih model Antigravity
→ Antigravity mengeksekusi
→ Antigravity membuat commit
→ Pengguna mengirim SHA
→ ChatGPT memeriksa diff dan file penting
→ Commit diterima atau dikoreksi
→ current-state diperbarui pada siklus dokumentasi berikutnya
→ Baru berdiskusi tentang plan berikutnya
```

## 4.3 Commit verification status

Gunakan tiga status:

```text
Candidate
Verified
Rejected / Needs correction
```

Aturan:

- SHA dari Antigravity pertama kali berstatus `Candidate`.
- Hanya ChatGPT setelah pemeriksaan yang dapat menyebutnya `Verified`.
- `current-state.md` tidak boleh mencatat candidate commit sebagai latest verified.
- Karena commit tidak dapat memuat SHA miliknya sendiri, `current-state.md` boleh menyimpan latest verified implementation commit sebelumnya.
- Room baru harus memeriksa repository HEAD dan membandingkannya dengan latest verified commit.
- Commit dokumentasi Plan 005A tidak otomatis mengubah latest verified implementation commit.

## 4.4 Plan numbering

Plan utama menggunakan:

```text
001
002
003
004
005
006
```

Plan sisipan dapat menggunakan suffix:

```text
005A
005B
```

Aturan:

- Jangan mengganti nama plan lama.
- Jangan melakukan renumber terhadap sejarah.
- Suffix digunakan untuk pekerjaan sisipan yang diperlukan sebelum milestone utama berikutnya.
- Plan 005A adalah dokumentasi konteks sebelum Plan 006.

## 4.5 Model recommendation rule

Setiap plan wajib memuat:

```text
Primary model
Fallback model
Reason
Token-efficiency note
```

Pedoman internal:

- Koreksi sangat kecil: Flash Low.
- Dokumentasi beberapa file: Flash Medium.
- Implementasi multi-file rinci: Flash High.
- Konflik arsitektur atau bug sulit: Pro High.
- Model berat hanya sebagai fallback terakhir.

Jangan menyatakan satu model selalu terbaik untuk semua tugas.

## 4.6 Change control

- Ubah hanya bagian yang diminta.
- Pertahankan kode yang tidak berhubungan.
- Jangan menambah dependency tanpa keputusan plan.
- Jangan mengubah `package-lock.json` tanpa instalasi dependency yang disetujui.
- Jangan mengubah server selama backend ditunda.
- Jangan membuat data bisnis palsu.
- Jangan menggunakan aset visual palsu sebagai dokumentasi WNB.
- Jangan menggunakan tautan `file:///`.
- Jangan melanjutkan plan otomatis setelah review.

## 4.7 Documentation maintenance

Setelah implementasi besar diterima:

- Perbarui status halaman.
- Perbarui latest verified implementation commit pada plan dokumentasi/implementasi berikutnya.
- Pindahkan koreksi yang selesai dari `Open Corrections` ke `Completed`.
- Tambahkan fakta bisnis baru bila ada.
- Pertahankan `current-state.md` ringkas.
- Jangan menyalin seluruh diff ke file konteks.
- Detail teknis lengkap tetap berada pada `docs/plans/`.

---

# 5. Current State

Buat:

```text
docs/context/current-state.md
```

Judul:

```md
# Current State — WNB
```

Tambahkan:

```text
Last context review date: 2026-07-17
Context baseline: c30d027bc33113412b3f596685cb43990888ee48
Latest verified implementation commit: c30d027bc33113412b3f596685cb43990888ee48
```

Tambahkan catatan:

```text
Plan 005A merupakan commit dokumentasi konteks.
SHA Plan 005A tidak dapat dicantumkan di dalam commit itu sendiri.
Room baru harus membaca repository HEAD dan memeriksa status verifikasinya.
```

## 5.1 Completed plans

Isi:

```text
001 — Project structure setup: Complete
002 — Product requirements and page map: Complete
003 — Client foundation setup: Complete
004 — Design system and responsive shell: Complete
005 — Home page implementation: Complete
005A — Context and handoff documentation: Current documentation milestone
```

Jangan menulis Plan 006 sebagai started.

## 5.2 Route status

Gunakan tabel:

| Route | Page | Status |
|---|---|---|
| `/` | Home | Implemented with official-asset placeholders |
| `/about` | About | Placeholder |
| `/paket` | Package list | Placeholder |
| `/paket/:slug` | Package detail | Placeholder |
| `/rute` | Route list | Placeholder |
| `/rute/:slug` | Route detail | Placeholder |
| `/gallery` | Gallery | Placeholder |
| `/booking` | Booking | Placeholder |
| `*` | Not Found | Implemented |

## 5.3 Current frontend status

Catat:

- Monorepo initialized.
- React client initialized.
- Responsive application shell implemented.
- Navbar desktop implemented.
- Mobile navigation implemented.
- Footer implemented.
- Design tokens implemented.
- Home implemented.
- Official visual assets not yet available.
- Other content pages remain placeholder.
- Backend deferred.
- Test framework deferred.

## 5.4 Installed stack

Catat tanpa versi:

```text
React
TypeScript
Vite
Tailwind CSS
React Router
Lucide React
npm workspaces
```

Tambahkan:

```text
Exact versions: see client/package.json and package-lock.json
```

## 5.5 Open corrections

Masukkan tiga koreksi berikut:

1. `client/src/features/home/homeContent.ts`
   - Ganti `nama and detail rute` menjadi `nama dan detail rute`.

2. `client/src/features/home/components/VehicleCard.tsx`
   - Ganti label `Spesifikasi Terkonfirmasi` menjadi `Informasi Terkonfirmasi`.

3. Home accessibility:
   - Tambahkan `aria-labelledby` dan ID heading pada Hero.
   - Tambahkan `aria-labelledby` dan ID heading pada Manifesto.

Status:

```text
Deferred to the next frontend implementation plan.
```

Jangan mengubah frontend pada Plan 005A.

## 5.6 Active discussion state

Tuliskan:

```text
Plan 006 belum dimulai.
Setelah Plan 005A diverifikasi, proyek akan dilanjutkan di room ChatGPT baru.
Room baru harus membaca folder docs/context sebelum berdiskusi.
Scope Plan 006 harus didiskusikan dahulu, bukan dibuat otomatis.
```

## 5.7 Next likely milestone

Tuliskan sebagai kemungkinan, bukan keputusan final:

```text
Likely next milestone: Plan 006 — About Page Implementation
Status: Proposed, not approved
```

## 5.8 Do-not-do-next

Room baru tidak boleh langsung:

- Membuat About page.
- Mengarang sejarah WNB.
- Mengarang profil tim.
- Mengarang legalitas.
- Mengarang informasi driver.
- Mengarang standar keselamatan.
- Mengubah backend.
- Menambah dependency.

Diskusi harus dilakukan dahulu.

---

# 6. New Chat Prompt

Buat:

```text
docs/context/new-chat-prompt.md
```

Judul:

```md
# New Chat Handoff Prompt — WNB
```

Dokumen harus memiliki dua bagian.

## 6.1 Current ready-to-use prompt

Sediakan blok yang dapat langsung disalin:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
c30d027bc33113412b3f596685cb43990888ee48

Sebelum memberikan rekomendasi atau membuat implementation plan:

1. Baca repository terbaru.
2. Baca dokumen berikut secara berurutan:
   - docs/context/current-state.md
   - docs/context/business-facts.md
   - docs/context/project-context.md
   - docs/context/workflow-rules.md
   - docs/context/README.md
3. Periksa perbedaan antara repository HEAD dan latest verified implementation commit.
4. Jangan menyebut commit baru sebagai verified sebelum diperiksa.
5. Gunakan repository dan docs/context sebagai sumber kebenaran utama.
6. Jangan mengandalkan memori percakapan saja.
7. Jangan mulai Plan 006 atau mengubah kode.
8. Kita akan berdiskusi dahulu mengenai arah tahap berikutnya.
9. Pertahankan workflow:
   - ChatGPT sebagai planner dan reviewer.
   - Gemini Antigravity sebagai executor.
   - Saya sebagai pemilik keputusan dan pemeriksa manual.
10. Setiap implementation plan harus mencantumkan model Antigravity yang paling efisien dalam penggunaan token.

Setelah membaca, berikan:
- ringkasan kondisi proyek,
- latest verified implementation commit,
- halaman yang sudah selesai,
- halaman yang masih placeholder,
- open corrections,
- hal yang perlu kita diskusikan sebelum Plan 006.
```

## 6.2 Generic reusable template

Sediakan template generik:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
<ISI_DARI_CURRENT_STATE>

Sebelum menjawab:
- baca docs/context/current-state.md,
- baca docs/context/business-facts.md,
- baca docs/context/project-context.md,
- baca docs/context/workflow-rules.md,
- periksa repository HEAD,
- jangan mengarang fakta bisnis,
- jangan mulai plan berikutnya sebelum diskusi.

Tugas room ini:
<TULIS_TUJUAN_DISKUSI_ROOM_BARU>
```

## 6.3 Usage instructions

Tambahkan:

- Buka room baru di Project WNB yang sama.
- Salin prompt current atau generic.
- Jangan menempelkan seluruh chat lama.
- Sertakan SHA hanya bila sama dengan `current-state.md`.
- Bila repository HEAD lebih baru, minta ChatGPT memeriksa commit lebih dahulu.
- Setelah ringkasan ChatGPT sesuai, baru mulai diskusi fitur.

---

# 7. Update Documentation Index

Perbarui:

```text
docs/README.md
```

## 7.1 Add context folder

Pada bagian pembagian folder tambahkan:

```md
- **[`context/`](context/)**: Konteks proyek, fakta bisnis, status terbaru, aturan workflow, dan prompt handoff room baru.
```

Letakkan `context/` sebelum `requirements/`, `design/`, `architecture/`, dan `plans/` karena merupakan entry point.

## 7.2 Add context documents section

Tambahkan sebelum Requirements:

```md
### Project Context and Handoff
- [Context Hub](context/README.md)
- [Current State](context/current-state.md)
- [Business Facts](context/business-facts.md)
- [Project Context](context/project-context.md)
- [Workflow Rules](context/workflow-rules.md)
- [New Chat Prompt](context/new-chat-prompt.md)
```

Gunakan deskripsi singkat pada setiap tautan.

## 7.3 Update numbering explanation

Ubah aturan:

```text
penomoran berurutan tiga digit
```

menjadi:

```text
penomoran tiga digit, dengan suffix huruf untuk plan sisipan
```

Berikan contoh:

```text
005
005A
006
```

## 7.4 Add Plan 005A

Tambahkan:

```md
- [005A-project-context-and-handoff-documentation.md](plans/005A-project-context-and-handoff-documentation.md): Dokumentasi konteks dan handoff room baru.
```

Ubah deskripsi Plan 005 agar tidak lagi disebut “rencana saat ini”.

---

# 8. Update Root README

Perbarui:

```text
README.md
```

Jangan mengubah status implementasi aplikasi.

Pada bagian Dokumentasi Proyek tambahkan tautan langsung:

```md
- [Current Project State](docs/context/current-state.md)
- [New Chat Handoff Prompt](docs/context/new-chat-prompt.md)
```

Tambahkan satu kalimat:

```text
Untuk melanjutkan proyek di room ChatGPT baru, baca Current Project State dan gunakan New Chat Handoff Prompt.
```

Jangan menyalin seluruh current state ke root README.

---

# 9. Plan File

Simpan instruksi ini sebagai:

```text
docs/plans/005A-project-context-and-handoff-documentation.md
```

Isi file di repository harus sama secara substantif dengan implementation plan ini.

Jangan mengubah nama menjadi `006`.

---

# 10. Consistency Rules

Pastikan seluruh file menggunakan istilah yang konsisten:

```text
latest verified implementation commit
candidate commit
room ChatGPT baru
Gemini Antigravity
Land Rover klasik
Land Rover Short
Land Rover Long
WhatsApp Click-to-Chat
```

Hindari istilah:

```text
latest commit
```

tanpa status karena dapat ambigu.

Gunakan:

```text
repository HEAD
latest verified implementation commit
candidate commit
```

sesuai konteks.

Jangan menyebut:

```text
ChatGPT pasti mengingat seluruh Project
```

Gunakan formulasi:

```text
Dokumentasi repository adalah sumber konteks utama; riwayat dan memori chat hanya pendukung.
```

---

# 11. Validation

Karena perubahan hanya dokumentasi, jangan menjalankan:

```text
npm install
npm run build:client
npm run typecheck:client
```

kecuali ada alasan khusus. Tidak ada kode yang berubah sehingga build tidak diperlukan.

Lakukan validasi dokumentasi:

## 11.1 File validation

Pastikan enam file konteks tersedia:

```text
docs/context/README.md
docs/context/project-context.md
docs/context/business-facts.md
docs/context/workflow-rules.md
docs/context/current-state.md
docs/context/new-chat-prompt.md
```

## 11.2 Link validation

Periksa secara manual:

- Semua tautan relatif dari `README.md`.
- Semua tautan relatif dari `docs/README.md`.
- Tidak ada `file:///`.
- Tidak ada absolute local path.
- Tidak ada tautan ke file yang tidak ada.

## 11.3 Content validation

Pastikan:

- Latest verified implementation commit adalah `c30d027bc33113412b3f596685cb43990888ee48`.
- Plan 006 belum disebut started.
- Open corrections berjumlah tiga.
- Tidak ada wilayah spesifik yang diklaim.
- Tidak ada istilah Jeep.
- Tidak ada nomor WhatsApp.
- Tidak ada harga.
- Tidak ada profil driver.
- Tidak ada testimoni.
- Tidak ada dependency version hardcoded.
- Tidak ada penyalinan seluruh riwayat chat.
- Tidak ada duplikasi panjang dari implementation plans.

## 11.4 Repository validation

Jalankan:

```bash
git diff --name-only
git status --short
```

Pastikan perubahan hanya:

```text
README.md
docs/README.md
docs/context/*
docs/plans/005A-project-context-and-handoff-documentation.md
```

Pastikan tidak berubah:

```text
client/
server/
package.json
package-lock.json
tsconfig*
vite.config.ts
.env*
```

---

# 12. Acceptance Criteria

Plan 005A selesai bila:

1. Folder `docs/context/` tersedia.
2. Context index tersedia.
3. Stable project context tersedia.
4. Business facts tersedia.
5. Workflow rules tersedia.
6. Current state tersedia.
7. New chat prompt tersedia.
8. Source-of-truth hierarchy terdokumentasi.
9. Candidate dan verified commit dibedakan.
10. Latest verified implementation commit tercatat benar.
11. Completed plans 001–005 tercatat.
12. Plan 006 belum dianggap dimulai.
13. Tiga open corrections tercatat.
14. Route statuses tercatat.
15. Prompt pembuka room baru dapat langsung disalin.
16. `docs/README.md` diperbarui.
17. Root README mempunyai tautan handoff.
18. Tidak ada perubahan aplikasi.
19. Tidak ada perubahan dependency.
20. Tidak ada perubahan server.
21. Semua relative links valid.
22. Tidak ada asumsi bisnis baru.

---

# 13. Output yang Harus Dilaporkan

Setelah selesai, laporkan:

1. Model Antigravity yang digunakan.
2. Daftar file yang dibuat.
3. Daftar file yang diperbarui.
4. Latest verified implementation commit yang dicatat.
5. Ringkasan source-of-truth hierarchy.
6. Ringkasan fakta bisnis confirmed.
7. Ringkasan kategori TBD.
8. Ringkasan workflow commit verification.
9. Ringkasan current state.
10. Konfirmasi Plan 006 belum dimulai.
11. Konfirmasi tiga open corrections dicatat.
12. Hasil pemeriksaan relative links.
13. Hasil `git diff --name-only`.
14. Hasil `git status --short`.
15. Konfirmasi `client/` tidak berubah.
16. Konfirmasi `server/` tidak berubah.
17. Konfirmasi package files tidak berubah.
18. Kendala atau deviasi.

Gunakan commit:

```text
docs: add project context and handoff documentation
```

Jangan membuat commit kedua.

Jangan memperbarui `latest verified implementation commit` menggunakan SHA commit Plan 005A, karena SHA sebuah commit tidak dapat dicantumkan di dalam commit itu sendiri dan Plan 005A belum direview ketika dibuat.
