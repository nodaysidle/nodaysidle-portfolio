import { footer } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <pre className="site-footer__ascii" aria-hidden="true">{`┌─ NODAYSIDLE ─┐
│  no days idle │
└───────────────┘`}</pre>
      <div className="site-footer__meta">
        <span className="site-footer__mark">NODAYSIDLE</span>
        <a
          className="site-footer__link"
          href={footer.href}
          rel="noopener noreferrer"
        >
          {footer.label}
        </a>
      </div>
    </footer>
  )
}
