# PLAN 010 — IMPLEMENTASI HALAMAN DAFTAR RUTE DAN DETAIL RUTE WNB

**Proyek:** WNB — Wisata Ngaprak Bandung  
**Repository:** `syahputrawork98-sketch/WNB-WisataNgaprakBandung`  
**Target aplikasi:** `client`  
**Versi plan:** 1.0  
**Status:** Siap Dieksekusi  
**Kondisi repository saat plan disusun:** `main` terakhir diperiksa pada commit `95a360cf26ebf6370bf871133fe2dd21cda75925`

---

## 1. IDENTITAS DAN PERAN EXECUTOR

Kamu adalah executor teknis yang bekerja langsung pada repository lokal WNB melalui Antigravity.

Tugasmu adalah membaca kondisi kode terbaru, merencanakan perubahan secara singkat, lalu mengimplementasikan **halaman Daftar Rute dan Detail Rute** berdasarkan instruksi serta data publik yang tersedia di file ini.

Jangan meminta akses Google Drive. Seluruh data yang diperlukan untuk implementasi awal sudah disediakan di dalam Plan 010 ini.

---

## 2. TUJUAN PLAN 010

Plan 010 bertujuan untuk:

1. mengganti placeholder halaman `/rute` dengan halaman Daftar Rute yang lengkap;
2. mengganti placeholder halaman `/rute/:slug` dengan halaman Detail Rute dinamis;
3. menampilkan seluruh **RT-01 sampai RT-10**;
4. memisahkan data publik dari data teknis/internal;
5. menjaga konsistensi visual dengan halaman Beranda, Tentang Kami, Daftar Paket, dan Detail Paket yang sudah ada;
6. menyediakan fallback visual yang rapi walaupun aset foto khusus Rute belum tersedia;
7. menyiapkan struktur kode agar foto dan hubungan Paket–Rute dapat ditambahkan kemudian tanpa refactor besar;
8. memastikan seluruh halaman responsif, dapat diakses, dan lulus proses build.

---

## 3. KONDISI REPOSITORY YANG SUDAH DIKETAHUI

Routing berikut sudah tersedia dan tidak perlu dibuat ulang:

```ts
ROUTE_PATHS.routes = "/rute";
ROUTE_PATHS.routeDetail = "/rute/:slug";
```

Helper berikut juga sudah tersedia:

```ts
buildRouteDetailPath(slug)
```

`AppRoutes.tsx` sudah mendaftarkan:

```tsx
<Route path={ROUTE_PATHS.routes} element={<RouteListPage />} />
<Route path={ROUTE_PATHS.routeDetail} element={<RouteDetailPage />} />
```

Navigasi desktop dan mobile sudah memiliki menu **Rute**.

Kondisi halaman saat ini:

- `client/src/pages/RouteListPage/RouteListPage.tsx` masih berupa `PagePlaceholder`;
- `client/src/pages/RouteDetailPage/RouteDetailPage.tsx` masih berupa `PagePlaceholder`;
- belum ada modul data khusus Rute;
- `routeSlugs` pada data Paket masih kosong dan **tidak boleh diisi pada Plan 010**.

---

## 4. SUMBER KEBENARAN PLAN 010

Gunakan urutan prioritas berikut:

1. instruksi eksplisit dalam Plan 010 ini;
2. struktur dan gaya kode terbaru di repository;
3. pola implementasi halaman Paket sebagai referensi teknis;
4. design token dan komponen umum yang sudah tersedia;
5. data publik RT-01 sampai RT-10 yang tercantum di bagian 10.

Jangan menggunakan asumsi baru yang bertentangan dengan data di plan ini.

---

## 5. BATAS SCOPE

### 5.1 Wajib dikerjakan

- membuat model/type data Rute;
- membuat sumber data publik RT-01 sampai RT-10;
- membuat helper pencarian Rute berdasarkan slug;
- membuat filter/pengelompokan Rute;
- membuat kartu Rute;
- membuat fallback visual Rute;
- mengimplementasikan halaman Daftar Rute;
- mengimplementasikan halaman Detail Rute;
- membuat tampilan Rute tidak ditemukan;
- menguji seluruh slug;
- menjalankan typecheck dan build.

### 5.2 Boleh diperbaiki hanya jika benar-benar diperlukan

- import atau helper kecil yang langsung mendukung halaman Rute;
- class responsif atau aksesibilitas pada file Rute;
- pemanfaatan komponen umum yang sudah tersedia;
- struktur folder `features/routes`.

### 5.3 Dilarang dikerjakan

- jangan mengubah isi halaman Paket hasil Plan 009B;
- jangan mengubah data harga, nama, fasilitas, atau status Paket;
- jangan mengisi `routeSlugs` pada `packagesData.ts`;
- jangan membuat hubungan Paket–Rute spesifik seolah-olah sudah final;
- jangan mengubah Beranda, Tentang Kami, Galeri, Booking, Navbar, Footer, atau branding kecuali ada error compile yang langsung disebabkan perubahan Plan 010;
- jangan membuat peta;
- jangan memasukkan koordinat;
- jangan memasukkan lokasi start/finish presisi;
- jangan memasukkan prosedur recovery, evakuasi, izin kawasan, kontak darurat, atau risiko teknis internal;
- jangan menggunakan data tingkat kesulitan internal sebagai label utama publik;
- jangan membuat atau mengunduh gambar baru;
- jangan menggunakan URL Google Drive sebagai ketergantungan wajib;
- jangan memasang dependency baru;
- jangan menghapus file yang tidak berkaitan;
- jangan melakukan commit;
- jangan melakukan push;
- jangan membuka pull request.

---

## 6. PRINSIP DATA PUBLIK

Data publik halaman Rute harus mengikuti prinsip berikut:

1. semua RT-01 sampai RT-10 ditampilkan;
2. nama, slug, area umum, ringkasan, label pengalaman, dan urutan tampil dianggap siap publik;
3. durasi bersifat **indikatif**, bukan janji tetap;
4. kondisi perjalanan dapat berubah karena cuaca, jalur, pemeriksaan sebelum perjalanan, kebutuhan peserta, dan keputusan tim WNB;
5. titik temu bersifat fleksibel berdasarkan booking;
6. start dan finish hanya ditulis sebagai area umum;
7. RT-10 ditampilkan sebagai **Rute Khusus**, bukan Rute reguler dengan jadwal otomatis;
8. tidak menampilkan jarak kilometer pada implementasi awal;
9. tidak menampilkan kode kesulitan internal seperti `Easy`, `Medium`, `Hard`, atau `Advanced` kepada pengunjung;
10. tidak menampilkan data teknis yang dapat dianggap sebagai jaminan operasional.

