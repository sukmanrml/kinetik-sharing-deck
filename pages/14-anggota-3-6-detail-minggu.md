# Anggota (2/5): detail minggu

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span>

<Shot id="member-week-detail" :clicks="$clicks" />

<!--
Setelah memilih minggu, anggota masuk ke halaman detail minggu. Di sinilah semua pekerjaan anggota dilakukan.
[click] Pertama, tabel Capaian minggu lalu. Ini bahan evaluasi untuk Senin pagi, tanpa pindah halaman.
[click] Kedua, tabel Rencana minggu ini, berisi kegiatan yang direncanakan dan yang sudah berjalan.
[click] Ketiga, kolom cari, untuk mencari kegiatan atau RK.
[click] Keempat, tombol Sinkronkan data saya. Tombol ini hanya mengambil kegiatan terbaru dari kipApp ke Kinetik. Untuk arah sebaliknya, Kinetik mengirim kegiatan ke kipApp sendiri tiap jam kerja pada tanggal mulainya, atau anggota menekan Kirim ke kipApp di detail kegiatan. Alurnya ada di slide Dari Kinetik ke kipApp.
[click] Kelima, tombol Tambah. Ini pintu masuk untuk menambah kegiatan atau rencana, dan formnya ada di slide berikutnya.
-->
