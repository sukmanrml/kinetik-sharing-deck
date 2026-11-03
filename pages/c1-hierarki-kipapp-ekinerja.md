# Hierarki data: kipApp dan e-Kinerja

<p class="lead" style="margin:.1rem 0 .4rem">Dua pohon di kipApp, satu pohon RHK di e-Kinerja, dan tidak ada projek.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem">
<div>
<div style="font-weight:700;color:var(--mute);font-size:.8rem">kipApp</div>

```mermaid {scale: 0.5}
flowchart TB
  PK["Perjanjian Kinerja: tujuan, sasaran, IKU"] --> TIM["Tim kerja"]
  TIM --> RKK["RK Ketua"]
  RKK --> PRJ["Projek"]
  PRJ --> RKA["RK Anggota (sisi projek)"]
  PEG["Pegawai"] --> SKP["SKP tahunan, lalu triwulan"]
  SKP --> RKS["RK SKP (sisi SKP)"]
  RKS --> IKI["IKI"]
  RKS --> KEG["Kegiatan"]
```
</div>
<div>
<div style="font-weight:700;color:var(--mute);font-size:.8rem">e-Kinerja BKN</div>

```mermaid {scale: 0.5}
flowchart TB
  ORG["RHK organisasi + indikator organisasi"] --> RHK["RHK individu"]
  RHK -->|"rhk_atasan"| RHK
  TK["Tim kerja"] --- SKP2["SKP"]
  SKP2 --> RHK
  RHK --> IND["Indikator: deskripsi, target"]
  RHK --> REN["Rencana aksi (renaksi)"]
  REN --> DA["Kegiatan harian (daily_activity)"]
```
</div>
</div>

<div class="card warn" style="margin-top:.3rem;padding:.3rem .7rem;font-size:.82rem"><b>Beda utama:</b> e-Kinerja tidak punya projek, dan RHK-nya saling terhubung ke RHK atasan lewat ID. kipApp memakai dua pohon RK (sisi projek dan sisi SKP) yang hanya cocok lewat teks.</div>

<!--
Ini hierarki yang kami baca dari data kipApp dan dari kode e-Kinerja. Di kipApp ada Perjanjian Kinerja di atas, lalu tim kerja, RK Ketua, projek, dan RK Anggota. Di sisi pegawai ada SKP tahunan dan triwulan, RK SKP, IKI, dan kegiatan. Dua pohon RK itu hanya cocok lewat teks. Di e-Kinerja, RHK organisasi dan RHK individu saling terhubung lewat RHK atasan, ada tim kerja dan SKP, indikator dan rencana aksi di bawah RHK, lalu kegiatan harian. Tidak ada projek.
-->
