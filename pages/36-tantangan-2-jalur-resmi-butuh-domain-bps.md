# Tantangan 2: jalur resmi dan SSO baru

<div class="grid2 compact" style="margin-top:.6rem">
<div v-click class="card warn"><b>Syarat jalur resmi</b><br><span class="small">API resmi dan akun client SSO mensyaratkan aplikasi di domain <b>.bps.go.id</b>. Kinetik ada di <b>bpssulteng.id</b>, belum memenuhi.</span></div>
<div v-click class="card warn"><b>Birokrasinya</b><br><span class="small">Subdomain .bps.go.id harus disetujui Kantor Pusat. Prosesnya berlapis dan memakan waktu lama.</span></div>
<div v-click class="card"><b>Sekarang</b><br><span class="small">SSO lama masih bisa dimasuki otomatis, jadi cara akhir tadi berjalan. Karena itu kami memakainya sambil menunggu jalur resmi.</span></div>
<div v-click class="card warn"><b>Desember 2026</b><br><span class="small">Semua aplikasi BPS pindah ke SSO baru (accounts.bps.go.id). Captcha dan passkey-nya tidak bisa dilewati server, seperti di langkah 5 diagram tadi.</span></div>
</div>

<div class="grid2 compact" style="margin-top:.4rem">
<div v-click class="card warn"><b>Bila tidak ada tindakan</b><br><span class="small">Cara akhir berhenti. Setiap orang harus copy token sendiri manual, setiap hari. Lebih berat daripada cara pertama, yang dulu hanya dikerjakan admin.</span></div>
<div v-click class="card ok"><b>Bila ada akses resmi</b><br><span class="small">Kinetik terdaftar sebagai client SSO dan tetap otomatis. Syaratnya: domain .bps.go.id dan persetujuan Kantor Pusat.</span></div>
</div>

<!--
Kenapa tidak langsung minta akses resmi saja? Ada dua hambatan, lalu satu kekhawatiran yang menjadi alasan permintaan ketiga saya nanti.
[click] Pertama, syaratnya. API resmi dan akun client SSO mensyaratkan aplikasi berada di domain dot bps dot go dot id. Kinetik sekarang ada di bpssulteng dot id, jadi belum memenuhi.
[click] Kedua, birokrasinya. Subdomain dot bps dot go dot id harus disetujui Kantor Pusat, dan prosesnya berlapis serta memakan waktu lama.
[click] Karena itu kami memakai workaround. Saat ini SSO lama masih bisa dimasuki otomatis, jadi tim tidak menunggu berbulan-bulan.
[click] Kekhawatirannya: pada Desember 2026 semua aplikasi BPS pindah ke SSO baru, yang memakai captcha dan passkey. Sistem seperti Kinetik tidak bisa lagi masuk sendiri.
[click] Kalau tidak ada tindakan, cara ini berhenti. Setiap orang yang memakai Kinetik harus copy token sendiri manual, setiap hari. Itu lebih berat daripada cara pertama, yang dulu hanya dikerjakan oleh admin.
[click] Jalan keluarnya adalah akses resmi: Kinetik didaftarkan sebagai client SSO. Itu urusan pengajuan ke Kantor Pusat, dan kami belum tahu hasilnya. Pelajaran untuk tim lain: sistem yang bergantung pada pihak lain butuh rencana cadangan sejak awal.
-->
