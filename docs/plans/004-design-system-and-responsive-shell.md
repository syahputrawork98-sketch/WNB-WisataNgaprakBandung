# Implementation Plan 004 — Design System dan Responsive Application Shell

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (High)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Tahap ini melibatkan refactor layout, pembuatan beberapa komponen reusable, state menu mobile, accessibility behavior, Tailwind design tokens, dan pembaruan seluruh halaman placeholder agar konsisten.
- **Token-efficiency note:** Jalankan seluruh plan terlebih dahulu menggunakan Gemini 3.5 Flash (High). Gunakan Gemini 3.1 Pro (High) hanya bila terjadi error TypeScript, perilaku menu mobile tidak stabil, active navigation tidak benar, atau build gagal setelah satu koreksi terarah.
- **Do not use:** Claude Opus atau model thinking berat untuk eksekusi awal.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Workspace:** `client`
- **Tahap sebelumnya:** Implementation Plan 003 — Client Foundation Setup
- **Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router, Lucide React
- **Backend:** Ditunda untuk MVP
- **Arah visual:** adventure, rugged, modern, monokrom, profesional
- **Kendaraan WNB:** Land Rover klasik berbodi besi/logam dengan varian Short dan Long

---

## Tujuan

Bangun fondasi visual dan application shell reusable untuk seluruh halaman WNB.

Tahap ini mencakup:

1. Memperluas design tokens.
2. Membuat komponen container.
3. Membuat komponen button dan link button.
4. Membuat brand wordmark berbasis teks.
5. Membuat navbar desktop.
6. Membuat mobile navigation yang aksesibel.
7. Membuat footer dasar.
8. Membuat skip link.
9. Membuat page header.
10. Membuat section heading.
11. Memperbarui `MainLayout`.
12. Memperbarui seluruh placeholder page agar menggunakan komponen visual baru.
13. Membuat dokumentasi design system.

Tahap ini **belum mengimplementasikan halaman final berdasarkan mockup**.

---

## Sumber Kebenaran

Baca sebelum mengubah kode:

```text
docs/design/visual-direction.md
docs/design/page-map.md
docs/requirements/functional-requirements.md
docs/requirements/non-functional-requirements.md
docs/architecture/technology-decisions.md
docs/plans/003-client-foundation-setup.md
client/src/styles/globals.css
client/src/layouts/MainLayout/MainLayout.tsx
client/src/components/common/PagePlaceholder.tsx
client/src/routes/routePaths.ts
```

Pertahankan keputusan yang telah dibuat:

- React Router Declarative Mode.
- Tailwind CSS melalui `@tailwindcss/vite`.
- Tanpa backend.
- Tanpa global state library.
- Tanpa UI component library.
- Tanpa font eksternal.
- Tanpa data bisnis yang belum dikonfirmasi.

---

## Batas Lingkup

### Termasuk

- Application shell responsif.
- Navigasi desktop dan mobile.
- Design tokens awal.
- Reusable UI primitives.
- Active navigation state.
- Keyboard accessibility dasar.
- Responsive typography dan spacing.
- Konsistensi placeholder page.
- Dokumentasi penggunaan komponen.

### Tidak termasuk

Jangan membuat:

- Hero final.
- Homepage final.
- About final.
- Package card.
- Route card.
- Typed local data paket/rute.
- Gallery grid.
- Lightbox.
- Booking form.
- WhatsApp redirect.
- Logo gambar resmi.
- Foto atau aset mockup.
- Animasi kompleks.
- Backend.
- Database.
- Admin dashboard.
- Authentication.
- Test framework.
- Storybook.
- ESLint.
- Prettier.
- CSS framework lain.
- Component library.
- Headless UI library.
- `clsx`, `classnames`, `tailwind-merge`, atau CVA.

Tidak boleh memasang dependency baru pada tahap ini.

---

## Terminologi

Gunakan istilah berikut:

```text
WNB
Wisata Ngaprak Bandung
Land Rover klasik
Land Rover Short
Land Rover Long
Paket
Rute
Galeri
Booking
WhatsApp Click-to-Chat
```

