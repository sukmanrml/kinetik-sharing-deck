# Anggota (5/5): form Realisasi

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span><span v-click="7"></span>

<Shot id="member-capaian" :clicks="$clicks" />

<!--
Ini detail satu kegiatan. Di bagian bawah ada form Realisasi, tempat anggota mengisi capaian.
[click] Pertama, di bagian atas ada detail kegiatan: tanggal, target, capaian, dan statusnya.
[click] Kedua, capaian diisi berupa angka, supaya bisa dijumlahkan di rekap.
[click] Ketiga, progres dalam persen. Terhitung sendiri dari capaian dibagi target, dan masih bisa diubah.
[click] Keempat, bukti dukung berupa link.
[click] Kelima, uraian. Teks ini yang ikut dikirim ke kipApp.
[click] Keenam, Salin kegiatan, untuk memakai kegiatan ini sebagai dasar kegiatan baru.
[click] Ketujuh, simpan realisasi. Setelah itu kegiatan siap dikirim ke atasan.
-->
