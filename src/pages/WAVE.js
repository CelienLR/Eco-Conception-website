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
      element: 'Missing form label (1x)',
      location: 'Barre de recherche - Header du site',
      impact: 'Critique : Champ de recherche sans étiquette <label>, inaccessible aux lecteurs d\'écran',
      solution: 'Ajouter <label for="search">Rechercher</label> ou utiliser aria-label="Rechercher sur le site"',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Erreur',
      element: 'Empty button (3x)',
      location: 'Navigation principale - Menus déroulants',
      impact: 'Critique : Boutons sans texte ni aria-label, annoncés comme "bouton vide" par les lecteurs d\'écran',
      solution: 'Ajouter aria-label explicite : <button aria-label="Ouvrir le menu">',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Erreur',
      element: 'Broken ARIA menu (5x)',
      location: 'Navigation principale et secondaire',
      impact: 'Important : Attributs ARIA incorrects (role="menu" mal utilisé), structure confuse pour les technologies d\'assistance',
      solution: 'Corriger les rôles ARIA : utiliser role="navigation" avec aria-expanded et aria-haspopup appropriés',
      icon: faExclamationCircle,
      color: 'var(--error-color)'
    },
    {
      type: 'Alerte',
      element: 'Missing fieldset (1x)',
      location: 'Formulaires - Groupe de boutons radio',
      impact: 'Moyen : Absence de <fieldset> pour regrouper les champs liés',
      solution: 'Envelopper les boutons radio dans <fieldset><legend>Titre du groupe</legend>...</fieldset>',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Possible heading (1x)',
      location: 'Contenu éditorial',
      impact: 'Faible : Texte stylé comme un titre mais sans balise sémantique appropriée',
      solution: 'Utiliser les balises <h2>, <h3>, etc. au lieu de <p> avec style gras/grand',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Noscript element (1x)',
      location: 'Code source - Balise <noscript>',
      impact: 'Info : Présence de contenu alternatif si JavaScript désactivé (bonne pratique)',
      solution: 'Vérifier que le contenu noscript offre une alternative fonctionnelle',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Device dependent event handler (2x)',
      location: 'Éléments interactifs JavaScript',
      impact: 'Moyen : Gestionnaires d\'événements uniquement souris (onclick), non accessibles au clavier',
      solution: 'Ajouter les gestionnaires clavier : onKeyPress ou onKeyDown en complément',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Accesskey (1x)',
      location: 'Liens d\'accès rapide',
      impact: 'Faible : Attribut accesskey peut entrer en conflit avec raccourcis navigateur/lecteur d\'écran',
      solution: 'Éviter accesskey ou documenter clairement les raccourcis utilisés',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Very small text (4x)',
      location: 'Mentions légales et notes de bas de page',
      impact: 'Moyen : Texte inférieur à 10px, difficilement lisible pour malvoyants',
      solution: 'Augmenter la taille minimale à 12px (0.75rem) ou utiliser des unités relatives (rem)',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    },
    {
      type: 'Alerte',
      element: 'Redundant title text (10x)',
      location: 'Liens et images diverses',
      impact: 'Faible : Attribut title répétant le texte du lien/alt de l\'image',
      solution: 'Supprimer les title redondants ou fournir des informations complémentaires',
      icon: faExclamationTriangle,
      color: 'var(--warning-color)'
    }
  ];

  const criticalIssues = [
    {
      problem: 'Champ de formulaire sans label',
      count: 1,
      correction: 'Ajouter une étiquette <label> visible et associée au champ de recherche, ou utiliser aria-label si label visuel non souhaité.',
      example: '<label for="search">Rechercher</label>\n<input type="search" id="search" placeholder="Rechercher sur le site">\n\n<!-- OU avec aria-label -->\n<input type="search" aria-label="Rechercher sur le site" placeholder="Recherche...">',
      impact: 'Les utilisateurs de lecteurs d\'écran ne savent pas à quoi sert le champ de saisie. Ils entendent seulement "champ de saisie" sans contexte, rendant le formulaire inutilisable.'
    },
    {
      problem: 'Boutons vides sans texte',
      count: 3,
      correction: 'Ajouter un aria-label descriptif à tous les boutons qui n\'ont pas de texte visible (boutons icônes, boutons menus).',
      example: '<!-- Avant -->\n<button><span class="icon-menu"></span></button>\n\n<!-- Après -->\n<button aria-label="Ouvrir le menu de navigation">\n  <span class="icon-menu" aria-hidden="true"></span>\n</button>',
      impact: 'Les lecteurs d\'écran annoncent "bouton" sans indiquer son rôle. Les utilisateurs aveugles ne peuvent pas comprendre la fonction du bouton et ne peuvent pas naviguer efficacement.'
    },
    {
      problem: 'Menus ARIA mal configurés',
      count: 5,
      correction: 'Corriger l\'utilisation des attributs ARIA dans les menus : role="menu" est réservé aux menus applicatifs (type logiciel), pas aux menus de navigation web.',
      example: '<!-- Mauvaise pratique -->\n<nav role="menu">...</nav>\n\n<!-- Bonne pratique -->\n<nav role="navigation" aria-label="Menu principal">\n  <button aria-expanded="false" aria-haspopup="true">\n    Solutions\n  </button>\n  <ul hidden>...</ul>\n</nav>',
      impact: 'Les technologies d\'assistance interprètent mal la structure, créant une navigation confuse. Les utilisateurs de lecteurs d\'écran ne peuvent pas naviguer correctement dans les menus déroulants.'
    }
  ];

  const errorCount = 9;
  const alertCount = 20;
  const featuresCount = 58;
  const structuralCount = 46;
  const ariaCount = 135;

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
        
        <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
            <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
            <div className="stat-value">{errorCount}</div>
            <div className="stat-label">Erreurs détectées</div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>1 Missing form label + 3 Empty button + 5 Broken ARIA menu</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            <div className="stat-value">{alertCount}</div>
            <div className="stat-label">Alertes</div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>Éléments nécessitant vérification manuelle</div>
          </div>
        </div>
        
        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div className="stat-value">{featuresCount}</div>
            <div className="stat-label">Features</div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>Fonctionnalités d'accessibilité détectées</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            <div className="stat-value">{structuralCount}</div>
            <div className="stat-label">Structural Elements</div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>Éléments de structure sémantique</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div className="stat-value">{ariaCount}</div>
            <div className="stat-label">ARIA</div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.9 }}>Attributs ARIA utilisés</div>
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
          <h4 style={{ marginTop: 0 }}>🔴 9 Erreurs critiques :</h4>
          <ul className="list-checked">
            <li><strong>1 Missing form label</strong> - Champ de recherche sans étiquette</li>
            <li><strong>3 Empty button</strong> - Boutons de menu sans texte accessible</li>
            <li><strong>5 Broken ARIA menu</strong> - Attributs ARIA incorrects dans la navigation</li>
          </ul>
          
          <h4>🟡 20 Alertes (top 5) :</h4>
          <ul className="list-checked" style={{ marginBottom: 0 }}>
            <li><strong>10 Redundant title text</strong> - Attributs title redondants</li>
            <li><strong>4 Very small text</strong> - Texte trop petit (&lt; 10px)</li>
            <li><strong>2 Device dependent event handler</strong> - Événements uniquement souris</li>
            <li><strong>1 Missing fieldset</strong> - Groupe de champs sans fieldset</li>
            <li><strong>1 Accesskey</strong> - Raccourci clavier potentiellement conflictuel</li>
          </ul>
        </div>
        
        <div className="highlight-box" style={{ backgroundColor: '#dcfce7', borderColor: 'var(--primary-color)', marginTop: '1.5rem' }}>
          <h4 style={{ marginTop: 0, color: 'var(--primary-color)' }}>✅ Points positifs :</h4>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>58 Features</strong> - Alternatives textuelles, labels, attributs lang détectés</li>
            <li><strong>46 Structural Elements</strong> - Bonne structure HTML sémantique (headings, landmarks)</li>
            <li><strong>135 ARIA</strong> - Utilisation importante d'ARIA (à vérifier/corriger)</li>
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
              <td>Ajouter label au champ recherche</td>
              <td>15 minutes</td>
              <td>Développeur frontend</td>
              <td>Formulaire accessible</td>
            </tr>
            <tr>
              <td><span className="badge badge-error">1</span></td>
              <td>Ajouter aria-label aux 3 boutons</td>
              <td>30 minutes</td>
              <td>Développeur frontend</td>
              <td>Navigation compréhensible</td>
            </tr>
            <tr>
              <td><span className="badge badge-error">1</span></td>
              <td>Corriger les 5 menus ARIA</td>
              <td>2 heures</td>
              <td>Développeur + Audit ARIA</td>
              <td>Structure navigation correcte</td>
            </tr>
            <tr>
              <td><span className="badge badge-warning">2</span></td>
              <td>Augmenter taille texte (4 occurrences)</td>
              <td>20 minutes</td>
              <td>Designer + Développeur CSS</td>
              <td>Lisibilité améliorée</td>
            </tr>
            <tr>
              <td><span className="badge badge-warning">2</span></td>
              <td>Supprimer title redondants (10)</td>
              <td>30 minutes</td>
              <td>Développeur frontend</td>
              <td>Annonces vocales épurées</td>
            </tr>
            <tr>
              <td><span className="badge badge-warning">2</span></td>
              <td>Ajouter gestion clavier (2 handlers)</td>
              <td>45 minutes</td>
              <td>Développeur JavaScript</td>
              <td>Navigation clavier complète</td>
            </tr>
          </tbody>
        </table>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <strong>💡 Estimation :</strong> Les corrections prioritaires (P1) peuvent être réalisées en 
          <strong> environ 3 heures</strong> et résoudront les 9 erreurs critiques détectées par WAVE.
          Les corrections P2 ajoutent <strong>1h30 supplémentaires</strong> pour un total de <strong>4h30</strong>.
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
        <h2>Recommandations pour aller plus loin</h2>
        
        <div className="highlight-box">
          <h3 style={{ marginTop: 0 }}>🎯 Plan d'action accessibilité</h3>
          <ol style={{ lineHeight: '2' }}>
            <li><strong>Corriger les erreurs WAVE</strong> : Commencer par le champ formulaire + 3 boutons + 5 menus ARIA (priorité 1)</li>
            <li><strong>Former l'équipe</strong> : Sensibiliser développeurs et rédacteurs aux bonnes pratiques</li>
            <li><strong>Tester manuellement</strong> : Navigation au clavier, test avec lecteur d'écran</li>
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
