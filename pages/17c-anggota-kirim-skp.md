# Anggota: kirim SKP triwulan untuk dinilai

<span v-click="1"></span><span v-click="2"></span>

<Shot id="skp-kirim" :clicks="$clicks" />

<!--
Setelah SKP triwulan dibuat, statusnya Sedang dibuat.
[click] Tambah RK masih bisa dilakukan selama statusnya Sedang dibuat. RK yang sudah ada tidak berubah.
[click] Kalau kegiatan sudah lengkap, anggota menekan Kirim untuk dinilai. Kinetik bertanya dulu, lalu SKP berstatus Sedang diperiksa. Tombolnya berubah menjadi Batalkan pengiriman, yang mengembalikan SKP ke Sedang dibuat selama atasan belum menilai. Kirim dan batal sudah kami uji langsung di kipApp pada SKP sendiri. Atasan menerima notifikasi dan menilai di kipApp.
-->
