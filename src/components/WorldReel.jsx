import { productsForWorld, productBySlug } from '../data.js'
import { worldAscii, momentAscii } from '../ascii.js'
import DeviceFrame from './DeviceFrame.jsx'
import HallStrip from './HallStrip.jsx'
import AsciiPanel from './AsciiPanel.jsx'
import AsciiField from './AsciiField.jsx'

/**
 * Varied film-chapter layouts (not template×4).
 * Capture / Create: real plates + screenshots
 * Clean / Listen: ASCII ambient + glyph moments (no empty SVG)
 */
export default function WorldReel({ world }) {
  const items = productsForWorld(world.id)
  const focus = productBySlug(world.focusSlug)
  const layout = world.id
  const usePhoto = layout === 'capture' || layout === 'create'
  const deviceVariant =
    layout === 'capture' && focus?.slug === 'voice-anywhere' ? 'phone' : 'laptop'

  return (
    <section
      className={`world world--${world.id} world-layout--${layout}`}
      id={world.id}
      aria-labelledby={`${world.id}-label`}
    >
      <div className="world__sticky" id={`${world.id}-label`}>
        {world.label}
      </div>

      <div className={`world__plate snap plate--${layout}`}>
        {usePhoto ? (
          <>
            <img className="world__plate-media" src={world.plate} alt="" />
            <div className="world__plate-veil" />
            <AsciiField
              className="world__plate-field"
              seed={world.id.charCodeAt(0)}
              rows={10}
              cols={48}
              dense={false}
            />
          </>
        ) : (
          <>
            <AsciiField
              className="world__plate-field world__plate-field--full"
              seed={world.id.charCodeAt(1) * 13}
              rows={18}
              cols={56}
              dense
            />
            <AsciiPanel
              art={worldAscii[world.id]}
              className="world__plate-ascii"
              title={`${world.label} ambient`}
            />
          </>
        )}

        <div className="world__plate-copy">
          <p className="world__kicker">{world.kicker}</p>
          <h2 className="world__title">{world.label}</h2>
          <p className="world__line">{world.line}</p>
        </div>
      </div>

      {focus ? (
        <article className={`moment snap moment--${layout}`} id={focus.slug}>
          {(layout === 'create' || layout === 'listen') && (
            <div className="moment__copy">
              <MomentCopy world={world} focus={focus} />
            </div>
          )}

          <div className="moment__stage">
            {usePhoto ? (
              <DeviceFrame
                src={world.heroMedia}
                alt={focus.name}
                variant={deviceVariant}
              />
            ) : (
              <DeviceFrame
                variant={deviceVariant}
                asciiFallback={momentAscii[focus.slug] || worldAscii[world.id]}
                alt={focus.name}
              />
            )}
          </div>

          {(layout === 'capture' || layout === 'clean') && (
            <div className="moment__copy">
              <MomentCopy world={world} focus={focus} />
            </div>
          )}
        </article>
      ) : null}

      <HallStrip products={items} worldLabel={world.label} />
    </section>
  )
}

function MomentCopy({ world, focus }) {
  return (
    <>
      <p className="moment__meta">{focus.kicker}</p>
      <h3 className="moment__line">{world.heroLine}</h3>
      <p className="moment__sparse">{focus.line}</p>
      {focus.stack ? <p className="moment__stack">{focus.stack}</p> : null}
      <a className="moment__cta" href={focus.ctaHref} rel="noopener noreferrer">
        <span aria-hidden="true">↓ </span>
        {focus.ctaLabel}
      </a>
    </>
  )
}
