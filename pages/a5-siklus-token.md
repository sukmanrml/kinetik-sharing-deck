# Autentikasi: siklus hidup token

<p class="lead" style="margin:.1rem 0 .4rem">Setiap kegagalan di sini terlihat pegawai sebagai "tidak bisa login" atau "tidak bisa sinkron".</p>

```mermaid {scale: 0.55}
stateDiagram-v2
  [*] --> BelumTerhubung
  BelumTerhubung --> Terhubung: login pertama dengan kata sandi SSO
  Terhubung --> TokenAktif: token 24 jam
  TokenAktif --> TokenHabis
  TokenHabis --> TokenAktif: login ulang otomatis
  TokenHabis --> Ditolak: SSO menolak, kata sandi berubah
  TokenHabis --> Coba_lagi: WAF, Cloudflare, atau timeout 30 detik
  Ditolak --> BelumTerhubung: pegawai memasukkan kata sandi lagi
```

<!--
Pegawai memasukkan kata sandi SSO sekali, disimpan terenkripsi. Token kipApp berlaku sekitar 24 jam, lalu Kinetik login ulang diam-diam. Kegagalan yang kami temui: WAF memblokir User-Agent curl, Cloudflare menantang header JSON bawaan Laravel, dan timeout 15 detik terlalu pendek. Setelah Januari, pola ini tidak bisa ditiru untuk ASN Digital karena ada reCAPTCHA dan MFA di setiap login.
-->
