# Arsitektur: siapa bicara dengan siapa

<p class="lead" style="margin:.1rem 0 .4rem">Kinetik berada di tengah. Setelah Januari, yang berbicara dengan pegawai adalah e-Kinerja.</p>

```mermaid {scale: 0.62}
flowchart LR
  U["Anggota, PJ, Pimpinan, Admin"] --> K["Kinetik"]
  K <-->|"baca dan tulis, token milik pegawai"| KIP["kipApp (sekarang)"]
  BSSO["SSO BPS"] --> KIP
  K -->|"login dengan kata sandi tersimpan"| BSSO
  ASND["ASN Digital SSO: reCAPTCHA + MFA"] --> EK["e-Kinerja BKN (Januari 2027)"]
  K -.->|"belum ada API: hanya berkas"| EK
```

<!--
Ini gambaran konteks. Empat peran memakai Kinetik. Kinetik membaca dan menulis ke kipApp dengan token milik pegawai, yang didapat lewat login SSO BPS dengan kata sandi tersimpan. Mulai Januari 2027 pencatatan SKP pindah ke e-Kinerja BKN, yang dilindungi SSO ASN Digital dengan reCAPTCHA dan MFA. Belum ada API untuk Kinetik, jadi garis ke e-Kinerja putus-putus: hanya lewat berkas.
-->