Jangan menggunakan kata “Jeep” untuk kendaraan WNB.

Jangan mengarang:

- Harga.
- Nomor WhatsApp.
- Alamat kantor.
- Akun media sosial.
- Tahun berdiri.
- Nama pemilik.
- Nama driver.
- Kapasitas kendaraan.
- Testimoni.
- Detail rute.
- Detail keselamatan.
- Copyright year atau badan hukum.

---

## Struktur File Target

Buat dan perbarui struktur berikut:

```text
client/src/
├── components/
│   ├── brand/
│   │   └── BrandWordmark.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── LinkButton.tsx
│   │   ├── PageHeader.tsx
│   │   ├── PagePlaceholder.tsx
│   │   ├── SectionHeading.tsx
│   │   └── SkipLink.tsx
│   └── navigation/
│       ├── Footer.tsx
│       ├── MobileNavigation.tsx
│       ├── Navbar.tsx
│       └── navigationItems.ts
│
├── layouts/
│   └── MainLayout/
│       └── MainLayout.tsx
│
├── pages/
│   ├── AboutPage/AboutPage.tsx
│   ├── BookingPage/BookingPage.tsx
│   ├── GalleryPage/GalleryPage.tsx
│   ├── HomePage/HomePage.tsx
│   ├── NotFoundPage/NotFoundPage.tsx
│   ├── PackageDetailPage/PackageDetailPage.tsx
│   ├── PackageListPage/PackageListPage.tsx
│   ├── RouteDetailPage/RouteDetailPage.tsx
│   └── RouteListPage/RouteListPage.tsx
│
└── styles/
    └── globals.css

docs/
├── design/
│   └── design-system.md
├── plans/
│   └── 004-design-system-and-responsive-shell.md
└── README.md
```

Hapus `.gitkeep` hanya bila folder tersebut sekarang memiliki file nyata.

---

## Design Tokens

Perbarui `client/src/styles/globals.css`.

Pertahankan:

```css
@import "tailwindcss";
```

Perluas `@theme` menjadi design tokens minimum berikut:

```css
@theme {
  --color-wnb-black: #0a0a0a;
  --color-wnb-surface: #171717;
  --color-wnb-surface-elevated: #222222;
  --color-wnb-white: #ffffff;
  --color-wnb-text: #f5f5f5;
  --color-wnb-muted: #a3a3a3;
  --color-wnb-subtle: #737373;
  --color-wnb-border: #404040;
  --color-wnb-border-strong: #737373;
  --color-wnb-focus: #ffffff;
  --color-wnb-danger: #ef4444;

  --font-sans:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  --font-display:
    "Arial Narrow", "Roboto Condensed", Impact, ui-sans-serif, system-ui,
    sans-serif;

  --radius-wnb-sm: 0.25rem;
  --radius-wnb-md: 0.5rem;
  --radius-wnb-lg: 0.75rem;

  --shadow-wnb-card:
    0 18px 45px rgb(0 0 0 / 0.25);
}
```

### Aturan token

- Gunakan hanya warna monokrom pada fondasi UI.
- Warna alam nantinya berasal dari fotografi.
- Jangan menambahkan warna hijau, cokelat, biru, atau warna brand baru tanpa keputusan khusus.
- Jangan menulis hex color berulang kali di komponen.
- Gunakan class token seperti `bg-wnb-black`, `text-wnb-muted`, dan `border-wnb-border`.

---

## Global Base Styles

Pertahankan base styles yang sudah ada dan tambahkan:

```css
@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  ::selection {
    background: var(--color-wnb-white);
    color: var(--color-wnb-black);
  }

  :focus-visible {
    outline: 2px solid var(--color-wnb-focus);
    outline-offset: 3px;
  }
}
```

### Reduced motion

Tambahkan:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

Jangan menambahkan animation keyframes pada tahap ini.

---

## Navigation Items

Buat:

```text
client/src/components/navigation/navigationItems.ts
```

Gunakan struktur typed:

