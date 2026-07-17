# Implementation Plan 001 — Inisialisasi Struktur Proyek WNB

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Jenis repository:** Monorepo
- **Bahasa utama:** TypeScript
- **Package manager:** npm

---

## Tujuan

Siapkan struktur awal repository WNB agar frontend, backend, dan dokumentasi berada dalam satu repository yang rapi dan mudah dikembangkan.

Pada tahap ini, hanya lakukan:

1. Pembuatan struktur folder.
2. Pembuatan file konfigurasi dasar di root.
3. Pembuatan file placeholder agar folder dapat tercatat oleh Git.
4. Pembaruan README utama.
5. Persiapan npm workspaces untuk `client` dan `server`.

Jangan mengimplementasikan halaman, API, database, autentikasi, atau fitur bisnis pada tahap ini.

---

## Kondisi Repository Saat Ini

Repository masih kosong dan hanya memiliki file:

```text
README.md
```

Isi repository harus disusun dari awal tanpa menghapus riwayat Git yang sudah ada.

---

## Struktur Root yang Harus Dibuat

Gunakan tiga folder utama berikut:

```text
WNB-WisataNgaprakBandung/
├── client/
├── server/
├── docs/
├── .gitignore
├── .env.example
├── package.json
├── tsconfig.base.json
└── README.md
```

Gunakan nama folder `docs`, bukan `doc`.

---

## Struktur Folder `client`

Buat struktur minimum berikut:

```text
client/
├── public/
│   └── .gitkeep
├── src/
│   ├── app/
│   │   └── .gitkeep
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   └── .gitkeep
│   ├── features/
│   │   └── .gitkeep
│   ├── hooks/
│   │   └── .gitkeep
│   ├── layouts/
│   │   └── .gitkeep
│   ├── lib/
│   │   └── .gitkeep
│   ├── pages/
│   │   └── .gitkeep
│   ├── routes/
│   │   └── .gitkeep
│   ├── services/
│   │   └── .gitkeep
│   ├── styles/
│   │   └── .gitkeep
│   ├── types/
│   │   └── .gitkeep
│   └── utils/
│       └── .gitkeep
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

### Fungsi folder `client`

- `app`: konfigurasi aplikasi dan provider global.
- `assets`: gambar, ikon, dan aset lokal.
- `components`: komponen yang dapat digunakan lintas fitur.
- `features`: komponen dan logika berdasarkan fitur bisnis.
- `hooks`: custom React hooks.
- `layouts`: struktur layout halaman.
- `lib`: konfigurasi library pihak ketiga.
- `pages`: komponen halaman yang terhubung dengan routing.
- `routes`: konfigurasi route aplikasi.
- `services`: komunikasi dengan backend/API.
- `styles`: style global.
- `types`: tipe TypeScript frontend.
- `utils`: fungsi bantu umum.

Jangan membuat komponen React pada tahap ini.

---

## Struktur Folder `server`

Buat struktur minimum berikut:

```text
server/
├── src/
│   ├── app/
│   │   └── .gitkeep
│   ├── config/
│   │   └── .gitkeep
│   ├── database/
│   │   └── .gitkeep
│   ├── middleware/
│   │   └── .gitkeep
│   ├── modules/
│   │   └── .gitkeep
│   ├── shared/
│   │   └── .gitkeep
│   └── utils/
│       └── .gitkeep
├── tests/
│   └── .gitkeep
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

### Fungsi folder `server`

- `app`: konfigurasi aplikasi dan HTTP server.
- `config`: konfigurasi environment dan aplikasi.
- `database`: schema, migration, dan seed database.
- `middleware`: middleware autentikasi, validasi, dan penanganan error.
- `modules`: modul fitur backend.
- `shared`: tipe, constants, error, dan utilitas bersama.
- `utils`: fungsi bantu umum.
- `tests`: tempat pengujian pada tahap berikutnya.

Jangan membuat endpoint, controller, service, repository, model, atau koneksi database pada tahap ini.

---

## Struktur Folder `docs`

Buat struktur dokumentasi berikut:

```text
docs/
├── README.md
├── architecture/
│   └── .gitkeep
├── design/
│   ├── mockups/
│   │   └── .gitkeep
│   └── .gitkeep
├── plans/
│   ├── 001-project-structure-setup.md
│   └── .gitkeep
└── requirements/
    └── .gitkeep
```

File instruksi ini harus disimpan juga sebagai:

```text
docs/plans/001-project-structure-setup.md
```

Isi file tersebut harus sama dengan implementation plan yang sedang dijalankan.

---

## Root `package.json`

Buat file `package.json` di root dengan konfigurasi berikut:

```json
{
  "name": "wnb-wisata-ngaprak-bandung",
  "version": "0.1.0",
  "private": true,
  "description": "Monorepo aplikasi Wisata Ngaprak Bandung",
  "workspaces": [
    "client",
    "server"
  ],
  "scripts": {
    "dev:client": "npm run dev --workspace=client",
    "dev:server": "npm run dev --workspace=server",
    "build:client": "npm run build --workspace=client",
    "build:server": "npm run build --workspace=server"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

Jangan menjalankan instalasi dependency pada tahap ini.

---

## `client/package.json`

Buat file awal berikut:

```json
{
  "name": "@wnb/client",
  "version": "0.1.0",
  "private": true,
  "description": "Frontend aplikasi Wisata Ngaprak Bandung",
  "scripts": {
    "dev": "echo \"Client belum diinisialisasi\"",
    "build": "echo \"Client belum diinisialisasi\""
  }
}
```

Jangan menambahkan React, Vite, Tailwind CSS, atau dependency lain pada tahap ini.

---

## `server/package.json`

Buat file awal berikut:

```json
{
  "name": "@wnb/server",
  "version": "0.1.0",
  "private": true,
  "description": "Backend aplikasi Wisata Ngaprak Bandung",
  "scripts": {
    "dev": "echo \"Server belum diinisialisasi\"",
    "build": "echo \"Server belum diinisialisasi\""
  }
}
```

Jangan menambahkan Express, Fastify, ORM, database driver, atau dependency lain pada tahap ini.

---

## Root `tsconfig.base.json`

Buat konfigurasi TypeScript dasar:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": [
      "ES2022"
    ],
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  }
}
```

