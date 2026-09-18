import { useCallback, useEffect, useState } from 'react'
import { hero, heroFrames, tickerItems } from '../data.js'

const ROTATE_MS = 4200

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [locked, setLocked] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
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

  const lockFrame = useCallback((i) => {
    setIndex(i)
    setLocked(true)
  }, [])

  const unlock = useCallback(() => {
    setLocked(false)
  }, [])

  return (
    <header className="hero" id="top">
      <div className="hero__stage" aria-hidden={!locked}>
        {heroFrames.map((f, i) => (
          <div
            key={f.id}
            className={`hero__frame${i === index ? ' is-active' : ''}${locked && i === index ? ' is-locked' : ''}`}
          >
            <img
              className="hero__media"
              src={f.src}
              alt=""
              draggable={false}
            />
            <div className="hero__veil" />
          </div>
        ))}
      </div>

      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...items, ...items].map((label, i) => (
            <span key={`${label}-${i}`} className="hero__ticker-item">
              {label}
              <span className="hero__ticker-sep"> · </span>
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
            “{frame.quote}”
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
              <img src={f.src} alt="" draggable={false} />
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
