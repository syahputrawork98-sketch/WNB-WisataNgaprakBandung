# Implementation Plan 005 — Home Page Implementation

## Recommended Antigravity Model

- **Primary model:** Gemini 3.5 Flash (High)
- **Fallback model:** Gemini 3.1 Pro (High)
- **Reason:** Tahap ini mengimplementasikan satu halaman penuh melalui beberapa section, komponen fitur, typed content, responsive layout, serta accessibility behavior tanpa dependency tambahan.
- **Token-efficiency note:** Gunakan Gemini 3.5 Flash (High) untuk seluruh eksekusi awal. Gunakan Gemini 3.1 Pro (High) hanya bila struktur section tidak konsisten, terjadi error TypeScript, responsive layout sulit diperbaiki, atau build gagal setelah satu koreksi terarah.
- **Do not use:** Claude Opus atau model thinking berat untuk eksekusi awal.

---

## Identitas Proyek

- **Nama proyek:** WNB — Wisata Ngaprak Bandung
- **Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`
- **Branch target:** `main`
- **Workspace:** `client`
- **Tahap sebelumnya:** Implementation Plan 004 — Design System dan Responsive Application Shell
- **Halaman target:** Home (`/`)
- **Backend:** Ditunda untuk MVP
- **Kendaraan WNB:** Land Rover klasik berbodi besi/logam dengan varian Short dan Long
- **Mockup:** Visual direction, bukan blueprint yang harus disalin persis

---

## Tujuan

Mengganti placeholder Home dengan halaman Beranda WNB yang utuh, responsif, mudah dikembangkan, dan sesuai identitas visual awal.

Home harus berfungsi sebagai pintu masuk menuju:

- Paket.
- Rute.
- Galeri.
- Booking.
- Informasi dasar mengenai Land Rover Short dan Long.

Tahap ini tidak membuat data paket atau rute final.

---

## Temuan dari Plan 004 yang Harus Diperbaiki

### 1. Klaim wilayah operasional belum dikonfirmasi

Pada Home saat ini terdapat kalimat:

```text
menjelajahi pesona jalur Bandung Barat dan Selatan
```

Hapus klaim tersebut.

Belum ada konfirmasi bahwa wilayah operasional WNB mencakup Bandung Barat dan Bandung Selatan.

Gunakan frasa netral:

```text
pengalaman wisata petualangan menggunakan Land Rover klasik di Bandung
```

Jangan menyebut:

- Bandung Barat.
- Bandung Selatan.
- Ciwidey.
- Pangalengan.
- Lembang.
- Lokasi lain yang belum dikonfirmasi.

### 2. Navigation landmark perlu label

Tambahkan:

```tsx
aria-label="Navigasi utama"
```

pada navigation desktop di `Navbar.tsx`.

Tambahkan:

```tsx
aria-label="Navigasi footer"
```

pada navigation di `Footer.tsx`.

### 3. Scroll position antarhalaman

Tambahkan komponen `ScrollToTop` agar navigasi dari section bawah Home ke halaman lain tidak mempertahankan posisi scroll yang membingungkan.

Perilaku:

- Ketika pathname berubah, scroll ke atas.
- Bila URL mempunyai hash, jangan memaksa scroll ke atas; biarkan browser menuju target hash.
- Hormati reduced motion.
- Jangan memakai dependency tambahan.

### 4. Mobile menu focus improvement

Setelah mobile menu ditutup melalui Escape, kembalikan fokus ke tombol hamburger.

Implementasi harus sederhana dan tidak membuat focus trap penuh.

Gunakan forwarded ref atau prop ref yang type-safe pada tombol Navbar.

Jangan menambah library modal atau accessibility.

---

## Sumber Kebenaran

Baca sebelum mengubah kode:

```text
docs/design/visual-direction.md
docs/design/design-system.md
docs/design/page-map.md
docs/requirements/product-requirements.md
docs/requirements/functional-requirements.md
docs/requirements/non-functional-requirements.md
docs/plans/004-design-system-and-responsive-shell.md
client/src/pages/HomePage/HomePage.tsx
client/src/components/common/
client/src/components/navigation/
client/src/styles/globals.css
client/src/routes/routePaths.ts
```

---

## Batas Lingkup

### Termasuk

1. Hero Home.
2. Manifesto/ringkasan WNB.
3. Navigasi eksplorasi menuju Paket, Rute, dan Galeri.
4. Ringkasan Land Rover Short dan Long.
5. CTA booking.
6. Media placeholder yang jujur karena aset foto resmi belum tersedia.
7. Typed content untuk Home.
8. Responsive layout.
9. Accessibility dasar.
10. Scroll-to-top.
11. Perbaikan landmark navigation.
12. Perbaikan fokus mobile menu.
13. Dokumentasi Home.

### Tidak termasuk

Jangan membuat:

- Data paket wisata final.
- Package card final.
- Data rute final.
- Route card final.
- Harga.
- Durasi.
- Kapasitas.
- Testimoni.
- Statistik.
- Rating.
- Foto buatan AI yang dipresentasikan sebagai foto WNB.
- Stock photo eksternal.
- Hotlink gambar.
- Gallery final.
- Booking form.
- WhatsApp redirect.
- About page final.
- Backend.
- Database.
- Test framework.
- Animasi kompleks.
- Video background.
- Carousel.
- Parallax.
- Slider.
- Section divider berbentuk gunung final.
- Logo baru.
- Font eksternal.

Tidak boleh memasang dependency baru.

---

## Strategi Aset Visual

Aset foto resmi WNB belum tersedia di repository.

Karena itu:

1. Jangan mengunduh gambar dari internet.
2. Jangan membuat gambar generatif yang terlihat seperti dokumentasi asli WNB.
3. Jangan menggunakan screenshot mockup sebagai gambar website.
4. Jangan menggunakan emoji sebagai pengganti gambar.
5. Jangan membuat ilustrasi kendaraan yang dapat dianggap sebagai armada asli.
6. Gunakan komponen media placeholder yang jelas dan profesional.
7. Placeholder harus mudah diganti dengan `<img>` atau `<picture>` ketika aset resmi tersedia.

Label aman:

```text
Aset foto resmi WNB akan ditambahkan
```

Label tersebut hanya muncul di area media placeholder, bukan berulang pada seluruh halaman.

---

## Struktur File Target

Buat:

```text
client/src/
├── app/
│   └── ScrollToTop.tsx
│
├── features/
│   └── home/
│       ├── components/
│       │   ├── ExploreCard.tsx
│       │   ├── ExploreSection.tsx
│       │   ├── FinalCtaSection.tsx
│       │   ├── HeroSection.tsx
│       │   ├── HomeMediaPlaceholder.tsx
│       │   ├── ManifestoSection.tsx
│       │   ├── VehicleCard.tsx
│       │   └── VehicleSection.tsx
│       ├── homeContent.ts
│       └── homeTypes.ts
│
└── pages/
    └── HomePage/
        └── HomePage.tsx