---

## 7. ARSITEKTUR FILE YANG DIREKOMENDASIKAN

Buat struktur minimal berikut:

```text
client/src/features/routes/
├── routesTypes.ts
├── routesData.ts
└── components/
    ├── RouteCard.tsx
    ├── RouteFilter.tsx
    └── RouteMediaView.tsx
```

Perbarui:

```text
client/src/pages/RouteListPage/RouteListPage.tsx
client/src/pages/RouteDetailPage/RouteDetailPage.tsx
```

Komponen tambahan boleh dibuat hanya jika benar-benar mengurangi duplikasi, misalnya:

```text
RoutePlanningSteps.tsx
RouteSafetyNotice.tsx
```

Jangan membuat terlalu banyak komponen kecil yang tidak memberi manfaat nyata.

---

## 8. MODEL DATA YANG DIREKOMENDASIKAN

Gunakan type yang aman untuk data publik. Nama type boleh disesuaikan dengan gaya repository, tetapi cakupan datanya minimal seperti berikut:

```ts
export type RouteRegion =
  | "bandung-utara"
  | "bandung-selatan"
  | "rute-khusus";

export type RouteAvailabilityStatus =
  | "available-by-confirmation"
  | "special-consultation";

export type RouteDuration = {
  dry: string;
  rainy: string;
  note: string;
};

export type RouteMedia = {
  src?: string;
  fallbackSrc?: string;
  alt: string;
};

export type TravelRoute = {
  id: string;
  order: number;
  slug: string;
  name: string;

  region: RouteRegion;
  regionLabel: string;
  area: string;

  availabilityStatus: RouteAvailabilityStatus;
  experienceLabel: string;

  shortDescription: string;
  longDescription: string;

  duration: RouteDuration;
  landscape: string;

  trackCharacteristics: string[];
  attractions: string[];
  activities: string[];

  seasonNote: string;

  meetingPoint: string;
  startArea: string;
  finishArea: string;

  publicSafetyNotes: string[];

  media: RouteMedia;
};
```

Jangan tambahkan field data internal seperti:

```ts
difficultyInternal
coordinates
recoveryProcedure
emergencyRoute
permitContact
riskPoint
exactStartLocation
exactFinishLocation
```

---

## 9. HELPER DAN FILTER DATA

Di `routesData.ts`, sediakan minimal:

```ts
export const ROUTE_REGION_FILTERS = [
  { key: "semua", label: "Semua Rute" },
  { key: "bandung-utara", label: "Bandung Utara" },
  { key: "bandung-selatan", label: "Bandung Selatan" },
  { key: "rute-khusus", label: "Rute Khusus" },
] as const;
```

Sediakan helper:

```ts
getAllRoutes()
getRoutesByRegion(region)
getRouteBySlug(slug)
```

Ketentuan:

- hasil selalu diurutkan berdasarkan `order`;
- seluruh RT-01 sampai RT-10 harus ikut dalam `getAllRoutes()`;
- `getRouteBySlug()` mengembalikan `undefined` jika slug tidak dikenal;
- jangan mengembalikan Rute berdasarkan pencocokan nama yang longgar;
- gunakan exact slug.

---

## 10. DATA PUBLIK RT-01 SAMPAI RT-10

Gunakan data berikut sebagai isi awal `routesData.ts`.

### RT-01 — Sukawana–Cikole

```yaml
id: RT-01
order: 1
slug: sukawana-cikole
name: Sukawana–Cikole
region: bandung-utara
regionLabel: Bandung Utara
area: Lembang
availabilityStatus: available-by-confirmation
experienceLabel: Petualangan Sukawana–Cikole yang Menantang
shortDescription: Perjalanan dari kawasan kebun teh Sukawana menuju hutan pinus Cikole melalui jalur batu, tanah merah, cerukan, dan lumpur.
longDescription: Rute Sukawana–Cikole memadukan lanskap perkebunan teh dan suasana hutan pinus dalam perjalanan Land Rover klasik. Karakter lintasan dapat berubah mengikuti hujan, kondisi jalur, dan hasil pemeriksaan WNB sebelum keberangkatan.
duration:
  dry: 3–4 jam
  rainy: 5–6 jam
  note: Estimasi bersifat indikatif dan dapat berubah mengikuti kondisi perjalanan.
landscape: Kebun teh dan hutan pinus
trackCharacteristics:
  - Jalur batu atau makadam
  - Tanah merah
  - Cerukan dan genangan
  - Lintasan hutan
attractions:
  - Lanskap perkebunan teh Sukawana
  - Suasana hutan pinus Cikole
  - Pengalaman perjalanan menggunakan Land Rover klasik
activities:
  - Jelajah off-road
  - Menikmati lanskap
  - Dokumentasi pada titik aman yang ditentukan kru
seasonNote: Hujan dapat membuat lintasan lebih licin dan berlumpur serta menambah waktu perjalanan.
meetingPoint: Fleksibel di Bandung, Lembang, Cikole, atau Sukawana berdasarkan konfirmasi pemesanan.
startArea: Kawasan Sukawana secara umum
finishArea: Kawasan Cikole secara umum
publicSafetyNotes:
  - Kondisi Rute diperiksa kembali sebelum perjalanan.
  - Peserta wajib mengikuti arahan driver dan helper.
  - Rute dapat disesuaikan atau dialihkan apabila kondisi tidak memungkinkan.
media:
  alt: Visual perjalanan Land Rover klasik di Rute Sukawana–Cikole
```

### RT-02 — Cikole–Sukawana (Jalur Balik)

