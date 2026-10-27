<script setup lang="ts">
// clicks 1..8 = one step each, left to right and top to bottom.
defineProps<{ clicks: number }>();

type Tool = 'kipApp' | 'Kinetik' | 'Kinetik atau kipApp';
const steps: Array<{ n: number; who: string; title: string; text: string; tool: Tool; test: 'teruji' | 'belum' | null }> = [
    { n: 1, who: 'Tim kerja dan admin', title: 'Awal tahun', text: 'PK, IKU, RK Ketua, Proyek, RK Anggota dibuat. Proyek mengelompokkan RK Anggota per tim.', tool: 'kipApp', test: null },
    { n: 2, who: 'Anggota', title: 'SKP Tahunan dikirim', text: 'Pilih RK Anggota, isi IKI, lalu Kirim untuk ditetapkan.', tool: 'Kinetik atau kipApp', test: 'belum' },
    { n: 3, who: 'Atasan', title: 'Penetapan', text: 'Atasan: PJ untuk anggota, pimpinan untuk PJ. Notifikasi, lalu Tetapkan atau Kembalikan di Persetujuan SKP.', tool: 'Kinetik atau kipApp', test: 'belum' },
    { n: 4, who: 'Anggota', title: 'SKP triwulan dibuat', text: 'Buat SKP TW, centang RK. Terbuka setelah SKP Tahunan ditetapkan.', tool: 'Kinetik', test: 'belum' },
    { n: 5, who: 'Anggota', title: 'Kegiatan', text: 'Rencana mingguan, kirim ke kipApp, tandai selesai, kirim ke atasan.', tool: 'Kinetik', test: 'teruji' },
    { n: 6, who: 'Anggota', title: 'SKP dikirim untuk dinilai', text: 'SKP Saya, Kirim untuk dinilai. Bisa dibatalkan sebelum dinilai.', tool: 'Kinetik', test: 'teruji' },
    { n: 7, who: 'Atasan', title: 'Penilaian', text: 'Nilai tiap RK dan perilaku, lalu Dinilai. Halaman di Kinetik belum diuji nilai asli.', tool: 'Kinetik atau kipApp', test: 'belum' },
    { n: 8, who: 'Kinetik', title: 'Angka Kredit', text: 'Dihitung sebagai estimasi dari predikat SKP yang sudah Dinilai.', tool: 'Kinetik', test: null },
];
</script>

<template>
    <div class="life">
        <div v-for="s in steps" :key="s.n" class="node" :class="[{ on: clicks >= s.n, now: clicks === s.n }, s.tool === 'kipApp' ? 'kip' : 'kin']">
            <span class="n">{{ s.n }}</span>
            <p class="who">{{ s.who }}</p>
            <p class="ttl">{{ s.title }}</p>
            <p class="txt">{{ s.text }}</p>
            <p class="tags">
                <span class="tool">{{ s.tool }}</span>
                <span v-if="s.test" class="tst" :class="s.test">{{ s.test === 'teruji' ? 'teruji langsung' : 'belum diuji langsung' }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.life { display: grid; grid-template-columns: repeat(4, 1fr); gap: .6rem; margin-top: .5rem; }
.node { position: relative; background: #f4f6fa; border-top: 5px solid #cfd8e6; border-radius: 10px; padding: .55rem .6rem .5rem; opacity: .15; transform: translateY(6px); transition: opacity .5s, transform .5s, box-shadow .5s; }
.node.on { opacity: 1; transform: none; }
.node.kin.on { background: var(--blue2); border-top-color: var(--blue); }
.node.kip.on { background: #f1f1f1; border-top-color: #8a8a8a; }
.node.now { box-shadow: 0 0 0 3px rgb(242 140 27 / .55); }
.n { position: absolute; top: -.7rem; left: .5rem; width: 1.4rem; height: 1.4rem; border-radius: 50%; background: var(--orange); color: #fff; font: 800 .75rem/1.4rem system-ui, sans-serif; text-align: center; }
.who { margin: .15rem 0 0; font-size: .64rem; text-transform: uppercase; letter-spacing: .04em; color: var(--mute); }
.ttl { margin: 0; font-size: .92rem; font-weight: 800; color: var(--blue); line-height: 1.15; }
.txt { margin: .2rem 0 .3rem; font-size: .72rem; line-height: 1.25; }
.tags { margin: 0; display: flex; flex-wrap: wrap; gap: .25rem; font-size: .6rem; }
.tool { background: #fff; border: 1px solid #cfd8e6; border-radius: 999px; padding: 0 .4rem; }
.tst { border-radius: 999px; padding: 0 .4rem; }
.tst.teruji { background: #E7F5EC; color: #14532d; }
.tst.belum { background: #FBF3E0; color: #7a4a00; }
@media (prefers-reduced-motion: reduce) { .node { transition-duration: .01ms; } }
</style>
