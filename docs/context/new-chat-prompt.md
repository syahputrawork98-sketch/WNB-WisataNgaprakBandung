# New Chat Handoff Prompt — WNB

Dokumen ini menyediakan templat instruksi pembuka (*handoff prompt*) yang digunakan untuk memigrasikan status proyek ke room ChatGPT baru demi menjaga keberlanjutan konteks dan meminimalisasi overhead token.

---

## 1. Templat Instan Siap Pakai (Current Ready-to-Use Prompt)
Salin seluruh teks di dalam blok kutipan berikut dan tempelkan langsung sebagai pesan pertama pada room ChatGPT baru Anda:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
c30d027bc33113412b3f596685cb43990888ee48

Sebelum memberikan rekomendasi atau membuat Rencana Implementasi (Implementation Plan):

1. Baca repository terbaru.
2. Baca dokumen berikut secara berurutan:
   - docs/context/current-state.md
   - docs/context/business-facts.md
   - docs/context/project-context.md
   - docs/context/workflow-rules.md
   - docs/context/README.md
3. Periksa perbedaan antara repository HEAD dan latest verified implementation commit.
4. Jangan menyebut commit baru sebagai verified sebelum diperiksa.
5. Gunakan repository dan docs/context sebagai sumber kebenaran utama.
6. Jangan mengandalkan memori percakapan saja.
7. Jangan mulai Plan 006 atau mengubah kode.
8. Kita akan berdiskusi dahulu mengenai arah tahap berikutnya.
9. Pertahankan workflow:
   - ChatGPT sebagai planner dan reviewer.
   - Gemini Antigravity sebagai executor.
   - Saya sebagai pemilik keputusan dan pemeriksa manual.
10. Setiap implementation plan harus mencantumkan model Antigravity yang paling efisien dalam penggunaan token.

Setelah membaca, berikan:
- ringkasan kondisi proyek,
- latest verified implementation commit,
- halaman yang sudah selesai,
- halaman yang masih placeholder,
- open corrections,
- hal yang perlu kita diskusikan sebelum Plan 006.
```

---

## 2. Templat Generik Reusable (Generic Reusable Template)
Gunakan templat di bawah ini di masa mendatang jika Anda perlu membuka room baru setelah milestone implementasi lainnya selesai:

```text
Kita melanjutkan proyek WNB — Wisata Ngaprak Bandung.

Repository:
syahputrawork98-sketch/WNB-WisataNgaprakBandung

Latest verified implementation commit:
<ISI_DARI_CURRENT_STATE>

Sebelum menjawab:
- baca docs/context/current-state.md,
- baca docs/context/business-facts.md,
- baca docs/context/project-context.md,
- baca docs/context/workflow-rules.md,
- periksa repository HEAD,
- jangan mengarang fakta bisnis,
- jangan mulai plan berikutnya sebelum diskusi.

Tugas room ini:
<TULIS_TUJUAN_DISKUSI_ROOM_BARU>
```

---

## 3. Instruksi Penggunaan (Usage Instructions)
1.  **Buka Project WNB:** Pastikan room ChatGPT baru berada di dalam workspace project WNB yang sama agar memiliki akses baca berkas lokal.
2.  **Kirim Prompt:** Tempelkan templat di atas pada pesan pertama tanpa menyertakan seluruh riwayat obrolan lama yang panjang.
3.  **Tinjau Balasan ChatGPT:** Pastikan ChatGPT membalas dengan merangkum status proyek saat ini, melampirkan daftar *open corrections*, serta memvalidasi SHA commit baseline dengan benar.
4.  **Mulai Diskusi:** Setelah ChatGPT menyelaraskan pemahamannya dengan dokumen konteks, Anda dapat memulai diskusi untuk menentukan cakupan rencana berikutnya.