---

## `client/tsconfig.json`

Buat file berikut:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "noEmit": true
  },
  "include": [
    "src"
  ]
}
```

---

## `server/tsconfig.json`

Buat file berikut:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "dist",
    "node_modules"
  ]
}
```

Catatan: konfigurasi ini hanya persiapan. Jangan menginstal `@types/node` pada tahap ini.

---

## File Environment

### Root `.env.example`

Isi:

```env
NODE_ENV=development
```

### `client/.env.example`

Isi:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### `server/.env.example`

Isi:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=
CLIENT_URL=http://localhost:5173
```

Jangan membuat file `.env` yang berisi nilai rahasia.

---

## Root `.gitignore`

Gunakan isi berikut:

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/
coverage/

# Environment variables
.env
.env.*
!.env.example

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor
.vscode/
.idea/
*.swp
*.swo

# Operating system
.DS_Store
Thumbs.db

# Temporary files
tmp/
temp/
.cache/

# Uploads
server/uploads/*
!server/uploads/.gitkeep
```

---

## Root `README.md`

Perbarui README utama agar minimal berisi:

1. Nama proyek.
2. Deskripsi singkat.
3. Status proyek.
4. Struktur monorepo.
5. Penjelasan folder `client`, `server`, dan `docs`.
6. Prasyarat Node.js dan npm.
7. Catatan bahwa frontend dan backend belum diinisialisasi.
8. Tautan relatif menuju dokumentasi di `docs/README.md`.

Gunakan bahasa Indonesia yang ringkas dan profesional.

---

## `client/README.md`

Jelaskan bahwa:

- Folder ini akan berisi frontend WNB.
- Rencana teknologi: React, TypeScript, Vite, dan Tailwind CSS.
- Teknologi tersebut belum diinisialisasi pada tahap ini.
- Seluruh implementasi frontend akan dilakukan melalui implementation plan berikutnya.

---

## `server/README.md`

Jelaskan bahwa:

- Folder ini akan berisi backend/API WNB.
- Backend menggunakan Node.js dan TypeScript.
- Framework backend dan database belum dipilih pada tahap ini.
- Seluruh implementasi backend akan dilakukan melalui implementation plan berikutnya.

---

## `docs/README.md`

Jelaskan fungsi folder dokumentasi dan pembagiannya:

- `architecture`: keputusan dan rancangan arsitektur.
- `design`: mockup, design system, dan user flow.
- `plans`: implementation plan berurutan.
- `requirements`: kebutuhan fungsional dan nonfungsional.

Gunakan penomoran berurutan untuk setiap implementation plan:

```text
001-
002-
003-
```

---

## Aturan Implementasi

1. Jangan menghapus file atau commit yang sudah ada.
2. Jangan membuat branch baru.
3. Kerjakan langsung pada branch `main`.
4. Jangan menginstal dependency.
5. Jangan menjalankan generator React, Vite, Express, atau framework lain.
6. Jangan membuat fitur aplikasi.
7. Jangan membuat file kosong tanpa tujuan.
8. Gunakan `.gitkeep` hanya untuk mempertahankan folder kosong.
9. Jangan membuat folder di luar struktur yang telah ditentukan.
10. Jangan melakukan perubahan yang tidak diminta.
11. Pastikan seluruh JSON valid.
12. Gunakan format Markdown yang rapi.
13. Gunakan line ending dan penamaan file secara konsisten.
14. Jangan menambahkan konfigurasi Docker, CI/CD, ESLint, Prettier, testing, atau deployment pada tahap ini.

---

## Pemeriksaan Sebelum Selesai

Pastikan:

- Terdapat tiga folder utama: `client`, `server`, dan `docs`.
- Root `package.json` mengenali dua npm workspace.
- Tidak ada dependency yang diinstal.
- Tidak ada folder `node_modules`.
- Tidak ada file `.env`.
- Semua file JSON valid.
- Semua folder kosong yang diperlukan memiliki `.gitkeep`.
- README utama dan README setiap bagian sudah tersedia.
- File ini tersimpan di `docs/plans/001-project-structure-setup.md`.
- Tidak ada implementasi UI atau API.

---

## Output yang Harus Dilaporkan

Setelah implementasi selesai, berikan laporan singkat berisi:

1. Daftar file dan folder yang dibuat.
2. Daftar file yang diperbarui.
3. Konfirmasi bahwa tidak ada dependency yang diinstal.
4. Konfirmasi bahwa belum ada fitur frontend atau backend yang dibuat.
5. Kendala yang ditemukan, bila ada.
6. Ringkasan hasil `git status`.
7. Rekomendasi nama commit:

```text
chore: initialize monorepo project structure
```

Jangan melakukan perubahan tambahan di luar implementation plan ini.
