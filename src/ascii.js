/** ASCII compositions — creative material for the portfolio. */

export const BOX = {
  tl: '┌', tr: '┐', bl: '└', br: '┘',
  h: '─', v: '│',
  ml: '├', mr: '┤', mt: '┬', mb: '┴', x: '┼',
  dh: '═', dv: '║',
  dtl: '╔', dtr: '╗', dbl: '╚', dbr: '╝',
}

export function frameLines(lines, { width = 42, title = '' } = {}) {
  const inner = Math.max(width, ...lines.map((l) => l.length), title.length + 4)
  const pad = (s) => {
    const t = s.slice(0, inner)
    return t + ' '.repeat(inner - t.length)
  }
  const top = title
    ? `${BOX.tl}${BOX.h} ${title} ${BOX.h.repeat(Math.max(0, inner - title.length - 3))}${BOX.tr}`
    : `${BOX.tl}${BOX.h.repeat(inner)}${BOX.tr}`
  const mid = lines.map((l) => `${BOX.v}${pad(l)}${BOX.v}`)
  const bot = `${BOX.bl}${BOX.h.repeat(inner)}${BOX.br}`
  return [top, ...mid, bot].join('\n')
}

/** Dense character texture for backgrounds */
export function texture(rows = 12, cols = 48, seed = 1) {
  const glyphs = '.:·∙•░▒▓█╬╪╫┼╳╱╲│─┌┐└┘═║╔╗╚╝+-*=#@'
  let out = []
  let s = seed
  for (let r = 0; r < rows; r++) {
    let line = ''
    for (let c = 0; c < cols; c++) {
      s = (s * 1103515245 + 12345 + r * 17 + c) >>> 0
      line += glyphs[s % glyphs.length]
    }
    out.push(line)
  }
  return out.join('\n')
}

export const heroAscii = {
  voice: `
╔══════════════════════════════════════╗
║  ░░░░░ VOICE ANYWHERE ░░░░░░░░░░░░░  ║
║                                      ║
║      ┌────────────────────┐          ║
║      │  ● REC  00:12.4    │          ║
║      │  ▁▂▃▅▇█▇▅▃▂▁▂▃▅    │          ║
║      │  hold · speak · go │          ║
║      └────────────────────┘          ║
║                                      ║
║   > mic.open()                       ║
║   > stream.pipe(whisper)             ║
║   > text.land()                      ║
║                                      ║
║   ████░░░░░░  debug APK  Android 12+ ║
╚══════════════════════════════════════╝`.trim(),

  excalidays: `
╔══════════════════════════════════════╗
║  ░░░░░ EXCALIDAYS · PHASE 0/1 ░░░░░  ║
║                                      ║
║   ┌──┬──┬──┬──┬──┬──┬──┐             ║
║   │M │T │W │T │F │S │S │             ║
║   ├──┼──┼──┼──┼──┼──┼──┤             ║
║   │  │░░│▓▓│  │▒▒│  │  │  canvas     ║
║   │██│  │  │░░│  │▓▓│  │  for days   ║
║   │  │▒▒│██│  │░░│  │▒▒│  you draw   ║
║   └──┴──┴──┴──┴──┴──┴──┘             ║
║                                      ║
║   Swift · AppKit · SwiftUI · WKWeb   ║
║   > stroke.begin() · day.lock()      ║
╚══════════════════════════════════════╝`.trim(),

  synapse: `
╔══════════════════════════════════════╗
║  ░░░░░ SYNAPSE NOTES ░░░░░░░░░░░░░░  ║
║                                      ║
║   ┌─ thread ─────────────────────┐   ║
║   │ ● idea                       │   ║
║   │ │  ├─ capture                │   ║
║   │ │  ├─ link ──► note          │   ║
║   │ │  └─ keep the thread        │   ║
║   │ ○ next                       │   ║
║   └──────────────────────────────┘   ║
║                                      ║
║   > graph.connect(a, b)              ║
║   > notes.persist(local)             ║
║   ████░░░░░░  debug APK  Android     ║
╚══════════════════════════════════════╝`.trim(),
}

