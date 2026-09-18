/** Nested bezel around a real screenshot. */
export default function DeviceFrame({ src, alt = '', variant = 'phone', className = '' }) {
  return (
    <div className={`device device--${variant}${className ? ` ${className}` : ''}`}>
      <div className="device__shell">
        <div className="device__core">
          {src ? <img src={src} alt={alt} draggable={false} /> : <div className="device__empty" />}
        </div>
      </div>
    </div>
  )
}
