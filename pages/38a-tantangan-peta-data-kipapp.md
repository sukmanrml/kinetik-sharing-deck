# Tantangan: memetakan data kipApp

<p class="lead" style="margin:.1rem 0 .5rem">Nama dan kunci yang sama tidak selalu tertulis sama. Kinetik harus memasangkannya sendiri.</p>

<div style="display:grid;grid-template-columns:1fr 70px 1fr;gap:.2rem .3rem;align-items:center;font-size:.78rem">
<div style="font-weight:700;color:var(--mute)">Excel tim (contoh)</div><div></div><div style="font-weight:700;color:var(--mute)">kipApp (yang tersimpan)</div>

<div v-click class="card ok" style="padding:.25rem .6rem">Manajemen Mitra</div>
<div style="text-align:center;color:#16a34a;font-weight:700">≈ ✓</div>
<div v-click class="card ok" style="padding:.25rem .6rem">Manajemen Mitra <b>Statistik</b></div>

<div v-click class="card warn" style="padding:.25rem .6rem">Koordinasi <b>Dinas dengan sekretariat</b> ISV IUP</div>
<div style="text-align:center;color:#d97706;font-weight:700">≈ ?</div>
<div v-click class="card warn" style="padding:.25rem .6rem">Koordinasi <b>Dinas/Instansi dengan Sekertariat</b> ISV IUP</div>

<div v-click class="card" style="padding:.25rem .6rem;border-color:#dc2626">Penyusunan Daftar Risiko</div>
<div style="text-align:center;color:#dc2626;font-weight:700">✕</div>
<div v-click class="card" style="padding:.25rem .6rem;border-color:#dc2626">Manajemen Risiko dalam Penyediaan Data Dan Insight … (16 projek)</div>
</div>

<div v-click style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem;margin-top:.6rem;font-size:.85rem;text-align:center">
<div class="card ok" style="padding:.3rem"><b>9</b> dari 29 nama projek<br><span class="small">sama persis</span></div>
<div class="card warn" style="padding:.3rem"><b>Mirip</b><br><span class="small">dicocokkan lewat kata yang sama</span></div>
<div class="card" style="padding:.3rem;border-color:#dc2626"><b>Tidak cocok</b><br><span class="small">diberi catatan, admin memilih RK</span></div>
</div>

<div v-click class="card" style="margin-top:.5rem;padding:.35rem .7rem;font-size:.85rem"><b>RK yang sama berulang</b> di beberapa projek dan anggota di kipApp: Kinetik menampilkannya sekali. Kinetik tidak menebak: bila ragu, manusia yang memilih.</div>

<!--
Tantangan lain yang jarang terlihat: memetakan data kipApp. Di kiri nama projek seperti tertulis di Excel tim, di kanan nama yang tersimpan di kipApp.
[click] Kadang hampir sama: "Manajemen Mitra" dan "Manajemen Mitra Statistik". Ini bisa dicocokkan otomatis.
[click] Kadang hanya beda tulisan: kata "Dinas dengan sekretariat" lawan "Dinas/Instansi dengan Sekertariat", bahkan ejaannya berbeda. Ini dicocokkan lewat kata yang sama bila hanya ada satu kandidat jelas.
[click] Kadang benar-benar beda: Excel menulis "Penyusunan Daftar Risiko", kipApp punya 16 projek "Manajemen Risiko dalam ...". Komputer tidak bisa menebak yang mana.
[click] Pada satu file contoh, hanya 9 dari 29 nama projek sama persis. Sisanya mirip atau tidak cocok. Yang tidak cocok diberi catatan dan admin memilih RK-nya.
[click] Selain itu RK yang sama tercatat berulang di beberapa projek dan anggota, jadi Kinetik menampilkannya sekali. Prinsipnya: lebih baik bertanya daripada salah menempelkan kegiatan ke RK orang lain.
-->
