# PJ (1/4): pilih bulan, lalu minggu

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="pj-months" :clicks="$clicks" />

<!--
Sisi PJ juga mulai dari daftar bulan, sama seperti anggota. Ini halaman Rekap Tim untuk tim MTI, dengan datanya sendiri.
[click] Pertama, PJ memilih tim yang ia pimpin.
[click] Kedua, kolom Kegiatan menunjukkan jumlah kegiatan seluruh anggota tim di tiap bulan.
[click] Ketiga, RK sudah ditulis dan Terkunci menunjukkan sejauh mana rekap bulan itu sudah dikerjakan.
[click] Keempat, status tiap bulan. Belum ditulis artinya parafrase belum ada. Klik satu bulan untuk lanjut ke daftar minggunya. Daftar minggu bentuknya sama, satu baris untuk satu minggu, dengan kolom RK sudah ditulis dan Terkunci per minggu dan tombol kembali ke semua bulan. Klik satu minggu untuk membuka rekapnya.
-->
