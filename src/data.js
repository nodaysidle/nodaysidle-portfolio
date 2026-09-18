/** Product + world data for the NODAYSIDLE cinematic portfolio. */

export const worlds = [
  {
    id: 'capture',
    label: 'Capture',
    kicker: 'Sound in. Signal out.',
    line: 'Voice, notes, and tape — on the device you already hold.',
    plate: '/media/worlds/capture-plate.png',
    heroMedia: '/media/worlds/capture-hero.png',
    heroLine: 'Dictate from anywhere.',
    focusSlug: 'voice-anywhere',
  },
  {
    id: 'create',
    label: 'Create',
    kicker: 'Make the thing.',
    line: 'Boards, contracts, drafts, type — local-first tools.',
    plate: '/media/worlds/create-plate.png',
    heroMedia: '/media/worlds/create-hero.png',
    heroLine: 'Draw the day.',
    focusSlug: 'excalidays',
  },
  {
    id: 'clean',
    label: 'Clean',
    kicker: 'Less noise.',
    line: 'Rename, redact, count, and clear what gets in the way.',
    plate: '/media/worlds/clean-plate.png',
    heroMedia: '/media/worlds/clean-hero.png',
    heroLine: 'Clear the clutter.',
    focusSlug: 'cistilka',
  },
  {
    id: 'listen',
    label: 'Listen',
    kicker: 'Play it back.',
    line: 'One room for sound that stays on your machine.',
    plate: '/media/worlds/listen-plate.png',
    heroMedia: '/media/worlds/listen-hero.png',
    heroLine: 'Stay local. Listen.',
    focusSlug: 'sonora',
  },
]

