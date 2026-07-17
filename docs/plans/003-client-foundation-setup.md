# Implementation Plan 003 — Client Foundation Setup

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (High)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Pekerjaan melibatkan instalasi dependency, konfigurasi Vite dan TypeScript, integrasi Tailwind CSS, routing multi-page, serta pembuatan beberapa file yang saling berkaitan.
- **Token-efficiency note:** Mulai dengan Gemini 3.5 Flash (High). Gunakan Gemini 3.1 Pro (High) hanya apabila terjadi konflik dependency, error konfigurasi TypeScript, alias import tidak terselesaikan, atau build gagal setelah satu kali upaya koreksi terarah.
- **Do not use:** Claude Opus atau model thinking berat untuk eksekusi awal karena instruksi sudah dibuat eksplisit dan deterministik.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Package manager:** npm workspaces
- **Workspace frontend:** `client`
- **Tahap sebelumnya:** Implementation Plan 002 — Product Requirements dan Page Map
- **Status backend:** Ditunda untuk MVP
- **Kendaraan utama WNB:** Land Rover klasik berbodi besi/logam, varian Short dan Long

---

## Tujuan

Inisialisasi fondasi frontend WNB di dalam workspace `client` menggunakan:

- React.
- TypeScript.
- Vite.
- Tailwind CSS melalui plugin resmi Vite.
- React Router dalam **Declarative Mode**.
- Lucide React.
- Alias import `@/`.
- Struktur route dasar.
- Layout dasar untuk memverifikasi routing.
- Halaman placeholder untuk seluruh route MVP.
- Design tokens minimum sebagai fondasi visual.

Tahap ini hanya membangun fondasi teknis. Jangan mengimplementasikan desain final dari mockup.

---

## Sumber Kebenaran

Sebelum mengerjakan, baca dokumen berikut:

```text
docs/requirements/product-requirements.md
docs/requirements/functional-requirements.md
docs/requirements/non-functional-requirements.md
docs/requirements/user-roles.md
docs/design/page-map.md
docs/design/user-flow.md
docs/design/visual-direction.md
docs/architecture/technology-decisions.md
docs/plans/001-project-structure-setup.md
docs/plans/002-product-requirements-and-page-map.md
```

Gunakan istilah kendaraan berikut secara konsisten:

```text
Land Rover klasik
Land Rover Short / Short Wheelbase (SWB)
Land Rover Long / Long Wheelbase (LWB)
```

Jangan menggunakan istilah “Jeep” untuk kendaraan WNB.

---

## Prinsip Implementasi

1. Gunakan versi **stable terbaru yang kompatibel** pada saat eksekusi.
2. Jangan memasang versi beta, canary, release candidate, nightly, atau prerelease.
3. Jangan menulis nomor versi dependency secara manual sebelum npm menyelesaikan instalasi.
4. Biarkan npm mencatat versi pasti di `package-lock.json`.
5. Gunakan satu lockfile di root repository.
6. Jangan membuat `client/package-lock.json`.
7. Jangan menggunakan `--force`.
8. Jangan menggunakan `--legacy-peer-deps`.
9. Jika dependency tidak kompatibel, hentikan dan laporkan; jangan memaksa instalasi.
10. Jangan menambah framework atau library di luar daftar yang ditentukan.
11. Jangan membuat backend.
12. Jangan membuat test framework.
13. Jangan mengimplementasikan desain final.
14. Jangan mengarang konten bisnis WNB.

---

## Keputusan Teknis Tahap Ini

### React Router

Gunakan React Router **Declarative Mode** karena MVP:

- Merupakan Single Page Application.
- Menggunakan typed local data.
- Belum membutuhkan loader, action, server rendering, atau framework mode.
- Membutuhkan routing dasar, dynamic slug, nested layout, `Link`, `NavLink`, `Outlet`, dan `useParams`.

Gunakan package:

```text
react-router
```