```yaml
id: RT-02
order: 2
slug: cikole-sukawana-jalur-balik
name: Cikole–Sukawana (Jalur Balik)
region: bandung-utara
regionLabel: Bandung Utara
area: Lembang
availabilityStatus: available-by-confirmation
experienceLabel: Tantangan Tanjakan Cikole–Sukawana
shortDescription: Perjalanan arah balik dari Cikole menuju Sukawana dengan karakter tanjakan berbatu, tanah, dan lintasan hutan yang lebih menantang.
longDescription: Arah perjalanan Cikole–Sukawana memiliki pengalaman berbeda dari RT-01 karena beberapa bagian lintasan berubah menjadi tanjakan. Pemilihan Rute dilakukan melalui konfirmasi WNB dengan mempertimbangkan cuaca, kondisi jalur, dan kesiapan perjalanan.
duration:
  dry: 3,5–4,5 jam
  rainy: 5–6 jam
  note: Estimasi bersifat indikatif dan dapat berubah mengikuti kondisi perjalanan.
landscape: Hutan dan jalur tanjakan kawasan Lembang
trackCharacteristics:
  - Tanjakan berbatu
  - Jalur tanah
  - Lintasan hutan
  - Perubahan traksi setelah hujan
attractions:
  - Suasana hutan Bandung Utara
  - Pengalaman tanjakan dengan Land Rover klasik
  - Karakter perjalanan arah balik yang berbeda
activities:
  - Jelajah off-road
  - Menikmati suasana hutan
  - Dokumentasi pada titik aman
seasonNote: Setelah hujan, permukaan dapat menjadi lebih licin sehingga waktu dan susunan perjalanan dapat berubah.
meetingPoint: Fleksibel di Bandung, Lembang, atau Cikole berdasarkan konfirmasi pemesanan.
startArea: Kawasan Cikole secara umum
finishArea: Kawasan Sukawana secara umum
publicSafetyNotes:
  - Penggunaan Rute dikonfirmasi setelah pemeriksaan kondisi jalur.
  - Peserta wajib mengikuti posisi duduk dan arahan keselamatan kru.
  - Rute dapat dialihkan apabila cuaca atau lintasan tidak memungkinkan.
media:
  alt: Visual Land Rover klasik menanjak pada Rute Cikole–Sukawana
```

### RT-03 — Sukawana–Puncak Upas

```yaml
id: RT-03
order: 3
slug: sukawana-puncak-upas
name: Sukawana–Puncak Upas
region: bandung-utara
regionLabel: Bandung Utara
area: Tangkuban Parahu
availabilityStatus: available-by-confirmation
experienceLabel: Ekspedisi Sukawana–Puncak Upas
shortDescription: Perjalanan pegunungan dari Sukawana menuju kawasan Puncak Upas dengan suasana hutan, bebatuan, akar, kabut, dan karakter ekspedisi.
longDescription: Rute Sukawana–Puncak Upas menawarkan pengalaman perjalanan pegunungan yang lebih panjang dengan suasana hutan dan kemungkinan kabut. Penggunaan Rute serta aktivitas camping hanya ditentukan setelah konsultasi dan pemeriksaan WNB.
duration:
  dry: 5–7 jam
  rainy: 6–9 jam
  note: Estimasi sangat dipengaruhi cuaca, kabut, kondisi jalur, dan susunan kegiatan.
landscape: Hutan pegunungan dan kawasan Puncak Upas
trackCharacteristics:
  - Jalur berbatu
  - Akar pohon
  - Tanjakan pegunungan
  - Lintasan hutan dan kemungkinan kabut
attractions:
  - Suasana ekspedisi pegunungan
  - Hutan berkabut
  - Lanskap kawasan Tangkuban Parahu
activities:
  - Jelajah off-road
  - Menikmati lanskap pegunungan
  - Dokumentasi
  - Camping apabila menjadi bagian Paket yang telah dikonfirmasi
seasonNote: Kabut dan hujan dapat memengaruhi jarak pandang, waktu perjalanan, serta keputusan penggunaan Rute.
meetingPoint: Fleksibel berdasarkan Paket dan hasil konfirmasi pemesanan.
startArea: Kawasan Sukawana secara umum
finishArea: Kawasan Puncak Upas secara umum
publicSafetyNotes:
  - Rute hanya digunakan setelah kondisi cuaca dan jalur dinilai memungkinkan.
  - Susunan kegiatan dapat berubah demi keselamatan peserta.
  - Aktivitas camping tidak otomatis termasuk dan wajib dikonfirmasi terpisah.
media:
  alt: Visual ekspedisi Land Rover klasik menuju kawasan Puncak Upas
```

### RT-04 — Lingkar Hutan Pinus Cikole

```yaml
id: RT-04
order: 4
slug: lingkar-hutan-pinus-cikole
name: Lingkar Hutan Pinus Cikole
region: bandung-utara
regionLabel: Bandung Utara
area: Lembang
availabilityStatus: available-by-confirmation
experienceLabel: Jelajah Ringan Hutan Pinus Cikole
shortDescription: Perjalanan berbentuk loop di kawasan hutan pinus Cikole dengan ritme lebih ringan untuk perjalanan pertama, keluarga, dan dokumentasi.
longDescription: Lingkar Hutan Pinus Cikole dirancang sebagai pilihan perjalanan dengan ritme lebih ringan tanpa menghilangkan karakter petualangan Land Rover. Kesesuaian untuk keluarga, pemula, atau anak tetap dikonfirmasi pada saat perencanaan.
duration:
  dry: 1,5–2,5 jam
  rainy: 2–3 jam
  note: Estimasi bersifat indikatif dan dapat berubah mengikuti kondisi kawasan.
landscape: Hutan pinus Cikole
trackCharacteristics:
  - Jalur tanah
  - Batu ringan
  - Tikungan hutan
  - Genangan ringan
attractions:
  - Suasana hutan pinus
  - Udara pegunungan
  - Area dokumentasi yang ditentukan kru
activities:
  - Fun off-road
  - Perjalanan keluarga atau pemula
  - Dokumentasi
  - Piknik atau acara ringan apabila dikonfirmasi dalam Paket
seasonNote: Hujan dapat membuat permukaan lebih becek dan licin, tetapi susunan perjalanan tetap ditentukan oleh tim WNB.
meetingPoint: Fleksibel di area Cikole atau Lembang berdasarkan konfirmasi pemesanan.
startArea: Kawasan Cikole secara umum
finishArea: Kawasan Cikole secara umum
publicSafetyNotes:
  - Kesesuaian perjalanan untuk anak dikonfirmasi saat perencanaan.
  - Peserta tetap wajib mengikuti arahan keselamatan kru.
  - Durasi dan lintasan dapat disesuaikan dengan kondisi kawasan.
media:
  alt: Visual keluarga menikmati Rute Lingkar Hutan Pinus Cikole
```

### RT-05 — Trek Klasik Jayagiri–Cikole

