# Alur data: kipApp ke Kinetik dan kembali

<p class="lead" style="margin:.1rem 0 .4rem">Sinkronisasi harian membaca. Pegawai menyimpan kegiatan, lalu Kinetik menulis dengan token pegawai itu.</p>

```mermaid {scale: 0.55}
sequenceDiagram
  participant S as Scheduler 04:30-05:30
  participant K as Kinetik
  participant B as SSO BPS
  participant P as kipApp
  S->>K: sinkron struktur
  K->>P: proyek, anggota, RK tiap projek
  K->>K: hubungkan RK ke projek lewat TEKS
  S->>K: sinkron anggota
  K->>B: login ulang bila token habis
  B-->>K: token 24 jam
  K->>P: baca SKP, RK, kegiatan
  K->>K: cek: RK harus punya projek
  K->>P: kirim kegiatan (skpid, rkid)
```

<!--
Tiap pagi antara 04.30 dan 05.30 WITA scheduler menarik struktur dan data anggota. Hubungan RK ke projek dibuat lewat teks karena tidak ada ID bersama. Bila token pegawai habis, Kinetik login ulang. Sebelum menulis ke kipApp, Kinetik memeriksa bahwa RK punya projek dan RK ada di SKP triwulan.
-->
