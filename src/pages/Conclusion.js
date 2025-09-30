import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faCheckCircle,
  faLightbulb,
  faRocket,
  faClipboardList,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Conclusion = () => {
  const keyTakeaways = [
    {
      title: 'Écoconception web',
      icon: '🌱',
      points: [
        'Le numérique représente 4% des émissions mondiales de GES',
        'cholet.fr émet 1.12g CO₂/visite, réduction de -50% possible',
        'Images non optimisées = 53% du poids total',
        'EcoIndex et GreenIT-Analysis pour mesures précises',
        'Objectif : < 1 MB par page, score EcoIndex B minimum'
      ]
    },
    {
      title: 'RGESN',
      icon: '📋',
      points: [
        '79 critères répartis en 8 familles',
        'Document officiel français (DINUM, ADEME, Arcep)',
        'Obligation légale pour services publics numériques',
        'Démarche d\'amélioration continue nécessaire',
        'Plan d\'action priorisé : P1 (images + minification)'
      ]
    },
    {
      title: 'Accessibilité',
      icon: '♿',
      points: [
        '15% de la population en situation de handicap',
        'WAVE détecte 12 erreurs critiques sur cholet.fr',
        'RGAA : 106 critères, 13 thèmes, 4 principes',
        'Corrections prioritaires : alt, contrastes, labels',
        'Conformité = obligation légale + meilleure UX'
      ]
    }
  ];

  const ecoDesignChecklist = [
    {
      phase: '🎯 Cadrage',
      items: [
        'Définir objectifs écoresponsables mesurables',
        'Nommer un référent écoconception',
        'Choisir hébergeur vert (Infomaniak, Ikoula)',
        'Prévoir budget temps pour audits',
        'Intégrer écoconception au cahier des charges'
      ]
    },
    {
      phase: '🎨 Design',
      items: [
        'Limiter à 2 familles de polices maximum',
        'Éviter animations autoplay et vidéos en fond',
        'Vérifier contrastes (min 4.5:1)',
        'Concevoir maquettes légères (< 1 MB)',
        'Prévoir mode sombre pour écrans OLED'
      ]
    },
    {
      phase: '💻 Développement Frontend',
      items: [
        'Optimiser images : WebP/AVIF + compression',
        'Implémenter lazy loading (loading="lazy")',
        'Minifier et regrouper CSS/JS',
        'Limiter librairies externes',
        'Mettre en place cache efficace'
      ]
    },
    {
      phase: '⚙️ Développement Backend',
      items: [
        'Optimiser requêtes base de données',
        'API légère (pas de surdimensionnement)',
        'Désactiver logs inutiles en production',
        'Utiliser framework adapté au besoin',
        'Activer compression Gzip/Brotli'
      ]
    },
    {
      phase: '🌐 Hébergement',
      items: [
        'Hébergeur avec énergies renouvelables',
        'Configurer CDN (Cloudflare, Fastly)',
        'Planifier sauvegardes optimisées',
        'Activer compression serveur',
        'Surveiller consommation ressources'
      ]
    },
    {
      phase: '✅ Tests et validation',
      items: [
        'Audit EcoIndex / Website Carbon',
        'Test Lighthouse (performance + accessibilité)',
        'Audit WAVE (accessibilité)',
        'Vérification RGAA/RGESN',
        'Documentation des choix'
      ]
    }
  ];

  const tools = [
    {
      category: 'Audit écoconception',
      items: [
        { name: 'EcoIndex', url: 'https://www.ecoindex.fr' },
        { name: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com' },
        { name: 'GreenIT-Analysis', url: 'https://github.com/cnumr/GreenIT-Analysis' }
      ]
    },
    {
      category: 'Audit accessibilité',
      items: [
        { name: 'WAVE', url: 'https://wave.webaim.org/' },
        { name: 'RGAA', url: 'https://accessibilite.numerique.gouv.fr/' },
        { name: 'Axe DevTools', url: 'https://www.deque.com/axe/devtools/' }
      ]
    },
    {
      category: 'Optimisation images',
      items: [
        { name: 'TinyPNG', url: 'https://tinypng.com' },
        { name: 'Squoosh', url: 'https://squoosh.app' },
        { name: 'ImageOptim', url: 'https://imageoptim.com' }
      ]
    },
    {
      category: 'Test performances',
      items: [
        { name: 'Lighthouse', url: 'https://developers.google.com/web/tools/lighthouse' },
        { name: 'WebPageTest', url: 'https://www.webpagetest.org' },
        { name: 'GTmetrix', url: 'https://gtmetrix.com' }
      ]
    },
    {
      category: 'Hébergement vert',
      items: [
        { name: 'The Green Web Foundation', url: 'https://www.thegreenwebfoundation.org' },
        { name: 'Infomaniak', url: 'https://www.infomaniak.com' },
        { name: 'Ikoula', url: 'https://www.ikoula.com' }
      ]
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faBookOpen} style={{ color: 'var(--primary-color)' }} />
          {' '}Conclusion
        </h1>
        <p className="subtitle">Synthèse du TP et guide pratique pour l'écoconception</p>
      </div>

      <div className="section">
        <h2>Ce que nous avons appris</h2>
        <p>
          Au cours de ce TP, nous avons exploré les enjeux majeurs d'un numérique responsable, 
          à la fois sous l'angle environnemental et social. Voici les points clés à retenir :
        </p>

        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem' }}>
          {keyTakeaways.map((section, index) => (
            <div key={index} className="card">
              <h3 style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                {section.title}
              </h3>
              <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faChartLine} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Résultats et gains potentiels pour cholet.fr
        </h2>
        
        <div className="grid grid-2">
          <div className="card" style={{ backgroundColor: '#fee2e2', borderLeft: '4px solid var(--error-color)' }}>
            <h3 style={{ color: 'var(--error-color)', marginTop: 0 }}>📊 État actuel</h3>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>Poids : <strong>1.49 MB</strong> par page</li>
              <li>Requêtes HTTP : <strong>95</strong></li>
              <li>Émissions : <strong>0.16g CO₂</strong> / visite</li>
              <li>Score EcoIndex : <strong>E (40/100)</strong></li>
              <li>Erreurs accessibilité : <strong>9 erreurs</strong></li>
              <li>Classement : <strong>329 302 / 527 131</strong></li>
            </ul>
          </div>

          <div className="card" style={{ backgroundColor: '#dcfce7', borderLeft: '4px solid var(--primary-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>✨ Après optimisation</h3>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>Poids : <strong>1.0 MB</strong> (-33%) 🎉</li>
              <li>Requêtes HTTP : <strong>40</strong> (-58%)</li>
              <li>Émissions : <strong>0.13g CO₂</strong> (-19%)</li>
              <li>Score EcoIndex : <strong>B (70/100)</strong></li>
              <li>Erreurs accessibilité : <strong>0</strong> ✅</li>
              <li>Classement : <strong>Top 150 000</strong></li>
            </ul>
          </div>
        </div>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <strong>💰 Impact estimé sur 1 an (10 000 visiteurs/mois) :</strong>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            <li>État actuel : <strong>19.2 kg CO₂/an</strong> (équivalent à 96 km en voiture)</li>
            <li>Après optimisation : <strong>15.6 kg CO₂/an</strong> (-19%)</li>
            <li>Économie annuelle : <strong>3.6 kg CO₂</strong> (18 km en voiture économisés)</li>
            <li>Économie bande passante : <strong>~0.6 GB/an</strong></li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faClipboardList} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Checklist d'écoconception complète
        </h2>
        <p>
          Guide pratique pour intégrer l'écoconception à chaque étape d'un projet de développement :
        </p>

        {ecoDesignChecklist.map((phase, index) => (
          <div key={index} className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>{phase.phase}</h3>
            <ul className="list-checked" style={{ paddingLeft: 0, fontSize: '0.95rem', marginBottom: 0 }}>
              {phase.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: 'var(--warning-color)', marginRight: '0.5rem' }} />
          Boîte à outils complète
        </h2>
        <p>Référentiel des meilleurs outils pour chaque besoin :</p>

        <div className="grid grid-2">
          {tools.map((category, index) => (
            <div key={index} className="card">
              <h4 style={{ color: 'var(--primary-color)' }}>{category.category}</h4>
              <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                {category.items.map((tool, idx) => (
                  <li key={idx}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <strong>{tool.name}</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faRocket} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Conseils pour réussir
        </h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)' }}>✅ Les bonnes pratiques</h3>
            <ul className="list-checked" style={{ paddingLeft: 0, fontSize: '0.95rem' }}>
              <li><strong>Impliquer toute l'équipe</strong> dès le début</li>
              <li><strong>Prioriser</strong> : actions à fort impact d'abord</li>
              <li><strong>Documenter</strong> tous les choix d'écoconception</li>
              <li><strong>Tester tôt et souvent</strong> (audits réguliers)</li>
              <li><strong>Sensibiliser</strong> clients et utilisateurs</li>
              <li><strong>Mesurer</strong> les progrès avec indicateurs clairs</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--error-color)' }}>❌ Les pièges à éviter</h3>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>❌ Attendre la fin du projet pour optimiser</li>
              <li>❌ Se concentrer uniquement sur un aspect</li>
              <li>❌ Négliger l'accessibilité au profit de l'éco</li>
              <li>❌ Copier-coller des solutions sans comprendre</li>
              <li>❌ Viser la perfection dès le premier coup</li>
              <li>❌ Oublier la maintenance et le suivi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Prochaines étapes
        </h2>
        
        <div className="highlight-box">
          <h3 style={{ marginTop: 0 }}>📅 Feuille de route recommandée</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--error-color)' }}>🔴 Immédiat (Semaine 1-2)</h4>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Optimiser toutes les images du site (WebP + compression)</li>
              <li>Implémenter le lazy loading</li>
              <li>Corriger les 12 erreurs d'accessibilité critiques</li>
              <li>Minifier CSS et JavaScript</li>
            </ul>
            <p style={{ marginBottom: 0 }}><strong>Impact :</strong> -40% poids, 0 erreur accessibilité</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--warning-color)' }}>🟡 Court terme (Mois 1-2)</h4>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Migrer vers un hébergeur vert</li>
              <li>Mettre en place un CDN</li>
              <li>Nettoyer le code et supprimer dépendances inutilisées</li>
              <li>Corriger hiérarchie des titres et formulaires</li>
            </ul>
            <p style={{ marginBottom: 0 }}><strong>Impact :</strong> -50% CO₂, conformité RGAA partielle</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--info-color)' }}>🔵 Moyen terme (Mois 3-6)</h4>
            <ul className="list-checked" style={{ paddingLeft: 0 }}>
              <li>Documenter stratégie d'écoconception</li>
              <li>Former l'équipe (développeurs, rédacteurs, designers)</li>
              <li>Mettre en place audits trimestriels automatiques</li>
              <li>Créer guide de bonnes pratiques interne</li>
              <li>Communiquer sur l'engagement écoresponsable</li>
            </ul>
            <p style={{ marginBottom: 0 }}><strong>Impact :</strong> Amélioration continue, culture d'équipe</p>
          </div>
        </div>
      </div>

      <div className="section" style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid var(--primary-color)' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '0.5rem' }} />
          Conclusion finale
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          L'<strong>écoconception</strong> et l'<strong>accessibilité</strong> ne sont pas des contraintes, 
          mais des <strong>leviers d'innovation et de qualité</strong>. Un service numérique sobre, performant 
          et accessible améliore l'expérience de tous les utilisateurs, réduit les coûts, renforce l'image 
          de l'organisation et contribue concrètement à la transition écologique.
        </p>
        
        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          <div className="card" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🌍</div>
            <h4 style={{ color: 'var(--primary-color)' }}>Environnemental</h4>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              -57% d'émissions CO₂<br />
              Contribution climat
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>♿</div>
            <h4 style={{ color: 'var(--info-color)' }}>Social</h4>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Accessibilité pour tous<br />
              Inclusion renforcée
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📈</div>
            <h4 style={{ color: 'var(--warning-color)' }}>Économique</h4>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              -30% coûts hébergement<br />
              Meilleur SEO
            </p>
          </div>
        </div>

        <div className="alert alert-success" style={{ marginTop: '2rem', fontSize: '1.05rem' }}>
          <strong>💡 Le message clé :</strong> Chaque ligne de code compte pour un numérique plus durable et inclusif. 
          Les compétences acquises dans ce TP sont de plus en plus recherchées et valorisées dans le monde professionnel. 
          <strong> Vous êtes maintenant équipés</strong> pour concevoir des projets numériques responsables et exemplaires ! 🚀
        </div>
      </div>

      <div className="section" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>
          Merci d'avoir suivi ce TP ! 🎉
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '1rem' }}>
          Pour toute question ou amélioration, n'hésitez pas à consulter les ressources et outils listés.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="https://www.cholet.fr/welcome/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faRocket} style={{ marginRight: '0.5rem' }} />
            Visiter le site analysé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