```yaml
id: RT-05
order: 5
slug: trek-klasik-jayagiri-cikole
name: Trek Klasik Jayagiri–Cikole
region: bandung-utara
regionLabel: Bandung Utara
area: Lembang
availabilityStatus: available-by-confirmation
experienceLabel: Jelajah Klasik Jayagiri–Cikole
shortDescription: Jelajah dari kawasan Jayagiri menuju Cikole melalui makadam, perkebunan, jalur hutan, akar, dan genangan dengan karakter petualangan sedang.
longDescription: Trek Klasik Jayagiri–Cikole memadukan suasana kawasan perkebunan, pedesaan, dan hutan. Kondisi aktual lintasan dan waktu perjalanan selalu mengikuti pemeriksaan serta konfirmasi WNB.
duration:
  dry: 2,5–3,5 jam
  rainy: 3,5–4,5 jam
  note: Estimasi bersifat indikatif dan dapat berubah mengikuti kondisi perjalanan.
landscape: Perkebunan, kawasan Jayagiri, dan hutan Cikole
trackCharacteristics:
  - Makadam
  - Jalur perkebunan
  - Akar pohon
  - Genangan dan jalur hutan
attractions:
  - Suasana kawasan Jayagiri
  - Perkebunan dan hutan
  - Perjalanan klasik Bandung Utara
activities:
  - Jelajah alam
  - Dokumentasi perjalanan
  - Menikmati lanskap perkebunan dan hutan
seasonNote: Hujan dapat membuat akar, tanah, dan genangan lebih licin serta memperpanjang perjalanan.
meetingPoint: Fleksibel di area Lembang atau Cikole berdasarkan konfirmasi pemesanan.
startArea: Kawasan Jayagiri secara umum
finishArea: Kawasan Cikole secara umum
publicSafetyNotes:
  - Kondisi lintasan diperiksa sebelum perjalanan.
  - Perjalanan dapat disesuaikan apabila jalur sedang ramai atau tidak memungkinkan.
  - Peserta wajib mengikuti arahan kru.
media:
  alt: Visual Land Rover klasik melintasi Trek Jayagiri–Cikole
```

### RT-06 — Puncak Gunung Putri–Cikole

```yaml
id: RT-06
order: 6
slug: puncak-gunung-putri-cikole
name: Puncak Gunung Putri–Cikole
region: bandung-utara
regionLabel: Bandung Utara
area: Lembang
availabilityStatus: available-by-confirmation
experienceLabel: Jelajah Gunung Putri dan Hutan Cikole
shortDescription: Jelajah kawasan Gunung Putri menuju Cikole melalui jalur pegunungan, tanah merah, akar, tanjakan, turunan, dan hutan pinus.
longDescription: Puncak Gunung Putri–Cikole menghadirkan perpaduan suasana pegunungan dan hutan pinus. Angka durasi bersifat indikatif, sedangkan lintasan aktual ditentukan melalui pemeriksaan dan konfirmasi WNB.
duration:
  dry: 3–4 jam
  rainy: 4–6 jam
  note: Estimasi indikatif dan dapat berubah mengikuti cuaca serta kondisi jalur.
landscape: Gunung Putri dan hutan pinus Cikole
trackCharacteristics:
  - Tanah merah
  - Akar pohon
  - Tanjakan dan turunan
  - Jalur hutan pinus
attractions:
  - Lanskap Gunung Putri
  - Suasana hutan pinus
  - Udara pegunungan
activities:
  - Jelajah off-road
  - Menikmati lanskap
  - Dokumentasi pada titik aman
seasonNote: Kabut, hujan, dan genangan dapat mengubah durasi serta susunan perjalanan.
meetingPoint: Fleksibel di area Lembang atau Cikole berdasarkan konfirmasi pemesanan.
startArea: Kawasan Gunung Putri secara umum
finishArea: Kawasan Cikole secara umum
publicSafetyNotes:
  - Rute dikonfirmasi berdasarkan kondisi lapangan.
  - Informasi lokasi rinci diberikan setelah pemesanan dikonfirmasi.
  - Peserta wajib mengikuti arahan kru.
media:
  alt: Visual perjalanan Land Rover klasik dari Gunung Putri menuju Cikole
```

### RT-07 — Situ Cileunca–Hutan Rahong

```yaml
id: RT-07
order: 7
slug: situ-cileunca-hutan-rahong
name: Situ Cileunca–Hutan Rahong
region: bandung-selatan
regionLabel: Bandung Selatan
area: Pangalengan
availabilityStatus: available-by-confirmation
experienceLabel: Petualangan Situ Cileunca dan Hutan Rahong
shortDescription: Perjalanan Bandung Selatan yang memadukan suasana danau, perkebunan, jalur tanah dan batu, serta kawasan hutan Rahong.
longDescription: Situ Cileunca–Hutan Rahong menawarkan suasana Bandung Selatan melalui perpaduan danau, perkebunan, dan hutan. Detail akses dan susunan perjalanan ditentukan melalui konsultasi serta pemeriksaan WNB.
duration:
  dry: 4–5 jam
  rainy: 5–7 jam
  note: Estimasi indikatif dan dapat berubah mengikuti cuaca serta kondisi kawasan.
landscape: Danau, perkebunan, dan hutan Rahong
trackCharacteristics:
  - Jalur tanah
  - Batu
  - Lumpur
  - Perkebunan dan kawasan hutan
attractions:
  - Panorama Situ Cileunca
  - Lanskap perkebunan
  - Suasana Hutan Rahong
activities:
  - Jelajah off-road
  - Dokumentasi danau dan perkebunan
  - Aktivitas luar ruang sesuai Paket yang dikonfirmasi
seasonNote: Hujan dapat meningkatkan lumpur dan aliran air sehingga waktu atau susunan perjalanan dapat berubah.
meetingPoint: Fleksibel di Pangalengan atau kawasan Situ Cileunca berdasarkan konfirmasi pemesanan.
startArea: Kawasan Situ Cileunca secara umum
finishArea: Kawasan Hutan Rahong secara umum
publicSafetyNotes:
  - Akses kawasan dan kondisi perjalanan dikonfirmasi sebelum keberangkatan.
  - Titik perjalanan rinci tidak ditampilkan secara publik.
  - Rute dapat disesuaikan atau dialihkan.
media:
  alt: Visual perjalanan Land Rover klasik di Situ Cileunca dan Hutan Rahong
```

### RT-08 — Rancabali–Lumpur Eretan

