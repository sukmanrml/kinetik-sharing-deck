# Mengapa RK sulit dipasangkan ke projek

<p class="lead" style="margin:.1rem 0 .4rem">kipApp punya ID untuk tim, projek, dan RK. Tetapi dua daftar RK yang kami baca tidak memakai ID yang sama.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem .9rem;font-size:.78rem;align-items:start">

<div class="card ok" style="padding:.35rem .6rem"><b>Sisi projek</b> (rk/proyek)
<div style="display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;margin-top:.3rem">
<span class="card" style="padding:.15rem .4rem">Tim<br><code>timkerjaid</code></span><span>→</span>
<span class="card" style="padding:.15rem .4rem">Projek<br><code>proyekid</code></span><span>→</span>
<span class="card" style="padding:.15rem .4rem">RK Anggota<br><code>rkproyekid</code></span></div>
<span class="small">ID-nya jelas: satu baris per anggota per projek.</span></div>

<div v-click class="card warn" style="padding:.35rem .6rem"><b>Sisi SKP dan kegiatan</b> (skp/rk)
<div style="display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;margin-top:.3rem">
<span class="card" style="padding:.15rem .4rem">SKP pegawai</span><span>→</span>
<span class="card" style="padding:.15rem .4rem">RK SKP<br><code>rkid</code></span><span>→</span>
<span class="card" style="padding:.15rem .4rem">Kegiatan</span></div>
<span class="small">Inilah RK yang tersimpan di Kinetik.</span></div>
</div>

<div v-click style="text-align:center;margin:.35rem 0;font-size:.85rem"><span class="card" style="display:inline-block;padding:.2rem .8rem;border:2px dashed #d97706"><code>rkid</code> &nbsp;≟&nbsp; <code>rkproyekid</code> &nbsp;— belum ada kolom penghubung yang kami temukan, jadi dipasangkan lewat <b>teks RK</b></span></div>

<div v-click style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem;font-size:.85rem;text-align:center">
<div class="card" style="padding:.3rem"><b>1.006</b> RK<br><span class="small">belum punya projek</span></div>
<div class="card ok" style="padding:.3rem"><b>537</b> RK<br><span class="small">dipasangkan lewat teks yang sama</span></div>
<div class="card warn" style="padding:.3rem"><b>469</b> RK<br><span class="small">tidak ada di projek mana pun di kipApp (mis. RK tambahan), atau teksnya ambigu</span></div>
</div>

<div v-click class="card" style="margin-top:.45rem;padding:.3rem .7rem;font-size:.82rem"><b>Risikonya:</b> teks bisa diubah di satu tempat saja, atau sama di dua projek. Bila kipApp menyediakan ID penghubung, pemasangan jadi pasti dan tidak lagi bergantung pada teks.</div>

<!--
Ini sebabnya sebagian RK tampil tanpa projek. kipApp punya ID untuk tim, projek, dan RK.
[click] Dari sisi projek, ID-nya jelas: tim, projek, lalu RK Anggota, satu baris per anggota per projek.
[click] Tetapi RK yang tersimpan di Kinetik datang dari sisi SKP pegawai dan kegiatan. Di sana RK punya ID lain.
[click] Dalam data yang kami baca, kami belum menemukan kolom yang menghubungkan kedua ID itu. Jadi kami memasangkannya lewat teks RK.
[click] Hasilnya: dari 1.006 RK tanpa projek, 537 berhasil dipasangkan lewat teks yang sama. 469 sisanya tidak ada di projek mana pun di kipApp, misalnya RK tambahan, atau teksnya muncul di dua projek sehingga ambigu.
[click] Risikonya: teks bisa berubah di satu tempat saja. Langkah berikutnya adalah memeriksa apakah data SKP kipApp menyimpan ID penghubung. Kalau ada, pemasangan jadi pasti.
-->
