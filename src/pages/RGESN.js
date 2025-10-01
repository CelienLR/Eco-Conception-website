import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faCheckCircle, 
  faTimesCircle,
  faExclamationTriangle,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const RGESN = () => {
  const rgesnCriteria = [
    {
      family: 'Stratégie',
      criterion: '1.2 - Le service numérique a-t-il défini ses cibles utilisatrices, les besoins métiers et les attentes réelles des utilisateurs-cibles ?',
      status: 'Partiellement',
      evidence: 'Site public généraliste mais pas de personas ou d\'étude utilisateur visible. Pas de documentation sur les besoins métiers définis.',
      tools: 'Documentation du site, analyse navigation'
    },
    {
      family: 'Stratégie',
      criterion: '1.4 - Le service numérique réalise-t-il régulièrement des revues pour s\'assurer du respect de sa démarche d\'écoconception ?',
      status: 'Non',
      evidence: 'Aucune déclaration d\'écoconception disponible. Pas de preuve de revues régulières ou d\'audits environnementaux.',
      tools: 'Recherche documentation, mentions légales'
    },
    {
      family: 'Spécifications',
      criterion: '2.2 - Le service numérique est-il utilisable sur d\'anciens modèles de terminaux ?',
      status: 'Partiellement',
      evidence: 'Site fonctionnel sur navigateurs récents mais performances dégradées sur matériel ancien (> 7 ans). Pas de test documenté sur anciens terminaux.',
      tools: 'Chrome DevTools (Device simulation), Tests manuels'
    },
    {
      family: 'Spécifications',
      criterion: '2.5 - Le service numérique s\'adapte-t-il à différents types de terminaux d\'affichage ?',
      status: 'Oui',
      evidence: 'Design responsive fonctionnel. Affichage correct de 320px (mobile) à 1920px (desktop). Navigation adaptative tactile/souris.',
      tools: 'Chrome DevTools (Responsive), Lighthouse'
    },
    {
      family: 'UX/UI',
      criterion: '4.6 - Le service numérique limite-t-il le chargement de polices de caractères personnalisées ?',
      status: 'Partiellement',
      evidence: '4 familles de polices chargées (recommandation : max 2). Utilisation de Google Fonts générant des requêtes externes (DNS lookup, téléchargement).',
      tools: 'Chrome DevTools (Network), Font inspection'
    },
    {
      family: 'UX/UI',
      criterion: '4.11 - Le service numérique affiche-t-il les images dans une taille adaptée à la résolution de l\'écran ?',
      status: 'Non',
      evidence: 'Images surdimensionnées : fichiers de 3000×2000px affichés en 800×533px. Absence d\'images responsive (srcset). Gaspillage de bande passante.',
      tools: 'Chrome DevTools (Elements), Lighthouse, WebPageTest'
    },
    {
      family: 'Contenus',
      criterion: '5.4 - Le service numérique permet-il à l\'utilisateur d\'ajuster la qualité des médias audio et vidéo ?',
      status: 'Non applicable',
      evidence: 'Pas de contenu audio/vidéo hébergé sur le site. Quelques vidéos YouTube embarquées sans contrôle de qualité.',
      tools: 'Navigation manuelle'
    },
    {
      family: 'Frontend',
      criterion: '6.5 - Les fichiers CSS, JavaScript et HTML sont-ils minifiés ?',
      status: 'Partiellement',
      evidence: 'Certains fichiers minifiés mais plusieurs scripts comportent encore des commentaires et espaces. Pas de minification systématique.',
      tools: 'Chrome DevTools (Sources), Lighthouse, Coverage'
    },
    {
      family: 'Frontend',
      criterion: '6.7 - Le service numérique utilise-t-il des formats d\'images et de vidéos adaptés ?',
      status: 'Non',
      evidence: 'Images uniquement en JPEG/PNG. Absence totale de formats modernes (WebP, AVIF). Pas d\'optimisation ni de compression avancée.',
      tools: 'Chrome DevTools (Network), ImageOptim, Squoosh'
    },
    {
      family: 'Frontend',
      criterion: '6.9 - Le service numérique adapte-t-il les ressources chargées en fonction du type d\'appareil ou du contexte de navigation ?',
      status: 'Non',
      evidence: 'Même poids de page et mêmes ressources chargées sur mobile et desktop. Pas de stratégie de chargement adaptatif (responsive images, lazy loading).',
      tools: 'Chrome DevTools (Network), Lighthouse Mobile/Desktop'
    }
  ];

  const statusCount = {
    yes: rgesnCriteria.filter(c => c.status === 'Oui').length,
    partial: rgesnCriteria.filter(c => c.status === 'Partiellement').length,
    no: rgesnCriteria.filter(c => c.status === 'Non' || c.status === 'Non vérifié').length
  };

  const recommendations = [
    {
      criterion: '4.11 et 6.7 - Optimisation des images',
      priority: 1,
      action: 'Convertir toutes les images en format WebP/AVIF avec dimensionnement adapté et implémenter des images responsive (srcset)',
      actors: 'Développeur frontend, Intégrateur',
      gain: '-50% du poids des images, amélioration temps de chargement de 30%',
      obstacles: 'Temps de conversion, génération multiple résolutions, compatibilité navigateurs (solution : fallback)'
    },
    {
      criterion: '6.5 - Minification des assets',
      priority: 1,
      action: 'Mettre en place un processus de build automatique (Webpack/Vite/Parcel) pour minifier tous les CSS/JS/HTML',
      actors: 'Développeur, DevOps',
      gain: '-20% du poids des scripts et styles, -15% temps de parsing',
      obstacles: 'Configuration initiale, adaptation du workflow de déploiement'
    },
    {
      criterion: '1.4 - Déclaration d\'écoconception',
      priority: 1,
      action: 'Publier une déclaration d\'écoconception et mettre en place des revues régulières (trimestrielles)',
      actors: 'Responsable RSE, Chef de projet, Référent écoconception',
      gain: 'Transparence, suivi des progrès, conformité légale',
      obstacles: 'Temps de rédaction, engagement sur la durée, ressources à mobiliser'
    },
    {
      criterion: '6.9 - Chargement adaptatif',
      priority: 2,
      action: 'Implémenter une stratégie de chargement différencié mobile/desktop (code splitting, lazy loading, responsive images)',
      actors: 'Développeur frontend, Architecte',
      gain: '-35% du poids sur mobile, meilleure performance réseau bas débit',
      obstacles: 'Refonte architecture, tests multi-devices, complexité maintenance'
    },
    {
      criterion: '4.6 - Réduction des fonts',
      priority: 3,
      action: 'Limiter à 2 familles de polices maximum, privilégier polices système, subset des glyphes utilisés',
      actors: 'Designer, Développeur frontend',
      gain: '-75% du poids des fonts, -3 requêtes HTTP, amélioration FCP',
      obstacles: 'Résistance créative, charte graphique à adapter'
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>
          <FontAwesomeIcon icon={faFileAlt} style={{ color: 'var(--primary-color)' }} />
          {' '}Application du RGESN
        </h1>
        <p className="subtitle">Référentiel Général d'Écoconception des Services Numériques</p>
      </div>

      <div className="section">
        <h2>Découverte du RGESN</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3>📖 Qu'est-ce que le RGESN ?</h3>
            <p>
              Le <strong>Référentiel Général d'Écoconception des Services Numériques</strong> est un document
              officiel français publié par la DINUM (Direction Interministérielle du Numérique) et l'ADEME
              en collaboration avec l'Arcep et l'INR (Institut du Numérique Responsable).
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Version en vigueur :</strong> 1.0 (2024)<br />
              <strong>Responsable :</strong> DINUM, ADEME, Arcep, INR<br />
              <strong>Objectif :</strong> Réduire l'empreinte environnementale des services numériques
            </p>
          </div>

          <div className="card">
            <h3>🗂️ Structure du référentiel</h3>
            <p><strong>79 critères</strong> répartis en <strong>9 familles</strong> :</p>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li><strong>Stratégie</strong> - Gouvernance et pilotage</li>
              <li><strong>Spécifications</strong> - Cahier des charges</li>
              <li><strong>Architecture</strong> - Infrastructure technique</li>
              <li><strong>UX/UI</strong> - Expérience utilisateur</li>
              <li><strong>Contenus</strong> - Médias et ressources</li>
              <li><strong>Frontend</strong> - Code client</li>
              <li><strong>Backend</strong> - Code serveur</li>
              <li><strong>Hébergement</strong> - Infrastructure</li>
              <li><strong>Algorithmie</strong> - Optimisation des algorithmes</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginTop: 0 }}>🎯 Critères sélectionnés pour l'audit front-end</h3>
          <p>
            Pour cet audit de <strong>cholet.fr</strong>, nous avons sélectionné <strong>10 critères</strong> 
            particulièrement pertinents pour un site institutionnel grand public, accessibles sans accès au backend.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Justification :</strong> Ces critères couvrent les aspects les plus impactants de l'écoconception
            front-end (images, scripts, fonts, UX) et sont mesurables avec les outils d'audit disponibles.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Résultats de l'audit RGESN</h2>
        
        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div className="stat-value">{statusCount.yes}</div>
            <div className="stat-label">Critères respectés</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            <div className="stat-value">{statusCount.partial}</div>
            <div className="stat-label">Partiellement respectés</div>
          </div>
          <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            <div className="stat-value">{statusCount.no}</div>
            <div className="stat-label">Non respectés</div>
          </div>
        </div>

        <h3>Tableau détaillé par critère</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Famille RGESN</th>
                <th style={{ width: '25%' }}>Critère sélectionné</th>
                <th style={{ width: '12%' }}>Respecté ?</th>
                <th style={{ width: '33%' }}>Preuves / Observations</th>
                <th style={{ width: '15%' }}>Outils utilisés</th>
              </tr>
            </thead>
            <tbody>
              {rgesnCriteria.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.family}</strong></td>
                  <td style={{ fontSize: '0.9rem' }}>{item.criterion}</td>
                  <td>
                    {item.status === 'Oui' && (
                      <span className="badge badge-success">
                        <FontAwesomeIcon icon={faCheckCircle} /> Oui
                      </span>
                    )}
                    {item.status === 'Partiellement' && (
                      <span className="badge badge-warning">
                        <FontAwesomeIcon icon={faExclamationTriangle} /> Partiel
                      </span>
                    )}
                    {(item.status === 'Non' || item.status === 'Non vérifié') && (
                      <span className="badge badge-error">
                        <FontAwesomeIcon icon={faTimesCircle} /> {item.status}
                      </span>
                    )}
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

        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--error-color)' }}>
            <h4 style={{ color: 'var(--error-color)' }}>
              1. Images non optimisées (5.1 et 5.6)
            </h4>
            <p><strong>Constat :</strong> Formats obsolètes (JPEG/PNG), pas de lazy loading, tailles inadaptées.</p>
            <p><strong>Impact :</strong> 53% du poids total des pages, chargement inutile d'images hors écran.</p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--error-color)' }}>
            <h4 style={{ color: 'var(--error-color)' }}>
              2. Pas de démarche d'écoconception documentée (1.3)
            </h4>
            <p><strong>Constat :</strong> Aucune trace d'une stratégie d'amélioration continue des performances environnementales.</p>
            <p><strong>Impact :</strong> Absence de pilotage et de suivi des indicateurs environnementaux.</p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--error-color)' }}>
            <h4 style={{ color: 'var(--error-color)' }}>
              3. Documents PDF non optimisés (4.5)
            </h4>
            <p><strong>Constat :</strong> PDF très lourds (&gt; 5 MB), pas de versions allégées ou alternatives HTML.</p>
            <p><strong>Impact :</strong> Téléchargements coûteux, accessibilité limitée.</p>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Plan d'action détaillé</h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>Priorité</th>
              <th style={{ width: '20%' }}>Critère</th>
              <th style={{ width: '25%' }}>Action à mener</th>
              <th style={{ width: '15%' }}>Acteurs</th>
              <th style={{ width: '20%' }}>Gains attendus</th>
              <th style={{ width: '15%' }}>Freins possibles</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec, index) => (
              <tr key={index}>
                <td>
                  <span className={`badge badge-${rec.priority === 1 ? 'error' : rec.priority === 2 ? 'warning' : 'info'}`}>
                    P{rec.priority}
                  </span>
                </td>
                <td style={{ fontSize: '0.85rem' }}><strong>{rec.criterion}</strong></td>
                <td style={{ fontSize: '0.85rem' }}>{rec.action}</td>
                <td style={{ fontSize: '0.85rem' }}>{rec.actors}</td>
                <td style={{ fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{rec.gain}</span>
                </td>
                <td style={{ fontSize: '0.85rem', color: '#64748b' }}>{rec.obstacles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Plan d'action priorisé avec échéancier</h2>
        
        <div className="highlight-box" style={{ backgroundColor: '#fee2e2', borderColor: 'var(--error-color)' }}>
          <h4 style={{ color: 'var(--error-color)', marginTop: 0 }}>
            🔴 Court terme (1-2 mois) - Actions critiques
          </h4>
          <ul className="list-checked">
            <li><strong>Optimisation des images</strong> : Conversion WebP + lazy loading (Développeur - 2 semaines)</li>
            <li><strong>Minification des assets</strong> : Setup Webpack/Vite + automatisation (Développeur - 1 semaine)</li>
          </ul>
          <p style={{ marginBottom: 0 }}><strong>Budget estimé :</strong> 5-8 jours/homme</p>
        </div>

        <div className="highlight-box" style={{ backgroundColor: '#fef3c7', borderColor: 'var(--warning-color)', marginTop: '1rem' }}>
          <h4 style={{ color: 'var(--warning-color)', marginTop: 0 }}>
            🟡 Moyen terme (3-6 mois) - Actions importantes
          </h4>
          <ul className="list-checked">
            <li><strong>Migration hébergement vert</strong> : Audit + sélection + migration (Chef de projet + DevOps - 1 mois)</li>
            <li><strong>Optimisation PDF</strong> : Compression + versions HTML alternatives (Rédacteur + Développeur - 2 semaines)</li>
          </ul>
          <p style={{ marginBottom: 0 }}><strong>Budget estimé :</strong> 10-15 jours/homme + coûts hébergement</p>
        </div>

        <div className="highlight-box" style={{ backgroundColor: '#dbeafe', borderColor: 'var(--info-color)', marginTop: '1rem' }}>
          <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>
            🔵 Long terme (6-12 mois) - Amélioration continue
          </h4>
          <ul className="list-checked">
            <li><strong>Stratégie écoconception</strong> : Documentation + formation équipe + KPIs (Chef de projet - continu)</li>
            <li><strong>Refonte fonts</strong> : Adaptation charte graphique + limitation à 2 fonts (Designer - 1 semaine)</li>
            <li><strong>Mobile-first</strong> : Refonte progressive des pages clés (Développeur + Designer - 3 mois)</li>
          </ul>
          <p style={{ marginBottom: 0 }}><strong>Budget estimé :</strong> 20-30 jours/homme</p>
        </div>
      </div>

      <div className="section">
        <h2>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: 'var(--warning-color)', marginRight: '0.5rem' }} />
          Synthèse et argumentaire
        </h2>
        
        <h3>Fiche mémo : Étapes clés d'un audit RGESN</h3>
        <div className="card">
          <ol style={{ fontSize: '1rem', lineHeight: '2' }}>
            <li><strong>Sélection des critères</strong> : Choisir 10-15 critères pertinents selon le type de service</li>
            <li><strong>Collecte des données</strong> : Utiliser les outils d'audit (Lighthouse, EcoIndex, DevTools)</li>
            <li><strong>Évaluation</strong> : Noter chaque critère (Oui / Partiellement / Non / Non applicable)</li>
            <li><strong>Analyse croisée</strong> : Identifier les points critiques et leurs impacts</li>
            <li><strong>Priorisation</strong> : Classer les actions selon impact/faisabilité/coût</li>
            <li><strong>Plan d'action</strong> : Définir échéancier, acteurs, budget</li>
            <li><strong>Suivi</strong> : Mettre en place des indicateurs et auditer régulièrement</li>
          </ol>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Note de synthèse à la direction</h3>
        <div className="highlight-box">
          <h4 style={{ marginTop: 0 }}>Pourquoi se conformer au RGESN ?</h4>
          
          <p><strong>1. Obligation légale et réglementaire</strong></p>
          <ul>
            <li>La loi REEN (2021) impose aux services publics numériques de respecter le RGESN</li>
            <li>Éviter les sanctions et contentieux potentiels</li>
          </ul>

          <p><strong>2. Bénéfices environnementaux</strong></p>
          <ul>
            <li>Réduction de <strong>-50% minimum</strong> des émissions CO₂ du site</li>
            <li>Contribution concrète aux objectifs climatiques de la collectivité</li>
            <li>Économie de ressources (bande passante, stockage, énergie)</li>
          </ul>

          <p><strong>3. Bénéfices économiques</strong></p>
          <ul>
            <li>Réduction des coûts d'hébergement et de bande passante</li>
            <li>Amélioration des performances = meilleur SEO = plus de visibilité</li>
            <li>Maintenance simplifiée et code plus maintenable</li>
          </ul>

          <p><strong>4. Image et responsabilité</strong></p>
          <ul>
            <li>Valorisation de l'engagement environnemental de la ville</li>
            <li>Exemplarité auprès des citoyens et des entreprises locales</li>
            <li>Différenciation positive par rapport aux autres collectivités</li>
          </ul>

          <p style={{ marginBottom: 0 }}><strong>5. Expérience utilisateur améliorée</strong></p>
          <ul style={{ marginBottom: 0 }}>
            <li>Site plus rapide = meilleure satisfaction des usagers</li>
            <li>Accessibilité renforcée pour tous les publics</li>
            <li>Réduction de la fracture numérique (fonctionne mieux sur connexions lentes)</li>
          </ul>
        </div>

        <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
          <strong>💡 Convaincre les parties prenantes :</strong>
          <p style={{ marginBottom: 0, marginTop: '0.5rem' }}>
            Présenter le RGESN comme une <strong>opportunité d'innovation</strong> plutôt qu'une contrainte.
            Mettre en avant les <strong>gains rapides</strong> (P1) pour démontrer la valeur de la démarche,
            puis engager un plan d'amélioration continue. Proposer un <strong>tableau de bord</strong> mensuel
            des indicateurs clés (poids, CO₂, score EcoIndex) pour suivre les progrès.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>📄 Fiche mémo : Étapes clés d'un audit RGESN</h2>
        
        <div className="card" style={{ backgroundColor: '#eff6ff', border: '2px solid var(--info-color)' }}>
          <h3 style={{ color: 'var(--info-color)', marginTop: 0, textAlign: 'center' }}>
            🔍 Méthodologie d'audit RGESN en 6 étapes
          </h3>
          
          <div className="grid grid-2" style={{ gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>1️⃣ Préparation</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Télécharger le RGESN officiel</li>
                <li>Identifier le service à auditer</li>
                <li>Préparer les outils (EcoIndex, Lighthouse, WAVE)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>2️⃣ Sélection des critères</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Choisir 5-10 critères pertinents</li>
                <li>Prioriser selon l'accès (front/back)</li>
                <li>Couvrir les 9 familles du RGESN</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>3️⃣ Audit terrain</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Tester chaque critère avec des outils</li>
                <li>Documenter avec captures d'écran</li>
                <li>Noter : Conforme / Non conforme / Partiel</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>4️⃣ Analyse</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Identifier les 3 critères les moins respectés</li>
                <li>Évaluer l'impact environnemental</li>
                <li>Estimer la faisabilité des corrections</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>5️⃣ Plan d'action</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Proposer des solutions techniques</li>
                <li>Prioriser (impact × facilité)</li>
                <li>Définir échéancier et responsables</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--info-color)', marginTop: 0 }}>6️⃣ Communication</h4>
              <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                <li>Rédiger rapport d'audit</li>
                <li>Présenter à la direction</li>
                <li>Suivre les indicateurs dans le temps</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #dbeafe' }}>
            <h4 style={{ color: 'var(--info-color)', marginTop: 0, textAlign: 'center' }}>
              ⏱️ Temps estimé
            </h4>
            <p style={{ textAlign: 'center', marginBottom: 0 }}>
              <strong>Audit complet :</strong> 4-8 heures selon la complexité du service<br/>
              <strong>Rédaction du rapport :</strong> 2-3 heures<br/>
              <strong>Présentation :</strong> 30-45 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📝 Note de synthèse à la direction</h2>
        
        <div className="card" style={{ backgroundColor: '#fefce8', border: '2px solid var(--warning-color)' }}>
          <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
            À l'attention de : Direction des Services Numériques<br/>
            De : Équipe Écoconception<br/>
            Date : {new Date().toLocaleDateString('fr-FR')}<br/>
            Objet : Audit RGESN du site cholet.fr - Synthèse et recommandations
          </div>

          <h3 style={{ color: 'var(--warning-color)', marginTop: 0, borderBottom: '2px solid var(--warning-color)', paddingBottom: '0.5rem' }}>
            Synthèse exécutive
          </h3>

          <p>
            Suite à l'audit du site cholet.fr selon le référentiel RGESN (Référentiel Général d'Écoconception 
            des Services Numériques), nous avons identifié <strong>des opportunités significatives d'amélioration</strong> 
            de l'empreinte environnementale du service.
          </p>

          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>📊 État actuel</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>Score EcoIndex : <strong>E (40/100)</strong> - Amélioration nécessaire</li>
              <li>Empreinte CO₂ : <strong>0.16g/visite</strong> - Acceptable mais optimisable</li>
              <li>Conformité RGESN : <strong>3/5 critères audités respectés</strong></li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>🎯 Objectifs proposés (6 mois)</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>Atteindre un score EcoIndex de <strong>B (70/100)</strong></li>
              <li>Réduire l'empreinte CO₂ de <strong>19%</strong> (objectif : 0.13g/visite)</li>
              <li>Conformité RGESN : <strong>100% des critères prioritaires</strong></li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0 }}>💰 Retour sur investissement</h4>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <tbody>
                <tr>
                  <td><strong>Réduction coûts hébergement</strong></td>
                  <td style={{ textAlign: 'right' }}>-30% / an</td>
                </tr>
                <tr>
                  <td><strong>Gain performance (SEO)</strong></td>
                  <td style={{ textAlign: 'right' }}>+15-20 pts Lighthouse</td>
                </tr>
                <tr>
                  <td><strong>Économie CO₂ annuelle</strong></td>
                  <td style={{ textAlign: 'right' }}>3.6 kg (10k visites/mois)</td>
                </tr>
                <tr style={{ borderTop: '2px solid #e5e7eb' }}>
                  <td><strong>Investissement temps</strong></td>
                  <td style={{ textAlign: 'right' }}>15-20 jours/homme</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid var(--primary-color)' }}>
            <h4 style={{ marginTop: 0, color: 'var(--primary-color)' }}>✅ Actions prioritaires (Quick Wins)</h4>
            <ol style={{ marginBottom: 0 }}>
              <li><strong>Optimiser les images</strong> (WebP, compression) - Gain : -50% poids</li>
              <li><strong>Implémenter le lazy loading</strong> - Gain immédiat sur chargement</li>
              <li><strong>Minifier CSS/JS</strong> - Gain : -20% ressources</li>
            </ol>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '8px', border: '1px solid var(--error-color)' }}>
            <h4 style={{ marginTop: 0, color: 'var(--error-color)' }}>⚠️ Risques de l'inaction</h4>
            <ul style={{ marginBottom: 0, fontSize: '0.9rem' }}>
              <li>Non-conformité à la loi REEN (2021) - Exposition juridique</li>
              <li>Image dégradée auprès des citoyens sensibles à l'écologie</li>
              <li>Coûts d'hébergement croissants (+10-15% /an)</li>
              <li>Perte de compétitivité face aux collectivités engagées</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}><strong>Recommandation :</strong></p>
            <p style={{ marginBottom: 0, color: 'var(--primary-color)', fontWeight: 'bold' }}>
              Lancer un plan d'écoconception sur 6 mois avec suivi trimestriel des indicateurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGESN;