```ts
import { ROUTE_PATHS } from "@/routes/routePaths";

export type NavigationItem = {
  label: string;
  path: string;
  end?: boolean;
};

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    label: "Home",
    path: ROUTE_PATHS.home,
    end: true,
  },
  {
    label: "About",
    path: ROUTE_PATHS.about,
  },
  {
    label: "Paket",
    path: ROUTE_PATHS.packages,
  },
  {
    label: "Rute",
    path: ROUTE_PATHS.routes,
  },
  {
    label: "Galeri",
    path: ROUTE_PATHS.gallery,
  },
] as const;
```

Booking tidak dimasukkan sebagai menu teks utama. Booking ditampilkan sebagai CTA terpisah.

Jangan menduplikasi array navigasi pada Navbar, MobileNavigation, dan Footer.

---

## Container Component

Buat:

```text
client/src/components/common/Container.tsx
```

Props:

```ts
type ContainerProps = {
  as?: "div" | "section" | "main";
  className?: string;
  children: ReactNode;
};
```

Perilaku:

- Default element: `div`.
- Width maksimum konsisten.
- Horizontal padding responsif.
- Tidak menggunakan library class helper.

Baseline class:

```text
mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8
```

Gunakan named export.

Jangan membuat abstraksi generik berlebihan.

---

## Button Component

Buat:

```text
client/src/components/common/Button.tsx
```

Gunakan `ComponentPropsWithoutRef<"button">`.

Variants:

```ts
type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
```

Aturan visual:

### Primary

- Background putih.
- Teks hitam.
- Border putih.
- Hover sedikit redup.
- Cocok untuk CTA utama.

### Secondary

- Background transparan.
- Teks putih.
- Border putih/abu terang.
- Hover background putih dan teks hitam.

### Ghost

- Background transparan.
- Tanpa border dominan.
- Teks muted menjadi putih saat hover.

### State wajib

- Hover.
- Focus-visible.
- Disabled.
- Transition sederhana.
- Tidak menggunakan scale animation.
- Tidak menggunakan gradient.

API minimum:

```tsx
<Button variant="primary" size="md">
  Label
</Button>
```

Gunakan `type="button"` sebagai default bila caller tidak memberikan `type`.

---

## LinkButton Component

Buat:

```text
client/src/components/common/LinkButton.tsx
```

Gunakan React Router `Link`.

Props minimum:

```ts
type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  "aria-label"?: string;
};
```

Button dan LinkButton harus berbagi fungsi internal untuk pemetaan class agar style tidak terduplikasi.

Boleh mengekspor helper internal dari `Button.tsx`:

```ts
export function getButtonClassName(...)
```

Tetapi jangan membuat file utility baru hanya untuk beberapa class.

Jangan menggunakan anchor biasa untuk internal route.

---

## Brand Wordmark

Buat:

```text
client/src/components/brand/BrandWordmark.tsx
```

Tujuan:

- Menampilkan identitas teks sementara.
- Bukan logo resmi.
- Tidak menggunakan ikon gunung buatan.
- Tidak menggunakan gambar.
- Tidak menggunakan trademark symbol.

Visual:

```text
WNB
Wisata Ngaprak Bandung
```

Desktop dapat menampilkan nama lengkap kecil di samping atau bawah `WNB`.

Mobile cukup menampilkan `WNB`.

Gunakan `Link` menuju Home.

Tambahkan `aria-label`:

```text
WNB — kembali ke Beranda
```

Berikan komentar singkat di kode:

```ts
// Wordmark teks sementara sampai aset logo resmi tersedia.
```

Jangan menampilkan kata “temporary” di UI.

---

## Skip Link

Buat:

```text
client/src/components/common/SkipLink.tsx
```

Tujuan:

- Memungkinkan pengguna keyboard langsung menuju konten utama.
- Link menuju `#main-content`.
- Secara default tersembunyi di luar viewport.
- Muncul ketika focus.

Label:

```text
Lewati ke konten utama
```

Gunakan class Tailwind. Jangan menggunakan CSS tambahan bila utilities cukup.

