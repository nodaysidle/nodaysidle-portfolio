import { useEffect, useState } from 'react'
import { brand, worlds } from '../data.js'
import Btn from './Btn.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className="nav">
        <a className="nav__brand" href="#top">
          <img src="/mark.svg" width="36" height="36" alt="" />
          <span>
            NODAYS
            <br />
            IDLE
          </span>
        </a>

        <div className="nav__actions">
          <Btn href={brand.github} className="nav__store" aria-label="GitHub">
            GitHub
          </Btn>
          <button
            type="button"
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav__overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav__panel" aria-label="Site">
          {worlds.map((world, i) => (
            <a
              key={world.id}
              href={`#${world.id}`}
              className="nav__link"
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {world.label}
            </a>
          ))}
          <a
            className="nav__link"
            href={brand.github}
            rel="noopener noreferrer"
            style={{ transitionDelay: open ? `${120 + worlds.length * 70}ms` : '0ms' }}
            onClick={() => setOpen(false)}
          >
            <span>GH</span>
            GitHub
          </a>
        </nav>
      </div>
    </>
  )
}