Jangan memasang `react-router-dom` kecuali package resmi saat eksekusi benar-benar membutuhkannya. Implementasi utama harus mengikuti API resmi terbaru dari `react-router`.

### Tailwind CSS

Gunakan integrasi Tailwind melalui plugin resmi Vite:

```text
tailwindcss
@tailwindcss/vite
```

Gunakan pada CSS:

```css
@import "tailwindcss";
```

Jangan membuat konfigurasi Tailwind v3 seperti:

```text
tailwind.config.js
postcss.config.js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

kecuali dokumentasi resmi terbaru pada waktu eksekusi telah berubah dan konfigurasi tersebut benar-benar diwajibkan. Jika terjadi perubahan resmi, laporkan perbedaannya.

### React Compiler

Jangan mengaktifkan React Compiler pada tahap ini.

### State Management

Jangan memasang Redux, Zustand, MobX, Jotai, Recoil, atau state management global lain.

### Form Library

Jangan memasang React Hook Form, Formik, Zod, Yup, atau library validasi pada tahap ini.

### Data Fetching

Jangan memasang Axios, TanStack Query, SWR, atau library data fetching karena backend belum digunakan.

---

## Pemeriksaan Runtime Sebelum Instalasi

Jalankan dari root repository:

```bash
node --version
npm --version
```

Vite stable saat ini membutuhkan Node.js modern. Pastikan runtime memenuhi salah satu rentang berikut:

```text
Node.js ^20.19.0
atau
Node.js >=22.12.0
```

Jika Node.js tidak kompatibel:

- Jangan meneruskan instalasi.
- Jangan mengubah dependency.
- Laporkan versi Node.js yang ditemukan.
- Minta pemilik proyek memperbarui Node.js.

Perbarui bagian `engines.node` di root `package.json` menjadi:

```json
"node": "^20.19.0 || >=22.12.0"
```

Pertahankan:

```json
"npm": ">=10.0.0"
```

Perbarui prasyarat yang sama pada root `README.md`.

---

## Dependency yang Harus Dipasang

Jalankan instalasi dari **root repository**, bukan dari folder lain.

### Production dependencies

```bash
npm install --workspace=client react react-dom react-router lucide-react
```

### Development dependencies

```bash
npm install --workspace=client --save-dev vite @vitejs/plugin-react typescript @types/react @types/react-dom @types/node tailwindcss @tailwindcss/vite
```

Setelah instalasi:

- Pastikan dependency tercatat di `client/package.json`.
- Pastikan `package-lock.json` dibuat atau diperbarui di root.
- Pastikan tidak ada `package-lock.json` di dalam `client`.
- Jangan memindahkan dependency frontend ke root `package.json`.

---

## Root `package.json`

Pertahankan npm workspaces yang sudah ada.

Perbarui scripts root menjadi minimal:

```json
{
  "scripts": {
    "dev:client": "npm run dev --workspace=client",
    "build:client": "npm run build --workspace=client",
    "typecheck:client": "npm run typecheck --workspace=client",
    "preview:client": "npm run preview --workspace=client",
    "dev:server": "npm run dev --workspace=server",
    "build:server": "npm run build --workspace=server"
  }
}
```

Jangan menghapus script server yang sudah ada.

Perbarui engines:

```json
{
  "engines": {
    "node": "^20.19.0 || >=22.12.0",
    "npm": ">=10.0.0"
  }
}
```

---

## `client/package.json`

Setelah npm menyelesaikan versi dependency, pastikan scripts berikut tersedia:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "typecheck": "tsc -b --pretty false",
    "preview": "vite preview"
  }
}
```

Tambahkan engines yang sama:

```json
{
  "engines": {
    "node": "^20.19.0 || >=22.12.0",
    "npm": ">=10.0.0"
  }
}
```

Jangan menambahkan script test.

Jangan mengedit nomor versi dependency secara manual setelah instalasi npm berhasil.

