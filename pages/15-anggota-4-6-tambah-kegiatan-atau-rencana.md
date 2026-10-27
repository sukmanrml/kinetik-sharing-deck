# Anggota (3/5): tambah kegiatan atau rencana

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<Shot id="member-add" :clicks="$clicks" />

<!--
Ini form untuk menambah kegiatan atau rencana. Bentuknya sengaja dibuat mirip form kipApp, supaya anggota tidak perlu belajar ulang.
[click] Pertama, anggota memilih RK dari daftar RK miliknya.
[click] Kedua, menulis kegiatan, atau mengambilnya dari List Aktivitas.
[click] Ketiga, ini yang penting: tanggal di masa depan boleh diisi. Di form kipApp, ini ditolak, jadi di sinilah perencanaan jadi mungkin.
[click] Keempat, target, satuan, dan capaian berupa angka, jadi bisa dijumlahkan.
[click] Kelima, bukti dukung berupa link.
[click] Keenam, simpan. Setelah itu Kinetik mengirimnya ke kipApp pada tanggal mulai, otomatis. Alurnya ada di slide Kinetik ke kipApp.
-->
