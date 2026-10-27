export interface ShotStep { n: number; x: number; y: number; text: string }
export interface ShotDef { src: string; url?: string; steps: ShotStep[] }

export const shots: Record<string, ShotDef> = {
    "member-weeks": {
        "src": "/shots/member-weeks.png",
        "steps": [
            {
                "n": 1,
                "x": 16.5,
                "y": 30.3,
                "text": "Pilih bulan, lalu pilih minggunya. Daftar dulu, bukan kalender penuh."
            },
            {
                "n": 2,
                "x": 47.5,
                "y": 26,
                "text": "Kolom Kegiatan, Capaian terisi, dan Terkirim sama seperti daftar bulan, sekarang per minggu."
            }
        ]
    },
    "member-add": {
        "src": "/shots/member-add.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 35.5, "y": 28.5, "text": "Pilih projek dulu. RK yang tampil hanya RK projek itu."},
            {"n": 2, "x": 35.5, "y": 36.5, "text": "Pilih RK. Setelah dipilih, projek terkunci; tombol Ganti RK membukanya lagi."},
            {"n": 3, "x": 35.5, "y": 48, "text": "Tulis kegiatan, atau ambil dari List Aktivitas."},
            {"n": 4, "x": 35.5, "y": 58, "text": "Tanggal di masa depan boleh diisi. Di form kipApp, ini ditolak."},
            {"n": 5, "x": 35.5, "y": 68, "text": "Target dan satuan berupa angka. Progres, capaian dan bukti diisi nanti di form Realisasi."},
            {"n": 6, "x": 62, "y": 83, "text": "Simpan. Kinetik mengirimnya ke kipApp pada tanggal mulai, otomatis atau lewat tombol Kirim ke kipApp."}
        ]
    },

    "pj-week-detail": {
        "src": "/shots/pj-week-detail.png",
        "steps": [
            {
                "n": 1,
                "x": 17.4,
                "y": 24.2,
                "text": "Pilih tim yang dipimpin."
            },
            {
                "n": 2,
                "x": 17.4,
                "y": 40,
                "text": "Rencana minggu ini: kegiatan semua anggota dalam satu tabel. Tidak ada lembar Excel."
            },
            {
                "n": 3,
                "x": 85,
                "y": 45.8,
                "text": "Status tiap kegiatan, misalnya Terkirim ke atasan."
            },
            {
                "n": 4,
                "x": 88,
                "y": 31,
                "text": "Unduh Excel untuk bahan rapat."
            }
        ]
    },
    "pj-paraphrase": {
        "src": "/shots/pj-paraphrase.png",
        "steps": [
            {
                "n": 1,
                "x": 19.5,
                "y": 42.5,
                "text": "Kontribusi anggota di kiri. PJ membaca, lalu bisa mengambil kalimatnya."
            },
            {
                "n": 2,
                "x": 50.8,
                "y": 42.5,
                "text": "Parafrase PJ di kanan. Ditulis sendiri, tidak ada isi otomatis."
            },
            {
                "n": 3,
                "x": 50.8,
                "y": 54,
                "text": "Target, satuan, dan capaian RK berupa angka."
            },
            {
                "n": 4,
                "x": 50.8,
                "y": 63,
                "text": "Simpan, atau Simpan dan kunci supaya rekap tidak berubah lagi."
            }
        ]
    },
    "head-compliance": {
        "src": "/shots/head-compliance.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 30.6, "y": 19.4, "text": "Ringkasan dulu: rencana minggu ini, rencana triwulan, dan jumlah yang belum punya rencana."},
            {"n": 2, "x": 25, "y": 29.2, "text": "Nama anggota yang belum membuat rencana, per tim."},
            {"n": 3, "x": 25.2, "y": 57.8, "text": "Tabel lengkap per tim dan minggu tersembunyi sampai tombol ini ditekan."}
        ]
    },
    "fra-bulanan": {
        "src": "/shots/fra-bulanan.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 21, "y": 27, "text": "Pilih sampai bulan berapa. Kartu di atas ikut berubah."},
            {"n": 2, "x": 45, "y": 52, "text": "X dan Y tiap bulan, diisi PJ tim pemilik."},
            {"n": 3, "x": 52, "y": 62, "text": "Persen bulan itu: hijau tercapai, kuning belum, merah kosong."},
            {"n": 4, "x": 68, "y": 64, "text": "Kumulatif dari Januari terhadap target tahunan. Bingkai menandai bulan terpilih."}
        ]
    },
    "member-beranda": {
        "src": "/shots/member-beranda.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 51, "y": 22, "text": "Rencana minggu ini sudah ada atau belum."},
            {"n": 2, "x": 96, "y": 22, "text": "Capaian minggu lalu: yang sudah dan belum diisi."},
            {"n": 3, "x": 51, "y": 49, "text": "Kegiatan bulan ini yang sudah dikirim ke atasan."},
            {"n": 4, "x": 96, "y": 49, "text": "SKP tahun ini yang belum selesai dinilai."}
        ]
    },
    "review-bersama": {
        "src": "/shots/review-bersama.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 26.6, "y": 17.9, "text": "Mingguan, bulanan, atau triwulanan, dengan panah untuk pindah periode."},
            {"n": 2, "x": 18.8, "y": 27.8, "text": "Ringkasan kantor dalam satu deret angka."},
            {"n": 3, "x": 43.4, "y": 41.4, "text": "Klik Capaian untuk mengurutkan dari tertinggi atau terendah."},
            {"n": 4, "x": 85.5, "y": 46.4, "text": "Status capaian. Gembok berarti rekap sudah dikunci PJ."}
        ]
    },
    "ringkasan-rapat": {
        "src": "/shots/ringkasan-rapat.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 31.3, "y": 21.1, "text": "Rekap mingguan terkunci, rekap bulanan terkunci, dan tim yang punya bukti rapat."},
            {"n": 2, "x": 51.9, "y": 33.1, "text": "Terkunci: PJ sudah menyelesaikan rekap. Angka kecil adalah jumlah bukti rapat."},
            {"n": 3, "x": 62.1, "y": 33.2, "text": "Ditulis: ada parafrase tetapi belum dikunci."},
            {"n": 4, "x": 93, "y": 33.2, "text": "Rapat bulanan tiap tim."}
        ]
    },
    "head-beranda": {
        "src": "/shots/head-beranda.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 51, "y": 22, "text": "Rencana minggu ini: berapa anggota sudah membuat rencana, dan siapa yang belum."},
            {"n": 2, "x": 96, "y": 16.5, "text": "Kegiatan ke atasan: siapa yang belum mengirim."},
            {"n": 3, "x": 36, "y": 41, "text": "Tim yang belum punya rekap rapat mingguan minggu lalu."},
            {"n": 4, "x": 96, "y": 41, "text": "SKP yang menunggu persetujuan pimpinan."}
        ]
    },
    "head-credit": {
        "src": "/shots/head-credit.png",
        "steps": [
            {
                "n": 1,
                "x": 38,
                "y": 19,
                "text": "Saring status: Siap diusulkan, Hampir, Berjalan, Jenjang puncak, Bukan JF."
            },
            {
                "n": 2,
                "x": 44.3,
                "y": 32,
                "text": "Menuju pangkat atau jenjang berikutnya."
            },
            {
                "n": 3,
                "x": 58.2,
                "y": 31.5,
                "text": "Angka kredit terkumpul dibanding yang dibutuhkan."
            },
            {
                "n": 4,
                "x": 89,
                "y": 32,
                "text": "Status: Siap diusulkan atau Hampir."
            }
        ]
    },
    "head-fra": {
        "src": "/shots/head-fra.png",
        "steps": [
            {
                "n": 1,
                "x": 17.4,
                "y": 21,
                "text": "Pilih triwulan."
            },
            {
                "n": 2,
                "x": 27.4,
                "y": 21,
                "text": "Nilai SAKIP tahun ini."
            },
            {
                "n": 3,
                "x": 79,
                "y": 29.6,
                "text": "Predikat SAKIP dihitung otomatis."
            },
            {
                "n": 4,
                "x": 17.2,
                "y": 47,
                "text": "Indikator: target, alokasi, realisasi, dan capaian per triwulan."
            }
        ]
    },
    "org": {
        "src": "/shots/org.png",
        "steps": [
            {
                "n": 1,
                "x": 16.5,
                "y": 15.3,
                "text": "Cari nama pegawai atau tim."
            },
            {
                "n": 2,
                "x": 17.8,
                "y": 22,
                "text": "Satker dan kepala selalu pinned di paling atas."
            },
            {
                "n": 3,
                "x": 18,
                "y": 27.5,
                "text": "Tim yang sedang dilihat pinned di bawahnya."
            },
            {
                "n": 4,
                "x": 19.4,
                "y": 46,
                "text": "Ketua tim ditandai. Klik satu orang untuk melihat semua tim tempat ia berada."
            }
        ]
    },
    "member-unsent-week": {
        "src": "/shots/member-unsent-week.png",
        "steps": [
            {
                "n": 1,
                "x": 17.6,
                "y": 49.7,
                "text": "Kegiatan baru langsung muncul di tabel Rencana minggu ini."
            },
            {
                "n": 2,
                "x": 41,
                "y": 54.4,
                "text": "Tiap baris menunjukkan RK dan tanggalnya, jadi mudah dicek."
            },
            {
                "n": 3,
                "x": 86.5,
                "y": 66.9,
                "text": "Status tiap kegiatan, misalnya Selesai, belum dikirim."
            },
            {
                "n": 4,
                "x": 17,
                "y": 66.9,
                "text": "Klik barisnya untuk mengisi capaian."
            }
        ]
    },
    "member-capaian": {
        "src": "/shots/member-capaian.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 35.5, "y": 22, "text": "Detail kegiatan: tanggal, target, capaian, dan status."},
            {"n": 2, "x": 35.5, "y": 50.5, "text": "Realisasi: capaian berupa angka, supaya bisa dijumlahkan."},
            {"n": 3, "x": 51, "y": 50.5, "text": "Progres (%) terhitung otomatis dari capaian dibagi target. Bisa diubah."},
            {"n": 4, "x": 35.5, "y": 61, "text": "Bukti dukung berupa link."},
            {"n": 5, "x": 35.5, "y": 71, "text": "Uraian: teks yang ikut dikirim ke kipApp."},
            {"n": 6, "x": 50, "y": 79, "text": "Salin kegiatan: pakai kegiatan ini sebagai dasar kegiatan baru."},
            {"n": 7, "x": 60, "y": 79, "text": "Simpan realisasi."}
        ]
    },

    "pj-months": {
        "src": "/shots/pj-weekly.png",
        "steps": [
            {
                "n": 1,
                "x": 17.2,
                "y": 18.5,
                "text": "Pilih tim yang dipimpin."
            },
            {
                "n": 2,
                "x": 38.4,
                "y": 26.2,
                "text": "Jumlah kegiatan tim di tiap bulan."
            },
            {
                "n": 3,
                "x": 49,
                "y": 26.2,
                "text": "RK sudah ditulis dan Terkunci: sejauh mana rekap sudah dikerjakan."
            },
            {
                "n": 4,
                "x": 77,
                "y": 30.7,
                "text": "Status bulan, misalnya Belum ditulis. Klik satu bulan untuk lanjut."
            }
        ]
    },
    "pj-weeks": {
        "src": "/shots/pj-weeks.png",
        "steps": [
            {
                "n": 1,
                "x": 42.3,
                "y": 18.4,
                "text": "Tombol kembali ke Semua bulan."
            },
            {
                "n": 2,
                "x": 16.6,
                "y": 30.3,
                "text": "Satu baris satu minggu. Klik untuk membuka rekapnya."
            },
            {
                "n": 3,
                "x": 52.2,
                "y": 26,
                "text": "Kolom RK sudah ditulis dan Terkunci sama seperti daftar bulan, sekarang per minggu."
            }
        ]
    },
    "pj-panel": {
        "src": "/shots/pj-panel.png",
        "steps": [
            {
                "n": 1,
                "x": 17.2,
                "y": 23.1,
                "text": "Kelengkapan anggota: berapa anggota yang sudah mengisi capaian."
            },
            {
                "n": 2,
                "x": 36.8,
                "y": 30.4,
                "text": "Belum mengisi: siapa yang masih perlu diingatkan."
            },
            {
                "n": 3,
                "x": 25.5,
                "y": 50.7,
                "text": "Pilih satu RK. Parafrase ditulis per RK."
            },
            {
                "n": 4,
                "x": 89.5,
                "y": 57.9,
                "text": "Tombol Isi parafrase. Kalau sudah ada isinya, tombolnya jadi Ubah parafrase."
            },
            {
                "n": 5,
                "x": 84.5,
                "y": 63.9,
                "text": "Target RK, Capaian RK, dan status kunci."
            },
            {
                "n": 6,
                "x": 16.3,
                "y": 84.4,
                "text": "Bukti Dukung Rapat: tambah bukti untuk minggu ini."
            }
        ]
    },
    "member-months": {
        "src": "/shots/member-months.png",
        "steps": [
            {
                "n": 1,
                "x": 17.3,
                "y": 18.6,
                "text": "Pilih tahun."
            },
            {
                "n": 2,
                "x": 36.7,
                "y": 26.2,
                "text": "Kegiatan: jumlah kegiatan anggota di tiap bulan."
            },
            {
                "n": 3,
                "x": 46.6,
                "y": 26.2,
                "text": "Capaian terisi: berapa kegiatan yang sudah ada capaiannya."
            },
            {
                "n": 4,
                "x": 60.7,
                "y": 26.2,
                "text": "Terkirim ke atasan: berapa kegiatan yang sudah dikirim."
            },
            {
                "n": 5,
                "x": 78.8,
                "y": 30.6,
                "text": "Status bulan, misalnya Belum ditulis."
            },
            {
                "n": 6,
                "x": 16.8,
                "y": 67.6,
                "text": "Bulan yang sedang berjalan ditandai Sekarang. Klik untuk lanjut ke minggunya."
            }
        ]
    },
    "member-week-detail": {
        "src": "/shots/member-week-detail.png",
        "steps": [
            {
                "n": 1,
                "x": 17.4,
                "y": 29.1,
                "text": "Capaian minggu lalu: bahan evaluasi untuk Senin pagi."
            },
            {
                "n": 2,
                "x": 17.4,
                "y": 45.6,
                "text": "Rencana minggu ini: kegiatan yang direncanakan dan sudah berjalan."
            },
            {
                "n": 3,
                "x": 17.6,
                "y": 22.6,
                "text": "Cari kegiatan atau RK."
            },
            {
                "n": 4,
                "x": 37.2,
                "y": 22.6,
                "text": "Sinkronkan data saya: ambil kegiatan terbaru dari kipApp ke Kinetik. Arah sebaliknya, Kinetik ke kipApp, berjalan sendiri tiap jam kerja atau lewat tombol Kirim ke kipApp di detail kegiatan."
            },
            {
                "n": 5,
                "x": 90.7,
                "y": 22.6,
                "text": "Tambah: pintu masuk untuk menambah kegiatan atau rencana."
            }
        ]
    },
    "devtools": {
        "src": "/shots/devtools.png",
        "url": "kipapp.bps.go.id (DevTools, tab Network)",
        "steps": [
            {"n": 1, "x": 84, "y": 31, "text": "Tab Network di DevTools: semua file yang di-download browser saat kipApp dibuka."},
            {"n": 2, "x": 84, "y": 40, "text": "File bertipe script (sc...) ini potongan bundle JavaScript, isi aplikasi yang sebenarnya."},
            {"n": 3, "x": 84, "y": 97, "text": "69 request dan 4,2 MB hanya untuk membuka halaman login."}
        ]
    },
    "skp-saya": {
        "src": "/shots/skp-saya.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 34.4, "y": 14.8, "text": "SKP Tahunan dengan tiga tahap. Atasan yang menetapkan, di halaman Persetujuan SKP atau di kipApp."},
            {"n": 2, "x": 77.8, "y": 54, "text": "Status tiap triwulan sama seperti di kipApp: Sedang dibuat, Sedang diperiksa, Dinilai."},
            {"n": 3, "x": 34.8, "y": 68.2, "text": "Triwulan yang belum punya SKP: tombol Buat SKP."}
        ]
    },
    "skp-buat": {
        "src": "/shots/skp-buat.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 38, "y": 45.9, "text": "Centang RK SKP Tahunan yang masuk ke triwulan ini."},
            {"n": 2, "x": 59.7, "y": 61.1, "text": "Buat SKP. Di kipApp SKP triwulannya langsung ada."}
        ]
    },
    "skp-kirim": {
        "src": "/shots/skp-kirim.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 36.7, "y": 72.7, "text": "Tambah RK, selama SKP masih Sedang dibuat."},
            {"n": 2, "x": 43.2, "y": 72.7, "text": "Kirim untuk dinilai atasan. Sesudahnya tombol ini menjadi Batalkan pengiriman."}
        ]
    },
    "skp-persetujuan": {
        "src": "/shots/skp-persetujuan.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 30.3, "y": 22.0, "text": "Klik nama pegawai pada SKP triwulan untuk membuka bahan penilaian."},
            {"n": 2, "x": 35.1, "y": 31.0, "text": "Tiap RK: jumlah kegiatan, yang selesai dan yang terkirim ke kipApp."},
            {"n": 3, "x": 84.8, "y": 28.0, "text": "Capaian dibanding target, dengan satuan."},
            {"n": 4, "x": 35.3, "y": 33.3, "text": "Catatan capaian yang ditulis pegawai."},
            {"n": 5, "x": 79.2, "y": 22.2, "text": "Nilai membuka halaman penilaian di Kinetik."},
            {"n": 6, "x": 91.8, "y": 23.3, "text": "Tetapkan atau Kembalikan: Kinetik bertanya dulu, lalu bekerja dengan akun kipApp atasan sendiri. Pegawai mendapat notifikasi."}
        ]
    },
    "skp-nilai": {
        "src": "/shots/skp-nilai.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 43.8, "y": 20.7, "text": "Bahan penilaian dari Kinetik ada di halaman yang sama dengan form nilai."},
            {"n": 2, "x": 81.4, "y": 54.4, "text": "Nilai 0 sampai 100 untuk tiap RK."},
            {"n": 3, "x": 80.9, "y": 58.2, "text": "Tingkat muncul sendiri: 99 ke atas di atas ekspektasi, 80 sampai 98 sesuai, di bawah 80 di bawah ekspektasi."},
            {"n": 4, "x": 54.1, "y": 59.1, "text": "Umpan balik, boleh dikosongkan."},
            {"n": 5, "x": 81.4, "y": 61.9, "text": "Simpan: nilai langsung masuk ke kipApp dengan akun atasan."},
            {"n": 6, "x": 36.6, "y": 98.3, "text": "Tujuh perilaku BerAKHLAK dinilai dengan cara yang sama, lalu Selesai menilai."}
        ]
    },
    "proyek-kipapp": {
        "src": "/shots/proyek-kipapp.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 31.4, "y": 20.9, "text": "Pilih tim dulu. Daftar RK Ketua dimuat dari kipApp."},
            {"n": 2, "x": 40, "y": 36.7, "text": "RK Ketua tempat proyek digantung di kipApp."},
            {"n": 3, "x": 65.6, "y": 36.9, "text": "Belum ada RK Ketua? Buat dari sini, dengan memilih IKI JPT."},
            {"n": 4, "x": 66.9, "y": 92.7, "text": "Simpan: proyek dibuat di Kinetik dan di kipApp dengan akun PJ."}
        ]
    },
    "fitur": {
        "src": "/shots/fitur.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 58.5, "y": 20.6, "text": "Satu baris per fitur kipApp, dengan status Menyala atau Mati."},
            {"n": 2, "x": 57.2, "y": 36.9, "text": "Tanda Belum diuji langsung untuk fitur yang menulis data resmi."},
            {"n": 3, "x": 88.6, "y": 29.3, "text": "Satu tombol menyalakan atau mematikan, berlaku segera untuk semua pengguna."}
        ]
    },
    "skp-iki": {
        "src": "/shots/skp-iki.png",
        "url": "kinetik.bpssulteng.id (contoh data, belum dinyalakan)",
        "steps": [
            {"n": 1, "x": 34.8, "y": 45.8, "text": "Tiap RK menampilkan IKI-nya. RK tanpa IKI menahan pengiriman SKP."},
            {"n": 2, "x": 58, "y": 71.8, "text": "IKI ditulis dengan targetnya dalam satu kalimat, minimal 10 huruf."},
            {"n": 3, "x": 34.7, "y": 80.7, "text": "Simpan IKI: dibuat di kipApp dengan akun anggota."},
            {"n": 4, "x": 41.8, "y": 87.3, "text": "Setelah semua RK punya IKI, SKP bisa dikirim untuk dinilai."}
        ]
    },
    "panduan": {
        "src": "/shots/panduan.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 90.6, "y": 3.4, "text": "Tombol Panduan halaman ada di pojok kanan atas, di halaman yang punya panduan."},
            {"n": 2, "x": 19.7, "y": 13.3, "text": "Bagian yang dijelaskan disorot, sisanya digelapkan."},
            {"n": 3, "x": 26.9, "y": 27.8, "text": "Kotak penjelasan singkat untuk bagian itu."},
            {"n": 4, "x": 34.1, "y": 35.2, "text": "Lanjut ke bagian berikutnya. Esc menutup panduan."}
        ]
    },
    "skp-pj": {
        "src": "/shots/skp-pj.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 6.7, "y": 50.3, "text": "Menu Persetujuan SKP muncul bila ada SKP anggota yang atasannya PJ."},
            {"n": 2, "x": 35.4, "y": 23.5, "text": "Satu baris per SKP anggota tim yang menunggu PJ."},
            {"n": 3, "x": 75.2, "y": 23.5, "text": "Tetapkan SKP Tahunan anggota."},
            {"n": 4, "x": 80.3, "y": 23.5, "text": "Kembalikan ke anggota untuk diperbaiki."},
            {"n": 5, "x": 73.6, "y": 18.6, "text": "SKP triwulan dinilai di kipApp."}
        ]
    },
    "skp-pj-tetapkan": {
        "src": "/shots/skp-pj-tetapkan.png",
        "url": "kinetik.bpssulteng.id (contoh data)",
        "steps": [
            {"n": 1, "x": 37.9, "y": 44.8, "text": "Kinetik bertanya dulu, dengan nama pegawai dan SKP yang ditetapkan."},
            {"n": 2, "x": 60.8, "y": 53.8, "text": "Ya: SKP ditetapkan dengan akun kipApp PJ sendiri. Anggota mendapat notifikasi."}
        ]
    }
};
