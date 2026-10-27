# Dari spreadsheet ke aplikasi: cerita Kinetik

Deck Slidev (Bahasa Indonesia, 16:9, 67 slide, sekitar 90 menit) untuk Insight Series BPS Provinsi Sulawesi Tengah.
Penyaji: Sukma Nirmala Dewi, S.Tr.Stat., Tim Metodologi dan Teknologi Informasi (MTI).

Bagian: 1 masalah dan gagasan (15 menit), 2 tur produk dengan demo (30), 3 di balik layar (25), 4 pelajaran (10), tanya jawab (10).

## Perintah

```bash
pnpm install
pnpm dev     # pratinjau di http://localhost:3030; catatan penyaji tampil di /presenter
pnpm build   # situs statis di dist/
pnpm export  # PDF
```

## Catatan penyaji

Naskah lisan ada di komentar HTML di akhir tiap berkas di `pages/`. Pada situs yang dipublikasikan, catatan hanya tampil bila alamatnya memakai `?showNotes=1`, misalnya `https://<pengguna>.github.io/kinetik-sharing-deck/?showNotes=1`. Alamat itu membuka tampilan presenter, dan parameternya terbawa saat pindah slide. Tanpa parameter, rute presenter dialihkan kembali ke slide.

Ini hanya menyembunyikan catatan dari pembaca biasa. Catatan tetap ada di berkas JavaScript dan di repositori publik, jadi jangan menaruh rahasia di dalamnya. Logikanya ada di `setup/main.ts`.

Bagian demo (slide 44) memakai akun contoh, bukan akun pegawai.
