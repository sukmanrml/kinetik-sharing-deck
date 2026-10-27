# Pengujian: tes ikut dalam perubahan yang sama

<div class="flow">
<div class="step"><span class="n">1</span><b>Tulis tes</b>Bersama kode fitur, dalam commit yang sama. Tidak ditunda.</div>
<div class="step"><span class="n">2</span><b>Pull request</b>Setiap perubahan lewat PR. Tidak ada yang langsung ke cabang utama.</div>
<div class="step"><span class="n">3</span><b>CI otomatis</b>Gaya kode PHP dan frontend, pemeriksaan tipe, tes, build, pemindaian kerentanan.</div>
<div class="step goal"><span class="n">4</span><b>Persetujuan orang lain</b>Akun yang berbeda menyetujui, lalu digabung.</div>
</div>

<div class="card" style="margin-top:1rem"><b>Aturan praktis:</b> tidak ada panggilan langsung ke kipApp produksi untuk menguji. Kami mengikuti parameter yang dipakai API itu sendiri, dan memastikannya dengan Mock.</div>

<!--
Pengujian. Kami menulis tes bersama kode fitur, dalam commit yang sama. Tidak ditunda ke nanti, karena nanti biasanya tidak pernah datang.
Setiap perubahan lewat pull request. Server CI menjalankan enam pemeriksaan: gaya kode PHP, gaya kode frontend, pemeriksaan tipe TypeScript, tes, build, dan pemindaian kerentanan. Satu yang gagal, perubahan tidak bisa digabung.
Lalu orang lain, atau akun lain, menyetujui. Aturan ini terasa lambat di awal, tapi menyelamatkan kami beberapa kali.
Satu aturan praktis yang penting: kami tidak menguji dengan memanggil kipApp produksi. Fitur yang menulis ke kipApp ditulis mengikuti parameter yang dipakai API itu sendiri, diperiksa dengan Mock, dan baru dinyalakan lewat saklar saat siap.
-->
