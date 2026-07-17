# Visual Direction Document — WNB

Dokumen ini memandu arah estetika dan visual antarmuka aplikasi **WNB (Wisata Ngaprak Bandung)** berdasarkan mockup referensi yang telah disediakan.

---

## 1. Karakter Desain (Design Character)

Gaya visual WNB ditargetkan untuk membangkitkan nuansa petualangan alam bebas yang berani namun tetap dikemas secara profesional dan modern.

*   **Adventure & Rugged:** Kuat, kokoh, bertekstur alam bebas, cocok untuk aktivitas off-road dan Land Rover Classic Adventure.
*   **Modern & Bold:** Menggunakan garis batas yang tipis dan kontras yang tinggi untuk tampilan modern dan premium.
*   **Monokrom & Profesional:** Didominasi oleh warna netral gelap (hitam/abu-abu) dan terang (putih) guna memperkuat kredibilitas dan keamanan penyedia jasa.

---

## 2. Palet Warna (Color Palette)

Aplikasi ini menggunakan skema warna terkurasi dengan kontras tinggi:

*   **Warna Latar Gelap (Primary Background):** Hitam pekat (`#0D0D0D` atau `#121212`) untuk memberikan nuansa premium dan tangguh.
*   **Warna Latar Terang (Section Alternatif):** Abu-abu sangat muda atau Putih (`#F9F9F9` atau `#FFFFFF`) digunakan secara selektif untuk area teks dokumen/syarat agar mudah dibaca.
*   **Warna Teks Utama:** Putih (`#FFFFFF`) di atas latar gelap, dan Hitam/Abu-abu gelap (`#1A1A1A`) di atas latar terang.
*   **Warna Aksen Visual:** Warna alami dari fotografi (hijau kebun teh, cokelat tanah lumpur, biru langit) menjadi aksen alami di atas kanvas monokrom.

---

## 3. Tipografi (Typography)

*   **Font Heading:** Disarankan menggunakan font sans-serif tebal dan berukuran besar (misal: *Outfit*, *Inter*, atau *Montserrat*) dengan banyak penggunaan huruf kapital (*UPPERCASE*) untuk memberikan kesan berani (*bold*).
*   **Font Body:** Menggunakan sans-serif standar yang memiliki keterbacaan tinggi pada berbagai ukuran layar (misal: *Inter* atau *Roboto*).
*   **Gaya Kondensasi:** Pada judul hero atau heading besar, dapat dieksplorasi gaya font agak merapat (*condensed*) untuk meniru estetika majalah petualangan modern.

---

## 4. Arahan Fotografi (Photography Direction)

Fotografi adalah elemen visual terpenting dalam aplikasi ini.
*   Menggunakan foto nyata Land Rover klasik WNB di medan off-road berlumpur atau berliku.
*   Foto lanskap alam Bandung (TBD — lokasi mengikuti area operasional WNB yang telah dikonfirmasi oleh pemilik proyek) dengan kontras tinggi.
*   Perpaduan foto berwarna penuh (untuk keindahan alam) dan filter hitam-putih bersaturasi rendah pada elemen latar belakang guna mempertegas nuansa *rugged*.

---

## 5. Komponen Visual Utama

### Card (Kotak Informasi)
*   Menggunakan latar abu-abu gelap (`#1F1F1F`).
*   Sudut kotak dengan radius sedang (`rounded-lg` atau `rounded-xl`).
*   Batas tepi tipis (*border*) berwarna abu-abu terang redup untuk memisahkan card dari latar belakang hitam.
*   Efek hover halus (seperti sedikit terangkat atau border menjadi lebih terang) untuk memberikan kesan dinamis.

### Tombol (Buttons)
*   **Tombol Utama (Primary):** Berlatar putih (`#FFFFFF`) dengan teks hitam pekat di atas background gelap. Memberikan kontras maksimal untuk memancing klik.
*   **Tombol Sekunder (Secondary):** Tanpa latar belakang dengan border putih tipis (*outline*) untuk tindakan yang kurang kritis.
*   **Hover State:** Animasi transisi warna latar belakang dan teks yang mulus (0.2 detik).

### Pembatas Section (Section Dividers)
*   Sebagai opsi estetik, dapat digunakan grafis pemisah berupa siluet garis gunung atau bentuk sobekan kasar (*rough edges*) untuk menegaskan estetika petualangan di sela-sela perpindahan seksi halaman.

---

## 6. Prinsip Penggunaan Mockup (Yang Tidak Boleh Ditiru Mentah-mentah)

Mockup adalah **arah visual**, bukan blueprint statis yang harus ditiru secara mutlak:

*   **Hindari Placeholder:** Jangan salin teks bawaan seperti *"Lorem Ipsum"* atau teks acak yang tidak bermakna ke dalam produk final.
*   **Jangan Hardcode Tautan Lokal:** Pastikan tidak ada tautan aset gambar yang merujuk pada alamat harddrive komputer lokal (misal: `C:\Users\...` atau `file:///D:/...`).
*   **Jumlah Data Dinamis:** Jumlah card paket/rute pada grid tidak harus sama persis dengan jumlah di mockup. Tampilan grid harus menyesuaikan dengan data lokal/backend yang sesungguhnya.
*   **Detail Final:** Detail teks spesifik mengenai harga, durasi rute, dan nama armada dapat disesuaikan kemudian hari setelah mendapat konfirmasi resmi pemilik proyek.
