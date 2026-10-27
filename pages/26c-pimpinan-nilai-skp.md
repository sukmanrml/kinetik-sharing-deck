# Pimpinan: menilai SKP triwulan dari Kinetik

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<Shot id="skp-nilai" :clicks="$clicks" />

<!--
Ini halaman Nilai SKP, sudah menyala di produksi. Datanya contoh.
[click] Bahan penilaian dari Kinetik tampil di atas form, jadi atasan menilai sambil melihat kegiatan dan capaian.
[click] Nilai 0 sampai 100 untuk tiap RK.
[click] Tingkat muncul sendiri mengikuti tabel kipApp: 99 ke atas di atas ekspektasi, 80 sampai 98 sesuai ekspektasi, di bawah 80 di bawah ekspektasi. Untuk perilaku batasnya 91 dan 80.
[click] Umpan balik boleh dikosongkan.
[click] Simpan mengirim nilai ke kipApp dengan akun atasan. Satu baris, satu simpan.
[click] Tujuh perilaku BerAKHLAK dinilai sama. Tombol Selesai menilai baru aktif setelah semua RK dan perilaku punya nilai, lalu SKP menjadi Dinilai.
Satu catatan jujur: ini nilai resmi seseorang, dan kami baru menguji pembacaan datanya, belum penulisannya. Karena itu SKP pertama diisi bersama atasan, lalu kami periksa hasilnya di kipApp.
-->
