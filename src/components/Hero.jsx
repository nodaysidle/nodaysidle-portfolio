import { useCallback, useEffect, useState } from 'react'
import { hero, heroFrames, tickerItems } from '../data.js'
import AsciiField from './AsciiField.jsx'

const ROTATE_MS = 4200

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [locked, setLocked] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [typed, setTyped] = useState('')
  const items = tickerItems()
  const frame = heroFrames[index]

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [])

  useEffect(() => {
    if (locked || reduceMotion) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroFrames.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [locked, reduceMotion])

  useEffect(() => {
    if (!locked) {
      setTyped('')
      return undefined
    }
    const q = frame.quote
    if (reduceMotion) {
      setTyped(q)
      return undefined
    }
    setTyped('')
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(q.slice(0, i))
      if (i >= q.length) window.clearInterval(id)
    }, 28)
    return () => window.clearInterval(id)
  }, [locked, frame.quote, frame.id, reduceMotion])

  const lockFrame = useCallback((i) => {
    setIndex(i)
    setLocked(true)
  }, [])

  const unlock = useCallback(() => setLocked(false), [])

  return (
    <header className={`hero${locked ? ' is-locked' : ''}`} id="top">
      <div className="hero__scanlines" aria-hidden="true" />
      <AsciiField
        className="hero__field"
        seed={11 + index * 3}
        rows={20}
        cols={64}
        dense={locked}
      />

      <div className="hero__stage">
        {heroFrames.map((f, i) => (
          <div
            key={f.id}
            className={`hero__frame${i === index ? ' is-active' : ''}${locked && i === index ? ' is-locked' : ''}`}
          >
            <img className="hero__media" src={f.src} alt="" draggable={false} />
            <div className="hero__veil" />
          </div>
        ))}
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...items, ...items].map((label, i) => (
            <span key={`${label}-${i}`} className="hero__ticker-item">
              <span className="hero__ticker-sep">◆</span> {label}{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="hero__inner">
        <p className="hero__frame-label">
          <span className="hero__dot" aria-hidden="true" />
          {frame.title}
          {locked ? ' · locked' : ' · live'}
        </p>

        <h1 className="hero__wordmark">{hero.wordmark}</h1>
        <p className="hero__line">{hero.line}</p>

        {locked ? (
          <p className="hero__quote" key={frame.id}>
            “{typed}
            <span className="hero__caret" aria-hidden="true">
              _
            </span>
            ”
          </p>
        ) : (
          <p className="hero__hint">Tap a frame to lock</p>
        )}

        <div className="hero__thumbs" role="group" aria-label="Hero frames">
          {heroFrames.map((f, i) => (
            <button
              key={f.id}
              type="button"
              className={`hero__thumb${i === index ? ' is-active' : ''}`}
              onClick={() => (locked && i === index ? unlock() : lockFrame(i))}
              aria-pressed={locked && i === index}
              aria-label={`${f.title}${locked && i === index ? ' (unlock)' : ' (lock)'}`}
            >
              <span className="hero__thumb-frame">
                <img src={f.src} alt="" draggable={false} />
              </span>
              <span>{f.title}</span>
            </button>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#capture" aria-label="Continue to Capture">
        <span aria-hidden="true">↓</span>
      </a>
    </header>
  )
}
