<script setup lang="ts">
import { computed } from 'vue';

// clicks: 1 = antrean 05.20, 2 = cek token, 3 = hasil, 4 = pagi berikutnya, 5 = SSO kembali, 6 = anggota masuk lagi.
const props = defineProps<{ clicks: number }>();

type Cell = { text: string; tone: 'ok' | 'bad' | 'wait' | 'idle' };
const idle: Cell = { text: '', tone: 'idle' };

const rows = computed(() => {
    const c = props.clicks;
    return [
        {
            name: 'Ani', note: 'sesi masih berlaku',
            q: c >= 1 ? { text: 'Masuk antrean', tone: 'wait' } : idle,
            t: c >= 2 ? { text: 'Token masih berlaku', tone: 'ok' } : idle,
            r: c >= 3 ? { text: 'Tersinkron: kegiatan, RK, status SKP', tone: 'ok' } : idle,
        },
        {
            name: 'Budi', note: 'sesi berakhir, kata sandi tersimpan benar',
            q: c >= 1 ? { text: 'Masuk antrean', tone: 'wait' } : idle,
            t: c >= 2 ? { text: 'Kedaluwarsa, login ulang otomatis berhasil', tone: 'ok' } : idle,
            r: c >= 3 ? { text: 'Tersinkron', tone: 'ok' } : idle,
        },
        {
            name: 'Citra', note: 'kata sandi SSO diganti',
            q: c >= 1 ? { text: 'Masuk antrean', tone: 'wait' } : idle,
            t: c >= 6 ? { text: 'Token baru dari login', tone: 'ok' } : c >= 2 ? { text: 'Kedaluwarsa, kata sandi ditolak', tone: 'bad' } : idle,
            r: c >= 6 ? { text: 'Sinkronisasi langsung jalan, daftar tunggu dihapus', tone: 'ok' }
                : c >= 4 ? { text: 'Daftar tunggu: dilewati sampai ia masuk lagi', tone: 'wait' }
                    : c >= 3 ? { text: 'Daftar tunggu, diberi tahu sekali lewat lonceng', tone: 'wait' } : idle,
        },
        {
            name: 'Dedi', note: 'BPS SSO sedang mati',
            q: c >= 1 ? { text: 'Masuk antrean', tone: 'wait' } : idle,
            t: c >= 5 ? { text: 'SSO kembali, login berhasil', tone: 'ok' } : c >= 2 ? { text: 'SSO tidak bisa dihubungi', tone: 'bad' } : idle,
            r: c >= 5 ? { text: 'Dicoba lagi otomatis, tersinkron', tone: 'ok' } : c >= 3 ? { text: 'Dicoba lagi tiap 30 menit, tanpa notifikasi', tone: 'wait' } : idle,
        },
    ] as Array<{ name: string; note: string; q: Cell; t: Cell; r: Cell }>;
});

const captions = ['', '05.20: antrean sinkronisasi, satu pekerjaan per anggota', 'Worker memeriksa sesi kipApp tiap anggota', 'Hasil sinkronisasi', 'Pagi berikutnya', 'BPS SSO kembali', 'Citra masuk lagi ke Kinetik'];
</script>

<template>
    <div class="msf">
        <p class="cap" :key="clicks">{{ captions[Math.min(clicks, 6)] || 'Jadwal harian, per anggota, lewat antrean' }}</p>
        <div class="grid head">
            <span></span><b>1. Antrean</b><b>2. Cek sesi kipApp</b><b>3. Hasil</b>
        </div>
        <div v-for="r in rows" :key="r.name" class="grid row">
            <div class="who"><b>{{ r.name }}</b><small>{{ r.note }}</small></div>
            <div class="cell" :class="r.q.tone">{{ r.q.text }}</div>
            <div class="cell" :class="r.t.tone">{{ r.t.text }}</div>
            <div class="cell" :class="r.r.tone">{{ r.r.text }}</div>
        </div>
    </div>
</template>

<style scoped>
.msf { margin-top: .4rem; }
.cap { margin: 0 0 .5rem; min-height: 1.6rem; font-weight: 700; color: var(--blue); font-size: 1.05rem; animation: pop .5s ease; }
@keyframes pop { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.grid { display: grid; grid-template-columns: 11rem 1fr 1.25fr 1.4fr; gap: .45rem; align-items: stretch; }
.head { font-size: .78rem; color: var(--mute); margin-bottom: .25rem; }
.row { margin-bottom: .45rem; }
.who { display: flex; flex-direction: column; justify-content: center; }
.who b { font-size: 1.05rem; color: var(--blue); }
.who small { font-size: .68rem; line-height: 1.15; color: var(--mute); }
.cell { min-height: 2.9rem; border-radius: 10px; border: 2px dashed #dbe3ef; padding: .35rem .6rem; font-size: .8rem; line-height: 1.2; display: flex; align-items: center; transition: background .5s, border-color .5s, color .5s, opacity .5s; opacity: .55; }
.cell.ok { background: #E7F5EC; border: 2px solid var(--ok); color: #14532d; opacity: 1; }
.cell.bad { background: #FDECEC; border: 2px solid #c0392b; color: #7f1d1d; opacity: 1; }
.cell.wait { background: #FBF3E0; border: 2px solid var(--orange); color: #7a4a00; opacity: 1; }
@media (prefers-reduced-motion: reduce) { .cell, .cap { transition-duration: .01ms; animation: none; } }
</style>
