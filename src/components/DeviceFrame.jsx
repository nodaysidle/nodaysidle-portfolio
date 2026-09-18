/** Device frame around real screenshot media. Chrome is quiet — not ASCII cosplay. */
export default function DeviceFrame({ src, alt = '', variant = 'phone' }) {
  return (
    <div className={`device device--${variant}`}>
      <div className="device__bezel">
        <div className="device__screen">
          {src ? (
            <img src={src} alt={alt} draggable={false} />
          ) : (
            <div className="device__empty" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  )
}
