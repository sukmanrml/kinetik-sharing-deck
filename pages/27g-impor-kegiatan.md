# Admin: impor kegiatan dari Excel

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="impor-kegiatan" :clicks="$clicks" />

<!--
Tim yang masih memakai file Excel Kegiatan Mingguan Anggota tidak perlu mengetik ulang. Admin bisa mengimpornya.
[click] Pertama, pilih minggu untuk baris yang tidak punya tanggal, lalu pilih file.
[click] Kedua, Kinetik membaca file di browser, satu sheet per tim, dan mencocokkan pegawai, projek, dan RK. Ringkasan di atas tabel menunjukkan baris yang siap, yang perlu pilih RK, dan yang tidak bisa diimpor.
[click] Ketiga, bila RK tidak bisa ditentukan sendiri, admin memilihnya dari daftar di baris itu.
[click] Keempat, impor. Kegiatan masuk sebagai rencana, dan baris yang sudah ada dilewati.
-->
