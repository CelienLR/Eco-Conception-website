# 📋 RGESN - Structure Officielle (Version 2024)

## 📊 Informations générales

- **Version actuelle** : Version 2 (Mai 2024)
- **Dernière mise à jour** : 28 mai 2024
- **Responsables** : Arcep, Arcom, ADEME
- **Cadre légal** : Loi REEN (Réduction de l'Empreinte Environnementale du Numérique)

## 🎯 Objectifs du RGESN

Réduire la consommation de ressources informatiques et énergétiques et la contribution à l'obsolescence des équipements :
- Équipements utilisateurs
- Équipements réseau
- Équipements serveurs

## 📁 Structure : 9 familles de critères (pas 8 !)

### 1. **Stratégie** (10 critères : 1.1 à 1.10)
Déterminer et suivre la pertinence, les enjeux et le pilotage de la conception du service numérique.

**Critères clés :**
- 1.1 - Évaluation de l'utilité (ODD, limites planétaires)
- 1.2 - Définition des cibles utilisatrices
- 1.3 - Référent en écoconception
- 1.4 - Revues régulières
- 1.5 - Objectifs de réduction d'impacts
- 1.6 - Collecte de données responsable
- 1.7 - Chiffrement adapté
- 1.8 - Efforts d'open source
- 1.9 - Technologies standard interopérables
- 1.10 - API documentées et ouvertes

### 2. **Spécifications** (10 critères : 2.1 à 2.10)
Cadrage projet, objectifs et contraintes sur toute la durée de vie du service.

**Critères clés :**
- 2.1 - Profils de matériels supportés
- 2.2 - Utilisable sur anciens terminaux
- 2.3 - Utilisable connexion bas débit/hors connexion
- 2.4 - Anciennes versions OS/navigateurs
- 2.5 - Adaptation différents types d'écrans
- 2.6 - Revue de conception et code
- 2.7 - Maintenance et décommissionnement
- 2.8 - Fournisseurs responsables
- 2.9 - Composants d'interface
- 2.10 - Services tiers

### 3. **Architecture** (8 critères : 3.1 à 3.8)
Stratégie de conception et articulation frontend/backend.

**Critères clés :**
- 3.1 - Architecture écoconçue
- 3.2 - Adaptation ressources à la consommation
- 3.3 - Limitation des requêtes HTTP
- 3.4 - Limitation dépendances
- 3.5 - Mise en cache
- 3.6 - Technologies côté serveur sobres
- 3.7 - Limitation stockage des logs
- 3.8 - Stockage données localement sur terminal

### 4. **UX/UI** (15 critères : 4.1 à 4.15)
Expérience et interface utilisateur.

**Critères clés :**
- 4.1 - Parcours utilisateur court
- 4.2 - Limitation animations
- 4.3 - Pas de sollicitation excessive
- 4.4 - Désactivation lecture automatique
- 4.5 - Soumission formulaire unique
- 4.6 - Chargement polices limitées
- 4.9 - Interface par défaut dark mode
- 4.11 - Taille des images adaptée
- 4.12 - Contenus visuels optimisés
- 4.15 - Boutons réseaux sociaux optimisés

### 5. **Contenus** (7 critères : 5.1 à 5.7)
Gestion des contenus textuels et multimédias.

**Critères clés :**
- 5.1 - Contenus et documents légers
- 5.2 - Suppression automatique documents
- 5.3 - Préférence son à vidéo
- 5.4 - Ajustement qualité audio/vidéo
- 5.5 - Désactivation autoplay médias
- 5.6 - Transcriptions textuelles
- 5.7 - Bannières non animées

### 6. **Frontend** (14 critères : 6.1 à 6.14)
Code côté client.

**Critères clés :**
- 6.1 - Utilisation stockage côté navigateur
- 6.2 - Code modulaire
- 6.3 - JavaScript non bloquant
- 6.4 - Limitation appels JS
- 6.5 - Minification code
- 6.6 - Compression fichiers
- 6.7 - Formats images/vidéos optimisés
- 6.8 - Suppression code mort
- 6.9 - Adaptation au type d'appareil
- 6.10 - Limitation usage cookies

### 7. **Backend** (10 critères : 7.1 à 7.10)
Code côté serveur.

**Critères clés :**
- 7.1 - Limitation volumétrie données échangées
- 7.2 - Compression HTTP
- 7.3 - Limitation appels API
- 7.4 - Architecture asynchrone
- 7.5 - Limitation interrogations base de données
- 7.6 - Éco-index requêtes SQL
- 7.7 - Stockage données pertinent
- 7.8 - Suppression données obsolètes
- 7.9 - Utilisation base de données légère
- 7.10 - Limitation usage cookies

### 8. **Hébergement** (5 critères : 8.1 à 8.5)
Infrastructure d'hébergement.

**Critères clés :**
- 8.1 - Hébergeur écoresponsable
- 8.2 - Localisation hébergement adaptée
- 8.3 - Limitation requêtes DNS
- 8.4 - Limitation utilisation CDN
- 8.5 - Protocoles communication efficaces

### 9. **Algorithmie** (0 critères dans le texte fourni)
⚠️ **Note** : Cette section n'apparaît que dans le sommaire mais n'a pas de critères détaillés dans le document fourni.

---

## 📊 Total des critères

**79 critères au total** répartis dans 9 familles (ou 8 si on exclut Algorithmie qui n'a pas de critères)

---

## 🏷️ Classification des critères

### Par priorité :
- **Prioritaire** : Critères essentiels à mettre en œuvre
- **Recommandé** : Critères importants mais non critiques
- **Modéré** : Critères optionnels mais bénéfiques

### Par difficulté :
- **Faible** : Facile à mettre en œuvre
- **Moyen** : Nécessite des compétences techniques
- **Fort** : Complexe, nécessite expertise approfondie

### Par cible :
- **Applicable à tous les services** : Universel
- **N/A si...** : Critère conditionnel selon le type de service

---

## 🔗 Documents officiels disponibles

1. **PDF** : Référentiel complet (4,2 Mo)
2. **Outil d'évaluation ODS** (101 Ko)
3. **Outil d'évaluation Excel** (129 Ko)
4. **Exemple déclaration DOCX** (15 Ko)
5. **Exemple déclaration ODT** (50 Ko)

---

## ✅ Correction à apporter dans votre projet

### ❌ Erreur détectée :
Votre projet mentionne **"8 familles"** mais le RGESN officiel en compte **9** :

1. Stratégie
2. Spécifications
3. Architecture
4. UX/UI
5. Contenus
6. Frontend
7. Backend
8. Hébergement
9. **Algorithmie** (mentionnée dans le sommaire)

### 🔧 Mise à jour nécessaire :
Modifier la page RGESN.js pour indiquer **9 familles** au lieu de 8.

---

## 📝 Informations importantes à intégrer

### Critères de validation :
- Ancienneté équipements : **7 ans** (applications natives) ou **10 ans** (web/microprocesseur)
- Ancienneté OS : **5 ans**
- Ancienneté navigateurs : **2 ans**
- Connexion bas débit : **3G mobile / 512 Kbit/s fixe**

### Référentiels mentionnés :
- 17 ODD (Objectifs de Développement Durable) de l'ONU
- 9 limites planétaires
- Taxonomie européenne activités vertes
- Directive CSRD
- Norme ISO 26000
- Global Reporting Initiative

---

## 🎯 Utilisation dans votre projet

Votre page RGESN actuelle est **globalement correcte** mais nécessite cette correction mineure :
- Remplacer "8 familles" par "9 familles" partout où c'est mentionné
- Optionnellement : ajouter la mention de la famille "Algorithmie" (même si elle n'a pas de critères détaillés)