docs/
├── design/
│   └── home-page.md
└── plans/
    └── 005-home-page-implementation.md
```

Perbarui:

```text
client/src/app/AppProviders.tsx
client/src/components/navigation/Navbar.tsx
client/src/components/navigation/Footer.tsx
client/src/layouts/MainLayout/MainLayout.tsx
client/src/styles/globals.css
client/README.md
README.md
docs/README.md
```

Jangan membuat barrel files.

---

## Home Types

Buat:

```text
client/src/features/home/homeTypes.ts
```

Gunakan type berikut:

```ts
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type ExploreItem = {
  title: string;
  description: string;
  path: string;
  linkLabel: string;
  icon: ComponentType<LucideProps>;
};

export type VehicleItem = {
  name: string;
  variant: "short" | "long";
  technicalLabel: "SWB" | "LWB";
  description: string;
  confirmedFacts: readonly string[];
};
```

Jangan memasukkan:

- Harga.
- Kapasitas.
- Seri kendaraan.
- Tahun kendaraan.
- Mesin.
- Detail modifikasi.

---

## Typed Home Content

Buat:

```text
client/src/features/home/homeContent.ts
```

Gunakan ikon dari `lucide-react`:

- `Compass`.
- `Map`.
- `Images`.

Gunakan route terpusat dari `ROUTE_PATHS`.

### Explore items

```ts
export const EXPLORE_ITEMS: readonly ExploreItem[] = [
  {
    title: "Paket Perjalanan",
    description:
      "Temukan pilihan perjalanan WNB setelah informasi paket resmi tersedia.",
    path: ROUTE_PATHS.packages,
    linkLabel: "Lihat Paket",
    icon: Compass,
  },
  {
    title: "Rute Petualangan",
    description:
      "Pelajari jalur perjalanan setelah nama dan detail rute dikonfirmasi.",
    path: ROUTE_PATHS.routes,
    linkLabel: "Lihat Rute",
    icon: Map,
  },
  {
    title: "Galeri Perjalanan",
    description:
      "Lihat dokumentasi kegiatan setelah aset foto resmi WNB tersedia.",
    path: ROUTE_PATHS.gallery,
    linkLabel: "Buka Galeri",
    icon: Images,
  },
] as const;
```

### Vehicle items

```ts
export const VEHICLE_ITEMS: readonly VehicleItem[] = [
  {
    name: "Land Rover Short",
    variant: "short",
    technicalLabel: "SWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih pendek.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Short / Short Wheelbase",
      "Bodi berbahan besi atau logam",
    ],
  },
  {
    name: "Land Rover Long",
    variant: "long",
    technicalLabel: "LWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih panjang.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Long / Long Wheelbase",
      "Bodi berbahan besi atau logam",
    ],
  },
] as const;
```

Catatan:

- Jangan menyebut kapasitas penumpang.
- Jangan menyebut kendaraan “lebih nyaman”, “lebih tangguh”, atau “lebih cocok” tanpa konfirmasi.
- Jangan menyebut seri, tahun, atau mesin.

---

## ScrollToTop

Buat:

```text
client/src/app/ScrollToTop.tsx
```

Gunakan:

```ts
useEffect
useLocation
```

Perilaku:

```ts
const { pathname, hash } = useLocation();

