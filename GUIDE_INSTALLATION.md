# Guide d'installation et d'utilisation

## 📋 Prérequis

- **Node.js** version 14 ou supérieure
- **npm** (inclus avec Node.js)

Vérifier l'installation :
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Ouvrir un terminal** dans le dossier du projet
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
   Cette commande va installer :
   - React 18
   - React Router 6
   - Recharts (graphiques)
   - Font Awesome (icônes)

## ▶️ Lancement

Une fois les dépendances installées, lancer le serveur de développement :

```bash
npm start
```

Le site s'ouvrira automatiquement dans votre navigateur par défaut à l'adresse :
**http://localhost:3000**

## 📦 Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## 🗂️ Structure du projet

```
ecoconception-tp/
├── public/
│   └── index.html              # Page HTML principale
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Barre de navigation
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js            # Page d'accueil
│   │   ├── ToolsComparison.js # Comparaison d'outils
│   │   ├── WebsiteCarbon.js   # Website Carbon Calculator
│   │   ├── RGESN.js           # Application du RGESN
│   │   ├── WAVE.js            # Audit WAVE
│   │   ├── RGAA.js            # Conformité RGAA
│   │   └── Conclusion.js      # Conclusion et synthèse
│   ├── App.js                 # Composant principal
│   ├── App.css                # Styles globaux
│   ├── index.js               # Point d'entrée
│   └── index.css              # Styles de base
├── package.json               # Dépendances et scripts
└── README.md                  # Documentation principale
```

## 📄 Contenu du site

Le site présente les résultats complets du TP Écoconception Web :

1. **Accueil** - Introduction et contexte
2. **Comparaison d'outils** - Analyse de 5 outils avec tableau et radar
3. **Website Carbon Calculator** - Décryptage technique
4. **RGESN** - Application du référentiel
5. **WAVE** - Audit d'accessibilité
6. **RGAA** - Conformité et recommandations
8. **Conclusion** - Synthèse et checklists

## 🎨 Personnalisation

### Modifier les couleurs

Éditer les variables CSS dans `src/index.css` :

```css
:root {
  --primary-color: #22c55e;
  --secondary-color: #16a34a;
  --dark-color: #1e293b;
  /* ... */
}
```

### Modifier les données

Les données fictives sont intégrées directement dans les composants de page.
Pour les remplacer par vos données réelles :

1. Ouvrir le fichier de la page concernée (ex: `src/pages/WebsiteCarbon.js`)
2. Modifier les objets de données (tableaux, constantes)
3. Sauvegarder - le site se recharge automatiquement

## 🔧 Dépannage

### Erreur : "npm: command not found"
- Installer Node.js depuis https://nodejs.org/

### Port 3000 déjà utilisé
- Fermer les autres applications sur le port 3000
- Ou lancer avec un autre port : `PORT=3001 npm start`

### Problème de compatibilité
- Vérifier la version de Node.js : `node --version` (min. 14)
- Supprimer `node_modules/` et `package-lock.json`
- Réinstaller : `npm install`

## 📝 Remarques importantes

- **Site analysé** : https://www.cholet.fr/welcome/
- **Navigation** : Menu responsive (mobile-friendly)
- **Accessibilité** : Structure sémantique HTML5

## ✨ Fonctionnalités

✅ Navigation fluide avec React Router  
✅ Design moderne et responsive  
✅ Graphiques interactifs (Recharts)  
✅ Icônes Font Awesome  
✅ Tableaux de données structurés  
✅ Cartes statistiques  
✅ Code examples avec coloration syntaxique  
✅ Alertes et badges d'état  

## 📞 Support

Pour toute question sur le projet, consulter :
- README.md
- Documentation React : https://react.dev/
- Documentation React Router : https://reactrouter.com/

