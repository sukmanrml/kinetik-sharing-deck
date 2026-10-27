watch(() => props.clicks, (now) => {
    // Forward or back: zoom to the pin of the current click. Going back keeps the zoom and glides to the earlier pin.
    const step = shot.value.steps.find((s) => s.n === now);
    if (reduced || !step) { zoomed.value = false; clearTimeout(timer); return; }
    target.value = { x: step.x, y: step.y };
    zoomed.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => { zoomed.value = false; }, HOLD_MS);
});
<script setup lang="ts">
// Screenshot UI dengan penanda bernomor. Penanda dan keterangan muncul satu per satu sesuai klik.
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { shots } from './shotData';

const props = defineProps<{ id: string; clicks: number }>();
const shot = computed(() => shots[props.id]);
// Path gambar di shotData dimulai dengan "/". Tambahkan base agar tetap jalan di sub-path (GitHub Pages).
const src = computed(() => import.meta.env.BASE_URL + shot.value.src.replace(/^\//, ''));

// Saat sebuah nomor muncul, screenshot diperbesar ke titik itu beberapa detik, lalu kembali normal.
const ZOOM = 2.2;
const HOLD_MS = 2600;
const zoomed = ref(false);
const target = ref({ x: 50, y: 50 });
let timer: ReturnType<typeof setTimeout> | undefined;
const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

watch(() => props.clicks, (now, before) => {
    if (reduced || now <= before) { zoomed.value = false; return; }
    const step = shot.value.steps.find((s) => s.n === now);
    if (!step) return;
    target.value = { x: step.x, y: step.y };
    zoomed.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => { zoomed.value = false; }, HOLD_MS);
});
onBeforeUnmount(() => clearTimeout(timer));
// Satu transformasi (geser + skala) yang memusatkan titik penanda, supaya perpindahan antar-penanda mulus.
// Geseran dibatasi agar tepi gambar tidak menampilkan area kosong.
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const zoomStyle = computed(() => {
    const z = zoomed.value ? ZOOM : 1;
    const tx = zoomed.value ? clamp(50 - z * target.value.x, 100 - 100 * z, 0) : 0;
    const ty = zoomed.value ? clamp(50 - z * target.value.y, 100 - 100 * z, 0) : 0;
    return { '--z': z, transform: `translate(${tx}%, ${ty}%) scale(${z})`, transformOrigin: '0 0' };
});
</script>

<template>
    <div class="shot">
        <div class="frame">
            <div class="bar"><i></i><i></i><i></i><span>{{ shot.url ?? 'kinetik.bpssulteng.id' }}</span></div>
            <div class="img">
                <div class="zoomer" :style="zoomStyle">
                    <img :src="src" alt="" />
                    <span v-for="s in shot.steps" :key="s.n" class="pin" :class="{ on: clicks >= s.n, now: clicks === s.n }" :style="{ left: s.x + '%', top: s.y + '%' }">{{ s.n }}</span>
                </div>
            </div>
        </div>
        <ol class="notes">
            <li v-for="s in shot.steps" :key="s.n" :class="{ on: clicks >= s.n, now: clicks === s.n }">
                <span class="n">{{ s.n }}</span><span class="t">{{ s.text }}</span>
            </li>
        </ol>
    </div>
</template>

<style scoped>
.shot { display: grid; grid-template-columns: 2.1fr 1fr; gap: 1rem; margin-top: .5rem; align-items: start; }
.frame { border: 1px solid #cfd8e6; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 6px 20px rgb(27 75 140 / .12); }
.bar { display: flex; align-items: center; gap: .3rem; padding: .3rem .6rem; background: #eef2f8; border-bottom: 1px solid #dbe3ef; font-size: .62rem; color: #5b6676; }
.bar i { width: .5rem; height: .5rem; border-radius: 50%; background: #c8d2e2; }
.bar span { margin-left: .5rem; }
.img { position: relative; line-height: 0; overflow: hidden; }
.zoomer { position: relative; transition: transform .9s cubic-bezier(.4, 0, .2, 1); will-change: transform; }
.img img { width: 100%; display: block; }
.pin { position: absolute; transform: translate(-50%, -50%) scale(0); width: 1.2rem; height: 1.2rem; border-radius: 50%; background: #F28C1B; color: #fff; font: 800 .68rem/1.2rem system-ui, sans-serif; text-align: center; box-shadow: 0 0 0 2px #fff, 0 2px 6px rgb(0 0 0 / .4); transition: transform .9s cubic-bezier(.4, 0, .2, 1); }
.pin.on { transform: translate(-50%, -50%) scale(calc(1 / var(--z, 1))); }
.pin.now { animation: ping 1.2s ease-out 2; }
@keyframes ping { 0% { box-shadow: 0 0 0 2px #fff, 0 0 0 2px rgb(242 140 27 / .7); } 100% { box-shadow: 0 0 0 2px #fff, 0 0 0 12px rgb(242 140 27 / 0); } }
.notes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .5rem; }
.notes li { display: flex; gap: .55rem; align-items: flex-start; font-size: .82rem; line-height: 1.3; opacity: .18; transform: translateX(8px); transition: opacity .5s, transform .5s; }
.notes li.on { opacity: 1; transform: none; }
.notes li.now .t { background: #FFF3E0; border-radius: 6px; }
.n { flex: none; width: 1.4rem; height: 1.4rem; border-radius: 50%; background: #F28C1B; color: #fff; font-weight: 800; font-size: .75rem; display: inline-flex; align-items: center; justify-content: center; margin-top: .05rem; }
.t { padding: .05rem .3rem; }
@media (prefers-reduced-motion: reduce) { .pin, .notes li, .zoomer { transition-duration: .01ms !important; } .pin.now { animation: none; } }
</style>
