import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faChartBar, 
  faLeaf, 
  faClipboardCheck,
  faFileAlt,
  faUniversalAccess,
  faCheckCircle,
  faBookOpen,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil', icon: faHome },
    { path: '/tools-comparison', label: 'Comparaison d\'outils', icon: faChartBar },
    { path: '/website-carbon', label: 'Website Carbon', icon: faLeaf },
    { path: '/environmental-audit', label: 'Audit Environnemental', icon: faClipboardCheck },
    { path: '/rgesn', label: 'RGESN', icon: faFileAlt },
    { path: '/wave', label: 'WAVE', icon: faUniversalAccess },
    { path: '/rgaa', label: 'RGAA', icon: faCheckCircle },
    { path: '/conclusion', label: 'Conclusion', icon: faBookOpen },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <FontAwesomeIcon icon={faLeaf} />
          <span>TP Écoconception</span>
        </Link>

        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
