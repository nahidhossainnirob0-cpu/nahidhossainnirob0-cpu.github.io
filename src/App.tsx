import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Services from './components/Services';
import LeadToRevenue from './components/LeadToRevenue';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <About />
        <Services />
        <LeadToRevenue />
        <Projects />
        <WhyWorkWithMe />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
