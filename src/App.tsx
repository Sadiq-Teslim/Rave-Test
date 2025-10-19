import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdminFeatures, CandidateExperience } from './components/FeatureCards';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* These divs create the fixed background effects */}
      <div className="animated-background" />
      <div className="particles" /> 

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AdminFeatures />
          <CandidateExperience />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;