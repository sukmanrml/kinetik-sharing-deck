# Jalan masuk ke e-Kinerja: tiga opsi, satu yang sah

<p class="lead" style="margin:.1rem 0 .4rem">Kami memeriksa cara MyASN dan e-Kinerja saling bicara, untuk tahu jalan mana yang bisa Kinetik tempuh.</p>

<div class="grid3 compact">
<div v-click class="card"><b>Tiru kipApp</b><br><span class="small">Simpan kata sandi ASN Digital, login otomatis seperti kipApp. Tidak bisa: setiap login memakai captcha dan kode OTP, dan itu memang sengaja mencegah login otomatis. Kami tidak akan membuatnya.</span></div>
<div v-click class="card ok"><b>Login resmi (OIDC)</b><br><span class="small">Tombol "Masuk dengan ASN Digital": pegawai diarahkan ke halaman BKN, mengisi captcha dan OTP sendiri, lalu kembali ke Kinetik dengan token. Kami sudah memastikan BKN memvalidasi redirect_uri secara ketat, jadi jalan ini hanya terbuka bila BKN mendaftarkan Kinetik sebagai aplikasi resmi.</span></div>
<div v-click class="card ok"><b>Ekstensi peramban</b><br><span class="small">Pegawai login sendiri seperti biasa di e-Kinerja. Ekstensi membaca data lewat sesi yang sudah masuk itu, lalu menyalinnya ke Kinetik. Tidak menyimpan kata sandi, tidak melewati captcha atau OTP. Perlu konfirmasi dulu dari BKN soal aturan pakainya.</span></div>
</div>

<div v-click class="card" style="margin-top:.6rem"><b>Temuan tambahan:</b> dari kode e-Kinerja kami mendaftar 93 alamat API sisi pegawai (SKP, RHK, kegiatan harian, tim kerja, angka kredit). Bila BKN membuka akses, inilah yang akan dipakai Kinetik.</div>

<!--
Kami memeriksa tiga cara Kinetik bisa terhubung ke e-Kinerja, dengan memeriksa kode yang sudah dipublikasikan BKN sendiri.
[click] Cara pertama, meniru kipApp: simpan kata sandi, login otomatis. Tidak bisa, dan kami tidak akan membuatnya, karena ASN Digital sengaja memasang captcha dan OTP di setiap login untuk mencegah login otomatis semacam itu.
[click] Cara kedua, login resmi lewat OIDC, seperti tombol "Masuk dengan Google". Pegawai tetap mengisi captcha dan OTP sendiri di halaman BKN. Kami mencoba memakai alamat kembali milik aplikasi lain dan ditolak, jadi terbukti BKN memvalidasi dengan ketat. Jalan ini sah, tetapi hanya terbuka bila BKN mendaftarkan Kinetik.
[click] Cara ketiga, ekstensi peramban: pegawai login sendiri seperti biasa, ekstensi membaca data dari sesi yang sudah masuk itu. Tidak menyimpan kata sandi. Ini masih perlu dikonfirmasi ke BKN soal aturan pakainya sebelum dipakai di seluruh kantor.
Kami juga mendaftar 93 alamat API sisi pegawai dari kode e-Kinerja, sebagai persiapan bila akses dibuka.
-->