export const worldAscii = {
  capture: `
░░░░░░░░░░░░░░░░ CAPTURE ░░░░░░░░░░░░░░
┌──────────────────────────────────────┐
│  ((( ● )))     mic / tape / note     │
│   ▁▂▃▅▇█▇▅▃▂▁  signal in             │
│                                      │
│  > hold control-space                │
│  > dictate from anywhere             │
│  > text lands on device              │
└──────────────────────────────────────┘
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`.trim(),

  create: `
░░░░░░░░░░░░░░░░ CREATE ░░░░░░░░░░░░░░░
┌──────────────────────────────────────┐
│  ╔══╗  boards · contracts · drafts   │
│  ║░░║  type that stays local         │
│  ╚══╝                                │
│  ┌─┬─┬─┐  ┌──────────┐               │
│  │█│░│▒│  │ make it  │               │
│  └─┴─┴─┘  └──────────┘               │
│  > canvas.open() · draft.save()      │
└──────────────────────────────────────┘
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`.trim(),

  clean: `
░░░░░░░░░░░░░░░░░ CLEAN ░░░░░░░░░░░░░░░
┌──────────────────────────────────────┐
│                                      │
│     before          after            │
│   ▓▓▓▓▓▓▓▓        · · · ·            │
│   ▓░FILE░▓   →    · name ·           │
│   ▓▓▓▓▓▓▓▓        · · · ·            │
│                                      │
│   rename · redact · count · clear    │
│   > clutter.splice(0)                │
│                                      │
└──────────────────────────────────────┘
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`.trim(),

  listen: `
░░░░░░░░░░░░░░░░ LISTEN ░░░░░░░░░░░░░░░
┌──────────────────────────────────────┐
│                                      │
│    ♪  ┌─────────────────────┐        │
│   ♫♫  │ ▁▂▃▅▇▅▃▂▁▂▃▅▇█▇▅▃  │        │
│    ♪  │ local · aarch64     │        │
│       └─────────────────────┘        │
│                                      │
│   one room for sound on your machine │
│   > sonora.play() · stay.local()     │
│                                      │
└──────────────────────────────────────┘
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`.trim(),
}

/** Hall collectible ASCII for products without photo density */
export const hallAscii = {
  cistilka: `
┌──────────────┐
│  ▓▓ CLEAN ▓▓ │
│  ░░░░░░░░░░  │
│  clutter → ∅ │
│   CISTILKA   │
└──────────────┘`.trim(),

  shareguard: `
┌──────────────┐
│  ╔═ SHARE ═╗ │
│  ║ ░░░░░░  ║ │
│  ║ redact  ║ │
│  ╚═════════╝ │
│  SHAREGUARD  │
└──────────────┘`.trim(),

  cliprail: `
┌──────────────┐
│  ≡≡≡≡≡≡≡≡≡≡  │
│  clipboard   │
│  on a rail   │
│  > clip.next │
│   CLIPRAIL   │
└──────────────┘`.trim(),

  nodaysrecord: `
┌──────────────┐
│   ● REC      │
│  ▁▂▃▅▇▅▃▂▁  │
│  stop · keep │
│  NODAYSREC   │
└──────────────┘`.trim(),

  nodaystypst: `
┌──────────────┐
│  T Y P S T   │
│  ┌────────┐  │
│  │ #set   │  │
│  │ page() │  │
│  └────────┘  │
│  arm64 DMG   │
└──────────────┘`.trim(),

  sonora: `
┌──────────────┐
│  ♪ SONORA ♫  │
│  ▁▂▃▅▇█▇▅▃▂  │
│  Tauri+React │
│  aarch64 DMG │
└──────────────┘`.trim(),

  'batchrename-pro': `
┌──────────────┐
│  a→b  a→b    │
│  file_001    │
│  file_002    │
│  BATCHRENAME │
│  aarch64     │
└──────────────┘`.trim(),

  'small-count': `
┌──────────────┐
│     [ 42 ]   │
│  count what  │
│  matters     │
│ SMALL COUNT  │
└──────────────┘`.trim(),
}

export const momentAscii = {
  'voice-anywhere': `
┌─ PHONE ─────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░ │
│ │ ● Voice Anywhere    │ │
│ │ ▁▂▃▅▇█▇▅▃▂▁▂▃▅▇    │ │
│ │ Hold. Speak. Land.  │ │
│ │                     │ │
│ │ [ debug APK ]       │ │
│ ░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────┘`.trim(),

  excalidays: `
┌─ LAPTOP ────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  ┌──┬──┬──┬──┬──┬──┬──┐  Excalidays    │
│  │░░│▓▓│██│▒▒│  │░░│▓▓│  Phase 0/1     │
│  └──┴──┴──┴──┴──┴──┴──┘                │
│  Swift · AppKit · SwiftUI · WKWebView  │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────┘`.trim(),

  cistilka: `
┌─ LAPTOP ────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                          │
│    ▓▓▓▓▓▓▓▓  →  · · · · ·                │
│    ▓ clutter▓  →  · clear ·              │
│    ▓▓▓▓▓▓▓▓  →  · · · · ·                │
│                                          │
│    Cistilka · Clear the clutter.         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────┘`.trim(),

  sonora: `
┌─ LAPTOP ────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                          │
│     ♪  ▁▂▃▅▇█▇▅▃▂▁▂▃▅▇█▇▅▃▂▁           │
│        Sonora · stay local               │
│        Tauri + React · aarch64           │
│                                          │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────┘`.trim(),
}

export const scanlineGlyphs = '─═▬━┄┅┈┉'