---

## Struktur File yang Harus Dihasilkan

```text
client/
├── public/
│   └── .gitkeep
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── AppProviders.tsx
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   └── common/
│   │       └── PagePlaceholder.tsx
│   ├── features/
│   │   └── .gitkeep
│   ├── hooks/
│   │   └── .gitkeep
│   ├── layouts/
│   │   └── MainLayout/
│   │       └── MainLayout.tsx
│   ├── lib/
│   │   └── .gitkeep
│   ├── pages/
│   │   ├── AboutPage/
│   │   │   └── AboutPage.tsx
│   │   ├── BookingPage/
│   │   │   └── BookingPage.tsx
│   │   ├── GalleryPage/
│   │   │   └── GalleryPage.tsx
│   │   ├── HomePage/
│   │   │   └── HomePage.tsx
│   │   ├── NotFoundPage/
│   │   │   └── NotFoundPage.tsx
│   │   ├── PackageDetailPage/
│   │   │   └── PackageDetailPage.tsx
│   │   ├── PackageListPage/
│   │   │   └── PackageListPage.tsx
│   │   ├── RouteDetailPage/
│   │   │   └── RouteDetailPage.tsx
│   │   └── RouteListPage/
│   │       └── RouteListPage.tsx
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   └── routePaths.ts
│   ├── services/
│   │   └── .gitkeep
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── env.d.ts
│   ├── utils/
│   │   └── .gitkeep
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Aturan `.gitkeep`

- Hapus `.gitkeep` dari folder yang sudah memiliki file nyata.
- Pertahankan `.gitkeep` hanya pada folder yang masih kosong.
- Jangan menyimpan `.gitkeep` berdampingan dengan file nyata dalam folder yang sama tanpa alasan.

---

## Konfigurasi TypeScript

## `client/tsconfig.json`

Gunakan project references:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

## `client/tsconfig.app.json`

Gunakan konfigurasi berikut sebagai baseline:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src"
  ]
}
```

## `client/tsconfig.node.json`

Gunakan konfigurasi berikut sebagai baseline:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2023",
    "lib": [
      "ES2023"
    ],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "types": [
      "node"
    ],
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "vite.config.ts"
  ]
}
```

Jika versi stable terbaru dari Vite menghasilkan opsi TypeScript resmi yang sedikit berbeda, pertahankan kompatibilitas dengan Vite tanpa menurunkan:

- `strict`.
- `noImplicitAny`.
- `noUncheckedIndexedAccess`.
- `exactOptionalPropertyTypes`.
- `forceConsistentCasingInFileNames`.

Jangan menonaktifkan strict mode hanya untuk menghilangkan error.

---

## Konfigurasi Vite

Buat `client/vite.config.ts`:

```ts
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
```

Persyaratan:

- Alias `@` harus mengarah ke `client/src`.
- Tailwind harus dipasang sebagai plugin Vite.
- Jangan menambahkan proxy API.
- Jangan menambahkan konfigurasi backend.
- Jangan mengaktifkan React Compiler.
- Jangan menambahkan plugin lain.

---

## Environment

Perbarui `client/.env.example` menjadi:

```env
VITE_APP_NAME=WNB
VITE_WHATSAPP_NUMBER=
```

Hapus:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Alasannya: backend belum digunakan pada MVP.

Jangan membuat file `.env`.

Nomor WhatsApp dibiarkan kosong karena belum dikonfirmasi.

---

## Environment Type

Buat `client/src/types/env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Jangan menggunakan `process.env` pada frontend Vite.

---

## HTML Entry

Buat atau perbarui `client/index.html`.

Persyaratan minimum:

- `lang="id"`.
- Charset UTF-8.
- Responsive viewport.
- Title `WNB — Wisata Ngaprak Bandung`.
- Meta description netral dan tidak mengarang informasi bisnis.
- Elemen root dengan `id="root"`.
- Entry module `/src/main.tsx`.
- Jangan menggunakan logo Vite.
- Jangan menggunakan favicon Vite.
- Jangan memasukkan CDN.
- Jangan memasukkan font eksternal pada tahap ini.

