import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Method } from './components/Method';
import { Navbar } from './components/Navbar';
import { Problems } from './components/Problems';
import { Services } from './components/Services';

export function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <CaseStudies />
        <Method />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
