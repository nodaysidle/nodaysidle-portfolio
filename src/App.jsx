import { worlds } from './data.js'
import Hero from './components/Hero.jsx'
import WorldReel from './components/WorldReel.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site">
      <Hero />
      {worlds.map((world) => (
        <WorldReel key={world.id} world={world} />
      ))}
      <Footer />
    </div>
  )
}
