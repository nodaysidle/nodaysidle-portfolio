import { productsForWorld, productBySlug } from '../data.js'
import Btn from './Btn.jsx'
import DeviceFrame from './DeviceFrame.jsx'
import HallStrip from './HallStrip.jsx'
import Reveal from './Reveal.jsx'

export default function WorldReel({ world }) {
  const items = productsForWorld(world.id)
  const focus = productBySlug(world.focusSlug)
  const layout = world.id
  const deviceVariant =
    layout === 'capture' && focus?.slug === 'voice-anywhere' ? 'phone' : 'laptop'

  return (
    <section className={`world world--${world.id}`} id={world.id} aria-labelledby={`${world.id}-title`}>
      <div className={`world__plate plate--${layout}`}>
        <div className="world__plate-copy">
          <p className="eyebrow">{world.kicker}</p>
          <h2 className="world__title" id={`${world.id}-title`}>
            {world.label}
          </h2>
          <p className="world__line">{world.line}</p>
        </div>
        {world.plate ? (
          <div className="world__polaroid">
            <div className="world__polaroid-shell">
              <div className="world__polaroid-core">
                <img src={world.plate} alt="" draggable={false} />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {focus ? (
        <article className={`moment moment--${layout}`} id={focus.slug}>
          {(layout === 'create' || layout === 'listen') && (
            <Reveal className={`moment__copy${layout === 'listen' ? ' moment__copy--over' : ''}`}>
              <MomentCopy world={world} focus={focus} />
            </Reveal>
          )}

          <Reveal className="moment__stage" delay={80}>
            <DeviceFrame src={world.heroMedia} alt={focus.name} variant={deviceVariant} />
          </Reveal>

          {(layout === 'capture' || layout === 'clean') && (
            <Reveal className="moment__copy" delay={120}>
              <MomentCopy world={world} focus={focus} />
            </Reveal>
          )}
        </article>
      ) : null}

      <HallStrip products={items} worldLabel={world.label} />
    </section>
  )
}

function MomentCopy({ world, focus }) {
  const stack = focus.stack && focus.stack !== focus.kicker ? focus.stack : null
  return (
    <>
      <p className="eyebrow">{focus.kicker}</p>
      <h3 className="moment__line">{world.heroLine}</h3>
      <p className="moment__sparse">{focus.line}</p>
      {stack ? <p className="moment__stack">{stack}</p> : null}
      <Btn href={focus.ctaHref} icon="down">
        {focus.ctaLabel}
      </Btn>
    </>
  )
}
