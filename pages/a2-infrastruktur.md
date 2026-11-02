# Infrastruktur: hosting bersama yang membatasi desain

<p class="lead" style="margin:.1rem 0 .4rem">Tanpa SSH, tanpa proses latar permanen. Itu menentukan cara kerja semua pekerjaan terjadwal.</p>

```mermaid {scale: 0.55}
flowchart TB
  GH["GitHub: CI lint, tsc, uji, build, audit"] --> DEV["Laptop pengembang: deploy.sh membuat zip"]
  DEV -->|"unggah lewat panel hosting"| PHP["Hosting bersama tanpa SSH: PHP 8.4, OpenSSL penyedia usang"]
  SCH["Task Scheduler tiap 5 menit"] --> QW["queue:work sampai kosong, tanpa daemon"]
  PHP --> PG[("PostgreSQL: data, cache, antrean")]
  QW --> PG
```

<!--
Aplikasi berjalan di hosting bersama tanpa SSH. Pembaruan dikirim sebagai zip lewat panel. Tidak ada worker yang menyala terus, jadi Task Scheduler menjalankan schedule:run tiap lima menit dan antrean dikerjakan sampai kosong. PostgreSQL menyimpan data, cache, dan antrean. OpenSSL penyedia sudah usang, jadi paket sertifikat dikirim bersama aplikasi. Bila integrasi BKN butuh pekerjaan panjang, hosting perlu dipikirkan ulang.
-->
