export default function HallStrip({ products, worldLabel }) {
  return (
    <div className="hall" aria-label={`${worldLabel} hall`}>
      <p className="hall__label">Hall</p>
      <div className="hall__rail" role="list">
        {products.map((p) => (
          <a
            key={p.slug}
            className="hall__tile"
            href={p.ctaHref}
            rel="noopener noreferrer"
            role="listitem"
            title={`${p.name} — ${p.ctaLabel}`}
          >
            <div className="hall__media">
              <img src={p.hall} alt="" draggable={false} />
            </div>
            <span className="hall__name">{p.name}</span>
            <span className="hall__cta">{p.ctaLabel}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
