import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Internships from './components/Internships';
import EducationTimeline from './components/EducationTimeline';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <>
      {/* Interactive WebGL Fluid Simulation Cursor */}
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />
      
      {/* Animated Water Fill Entrance Preloader */}
      <Preloader />

      {/* Main Single-Page Portfolio Experience */}
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Internships />
      <EducationTimeline />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