---

## Section Heading

Buat:

```text
client/src/components/common/SectionHeading.tsx
```

Props:

```ts
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h2" | "h3";
  className?: string;
};
```

Aturan:

- Heading display uppercase.
- Tidak menggunakan `h1`.
- `h1` hanya untuk PageHeader atau hero utama halaman.
- Deskripsi memiliki width maksimum agar mudah dibaca.
- Alignment center dan left harus bekerja.

Gunakan dynamic JSX element secara type-safe.

---

## Page Header

Buat:

```text
client/src/components/common/PageHeader.tsx
```

Props:

```ts
type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};
```

Aturan:

- Menggunakan `Container`.
- Hanya memiliki satu `h1`.
- Background gelap.
- Border bawah.
- Spacing responsif.
- Heading menggunakan font display.
- Tidak menggunakan foto atau gradient.
- `children` digunakan untuk CTA opsional.

Visual foundation:

- Minimum height tidak perlu full screen.
- Padding vertikal besar tetapi wajar.
- Hindari absolute positioning.
- Hindari clip-path atau torn-edge sementara.

---

## Navbar Desktop

Buat:

```text
client/src/components/navigation/Navbar.tsx
```

Tanggung jawab:

- Sticky di atas.
- Menggunakan `BrandWordmark`.
- Menggunakan `NAVIGATION_ITEMS`.
- Menampilkan CTA `Booking Sekarang`.
- Menampilkan tombol hamburger pada ukuran mobile.
- Active state melalui `NavLink`.
- Tidak menduplikasi mobile menu markup.

Props:

```ts
type NavbarProps = {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
};
```

Aturan desktop:

- Menu utama muncul mulai breakpoint `md`.
- Hamburger disembunyikan mulai `md`.
- CTA booking tampil di desktop.
- Active state tidak menggeser layout.
- Gunakan `aria-current` bawaan `NavLink`.
- Header memiliki border bawah.
- Sticky header harus memiliki backdrop yang cukup agar teks terbaca.
- Z-index harus terkontrol.

Gunakan ikon:

```ts
Menu
X
```

dari `lucide-react`.

Tombol hamburger wajib memiliki:

- `type="button"`.
- `aria-label`.
- `aria-expanded`.
- `aria-controls="mobile-navigation"`.

---

## Mobile Navigation

Buat:

```text
client/src/components/navigation/MobileNavigation.tsx
```

Props:

```ts
type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};
```

Perilaku:

- Tidak dirender atau disembunyikan ketika `isOpen` false.
- Hanya relevan pada layar di bawah `md`.
- Menggunakan `NAVIGATION_ITEMS`.
- Menampilkan CTA Booking.
- Menutup ketika link dipilih.
- Menutup ketika tombol Escape ditekan.
- Menutup ketika route berubah.
- Mencegah scroll body ketika menu terbuka.
- Mengembalikan scroll body saat menu ditutup atau component unmount.
- Tidak menggunakan modal library.
- Tidak menggunakan portal pada tahap ini.
- Tidak perlu focus trap penuh.
- Tombol close tetap berada di Navbar, sehingga jangan membuat close button kedua kecuali diperlukan secara aksesibilitas.

Gunakan:

```ts
useEffect
useLocation
```

Pastikan effect cleanup benar.

Container mobile navigation wajib memiliki:

```text
id="mobile-navigation"
```

Gunakan `aria-label="Navigasi utama mobile"` pada `<nav>`.

---

## Footer

Buat:

```text
client/src/components/navigation/Footer.tsx
```

Konten aman:

### Brand

- `WNB`
- Deskripsi:
  `Fondasi aplikasi wisata petualangan Land Rover klasik di Bandung.`

### Navigation

Gunakan `NAVIGATION_ITEMS`.

### CTA

Tautan ke halaman `/booking`:

```text
Rencanakan Perjalanan
```

### Informasi belum tersedia

Jangan menampilkan:

