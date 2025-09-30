import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ToolsComparison from './pages/ToolsComparison';
import WebsiteCarbon from './pages/WebsiteCarbon';
import EnvironmentalAudit from './pages/EnvironmentalAudit';
import RGESN from './pages/RGESN';
import WAVE from './pages/WAVE';
import RGAA from './pages/RGAA';
import Conclusion from './pages/Conclusion';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools-comparison" element={<ToolsComparison />} />
            <Route path="/website-carbon" element={<WebsiteCarbon />} />
            <Route path="/environmental-audit" element={<EnvironmentalAudit />} />
            <Route path="/rgesn" element={<RGESN />} />
            <Route path="/wave" element={<WAVE />} />
            <Route path="/rgaa" element={<RGAA />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
        <footer className="footer">
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>© 2025 - TP Écoconception Web</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
            Audit du site de la <strong>Ville de Cholet</strong> - 
            <a href="https://www.cholet.fr/welcome/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline', marginLeft: '0.5rem' }}>
              cholet.fr
            </a>
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem' }}>
            🏛️ Patrimoine textile | 🔴⚪ Aux couleurs de Cholet
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
