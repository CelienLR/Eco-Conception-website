import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faServer, faGlobe, faLightbulb, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const WebsiteCarbon = () => {
  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faLeaf} style={{ color: 'var(--primary-color)' }} />
          {' '}Website Carbon Calculator
        </h1>
        <p className="subtitle">Décryptage technique et pédagogique de l'outil</p>
      </div>

      <div className="section">
        <h2>Présentation générale</h2>
        <p>
          <strong>Website Carbon Calculator</strong> est un outil en ligne créé par Wholegrain Digital,
          une agence web britannique spécialisée dans le développement durable. L'outil permet d'estimer
          l'empreinte carbone d'une page web à chaque visite.
        </p>
        
        <div className="highlight-box">
          <p><strong>Pourquoi est-il utile ?</strong></p>
          <p style={{ marginBottom: 0 }}>
            Il permet de <strong>sensibiliser rapidement</strong> aux impacts environnementaux du web et de
            fournir un premier indicateur pour identifier les pages les plus énergivores. C'est un excellent
            point de départ pour une démarche d'écoconception.
          </p>
        </div>

        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>🎯 Objectif</h4>
            <p style={{ fontSize: '0.95rem' }}>
              Mesurer et communiquer l'empreinte carbone d'une page web
            </p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--info-color)' }}>👥 Public cible</h4>
            <p style={{ fontSize: '0.95rem' }}>
              Développeurs, designers, clients, grand public
            </p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--warning-color)' }}>💰 Coût</h4>
            <p style={{ fontSize: '0.95rem' }}>
              Gratuit, open source
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Fonctionnement technique</h2>
        
        <h3>
          <FontAwesomeIcon icon={faServer} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Données analysées
        </h3>
        <p>L'outil analyse principalement :</p>
        <ul>
          <li><strong>Poids total de la page</strong> : Somme de tous les fichiers transférés (HTML, CSS, JS, images, fonts, etc.)</li>
          <li><strong>Nombre de requêtes HTTP</strong></li>
          <li><strong>Type d'hébergement</strong> : Énergies renouvelables ou non</li>
        </ul>

        <h3 style={{ marginTop: '2rem' }}>
          <FontAwesomeIcon icon={faGlobe} style={{ color: 'var(--info-color)', marginRight: '0.5rem' }} />
          Méthode de calcul
        </h3>
        <div className="highlight-box">
          <p><strong>Formule simplifiée :</strong></p>
          <code style={{ display: 'block', padding: '1rem', backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', marginTop: '0.5rem' }}>
            CO₂ = Poids de la page × Intensité énergétique × Facteur de conversion CO₂
          </code>
        </div>

        <p style={{ marginTop: '1.5rem' }}>Détail des étapes :</p>
        <ol style={{ lineHeight: '1.8' }}>
          <li>
            <strong>Mesure du poids</strong> : L'outil charge la page et mesure le volume de données transférées
          </li>
          <li>
            <strong>Calcul de l'énergie</strong> : Le poids est multiplié par une intensité énergétique moyenne
            (environ 0.81 kWh/Go pour le réseau, les data centers et les appareils utilisateurs)
          </li>
          <li>
            <strong>Conversion en CO₂</strong> : L'énergie est convertie en émissions de CO₂ selon le mix
            énergétique (environ 442g CO₂/kWh au niveau mondial)
          </li>
          <li>
            <strong>Ajustement hébergement vert</strong> : Si l'hébergeur utilise des énergies renouvelables,
            les émissions sont réduites
          </li>
        </ol>

        <h3 style={{ marginTop: '2rem' }}>Provenance des données</h3>
        <table>
          <thead>
            <tr>
              <th>Donnée</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intensité énergétique du web</td>
              <td>Études académiques (Sustainable Web Design)</td>
            </tr>
            <tr>
              <td>Facteur de conversion CO₂</td>
              <td>IEA (Agence Internationale de l'Énergie)</td>
            </tr>
            <tr>
              <td>Hébergement vert</td>
              <td>The Green Web Foundation</td>
            </tr>
            <tr>
              <td>Poids de la page</td>
              <td>Analyse en temps réel via navigateur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Exemple pratique : cholet.fr</h2>
        
        <div className="grid grid-2">
          <div className="stat-card">
            <FontAwesomeIcon icon={faServer} size="2x" />
            <div className="stat-value">1.49 MB</div>
            <div className="stat-label">Poids de la page d'accueil</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
            <FontAwesomeIcon icon={faLeaf} size="2x" />
            <div className="stat-value">0.16g</div>
            <div className="stat-label">CO₂ émis par visite</div>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Interprétation des résultats</h3>
        <div className="card">
          <p>
            <strong>Émissions annuelles estimées</strong> (pour 10 000 visiteurs/mois) :
          </p>
          <ul>
            <li>0.16g × 10 000 × 12 = <strong>19.2 kg CO₂/an</strong></li>
            <li>Équivalent à environ <strong>96 km en voiture</strong></li>
          </ul>
        </div>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '0.5rem' }} />
          Le site cholet.fr obtient une <strong>note C</strong> et est plus propre que <strong>69% des sites web</strong> mondiaux.
          Cependant, le site n'utilise pas d'hébergement vert, ce qui pourrait réduire les émissions de 9%.
        </div>

        <h3 style={{ marginTop: '2rem' }}>Comparaison avec d'autres pages</h3>
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>Poids</th>
              <th>CO₂/visite</th>
              <th>Évaluation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cholet.fr (accueil)</td>
              <td>1.49 MB</td>
              <td>0.16g</td>
              <td><span className="badge badge-warning">C - Bon</span></td>
            </tr>
            <tr>
              <td>Site médian mondial</td>
              <td>2.2 MB</td>
              <td>0.88g</td>
              <td><span className="badge badge-warning">Référence</span></td>
            </tr>
            <tr>
              <td>Site éco-conçu (objectif)</td>
              <td>0.8 MB</td>
              <td>0.32g</td>
              <td><span className="badge badge-success">Excellent</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'var(--warning-color)', marginRight: '0.5rem' }} />
          Limites et biais de l'outil
        </h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h4 style={{ color: 'var(--error-color)' }}>❌ Ce qui n'est PAS pris en compte</h4>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>Émissions liées à la fabrication des équipements</li>
              <li>Consommation énergétique des serveurs en veille</li>
              <li>Impact des CDN et caches</li>
              <li>Variabilité selon les appareils utilisés</li>
              <li>Comportement utilisateur (scroll, interactions)</li>
            </ul>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>✓ Points de vigilance</h4>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>Calculs basés sur des moyennes mondiales</li>
              <li>Ne teste qu'une seule page à la fois</li>
              <li>Résultats variables selon le cache navigateur</li>
              <li>Approximation, pas une mesure exacte</li>
              <li>Utile pour comparaison relative, pas absolue</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
          <strong>Peut-on lui faire confiance ?</strong> Oui, pour une <strong>estimation approximative</strong>
          et une sensibilisation. Non, pour une mesure précise. L'outil est idéal pour identifier les pages
          problématiques et suivre les améliorations, mais doit être complété par d'autres outils pour un
          audit complet.
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: 'var(--warning-color)', marginRight: '0.5rem' }} />
          Fiche mémo : Comment ça marche ?
        </h2>
        
        <div className="highlight-box">
          <h3 style={{ marginTop: 0 }}>En 4 étapes simples :</h3>
          <ol style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li><strong>📊 Mesure</strong> : L'outil charge la page et calcule son poids total</li>
            <li><strong>⚡ Énergie</strong> : Le poids est converti en consommation électrique (kWh)</li>
            <li><strong>🌍 CO₂</strong> : L'énergie est transformée en émissions de CO₂</li>
            <li><strong>🌱 Ajustement</strong> : Réduction si l'hébergeur utilise des énergies renouvelables</li>
          </ol>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Question fréquente</h3>
        <div className="card">
          <p><strong>Q : "Pourquoi mon site affiche-t-il des résultats différents à chaque test ?"</strong></p>
          <p><strong>R :</strong> Plusieurs facteurs expliquent ces variations :</p>
          <ul>
            <li>Le <strong>cache du navigateur</strong> : Lors de la première visite, tous les fichiers sont téléchargés. 
            Lors des visites suivantes, certains fichiers peuvent être chargés depuis le cache local, réduisant le poids mesuré.</li>
            <li>Les <strong>contenus dynamiques</strong> : Certains éléments (publicités, images, scripts) peuvent varier d'une visite à l'autre.</li>
            <li>Les <strong>conditions réseau</strong> : La vitesse de connexion peut influencer le chargement de certains contenus.</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            <strong>💡 Conseil :</strong> Effectuez plusieurs tests et prenez la moyenne pour obtenir un résultat plus fiable.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Comparaison avec EcoIndex (bonus)</h2>
        <table>
          <thead>
            <tr>
              <th>Critère</th>
              <th>Website Carbon</th>
              <th>EcoIndex</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Métrique principale</strong></td>
              <td>CO₂ par visite</td>
              <td>Score A-G + impacts eau et GES</td>
            </tr>
            <tr>
              <td><strong>Facilité d'utilisation</strong></td>
              <td>⭐⭐⭐⭐⭐ Très simple</td>
              <td>⭐⭐⭐⭐ Simple</td>
            </tr>
            <tr>
              <td><strong>Précision</strong></td>
              <td>⭐⭐⭐ Approximative</td>
              <td>⭐⭐⭐⭐⭐ Méthodologie scientifique</td>
            </tr>
            <tr>
              <td><strong>Détails techniques</strong></td>
              <td>Limités</td>
              <td>Complets (DOM, requêtes, poids)</td>
            </tr>
            <tr>
              <td><strong>Recommandations</strong></td>
              <td>Génériques</td>
              <td>Détaillées et priorisées</td>
            </tr>
            <tr>
              <td><strong>API disponible</strong></td>
              <td>Non</td>
              <td>Oui</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
          <p><strong>Amélioration proposée pour Website Carbon :</strong></p>
          <p style={{ marginBottom: 0 }}>
            Ajouter un <strong>rapport détaillé téléchargeable</strong> avec la répartition du poids par type de ressource
            (images, JS, CSS, fonts) et des recommandations personnalisées pour chaque catégorie. Cela rendrait
            l'outil plus actionnable tout en conservant sa simplicité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCarbon;
