<script setup lang="ts">
// Alur login SSO versi sekarang (Keycloak), dijalankan Kinetik tanpa browser.
// clicks: 1..9 = langkah ke-n sudah berjalan, 10 = tanda titik berhenti di SSO baru.
const props = defineProps<{ clicks: number }>();

const cols = [
    { id: 'pegawai', label: 'Pegawai', sub: 'orang', x: 9, hand: true },
    { id: 'kinetik', label: 'Kinetik', sub: 'server', x: 36 },
    { id: 'kipapp', label: 'kipApp', sub: 'catatan resmi', x: 63 },
    { id: 'sso', label: 'SSO BPS', sub: 'login saat ini', x: 90 },
];
const x = (id: string) => cols.find((c) => c.id === id)!.x;

interface Step { from: string; to: string; label: string; hand?: boolean; key?: boolean }
const steps: Step[] = [
    { from: 'pegawai', to: 'kinetik', label: 'Isi username + password (sekali)', hand: true },
    { from: 'kinetik', to: 'kipapp', label: 'Buka halaman login kipApp' },
    { from: 'kipapp', to: 'sso', label: 'Redirect ke SSO' },
    { from: 'sso', to: 'kinetik', label: 'Halaman login, Kinetik ambil alamat form' },
    { from: 'kinetik', to: 'sso', label: 'Kirim username + password ke form', key: true },
    { from: 'sso', to: 'kinetik', label: 'Benar: redirect membawa kode login' },
    { from: 'kinetik', to: 'kipapp', label: 'Buka callback kipApp dengan kode' },
    { from: 'kipapp', to: 'kinetik', label: 'Redirect membawa token (JWT)' },
    { from: 'kinetik', to: 'kinetik', label: 'Simpan token terenkripsi (expired 24 jam). Kalau expired, login ulang otomatis' },
];

const style = (s: Step, i: number) => {
    const a = x(s.from), b = x(s.to);
    return s.from === s.to
        ? { left: a + 1.5 + '%', width: '60%', top: i * 2.5 + 'rem' }
        : { left: Math.min(a, b) + '%', width: Math.abs(b - a) + '%', top: i * 2.5 + 'rem' };
};
const dir = (s: Step) => (s.from === s.to ? 'self' : x(s.to) > x(s.from) ? 'right' : 'left');
const active = (i: number) => props.clicks >= i + 1;
</script>

<template>
    <div class="seq">
        <div class="heads">
            <div v-for="c in cols" :key="c.id" class="head" :class="{ hand: c.hand }" :style="{ left: c.x + '%' }"><b>{{ c.label }}</b><span>{{ c.sub }}</span></div>
        </div>
        <div class="body" :style="{ height: steps.length * 2.5 + 0.5 + 'rem' }">
            <span v-for="c in cols" :key="c.id" class="life" :style="{ left: c.x + '%' }"></span>

            <div v-for="(s, i) in steps" :key="i" class="arrow" :class="[dir(s), { on: active(i), now: clicks === i + 1, hand: s.hand, key: s.key }]" :style="style(s, i)">
                <span class="lbl"><i>{{ i + 1 }}</i>{{ s.label }}</span>
                <span class="line"></span>
            </div>

            <div class="branch" :class="{ on: clicks >= 6 }" :style="{ top: 5.2 * 2.5 + 'rem' }">Akun OTP: SSO minta kode, Kinetik kirim kode, lalu lanjut. Password salah: ditolak.</div>
            <div class="stop" :class="{ on: clicks >= 10 }" :style="{ top: 3.85 * 2.5 + 'rem' }">SSO baru: captcha dan passkey. Di langkah 5, cara ini berhenti.</div>
        </div>
    </div>
</template>

<style scoped>
.seq { margin-top: .4rem; }
.heads { position: relative; height: 2.6rem; }
.head { position: absolute; transform: translateX(-50%); min-width: 6rem; text-align: center; background: #fff; border: 2px solid #1B4B8C; border-radius: 10px; padding: .15rem .5rem; display: flex; flex-direction: column; line-height: 1.1; }
.head.hand { border-color: #F28C1B; }
.head b { font-size: .95rem; color: #1B4B8C; }
.head.hand b { color: #9a5a00; }
.head span { font-size: .62rem; color: #5b6676; }
.body { position: relative; }
.life { position: absolute; top: 0; bottom: 0; width: 0; border-left: 2px dashed #cfd8e6; transform: translateX(-1px); }
.arrow { position: absolute; height: 2rem; opacity: 0; transition: opacity .5s; }
.arrow.on { opacity: 1; }
.arrow .lbl { position: absolute; left: 0; right: 0; top: 0; text-align: center; font-size: .68rem; white-space: nowrap; overflow: visible; font-weight: 700; color: #1B4B8C; line-height: 1.1; padding: 0 .3rem; }
.arrow.hand .lbl { color: #9a5a00; }
.arrow .lbl i { display: inline-flex; width: 1.1rem; height: 1.1rem; margin-right: .3rem; border-radius: 50%; background: #1B4B8C; color: #fff; font: 800 .62rem/1.1rem system-ui, sans-serif; align-items: center; justify-content: center; font-style: normal; vertical-align: middle; }
.arrow.hand .lbl i { background: #F28C1B; }
.arrow .line { position: absolute; left: 0; right: 0; bottom: .25rem; height: 0; border-top: 3px solid #1B4B8C; }
.arrow.hand .line { border-top-color: #F28C1B; }
.arrow.right .line::after, .arrow.left .line::after { content: ''; position: absolute; top: -8px; border: 6px solid transparent; }
.arrow.right .line::after { right: -2px; border-left: 10px solid #1B4B8C; }
.arrow.left .line::after { left: -2px; border-right: 10px solid #1B4B8C; }
.arrow.hand.right .line::after { border-left-color: #F28C1B; }
.arrow.self { height: 2.2rem; }
.arrow.self .line { inset: 0; bottom: 0; height: auto; border: 3px solid #1F8A4C; border-radius: 10px; background: #E7F5EC; }
.arrow.self .lbl { color: #145c33; top: 50%; transform: translateY(-50%); left: .6rem; right: .6rem; z-index: 1; text-align: left; }
.arrow.now .line { filter: drop-shadow(0 0 4px rgb(27 75 140 / .55)); }
.arrow.key.now .line, .arrow.key.on .line { border-top-color: #b32d2d; }
.arrow.key.right .line::after { border-left-color: #b32d2d; }
.branch { position: absolute; left: 0; width: 30%; font-size: .68rem; line-height: 1.2; background: #FFF3E0; border-left: 4px solid #F28C1B; border-radius: 6px; padding: .25rem .5rem; color: #7a4600; opacity: 0; transition: opacity .6s; }
.branch.on { opacity: 1; }
.stop { position: absolute; left: 0; width: 30%; font-size: .72rem; font-weight: 700; line-height: 1.2; background: #fde8e8; border: 2px solid #b32d2d; border-radius: 8px; padding: .3rem .5rem; color: #8a1f1f; opacity: 0; transform: scale(.9); transition: opacity .5s, transform .5s; z-index: 3; }
.stop.on { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .arrow, .branch, .stop { transition-duration: .01ms !important; } }
</style>