- Nomor telepon.
- Nomor WhatsApp.
- Alamat.
- Email.
- Instagram.
- Facebook.
- TikTok.
- Copyright year.
- Nama badan hukum.

Tambahkan teks netral:

```text
Informasi kontak resmi akan ditambahkan setelah dikonfirmasi.
```

Footer harus menggunakan `<footer>` dan heading hierarchy yang benar.

Internal route menggunakan `Link`.

---

## Main Layout

Refactor:

```text
client/src/layouts/MainLayout/MainLayout.tsx
```

Tanggung jawab final tahap ini:

```tsx
<div>
  <SkipLink />
  <Navbar ... />
  <MobileNavigation ... />
  <main id="main-content" tabIndex={-1}>
    <Outlet />
  </main>
  <Footer />
</div>
```

Gunakan state lokal:

```ts
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

Aturan:

- Hapus seluruh markup Navbar/Footer lama dari `MainLayout`.
- `MainLayout` hanya menyusun application shell.
- Gunakan `min-h-screen`.
- Main content memakai `flex-1`.
- Tidak menulis array navigation di file ini.
- Tidak menaruh business content di layout.
- `main` harus memiliki `id="main-content"`.
- `tabIndex={-1}` diperbolehkan untuk target skip link.

---

## Page Placeholder

Refactor:

```text
client/src/components/common/PagePlaceholder.tsx
```

Gunakan `PageHeader` dan `Container`.

Props tetap:

```ts
type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};
```

Struktur:

1. `PageHeader`.
2. Content section menggunakan `Container`.
3. Panel informasi sederhana.
4. `children` ditampilkan di dalam area konten.

Jangan menaruh seluruh halaman dalam satu card kecil seperti implementasi lama.

Tujuan perubahan:

- Placeholder lebih mencerminkan struktur halaman nyata.
- Header halaman konsisten.
- Main content dapat dikembangkan pada plan berikutnya.

---

## Pembaruan Halaman

Semua halaman tetap placeholder tetapi gunakan copy yang rapi.

### HomePage

Karena Home nantinya menggunakan hero khusus, sementara gunakan `PagePlaceholder` dengan:

- Eyebrow: `Wisata Ngaprak Bandung`
- Title: `Lebih dari Perjalanan`
- Description:
  `Fondasi Beranda WNB telah siap. Hero, paket unggulan, rute pilihan, galeri, dan CTA akan dibangun pada tahap berikutnya.`

Jangan menyalin seluruh headline mockup selain frasa aman tersebut.

### AboutPage

Description:

```text
Profil, cerita, armada Land Rover klasik, dan informasi operasional WNB akan ditampilkan setelah konten resminya dikonfirmasi.
```

### PackageListPage

Description:

```text
Daftar paket akan dibangun menggunakan typed local data setelah struktur data dan konten paket disepakati.
```

### PackageDetailPage

Pertahankan `useParams`.

- Tampilkan slug sebagai technical preview.
- Gunakan panel yang mengikuti tokens baru.
- Jangan mengarang data paket.
- Label slug:
  `Slug paket yang sedang dibuka`.

### RouteListPage

Description:

```text
Daftar rute resmi akan ditambahkan setelah nama, lokasi, dan karakter setiap jalur dikonfirmasi.
```

### RouteDetailPage

Pertahankan `useParams`.

- Label slug:
  `Slug rute yang sedang dibuka`.
- Jangan mengarang kondisi medan.

### GalleryPage

Description:

```text
Dokumentasi perjalanan akan ditampilkan setelah aset foto resmi WNB tersedia dan telah dikelompokkan.
```

### BookingPage

Description:

```text
Form booking dan WhatsApp Click-to-Chat akan dibangun setelah nomor resmi dan data paket dikonfirmasi.
```

### NotFoundPage

Gunakan:

- Eyebrow: `Error 404`
- Title: `Rute Tidak Ditemukan`
- Deskripsi:
  `Halaman yang Anda cari tidak tersedia atau telah berpindah.`

Gunakan `LinkButton` untuk kembali ke Home.

---

## Responsive Requirements

### Mobile

- Tidak ada horizontal overflow.
- Brand tetap terlihat.
- Hanya hamburger yang muncul.
- Mobile menu memiliki link vertikal.
- CTA Booking terlihat.
- Page header tidak terlalu tinggi.
- Heading tidak terpotong.
- Padding minimum 16px.

### Tablet

- Navbar desktop mulai pada breakpoint `md`.
- Content container tetap seimbang.
- Page header typography naik bertahap.

### Desktop

- Navbar menu dan CTA berada dalam satu baris.
- Container maksimum konsisten.
- Footer dapat menggunakan beberapa kolom.
- Heading besar tetapi tidak melewati viewport.

Jangan menggunakan breakpoint custom pada tahap ini.

---

## Accessibility Requirements

Wajib:

1. Skip link.
2. Satu `h1` per halaman.
3. Active route terlihat tanpa hanya bergantung pada warna.
4. Hamburger memiliki accessible name.
5. `aria-expanded` dan `aria-controls`.
6. Escape menutup mobile menu.
7. Internal links menggunakan `Link` atau `NavLink`.
8. Focus-visible jelas.
9. Reduced motion dihormati.
10. Contrast tinggi.
11. Footer dan nav memiliki semantic elements.
12. Menu tidak menggunakan clickable `<div>`.
13. Tombol selalu menggunakan elemen `<button>`.
14. Tidak menghapus outline tanpa pengganti.

---

## Coding Rules

- Gunakan named exports.
- Gunakan TypeScript strict.
- Gunakan `import type` untuk type-only import.
- Gunakan alias `@/` untuk import lintas folder.
- Jangan membuat barrel file.
- Jangan menambahkan dependency.
- Jangan menggunakan `any`.
- Jangan menggunakan non-null assertion tanpa kebutuhan.
- Jangan menulis inline style.
- Jangan menggunakan `dangerouslySetInnerHTML`.
- Jangan menggunakan array index sebagai key untuk navigation.
- Gunakan path sebagai key.
- Jangan membuat komponen lebih generik dari kebutuhan.
- Jangan menambahkan komentar yang menjelaskan hal jelas.
- Komentar diperbolehkan untuk wordmark sementara dan effect penting.

---

## Dokumentasi Design System

Buat:

```text
docs/design/design-system.md
```

Wajib memuat:

1. Status design system: foundation, belum final.
2. Arah visual.
3. Token warna.
4. Token typography.
5. Token radius dan shadow.
6. Container rules.
7. Button variants.
8. LinkButton.
9. BrandWordmark sebagai wordmark teks sementara.
10. Navbar desktop.
11. Mobile navigation.
12. Footer.
13. PageHeader.
14. SectionHeading.
15. Accessibility rules.
16. Responsive rules.
17. Contoh penggunaan singkat.
18. Daftar hal yang masih deferred:
    - logo resmi,
    - font resmi,
    - fotografi,
    - section divider gunung,
    - final motion,
    - card package,
    - card route.

Jangan menyebut token sebagai brand final sebelum disetujui.

---

## Dokumentasi Plan

Simpan file ini sebagai:

```text
docs/plans/004-design-system-and-responsive-shell.md
```

Perbarui `docs/README.md`:

```md
- [Design System](design/design-system.md)
- [004-design-system-and-responsive-shell.md](plans/004-design-system-and-responsive-shell.md): Design system dan application shell responsif.
```

Perbarui `client/README.md`:

- Jelaskan bahwa application shell sudah responsif.
- Daftar reusable components.
- Jelaskan bahwa logo masih wordmark teks.
- Jelaskan bahwa halaman final belum dibuat.
- Jangan mengubah daftar dependency atau versi secara manual.

Perbarui root `README.md` status:

```text
Frontend foundation: Initialized
Responsive application shell: Initialized
Page implementation: Not started
Backend: Deferred for MVP
```

---

## Dependency dan Konfigurasi

Pada tahap ini:

- Jangan menjalankan `npm install` untuk menambah package.
- Jangan mengubah versi dependency.
- Jangan mengubah `package-lock.json`.
- Jangan mengubah `vite.config.ts`.
- Jangan mengubah `tsconfig`.
- Jangan mengubah `.env.example`.
- Jangan mengubah root scripts.
- Jangan mengubah server.

Jika `package-lock.json` berubah tanpa instalasi dependency, pulihkan perubahan tersebut.

---

## Verifikasi Wajib

Jalankan dari root:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya harus selesai dengan exit code `0`.

Lakukan pemeriksaan manual melalui dev server:

```bash
npm run dev:client
```

Periksa:

1. Semua route dapat dibuka.
2. Active navigation bekerja.
3. Home tidak membuat Paket/Rute ikut aktif.
4. Hamburger muncul pada mobile.
5. Menu mobile dapat dibuka.
6. Ikon berubah Menu ↔ X.
7. Escape menutup menu.
8. Klik link menutup menu.
9. Perubahan route menutup menu.
10. Body tidak tetap terkunci setelah menu ditutup.
11. Resize ke desktop tidak menampilkan dua navigation.
12. Skip link muncul saat ditekan Tab pertama kali.
13. Skip link menuju `#main-content`.
14. Tidak ada horizontal overflow.
15. Footer muncul di bawah konten.
16. Halaman 404 memiliki tombol kembali.
17. Dynamic slug paket tetap bekerja.
18. Dynamic slug rute tetap bekerja.