useEffect(() => {
  if (hash) {
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}, [pathname, hash]);
```

Komponen merender:

```tsx
return null;
```

Pasang di dalam `BrowserRouter` pada `AppProviders.tsx`:

```tsx
<BrowserRouter>
  <ScrollToTop />
  {children}
</BrowserRouter>
```

Jangan memasang di luar Router.

---

## Mobile Menu Focus Return

### Navbar

Perbarui props Navbar:

```ts
type NavbarProps = {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  mobileMenuButtonRef: RefObject<HTMLButtonElement | null>;
};
```

Pasang ref pada tombol hamburger.

### MainLayout

Gunakan:

```ts
const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
```

Buat close handler yang menerima opsi:

```ts
const handleMobileMenuClose = useCallback(
  (restoreFocus = false) => {
    setIsMobileMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        mobileMenuButtonRef.current?.focus();
      });
    }
  },
  [],
);
```

### MobileNavigation

Ubah props:

```ts
type MobileNavigationProps = {
  isOpen: boolean;
  onClose: (restoreFocus?: boolean) => void;
};
```

Perilaku:

- Escape memanggil `onClose(true)`.
- Klik route memanggil `onClose(false)`.
- Route change memanggil `onClose(false)`.
- Resize desktop memanggil `onClose(false)`.

Jangan memindahkan fokus otomatis ketika menu dibuka.

Jangan membuat focus trap.

---

## Navigation Labels

### Navbar

Pada `<nav>` desktop tambahkan:

```tsx
aria-label="Navigasi utama"
```

### Footer

Pada `<nav>` footer tambahkan:

```tsx
aria-label="Navigasi footer"
```

Mobile navigation sudah menggunakan:

```text
Navigasi utama mobile
```

Pertahankan.

---

## Home Media Placeholder

Buat:

```text
client/src/features/home/components/HomeMediaPlaceholder.tsx
```

Props:

```ts
type HomeMediaPlaceholderProps = {
  label?: string;
  aspect?: "hero" | "landscape";
  className?: string;
};
```

Default label:

```text
Aset foto resmi WNB akan ditambahkan
```

Aturan visual:

- Border.
- Background surface.
- Pattern ringan menggunakan CSS gradient boleh digunakan.
- Tidak menggunakan gambar.
- Tidak menggunakan ikon kendaraan.
- Tidak menggunakan emoji.
- Label mudah dibaca.
- Gunakan `role="img"`.
- Gunakan `aria-label` sesuai label.
- Aspect hero: minimal tinggi responsif.
- Aspect landscape: rasio 16:10 atau setara.
- Jangan menggunakan inline style.

Gradient hanya boleh menggunakan token monokrom, misalnya:

```text
bg-[linear-gradient(...)]
```

Lebih baik tambahkan utility class di `globals.css` agar tidak menulis gradient panjang di JSX.

---

## Tambahan Global CSS

Tambahkan utility component class pada `globals.css`:

```css
@layer components {
  .wnb-media-pattern {
    background-color: var(--color-wnb-surface);
    background-image:
      linear-gradient(
        135deg,
        rgb(255 255 255 / 0.035) 25%,
        transparent 25%
      ),
      linear-gradient(
        315deg,
        rgb(255 255 255 / 0.035) 25%,
        transparent 25%
      );
    background-position:
      0 0,
      12px 12px;
    background-size: 24px 24px;
  }
}
```

Gunakan pattern secara terbatas pada placeholder media.

Jangan menambahkan warna baru.

---

## Hero Section

Buat:

```text
client/src/features/home/components/HeroSection.tsx
```

Struktur:

```text
section
└── Container
    └── responsive two-column grid
        ├── hero copy
        └── HomeMediaPlaceholder