Contoh meta description yang aman:

```text
WNB — informasi wisata petualangan Land Rover klasik di Bandung.
```

---

## Global CSS dan Tailwind

Buat `client/src/styles/globals.css`.

Gunakan baseline berikut:

```css
@import "tailwindcss";

@theme {
  --color-wnb-black: #0d0d0d;
  --color-wnb-surface: #1f1f1f;
  --color-wnb-white: #ffffff;
  --color-wnb-muted: #a3a3a3;
  --color-wnb-border: #404040;

  --font-sans:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
}

@layer base {
  :root {
    font-family: var(--font-sans);
    color: var(--color-wnb-white);
    background: var(--color-wnb-black);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  html {
    min-width: 320px;
    min-height: 100%;
    background: var(--color-wnb-black);
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background: var(--color-wnb-black);
    color: var(--color-wnb-white);
  }

  button,
  a {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
}
```

Catatan:

- Ini hanya design tokens minimum.
- Jangan membuat design system final.
- Jangan memasang atau mengimpor font Inter dari internet.
- `Inter` hanya menjadi pilihan pertama bila tersedia di perangkat; fallback sistem tetap wajib.
- Jangan membuat `tailwind.config.js`.

---

## Route Paths

Buat `client/src/routes/routePaths.ts`.

Gunakan konstanta terpusat:

```ts
export const ROUTE_PATHS = {
  home: "/",
  about: "/about",
  packages: "/paket",
  packageDetail: "/paket/:slug",
  routes: "/rute",
  routeDetail: "/rute/:slug",
  gallery: "/gallery",
  booking: "/booking",
  notFound: "*",
} as const;

export const buildPackageDetailPath = (slug: string): string =>
  `/paket/${encodeURIComponent(slug)}`;

export const buildRouteDetailPath = (slug: string): string =>
  `/rute/${encodeURIComponent(slug)}`;
```

Persyaratan:

- Jangan menulis route string yang sama berulang kali di banyak file.
- Gunakan builder function untuk URL detail.
- Jangan menggunakan ID numerik.
- Jangan memasukkan contoh lokasi nyata yang belum dikonfirmasi.

---

## App Providers

Buat `client/src/app/AppProviders.tsx`.

Tanggung jawab:

- Membungkus aplikasi dengan `BrowserRouter`.
- Belum menambahkan provider lain.
- Gunakan tipe `PropsWithChildren`.
- Gunakan named export.

Struktur yang diharapkan:

```tsx
import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";

export function AppProviders({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
```

---

## App Component

Buat `client/src/app/App.tsx`.

Tanggung jawab:

- Hanya merender `AppRoutes`.
- Jangan menaruh layout atau business logic langsung di sini.
- Gunakan named export.

```tsx
import { AppRoutes } from "@/routes/AppRoutes";

export function App() {
  return <AppRoutes />;
}
```

---

## Main Entry

Buat `client/src/main.tsx`.

Persyaratan:

- Import `StrictMode`.
- Import `createRoot`.
- Import `App`.
- Import `AppProviders`.
- Import `globals.css`.
- Validasi keberadaan elemen `#root`.
- Gunakan error yang jelas jika root tidak ditemukan.
- Jangan menggunakan non-null assertion secara sembarangan.

