# Kinetik melengkapi kipApp

<div style="display:flex;align-items:center;gap:.8rem;margin-top:1.2rem">
  <div class="card" style="flex:1;text-align:center;border-left-color:#8a8a8a;background:#f1f1f1"><b style="color:#444">kipApp</b><br><span class="small">Catatan resmi.<br>RK dan kegiatan pegawai.</span></div>
  <div style="flex:1.1;text-align:center;font-size:.85rem;line-height:1.3">
    <div v-click="1" style="color:var(--blue);font-weight:700">Kinetik membaca &rarr;<br><span class="small">RK dan kegiatan anggota</span></div>
    <div v-click="2" style="color:var(--orange);font-weight:700;margin-top:.5rem">&larr; Kinetik mengirim<br><span class="small">kegiatan, kirim ke atasan, hapus</span></div>
  </div>
  <div class="card" style="flex:1.3;text-align:center"><b>Kinetik</b><br><span class="small">Satu tempat untuk mencatat<br>dan memantau.</span></div>
  <div v-click="3" style="color:var(--blue);font-weight:700;font-size:1.6rem">&rarr;</div>
  <div v-click="3" class="card warn" style="flex:1;text-align:center"><b>Pimpinan</b><br><span class="small">Tampilan monitoring</span></div>
</div>

<!--
Pendekatan kami: Kinetik melengkapi kipApp. Kami tidak membuat sistem tandingan. kipApp tetap catatan resmi.
[click] Kinetik membaca RK dan kegiatan anggota dari kipApp. Catatan resmi tetap di kipApp.
[click] Kinetik juga bisa mengirim kegiatan dan rencana kembali ke kipApp, sehingga pegawai cukup mengisi sekali. Kirim ke atasan, batalkan kirim, dan hapus kegiatan yang belum dikirim sudah diuji langsung di kipApp dan sudah aktif.
[click] Hasilnya dilihat pimpinan lewat tampilan monitoring.
-->
