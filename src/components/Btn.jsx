function Arrow({ down = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {down ? (
        <path
          d="M12 5v14M6 13l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M7 17L17 7M9 7h8v8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default function Btn({
  href,
  children,
  variant = 'lime',
  icon = 'out',
  className = '',
  ...props
}) {
  return (
    <a
      className={`btn btn--${variant}${className ? ` ${className}` : ''}`}
      href={href}
      rel="noopener noreferrer"
      {...props}
    >
      <span className="btn__label">{children}</span>
      <span className="btn__icon" aria-hidden="true">
        <Arrow down={icon === 'down'} />
      </span>
    </a>
  )
}
