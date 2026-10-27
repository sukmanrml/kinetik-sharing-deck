<script setup lang="ts">
import { computed } from 'vue';

// mode: 'manual' = cara pertama (token di-copy admin), 'auto' = cara akhir (masuk SSO, token otomatis).
// clicks: 0 = awal, n = langkah ke-n sudah berjalan.
const props = defineProps<{ mode: 'manual' | 'auto'; clicks: number }>();

type NodeId = 'admin' | 'pegawai' | 'kinetik' | 'sso' | 'kipapp';
interface Node { id: NodeId; label: string; sub: string; x: number; y: number }
interface Step { from: NodeId; to: NodeId; label: string; hand: boolean; warn?: boolean }

const configs = {
    manual: {
        nodes: [
            { id: 'admin', label: 'Admin', sub: 'orang', x: 14, y: 72 },
            { id: 'kinetik', label: 'Kinetik', sub: 'server', x: 50, y: 16 },
            { id: 'kipapp', label: 'kipApp', sub: 'catatan resmi', x: 86, y: 72 },
        ] as Node[],
        steps: [
            { from: 'admin', to: 'kipapp', label: 'Admin login ke kipApp lewat SSO', hand: true },
            { from: 'kipapp', to: 'admin', label: 'Token muncul di DevTools browser', hand: true },
            { from: 'admin', to: 'kinetik', label: 'Admin copy-paste token di Kinetik', hand: true },
            { from: 'kinetik', to: 'kipapp', label: 'Kinetik meminta data memakai token', hand: false },
            { from: 'kipapp', to: 'kinetik', label: 'Data kegiatan masuk ke Kinetik', hand: false },
            { from: 'admin', to: 'admin', label: 'Token expired dalam 24 jam, admin mengulang dari awal', hand: true, warn: true },
        ] as Step[],
        badge: 'Manual, setiap hari: 3 langkah, oleh satu orang',
    },
    auto: {
        nodes: [
            { id: 'pegawai', label: 'Pegawai', sub: 'orang', x: 10, y: 72 },
            { id: 'kinetik', label: 'Kinetik', sub: 'server', x: 36, y: 18 },
            { id: 'sso', label: 'SSO BPS', sub: 'pintu masuk', x: 62, y: 72 },
            { id: 'kipapp', label: 'kipApp', sub: 'catatan resmi', x: 90, y: 18 },
        ] as Node[],
        steps: [
            { from: 'pegawai', to: 'kinetik', label: 'Pegawai login dengan password SSO, satu kali', hand: true },
            { from: 'kinetik', to: 'sso', label: 'Kinetik login ke SSO atas nama pegawai', hand: false },
            { from: 'sso', to: 'kipapp', label: 'SSO mengesahkan, kipApp memberi token', hand: false },
            { from: 'kipapp', to: 'kinetik', label: 'Token tersimpan terenkripsi di Kinetik', hand: false },
            { from: 'kinetik', to: 'kipapp', label: 'Kinetik mengambil data seluruh pegawai', hand: false },
            { from: 'kinetik', to: 'kinetik', label: 'Token expired: Kinetik login ulang sendiri dengan password tersimpan', hand: false },
        ] as Step[],
        badge: 'Manual: 1 langkah, sekali saja, oleh tiap pegawai',
    },
};

const cfg = computed(() => configs[props.mode]);
const pos = (id: NodeId) => cfg.value.nodes.find((n) => n.id === id)!;
const current = computed(() => Math.max(0, Math.min(props.clicks, cfg.value.steps.length)));
const packetAt = computed(() => (current.value === 0 ? pos(cfg.value.steps[0].from) : pos(cfg.value.steps[current.value - 1].to)));
const lastStep = computed(() => (current.value > 0 ? cfg.value.steps[current.value - 1] : null));
const looping = computed(() => lastStep.value !== null && lastStep.value.from === lastStep.value.to);
const drawn = computed(() => cfg.value.steps.map((s, i) => ({ ...s, i })).filter((s) => s.i < current.value && s.from !== s.to));
</script>