```yaml
id: RT-08
order: 8
slug: rancabali-lumpur-eretan
name: Rancabali–Lumpur Eretan
region: bandung-selatan
regionLabel: Bandung Selatan
area: Ciwidey
availabilityStatus: available-by-confirmation
experienceLabel: Tantangan Lumpur Rancabali
shortDescription: Petualangan perkebunan dan lintasan berlumpur di kawasan Rancabali dengan cerukan, genangan, dan tanjakan tanah.
longDescription: Rancabali–Lumpur Eretan menonjolkan pengalaman lintasan perkebunan dan lumpur. Kondisi jalur dapat berubah secara signifikan setelah hujan sehingga penggunaan Rute selalu mengikuti pemeriksaan WNB.
duration:
  dry: 3–4 jam
  rainy: 4–6 jam
  note: Estimasi indikatif dan sangat dipengaruhi kondisi lumpur serta cuaca.
landscape: Perkebunan Rancabali dan lintasan berlumpur
trackCharacteristics:
  - Tanah lempung
  - Lumpur
  - Cerukan dan genangan
  - Tanjakan tanah
attractions:
  - Lanskap perkebunan Rancabali
  - Udara sejuk Ciwidey
  - Pengalaman lintasan lumpur
activities:
  - Jelajah off-road
  - Menikmati tantangan lintasan
  - Dokumentasi kendaraan pada titik aman
seasonNote: Hujan dapat memperdalam lumpur dan mengubah waktu serta jalur perjalanan.
meetingPoint: Fleksibel di Ciwidey atau Rancabali berdasarkan konfirmasi pemesanan.
startArea: Kawasan Rancabali secara umum
finishArea: Kawasan lintasan Lumpur Eretan secara umum
publicSafetyNotes:
  - Kondisi jalur diperiksa sebelum keberangkatan.
  - Prosedur recovery tidak ditampilkan sebagai informasi publik.
  - Peserta wajib mengikuti arahan keselamatan kru.
media:
  alt: Visual Land Rover klasik melewati lintasan lumpur Rancabali
```

### RT-09 — Trek Kebun Teh Gambung

```yaml
id: RT-09
order: 9
slug: trek-kebun-teh-gambung
name: Trek Kebun Teh Gambung
region: bandung-selatan
regionLabel: Bandung Selatan
area: Ciwidey
availabilityStatus: available-by-confirmation
experienceLabel: Jelajah Sejuk Kebun Teh Gambung
shortDescription: Jelajah kawasan kebun teh Gambung melalui makadam, tanah padat, kerikil, genangan ringan, dan lanskap perkebunan terbuka.
longDescription: Trek Kebun Teh Gambung menghadirkan perjalanan melalui hamparan perkebunan dan lanskap terbuka Bandung Selatan. Titik perjalanan dan akses kawasan ditentukan melalui konfirmasi WNB.
duration:
  dry: 3–4 jam
  rainy: 4–5 jam
  note: Estimasi indikatif dan dapat berubah mengikuti cuaca serta akses kawasan.
landscape: Kebun teh Gambung dan jalur perkebunan
trackCharacteristics:
  - Makadam
  - Tanah padat
  - Kerikil
  - Genangan ringan
attractions:
  - Hamparan kebun teh Gambung
  - Lanskap perkebunan terbuka
  - Udara pegunungan
activities:
  - Jelajah perkebunan
  - Dokumentasi
  - Perjalanan keluarga atau kelompok kecil sesuai konfirmasi
seasonNote: Hujan dan kabut dapat membuat jalur lebih licin serta memengaruhi jarak pandang.
meetingPoint: Fleksibel di Ciwidey atau Gambung berdasarkan konfirmasi pemesanan.
startArea: Kawasan Kebun Teh Gambung secara umum
finishArea: Kawasan Kebun Teh Gambung secara umum
publicSafetyNotes:
  - Akses dan titik berhenti mengikuti izin serta arahan pengelola kawasan.
  - Lokasi rinci diberikan setelah pemesanan dikonfirmasi.
  - Susunan perjalanan dapat berubah mengikuti kondisi lapangan.
media:
  alt: Visual Land Rover klasik di kawasan Kebun Teh Gambung
```

### RT-10 — Rute Khusus Bogor

```yaml
id: RT-10
order: 10
slug: rute-khusus-bogor
name: Rute Khusus Bogor
region: rute-khusus
regionLabel: Rute Khusus
area: Bogor
availabilityStatus: special-consultation
experienceLabel: Ekspedisi Khusus Bogor
shortDescription: Rute khusus di kawasan Bogor dengan karakter perbukitan, hutan, tanah merah, bebatuan, akar, dan pengalaman ekspedisi yang disesuaikan.
longDescription: Rute Khusus Bogor ditampilkan sebagai pilihan perjalanan yang disusun melalui konsultasi. Lokasi rinci, jadwal, durasi, bentuk perjalanan, dan ketersediaannya tidak ditetapkan otomatis.
duration:
  dry: Menyesuaikan hasil konsultasi
  rainy: Menyesuaikan kondisi dan keputusan WNB
  note: Tidak tersedia sebagai jadwal reguler dan wajib dikonfirmasi terlebih dahulu.
landscape: Perbukitan dan hutan Bogor
trackCharacteristics:
  - Jalur perbukitan
  - Tanah merah
  - Bebatuan dan akar
  - Lintasan hutan
attractions:
  - Lanskap perbukitan Bogor
  - Suasana hutan
  - Pengalaman ekspedisi yang disesuaikan
activities:
  - Konsultasi perjalanan khusus
  - Jelajah off-road
  - Dokumentasi sesuai susunan perjalanan
seasonNote: Cuaca dan kondisi kawasan menjadi dasar utama penetapan jadwal dan susunan perjalanan.
meetingPoint: Ditentukan setelah konsultasi dan konfirmasi WNB.
startArea: Ditentukan setelah konsultasi
finishArea: Ditentukan setelah konsultasi
publicSafetyNotes:
  - Rute tidak tersedia sebagai pemesanan reguler otomatis.
  - Lokasi dan jadwal hanya diberikan setelah rencana perjalanan disetujui.
  - WNB dapat menolak atau menunda perjalanan apabila kondisi belum memungkinkan.
media:
  alt: Visual konseptual ekspedisi Land Rover klasik di kawasan Bogor
```

---

## 11. FALLBACK VISUAL RUTE

Aset foto khusus Rute belum tersedia. Implementasi tidak boleh bergantung pada gambar eksternal yang dapat gagal dimuat.

Buat `RouteMediaView` dengan ketentuan:

1. jika `media.src` tersedia pada masa depan, tampilkan gambar tersebut;
2. jika gambar gagal atau belum tersedia, tampilkan fallback visual berbasis CSS;
3. fallback visual harus terlihat sebagai bagian desain, bukan broken image;
4. gunakan elemen yang sudah tersedia seperti:
   - kode Rute;
   - nama area;
   - ikon `Mountain`, `Map`, `MapPin`, atau ikon relevan dari `lucide-react`;
   - background dengan token warna WNB;
5. jangan menambahkan file gambar palsu;
6. jangan menampilkan tulisan “foto belum tersedia” terlalu dominan;
7. alt text tetap valid;
8. ukuran media kartu harus konsisten;
9. ukuran media hero Detail Rute harus responsif;
10. fallback harus tetap baik pada dark mode bawaan website.

Contoh konsep fallback:

