# Pola yang menyelamatkan kami: kontrak dan tiruan

<div class="grid2">
<div class="card"><b>Kontrak.</b> Satu daftar "apa yang bisa dilakukan": ambil RK, kirim kegiatan, nilai SKP. Tidak peduli siapa yang menjalankannya.</div>
<div class="card"><b>Dua pelaksana.</b> <i>Api</i> bicara dengan kipApp sungguhan. <i>Mock</i> berpura-pura, dengan data contoh, untuk tes dan pengembangan.</div>
</div>

<div class="flow" style="margin-top:1rem">
<div class="step"><span class="n">1</span><b>Kode aplikasi</b>Memanggil kontrak, tidak tahu siapa pelaksananya.</div>
<div class="step goal"><span class="n">2</span><b>Satu saklar konfigurasi</b>Memilih Api atau Mock saat aplikasi menyala.</div>
<div class="step"><span class="n">3</span><b>Tes dan tangkapan layar</b>Selalu memakai Mock, tidak pernah menyentuh kipApp.</div>
</div>

<!--
Ini pola yang paling menyelamatkan kami. Namanya kontrak dan tiruan.
Kontrak itu daftar apa yang bisa dilakukan: ambil RK, kirim kegiatan, nilai SKP. Aplikasi hanya tahu kontrak ini. Di belakangnya ada dua pelaksana. Api berbicara dengan kipApp sungguhan. Mock berpura-pura, dengan data contoh.
Satu saklar konfigurasi memilih yang mana saat aplikasi menyala. Tes dan tangkapan layar buku pedoman selalu memakai Mock.
Manfaatnya ada tiga. Pertama, kami tidak pernah menguji dengan data pegawai sungguhan. Kedua, kami bisa membangun fitur sebelum API-nya jelas. Ketiga, ketika kipApp berubah, yang perlu diperbaiki hanya satu tempat.
Ini bukan trik khusus Laravel. Pola yang sama bisa dipakai di tim mana pun yang bergantung pada sistem milik pihak lain.
-->
