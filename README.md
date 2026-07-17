# WNB — Wisata Ngaprak Bandung

Wisata Ngaprak Bandung (WNB) adalah aplikasi pemandu wisata untuk menjelajahi keindahan dan keunikan kota Bandung.

## Status Proyek
- **Tahap saat ini:** Inisialisasi struktur proyek (Monorepo).
- **Frontend & Backend:** Belum diinisialisasi.

## Struktur Monorepo
Proyek ini dikembangkan dengan arsitektur monorepo menggunakan npm workspaces:

```text
WNB-WisataNgaprakBandung/
├── client/          # Frontend aplikasi (React, TypeScript, Vite) [Belum Aktif]
├── server/          # Backend aplikasi (Node.js, TypeScript) [Belum Aktif]
├── docs/            # Dokumentasi proyek (Architecture, Design, Plans, Requirements)
├── .gitignore
├── .env.example
├── package.json     # Konfigurasi npm workspaces
├── tsconfig.base.json
└── README.md        # File dokumentasi utama ini
```

## Prasyarat (*Prerequisites*)
Untuk menjalankan proyek ini secara lokal, pastikan Anda telah memasang:
- **Node.js** `>= 20.0.0`
- **npm** `>= 10.0.0`

## Dokumentasi Proyek
Seluruh dokumentasi detail mengenai kebutuhan, arsitektur, desain, dan rencana implementasi dapat diakses pada tautan berikut:
- [Dokumentasi Utama WNB](docs/README.md)