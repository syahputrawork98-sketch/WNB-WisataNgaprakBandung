# Dokumentasi Proyek WNB

Folder ini berisi seluruh dokumentasi teknis dan rencana untuk pengembangan aplikasi **Wisata Ngaprak Bandung (WNB)**.

## Pembagian Folder Dokumentasi

- **[`architecture/`](architecture/)**: Keputusan dan rancangan arsitektur sistem.
- **[`design/`](design/)**: Mockup, design system, dan diagram alur pengguna (*user flow*).
- **[`plans/`](plans/)**: Rencana implementasi (*implementation plans*) secara berurutan.
- **[`requirements/`](requirements/)**: Dokumen kebutuhan fungsional dan nonfungsional proyek.

---

## Daftar Dokumen Proyek

### Dokumen Kebutuhan (Requirements)
*   [Product Requirements](requirements/product-requirements.md): Ringkasan produk, ruang lingkup MVP, dan batasan produk.
*   [Functional Requirements](requirements/functional-requirements.md): Daftar kebutuhan fungsional berkode `FR-`.
*   [Non-Functional Requirements](requirements/non-functional-requirements.md): Spesifikasi kualitas, aksesibilitas, dan kemudahan pemeliharaan berkode `NFR-`.
*   [User Roles](requirements/user-roles.md): Pembagian peran Pengunjung dan Administrator WNB.

### Dokumen Desain (Design)
*   [Page Map](design/page-map.md): Sitemap, rute navigasi, dan peta komponen React konseptual.
*   [User Flow](design/user-flow.md): Alur eksplorasi paket, rute, dan booking menggunakan diagram Mermaid.
*   [Visual Direction](design/visual-direction.md): Karakter desain visual, palet warna, tipografi, dan prinsip panduan mockup.

### Dokumen Arsitektur (Architecture)
*   [Technology Decisions](architecture/technology-decisions.md): Catatan keputusan teknologi (*Architecture Decision Registry*) frontend dan penundaan backend.

---

## Daftar Rencana Implementasi (Plans)

Setiap dokumen rencana implementasi di dalam folder `plans/` menggunakan penomoran berurutan tiga digit:
*   [001-project-structure-setup.md](plans/001-project-structure-setup.md): Tahap inisialisasi struktur monorepo.
*   [002-product-requirements-and-page-map.md](plans/002-product-requirements-and-page-map.md): Tahap dokumentasi kebutuhan produk dan peta halaman (rencana saat ini).
