import { hallAscii } from '../ascii.js'

export default function HallStrip({ products, worldLabel }) {
  return (
    <div className={`hall snap hall--${products[0]?.world || 'x'}`} aria-label={`${worldLabel} hall`}>
      <div className="hall__head">
        <p className="hall__label">
          <span aria-hidden="true">| </span>Hall<span aria-hidden="true"> |</span>
        </p>
        <p className="hall__count">{products.length} collectibles</p>
      </div>
      <div className="hall__rail" role="list">
        {products.map((p) => {
          const hasImg = Boolean(p.hall) && !p.hall.endsWith('.svg')
          const art = !hasImg ? hallAscii[p.slug] : null
          return (
            <a
              key={p.slug}
              className={`hall__tile${art ? ' hall__tile--ascii' : ''}`}
              href={p.ctaHref}
              rel="noopener noreferrer"
              role="listitem"
              title={`${p.name} — ${p.ctaLabel}`}
            >
              <div className="hall__media">
                {art ? (
                  <pre className="hall__ascii" aria-hidden="true">
                    {art}
                  </pre>
                ) : (
                  <img src={p.hall} alt="" draggable={false} />
                )}
                <span className="hall__frame" aria-hidden="true" />
              </div>
              <span className="hall__name">{p.name}</span>
              <span className="hall__cta">{p.ctaLabel}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
