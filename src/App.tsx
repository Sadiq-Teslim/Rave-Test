import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdminFeatures, CandidateExperience } from './components/FeatureCards';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    // The main container is now the root element. No extra divs needed.
    // The 'relative' class is no longer necessary here but doesn't hurt.
    <div>
      <Navbar />
      <main>
        <Hero />
        <AdminFeatures />
        <CandidateExperience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App;