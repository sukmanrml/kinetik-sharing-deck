# PJ (1/4): pilih bulan, lalu minggu

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="pj-months" :clicks="$clicks" />

<!--
Sisi PJ juga mulai dari daftar bulan, sama seperti anggota. Ini halaman Rekap Tim untuk tim MTI, dengan datanya sendiri.
[click] Pertama, PJ memilih tim yang ia pimpin.
[click] Kedua, kolom Kegiatan menunjukkan jumlah kegiatan seluruh anggota tim di tiap bulan.
[click] Ketiga, RK dengan kegiatan dan RK sudah ditulis. Selisih keduanya adalah RK yang masih perlu parafrase.
[click] Keempat, status tiap bulan: Belum ada kegiatan, Belum ditulis, Sedang ditulis bila sebagian RK sudah ada parafrasenya, dan Selesai ditulis bila semuanya sudah. Klik satu bulan untuk lanjut ke daftar minggunya. Daftar minggu bentuknya sama, satu baris untuk satu minggu, dengan kolom RK dengan kegiatan dan RK sudah ditulis per minggu dan tombol kembali ke semua bulan. Klik satu minggu untuk membuka rekapnya.
-->
