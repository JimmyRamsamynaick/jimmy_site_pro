#!/bin/bash

# Script de déploiement pour le VPS
# À exécuter sur le serveur après avoir récupéré les fichiers

echo "🚀 Début du déploiement..."

# 1. Installation des dépendances (au cas où)
echo "📦 Installation des dépendances..."
npm install

# 2. Construction de l'application Next.js
echo "🏗️ Construction du projet (Build)..."
npm run build

# 3. Redémarrage avec PM2
echo "🔄 Redémarrage du serveur..."
pm2 restart jimmy-pro

echo "✅ Déploiement terminé avec succès !"
