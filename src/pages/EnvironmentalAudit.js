import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboardCheck, 
  faExclamationCircle, 
  faCheckCircle,
  faImages,
  faCode,
  faServer,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnvironmentalAudit = () => {
  const comparisonData = [
    { metric: 'Poids (MB)', 'cholet.fr': 1.49, 'Médiane': 2.41, 'Objectif': 1.024 },
    { metric: 'Requêtes HTTP', 'cholet.fr': 95, 'Médiane': 78, 'Objectif': 40 },
    { metric: 'CO₂ (g)', 'cholet.fr': 0.16, 'Médiane': 0.88, 'Objectif': 0.32 },
    { metric: 'DOM (éléments)', 'cholet.fr': 815, 'Médiane': 693, 'Objectif': 600 }
  ];

  const resourcesData = [
    { name: 'Images', weight: 0.75, percentage: 50 },
    { name: 'JavaScript', weight: 0.45, percentage: 30 },
    { name: 'CSS', weight: 0.2, percentage: 13 },
    { name: 'Fonts', weight: 0.07, percentage: 5 },
    { name: 'HTML', weight: 0.02, percentage: 2 }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faClipboardCheck} style={{ color: 'var(--primary-color)' }} />
          {' '}Audit Environnemental de cholet.fr
        </h1>
        <p className="subtitle">Diagnostic complet et recommandations d'optimisation</p>
      </div>

      <div className="section">
        <h2>Présentation du site audité</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Informations générales</h3>
            <table style={{ marginBottom: 0 }}>
              <tbody>
                <tr>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}><strong>Nom</strong></td>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}>Ville de Cholet</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}><strong>URL</strong></td>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <a href="https://www.cholet.fr/welcome/" target="_blank" rel="noopener noreferrer">
                      cholet.fr/welcome
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}><strong>Type</strong></td>
                  <td style={{ borderBottom: '1px solid var(--border-color)' }}>Site institutionnel municipal</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: 'none' }}><strong>Public cible</strong></td>
                  <td style={{ borderBottom: 'none' }}>Citoyens, touristes, entreprises</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Objectif du site</h3>
            <ul style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Informer les citoyens sur les services municipaux</li>
              <li>Promouvoir les événements et actualités locales</li>
              <li>Faciliter les démarches administratives en ligne</li>
              <li>Valoriser le territoire et le tourisme</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Résultats des outils d'audit</h2>
        
        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card">
            <FontAwesomeIcon icon={faServer} size="2x" />
            <div className="stat-value">1.49 MB</div>
            <div className="stat-label">Poids total de la page</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <FontAwesomeIcon icon={faBolt} size="2x" />
            <div className="stat-value">95</div>
            <div className="stat-label">Requêtes HTTP</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
            <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
            <div className="stat-value">0.16g</div>
            <div className="stat-label">CO₂ par visite</div>
          </div>
        </div>

        <h3>Tableau synthétique des résultats</h3>
        <table>
          <thead>
            <tr>
              <th>Outil</th>
              <th>Métrique</th>
              <th>Valeur mesurée</th>
              <th>Évaluation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Website Carbon Calculator</strong></td>
              <td>Émissions CO₂</td>
              <td>0.16g / visite</td>
              <td><span className="badge badge-success">C - Bon</span></td>
            </tr>
            <tr>
              <td><strong>EcoIndex</strong></td>
              <td>Score environnemental</td>
              <td>E (40/100)</td>
              <td><span className="badge badge-error">Faible</span></td>
            </tr>
            <tr>
              <td><strong>EcoIndex</strong></td>
              <td>Éléments DOM</td>
              <td>815 éléments</td>
              <td><span className="badge badge-warning">Trop complexe</span></td>
            </tr>
            <tr>
              <td><strong>Lighthouse</strong></td>
              <td>Performance</td>
              <td>68/100</td>
              <td><span className="badge badge-warning">Moyen</span></td>
            </tr>
            <tr>
              <td><strong>Lighthouse</strong></td>
              <td>Best Practices</td>
              <td>75/100</td>
              <td><span className="badge badge-warning">Moyen</span></td>
            </tr>
            <tr>
              <td><strong>GreenIT-Analysis</strong></td>
              <td>Bonnes pratiques respectées</td>
              <td>45/115</td>
              <td><span className="badge badge-error">Faible</span></td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: '2rem' }}>Comparaison avec les standards</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cholet.fr" fill="#ef4444" />
            <Bar dataKey="Médiane" fill="#f59e0b" />
            <Bar dataKey="Objectif" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <h2>Analyse croisée</h2>
        
        <h3>Répartition du poids par type de ressource</h3>
        <table>
          <thead>
            <tr>
              <th>Type de ressource</th>
              <th>Poids (MB)</th>
              <th>Pourcentage</th>
              <th>Remarque</th>
            </tr>
          </thead>
          <tbody>
            {resourcesData.map((resource) => (
              <tr key={resource.name}>
                <td><strong>{resource.name}</strong></td>
                <td>{resource.weight} MB</td>
                <td>
                  <span className="badge badge-info">{resource.percentage}%</span>
                </td>
                <td style={{ fontSize: '0.9rem' }}>
                  {resource.name === 'Images' && '⚠️ Principal problème identifié'}
                  {resource.name === 'JavaScript' && '⚠️ Optimisation nécessaire'}
                  {resource.name === 'CSS' && 'Acceptable'}
                  {resource.name === 'Fonts' && 'Peut être réduit'}
                  {resource.name === 'HTML' && '✓ Correct'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: '2rem' }}>
          <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'var(--error-color)', marginRight: '0.5rem' }} />
          Les 3 principaux problèmes identifiés
        </h3>

        <div className="grid grid-3">
          <div className="card" style={{ borderLeft: '4px solid var(--error-color)' }}>
            <h4 style={{ color: 'var(--error-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faImages} />
              1. Images non optimisées
            </h4>
            <p><strong>Problème :</strong></p>
            <ul style={{ fontSize: '0.9rem' }}>
              <li>Images en format JPEG/PNG non compressées</li>
              <li>Tailles originales trop grandes (3000×2000px)</li>
              <li>Pas de lazy loading</li>
              <li>Absence de formats modernes (WebP, AVIF)</li>
            </ul>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>
              <strong>Impact :</strong> <span className="badge badge-error">Critique</span> - 
              Représente 53% du poids total
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--warning-color)' }}>
            <h4 style={{ color: 'var(--warning-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faCode} />
              2. JavaScript excessif
            </h4>
            <p><strong>Problème :</strong></p>
            <ul style={{ fontSize: '0.9rem' }}>
              <li>Multiples librairies JS chargées</li>
              <li>Code non minifié sur certains scripts</li>
              <li>Chargement bloquant au-dessus de la ligne de flottaison</li>
              <li>Dépendances inutilisées</li>
            </ul>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>
              <strong>Impact :</strong> <span className="badge badge-warning">Important</span> - 
              Ralentit le chargement initial
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--warning-color)' }}>
            <h4 style={{ color: 'var(--warning-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faServer} />
              3. Trop de requêtes HTTP
            </h4>
            <p><strong>Problème :</strong></p>
            <ul style={{ fontSize: '0.9rem' }}>
              <li>78 requêtes au total</li>
              <li>Fichiers CSS/JS non regroupés</li>
              <li>Icônes et fonts multiples</li>
              <li>Absence de mise en cache efficace</li>
            </ul>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>
              <strong>Impact :</strong> <span className="badge badge-warning">Important</span> - 
              Augmente la latence globale
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Recommandations d'écoconception
        </h2>
        <p>Actions classées par priorité avec gains estimés :</p>

        <div className="highlight-box" style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--error-color)', marginTop: 0 }}>
            🔴 PRIORITÉ 1 - Impact critique
          </h4>
          <table style={{ marginTop: '1rem', marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Action</th>
                <th style={{ width: '30%' }}>Méthode/Outil</th>
                <th style={{ width: '30%' }}>Gain estimé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Optimiser et compresser toutes les images</td>
                <td>TinyPNG, Squoosh, conversion WebP</td>
                <td><strong>-40% du poids total</strong> (-1.1 MB)</td>
              </tr>
              <tr>
                <td>Implémenter le lazy loading des images</td>
                <td>Attribut loading="lazy" (HTML natif)</td>
                <td><strong>-50% requêtes initiales</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="highlight-box" style={{ marginBottom: '1.5rem', backgroundColor: '#fef3c7', borderColor: 'var(--warning-color)' }}>
          <h4 style={{ color: 'var(--warning-color)', marginTop: 0 }}>
            🟡 PRIORITÉ 2 - Impact important
          </h4>
          <table style={{ marginTop: '1rem', marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Action</th>
                <th style={{ width: '30%' }}>Méthode/Outil</th>
                <th style={{ width: '30%' }}>Gain estimé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minifier et regrouper CSS/JS</td>
                <td>Webpack, Parcel, Vite</td>
                <td><strong>-25% JavaScript</strong> (-0.2 MB)</td>
              </tr>
              <tr>
                <td>Supprimer les dépendances inutilisées</td>
                <td>Webpack Bundle Analyzer, PurgeCSS</td>
                <td><strong>-15% du code</strong> (-0.15 MB)</td>
              </tr>
              <tr>
                <td>Mettre en place un CDN</td>
                <td>Cloudflare, Fastly</td>
                <td><strong>-30% latence</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="highlight-box" style={{ backgroundColor: '#dbeafe', borderColor: 'var(--info-color)' }}>
          <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>
            🔵 PRIORITÉ 3 - Optimisations supplémentaires
          </h4>
          <table style={{ marginTop: '1rem', marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Action</th>
                <th style={{ width: '30%' }}>Méthode/Outil</th>
                <th style={{ width: '30%' }}>Gain estimé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Optimiser les fonts (subset, woff2)</td>
                <td>Font Squirrel, Google Fonts optimize</td>
                <td><strong>-50% fonts</strong> (-0.075 MB)</td>
              </tr>
              <tr>
                <td>Activer la compression Gzip/Brotli</td>
                <td>Configuration serveur</td>
                <td><strong>-20% transferts</strong></td>
              </tr>
              <tr>
                <td>Réduire la complexité du DOM</td>
                <td>Refactoring HTML, composants réutilisables</td>
                <td><strong>-30% éléments DOM</strong></td>
              </tr>
              <tr>
                <td>Choisir un hébergeur vert</td>
                <td>The Green Web Foundation, Infomaniak</td>
                <td><strong>-50% émissions CO₂</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-success" style={{ marginTop: '2rem' }}>
          <strong>💡 Gain potentiel total :</strong> En appliquant ces recommandations, le site pourrait passer de 
          2.8 MB à <strong>environ 1.2 MB</strong>, soit une réduction de <strong>-57%</strong> du poids et des émissions CO₂.
        </div>
      </div>

      <div className="section">
        <h2>Checklist d'écoconception pour le propriétaire du site</h2>
        <p>Guide pratique pour maintenir et améliorer les performances environnementales :</p>

        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)' }}>📋 Avant chaque publication</h3>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Optimiser toutes les nouvelles images</li>
              <li>Tester le poids de la page (objectif &lt; 1 MB)</li>
              <li>Vérifier le nombre de requêtes (objectif &lt; 50)</li>
              <li>Valider l'accessibilité avec WAVE</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--info-color)' }}>🔄 Maintenance mensuelle</h3>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Audit complet avec EcoIndex</li>
              <li>Nettoyer les fichiers inutilisés</li>
              <li>Mettre à jour les dépendances</li>
              <li>Vérifier les performances Lighthouse</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--warning-color)' }}>🎯 Objectifs annuels</h3>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Réduire les émissions CO₂ de 30%</li>
              <li>Améliorer le score EcoIndex (viser B ou A)</li>
              <li>Atteindre 90+ sur Lighthouse Performance</li>
              <li>Conformité RGAA niveau AA</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--error-color)' }}>⛔ À éviter absolument</h3>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Vidéos en autoplay</li>
              <li>Images non optimisées &gt; 200 KB</li>
              <li>Plus de 3 fonts différentes</li>
              <li>JavaScript bloquant le rendu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalAudit;
