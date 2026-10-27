<script setup lang="ts">
import { computed } from 'vue';

// clicks: 1 = file yang di-download browser, 2 = bundle disorot, 3 = decompile, 4 = daftar endpoint.
const props = defineProps<{ clicks: number }>();

const files = [
    { name: 'index.html', size: '3 kB', type: 'document' },
    { name: 'app.css', size: '212 kB', type: 'stylesheet' },
    { name: 'chunk-vendors.js', size: '1,4 MB', type: 'script' },
    { name: 'app.js  (bundle)', size: '2,8 MB', type: 'script', bundle: true },
    { name: 'logo.svg', size: '9 kB', type: 'svg' },
];

const scrambled = "var _0x4f2a=['\\x2f\\x76\\x31\\x2f\\x6b\\x65\\x67\\x69\\x61\\x74\\x61\\x6e'];\nfunction _0x1b3c(a){return _0x4f2a[a-0x1c];}\naxios[_0x1b3c(0x1c)](_0x4f2a[0x0]+_0x1b3c(0x1d),_0x5d1e);";
const readable = "// hasil decompile + dirapikan AI\naxios.post('/v1/kegiatan/kirim', { id: ids });\naxios.get('/v1/kegiatan', { params: { skpid } });";

const endpoints = [
    ['GET', '/v1/kegiatan?skpid='],
    ['POST', '/v1/kegiatan'],
    ['PUT', '/v1/kegiatan'],
    ['POST', '/v1/kegiatan/kirim'],
    ['GET', '/v1/skp/rk?skpid='],
    ['GET', '/v1/dashboard/rkpegawai'],
];

const step = computed(() => Math.max(0, Math.min(props.clicks, 4)));
</script>

<template>
    <div class="disc">
        <div class="panel p1" :class="{ on: step >= 1 }">
            <div class="cap">1. Tab Network di DevTools</div>
            <div class="net">
                <div v-for="(f, i) in files" :key="f.name" class="frow" :class="{ hot: f.bundle && step >= 2 }" :style="{ transitionDelay: i * 120 + 'ms' }">
                    <span class="fn">{{ f.name }}</span><span class="fs">{{ f.size }}</span>
                </div>
            </div>
            <div class="note" :class="{ show: step >= 2 }">Bundle = isi aplikasi yang sebenarnya</div>
        </div>

        <div class="arrow" :class="{ on: step >= 3 }">decompile<br>+ AI</div>

        <div class="panel p2" :class="{ on: step >= 2 }">
            <div class="cap">2. Isi bundle</div>
            <pre class="code scr" :class="{ gone: step >= 3 }">{{ scrambled }}</pre>
            <pre class="code rd" :class="{ show: step >= 3 }">{{ readable }}</pre>
        </div>

        <div class="arrow" :class="{ on: step >= 4 }">daftar<br>endpoint</div>

        <div class="panel p3" :class="{ on: step >= 4 }">
            <div class="cap">3. Endpoint untuk kirim dan baca data</div>
            <div v-for="(e, i) in endpoints" :key="e[1]" class="ep" :style="{ transitionDelay: i * 110 + 'ms' }">
                <span class="m" :class="e[0].toLowerCase()">{{ e[0] }}</span><span class="path">{{ e[1] }}</span>
            </div>
            <div class="more">+ 165 endpoint lain (total 171)</div>
        </div>
    </div>
</template>

<style scoped>
.disc { display: grid; grid-template-columns: 1.05fr auto 1.2fr auto 1.05fr; align-items: stretch; gap: .6rem; margin-top: .8rem; }
.panel { background: #f7f9fc; border: 1px solid #dde3ec; border-radius: 12px; padding: .6rem .7rem; opacity: .25; transform: translateY(6px); transition: opacity .6s, transform .6s; min-height: 14rem; }
.panel.on { opacity: 1; transform: none; }
.cap { font-size: .72rem; font-weight: 700; color: #1B4B8C; margin-bottom: .4rem; }
.net { display: flex; flex-direction: column; gap: .2rem; }
.frow { display: flex; justify-content: space-between; font: 600 .7rem/1.1 ui-monospace, Menlo, monospace; padding: .28rem .4rem; border-radius: 6px; background: #fff; border: 1px solid #e6ebf3; transition: background .5s, border-color .5s, color .5s; }
.frow.hot { background: #FFF3E0; border-color: #F28C1B; color: #9a5a00; }
.fs { color: #5b6676; }
.note { margin-top: .5rem; font-size: .72rem; font-weight: 700; color: #9a5a00; opacity: 0; transition: opacity .5s; }
.note.show { opacity: 1; }
.code { margin: 0; font: .62rem/1.35 ui-monospace, Menlo, monospace; white-space: pre-wrap; word-break: break-all; border-radius: 8px; padding: .45rem .5rem; transition: opacity .6s, max-height .6s; overflow: hidden; }
.code.scr { background: #2b2f3a; color: #b6bcc9; max-height: 10rem; }
.code.scr.gone { opacity: .35; max-height: 4.5rem; }
.code.rd { background: #E7F5EC; color: #145c33; opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; margin-top: .4rem; }
.code.rd.show { opacity: 1; max-height: 8rem; padding: .45rem .5rem; }
.arrow { align-self: center; text-align: center; font-size: .72rem; font-weight: 800; color: #F28C1B; opacity: .2; transition: opacity .5s; line-height: 1.2; }
.arrow::after { content: '\2192'; display: block; font-size: 1.6rem; }
.arrow.on { opacity: 1; }
.ep { display: flex; align-items: center; gap: .4rem; font: 600 .68rem/1.1 ui-monospace, Menlo, monospace; padding: .24rem 0; opacity: 0; transform: translateX(-8px); transition: opacity .5s, transform .5s; }
.p3.on .ep { opacity: 1; transform: none; }
.m { flex: none; min-width: 2.6rem; text-align: center; border-radius: 5px; padding: .08rem .3rem; color: #fff; font-size: .62rem; }
.m.get { background: #1B4B8C; } .m.post { background: #1F8A4C; } .m.put { background: #F28C1B; }
.more { margin-top: .4rem; font-size: .68rem; color: #5b6676; opacity: 0; transition: opacity .6s .8s; }
.p3.on .more { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .panel, .frow, .code, .arrow, .ep, .more, .note { transition-duration: .01ms !important; transition-delay: 0s !important; } }
</style>
