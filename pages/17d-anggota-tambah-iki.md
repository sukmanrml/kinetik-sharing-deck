# Anggota: tambah IKI pada RK

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="skp-iki" :clicks="$clicks" />

<!--
SKP tidak bisa dikirim bila ada RK tanpa IKI, jadi anggota bisa menambahnya tanpa membuka kipApp. Fitur ini sudah dibuat dan bisa dimatikan admin. Datanya contoh.
[click] Tiap RK di SKP yang Sedang dibuat menampilkan IKI-nya. RK tanpa IKI menahan pengiriman.
[click] IKI ditulis dengan targetnya dalam satu kalimat, minimal 10 huruf. kipApp sendiri tidak punya kolom target terpisah, jadi target ikut di teksnya.
[click] Simpan IKI membuatnya di kipApp dengan akun anggota. IKI yang ditambah sendiri bisa dihapus, yang dari atasan tidak.
[click] Setelah semua RK punya IKI, tombol Kirim untuk dinilai aktif.
Isian kami baca dari kode kipApp sendiri dan belum dicoba langsung, jadi IKI pertama diperiksa di kipApp.
-->