<template>
    <div class="sync" :class="mode">
        <div class="stage">
            <svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <line v-for="s in drawn" :key="mode + s.i" :x1="pos(s.from).x" :y1="pos(s.from).y" :x2="pos(s.to).x" :y2="pos(s.to).y"
                      :class="['ln', s.hand ? 'hand' : 'auto']" />
            </svg>

            <div v-for="n in cfg.nodes" :key="n.id" class="node" :class="[n.id, { hot: lastStep && (lastStep.to === n.id) }]" :style="{ left: n.x + '%', top: n.y + '%' }">
                <b>{{ n.label }}</b><span>{{ n.sub }}</span>
            </div>

            <div class="packet" :class="{ pulse: looping, warn: lastStep?.warn, auto: looping && !lastStep?.hand }" :style="{ left: packetAt.x + '%', top: packetAt.y + '%' }" :key="'p' + mode">
                <span>token</span>
            </div>
        </div>

        <div class="side">
            <ol>
                <li v-for="(s, i) in cfg.steps" :key="i" :class="{ done: i < current - 1, now: i === current - 1, pending: i >= current }">
                    <span class="num">{{ i + 1 }}</span>
                    <span class="txt">{{ s.label }}</span>
                    <span class="who" :class="s.hand ? 'hand' : 'auto'">{{ s.hand ? 'manual' : 'otomatis' }}</span>
                </li>
            </ol>
            <div class="badge" :class="{ show: current >= cfg.steps.length }">{{ cfg.badge }}</div>
        </div>
    </div>
</template>

<style scoped>
.sync { display: grid; grid-template-columns: 1.25fr 1fr; gap: 1.2rem; margin-top: .6rem; }
.stage { position: relative; height: 15rem; background: #f7f9fc; border: 1px solid #dde3ec; border-radius: 14px; }
.lines { position: absolute; inset: 0; width: 100%; height: 100%; }
.ln { stroke-width: 3; stroke-linecap: round; vector-effect: non-scaling-stroke; opacity: 0; animation: draw .7s ease forwards; }
.ln.hand { stroke: #F28C1B; }
.ln.auto { stroke: #1B4B8C; }
@keyframes draw { from { opacity: 0; stroke-width: 1; } to { opacity: .9; stroke-width: 3; } }
.node { position: absolute; transform: translate(-50%, -50%); background: #fff; border: 2px solid #1B4B8C; border-radius: 12px; padding: .4rem .8rem; text-align: center; min-width: 6.2rem; display: flex; flex-direction: column; line-height: 1.15; transition: box-shadow .4s, background .4s; z-index: 2; }
.node b { color: #1B4B8C; font-size: 1.05rem; }
.node span { font-size: .72rem; color: #5b6676; }
.node.hot { background: #E8EFF8; box-shadow: 0 0 0 5px rgba(27, 75, 140, .18); }
.node.admin, .node.pegawai { border-color: #F28C1B; }
.node.admin b, .node.pegawai b { color: #9a5a00; }
.packet { position: absolute; transform: translate(-50%, -50%); z-index: 3; background: #F28C1B; color: #fff; font-size: .72rem; font-weight: 700; border-radius: 999px; padding: .15rem .65rem; box-shadow: 0 2px 8px rgba(0, 0, 0, .25); transition: left .9s cubic-bezier(.5, 0, .2, 1), top .9s cubic-bezier(.5, 0, .2, 1), background .4s; margin-top: 2.5rem; }
.auto .packet { background: #1B4B8C; }
.packet.warn { background: #b32d2d; }
.packet.pulse { animation: pulse .9s ease 2; }
.packet.pulse.auto { background: #1F8A4C; }
@keyframes pulse { 50% { transform: translate(-50%, -50%) scale(1.35); } }
.side ol { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .35rem; }
.side li { display: flex; align-items: center; gap: .5rem; font-size: .82rem; line-height: 1.2; padding: .3rem .5rem; border-radius: 8px; border: 1px solid transparent; transition: opacity .4s, background .4s, border-color .4s; }
.side li.pending { opacity: .3; }
.side li.done { opacity: .75; }
.side li.now { background: #FFF3E0; border-color: #F28C1B; opacity: 1; }
.auto .side li.now { background: #E8EFF8; border-color: #1B4B8C; }
.num { width: 1.4rem; height: 1.4rem; flex: none; border-radius: 50%; background: #6b6b6b; color: #fff; font-weight: 700; font-size: .75rem; display: inline-flex; align-items: center; justify-content: center; }
.txt { flex: 1; }
.who { flex: none; font-size: .65rem; font-weight: 700; border-radius: 999px; padding: .05rem .5rem; color: #fff; }
.who.hand { background: #F28C1B; }
.who.auto { background: #1B4B8C; }
.badge { margin-top: .7rem; padding: .45rem .8rem; border-radius: 10px; font-size: .88rem; font-weight: 700; background: #FBF3E0; border-left: 6px solid #F28C1B; color: #9a5a00; opacity: 0; transform: translateY(6px); transition: opacity .5s, transform .5s; }
.auto .badge { background: #E7F5EC; border-left-color: #1F8A4C; color: #1F8A4C; }
.badge.show { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .ln { animation-duration: .01ms; } .packet, .node, .side li, .badge { transition-duration: .01ms !important; } .packet.pulse { animation: none; } }
</style>
