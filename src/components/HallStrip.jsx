import Reveal from './Reveal.jsx'

export default function HallStrip({ products, worldLabel }) {
  return (
    <div className={`hall hall--${products[0]?.world || 'x'}`} aria-label={`${worldLabel} hall`}>
      <div className="shell hall__head">
        <p className="eyebrow">Hall</p>
        <p className="hall__count">{products.length} repos</p>
      </div>
      <div className="hall__rail">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70} className="hall__tile-wrap">
            <a
              className={`hall__tile${p.art === 'icon' ? ' hall__tile--icon' : ''}`}
              href={p.ctaHref}
              rel="noopener noreferrer"
              title={`${p.name} — ${p.ctaLabel}`}
            >
              <span className="hall__media">
                <span className="hall__core">
                  <img src={p.hall} alt="" draggable={false} />
                </span>
              </span>
              <span className="hall__meta">
                <span className="hall__name">{p.name}</span>
                <span className="hall__cta">{p.ctaLabel}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
