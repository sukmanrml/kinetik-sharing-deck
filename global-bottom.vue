<template>
  <div v-if="$nav.currentLayout !== 'cover'" class="deckfoot">
    <img src="/bps-logo.svg" alt="BPS" />
    <span>Kinetik · BPS Provinsi Sulawesi Tengah</span>
    <span class="pg">{{ $nav.currentPage }} / {{ $nav.total }}</span>
  </div>
</template>