Setelah pemeriksaan, hentikan dev server.

---

## Pemeriksaan Repository

Pastikan:

- Tidak ada dependency baru.
- `package-lock.json` tidak berubah.
- Tidak ada file `.env`.
- Tidak ada logo atau favicon palsu.
- Tidak ada gambar generik.
- Tidak ada Lorem Ipsum.
- Tidak ada istilah “Jeep”.
- Tidak ada nomor kontak palsu.
- Tidak ada lokasi rute palsu.
- Tidak ada harga palsu.
- Tidak ada social link palsu.
- Tidak ada test framework.
- Tidak ada file test.
- Tidak ada perubahan server.
- Tidak ada link `file:///`.
- Tidak ada inline style.
- Tidak ada TypeScript error.
- Tidak ada build error.

---

## Acceptance Criteria

Plan 004 selesai bila:

1. Design tokens diperluas.
2. `Container` tersedia.
3. `Button` tersedia dengan tiga variant.
4. `LinkButton` tersedia.
5. `BrandWordmark` tersedia tanpa logo palsu.
6. `SkipLink` tersedia.
7. `SectionHeading` tersedia.
8. `PageHeader` tersedia.
9. Navbar desktop responsif tersedia.
10. Mobile navigation aksesibel tersedia.
11. Footer tersedia.
12. MainLayout menggunakan komponen shell.
13. Navigation items terpusat.
14. Semua placeholder page menggunakan struktur baru.
15. NotFound menggunakan LinkButton.
16. Tidak ada dependency baru.
17. Typecheck berhasil.
18. Build berhasil.
19. Dev server dapat digunakan untuk pemeriksaan manual.
20. Dokumentasi design system dibuat.
21. Plan 004 disimpan di docs.
22. Backend tidak berubah.

---

## Output yang Harus Dilaporkan

Setelah selesai, laporkan:

1. Model Antigravity yang digunakan.
2. Daftar file yang dibuat.
3. Daftar file yang diperbarui.
4. Konfirmasi tidak ada dependency baru.
5. Konfirmasi `package-lock.json` tidak berubah.
6. Ringkasan design tokens.
7. Ringkasan komponen reusable.
8. Perilaku mobile navigation.
9. Hasil typecheck dan exit code.
10. Hasil build dan exit code.
11. Hasil pemeriksaan manual setiap route.
12. Hasil pemeriksaan mobile menu.
13. Konfirmasi server tidak berubah.
14. Ringkasan `git status`.
15. Kendala atau deviasi dari plan.

Gunakan commit:

```text
feat(client): add responsive application shell
```

Jangan melakukan perubahan tambahan di luar implementation plan ini.
