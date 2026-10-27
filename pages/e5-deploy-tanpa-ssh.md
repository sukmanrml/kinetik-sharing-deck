# Deploy tanpa SSH: lima langkah yang bisa diulang

<div class="flow">
<div class="step"><span class="n">1</span><b>Migrasi</b>Perubahan struktur database dijalankan dari komputer lokal ke database produksi.</div>
<div class="step"><span class="n">2</span><b>Bangun</b>Satu skrip membuat berkas zip: aset jadi, dependensi, konfigurasi produksi.</div>
<div class="step"><span class="n">3</span><b>Unggah</b>Zip diunggah dan diekstrak lewat panel hosting.</div>
<div class="step"><span class="n">4</span><b>Setup</b>Satu alamat khusus menjalankan cache dan tautan penyimpanan, lalu menghapus dirinya.</div>
<div class="step goal"><span class="n">5</span><b>Periksa</b>Buka halaman, lihat apakah jalan.</div>
</div>

<p class="small" style="margin-top:1rem">Jadwal otomatis (sinkronisasi, pengingat) memakai Task Scheduler hosting yang memanggil satu perintah tiap lima menit.</p>

<!--
Deploy tanpa SSH. Dengan hosting bersama, kami tidak bisa masuk ke server dan menjalankan perintah seenaknya. Jadi prosesnya kami buat tetap sederhana dan bisa diulang.
Satu, migrasi. Perubahan struktur database dijalankan dari komputer lokal langsung ke database produksi. Dua, satu skrip membuat berkas zip berisi aset jadi, dependensi, dan konfigurasi produksi. Tiga, zip diunggah dan diekstrak lewat panel hosting. Empat, kami membuka satu alamat setup yang menjalankan cache, lalu menghapus dirinya sendiri. Lima, kami membuka aplikasi dan memeriksa.
Satu pesan buat siapa pun yang sering deploy manual: tulis langkahnya jadi skrip. Setelah skrip itu ada, deploy berhenti menjadi acara menegangkan.
Jadwal otomatis, seperti sinkronisasi dan pengingat, memakai Task Scheduler hosting yang memanggil satu perintah tiap lima menit.
-->
