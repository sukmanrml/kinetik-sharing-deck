# Cara akhir: login sekali, token otomatis

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<SyncFlow mode="auto" :clicks="$clicks" />

<div v-click="7" class="card ok" style="margin-top:.7rem;font-size:.82rem;line-height:1.3"><b>Hasilnya:</b> tidak ada copy-paste token. Password disimpan terenkripsi dan tidak pernah ditampilkan lagi. Saat admin kipApp login, token bersama untuk seluruh satuan kerja ikut diperbarui.</div>

<!--
Karena itu kami mencari cara lain, dan inilah cara akhir yang kami pilih. Kami menemukan jalur dari SSO yang bisa dipakai untuk membaca kipApp dan menghubungkannya ke sistem kami.
[click] Pegawai login ke Kinetik dengan password SSO, cukup satu kali. Ini satu-satunya langkah manual.
[click] Kinetik login ke SSO atas nama pegawai.
[click] SSO mengesahkan, dan kipApp memberikan token.
[click] Token tersimpan terenkripsi di Kinetik.
[click] Kinetik mengambil data seluruh pegawai dari kipApp.
[click] Saat token expired, Kinetik login ulang sendiri memakai password yang tersimpan. Tidak ada yang perlu copy apa pun. Kalau login ulang itu gagal, anggota masuk daftar tunggu sinkronisasi dan sinkronisasinya jalan lagi begitu ia masuk ke Kinetik.
[click] Hasilnya, tidak ada copy-paste token. Password disimpan terenkripsi dan tidak pernah ditampilkan lagi. Dan saat admin kipApp login, token bersama untuk seluruh satuan kerja ikut diperbarui.
-->