```tsx
<div className="relative flex h-full min-h-48 items-end overflow-hidden bg-wnb-surface-elevated">
  <Mountain aria-hidden="true" />
  <div>
    <span>{route.id}</span>
    <span>{route.regionLabel}</span>
  </div>
</div>
```

Jangan menyalin contoh secara mentah apabila bertentangan dengan komponen dan token aktual repository.

---

## 12. IMPLEMENTASI HALAMAN DAFTAR RUTE

File target:

```text
client/src/pages/RouteListPage/RouteListPage.tsx
```

Hapus penggunaan `PagePlaceholder`.

Halaman harus mengikuti urutan berikut.

### 12.1 Hero Daftar Rute

Konten utama:

- eyebrow: `Rute WNB`;
- judul: `Jelajahi Rute Petualangan WNB`;
- ringkasan:

> Setiap Rute memiliki suasana, karakter lintasan, dan ritme perjalanan yang berbeda. Pilihan akhir selalu disesuaikan dengan peserta, Paket, cuaca, kondisi jalur, serta hasil konfirmasi WNB.

Tambahkan catatan kecil:

> Durasi yang ditampilkan merupakan estimasi indikatif dan dapat berubah mengikuti kondisi perjalanan.

Jangan menjanjikan peta, tingkat kesulitan resmi, atau waktu yang akurat secara mutlak.

### 12.2 Cara Memahami Rute

Tampilkan tiga atau empat kartu penjelasan singkat:

1. **Wilayah**  
   Bandung Utara, Bandung Selatan, atau Rute Khusus.

2. **Durasi Indikatif**  
   Durasi dapat berubah mengikuti cuaca dan kondisi lintasan.

3. **Karakter Pengalaman**  
   Label publik membantu pengunjung memahami suasana Rute tanpa membuka data teknis internal.

4. **Konfirmasi WNB**  
   Rute final ditentukan setelah kebutuhan perjalanan dan kondisi lapangan dikonfirmasi.

### 12.3 Filter atau Pengelompokan

Gunakan filter:

- Semua Rute;
- Bandung Utara;
- Bandung Selatan;
- Rute Khusus.

Ketentuan:

- default `Semua Rute`;
- jumlah keseluruhan harus 10;
- filter harus menggunakan button yang dapat diakses;
- gunakan `aria-pressed`;
- filter tidak mengubah URL;
- jangan menyembunyikan RT-10 secara default;
- urutan tetap RT-01 sampai RT-10.

### 12.4 Grid Kartu Rute

Setiap kartu minimal menampilkan:

- fallback visual;
- kode Rute;
- nama Rute;
- area;
- `experienceLabel`;
- `shortDescription`;
- estimasi durasi kering atau label konsultasi untuk RT-10;
- catatan singkat bahwa durasi dapat berubah;
- CTA `Lihat Detail Rute`.

Ketentuan tampilan:

- satu kolom di mobile;
- dua kolom pada ukuran menengah;
- tiga kolom pada desktop jika ruang mencukupi;
- seluruh kartu memiliki tinggi dan ritme visual yang konsisten;
- seluruh kartu harus dapat dibuka dengan keyboard;
- gunakan `buildRouteDetailPath(route.slug)`;
- jangan menampilkan distance;
- jangan menampilkan difficulty internal;
- jangan menampilkan koordinat;
- jangan menampilkan titik start/finish rinci.

### 12.5 Kondisi Musim

Buat section publik yang menjelaskan:

> Hujan dapat membuat jalur lebih licin, berlumpur, berkabut, atau membutuhkan waktu perjalanan lebih panjang. WNB melakukan pemeriksaan sebelum keberangkatan dan dapat menyesuaikan, mengalihkan, menunda, atau membatalkan penggunaan Rute apabila kondisi tidak memungkinkan.

Gunakan bahasa yang informatif, tidak menakut-nakuti, dan tidak membuka SOP internal.

### 12.6 Hubungan Rute dan Paket

Karena hubungan spesifik belum final, jangan menampilkan daftar Paket tertentu pada kartu atau data Rute.

Gunakan narasi umum:

> Pilihan Rute merupakan bagian dari perencanaan Paket WNB. Rute akhir disesuaikan dengan jenis perjalanan, jumlah peserta, durasi, aktivitas, cuaca, dan kondisi jalur.

CTA:

- `Lihat Daftar Paket` → `/paket`;
- `Rencanakan Perjalanan` → `/booking`.

### 12.7 Cara Merencanakan Perjalanan

Tampilkan tiga langkah:

1. pilih suasana atau karakter Rute yang menarik;
2. tentukan peserta, kebutuhan, Paket, dan tanggal perjalanan;
3. konfirmasikan Rute akhir bersama WNB.

Gunakan tampilan yang konsisten dengan section proses pada halaman Paket, tetapi jangan menyalin komponen secara paksa jika komponennya terlalu spesifik untuk Paket.

### 12.8 CTA Penutup

Judul:

`Rute Mana yang Ingin Anda Jelajahi?`

Deskripsi:

> Ceritakan kebutuhan perjalanan Anda. Tim WNB akan membantu menyesuaikan Paket, Rute, kendaraan, dan susunan pengalaman.

CTA:

- primary: `Rencanakan Perjalanan`;
- secondary: `Lihat Paket WNB`.

---

## 13. IMPLEMENTASI KARTU RUTE

File yang direkomendasikan:

```text
client/src/features/routes/components/RouteCard.tsx
```

Ketentuan:

- seluruh kartu dibungkus `Link` menuju Detail Rute;
- gunakan `buildRouteDetailPath`;
- gunakan `RouteMediaView`;
- gunakan icon secukupnya;
- jangan menampilkan terlalu banyak metadata;
- jaga agar label tidak memotong layout;
- gunakan line-clamp hanya jika sudah tersedia dan tidak menyebabkan data penting hilang;
- hover, focus, border, dan shadow harus memakai token WNB;
- focus state wajib terlihat;
- jangan membuat efek animasi berlebihan;
- jangan membuat kartu bergantung pada JavaScript selain navigasi normal.

---

## 14. IMPLEMENTASI HALAMAN DETAIL RUTE

File target:

```text
client/src/pages/RouteDetailPage/RouteDetailPage.tsx
```

Hapus penggunaan `PagePlaceholder`.

Ambil slug menggunakan:

```ts
const { slug } = useParams<{ slug: string }>();
const route = getRouteBySlug(slug);
```

Halaman Detail Rute mengikuti urutan berikut.

### 14.1 Kondisi Rute Tidak Ditemukan

Jika slug tidak valid:

