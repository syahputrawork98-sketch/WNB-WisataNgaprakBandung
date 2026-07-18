# Dokumentasi Proyek WNB

Folder ini berisi seluruh dokumentasi teknis dan rencana untuk pengembangan aplikasi **Wisata Ngaprak Bandung (WNB)**.

## Pembagian Folder Dokumentasi

- **[`context/`](context/)**: Konteks proyek, fakta bisnis, status terbaru, aturan alur kerja (*workflow*), dan prompt handoff room baru.
- **[`architecture/`](architecture/)**: Keputusan dan rancangan arsitektur sistem.
- **[`design/`](design/)**: Mockup, design system, dan diagram alur pengguna (*user flow*).
- **[`plans/`](plans/)**: Rencana implementasi (*implementation plans*) secara berurutan.
- **[`requirements/`](requirements/)**: Dokumen kebutuhan fungsional dan nonfungsional proyek.
- **[`assets/`](assets/)**: Dokumentasi sumber aset gambar dan lisensi eksternal.

---

## Daftar Dokumen Proyek

### Project Context and Handoff
*   [Context Hub (context/README.md)](context/README.md): Indeks dokumen konteks dan hierarki sumber kebenaran.
*   [Current State (context/current-state.md)](context/current-state.md): Status implementasi terbaru, kontribusi rencana, dan masalah terbuka yang sedang ditangani.
*   [Business Facts (context/business-facts.md)](context/business-facts.md): Kumpulan fakta bisnis resmi yang telah dikonfirmasi dan daftar asumsi yang dilarang keras.
*   [Project Context (context/project-context.md)](context/project-context.md): Identitas proyek, cakupan MVP, alamat rute URL, dan gambaran umum arsitektur.
*   [Workflow Rules (context/workflow-rules.md)](context/workflow-rules.md): Aturan pembagian peran (ChatGPT, Antigravity, Pengguna), siklus kerja, dan verifikasi status commit. Berisi batas read-only ChatGPT dan aturan delivery file plan.
*   [New Chat Prompt (context/new-chat-prompt.md)](context/new-chat-prompt.md): Templat instruksi pembuka (*handoff prompt*) yang wajib digunakan ketika membuka room percakapan baru.

### Dokumen Kebutuhan (Requirements)
*   [Product Requirements](requirements/product-requirements.md): Ringkasan produk, ruang lingkup MVP, dan batasan produk.
*   [Functional Requirements](requirements/functional-requirements.md): Daftar kebutuhan fungsional berkode `FR-`.
*   [Non-Functional Requirements](requirements/non-functional-requirements.md): Spesifikasi kualitas, aksesibilitas, dan kemudahan pemeliharaan berkode `NFR-`.
*   [User Roles](requirements/user-roles.md): Pembagian peran Pengunjung dan Administrator WNB.

### Dokumen Desain (Design)
*   [Design System](design/design-system.md): Dokumentasi sistem desain dasar, token visual, dan panduan aksesibilitas.
*   [Home Page](design/home-page.md): Dokumentasi bagian-bagian halaman Beranda, salinan isi, dan status media placeholder.
*   [Page Map](design/page-map.md): Sitemap, rute navigasi, dan peta komponen React konseptual.
*   [User Flow](design/user-flow.md): Alur eksplorasi paket, rute, dan booking menggunakan diagram Mermaid.
*   [Visual Direction](design/visual-direction.md): Karakter desain visual, palet warna, tipografi, dan prinsip panduan mockup.
*   [Image Asset Sources](assets/image-sources.md): Daftar sumber dan lisensi aset gambar ilustrasi sementara.

### Dokumen Arsitektur (Architecture)
*   [Technology Decisions](architecture/technology-decisions.md): Catatan keputusan teknologi (*Architecture Decision Registry*) frontend dan penundaan backend.

---

## Daftar Rencana Implementasi (Plans)

Setiap dokumen rencana implementasi di dalam folder `plans/` menggunakan penomoran tiga digit, dengan suffix huruf untuk plan sisipan:
*   [001-project-structure-setup.md](plans/001-project-structure-setup.md): Tahap inisialisasi struktur monorepo (selesai).
*   [002-product-requirements-and-page-map.md](plans/002-product-requirements-and-page-map.md): Tahap dokumentasi kebutuhan produk dan peta halaman (selesai).
*   [003-client-foundation-setup.md](plans/003-client-foundation-setup.md): Inisialisasi fondasi frontend React (selesai).
*   [004-design-system-and-responsive-shell.md](plans/004-design-system-and-responsive-shell.md): Design system dan application shell responsif (selesai).
*   [005-home-page-implementation.md](plans/005-home-page-implementation.md): Implementasi halaman Home (selesai).
*   [005A-project-context-and-handoff-documentation.md](plans/005A-project-context-and-handoff-documentation.md): Sumber workflow terbaru untuk handoff ChatGPT read-only, file plan unduhan, eksekusi Antigravity, dan review SHA.
*   [006-home-page-visual-enhancement.md](plans/006-home-page-visual-enhancement.md): Peningkatan visual halaman Home (selesai / kandidat).
