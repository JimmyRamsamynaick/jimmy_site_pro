# 🚀 JimmyTech - Solution Digitale & Maintenance

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)

> **Une plateforme web haute performance pour les services numériques.**  
> Vitrine professionnelle, gestion de devis automatisée et système de notification en temps réel.

---

## 🌟 Fonctionnalités Clés

### 🎨 Expérience Utilisateur (UI/UX)
- **Design Moderne & Sombre** : Interface "Dark Mode" native utilisant la palette Slate/Blue pour un rendu professionnel et tech.
- **Animations Fluides** : Intégration de `framer-motion` pour des transitions douces et des éléments interactifs.
- **Responsive Design** : Architecture mobile-first adaptée à tous les écrans (Desktop, Tablette, Mobile).

### ⚡ Système de Devis Intelligent
- **Formulaire Dynamique** : Calcul d'estimation en temps réel (désactivé visuellement pour le client, actif en backend).
- **Validation Robuste** : Utilisation de **Zod** pour garantir l'intégrité des données entrantes.
- **Logique Conditionnelle** : Gestion des zones d'intervention et des types de services (Sur site vs À distance).

### 📧 Notifications Dual-Channel
Système de communication automatisé via **Nodemailer** :
1.  **Notification Admin** : Réception immédiate d'un rapport détaillé (Service, Urgence, Description, Contact).
2.  **Confirmation Client** : Envoi automatique d'un email de réassurance avec récapitulatif de la demande.
3.  **Performance** : Envoi asynchrone parallèle (`Promise.all`) pour ne pas ralentir l'expérience utilisateur.

### 🔒 Sécurité & Confidentialité
- **Privacy First** : Aucune donnée de localisation sensible exposée publiquement.
- **Validation Serveur** : Protection contre les injections et les données malformées via API Routes.

---

## 🛠️ Stack Technique

Ce projet repose sur une architecture **Next.js App Router** moderne :

| Catégorie | Technologies |
|-----------|--------------|
| **Core** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Lucide React (Icons), Framer Motion |
| **Forms** | React Hook Form, Zod Resolver |
| **Backend** | Next.js API Routes, Nodemailer |
| **Deployment** | Vercel / VPS (Node.js + PM2) |

---

## 🚀 Installation & Démarrage

### 1. Cloner le projet
```bash
git clone https://github.com/JimmyRamsamynaick/jimmy_site_pro.git
cd jimmy_site_pro
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Configuration de l'environnement
Créez un fichier `.env.local` à la racine du projet et ajoutez vos identifiants Gmail (App Password requis) :

```env
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=votre-mot-de-passe-application
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

---

## 📂 Structure du Projet

```bash
src/
├── app/
│   ├── api/          # Routes API (Emailing)
│   ├── contact/      # Page Contact
│   ├── legal/        # Pages légales (Mentions, Confidentialité)
│   ├── quote/        # Page Devis
│   ├── services/     # Catalogue Services
│   └── layout.tsx    # Layout global (Navbar/Footer)
├── components/       # Composants réutilisables (QuoteForm, Navbar...)
└── lib/              # Utilitaires et helpers
```

---

## 🌍 Déploiement

Le projet est optimisé pour un déploiement sur **Vercel** ou tout serveur supportant Node.js.

**Domaine de production :** [jimmy-pro.duckdns.org](https://jimmy-pro.duckdns.org/)

---

## 👤 Auteur

**Jimmy Ramsamynaick**  
*Expert Développement Web & Maintenance Informatique*

---

<p align="center">
  Fait avec ❤️ et du code propre.
</p>
