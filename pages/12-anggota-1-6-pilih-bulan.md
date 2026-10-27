# Anggota (1/5): pilih bulan, lalu minggu

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<Shot id="member-months" :clicks="$clicks" />

<!--
Alur anggota mulai dari sini: Rekap Mingguan, dan yang pertama tampil adalah daftar bulan. Contohnya data satu anggota.
[click] Pertama, pilih tahunnya.
[click] Kedua, kolom Kegiatan menunjukkan jumlah kegiatan anggota itu di tiap bulan.
[click] Ketiga, Capaian terisi menunjukkan berapa kegiatan yang sudah diisi capaiannya.
[click] Keempat, Terkirim ke atasan menunjukkan berapa kegiatan yang sudah dikirim.
[click] Kelima, status bulan itu. Belum ditulis artinya masih ada capaian yang belum diisi.
[click] Keenam, bulan yang sedang berjalan ditandai Sekarang. Klik satu bulan untuk lanjut ke daftar minggunya. Daftar minggu bentuknya sama: kolom Kegiatan, Capaian terisi, dan Terkirim, sekarang per minggu, jadi tidak perlu membuka banyak lembar. Klik satu minggu untuk membuka detailnya.
-->