Baseline:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app/App";
import { AppProviders } from "@/app/AppProviders";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemen root dengan id 'root' tidak ditemukan.");
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
```

---

## Main Layout

Buat `client/src/layouts/MainLayout/MainLayout.tsx`.

Tahap ini hanya membutuhkan layout teknis minimum.

Tanggung jawab:

- Menyediakan wrapper aplikasi.
- Menyediakan navigasi sementara agar seluruh route dapat diperiksa.
- Merender child route melalui `Outlet`.
- Menyediakan footer sementara.
- Memakai `NavLink` untuk active state.
- Tidak meniru desain final mockup.

Gunakan label jelas bahwa navigasi ini masih fondasi.

Menu:

```text
Home
About
Paket
Rute
Gallery
Booking
```

Persyaratan visual minimum:

- Background hitam WNB.
- Teks putih.
- Border sederhana.
- Responsif tanpa horizontal overflow.
- Navigasi boleh wrap pada layar kecil.
- Tidak perlu hamburger menu pada tahap ini.
- Hamburger menu final dibuat pada Implementation Plan 004.
- Footer tidak boleh memuat nomor telepon, media sosial, alamat, atau copyright yang belum dikonfirmasi.

Contoh footer aman:

```text
WNB — Fondasi frontend MVP
```

---

## Reusable Page Placeholder

Buat `client/src/components/common/PagePlaceholder.tsx`.

Gunakan props:

```ts
type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};
```

Tanggung jawab:

- Menampilkan halaman placeholder konsisten.
- Menghindari duplikasi markup.
- Menggunakan heading hierarchy yang benar.
- Menggunakan Tailwind utilities.
- Tidak menggunakan Lorem Ipsum.
- Tidak mengarang data WNB.

Gunakan named export.

---

## Halaman yang Harus Dibuat

## `HomePage`

Route:

```text
/
```

Konten placeholder:

- Eyebrow: `WNB`
- Title: `Beranda`
- Description: `Fondasi halaman Beranda Wisata Ngaprak Bandung.`

Jangan mengimplementasikan hero mockup.

## `AboutPage`

Route:

```text
/about
```

Konten placeholder harus menyatakan bahwa konten resmi tentang WNB akan ditambahkan setelah dikonfirmasi.

## `PackageListPage`

Route:

```text
/paket
```

Konten placeholder harus menyatakan bahwa daftar paket akan menggunakan typed local data pada tahap berikutnya.

## `PackageDetailPage`

Route:

```text
/paket/:slug
```

Persyaratan:

- Gunakan `useParams`.
- Tampilkan slug hanya sebagai informasi teknis sementara.
- Jangan membuat data paket palsu.
- Bila slug tidak tersedia, tampilkan nilai fallback aman.

## `RouteListPage`

Route:

```text
/rute
```

Konten placeholder harus menyatakan bahwa daftar rute resmi masih menunggu konfirmasi data.

## `RouteDetailPage`

Route:

```text
/rute/:slug
```

Persyaratan:

- Gunakan `useParams`.
- Tampilkan slug hanya sebagai informasi teknis sementara.
- Jangan mengarang nama lokasi, tingkat kesulitan, atau kondisi medan.

## `GalleryPage`

Route:

```text
/gallery
```

Jangan menambahkan gambar placeholder generik.

## `BookingPage`

Route:

```text
/booking
```

Jangan membuat form booking pada tahap ini.

Nyatakan bahwa alur Click-to-Chat akan diimplementasikan setelah data paket dan nomor WhatsApp dikonfirmasi.

## `NotFoundPage`

Route:

```text
*
```

Persyaratan:

- Tampilkan pesan `Rute Tidak Ditemukan`.
- Sediakan `Link` kembali ke Home.
- Jangan menggunakan ilustrasi atau aset generik.

---

## App Routes

Buat `client/src/routes/AppRoutes.tsx`.

Gunakan:

- `Routes`.
- `Route`.
- `MainLayout`.
- Seluruh page component.
- Konstanta dari `routePaths.ts`.

Struktur route:

```tsx
<Routes>
  <Route element={<MainLayout />}>
    <Route path={ROUTE_PATHS.home} element={<HomePage />} />
    <Route path={ROUTE_PATHS.about} element={<AboutPage />} />
    <Route path={ROUTE_PATHS.packages} element={<PackageListPage />} />
    <Route
      path={ROUTE_PATHS.packageDetail}
      element={<PackageDetailPage />}
    />
    <Route path={ROUTE_PATHS.routes} element={<RouteListPage />} />
    <Route
      path={ROUTE_PATHS.routeDetail}
      element={<RouteDetailPage />}
    />
    <Route path={ROUTE_PATHS.gallery} element={<GalleryPage />} />
    <Route path={ROUTE_PATHS.booking} element={<BookingPage />} />
    <Route path={ROUTE_PATHS.notFound} element={<NotFoundPage />} />
  </Route>
