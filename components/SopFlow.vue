<script setup lang="ts">
import { computed } from 'vue';

// clicks: 0 = langkah lama semua peran, 1 = anggota, 2 = PJ, 3 = pimpinan, 4 = total.
const props = defineProps<{ clicks: number }>();

type Kind = 'kept' | 'changed' | 'cut';
interface Step { label: string; to?: string; kind: Kind }
interface Lane { role: string; old: Step[]; added: string[] }

const lanes: Lane[] = [
    {
        role: 'Anggota',
        old: [
            { label: 'Menyiapkan rencana di lembar Excel', to: 'Mengisi rencana di Rekap Mingguan', kind: 'changed' },
            { label: 'Mencatat kegiatan di kipApp', to: 'Mencatat sekali, di kipApp atau Kinetik', kind: 'kept' },
            { label: 'Mengetik ulang kegiatan di Excel', kind: 'cut' },
            { label: 'Mengetik target dan realisasi sebagai kalimat', to: 'Mengisi target dan capaian berupa angka', kind: 'changed' },
            { label: 'Menyerahkan lembar ke PJ', kind: 'cut' },
        ],
        added: [],
    },
    {
        role: 'PJ',
        old: [
            { label: 'Menagih rencana anggota satu per satu', to: 'Membuka Kepatuhan Rencana', kind: 'changed' },
            { label: 'Menerima lembar tiap anggota', kind: 'cut' },
            { label: 'Copy ke lembar rekap tim', kind: 'cut' },
            { label: 'Menghitung manual', kind: 'cut' },
            { label: 'Menulis paragraf rekap di Excel', to: 'Menulis parafrase per RK, lalu mengunci', kind: 'changed' },
            { label: 'Menyerahkan lembar rekap ke staf', kind: 'cut' },
        ],
        added: ['Memeriksa angka per RK'],
    },
    {
        role: 'Pimpinan',
        old: [
            { label: 'Menunggu staf menyusun bahan', to: 'Membuka Perlu perhatian dan rekap', kind: 'changed' },
            { label: 'Bertanya siapa yang belum mengisi', kind: 'cut' },
            { label: 'Membuka lembar Excel tiap tim', to: 'Membaca rekap tim di layar', kind: 'changed' },
            { label: 'Meminta PJ memeriksa lewat pesan', to: 'PJ memeriksa sendiri di Review Bersama', kind: 'changed' },
            { label: 'Menunggu bahan FRA disusun', kind: 'cut' },
        ],
        added: [],
    },
];

const count = (lane: Lane) => ({
    before: lane.old.length,
    after: lane.old.filter((s) => s.kind !== 'cut').length + lane.added.length,
});

const totals = computed(() => {
    const before = lanes.reduce((n, l) => n + count(l).before, 0);
    const after = lanes.reduce((n, l) => n + count(l).after, 0);
    return { before, after, cut: before - after, percent: Math.round(((before - after) / before) * 100) };
});

const active = (index: number) => props.clicks >= index + 1;
</script>

<template>
    <div class="sop">
        <div v-for="(lane, i) in lanes" :key="lane.role" class="lane-row">
            <div class="role">
                <b>{{ lane.role }}</b>
                <div class="count">
                    <span class="before" :class="{ done: active(i) }">{{ count(lane).before }}</span>
                    <span class="arrow">&rarr;</span>
                    <span class="after" :class="{ show: active(i) }">{{ count(lane).after }}</span>
                </div>
            </div>
            <div class="chips">
                <div v-for="step in lane.old" :key="step.label" class="chip" :class="[step.kind, { on: active(i) }]">
                    <span class="l-old">{{ step.label }}</span>
                    <span v-if="step.to" class="l-new">{{ step.to }}</span>
                </div>
                <div v-for="a in lane.added" :key="a" class="chip add" :class="{ on: active(i) }">
                    <span class="l-new">{{ a }}</span>
                </div>
            </div>
        </div>

        <div class="total" :class="{ show: clicks >= 4 }">
            <span class="big-n">{{ totals.before }}</span> langkah manual
            <span class="arrow">&rarr;</span>
            <span class="big-n ok">{{ totals.after }}</span>
            <span class="cutline">dipangkas <b>{{ totals.cut }}</b> langkah ({{ totals.percent }} persen)</span>
        </div>
        <p class="note">Dihitung dari langkah di SOP, bukan dari waktu.</p>
    </div>
