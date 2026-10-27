# Tantangan 1: tidak ada pintu resmi ke kipApp

<p class="lead">Cara pertama: token di-copy manual oleh admin.</p>

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<SyncFlow mode="manual" :clicks="$clicks" />

<div v-click="7" class="card warn" style="margin-top:.7rem;font-size:.9rem"><b>Kelemahannya:</b> bergantung pada satu orang, dan sync berhenti begitu token expired.</div>

<!--
Tantangan pertama: kipApp tidak membuka pintu resmi bagi sistem lain. Gambar ini menunjukkan cara pertama kami. Oranye berarti dikerjakan manual, biru berarti dikerjakan sistem.
[click] Admin login ke kipApp lewat SSO.
[click] Admin membuka DevTools di browser, dan di sana token muncul.
[click] Admin copy token yang panjang itu, lalu paste-nya di Kinetik.
[click] Barulah Kinetik bisa meminta data ke kipApp memakai token tersebut. Bagian ini otomatis.
[click] Data kegiatan masuk ke Kinetik.
[click] Tetapi token itu hanya berlaku dua puluh empat jam. Besok admin harus mengulang dari awal.
[click] Kelemahannya jelas: bergantung pada satu orang, dan sync berhenti begitu token expired.
-->
