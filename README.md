# WNB — Wisata Ngaprak Bandung

Wisata Ngaprak Bandung (WNB) adalah aplikasi pemandu wisata untuk menjelajahi keindahan dan keunikan kota Bandung menggunakan kendaraan off-road Land Rover klasik dengan varian Short dan Long.

## Status Proyek
- **Frontend foundation:** Initialized
- **Responsive application shell:** Initialized
- **Page implementation:** Not started
- **Backend:** Deferred for MVP

## Struktur Monorepo
Proyek ini dikembangkan dengan arsitektur monorepo menggunakan npm workspaces:

```text
WNB-WisataNgaprakBandung/
├── client/          # Frontend aplikasi (React, TypeScript, Vite) [Aktif - Fondasi & Shell]
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
- **Node.js:** `^20.19.0 || >=22.12.0`
- **npm:** `>=10.0.0`

## Perintah Pengembangan (Development Commands)
Semua perintah dijalankan dari **root repository**:

1. **Instalasi Dependensi Monorepo:**
   ```bash
   npm install
   ```
2. **Menjalankan Server Pengembangan Client:**
   ```bash
   npm run dev:client
   ```
3. **Melakukan Typecheck Client:**
   ```bash
   npm run typecheck:client
   ```
4. **Membangun Bundel Produksi Client:**
   ```bash
   npm run build:client
   ```

## Dokumentasi Proyek
Seluruh dokumentasi detail mengenai kebutuhan, arsitektur, desain, dan rencana implementasi dapat diakses pada tautan berikut:
- [Dokumentasi Utama WNB (docs/README.md)](docs/README.md)