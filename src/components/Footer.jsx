import { footer } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="site-footer__mark">NODAYSIDLE</span>
      <a
        className="site-footer__link"
        href={footer.href}
        rel="noopener noreferrer"
      >
        {footer.label}
      </a>
    </footer>
  )
}
