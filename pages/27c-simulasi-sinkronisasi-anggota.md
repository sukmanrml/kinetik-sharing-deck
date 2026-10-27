# Simulasi: sinkronisasi tiap anggota

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<MemberSyncFlow :clicks="$clicks" />

<div v-click="6" class="card ok" style="margin-top:.5rem;font-size:.85rem;line-height:1.3"><b>Tidak ada yang tertinggal diam-diam.</b> Sesi yang bisa diperbarui diperbarui sendiri. Yang tidak bisa, diberi tahu sekali dan menunggu, lalu langsung jalan begitu orangnya masuk lagi.</div>

<!--
Ini simulasi satu pagi dengan empat anggota. Warnanya: hijau berhasil, oranye menunggu, merah gagal.
[click] Jam lima lewat dua puluh, jadwal memasukkan satu pekerjaan sinkronisasi per anggota ke antrean. Hanya anggota yang pernah masuk ke Kinetik dan punya login tersimpan.
[click] Worker memeriksa sesi kipApp tiap anggota. Ani masih punya token yang berlaku. Budi tokennya kedaluwarsa, tetapi kata sandi yang tersimpan benar, jadi Kinetik login ulang sendiri. Citra mengganti kata sandi SSO-nya, jadi login ulang ditolak. Dedi kebetulan sedang mengalami BPS SSO mati.
[click] Hasilnya. Ani dan Budi tersinkron: kegiatan, RK, dan status SKP-nya. Citra masuk daftar tunggu dan diberi tahu sekali lewat lonceng. Dedi dicoba lagi tiap tiga puluh menit, tanpa notifikasi, karena itu bukan salahnya.
[click] Pagi berikutnya, Citra dilewati. Kinetik tidak mencoba kata sandi yang sudah ditolak berulang kali.
[click] Tak lama kemudian BPS SSO kembali. Percobaan ulang untuk Dedi berhasil dan datanya tersinkron.
[click] Citra masuk lagi ke Kinetik dengan kata sandi baru. Begitu login berhasil, sinkronisasinya langsung jalan, dan namanya hilang dari daftar tunggu.
[click] Intinya, tidak ada yang tertinggal diam-diam. Yang bisa diperbarui diperbarui sendiri. Yang tidak bisa diberi tahu sekali dan menunggu.
-->
