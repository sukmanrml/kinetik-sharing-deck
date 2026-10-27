import { defineAppSetup } from '@slidev/types'

// Speaker notes are only reachable with ?showNotes=1 (for example /<base>/?showNotes=1).
// Without it the presenter route sends the visitor back to the slide. This hides the notes from
// normal viewers; they stay in the published JavaScript, so never put secrets in them.
const FLAG = 'showNotes'
const on = (search: string) => new URLSearchParams(search).get(FLAG) === '1'

export default defineAppSetup(({ router }) => {
  // The first navigation may already be under way, so check the current route once it is ready.
  router.isReady().then(() => {
    const r = router.currentRoute.value
    if (on(window.location.search)) {
      if (!r.path.startsWith('/presenter')) router.replace({ path: `/presenter${r.path === '/' ? '/1' : r.path}`, query: { ...r.query, [FLAG]: '1' }, hash: r.hash })
    } else if (r.path.startsWith('/presenter')) {
      router.replace({ path: r.path.replace('/presenter', '') || '/1' })
    }
  })
  router.beforeEach((to, from) => {
    const wanted = on(window.location.search) || on(new URLSearchParams(to.query as Record<string, string>).toString()) || from.query[FLAG] === '1'
    const presenter = to.path.startsWith('/presenter')

    // Keep the flag while moving between slides.
    if (wanted && to.query[FLAG] !== '1') return { path: to.path, query: { ...to.query, [FLAG]: '1' }, hash: to.hash }
    // A plain slide URL with the flag opens the presenter view, which shows the notes.
    if (wanted && !presenter && !to.path.startsWith('/overview') && !to.path.startsWith('/notes')) {
      return { path: `/presenter${to.path === '/' ? '/1' : to.path}`, query: to.query, hash: to.hash }
    }
    // The presenter route without the flag goes back to the slide.
    if (!wanted && presenter) return { path: to.path.replace('/presenter', '') || '/1' }
  })
})
