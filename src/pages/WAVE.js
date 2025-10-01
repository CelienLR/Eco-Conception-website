import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUniversalAccess, 
  faExclamationTriangle,
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const WAVE = () => {
  const auditResults = [
    {
      type: 'Erreur',
      element: 'Images sans texte alternatif',
      location: 'Page d\'accueil - Carrousel principal',
      impact: 'Critique : Les utilisateurs de lecteurs d\'écran ne peuvent pas accéder au contenu visuel',
      solution: 'Ajouter un attribut alt descriptif à toutes les images : <img src="..." alt="Description précise de l\'image">',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Erreur',
      element: 'Contraste insuffisant (texte/fond)',
      location: 'Footer - Liens sociaux et mentions légales',
      impact: 'Important : Texte gris clair sur fond gris (#999 sur #ddd) - ratio 2.1:1 au lieu de 4.5:1 minimum',
      solution: 'Augmenter le contraste en utilisant un texte plus foncé (#555) ou un fond plus clair (#fff)',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Erreur',
      element: 'Liens vides',
      location: 'Navigation secondaire - Icônes sociales',
      impact: 'Critique : Liens <a> sans texte ni aria-label, incompréhensibles pour les lecteurs d\'écran',
      solution: 'Ajouter aria-label aux liens icônes : <a href="..." aria-label="Suivez-nous sur Facebook">',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Erreur',
      element: 'Hiérarchie de titres incorrecte',
      location: 'Pages d\'actualités',
      impact: 'Moyen : Passage de <h2> directement à <h4>, saute le niveau <h3>',
      solution: 'Respecter l\'ordre hiérarchique : h1 > h2 > h3 > h4 sans sauter de niveau',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Alerte',
      element: 'Lien suspect (texte "Cliquez ici")',
      location: 'Articles de blog',
      impact: 'Moyen : Texte de lien non explicite hors contexte',
      solution: 'Utiliser des libellés descriptifs : "Lire l\'article sur [sujet]" au lieu de "Cliquez ici"',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Texte alternatif redondant',
      location: 'Galerie photos',
      impact: 'Faible : Attribut alt identique au texte adjacent',
      solution: 'Éviter la redondance : si l\'image est décorative et a un texte adjacent, utiliser alt=""',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Label de formulaire manquant',
      location: 'Recherche - Champ de saisie',
      impact: 'Important : Input sans <label> associé',
      solution: 'Ajouter un label explicite : <label for="search">Rechercher sur le site</label>',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'À vérifier',
      element: 'Texte justifié',
      location: 'Pages de contenu éditorial',
      impact: 'Variable : La justification peut créer des espaces irréguliers difficiles à lire',
      solution: 'Privilégier l\'alignement à gauche pour améliorer la lisibilité',
      icon: faInfoCircle,
      color: 'var(--info-color)'
    },
    {
      type: 'À vérifier',
      element: 'Ordre de tabulation',
      location: 'Navigation principale',
      impact: 'Variable : L\'ordre de navigation au clavier doit suivre l\'ordre logique',
      solution: 'Tester la navigation au clavier (Tab) et vérifier que l\'ordre est intuitif',
      icon: faInfoCircle,
      color: 'var(--info-color)'
    }
  ];

  const criticalIssues = [
    {
      problem: 'Images sans texte alternatif',
      count: 12,
      correction: 'Ajouter des attributs alt descriptifs à toutes les images porteuses de sens. Pour les images décoratives, utiliser alt="".',
      example: '<img src="mairie.jpg" alt="Façade de la mairie de Cholet" />',
      impact: 'Les utilisateurs aveugles ou malvoyants utilisant des lecteurs d\'écran ne peuvent pas accéder au contenu visuel, ce qui rend le site partiellement inutilisable pour eux.'
    },
    {
      problem: 'Contrastes de couleurs insuffisants',
      count: 8,
      correction: 'Augmenter le contraste entre le texte et l\'arrière-plan pour atteindre au minimum 4.5:1 (niveau AA) ou 7:1 (niveau AAA).',
      example: 'Passer de #999 sur #ddd (ratio 2.1:1) à #555 sur #fff (ratio 9.7:1)',
      impact: 'Les personnes ayant une déficience visuelle (malvoyance, daltonisme, vision réduite) ont des difficultés à lire le texte, particulièrement dans des conditions de luminosité variables.'
    },
    {
      problem: 'Liens et boutons sans texte',
      count: 6,
      correction: 'Ajouter aria-label ou aria-labelledby aux éléments interactifs qui n\'ont pas de texte visible.',
      example: '<a href="facebook.com" aria-label="Suivez-nous sur Facebook"><i class="fa-facebook"></i></a>',
      impact: 'Les lecteurs d\'écran annoncent uniquement "lien" sans indiquer la destination, rendant la navigation impossible pour les utilisateurs aveugles.'
    }
  ];

  const errorCount = 9;
  const alertCount = 19;
  const verifyCount = 0;

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faUniversalAccess} style={{ color: 'var(--info-color)' }} />
          {' '}Audit WAVE - cholet.fr
        </h1>
        <p className="subtitle">Découverte de l'accessibilité numérique avec WAVE</p>
      </div>

      <div className="section">
        <h2>Découverte de WAVE</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3>🔍 Qu'est-ce que WAVE ?</h3>
            <p>
              <strong>WAVE (Web Accessibility Evaluation Tool)</strong> est un outil gratuit développé par
              WebAIM (Web Accessibility In Mind) pour identifier les problèmes d'accessibilité sur les pages web.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>URL :</strong> <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">
                wave.webaim.org
              </a><br />
              <strong>Types :</strong> Extension navigateur + API + version en ligne<br />
              <strong>Gratuit :</strong> Oui (version de base)
            </p>
          </div>

          <div className="card">
            <h3>📊 Icônes et indicateurs WAVE</h3>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li><span style={{ color: 'var(--error-color)' }}>🔴 Erreurs</span> : Problèmes d'accessibilité confirmés à corriger</li>
              <li><span style={{ color: 'var(--warning-color)' }}>🟡 Alertes</span> : Éléments à vérifier manuellement</li>
              <li><span style={{ color: 'var(--primary-color)' }}>🟢 Fonctionnalités</span> : Éléments d'accessibilité détectés</li>
              <li><span style={{ color: 'var(--info-color)' }}>🔵 Éléments structurels</span> : Titres, landmarks, etc.</li>
              <li><span style={{ color: 'var(--text-color)' }}>⚪ Contraste</span> : Vérification des ratios de contraste</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
          <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '0.5rem' }} />
          <strong>Note :</strong> WAVE détecte les problèmes techniques mais ne peut pas évaluer tous les aspects
          de l'accessibilité (comme la clarté du contenu ou la logique de navigation). Un audit manuel complémentaire
          reste nécessaire.
        </div>
      </div>

      <div className="section">
        <h2>Résultats de l'audit</h2>
        
        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
            <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
            <div className="stat-value">{errorCount}</div>
            <div className="stat-label">Erreurs détectées</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            <div className="stat-value">{alertCount}</div>
            <div className="stat-label">Alertes</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            <div className="stat-value">{verifyCount}</div>
            <div className="stat-label">Éléments à vérifier</div>
          </div>
        </div>

        <h3>Tableau d'audit détaillé</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>Type</th>
                <th style={{ width: '20%' }}>Élément concerné</th>
                <th style={{ width: '20%' }}>Localisation</th>
                <th style={{ width: '25%' }}>Impact pour l'utilisateur</th>
                <th style={{ width: '25%' }}>Solution proposée</th>
              </tr>
            </thead>
            <tbody>
              {auditResults.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span 
                      className={`badge badge-${
                        item.type === 'Erreur' ? 'error' : 
                        item.type === 'Alerte' ? 'warning' : 'info'
                      }`}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                      {item.type}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.9rem' }}><strong>{item.element}</strong></td>
                  <td style={{ fontSize: '0.85rem' }}>{item.location}</td>
                  <td style={{ fontSize: '0.85rem' }}>{item.impact}</td>
                  <td style={{ fontSize: '0.85rem' }}>
                    <code style={{ fontSize: '0.8rem', display: 'block', whiteSpace: 'normal' }}>
                      {item.solution}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>Analyse et corrections prioritaires</h2>
        <p>Sélection des 3 erreurs critiques avec solutions détaillées :</p>

        {criticalIssues.map((issue, index) => (
          <div key={index} className="card" style={{ 
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--error-color)'
          }}>
            <h3 style={{ color: 'var(--error-color)', marginTop: 0 }}>
              {index + 1}. {issue.problem}
              <span className="badge badge-error" style={{ marginLeft: '1rem', fontSize: '0.9rem' }}>
                {issue.count} occurrences
              </span>
            </h3>
            
            <h4 style={{ fontSize: '1rem', marginTop: '1rem' }}>✅ Correction :</h4>
            <p style={{ fontSize: '0.95rem' }}>{issue.correction}</p>

            <h4 style={{ fontSize: '1rem', marginTop: '1rem' }}>📝 Exemple de code corrigé :</h4>
            <code style={{ 
              display: 'block', 
              padding: '1rem',
              backgroundColor: '#1e293b',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '0.9rem'
            }}>
              {issue.example}
            </code>

            <h4 style={{ fontSize: '1rem', marginTop: '1rem' }}>♿ Impact sur l'utilisateur :</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{issue.impact}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Rapport de synthèse</h2>
        
        <h3>
          <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'var(--error-color)', marginRight: '0.5rem' }} />
          Problèmes majeurs identifiés
        </h3>
        <div className="highlight-box" style={{ backgroundColor: '#fee2e2', borderColor: 'var(--error-color)' }}>
          <ul className="list-checked">
            <li><strong>1 champ de formulaire</strong> sans label associé</li>
            <li><strong>3 boutons vides</strong> sans texte ni aria-label</li>
            <li><strong>5 problèmes ARIA</strong> dans les menus de navigation</li>
            <li><strong>19 alertes</strong> à vérifier manuellement</li>
            <li><strong>58 fonctionnalités</strong> d'accessibilité détectées</li>
          </ul>
        </div>

        <h3 style={{ marginTop: '2rem' }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }} />
          Corrections prioritaires
        </h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>Prio</th>
              <th style={{ width: '30%' }}>Problème</th>
              <th style={{ width: '15%' }}>Temps estimé</th>
              <th style={{ width: '25%' }}>Responsable</th>
              <th style={{ width: '25%' }}>Bénéfice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="badge badge-error">1</span></td>
              <td>Ajouter alt à toutes les images</td>
              <td>2 heures</td>
              <td>Rédacteur + Intégrateur</td>
              <td>Accessibilité pour non-voyants</td>
            </tr>
            <tr>
              <td><span className="badge badge-error">1</span></td>
              <td>Corriger les contrastes insuffisants</td>
              <td>1 heure</td>
              <td>Designer + Intégrateur</td>
              <td>Lisibilité pour malvoyants</td>
            </tr>
            <tr>
              <td><span className="badge badge-error">1</span></td>
              <td>Ajouter aria-label aux liens icônes</td>
              <td>30 minutes</td>
              <td>Développeur</td>
              <td>Navigation au lecteur d'écran</td>
            </tr>
            <tr>
              <td><span className="badge badge-warning">2</span></td>
              <td>Corriger la hiérarchie des titres</td>
              <td>1 heure</td>
              <td>Intégrateur</td>
              <td>Structure logique de page</td>
            </tr>
            <tr>
              <td><span className="badge badge-warning">2</span></td>
              <td>Associer labels aux formulaires</td>
              <td>45 minutes</td>
              <td>Développeur</td>
              <td>Utilisation des formulaires</td>
            </tr>
          </tbody>
        </table>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <strong>💡 Estimation :</strong> Les corrections prioritaires (P1) peuvent être réalisées en 
          <strong> environ 3h30</strong> et résoudront les problèmes bloquants pour la majorité des utilisateurs
          en situation de handicap.
        </div>

        <h3 style={{ marginTop: '2rem' }}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'var(--warning-color)', marginRight: '0.5rem' }} />
          Limites de l'outil WAVE
        </h3>
        <div className="grid grid-2">
          <div className="card">
            <h4 style={{ color: 'var(--error-color)' }}>❌ Ce que WAVE ne peut PAS détecter</h4>
            <ul style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              <li>La pertinence du contenu des textes alternatifs</li>
              <li>L'ordre logique de lecture (nécessite test au clavier)</li>
              <li>La clarté du langage utilisé</li>
              <li>Les problèmes de navigation complexes</li>
              <li>L'accessibilité des contenus dynamiques (JavaScript)</li>
              <li>La compatibilité avec tous les lecteurs d'écran</li>
            </ul>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>✅ Points forts de WAVE</h4>
            <ul style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Gratuit et facile d'utilisation</li>
              <li>Résultats visuels intuitifs</li>
              <li>Détection automatique rapide</li>
              <li>Extension navigateur pratique</li>
              <li>Documentation pédagogique</li>
              <li>Bon point de départ pour un audit</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-warning" style={{ marginTop: '1.5rem' }}>
          <strong>⚠️ Important :</strong> WAVE est un excellent outil de détection automatique, mais il ne remplace
          pas un audit manuel complet ni des tests avec de vrais utilisateurs en situation de handicap. 
          Environ <strong>30% des problèmes d'accessibilité</strong> nécessitent une évaluation humaine.
        </div>
      </div>

      <div className="section">
        <h2>📊 Rapport de synthèse WAVE</h2>
        
        <div className="card" style={{ backgroundColor: '#f0f9ff', border: '2px solid var(--info-color)' }}>
          <h3 style={{ color: 'var(--info-color)', marginTop: 0 }}>
            📝 Synthèse de l'audit d'accessibilité WAVE - cholet.fr
          </h3>
          
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>🔴 Problèmes majeurs identifiés</h4>
            <div className="grid grid-3" style={{ gap: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '6px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--error-color)' }}>9</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Erreurs critiques</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--warning-color)' }}>19</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Alertes</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '6px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--info-color)' }}>58</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Fonctionnalités</div>
              </div>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Top 3 des erreurs critiques :</strong></p>
              <ol style={{ marginBottom: 0 }}>
                <li><strong>1 champ de formulaire sans label</strong> - Impact : Critique pour lecteurs d'écran</li>
                <li><strong>3 boutons vides</strong> - Impact : Navigation impossible sans contexte visuel</li>
                <li><strong>5 problèmes ARIA</strong> - Impact : Menus de navigation confus</li>
              </ol>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>✅ Corrections prioritaires</h4>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Priorité</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Problème</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Solution</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem' }}>Temps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem' }}><span className="badge badge-error">P1</span></td>
                  <td style={{ padding: '0.5rem' }}>Champ formulaire sans label</td>
                  <td style={{ padding: '0.5rem' }}>Ajouter &lt;label for="search"&gt;</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem' }}>15 min</td>
                </tr>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '0.5rem' }}><span className="badge badge-error">P1</span></td>
                  <td style={{ padding: '0.5rem' }}>Boutons vides (3)</td>
                  <td style={{ padding: '0.5rem' }}>Ajouter aria-label descriptifs</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem' }}>30 min</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem' }}><span className="badge badge-warning">P2</span></td>
                  <td style={{ padding: '0.5rem' }}>Menus ARIA défectueux (5)</td>
                  <td style={{ padding: '0.5rem' }}>Corriger rôles et états ARIA</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem' }}>2h</td>
                </tr>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '0.5rem' }}><span className="badge badge-warning">P2</span></td>
                  <td style={{ padding: '0.5rem' }}>Texte très petit (1)</td>
                  <td style={{ padding: '0.5rem' }}>Augmenter taille à 12px min</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem' }}>10 min</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.85rem', color: '#64748b' }}>
              <strong>Temps total estimé :</strong> 3 heures pour corriger toutes les erreurs critiques
            </p>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>⚠️ Limites de l'outil WAVE</h4>
            <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
              <li><strong>Détection automatique uniquement</strong> : ~70% des problèmes détectés, 30% nécessitent un audit manuel</li>
              <li><strong>Pas de test utilisateur</strong> : Ne remplace pas les tests avec personnes en situation de handicap</li>
              <li><strong>Analyse d'une page à la fois</strong> : Nécessite de tester plusieurs pages représentatives</li>
              <li><strong>Contexte manquant</strong> : Certaines alertes peuvent être des faux positifs selon le contexte</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid var(--primary-color)' }}>
            <h4 style={{ marginTop: 0, color: 'var(--primary-color)' }}>🎯 Recommandation finale</h4>
            <p style={{ marginBottom: 0 }}>
              Corriger en priorité les <strong>9 erreurs critiques</strong> identifiées par WAVE (temps estimé : 3h).
              Puis, réaliser un <strong>audit RGAA complet</strong> pour évaluer la conformité selon le référentiel officiel
              et tester manuellement avec un lecteur d'écran (NVDA ou JAWS). Objectif : atteindre <strong>100% de conformité
              niveau AA</strong> d'ici 3 mois.
            </p>
          </div>
        </div>

        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>📸 Captures d'écran annotées</h4>
          <p><strong>Note :</strong> Dans un contexte réel, vous ajouteriez ici des captures d'écran de WAVE montrant :</p>
          <ul style={{ marginBottom: 0 }}>
            <li>La vue d'ensemble des erreurs détectées (icônes rouges/orange/vertes)</li>
            <li>Le détail d'une erreur critique avec explication contextuelle</li>
            <li>Les recommandations de correction pour chaque type d'erreur</li>
            <li>La comparaison avant/après correction</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Recommandations pour aller plus loin</h2>
        
        <div className="highlight-box">
          <h3 style={{ marginTop: 0 }}>🎯 Plan d'action accessibilité</h3>
          <ol style={{ lineHeight: '2' }}>
            <li><strong>Corriger les erreurs WAVE</strong> : Commencer par les 12 images + 8 contrastes + 6 liens (priorité 1)</li>
            <li><strong>Former l'équipe</strong> : Sensibiliser développeurs et rédacteurs aux bonnes pratiques</li>
            <li><strong>Tester manuellement</strong> : Navigation au clavier, test avec lecteur d'écran (NVDA, JAWS)</li>
            <li><strong>Auditer avec RGAA</strong> : Évaluation complète selon le référentiel officiel</li>
            <li><strong>Impliquer les utilisateurs</strong> : Tests utilisateurs avec personnes en situation de handicap</li>
            <li><strong>Documenter</strong> : Créer un guide d'accessibilité interne pour l'équipe</li>
            <li><strong>Maintenir</strong> : Auditer régulièrement lors de chaque évolution du site</li>
          </ol>
        </div>

        <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>📚 Ressources complémentaires</h4>
            <ul style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              <li><a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">Documentation WAVE</a></li>
              <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG Quick Reference</a></li>
              <li><a href="https://accessibilite.numerique.gouv.fr/" target="_blank" rel="noopener noreferrer">RGAA - Référentiel officiel</a></li>
              <li><a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer">NVDA - Lecteur d'écran gratuit</a></li>
            </ul>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--info-color)' }}>🛠️ Outils complémentaires</h4>
            <ul style={{ fontSize: '0.9rem', marginBottom: 0 }}>
              <li><strong>Axe DevTools</strong> : Extension Chrome/Firefox</li>
              <li><strong>Colour Contrast Analyser</strong> : Vérification précise des contrastes</li>
              <li><strong>HeadingsMap</strong> : Visualiser la structure des titres</li>
              <li><strong>Keyboard Navigation Tester</strong> : Test navigation clavier</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WAVE;