</template>

<style scoped>
.sop { display: flex; flex-direction: column; gap: .7rem; margin-top: .6rem; }
.lane-row { display: flex; align-items: stretch; gap: .8rem; }
.role { width: 8.2rem; flex: none; background: #E8EFF8; border-left: 6px solid #1B4B8C; border-radius: 10px; padding: .5rem .7rem; display: flex; flex-direction: column; justify-content: center; font-size: 1rem; }
.role b { color: #1B4B8C; font-size: 1.1rem; }
.count { font-size: 1.5rem; font-weight: 800; line-height: 1.1; display: flex; align-items: baseline; gap: .3rem; }
.count .before { color: #6b6b6b; transition: color .5s, opacity .5s; }
.count .before.done { opacity: .45; text-decoration: line-through; }
.count .arrow { font-size: 1rem; color: #F28C1B; opacity: 0; transition: opacity .5s; }
.count .after { color: #1F8A4C; opacity: 0; transition: opacity .6s .3s; }
.count .after.show, .lane-row:has(.chip.on) .arrow { opacity: 1; }
.chips { flex: 1; display: flex; gap: .45rem; align-items: stretch; min-width: 0; }
.chip { position: relative; flex: 1 1 0; min-width: 0; height: 4.8rem; border-radius: 10px; border: 2px solid #bdbdbd; background: #f1f1f1; color: #444; font-size: .78rem; font-weight: 600; line-height: 1.2; display: flex; align-items: center; justify-content: center; text-align: center; padding: .3rem .5rem; overflow: hidden; transition: flex .6s ease, opacity .5s ease, padding .6s ease, margin .6s ease, border-width .6s ease, background .5s, border-color .5s, color .5s; }
.chip .l-old, .chip .l-new { transition: opacity .4s ease; }
.chip .l-new { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: .3rem .5rem; opacity: 0; }
.chip.cut.on { flex: 0 0 0; opacity: 0; padding: 0; margin: 0 -.22rem; border-width: 0; transition-delay: .7s; }
.chip.cut.on .l-old { text-decoration: line-through; color: #b32d2d; transition-delay: 0s; }
.chip.cut { background: #f1f1f1; }
.chip.cut.on { background: #fde8e8; }
.chip.changed.on, .chip.kept.on { background: #E8EFF8; border-color: #1B4B8C; color: #1B4B8C; }
.chip.changed.on .l-old { opacity: 0; }
.chip.changed.on .l-new { opacity: 1; transition-delay: .35s; }
.chip.add { flex: 0 0 0; opacity: 0; padding: 0; border-width: 0; background: #FFF3E0; border-color: #F28C1B; color: #9a5a00; }
.chip.add.on { flex: 1 1 0; opacity: 1; padding: .3rem .5rem; border-width: 2px; transition-delay: .7s; }
.chip.add .l-new { opacity: 1; }
.total { margin-top: .4rem; font-size: 1.15rem; display: flex; align-items: baseline; gap: .7rem; flex-wrap: wrap; opacity: 0; transform: translateY(8px); transition: opacity .6s, transform .6s; }
.total.show { opacity: 1; transform: none; }
.total .big-n { font-size: 2.6rem; font-weight: 800; color: #6b6b6b; line-height: 1; }
.total .big-n.ok { color: #1F8A4C; }
.total .arrow { color: #F28C1B; font-size: 1.6rem; font-weight: 800; }
.total .cutline { margin-left: .6rem; background: #E7F5EC; border-left: 6px solid #1F8A4C; border-radius: 10px; padding: .35rem .9rem; font-size: 1.05rem; }
.note { font-size: .8rem; color: #5b6676; margin: 0; }
@media (prefers-reduced-motion: reduce) { .chip, .chip *, .total, .count * { transition-duration: .01ms !important; transition-delay: 0s !important; } }
</style>
