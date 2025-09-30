import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faChartBar, 
  faUniversalAccess, 
  faClipboardCheck,
  faArrowRight,
  faGlobe,
  faRecycle,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--cholet-red), var(--cholet-dark-red))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
          }}>
            🏛️
          </div>
          <div>
            <h1 style={{ margin: 0 }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: 'var(--cholet-red)' }} />
              {' '}TP Écoconception Web
            </h1>
            <p className="subtitle" style={{ margin: 0, marginTop: '0.25rem' }}>
              Audit et optimisation du site de la <strong style={{ color: 'var(--cholet-red)' }}>Ville de Cholet</strong>
            </p>
          </div>
        </div>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          borderRadius: '8px',
          border: '1px solid var(--cholet-red)',
          fontSize: '0.95rem'
        }}>
          <span>🌐</span>
          <a href="https://www.cholet.fr/welcome/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cholet-red)', fontWeight: '600' }}>
            cholet.fr/welcome
          </a>
        </div>
      </div>

      <div className="section">
        <h2>Contexte et enjeux</h2>
        <p>
          À l'ère du numérique omniprésent, les services et applications que nous concevons ont un impact
          environnemental et social croissant. Selon l'ADEME, le numérique représente aujourd'hui <strong>4 %
          des émissions mondiales de gaz à effet de serre</strong>, un chiffre en constante augmentation.
        </p>
        <p>
          Parallèlement, <strong>15 % de la population mondiale vit avec un handicap</strong>, et l'accessibilité
          numérique reste un défi majeur pour garantir une inclusion sociale effective.
        </p>
        
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          <div className="stat-card">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <div className="stat-value">4%</div>
            <div className="stat-label">Émissions GES mondiales du numérique</div>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <div className="stat-value">15%</div>
            <div className="stat-label">Population mondiale en situation de handicap</div>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faRecycle} size="2x" />
            <div className="stat-value">79</div>
            <div className="stat-label">Bonnes pratiques RGESN</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Objectifs du TP</h2>
        <p>
          Ce TP a pour but d'intégrer systématiquement les bonnes pratiques environnementales et sociales
          dans la conception de projets numériques.
        </p>
        
        <ul className="list-checked">
          <li>Comprendre les enjeux du numérique responsable et les cadres réglementaires (RGESN, RGAA)</li>
          <li>Utiliser des outils d'audit pour mesurer l'impact environnemental et l'accessibilité</li>
          <li>Intégrer l'écoconception à chaque étape du projet</li>
          <li>Rédiger un plan d'action et documenter les choix</li>
          <li>Développer un projet sobre, performant et accessible</li>
        </ul>
      </div>

      <div className="section">
        <h2>Les trois piliers du TP</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: 'var(--primary-color)' }} />
              Écoconception
            </h3>
            <p>
              Réduire l'empreinte carbone et les ressources consommées par le projet numérique.
            </p>
            <ul>
              <li>Audit environnemental</li>
              <li>Optimisation des ressources</li>
              <li>Conformité RGESN</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faUniversalAccess} style={{ color: 'var(--info-color)' }} />
              Accessibilité
            </h3>
            <p>
              Garantir que le service soit utilisable par tous, y compris les personnes en situation de handicap.
            </p>
            <ul>
              <li>Audit WAVE</li>
              <li>Conformité RGAA</li>
              <li>Tests utilisateurs</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faChartBar} style={{ color: 'var(--warning-color)' }} />
              Intégration pratique
            </h3>
            <p>
              Appliquer ces principes tout au long du cycle de vie du projet.
            </p>
            <ul>
              <li>Checklists</li>
              <li>Audits réguliers</li>
              <li>Documentation rigoureuse</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Structure du compte-rendu</h2>
        <p>Ce site présente l'ensemble des résultats du TP, organisés en sections thématiques :</p>
        
        <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
          <Link to="/tools-comparison" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />
                Comparaison d'outils
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--primary-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Analyse comparative de 5 outils d'écoconception avec tableau et graphique radar.
            </p>
          </Link>

          <Link to="/website-carbon" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faLeaf} style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />
                Website Carbon Calculator
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--primary-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Décryptage technique et pédagogique de l'outil Website Carbon Calculator.
            </p>
          </Link>

          <Link to="/environmental-audit" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faClipboardCheck} style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />
                Audit Environnemental
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--primary-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Diagnostic complet du site cholet.fr avec recommandations d'optimisation.
            </p>
          </Link>

          <Link to="/rgesn" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faClipboardCheck} style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />
                Application du RGESN
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--primary-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Audit selon le Référentiel Général d'Écoconception des Services Numériques.
            </p>
          </Link>

          <Link to="/wave" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faUniversalAccess} style={{ marginRight: '0.5rem', color: 'var(--info-color)' }} />
                Audit WAVE
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--info-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Découverte de l'accessibilité numérique : audit et corrections avec WAVE.
            </p>
          </Link>

          <Link to="/rgaa" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>
                <FontAwesomeIcon icon={faUniversalAccess} style={{ marginRight: '0.5rem', color: 'var(--info-color)' }} />
                Conformité RGAA
              </span>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', color: 'var(--info-color)' }} />
            </h3>
            <p style={{ color: 'var(--text-color)' }}>
              Audit et conformité au Référentiel Général d'Amélioration de l'Accessibilité.
            </p>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
