# Alur SKP dari awal tahun sampai dinilai

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span><span v-click="7"></span><span v-click="8"></span>

<SkpLifecycle :clicks="$clicks" />

<!--
Ini seluruh perjalanan SKP, dari awal tahun sampai angka kredit. Abu-abu artinya dikerjakan di kipApp, biru artinya bisa dikerjakan di Kinetik.
[click] Pertama, awal tahun. PK, IKU, RK Ketua, Proyek, dan RK Anggota dibuat di kipApp. Proyek mengelompokkan RK Anggota per tim, jadi di sinilah proyek berada. Kinetik hanya membaca semuanya.
[click] Kedua, anggota memilih RK Anggota untuk SKP Tahunannya dan mengisi IKI. Lalu SKP dikirim untuk ditetapkan, dari halaman SKP Saya di Kinetik atau dari kipApp. Bagian ini mengikuti kode kipApp dan belum kami uji langsung, karena semua SKP Tahunan kantor ini sudah ditetapkan.
[click] Ketiga, atasan mendapat notifikasi. Atasan anggota adalah PJ, dan atasan PJ adalah pimpinan. lalu menetapkan atau mengembalikan di halaman Persetujuan SKP, atau di kipApp. Ini juga belum diuji langsung.
[click] Keempat, setelah SKP Tahunan ditetapkan, anggota membuat SKP triwulan dan memilih RK-nya. Kalau lupa, Kinetik membuatnya sendiri saat mengirim kegiatan.
[click] Kelima, kegiatan. Rencana mingguan dikirim ke kipApp, ditandai selesai, lalu dikirim ke atasan. Ini sudah diuji langsung.
[click] Keenam, SKP triwulan dikirim untuk dinilai dari SKP Saya, dan masih bisa dibatalkan sebelum dinilai. Ini juga sudah diuji langsung.
[click] Ketujuh, atasan menilai tiap RK dan perilaku di kipApp. Penilaian bisa di Kinetik atau kipApp. Halaman Nilai di Kinetik sudah menyala, belum diuji dengan nilai asli.
[click] Kedelapan, setelah SKP berstatus Dinilai, Kinetik menghitung angka kredit sebagai estimasi dari predikatnya.
-->