- tampilkan status `404 — Rute Tidak Ditemukan`;
- judul `Rute Perjalanan Tidak Ditemukan`;
- penjelasan singkat;
- tombol `Kembali ke Daftar Rute`;
- jangan melempar error;
- jangan redirect otomatis ke Beranda.

### 14.2 Breadcrumb

Urutan:

```text
Beranda / Rute / Nama Rute
```

Gunakan:

- `ROUTE_PATHS.home`;
- `ROUTE_PATHS.routes`.

### 14.3 Hero dan Identitas Rute

Tampilkan:

- kode Rute;
- region label;
- nama Rute;
- area;
- `experienceLabel`;
- `longDescription`;
- hero media/fallback.

Untuk RT-10, tampilkan badge:

`Rute Khusus — Perlu Konsultasi`

Untuk RT-01 sampai RT-09, tampilkan badge:

`Tersedia melalui Konfirmasi`

Jangan menggunakan istilah aktif/tidak aktif.

### 14.4 Informasi Ringkas Rute

Tampilkan empat fakta:

1. wilayah atau area;
2. estimasi durasi kondisi kering;
3. estimasi durasi setelah hujan;
4. lingkungan utama.

Tambahkan catatan:

> Estimasi dapat berubah mengikuti cuaca, kondisi jalur, peserta, dan keputusan tim WNB.

Jangan menampilkan jarak kilometer.

### 14.5 Gambaran Pengalaman dan Daya Tarik

Tampilkan:

- `longDescription`;
- daftar `attractions`;
- daftar `activities`.

Gunakan heading yang jelas dan semantic list.

### 14.6 Karakter Lintasan Publik

Tampilkan `trackCharacteristics` dalam bahasa publik.

Tambahkan penjelasan:

> Karakter lintasan menggambarkan pengalaman umum dan bukan laporan kondisi real-time. Kondisi aktual diperiksa kembali sebelum perjalanan.

Jangan menampilkan risiko teknis rinci.

### 14.7 Durasi, Cuaca, dan Kondisi Musim

Tampilkan:

- estimasi kering;
- estimasi hujan;
- `duration.note`;
- `seasonNote`.

Gunakan ikon yang relevan, tetapi tidak berlebihan.

### 14.8 Titik Temu, Start, dan Finish Publik

Tampilkan tiga informasi:

- titik temu fleksibel;
- area start;
- area finish.

Berikan catatan:

> Lokasi rinci diberikan setelah pemesanan dan susunan perjalanan dikonfirmasi.

Jangan membuat tautan peta.

### 14.9 Paket Terkait

Hubungan Paket–Rute spesifik belum final.

Implementasi awal harus menampilkan fallback generik:

Judul:

`Pilih Paket untuk Rute Ini`

Isi:

> Rute dapat digunakan dalam susunan Paket yang berbeda sesuai peserta, durasi, aktivitas, cuaca, dan kondisi lapangan. Tim WNB akan membantu memilih kombinasi yang paling sesuai.

CTA:

- `Lihat Daftar Paket`;
- `Rencanakan Perjalanan`.

Jangan mengubah `routeSlugs` di data Paket.

Struktur boleh disiapkan agar daftar Paket spesifik dapat ditambahkan kemudian, tetapi jangan menampilkan data kosong, array kosong, atau label “belum terverifikasi” kepada pengguna.

### 14.10 Catatan Keselamatan Publik

Tampilkan `publicSafetyNotes` dan catatan umum:

- kondisi Rute diperiksa sebelum perjalanan;
- peserta wajib mengikuti arahan kru;
- Rute dapat disesuaikan, dialihkan, ditunda, atau tidak digunakan jika kondisi tidak memungkinkan;
- informasi publik bukan pengganti briefing perjalanan.

Jangan menampilkan:

- rumah sakit;
- nomor ambulans;
- kontak penjaga jalur;
- titik evakuasi;
- alat recovery;
- detail winching;
- daftar penyakit;
- usia minimum yang belum disahkan sebagai kebijakan final.

### 14.11 CTA Perencanaan

CTA utama:

`Rencanakan Rute Ini`

Arahkan ke:

```text
/booking
```

Boleh membawa query sederhana apabila pola booking yang sekarang sudah mendukungnya. Jangan mengubah BookingPage hanya untuk menambah query baru.

CTA sekunder:

`Kembali ke Daftar Rute`

---

## 15. ATURAN VISUAL

Gunakan gaya website WNB yang sudah ada:

- dark background;
- warna aksen dan border dari token `wnb-*`;
- tipografi display uppercase untuk heading utama;
- container dan spacing konsisten;
- rounded corner mengikuti token;
- icon `lucide-react`;
- hover dan focus state yang jelas;
- tampilan editorial dan profesional;
- hindari kartu yang terlalu ramai;
- hindari gradient atau dekorasi baru yang tidak sesuai identitas;
- jangan menambahkan warna hard-coded apabila token yang sesuai sudah tersedia.

Gunakan komponen umum yang sudah ada seperti:

```text
Container
LinkButton
```

Jangan menyalin seluruh kode halaman Paket secara mentah. Gunakan pola dan kualitasnya sebagai referensi.

---

## 16. RESPONSIVE DAN ACCESSIBILITY

Wajib memenuhi:

1. mobile 320–375 px tetap dapat dibaca;
2. tidak ada horizontal overflow;
3. filter dapat digunakan dengan keyboard;
4. gunakan `aria-pressed` pada tombol filter;
5. icon dekoratif menggunakan `aria-hidden="true"`;
6. breadcrumb memiliki `aria-label`;
7. heading berurutan secara logis;
8. link memiliki teks yang jelas;
9. focus state terlihat;
10. fallback visual tidak mengandalkan warna saja;
11. alt text menggunakan data `media.alt`;
12. jangan membuat nested `<main>` karena `MainLayout` sudah menyediakan elemen `<main id="main-content">`;
13. halaman Rute cukup menggunakan wrapper `<div>` atau `<section>` di dalam layout;
14. tidak boleh ada duplikasi `id="main-content"`.

---

## 17. PERFORMA DAN KUALITAS KODE

- gunakan TypeScript strict sesuai konfigurasi repository;
- jangan gunakan `any`;
- jangan duplikasi data Rute di page component;
- data harus berada di `routesData.ts`;
- semua lookup slug melalui helper;
- gunakan key stabil berupa `route.id` atau `route.slug`;
- jangan membuat fetch network;
- jangan membaca Google Drive saat runtime;
- jangan memasukkan secret;
- jangan membuat state yang tidak diperlukan;
- jangan memasang library baru;
- gunakan lazy loading jika gambar nyata ditambahkan kemudian;
- fallback tidak boleh menghasilkan broken image.

---