```

### Copy

Eyebrow:

```text
Wisata Ngaprak Bandung
```

Heading:

```text
Lebih dari perjalanan. Ini cerita.
```

Description:

```text
WNB memperkenalkan pengalaman wisata petualangan menggunakan Land Rover klasik dengan varian Short dan Long di Bandung.
```

CTA:

```text
Jelajahi Paket  → /paket
Lihat Rute      → /rute
```

Gunakan `LinkButton`.

### Heading

- Satu-satunya `h1` pada Home.
- Uppercase.
- Font display.
- Responsif.
- Jangan melebihi sekitar 4 baris pada mobile.
- Gunakan `text-balance` bila tersedia.
- Jangan memakai font-size arbitrer ekstrem.
- Jangan menggunakan text stroke.
- Jangan menggunakan gradient text.

### Layout

- Mobile: copy di atas, media di bawah.
- Desktop: dua kolom.
- Section minimal memenuhi area awal layar tanpa memaksa `100vh`.
- Pertimbangkan sticky navbar.
- Gunakan spacing luas.
- Jangan menggunakan absolute background photo.
- Jangan menutup hero dengan overlay palsu.

---

## Manifesto Section

Buat:

```text
client/src/features/home/components/ManifestoSection.tsx
```

Gunakan `SectionHeading`.

Eyebrow:

```text
Tentang Pengalaman
```

Title:

```text
Petualangan dengan karakter klasik
```

Description:

```text
WNB dibangun untuk menyajikan informasi perjalanan, pilihan rute, dokumentasi kegiatan, dan alur booking dalam satu aplikasi yang mudah digunakan.
```

Body text:

```text
Kendaraan yang digunakan merupakan Land Rover klasik berbodi besi atau logam dengan varian Short dan Long. Detail armada dan operasional akan ditampilkan setelah dikonfirmasi.
```

Layout:

- Dua kolom pada desktop.
- Satu kolom pada mobile.
- Salah satu kolom boleh menggunakan `HomeMediaPlaceholder` landscape.
- Jangan menulis sejarah berdirinya WNB.
- Jangan menulis visi/misi yang belum dikonfirmasi.
- Jangan mengklaim keamanan, profesionalisme driver, atau kualitas layanan.

---

## Explore Card

Buat:

```text
client/src/features/home/components/ExploreCard.tsx
```

Props:

```ts
type ExploreCardProps = {
  item: ExploreItem;
};
```

Visual:

- Border.
- Surface background.
- Icon.
- Heading `h3`.
- Description.
- Internal link.
- Hover state sederhana.
- Seluruh card tidak perlu clickable.
- Hanya link yang interaktif.
- Ikon `aria-hidden="true"`.
- Tidak menggunakan gambar.

Gunakan Link atau LinkButton sesuai visual.

---

## Explore Section

Buat:

```text
client/src/features/home/components/ExploreSection.tsx
```

Gunakan:

- `Container`.
- `SectionHeading`.
- `EXPLORE_ITEMS`.
- `ExploreCard`.

Copy:

Eyebrow:

```text
Mulai Menjelajah
```

Title:

```text
Pilih informasi yang Anda butuhkan
```

Description:

```text
Gunakan halaman Paket, Rute, dan Galeri untuk memahami pilihan perjalanan WNB.
```

Grid:

- 1 kolom mobile.
- 2 kolom tablet bila cukup.
- 3 kolom desktop.
- Card mempunyai tinggi visual konsisten.

---

## Vehicle Card

Buat:

```text
client/src/features/home/components/VehicleCard.tsx
```

Props:

```ts
type VehicleCardProps = {
  vehicle: VehicleItem;
};
```

Visual:

- Label `SWB` atau `LWB`.
- Heading kendaraan.
- Description.
- List confirmed facts.
- Media placeholder landscape.
- Tidak menampilkan tombol detail karena halaman kendaraan belum tersedia.
- Gunakan semantic `<article>`.
- Gunakan list `<ul>`.
- Jangan menggunakan icon check yang dapat memberi kesan sertifikasi.

Label:

```text
Varian Short
Varian Long
```

---

## Vehicle Section

Buat:

```text
client/src/features/home/components/VehicleSection.tsx
```

Copy:

Eyebrow:

```text
Armada Klasik
```

Title:

```text
Land Rover Short dan Long
```

Description:

```text
WNB menggunakan dua kategori varian kendaraan klasik. Spesifikasi teknis dan kapasitas akan ditampilkan setelah dikonfirmasi.
```

Render dua `VehicleCard`.

Grid:

- 1 kolom mobile.
- 2 kolom desktop.

Jangan menambahkan varian ketiga.

---

## Final CTA Section

Buat:

```text
client/src/features/home/components/FinalCtaSection.tsx
```

Copy:

Eyebrow:

```text
Rencanakan Perjalanan
```

Heading:

```text
Siapkan petualangan Anda bersama WNB
```

Description:

```text
Buka halaman booking untuk menyiapkan informasi perjalanan. Pengiriman melalui WhatsApp Click-to-Chat akan diaktifkan setelah nomor resmi dikonfirmasi.
```

CTA:

```text
Buka Halaman Booking → /booking
```

Secondary link:

```text
Pelajari WNB → /about
```

Aturan:

- Background surface elevated.
- Border atas dan bawah.
- Tidak menggunakan foto.
- Tidak menggunakan countdown.
- Tidak menggunakan urgency palsu.
- Tidak menulis “pesan sekarang sebelum kehabisan”.
- Jangan membuat form.

---

## Home Page Composition

Perbarui:

```text
client/src/pages/HomePage/HomePage.tsx
```

Jangan gunakan `PagePlaceholder`.

Gunakan komposisi:

```tsx
export function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ExploreSection />
      <VehicleSection />
      <FinalCtaSection />
    </>
  );
}
```

HomePage hanya mengatur urutan section.

Jangan menulis seluruh markup di HomePage.

---

## Section Styling

Gunakan pola alternating yang sederhana:

```text
Hero          → wnb-black
Manifesto     → wnb-surface
Explore       → wnb-black
Vehicle       → wnb-surface
Final CTA     → wnb-surface-elevated
```

Aturan:

- Border dapat digunakan sebagai pemisah.
- Jangan memakai setiap section sebagai card besar.
- Jangan memakai radius pada seluruh section full-width.
- Jangan membuat dekorasi torn-edge pada tahap ini.
- Jangan menggunakan clip-path.
- Jangan menggunakan SVG dekoratif.
- Jangan membuat gunung palsu.

---

## Accessibility

Wajib:

1. Hanya satu `h1` pada Home.
2. Section utama memakai semantic `<section>`.
3. Section yang membutuhkan label gunakan `aria-labelledby`.
4. Ikon dekoratif memakai `aria-hidden="true"`.
5. Internal navigation memakai `Link` atau `LinkButton`.
6. Media placeholder mempunyai `role="img"` dan `aria-label`.
7. CTA dapat diakses keyboard.
8. Focus-visible tetap jelas.
9. Heading tidak melompat tanpa alasan.
10. Jangan menggunakan heading hanya untuk ukuran visual.
11. Navigation landmarks mempunyai label.
12. Escape menutup menu dan mengembalikan fokus.
13. Reduced motion tetap dihormati.
14. Kontras tetap tinggi.

---

## Responsive Requirements

### Mobile

- Hero satu kolom.
- Heading tidak overflow.
- CTA dapat wrap.
- Media placeholder tidak terlalu tinggi.
- Explore cards satu kolom.
- Vehicle cards satu kolom.
- Padding horizontal minimum 16px.
- Tidak ada horizontal scroll.

### Tablet

- Hero dapat tetap satu kolom atau mulai dua kolom bila proporsional.
- Explore grid dua kolom diperbolehkan.
- Vehicle grid dapat satu atau dua kolom.

### Desktop

- Hero dua kolom.
- Explore tiga kolom.
- Vehicle dua kolom.
- Heading memiliki max-width.
- Section spacing konsisten.
- Jangan membuat baris teks terlalu panjang.

---

## Coding Rules

- Named exports.
- TypeScript strict.
- Alias `@/` untuk lintas folder.
- `import type` untuk type import.
- Tidak menggunakan `any`.
- Tidak menggunakan inline style.
- Tidak menggunakan `dangerouslySetInnerHTML`.
- Tidak membuat barrel files.
- Tidak memasang dependency.
- Tidak mengubah package versions.
- Tidak mengubah routing.
- Tidak mengubah server.
- Tidak mengubah environment.
- Tidak membuat data palsu.
- Tidak menggunakan array index sebagai key.
- Gunakan `item.path` atau `vehicle.variant` sebagai key.

---

## Dokumentasi Home

Buat:

```text
docs/design/home-page.md
```

Wajib berisi:

1. Tujuan Home.
2. Urutan section.
3. Copy yang digunakan.
4. Hubungan CTA dan route.
5. Penjelasan bahwa mockup hanya visual direction.
6. Strategi media placeholder.
7. Daftar data yang masih TBD.
8. Struktur komponen.
9. Responsive behavior.
10. Accessibility behavior.
11. Daftar pekerjaan lanjutan setelah aset resmi tersedia.

TBD:

- Foto hero.
- Foto manifesto.
- Foto Land Rover Short.
- Foto Land Rover Long.
- Paket unggulan.
- Rute unggulan.
- Testimoni.
- Galeri pilihan.
- Nomor WhatsApp.

---

## Dokumentasi Plan

Simpan file ini sebagai:

```text
docs/plans/005-home-page-implementation.md
```

Perbarui `docs/README.md`:

```md
- [Home Page](design/home-page.md)
- [005-home-page-implementation.md](plans/005-home-page-implementation.md): Implementasi halaman Home.
```

Perbarui `client/README.md`:

- Home sudah diimplementasikan.
- Section Home yang tersedia.
- Foto masih menggunakan media placeholder.
- Halaman selain Home masih placeholder.
- Data bisnis masih TBD.

Perbarui root `README.md`:

```text
Frontend foundation: Initialized
Responsive application shell: Initialized
Home page: Implemented with official-asset placeholders
Other pages: Not implemented
Backend: Deferred for MVP
```

---

## Dependency dan Konfigurasi

Pada tahap ini:

- Jangan menjalankan instalasi dependency baru.
- `package.json` tidak boleh berubah.
- `package-lock.json` tidak boleh berubah.
- `vite.config.ts` tidak boleh berubah.
- `tsconfig` tidak boleh berubah.
- `.env.example` tidak boleh berubah.
- Root scripts tidak boleh berubah.
- Server tidak boleh berubah.

Jika package-lock berubah, pulihkan.

---

## Verifikasi Wajib

Jalankan dari root:

```bash
npm run typecheck:client
npm run build:client
```

Keduanya harus exit code `0`.

Jalankan manual:

```bash
npm run dev:client
```

Periksa Home pada:

- Mobile.
- Tablet.
- Desktop.

Periksa:

1. Hero mempunyai satu `h1`.
2. CTA Paket menuju `/paket`.
3. CTA Rute menuju `/rute`.
4. Explore Paket menuju `/paket`.
5. Explore Rute menuju `/rute`.
6. Explore Galeri menuju `/gallery`.
7. CTA Booking menuju `/booking`.
8. CTA About menuju `/about`.
9. Scroll berpindah ke atas saat route berubah.
10. Mobile menu tetap berfungsi.
11. Escape mengembalikan fokus ke hamburger.
12. Footer navigation mempunyai accessible label.
13. Navbar desktop mempunyai accessible label.
14. Tidak ada horizontal overflow.
15. Media placeholder tidak menggunakan gambar.
16. Tidak ada klaim Bandung Barat atau Bandung Selatan.
17. Tidak ada lokasi rute spesifik.
18. Tidak ada harga atau kapasitas.
19. Tidak ada istilah “Jeep”.
20. Tidak ada foto palsu.
21. Tidak ada error console.
22. Semua halaman lain tetap dapat dibuka.

Setelah pemeriksaan, hentikan dev server.

---

## Acceptance Criteria

Plan 005 selesai bila:

1. Home bukan lagi `PagePlaceholder`.
2. Hero selesai.
3. Manifesto section selesai.
4. Explore section selesai.
5. Vehicle section selesai.
6. Final CTA selesai.
7. Typed Home content tersedia.
8. Home media placeholder tersedia.
9. Tidak ada aset foto palsu.
10. Klaim wilayah tidak terkonfirmasi telah dihapus.
11. Scroll-to-top bekerja.
12. Navigation landmarks diberi label.
13. Focus mobile menu diperbaiki.
14. Responsive mobile–desktop bekerja.
15. Typecheck berhasil.
16. Build berhasil.
17. `package-lock.json` tidak berubah.
18. Dokumentasi Home dibuat.
19. Plan 005 disimpan.
20. Backend tidak berubah.

---

## Output yang Harus Dilaporkan

Setelah selesai, laporkan:

1. Model Antigravity yang digunakan.
2. Daftar file yang dibuat.
3. Daftar file yang diperbarui.
4. Konfirmasi tidak ada dependency baru.
5. Konfirmasi `package-lock.json` tidak berubah.
6. Struktur section Home.
7. Copy Home yang digunakan.
8. Daftar placeholder aset.
9. Hasil pemeriksaan CTA.
10. Hasil pemeriksaan mobile/tablet/desktop.
11. Hasil pemeriksaan scroll-to-top.
12. Hasil pemeriksaan fokus mobile menu.
13. Hasil typecheck dan exit code.
14. Hasil build dan exit code.
15. Konfirmasi tidak ada klaim wilayah spesifik.
16. Konfirmasi tidak ada data bisnis palsu.
17. Konfirmasi server tidak berubah.
18. Ringkasan `git status`.
19. Kendala atau deviasi.

Gunakan commit:

```text
feat(client): implement home page
```

Jangan melakukan perubahan tambahan di luar implementation plan ini.
