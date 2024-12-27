import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import NavigationDots from './components/NavigationDots';
import CustomCursor from './components/CustomCursor';
import TechStack3D from './components/TechStack3D';
import Timeline from './components/Timeline';

function App() {
  useEffect(() => {
    // Create animated background gradient
    const colors = ['#0ea5e9', '#6366f1', '#8b5cf6', '#ec4899'];
    let currentIndex = 0;

    const updateGradient = () => {
      const nextIndex = (currentIndex + 1) % colors.length;
      document.documentElement.style.setProperty('--gradient-start', colors[currentIndex]);
      document.documentElement.style.setProperty('--gradient-end', colors[nextIndex]);
      currentIndex = nextIndex;
    };

    const intervalId = setInterval(updateGradient, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-secondary min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-5 transition-colors duration-1000" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-0">
        <CustomCursor />
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="tech-stack">
          <TechStack3D />
        </section>
        <section id="journey">
          <Timeline />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </div>

      <NavigationDots />

      {/* Scroll progress indicator */}
      <div className="fixed bottom-0 left-0 h-1 bg-primary/20 w-full">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{
            width: `${((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </div>
  );
}

export default App;
