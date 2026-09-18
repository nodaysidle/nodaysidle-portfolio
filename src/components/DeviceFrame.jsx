export default function DeviceFrame({ src, alt = '', variant = 'phone' }) {
  return (
    <div className={`device device--${variant}`}>
      <div className="device__bezel">
        <div className="device__screen">
          <img src={src} alt={alt} draggable={false} />
        </div>
      </div>
    </div>
  )
}