## 18. URUTAN EKSEKUSI

### Tahap A — Pemeriksaan Awal

1. baca struktur repository terbaru;
2. baca:
   - `routePaths.ts`;
   - `AppRoutes.tsx`;
   - halaman Paket;
   - komponen umum;
   - token style;
3. pastikan HEAD tidak lebih lama dari commit acuan;
4. jika HEAD lebih baru, pertahankan seluruh perubahan baru;
5. jangan reset atau checkout ke commit lama.

### Tahap B — Data dan Type

1. buat `routesTypes.ts`;
2. buat `routesData.ts`;
3. masukkan RT-01 sampai RT-10;
4. buat filter dan helper;
5. pastikan tidak ada data internal.

### Tahap C — Komponen

1. buat `RouteMediaView`;
2. buat `RouteCard`;
3. buat `RouteFilter`;
4. uji rendering tanpa gambar.

### Tahap D — Daftar Rute

1. hapus placeholder;
2. buat seluruh section sesuai urutan;
3. tampilkan sepuluh kartu;
4. uji filter;
5. uji navigasi semua kartu.

### Tahap E — Detail Rute

1. hapus placeholder;
2. buat lookup slug;
3. buat 404 lokal;
4. buat seluruh section;
5. uji sepuluh slug;
6. uji RT-10 sebagai Rute Khusus.

### Tahap F — Pemeriksaan

1. periksa tidak ada perubahan halaman Paket;
2. periksa tidak ada `routeSlugs` yang diisi;
3. periksa tidak ada koordinat atau data internal;
4. jalankan typecheck;
5. jalankan build;
6. periksa tampilan mobile dan desktop;
7. periksa broken image;
8. periksa console error.

---

## 19. DAFTAR SLUG WAJIB

Seluruh URL berikut wajib berhasil:

```text
/rute/sukawana-cikole
/rute/cikole-sukawana-jalur-balik
/rute/sukawana-puncak-upas
/rute/lingkar-hutan-pinus-cikole
/rute/trek-klasik-jayagiri-cikole
/rute/puncak-gunung-putri-cikole
/rute/situ-cileunca-hutan-rahong
/rute/rancabali-lumpur-eretan
/rute/trek-kebun-teh-gambung
/rute/rute-khusus-bogor
```

URL tidak valid seperti berikut harus menampilkan state 404 Rute:

```text
/rute/rute-yang-tidak-ada
```

---

## 20. PENGUJIAN WAJIB

Jalankan dari root repository menggunakan script yang sesuai workspace.

Minimal:

```bash
npm run typecheck
npm run build
```

Apabila script root berbeda, baca `package.json` dan jalankan perintah workspace yang benar tanpa mengubah dependency.

Lakukan pemeriksaan manual:

### Daftar Rute

- `/rute` menampilkan 10 kartu;
- urutan RT-01 sampai RT-10 benar;
- semua filter bekerja;
- RT-10 tetap tampil;
- tidak ada broken image;
- tidak ada teks placeholder lama;
- tidak ada janji peta atau data “akurat”;
- tidak ada difficulty internal.

### Detail Rute

- sepuluh slug berhasil;
- breadcrumb benar;
- informasi area dan durasi benar;
- titik temu bersifat umum;
- section Paket menggunakan fallback generik;
- section keselamatan hanya memuat informasi publik;
- RT-10 memiliki perlakuan khusus;
- slug tidak valid menampilkan 404 lokal.

### Regression

- `/paket` tetap bekerja;
- `/paket/:slug` tetap bekerja;
- navbar dan mobile navigation tetap bekerja;
- Beranda dan Tentang Kami tidak berubah;
- tidak ada TypeScript error;
- tidak ada build error.

---

## 21. KRITERIA PENERIMAAN

Plan 010 dianggap selesai hanya jika:

- [ ] placeholder Daftar Rute dihapus;
- [ ] placeholder Detail Rute dihapus;
- [ ] tersedia satu sumber data Rute terpusat;
- [ ] RT-01 sampai RT-10 tercantum lengkap;
- [ ] seluruh kartu mengarah ke slug yang benar;
- [ ] seluruh slug menampilkan halaman Detail Rute;
- [ ] slug tidak valid menampilkan 404 Rute;
- [ ] filter/pengelompokan bekerja;
- [ ] fallback visual tampil tanpa broken image;
- [ ] durasi dinyatakan indikatif;
- [ ] RT-10 ditampilkan sebagai Rute Khusus;
- [ ] data internal tidak tampil;
- [ ] tidak ada peta atau koordinat;
- [ ] hubungan Paket–Rute spesifik tidak dipaksakan;
- [ ] `packagesData.ts` tidak diubah untuk mengisi `routeSlugs`;
- [ ] tidak ada dependency baru;
- [ ] responsive mobile dan desktop;
- [ ] aksesibilitas dasar terpenuhi;
- [ ] typecheck lulus;
- [ ] build lulus;
- [ ] tidak ada commit atau push otomatis.

---

## 22. FORMAT LAPORAN SETELAH EKSEKUSI

Setelah selesai, jangan langsung commit.

Berikan laporan dengan format:

```md
# LAPORAN EKSEKUSI PLAN 010

## Ringkasan
- ...

## File Dibuat
- ...

## File Diubah
- ...

## Hasil Implementasi
- Daftar Rute:
- Detail Rute:
- Filter:
- Fallback visual:
- Rute Khusus Bogor:
- 404 Rute:

## Pemeriksaan Data Publik
- Data internal tidak ditampilkan:
- Hubungan Paket–Rute tidak dipaksakan:
- routeSlugs Paket tidak diubah:

## Pengujian
- Typecheck:
- Build:
- Pemeriksaan manual:
- Console:

## Catatan
- ...

## Status
SIAP DIREVIEW / MASIH MEMERLUKAN PERBAIKAN
```

Jika ada kegagalan build atau keputusan yang tidak dapat diselesaikan, jelaskan penyebab sebenarnya. Jangan menyatakan berhasil apabila belum diuji.

---

## 23. INSTRUKSI PENUTUP

Kerjakan Plan 010 secara fokus dan konservatif.

Prioritas utama:

1. data publik benar;
2. seluruh RT-01 sampai RT-10 tampil;
3. Detail Rute dapat dibuka;
4. tidak ada informasi internal bocor;
5. tampilan konsisten dengan website saat ini;
6. tidak merusak Plan 009B;
7. build lulus.

Jangan memperluas scope ke Galeri, Booking, Sistem, aset foto, atau perubahan Paket. Setelah Plan 010 selesai dan dilaporkan, berhenti dan tunggu pemeriksaan pengguna.
