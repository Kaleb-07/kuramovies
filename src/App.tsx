import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Team from './pages/Team';
import ServiceDetail from './pages/ServiceDetail';

const scrollPositions = new Map<string, number>();

function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    return () => {
      scrollPositions.set(location.pathname, window.scrollY);
    };
  }, [location.pathname]);

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      window.scrollTo(0, scrollPositions.get(location.pathname) ?? 0);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="dark min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#d4af37] selection:text-[#050505] overflow-x-hidden">
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
