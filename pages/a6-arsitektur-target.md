# Arsitektur target: tambah adaptor, bukan tulis ulang

<p class="lead" style="margin:.1rem 0 .4rem">Kontrak yang sudah ada memisahkan fitur dari sumber datanya.</p>

```mermaid {scale: 0.6}
flowchart TB
  UI["Layar dan aksi Kinetik"] --> PORT["Kontrak: sumber kegiatan, sumber struktur, penulis"]
  PORT --> KA["Adaptor kipApp (ada)"]
  PORT --> MK["Adaptor tiruan (ada)"]
  PORT --> FA["Adaptor berkas: arsip Excel dan impor e-Kinerja (dibangun sekarang)"]
  PORT -.-> EA["Adaptor API e-Kinerja (hanya bila BKN memberi akses)"]
  PORT --> DB[("Basis data Kinetik: catatan riwayat")]
```

<!--
Fitur Kinetik tidak berbicara langsung ke kipApp. Semuanya lewat kontrak: sumber kegiatan, sumber struktur, dan penulis, dengan implementasi kipApp dan tiruan. Migrasi berarti menambah adaptor. Adaptor berkas bisa dibangun sekarang: arsip Excel dan impor laporan e-Kinerja. Adaptor API e-Kinerja hanya mungkin bila BKN memberi akses resmi. Basis data Kinetik menjadi catatan riwayat yang tidak hilang bila kipApp dimatikan.
-->
