# Kegiatan: bagaimana tiap isian dipetakan

<p class="lead" style="margin:.1rem 0 .4rem">Teks, waktu, dan bukti cocok. Hasil dan progres perlu disesuaikan.</p>

<table style="width:100%;font-size:.74rem;border-collapse:collapse">
<thead><tr style="text-align:left;border-bottom:2px solid #cbd5e1"><th style="padding:.25rem">Isi</th><th>kipApp kegiatan</th><th>e-Kinerja daily_activity</th><th>Kinetik</th></tr></thead>
<tbody>
<tr v-click style="border-bottom:1px solid #e2e8f0"><td style="padding:.25rem"><b>Induk</b></td><td>rkid + skpid</td><td>rhk_id, renaksi_id, indikator_id, skp_id</td><td>performance_plan_id</td></tr>
<tr v-click style="border-bottom:1px solid #e2e8f0"><td style="padding:.25rem"><b>Teks</b></td><td>kegiatan</td><td>kegiatan</td><td>description</td></tr>
<tr v-click style="border-bottom:1px solid #e2e8f0"><td style="padding:.25rem"><b>Waktu</b></td><td>tanggal, tanggalselesai, jammulai, jamselesai</td><td>date, start, end</td><td>date_start, date_end, jam</td></tr>
<tr v-click style="border-bottom:1px solid #e2e8f0"><td style="padding:.25rem"><b>Hasil</b></td><td>capaian (teks), progres 0-100</td><td>realisasi (angka) + satuan, is_selesai 0/1</td><td>target, capaian angka, progres</td></tr>
<tr v-click style="border-bottom:1px solid #e2e8f0"><td style="padding:.25rem"><b>Bukti</b></td><td>datadukung</td><td>eviden, bukti_eviden</td><td>evidence_url</td></tr>
<tr v-click><td style="padding:.25rem"><b>Lainnya</b></td><td>iscapaianskp, parentid</td><td>is_cuti, sumber, ref_kegiatan_id</td><td></td></tr>
</tbody></table>

<div v-click class="card ok" style="margin-top:.5rem;padding:.3rem .7rem;font-size:.82rem"><b>Cocok:</b> teks, waktu, dan bukti. <b>Perlu penyesuaian:</b> e-Kinerja menyimpan hasil sebagai angka dengan satuan dan hanya penanda selesai, tanpa persen progres. Kinetik sudah menyimpan target dan capaian angka, jadi lebih dekat ke e-Kinerja daripada ke kipApp.</div>

<!--
Tabel pemetaan satu kegiatan antara kipApp, e-Kinerja, dan Kinetik. Teks, waktu, dan bukti punya padanan langsung. Perbedaannya di hasil: e-Kinerja menyimpan realisasi angka dengan satuan dan hanya penanda selesai, bukan persen progres seperti kipApp. Kinetik sudah menyimpan target dan capaian angka, jadi lebih dekat ke e-Kinerja.
-->
