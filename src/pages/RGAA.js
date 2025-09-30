import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faTimesCircle,
  faExclamationTriangle,
  faUniversalAccess,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons';

const RGAA = () => {
  const rgaaPrinciples = [
    { name: 'Perceptible', description: 'L\'information doit être présentée de manière à ce qu\'elle soit perceptible par tous les utilisateurs' },
    { name: 'Utilisable', description: 'L\'interface doit être utilisable par tous, y compris avec des technologies d\'assistance' },
    { name: 'Compréhensible', description: 'L\'information et le fonctionnement de l\'interface doivent être compréhensibles' },
    { name: 'Robuste', description: 'Le contenu doit être compatible avec les technologies actuelles et futures' }
  ];

  const selectedCriteria = [
    {
      theme: 'Images',
      criterion: '1.1 - Chaque image porteuse d\'information a-t-elle une alternative textuelle ?',
      level: 'A',
      compliant: 'Non conforme',
      evidence: '12 images sans attribut alt sur la page d\'accueil. Images du carrousel et de la galerie événements concernées.',
      tools: 'WAVE, Inspection manuelle du code HTML',
      badge: 'error'
    },
    {
      theme: 'Couleurs',
      criterion: '3.2 - Le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisant (4.5:1) ?',
      level: 'AA',
      compliant: 'Non conforme',
      evidence: 'Plusieurs zones avec contraste insuffisant : footer (ratio 2.1:1), boutons secondaires (ratio 3.2:1), texte gris sur fond clair.',
      tools: 'Colour Contrast Analyser, WAVE',
      badge: 'error'
    },
    {
      theme: 'Navigation',
      criterion: '12.2 - Dans chaque ensemble de pages, le menu de navigation est-il toujours à la même place ?',
      level: 'A',
      compliant: 'Conforme',
      evidence: 'Le menu de navigation est positionné de manière cohérente sur toutes les pages (header fixe en haut).',
      tools: 'Navigation manuelle, inspection visuelle',
      badge: 'success'
    },
    {
      theme: 'Formulaires',
      criterion: '11.1 - Chaque champ de formulaire a-t-il une étiquette (label) ?',
      level: 'A',
      compliant: 'Partiellement conforme',
      evidence: 'Champ de recherche sans label visible (placeholder uniquement). Formulaire de contact conforme.',
      tools: 'WAVE, Inspection du DOM',
      badge: 'warning'
    },
    {
      theme: 'Structure',
      criterion: '9.1 - L\'information est-elle structurée par l\'utilisation appropriée de titres (h1-h6) ?',
      level: 'A',
      compliant: 'Non conforme',
      evidence: 'Hiérarchie des titres incohérente : sauts de niveaux (h2 vers h4), plusieurs h1 sur certaines pages.',
      tools: 'HeadingsMap, WAVE',
      badge: 'error'
    }
  ];

  const leastCompliant = [
    {
      criterion: '1.1 - Images sans alternative textuelle',
      technicalSolution: 'Ajouter un attribut alt descriptif à toutes les images porteuses d\'information',
      actors: 'Rédacteur web (rédaction des alt), Développeur (intégration)',
      codeExample: `<!-- Avant -->
<img src="evenement-cholet.jpg">

<!-- Après -->
<img src="evenement-cholet.jpg" alt="Marché de Noël de Cholet - Place de la République - 15-25 décembre">`
    },
    {
      criterion: '3.2 - Contrastes de couleurs insuffisants',
      technicalSolution: 'Modifier les couleurs pour atteindre un ratio minimum de 4.5:1 (AA) ou 7:1 (AAA)',
      actors: 'Designer (choix des couleurs), Développeur frontend (intégration CSS)',
      codeExample: `/* Avant - Contraste 2.1:1 */
.footer-link {
  color: #999;
  background: #ddd;
}

/* Après - Contraste 9.7:1 */
.footer-link {
  color: #333;
  background: #fff;
}`
    },
    {
      criterion: '9.1 - Structure de titres incorrecte',
      technicalSolution: 'Respecter la hiérarchie h1 > h2 > h3 sans sauter de niveau. Un seul h1 par page.',
      actors: 'Développeur frontend, Intégrateur',
      codeExample: `<!-- Avant -->
<h1>Accueil</h1>
<h2>Actualités</h2>
<h4>Dernier événement</h4> ❌

<!-- Après -->
<h1>Accueil</h1>
<h2>Actualités</h2>
<h3>Dernier événement</h3> ✅`
    }
  ];

  const actionPlan = [
    {
      priority: 1,
      criterion: 'Images (1.1)',
      action: 'Audit complet + ajout des alt manquants',
      effort: 'Faible',
      impact: 'Critique',
      timeline: '1 semaine',
      cost: '2 jours/homme'
    },
    {
      priority: 1,
      criterion: 'Contrastes (3.2)',
      action: 'Analyse + modification CSS',
      effort: 'Faible',
      impact: 'Critique',
      timeline: '3 jours',
      cost: '1 jour/homme'
    },
    {
      priority: 2,
      criterion: 'Structure titres (9.1)',
      action: 'Refonte hiérarchie HTML',
      effort: 'Moyen',
      impact: 'Important',
      timeline: '1 semaine',
      cost: '2 jours/homme'
    },
    {
      priority: 2,
      criterion: 'Formulaires (11.1)',
      action: 'Ajout labels accessibles',
      effort: 'Faible',
      impact: 'Important',
      timeline: '2 jours',
      cost: '0.5 jour/homme'
    },
    {
      priority: 3,
      criterion: 'Documentation globale',
      action: 'Guide accessibilité interne',
      effort: 'Moyen',
      impact: 'Préventif',
      timeline: '2 semaines',
      cost: '3 jours/homme'
    }
  ];

  const statusCount = {
    compliant: selectedCriteria.filter(c => c.compliant === 'Conforme').length,
    partial: selectedCriteria.filter(c => c.compliant === 'Partiellement conforme').length,
    nonCompliant: selectedCriteria.filter(c => c.compliant === 'Non conforme').length
  };

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--info-color)' }} />
          {' '}Audit RGAA - cholet.fr
        </h1>
        <p className="subtitle">Référentiel Général d'Amélioration de l'Accessibilité</p>
      </div>

      <div className="section">
        <h2>Découverte du RGAA</h2>
        
        <div className="card">
          <h3>📖 Qu'est-ce que le RGAA ?</h3>
          <p>
            Le <strong>Référentiel Général d'Amélioration de l'Accessibilité (RGAA)</strong> est le référentiel
            officiel français pour l'accessibilité numérique. Il est basé sur les <strong>WCAG (Web Content
            Accessibility Guidelines)</strong> du W3C et adapté au contexte réglementaire français.
          </p>
          <div className="grid grid-2" style={{ marginTop: '1rem' }}>
            <div>
              <p><strong>Version actuelle :</strong> RGAA 4.1 (2021)</p>
              <p><strong>Basé sur :</strong> WCAG 2.1 niveau AA</p>
              <p><strong>Obligation légale :</strong> Sites publics et entreprises &gt; 250M€ CA</p>
            </div>
            <div>
              <p><strong>Structure :</strong> 106 critères, 13 thèmes</p>
              <p><strong>Niveaux :</strong> A (minimum), AA (recommandé), AAA (optimal)</p>
              <p><strong>Sanctions :</strong> Jusqu'à 20 000€ par an de non-conformité</p>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Les 4 grands principes d'accessibilité</h3>
        <div className="grid grid-2">
          {rgaaPrinciples.map((principle, index) => (
            <div key={index} className="card">
              <h4 style={{ color: 'var(--primary-color)' }}>
                {index + 1}. {principle.name}
              </h4>
              <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>{principle.description}</p>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '2rem' }}>Les 13 thèmes du RGAA</h3>
        <div className="highlight-box">
          <div className="grid grid-2" style={{ gap: '0.5rem' }}>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>1. Images</li>
              <li>2. Cadres</li>
              <li>3. Couleurs</li>
              <li>4. Multimédia</li>
              <li>5. Tableaux</li>
              <li>6. Liens</li>
              <li>7. Scripts</li>
            </ul>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>8. Éléments obligatoires</li>
              <li>9. Structuration de l'information</li>
              <li>10. Présentation de l'information</li>
              <li>11. Formulaires</li>
              <li>12. Navigation</li>
              <li>13. Consultation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Audit selon le RGAA</h2>
        
        <div className="alert alert-info" style={{ marginBottom: '2rem' }}>
          <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '0.5rem' }} />
          Pour cet audit, nous avons sélectionné <strong>5 critères de niveau A ou AA</strong> particulièrement
          pertinents pour un site institutionnel grand public.
        </div>

        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div className="stat-value">{statusCount.compliant}</div>
            <div className="stat-label">Conforme</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            <div className="stat-value">{statusCount.partial}</div>
            <div className="stat-label">Partiellement conforme</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            <div className="stat-value">{statusCount.nonCompliant}</div>
            <div className="stat-label">Non conforme</div>
          </div>
        </div>

        <h3>Résultats détaillés par critère</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '12%' }}>Thème RGAA</th>
                <th style={{ width: '28%' }}>Critère</th>
                <th style={{ width: '8%' }}>Niveau</th>
                <th style={{ width: '12%' }}>Conforme ?</th>
                <th style={{ width: '25%' }}>Preuves / Observations</th>
                <th style={{ width: '15%' }}>Outils utilisés</th>
              </tr>
            </thead>
            <tbody>
              {selectedCriteria.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.theme}</strong></td>
                  <td style={{ fontSize: '0.85rem' }}>{item.criterion}</td>
                  <td>
                    <span className={`badge badge-${item.level === 'A' ? 'info' : 'warning'}`}>
                      {item.level}
                    </span>
                  </td>
                  <td>
                    <span className={`badge badge-${item.badge}`}>
                      <FontAwesomeIcon icon={
                        item.badge === 'success' ? faCheckCircle :
                        item.badge === 'warning' ? faExclamationTriangle :
                        faTimesCircle
                      } />
                      {' '}{item.compliant.split(' ')[0]}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{item.evidence}</td>
                  <td style={{ fontSize: '0.85rem' }}>{item.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>Analyse et recommandations</h2>
        
        <h3>
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'var(--error-color)', marginRight: '0.5rem' }} />
          Les 3 critères les moins respectés
        </h3>

        {leastCompliant.map((item, index) => (
          <div key={index} className="card" style={{ 
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--error-color)'
          }}>
            <h4 style={{ color: 'var(--error-color)', marginTop: 0 }}>
              {index + 1}. {item.criterion}
            </h4>
            
            <div className="grid grid-2" style={{ marginTop: '1rem' }}>
              <div>
                <p><strong>💡 Solution technique :</strong></p>
                <p style={{ fontSize: '0.95rem' }}>{item.technicalSolution}</p>
              </div>
              <div>
                <p><strong>👥 Acteurs concernés :</strong></p>
                <p style={{ fontSize: '0.95rem' }}>{item.actors}</p>
              </div>
            </div>

            <p style={{ marginTop: '1rem' }}><strong>📝 Exemple de code corrigé :</strong></p>
            <code style={{ 
              display: 'block', 
              padding: '1rem',
              backgroundColor: '#1e293b',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              whiteSpace: 'pre-wrap',
              marginBottom: 0
            }}>
              {item.codeExample}
            </code>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Plan d'action et argumentaire</h2>
        
        <h3>Plan d'action priorisé</h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '8%' }}>Prio</th>
              <th style={{ width: '15%' }}>Critère</th>
              <th style={{ width: '22%' }}>Action</th>
              <th style={{ width: '12%' }}>Effort</th>
              <th style={{ width: '13%' }}>Impact utilisateur</th>
              <th style={{ width: '15%' }}>Échéancier</th>
              <th style={{ width: '15%' }}>Coût estimé</th>
            </tr>
          </thead>
          <tbody>
            {actionPlan.map((action, index) => (
              <tr key={index}>
                <td>
                  <span className={`badge badge-${
                    action.priority === 1 ? 'error' : 
                    action.priority === 2 ? 'warning' : 'info'
                  }`}>
                    P{action.priority}
                  </span>
                </td>
                <td><strong>{action.criterion}</strong></td>
                <td style={{ fontSize: '0.9rem' }}>{action.action}</td>
                <td>
                  <span className={`badge badge-${
                    action.effort === 'Faible' ? 'success' : 
                    action.effort === 'Moyen' ? 'warning' : 'error'
                  }`}>
                    {action.effort}
                  </span>
                </td>
                <td>
                  <span className={`badge badge-${
                    action.impact === 'Critique' ? 'error' : 
                    action.impact === 'Important' ? 'warning' : 'info'
                  }`}>
                    {action.impact}
                  </span>
                </td>
                <td style={{ fontSize: '0.9rem' }}>{action.timeline}</td>
                <td style={{ fontSize: '0.9rem' }}>{action.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: '2rem' }}>Note de synthèse à la direction</h3>
        <div className="highlight-box">
          <h4 style={{ marginTop: 0 }}>🎯 Importance de la conformité RGAA</h4>
          
          <p><strong>1. Obligation légale</strong></p>
          <ul>
            <li>Article 47 de la loi du 11 février 2005 pour l'égalité des droits et des chances</li>
            <li>Décret n°2019-768 du 24 juillet 2019 relatif à l'accessibilité</li>
            <li>Sanctions financières : jusqu'à 20 000€ par an en cas de non-conformité</li>
            <li>Obligation de publier une déclaration d'accessibilité</li>
          </ul>

          <p><strong>2. Bénéfices pour les utilisateurs</strong></p>
          <ul>
            <li><strong>15% de la population</strong> en situation de handicap peut accéder aux services</li>
            <li>Amélioration pour tous : navigation clavier, contrastes, structure claire</li>
            <li>Inclusion des seniors (baisse de vision, difficultés motrices)</li>
            <li>Utilisateurs en situation temporaire (bras cassé, luminosité, bruit)</li>
          </ul>

          <p><strong>3. Bénéfices pour la collectivité</strong></p>
          <ul>
            <li><strong>Image positive</strong> : Ville exemplaire, engagement social</li>
            <li><strong>SEO amélioré</strong> : Structure sémantique = meilleur référencement Google</li>
            <li><strong>Maintenance facilitée</strong> : Code propre et structuré</li>
            <li><strong>Conformité = Qualité</strong> : Un site accessible est généralement mieux conçu</li>
          </ul>

          <p style={{ marginBottom: 0 }}><strong>4. Échéancier réaliste</strong></p>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Court terme (2 mois)</strong> : Corrections P1 (images + contrastes) = conformité de base</li>
            <li><strong>Moyen terme (6 mois)</strong> : Corrections P2 (structure + formulaires) = niveau AA partiel</li>
            <li><strong>Long terme (12 mois)</strong> : Conformité complète + documentation + formation</li>
          </ul>
        </div>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <strong>💰 Budget total estimé :</strong> Environ <strong>8-10 jours/homme</strong> pour atteindre
          une conformité satisfaisante (P1 + P2), soit un investissement de <strong>8 000-10 000€</strong>
          (tarif prestataire moyen). Le ROI se mesure en image, en respect légal et en satisfaction utilisateur.
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faUniversalAccess} style={{ color: 'var(--info-color)', marginRight: '0.5rem' }} />
          Que retenir ?
        </h2>
        
        <h3>Comparaison RGAA vs WCAG</h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Aspect</th>
              <th style={{ width: '40%' }}>RGAA (France)</th>
              <th style={{ width: '40%' }}>WCAG (International)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Origine</strong></td>
              <td>Référentiel français (DINUM)</td>
              <td>Standard W3C international</td>
            </tr>
            <tr>
              <td><strong>Base</strong></td>
              <td>Basé sur WCAG 2.1 niveau AA</td>
              <td>Standard de référence</td>
            </tr>
            <tr>
              <td><strong>Obligation légale</strong></td>
              <td>Oui en France (services publics)</td>
              <td>Selon pays (EU, US, etc.)</td>
            </tr>
            <tr>
              <td><strong>Critères</strong></td>
              <td>106 critères, 13 thèmes</td>
              <td>78 critères, 4 principes</td>
            </tr>
            <tr>
              <td><strong>Méthodologie</strong></td>
              <td>Méthodologie de test détaillée</td>
              <td>Guidelines générales</td>
            </tr>
            <tr>
              <td><strong>Documentation</strong></td>
              <td>En français, très pédagogique</td>
              <td>En anglais, technique</td>
            </tr>
          </tbody>
        </table>

        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
          <strong>💡 En pratique :</strong> En France, suivre le RGAA permet automatiquement d'être conforme
          aux WCAG 2.1 niveau AA. Le RGAA apporte une méthodologie de test plus précise et une documentation
          en français plus accessible.
        </div>

        <h3 style={{ marginTop: '2rem' }}>Checklist simplifiée pour les développeurs</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4 style={{ color: 'var(--primary-color)' }}>✅ À faire systématiquement</h4>
            <ul className="list-checked" style={{ paddingLeft: 0, fontSize: '0.95rem' }}>
              <li>Ajouter alt à TOUTES les images</li>
              <li>Vérifier les contrastes (min 4.5:1)</li>
              <li>Associer labels aux formulaires</li>
              <li>Respecter h1 &gt; h2 &gt; h3 &gt; h4...</li>
              <li>Rendre le site navigable au clavier</li>
              <li>Utiliser des balises sémantiques</li>
            </ul>
          </div>

          <div className="card">
            <h4 style={{ color: 'var(--error-color)' }}>❌ À éviter absolument</h4>
            <ul className="list-checked" style={{ paddingLeft: 0, fontSize: '0.95rem' }}>
              <li>Images sans alt</li>
              <li>Liens "Cliquez ici" sans contexte</li>
              <li>Contenu uniquement par couleur</li>
              <li>Vidéo sans sous-titres/transcription</li>
              <li>Contenu accessible uniquement à la souris</li>
              <li>Champs de formulaire sans label</li>
            </ul>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Checklist pour les rédacteurs</h3>
        <div className="highlight-box">
          <ul className="list-checked" style={{ paddingLeft: 0 }}>
            <li><strong>Textes alternatifs</strong> : Décrire le contenu de chaque image (pas "image1.jpg")</li>
            <li><strong>Liens explicites</strong> : "Lire le programme du festival" au lieu de "En savoir plus"</li>
            <li><strong>Structure claire</strong> : Utiliser titres, listes, paragraphes courts</li>
            <li><strong>Langage simple</strong> : Éviter jargon, abréviations non expliquées</li>
            <li><strong>Documents alternatifs</strong> : Proposer version HTML des PDF</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RGAA;
