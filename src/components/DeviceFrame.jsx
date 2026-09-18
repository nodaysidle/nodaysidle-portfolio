/** ASCII-bezel device frame around real screenshot media. */
export default function DeviceFrame({ src, alt = '', variant = 'phone', asciiFallback }) {
  const isAscii = !src || asciiFallback

  return (
    <div className={`device device--${variant}${isAscii ? ' device--ascii' : ''}`}>
      <div className="device__chrome" aria-hidden="true">
        <span className="device__cap">┌{variant === 'phone' ? '─ PHONE ─' : '─ DESK ──'}┐</span>
      </div>
      <div className="device__bezel">
        <div className="device__screen">
          {isAscii ? (
            <pre className="device__ascii">{asciiFallback}</pre>
          ) : (
            <img src={src} alt={alt} draggable={false} />
          )}
        </div>
      </div>
      <div className="device__chrome device__chrome--bot" aria-hidden="true">
        <span>└{'─'.repeat(variant === 'phone' ? 11 : 12)}┘</span>
      </div>
    </div>
  )
}
