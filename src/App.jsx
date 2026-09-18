import { worlds } from './data.js'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import WorldReel from './components/WorldReel.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <div className="contours" aria-hidden="true" />
      <Nav />
      <Hero />
      <main id="work">
        {worlds.map((world) => (
          <WorldReel key={world.id} world={world} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