</Routes>
```

Pastikan `MainLayout` memiliki `<Outlet />`.

---

## Import Rules

Gunakan alias `@/` untuk import lintas folder.

Contoh:

```ts
import { AppRoutes } from "@/routes/AppRoutes";
```

Relative import masih diperbolehkan untuk file yang benar-benar berdekatan dalam folder yang sama, tetapi jangan membuat rantai:

```text
../../../
```

Jangan membuat barrel files `index.ts` pada tahap ini.

Gunakan named exports untuk komponen aplikasi.

---

## Konten dan Terminologi

Gunakan Bahasa Indonesia.

Istilah yang benar:

```text
Land Rover klasik
Land Rover Short
Land Rover Long
WhatsApp Click-to-Chat
Paket
Rute
Galeri
Booking
```

Jangan mengarang:

- Harga.
- Nomor WhatsApp.
- Alamat.
- Testimoni.
- Nama driver.
- Kapasitas kendaraan.
- Lokasi rute.
- Detail keamanan.
- Jumlah armada.
- Tahun produksi.
- Seri kendaraan.
- Spesifikasi mesin.

Jangan gunakan Lorem Ipsum.

---

## README Client

Perbarui `client/README.md`.

Wajib berisi:

1. Deskripsi frontend WNB.
2. Stack yang benar-benar telah dipasang.
3. Prasyarat Node dan npm.
4. Cara instalasi dari root:
   ```bash
   npm install
   ```
5. Cara menjalankan:
   ```bash
   npm run dev:client
   ```
6. Cara typecheck:
   ```bash
   npm run typecheck:client
   ```
7. Cara build:
   ```bash
   npm run build:client
   ```
8. Daftar route.
9. Penjelasan bahwa halaman masih placeholder.
10. Penjelasan bahwa backend belum digunakan.
11. Penjelasan bahwa data bisnis masih menunggu konfirmasi.

Jangan menulis dependency version secara manual; arahkan pembaca ke `client/package.json`.

---

## Root README

Perbarui status proyek pada root `README.md`.

Status yang benar:

```text
Frontend foundation: Initialized
Frontend design implementation: Not started
Backend: Not initialized / deferred for MVP
```

Perbarui prasyarat Node:

```text
^20.19.0 atau >=22.12.0
```

Tambahkan perintah:

```bash
npm install
npm run dev:client
npm run typecheck:client
npm run build:client
```

Gunakan tautan relatif.

---

## Dokumentasi Proyek

Simpan file instruksi ini sebagai:

```text
docs/plans/003-client-foundation-setup.md
```

Perbarui `docs/README.md` dengan tautan:

```md
- [003-client-foundation-setup.md](plans/003-client-foundation-setup.md): Inisialisasi fondasi frontend React.
```

Perbarui `docs/architecture/technology-decisions.md` secara ringkas:

1. React Router menggunakan **Declarative Mode** pada MVP.
2. Tailwind menggunakan plugin resmi Vite.
3. Dependency stable dipilih saat eksekusi dan dikunci melalui root `package-lock.json`.
4. React Compiler berstatus `Deferred`.
5. Test framework berstatus `Deferred`.
6. Backend tetap `Deferred`.

Jangan menulis klaim performa dengan angka yang tidak diukur.

---

## File Default Vite yang Tidak Boleh Dipertahankan

Jika ada file scaffold Vite sementara, hapus seluruh artefak demo berikut:

```text
src/App.css
src/index.css
src/assets/react.svg
public/vite.svg
```

Hapus juga:

- Counter demo.
- Logo React.
- Logo Vite.
- Teks “Vite + React”.
- Kode starter yang tidak digunakan.

Jangan menghapus aset WNB yang mungkin sudah ada pada masa depan.

---

## Larangan Tahap Ini

Jangan:

- Mengimplementasikan desain mockup.
- Membuat Hero final.
- Membuat Navbar final.
- Membuat hamburger menu final.
- Membuat card paket.
- Membuat card rute.
- Membuat gallery grid.
- Membuat lightbox.
- Membuat booking form.
- Membuat WhatsApp redirect.
- Menambahkan data paket.
- Menambahkan data rute.
- Menambahkan foto.
- Menambahkan logo buatan sendiri.
- Membuat server API.
- Membuat database.
- Membuat authentication.
- Membuat dashboard admin.
- Menambahkan test framework.
- Menambahkan ESLint atau Prettier pada tahap ini.
- Menambahkan animation library.
- Menambahkan component library.
- Menambahkan CSS framework lain.
- Menambahkan font melalui CDN.
- Menambahkan file deployment.
- Menambahkan Docker.
- Menambahkan CI/CD.

---

## Verifikasi Wajib

Verifikasi ini adalah pemeriksaan kompilasi, bukan penambahan test framework.

Jalankan dari root repository:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya harus berhasil tanpa error.

Periksa juga:

```bash
git status
```

Pastikan:

- Tidak ada file `.env`.
- Tidak ada nested `client/package-lock.json`.
- Tidak ada dependency server yang berubah.
- Tidak ada file test.
- Tidak ada demo Vite.
- Tidak ada istilah “Jeep”.
- Tidak ada data bisnis yang dikarang.
- Tidak ada link `file:///`.
- Tidak ada error TypeScript.
- Tidak ada error build Vite.