export const products = [
  // —— Capture ——
  {
    slug: 'voice-anywhere',
    name: 'Voice Anywhere',
    world: 'capture',
    kicker: 'Android 12+',
    line: 'Dictate from anywhere on the device.',
    ctaLabel: 'Download debug APK',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-voice-anywhere-v2/releases/download/v0.4.0/VoiceAnywhere-0.4.0.apk',
    stack: 'Android 12+',
    ticker: 'Voice Anywhere · Android · debug APK',
    hall: '/media/hall/voice-anywhere.png',
  },
  {
    slug: 'nodaysidle-voice',
    name: 'NODAYSIDLE Voice',
    world: 'capture',
    kicker: 'macOS menu bar',
    line: 'Hold Control-Space. Text lands.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-vois/releases/download/v0.2.0/NODAYSIDLE-Voice-0.2.0.dmg',
    stack: 'macOS menu bar',
    ticker: 'Voice · macOS · DMG',
    hall: '/media/hall/nodaysidle-voice.png',
  },
  {
    slug: 'synapse-notes',
    name: 'Synapse Notes',
    world: 'capture',
    kicker: 'Android',
    line: 'Notes that keep the thread.',
    ctaLabel: 'Download debug APK',
    ctaHref:
      'https://github.com/nodaysidle/synapse-notes/releases/download/v0.4.3/synapse-notes-0.4.3-debug.apk',
    ticker: 'Synapse Notes · Android · debug APK',
    hall: '/media/hall/synapse-notes.png',
  },
  {
    slug: 'nodaysrecord',
    name: 'NoDaysRecord',
    world: 'capture',
    kicker: 'macOS',
    line: 'Record. Stop. Keep the take.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysrecording/releases/download/v0.1.0/NoDaysRecord-0.1.0.dmg',
    ticker: 'NoDaysRecord · macOS · DMG',
    hall: '/media/hall/nodaysrecord.png',
  },

  // —— Create ——
  {
    slug: 'excalidays',
    name: 'Excalidays',
    world: 'create',
    kicker: 'Swift · AppKit · SwiftUI · WKWebView',
    line: 'A canvas for days you actually draw.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/excalidays/releases/download/v0.1.0/Excalidays-0.1.0.dmg',
    stack: 'Phase 0/1 · Swift / AppKit / SwiftUI / WKWebView',
    ticker: 'Excalidays · macOS · Phase 0/1',
    hall: '/media/hall/excalidays.png',
  },
  {
    slug: 'cascade-v3',
    name: 'Cascade V3',
    world: 'create',
    kicker: 'Tauri · aarch64',
    line: 'Contracts that cascade, not pile.',
    ctaLabel: 'Download Apple Silicon DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-cascade-v3/releases/download/v3.0.0/NODAYSIDLE-Cascade-V3-3.0.0-aarch64.dmg',
    stack: 'Tauri aarch64',
    ticker: 'Cascade V3 · aarch64 · DMG',
    hall: '/media/hall/cascade-v3.png',
  },
  {
    slug: 'pocket-drafts',
    name: 'Pocket Drafts',
    world: 'create',
    kicker: 'macOS universal',
    line: 'Small drafts. Ready when you are.',
    ctaLabel: 'Download zip',
    ctaHref:
      'https://github.com/nodaysidle/pocket-drafts/releases/download/v1.0/PocketDrafts-1.0-macos-universal.zip',
    ticker: 'Pocket Drafts · macOS · zip',
    hall: '/media/hall/pocket-drafts.png',
  },
  {
    slug: 'scribeflow-pro',
    name: 'ScribeFlow Pro',
    world: 'create',
    kicker: 'macOS',
    line: 'Flow the words. Keep the model local.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/scribeflowpro/releases/download/v1.0.0-dmg.20260727/ScribeFlowPro-1.0.0.dmg',
    stack: 'Needs ~/Models/',
    ticker: 'ScribeFlow Pro · macOS · DMG',
    hall: '/media/hall/scribeflow-pro.png',
  },
  {
    slug: 'nodaystypst',
    name: 'Nodaystypst',
    world: 'create',
    kicker: 'macOS arm64',
    line: 'Typst, native, on Apple Silicon.',
    ctaLabel: 'Download arm64 DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaystypst/releases/download/v0.1.0/Nodaystypst-0.1.0-macOS-arm64.dmg',
    ticker: 'Nodaystypst · arm64 · DMG',
    hall: '/media/hall/nodaystypst.png',
  },

  // —— Clean ——
  {
    slug: 'cistilka',
    name: 'Cistilka',
    world: 'clean',
    kicker: 'macOS',
    line: 'Clear the clutter.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-cistilka/releases/download/v0.1.0/Cistilka-0.1.0.dmg',
    ticker: 'Cistilka · macOS · DMG',
    hall: '/media/hall/cistilka.png',
  },
  {
    slug: 'shareguard',
    name: 'ShareGuard',
    world: 'clean',
    kicker: 'macOS',
    line: 'Share less than you meant to.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-shareguard/releases/download/v0.1.0-dmg.20260727/ShareGuard-0.1.0.dmg',
    ticker: 'ShareGuard · macOS · DMG',
    hall: '/media/hall/shareguard.png',
  },
  {
    slug: 'batchrename-pro',
    name: 'BatchRename Pro',
    world: 'clean',
    kicker: 'macOS aarch64',
    line: 'Rename the batch. Keep the order.',
    ctaLabel: 'Download aarch64 DMG',
    ctaHref:
      'https://github.com/nodaysidle/batchrename-pro/releases/download/v0.1.0/BatchRename-Pro-0.1.0-aarch64.dmg',
    ticker: 'BatchRename Pro · aarch64 · DMG',
    hall: '/media/hall/batchrename-pro.png',
  },
  {
    slug: 'cliprail',
    name: 'ClipRail',
    world: 'clean',
    kicker: 'macOS',
    line: 'Clipboard on a rail.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/cliprail/releases/download/v1.2.0-dmg.20260727/ClipRail-1.2.0.dmg',
    ticker: 'ClipRail · macOS · DMG',
    hall: '/media/hall/cliprail.png',
  },
  {
    slug: 'small-count',
    name: 'Small Count',
    world: 'clean',
    kicker: 'macOS',
    line: 'Count what matters. Nothing else.',
    ctaLabel: 'Download DMG',
    ctaHref:
      'https://github.com/nodaysidle/small-count/releases/download/v0.1.0/Small-Count-v0.1.0-macos.dmg',
    ticker: 'Small Count · macOS · DMG',
    hall: '/media/hall/small-count.png',
  },

  // —— Listen ——
  {
    slug: 'sonora',
    name: 'Sonora',
    world: 'listen',
    kicker: 'Tauri + React',
    line: 'Listen. Stay local.',
    ctaLabel: 'Download aarch64 DMG',
    ctaHref:
      'https://github.com/nodaysidle/nodaysidle-sonora/releases/download/v0.1.1/Sonora_0.1.1_aarch64.dmg',
    stack: 'Tauri + React · aarch64',
    ticker: 'Sonora · Tauri+React · aarch64',
    hall: '/media/hall/sonora.png',
  },
]

/** Hero living surface — three rotating frames. */
export const heroFrames = [
  {
    id: 'voice',
    title: 'Voice',
    src: '/media/hero/voice.png',
    quote: 'Hold. Speak. Text lands.',
  },
  {
    id: 'excalidays',
    title: 'Excalidays',
    src: '/media/hero/excalidays.png',
    quote: 'A canvas for days you draw.',
  },
  {
    id: 'synapse',
    title: 'Synapse',
    src: '/media/hero/synapse.png',
    quote: 'Notes that keep the thread.',
  },
]

export const hero = {
  wordmark: 'NODAYSIDLE',
  line: 'Tools that stay on your machine.',
}

export const footer = {
  href: 'https://github.com/nodaysidle',
  label: 'github.com/nodaysidle',
}

export function productsForWorld(worldId) {
  return products.filter((p) => p.world === worldId)
}

export function productBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function tickerItems() {
  return products.map((p) => p.ticker)
}
