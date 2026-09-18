import { brand, worlds } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <p className="site-footer__mark">
          NODAYS
          <br />
          <em>IDLE</em>
        </p>
        <p className="site-footer__tag">{brand.tag}</p>
        <nav className="site-footer__nav" aria-label="Worlds">
          {worlds.map((w) => (
            <a key={w.id} href={`#${w.id}`}>
              {w.label}
            </a>
          ))}
        </nav>
        <a className="site-footer__link" href={brand.github} rel="noopener noreferrer">
          {brand.githubLabel}
        </a>
      </div>
    </footer>
  )
}
