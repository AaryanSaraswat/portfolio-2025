import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Aaryan Saraswat | Full Stack Developer',
      '/about': 'About | Aaryan Saraswat',
      '/projects': 'Projects | Aaryan Saraswat',
      '/skills': 'Skills | Aaryan Saraswat',
      '/contact': 'Contact | Aaryan Saraswat'
    };

    document.title = pageTitles[location.pathname] || 'Aaryan Saraswat | Portfolio';
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
