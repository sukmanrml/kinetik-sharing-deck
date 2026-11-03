# Mengapa RK sulit dipasangkan ke projek, dan jalan yang ketemu

<p class="lead" style="margin:.1rem 0 .4rem">Daftar RK sisi SKP dan sisi projek memakai ID berbeda. ID yang sama ternyata ada di jalur ketiga.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem .9rem;font-size:.78rem;align-items:start">

<div class="card ok" style="padding:.35rem .6rem"><b>Sisi projek</b> (rk/proyek)
<div style="display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;margin-top:.3rem">
<span class="card" style="padding:.15rem .4rem">Projek<br><code>proyekid</code></span><span>→</span>
<span class="card" style="padding:.15rem .4rem">RK Anggota<br><code>rkproyekid</code> + pegawai</span></div></div>

<div v-click class="card warn" style="padding:.35rem .6rem"><b>Sisi SKP</b> (skp/rk)
<div style="display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;margin-top:.3rem">
<span class="card" style="padding:.15rem .4rem">RK SKP<br><code>rkid</code></span><span>→</span>
<span class="card" style="padding:.15rem .4rem">Kegiatan</span></div>
<span class="small">Tidak membawa ID projek.</span></div>
</div>

<div v-click class="card ok" style="margin:.4rem 0;padding:.3rem .7rem;font-size:.82rem"><b>Jalur ketiga: <code>skp/rk/copy</code></b>, daftar RK yang disalin pegawai ke SKP-nya. Isinya memakai <code>rkproyekid</code> yang sama dengan sisi projek (14 dari 14 cocok pada pegawai uji). Jadi RK tiap pegawai bisa dikaitkan ke projeknya dengan pasti, bukan lewat tebakan teks gabungan.</div>

<div v-click style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem;font-size:.85rem;text-align:center">
<div class="card" style="padding:.3rem"><b>1.247</b> RK pegawai<br><span class="small">tadinya 0 yang punya projek</span></div>
<div class="card ok" style="padding:.3rem"><b>1.122</b> RK<br><span class="small">kini terhubung pasti ke projek</span></div>
<div class="card warn" style="padding:.3rem"><b>125</b> RK<br><span class="small">tidak berada di projek mana pun, atau teksnya tidak cocok</span></div>
</div>

<div v-click class="card" style="margin-top:.45rem;padding:.3rem .7rem;font-size:.82rem"><b>Catatan:</b> kipApp sendiri tidak butuh hubungan ini (kegiatan menempel ke RK SKP), dan e-Kinerja tidak punya projek. Pemasangan ini hanya untuk Kinetik selama kipApp dipakai.</div>

<!--
Ini penemuan terpenting. Daftar RK di sisi projek memakai rkproyekid, sedangkan RK di SKP pegawai memakai rkid yang lain. Kami sempat mengira tidak ada kolom penghubung.
[click] RK di sisi SKP tidak membawa ID projek.
[click] Tetapi ada jalur ketiga: daftar salin RK ke SKP, yaitu skp/rk/copy. ID di dalamnya sama dengan rkproyekid di sisi projek. Kami uji pada satu pegawai: 14 dari 14 cocok. Artinya RK tiap pegawai punya projek yang pasti.
[click] Hasilnya di produksi: dari 1.247 RK pegawai, tadinya tidak satu pun punya projek. Sekarang 1.122 terhubung pasti. 125 sisanya memang tidak berada di projek mana pun di kipApp, atau teksnya tidak cocok.
[click] kipApp sendiri tidak membutuhkan hubungan ini, karena kegiatan menempel ke RK SKP. e-Kinerja malah tidak punya projek. Jadi ini hanya untuk Kinetik selama kipApp masih dipakai.
-->
