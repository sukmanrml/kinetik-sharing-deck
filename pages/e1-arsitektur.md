# Gambaran teknis dalam satu slide

<div class="flow">
<div class="step"><span class="n">1</span><b>Tampilan</b>Vue 3 dan TypeScript, komponen shadcn-vue, Tailwind.</div>
<div class="step"><span class="n">2</span><b>Aplikasi</b>Laravel 13 dengan Inertia: satu proyek, tanpa API terpisah untuk tampilan.</div>
<div class="step"><span class="n">3</span><b>Data</b>PostgreSQL di produksi, SQLite untuk pengembangan dan CI.</div>
<div class="step goal"><span class="n">4</span><b>kipApp</b>Dibaca dan ditulis lewat satu lapisan khusus.</div>
</div>

<div class="card warn" style="margin-top:1rem"><b>Kendala hosting:</b> hosting bersama, tanpa akses SSH, versi PHP dan OpenSSL ditentukan penyedia. Banyak keputusan teknis lahir dari sini.</div>

<!--
Gambaran teknis dalam satu slide. Tidak perlu hafal, yang penting polanya.
Tampilan memakai Vue dengan TypeScript. Aplikasinya Laravel, dengan Inertia, yaitu cara menghubungkan Laravel dan Vue tanpa membuat API terpisah untuk tampilan. Datanya PostgreSQL di produksi. Untuk pengembangan dan CI kami pakai SQLite, jadi tes berjalan cepat, dan karena itu kami menjaga agar semua query bisa jalan di dua jenis database.
Lapisan terakhir, kipApp, tidak dipanggil dari mana-mana, hanya lewat satu lapisan khusus. Itu inti slide berikutnya.
Satu kendala yang membentuk banyak keputusan: kami memakai hosting bersama. Tidak ada SSH, dan versi PHP serta OpenSSL ditentukan penyedia. Nanti kita lihat dampaknya pada deploy dan keamanan.
-->