Jangan menjalankan atau menambahkan unit test.

---

## Acceptance Criteria

Implementation Plan 003 dinyatakan selesai bila:

1. React frontend dapat dikompilasi.
2. Vite terkonfigurasi.
3. Tailwind CSS aktif melalui plugin Vite.
4. Alias `@/` berfungsi pada TypeScript dan Vite.
5. React Router Declarative Mode aktif.
6. Semua route MVP tersedia.
7. Dynamic route paket dan rute dapat membaca slug.
8. MainLayout merender child route melalui `Outlet`.
9. Seluruh halaman masih berupa placeholder yang aman.
10. Tidak ada konten bisnis palsu.
11. `npm run typecheck:client` berhasil.
12. `npm run build:client` berhasil.
13. Root `package-lock.json` diperbarui.
14. Dokumentasi diperbarui.
15. Backend tidak berubah.

---

## Output yang Harus Dilaporkan

Setelah implementasi selesai, laporkan:

1. Model Antigravity yang digunakan.
2. Versi Node.js.
3. Versi npm.
4. Versi dependency utama yang benar-benar terpasang:
   - React.
   - React DOM.
   - Vite.
   - TypeScript.
   - Tailwind CSS.
   - React Router.
   - Lucide React.
5. Daftar file yang dibuat.
6. Daftar file yang diperbarui.
7. Daftar file `.gitkeep` yang dihapus.
8. Hasil `npm run typecheck:client`.
9. Hasil `npm run build:client`.
10. Konfirmasi tidak ada test framework.
11. Konfirmasi backend tidak berubah.
12. Konfirmasi root `package-lock.json` digunakan.
13. Ringkasan `git status`.
14. Kendala atau deviasi dari plan, bila ada.

Gunakan commit:

```text
chore(client): initialize frontend foundation
```

Jangan melakukan perubahan tambahan di luar implementation plan ini.
