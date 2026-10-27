# Keamanan: yang kami lakukan dan alasannya

<div class="grid2 compact">
<div v-click class="card"><b>Lihat sebagai pengguna lain.</b> Admin bisa membantu pengguna, tetapi setiap perubahan dicatat, dan halaman identitas (kata sandi, profil, token kipApp) diblokir.</div>
<div v-click class="card"><b>Token tidak dibagi.</b> Setiap anggota memakai tokennya sendiri. Token admin hanya cadangan.</div>
<div v-click class="card"><b>Sertifikat TLS dibawa sendiri.</b> Hosting bersama membatasi pustaka TLS, jadi aplikasi membawa paket sertifikat dan memperbaruinya tiap bulan.</div>
<div v-click class="card"><b>Ketergantungan dipantau.</b> Pemindaian kerentanan jalan di setiap perubahan, dan versi yang rentan disematkan ke versi aman.</div>
<div v-click class="card"><b>Rahasia tidak masuk kode.</b> Kata sandi, token, dan kunci hanya ada di konfigurasi server dan tidak pernah di repositori.</div>
</div>

<!--
Keamanan, dengan apa adanya.
[click] Fitur lihat sebagai pengguna lain. Admin perlu ini untuk membantu. Tapi setiap perubahan dicatat dalam jejak audit, dan halaman yang menyangkut identitas, seperti kata sandi dan token kipApp, diblokir.
[click] Token tidak dibagi. Setiap anggota memakai tokennya sendiri. Token admin hanya cadangan.
[click] Sertifikat TLS. Hosting bersama membatasi pustaka TLS-nya. Jalan keluarnya: aplikasi membawa paket sertifikatnya sendiri dan memperbaruinya otomatis tiap bulan.
[click] Ketergantungan dipantau. Setiap perubahan dipindai kerentanannya, dan versi pustaka yang rentan disematkan ke versi aman.
[click] Terakhir, rahasia tidak masuk kode. Kata sandi, token, dan kunci hanya ada di konfigurasi server. Detail teknis lain sengaja tidak saya tampilkan di sesi terbuka, karena cerita keamanan yang terlalu rinci bisa berubah jadi petunjuk bagi orang yang salah.
-->
