/** Renders a preformatted ASCII composition. */
export default function AsciiPanel({ art, className = '', title, animate = false }) {
  return (
    <pre
      className={`ascii${animate ? ' ascii--live' : ''}${className ? ` ${className}` : ''}`}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {art}
    </pre>
  )
}
