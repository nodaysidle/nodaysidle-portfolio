import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  worlds,
  productsForWorld,
  filmstrip,
  hero,
  footer,
} from './data.js'
import './styles.css'

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__inner">
        <h1 className="hero__wordmark">{hero.wordmark}</h1>
        <p className="hero__line">{hero.line}</p>
        <a className="hero__enter" href={hero.enterHref}>
          {hero.enterLabel}
          <span className="hero__enter-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
      <p className="hero__scroll-hint" aria-hidden="true">
        Scroll
      </p>
    </header>
  )
}

function Chapter({ product, index, total }) {
  const n = String(index + 1).padStart(2, '0')
  const of = String(total).padStart(2, '0')
  return (
    <article className="chapter" id={product.slug}>
      <div className="chapter__wash" aria-hidden="true" />
      <span className="chapter__ghost" aria-hidden="true">
        {product.name.split(' ')[0]}
      </span>
      <span className="chapter__index">
        {n} / {of}
      </span>
      <div className="chapter__content">
        <p className="chapter__meta">{product.kicker}</p>
        <h3 className="chapter__name">{product.name}</h3>
        <p className="chapter__line">{product.line}</p>
        {product.stack ? (
          <p className="chapter__stack">{product.stack}</p>
        ) : null}
        <a
          className="chapter__cta"
          href={product.ctaHref}
          rel="noopener noreferrer"
        >
          <span className="chapter__cta-icon" aria-hidden="true">
            ↓
          </span>
          {product.ctaLabel}
        </a>
      </div>
    </article>
  )
}

function WorldSection({ world }) {
  const items = productsForWorld(world.id)
  return (
    <section
      className={`world world--${world.id}`}
      id={world.id}
      aria-labelledby={`${world.id}-label`}
    >
      <div className="world__rail">
        <div className="world__label" id={`${world.id}-label`}>
          {world.label}
        </div>
        <div className="world__body">
          <div className="world__intro">
            <p className="world__kicker">{world.kicker}</p>
            <h2 className="world__line">{world.line}</h2>
          </div>
          {items.map((product, i) => (
            <Chapter
              key={product.slug}
              product={product}
              index={i}
              total={items.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Filmstrip() {
  return (
    <section className="fame" id="hall" aria-labelledby="fame-title">
      <div className="fame__head">
        <h2 className="fame__title" id="fame-title">
          Hall of fame
        </h2>
        <p className="fame__sub">Five frames · abstract</p>
      </div>
      <div className="filmstrip" role="list">
        {filmstrip.map((frame) => (
          <div
            key={frame.id}
            className={`frame motif-${frame.motif}`}
            role="listitem"
          >
            <div className="frame__motif" aria-hidden="true" />
            <h3 className="frame__title">{frame.title}</h3>
            <p className="frame__hint">{frame.hint}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="site-footer__mark">NODAYSIDLE</span>
      <a
        className="site-footer__link"
        href={footer.href}
        rel="noopener noreferrer"
      >
        {footer.label}
      </a>
    </footer>
  )
}

function App() {
  return (
    <div className="site">
      <Hero />
      {worlds.map((world) => (
        <WorldSection key={world.id} world={world} />
      ))}
      <Filmstrip />
      <SiteFooter />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
