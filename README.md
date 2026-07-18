# WNB — Wisata Ngaprak Bandung

Wisata Ngaprak Bandung (WNB) adalah aplikasi pemandu wisata untuk menjelajahi keindahan dan keunikan kota Bandung menggunakan kendaraan off-road Land Rover klasik dengan varian Short dan Long.

## Status Proyek
- **Frontend foundation:** Initialized
- **Responsive application shell:** Initialized
- **Home page:** Enhanced with temporary visuals
- **Other pages:** Not implemented
- **Backend:** Deferred for MVP

## Struktur Monorepo
Proyek ini dikembangkan dengan arsitektur monorepo menggunakan npm workspaces:

```text
WNB-WisataNgaprakBandung/
├── client/          # Frontend aplikasi (React, TypeScript, Vite) [Aktif - Fondasi, Shell & Home]
├── server/          # Backend aplikasi (Node.js, TypeScript) [Belum Aktif]
├── docs/            # Dokumentasi proyek (Architecture, Design, Plans, Requirements, Context)
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

## Handoff & Dokumentasi Proyek
Untuk melanjutkan proyek di room ChatGPT baru, gunakan [New Chat Handoff Prompt](docs/context/new-chat-prompt.md). ChatGPT hanya bertugas sebagai planner/reviewer read-only dan menyerahkan plan sebagai file .md; perubahan working tree dieksekusi melalui Gemini Antigravity, sedangkan commit dan push wajib dijalankan secara manual oleh pengguna.

Seluruh dokumentasi detail mengenai kebutuhan, arsitektur, desain, dan rencana implementasi dapat diakses pada tautan berikut:
- [Dokumentasi Utama WNB (docs/README.md)](docs/README.md)
- [Current Project State (docs/context/current-state.md)](docs/context/current-state.md)
- [New Chat Handoff Prompt (docs/context/new-chat-prompt.md)](docs/context/new-chat-prompt.md)