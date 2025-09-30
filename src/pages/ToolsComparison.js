import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const ToolsComparison = () => {
  const tools = [
    {
      name: 'Website Carbon Calculator',
      url: 'https://www.websitecarbon.com',
      free: true,
      ease: 5,
      precision: 3,
      criteria: 'Poids des pages, transfert de données, CO₂, énergies renouvelables',
      export: false,
      documentation: true,
      integration: false,
      strengths: 'Très simple d\'utilisation, résultats immédiats, sensibilisation efficace',
      weaknesses: 'Calculs simplifiés, peu de détails techniques, pas d\'API',
      rating: 4
    },
    {
      name: 'EcoIndex',
      url: 'https://www.ecoindex.fr',
      free: true,
      ease: 4,
      precision: 5,
      criteria: 'DOM, requêtes HTTP, poids des pages, empreinte environnementale (eau, GES)',
      export: true,
      documentation: true,
      integration: true,
      strengths: 'Méthodologie scientifique, détaillé, extension navigateur, API disponible',
      weaknesses: 'Interface moins intuitive, courbe d\'apprentissage',
      rating: 5
    },
    {
      name: 'Lighthouse',
      url: 'https://developers.google.com/web/tools/lighthouse',
      free: true,
      ease: 4,
      precision: 4,
      criteria: 'Performance, accessibilité, SEO, bonnes pratiques, PWA',
      export: true,
      documentation: true,
      integration: true,
      strengths: 'Intégré Chrome DevTools, complet, recommandations détaillées, open source',
      weaknesses: 'Focus performance > éco, pas de mesure CO₂ directe',
      rating: 5
    },
    {
      name: 'GreenIT-Analysis',
      url: 'https://github.com/cnumr/GreenIT-Analysis',
      free: true,
      ease: 4,
      precision: 5,
      criteria: 'DOM, requêtes, poids, GES, eau, bonnes pratiques écoconception',
      export: true,
      documentation: true,
      integration: false,
      strengths: 'Extension navigateur, basé sur EcoIndex, mesures précises, bonnes pratiques',
      weaknesses: 'Nécessite installation extension, moins connu',
      rating: 4
    },
    {
      name: 'WebPageTest',
      url: 'https://www.webpagetest.org',
      free: true,
      ease: 3,
      precision: 5,
      criteria: 'Performance, waterfall, film strip, métrics détaillées, vitesse',
      export: true,
      documentation: true,
      integration: true,
      strengths: 'Très détaillé, tests multi-locations, analyse vidéo, API',
      weaknesses: 'Interface complexe, pas de focus éco direct, temps d\'analyse long',
      rating: 4
    }
  ];

  const radarData = [
    {
      criterion: 'Facilité',
      'Website Carbon': 5,
      'EcoIndex': 4,
      'Lighthouse': 4,
      'GreenIT-Analysis': 4,
      'WebPageTest': 3
    },
    {
      criterion: 'Précision',
      'Website Carbon': 3,
      'EcoIndex': 5,
      'Lighthouse': 4,
      'GreenIT-Analysis': 5,
      'WebPageTest': 5
    },
    {
      criterion: 'Documentation',
      'Website Carbon': 4,
      'EcoIndex': 5,
      'Lighthouse': 5,
      'GreenIT-Analysis': 4,
      'WebPageTest': 5
    },
    {
      criterion: 'Intégration',
      'Website Carbon': 2,
      'EcoIndex': 5,
      'Lighthouse': 5,
      'GreenIT-Analysis': 3,
      'WebPageTest': 5
    },
    {
      criterion: 'Note globale',
      'Website Carbon': 4,
      'EcoIndex': 5,
      'Lighthouse': 5,
      'GreenIT-Analysis': 4,
      'WebPageTest': 4
    }
  ];

  const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faChartBar} style={{ color: 'var(--primary-color)' }} />
          {' '}Comparaison d'outils d'écoconception
        </h1>
        <p className="subtitle">Analyse de 5 outils pour mesurer l'impact environnemental des sites web</p>
      </div>

      <div className="section">
        <h2>Méthodologie</h2>
        <p>
          Nous avons testé 5 outils d'écoconception sur le site <strong>cholet.fr</strong> pour évaluer
          leurs fonctionnalités, leur facilité d'utilisation et leur pertinence. Chaque outil a été noté
          selon plusieurs critères sur une échelle de 1 à 5.
        </p>
        
        <div className="highlight-box">
          <strong>Critères d'évaluation :</strong>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            <li><strong>Facilité d'utilisation</strong> : Intuitivité de l'interface</li>
            <li><strong>Précision des résultats</strong> : Fiabilité et détail des métriques</li>
            <li><strong>Documentation</strong> : Qualité de la documentation disponible</li>
            <li><strong>Intégration</strong> : Possibilités d'API, plugins, extensions</li>
            <li><strong>Note globale</strong> : Appréciation générale de l'outil</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Tableau comparatif</h2>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Critère</th>
                {tools.map((tool, index) => (
                  <th key={index}>{tool.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>URL</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem' }}>
                      Accéder
                    </a>
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Gratuit</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    {tool.free ? (
                      <span className="badge badge-success">
                        <FontAwesomeIcon icon={faCheck} /> Oui
                      </span>
                    ) : (
                      <span className="badge badge-error">
                        <FontAwesomeIcon icon={faTimes} /> Non
                      </span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Facilité d'utilisation</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    <span className="badge badge-info">{tool.ease}/5</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Précision</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    <span className="badge badge-info">{tool.precision}/5</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Critères évalués</strong></td>
                {tools.map((tool, index) => (
                  <td key={index} style={{ fontSize: '0.85rem' }}>{tool.criteria}</td>
                ))}
              </tr>
              <tr>
                <td><strong>Export des résultats</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    {tool.export ? (
                      <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--primary-color)' }} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} style={{ color: '#cbd5e1' }} />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Documentation</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    {tool.documentation ? (
                      <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--primary-color)' }} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} style={{ color: '#cbd5e1' }} />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Intégration (API/Plugin)</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    {tool.integration ? (
                      <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--primary-color)' }} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} style={{ color: '#cbd5e1' }} />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td><strong>Points forts</strong></td>
                {tools.map((tool, index) => (
                  <td key={index} style={{ fontSize: '0.85rem' }}>{tool.strengths}</td>
                ))}
              </tr>
              <tr>
                <td><strong>Points faibles</strong></td>
                {tools.map((tool, index) => (
                  <td key={index} style={{ fontSize: '0.85rem' }}>{tool.weaknesses}</td>
                ))}
              </tr>
              <tr>
                <td><strong>Note globale</strong></td>
                {tools.map((tool, index) => (
                  <td key={index}>
                    <span className="badge badge-success" style={{ fontSize: '1rem' }}>
                      {tool.rating}/5
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>Graphique Radar - Comparaison visuelle</h2>
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="criterion" style={{ fontSize: '0.875rem' }} />
            <PolarRadiusAxis angle={90} domain={[0, 5]} />
            {tools.map((tool, index) => (
              <Radar
                key={tool.name}
                name={tool.name}
                dataKey={tool.name}
                stroke={colors[index]}
                fill={colors[index]}
                fillOpacity={0.3}
              />
            ))}
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <h2>Analyse et recommandations</h2>
        
        <h3>Forces et faiblesses par outil</h3>
        
        <div className="grid grid-2">
          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>Website Carbon Calculator</h4>
            <p><strong>✓ Meilleur pour :</strong> Sensibilisation rapide, communication</p>
            <p><strong>✗ Limites :</strong> Calculs simplifiés, manque de détails techniques</p>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--info-color)' }}>EcoIndex</h4>
            <p><strong>✓ Meilleur pour :</strong> Audit technique détaillé, méthodologie scientifique</p>
            <p><strong>✗ Limites :</strong> Interface moins intuitive pour débutants</p>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--warning-color)' }}>Lighthouse</h4>
            <p><strong>✓ Meilleur pour :</strong> Audit global (performance + accessibilité + SEO)</p>
            <p><strong>✗ Limites :</strong> Pas de mesure CO₂ directe</p>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--error-color)' }}>GreenIT-Analysis</h4>
            <p><strong>✓ Meilleur pour :</strong> Bonnes pratiques écoconception, extension navigateur</p>
            <p><strong>✗ Limites :</strong> Moins connu, nécessite installation</p>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Conclusion</h3>
        <div className="highlight-box">
          <p><strong>Recommandation selon le besoin :</strong></p>
          <ul className="list-checked">
            <li><strong>Pour débuter et sensibiliser :</strong> Website Carbon Calculator</li>
            <li><strong>Pour un audit technique complet :</strong> EcoIndex + GreenIT-Analysis</li>
            <li><strong>Pour optimiser performance et accessibilité :</strong> Lighthouse</li>
            <li><strong>Pour une analyse approfondie :</strong> WebPageTest</li>
          </ul>
          <p style={{ marginTop: '1rem', marginBottom: 0 }}>
            <strong>L'idéal :</strong> Utiliser une combinaison de ces outils pour obtenir une vision complète
            et croiser les résultats (par exemple : EcoIndex + Lighthouse + WAVE pour l'accessibilité).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsComparison;
