# ⚡ JimmyTech - L'Excellence Informatique & Web

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-green?style=for-the-badge&logo=node.js&logoColor=white)

<br />

**Une plateforme web ultra-moderne dédiée aux services informatiques et au développement web.**  
*Vitrine professionnelle • Gestion de devis intelligente • Notifications en temps réel • SEO Optimisé*

[Voir le site](https://jimmy-pro.duckdns.org) · [Signaler un bug](https://github.com/JimmyRamsamynaick/jimmy_site_pro/issues) · [Demander une fonctionnalité](https://github.com/JimmyRamsamynaick/jimmy_site_pro/issues)

</div>

---

## 💎 À Propos du Projet

**JimmyTech** n'est pas qu'un simple site vitrine. C'est une **Progressive Web App (PWA)** moderne conçue pour offrir une expérience utilisateur fluide et une gestion automatisée des demandes clients. 

Le projet résout plusieurs problématiques clés :
*   ❌ **Fini les formulaires statiques** : Un système de devis interactif guide le client.
*   ❌ **Fini les pertes d'emails** : Un système de notification double canal (Admin + Client) assure une traçabilité parfaite.
*   ❌ **Fini les sites lents** : Optimisé pour la performance avec le rendu serveur de Next.js.

## 🌟 Fonctionnalités "Game Changer"

### 🎨 Expérience Utilisateur (UI/UX) Immersive
*   **Design "Dark Mode" Premium** : Une esthétique soignée utilisant la palette Slate/Blue pour inspirer confiance et professionnalisme.
*   **Micro-interactions** : Animations fluides via `framer-motion` qui rendent la navigation vivante sans compromettre la performance.
*   **Responsive Intégral** : Une expérience parfaite du mobile au grand écran 4K.

### 🧠 Cerveau Backend Intelligent
*   **Moteur de Devis Dynamique** : Analyse les besoins (type d'intervention, urgence, distance) pour pré-qualifier les leads.
*   **Validation Zod** : Un bouclier de données qui rejette toute entrée malformée avant même qu'elle n'atteigne le serveur.
*   **Routage Email Intelligent** : Utilisation de `Nodemailer` avec templates HTML responsive pour des notifications pro.

### 🚀 Performance & SEO
*   **SSR (Server-Side Rendering)** : Chargement instantané et indexation parfaite par Google.
*   **SEO Local** : Optimisation poussée (JSON-LD, Métadonnées) pour dominer les recherches sur "Informatique Auterive/Toulouse".
*   **Score Lighthouse** : Vise le 100/100 en Performance, Accessibilité et Best Practices.

---

## 🛠️ Arsenal Technologique

Ce projet est propulsé par les technologies les plus robustes du marché en 2026 :

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/-Next.js-black?logo=next.js&style=flat-square) | Architecture App Router, SSR, API Routes |
| **Langage** | ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&style=flat-square) | Typage strict pour un code sans bug |
| **Style** | ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&style=flat-square) | Design System utilitaire et responsive |
| **Animation** | ![Framer](https://img.shields.io/badge/-Framer_Motion-purple?logo=framer&style=flat-square) | Transitions de pages et animations composants |
| **Formulaires** | ![React Hook Form](https://img.shields.io/badge/-React_Hook_Form-ec5990?logo=react&style=flat-square) | Gestion d'état performante |
| **Validation** | ![Zod](https://img.shields.io/badge/-Zod-3068b7?logo=zod&style=flat-square) | Schémas de validation robustes |
| **Emailing** | ![Nodemailer](https://img.shields.io/badge/-Nodemailer-green?logo=nodemailer&style=flat-square) | Transport SMTP sécurisé |

---

## 🚀 Installation & Démarrage Rapide

Envie de tester le projet localement ? Suivez le guide.

### Prérequis
*   Node.js 18+
*   npm ou yarn
*   Un compte Gmail (pour la fonctionnalité d'envoi d'email)

### 1. Clonage
```bash
git clone https://github.com/JimmyRamsamynaick/jimmy_site_pro.git
cd jimmy_site_pro
```

### 2. Installation des dépendances
```bash
npm install
```

### 3. Configuration des variables d'environnement
Créez un fichier `.env.local` à la racine :
```env
# Authentification Gmail (Mot de passe d'application requis)
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=votre-mot-de-passe-app
```

### 4. Lancement
```bash
npm run dev
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000) 🚀

---

## 📂 Architecture du Code

Une structure propre et modulaire pour une maintenabilité maximale.

```bash
src/
├── app/                  # Next.js App Router
│   ├── api/              # Endpoints API Serverless
│   ├── contact/          # Logique de contact
│   ├── quote/            # Moteur de devis
│   ├── services/         # Pages statiques optimisées
│   └── layout.tsx        # Layout racine & SEO
├── components/           # Bibliothèque de composants UI
│   ├── ui/               # Composants atomiques
│   └── forms/            # Formulaires complexes
├── lib/                  # Utilitaires & Helpers
└── types/                # Définitions TypeScript partagées
```

---

## 👤 Auteur & Contact

**Jimmy Ramsamynaick**  
*Expert Technique & Développeur Web*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jimmyramsamynaick/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JimmyRamsamynaick)
[![Website](https://img.shields.io/badge/Website-JimmyTech-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jimmy-pro.duckdns.org)

---

<div align="center">
  <p>Fait avec ❤️ et beaucoup de ☕ à Toulouse.</p>
  <p>© 2026 JimmyTech. Tous droits réservés.</p>
</div>
