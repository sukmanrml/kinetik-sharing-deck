<script setup lang="ts">
// clicks: 1 = Senin pagi, evaluasi minggu lalu; 2 = Senin pagi, rencana minggu ini; 3 = Selasa sampai Minggu; 4 = pimpinan; 5 = kembali ke Senin.
const props = defineProps<{ clicks: number }>();

const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
const nodes = [
    { n: 1, tag: 'Senin pagi', title: 'Evaluasi minggu lalu', text: 'Isi capaian dan bukti. PJ tulis parafrase per RK, lalu kunci rekap.' },
    { n: 2, tag: 'Senin pagi, sebelum 09.00', title: 'Rencana minggu ini', text: 'Tiap anggota isi rencana kegiatan minggu ini di Rekap Mingguan.' },
    { n: 3, tag: 'Selasa sampai Minggu', title: 'Kerja dan catat sekali', text: 'Catat di kipApp atau Kinetik. Auto sync, tidak ada copy-paste.' },
    { n: 4, tag: 'Setelah 09.00', title: 'Pimpinan cek', text: 'Kepatuhan Rencana dan panel Perlu perhatian: siapa yang belum punya rencana.' },
];
</script>

<template>
    <div class="ritual">
        <div class="week">
            <div v-for="(d, i) in days" :key="d" class="day" :class="{ mon: i === 0, hot: i === 0 && clicks >= 1, work: i > 0 && clicks >= 3 }">
                <span>{{ d }}</span>
                <b v-if="i === 0">evaluasi + rencana</b>
                <b v-else-if="i < 5">catat sekali</b>
            </div>
        </div>

        <div class="cards">
            <div v-for="nd in nodes" :key="nd.n" class="card-r" :class="{ on: clicks >= nd.n, now: clicks === nd.n, pimp: nd.n === 4 }">
                <span class="n">{{ nd.n }}</span>
                <p class="tg">{{ nd.tag }}</p>
                <p class="ttl">{{ nd.title }}</p>
                <p class="txt">{{ nd.text }}</p>
            </div>
        </div>

        <div class="loop" :class="{ on: clicks >= 5 }">
            <span class="line"></span>
            <span class="lbl">Senin berikutnya, mulai lagi dari evaluasi minggu yang baru selesai</span>
        </div>
    </div>
</template>

<style scoped>
.ritual { display: flex; flex-direction: column; gap: 1rem; margin-top: .6rem; }
.week { display: grid; grid-template-columns: repeat(7, 1fr); gap: .4rem; }
.day { border: 2px solid #dbe3ef; border-radius: 10px; padding: .4rem .3rem; text-align: center; background: #f7f9fc; color: #5b6676; font-size: .8rem; font-weight: 700; display: flex; flex-direction: column; gap: .15rem; min-height: 3.2rem; transition: background .5s, border-color .5s, color .5s; }
.day b { font-size: .62rem; font-weight: 600; opacity: 0; transition: opacity .5s; }
.day.mon { border-color: #F28C1B; }
.day.hot { background: #FFF3E0; color: #9a5a00; }
.day.hot b, .day.work b { opacity: 1; }
.day.work { background: #E8EFF8; border-color: #1B4B8C; color: #1B4B8C; }
.cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7rem; }
.card-r { position: relative; border: 2px solid #dbe3ef; border-radius: 12px; padding: .7rem .8rem .8rem; background: #fff; opacity: .2; transform: translateY(8px); transition: opacity .5s, transform .5s, border-color .5s, box-shadow .5s; min-height: 8.4rem; }
.card-r.on { opacity: 1; transform: none; }
.card-r.now { border-color: #F28C1B; box-shadow: 0 6px 16px rgb(242 140 27 / .2); }
.card-r.pimp.now { border-color: #1B4B8C; box-shadow: 0 6px 16px rgb(27 75 140 / .2); }
.n { position: absolute; top: -.7rem; left: .7rem; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: #F28C1B; color: #fff; font-weight: 800; font-size: .8rem; display: inline-flex; align-items: center; justify-content: center; }
.pimp .n { background: #1B4B8C; }
.tg { margin: .2rem 0 .1rem; font-size: .66rem; font-weight: 700; color: #9a5a00; text-transform: uppercase; letter-spacing: .03em; }
.pimp .tg { color: #1B4B8C; }
.ttl { margin: 0; font-size: 1rem; font-weight: 800; color: #1f2937; line-height: 1.15; }
.txt { margin: .35rem 0 0; font-size: .78rem; line-height: 1.3; color: #4b5563; }
.loop { display: flex; align-items: center; gap: .6rem; opacity: 0; transition: opacity .6s; }
.loop.on { opacity: 1; }
.line { flex: 1; height: 2.4rem; border: 3px solid #F28C1B; border-top: none; border-radius: 0 0 14px 14px; position: relative; }
.line::before { content: ''; position: absolute; left: -9px; top: -2px; border: 8px solid transparent; border-bottom-color: #F28C1B; transform: translateY(-100%); }
.lbl { flex: none; max-width: 17rem; font-size: .78rem; font-weight: 700; color: #9a5a00; line-height: 1.25; }
@media (prefers-reduced-motion: reduce) { .day, .day b, .card-r, .loop { transition-duration: .01ms !important; } }
</style>
