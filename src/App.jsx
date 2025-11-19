import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import routes
import Home from './routes/Home';
import About from './routes/About';
import Programs from './routes/Programs';
import Partnerships from './routes/Partnerships';
import Chapters from './routes/Chapters';
import Knowledge from './routes/Knowledge';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

// Import styles
import './styles/tokens.css';
import './styles/globals.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/utilities.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
