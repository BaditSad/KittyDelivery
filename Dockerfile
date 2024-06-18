# Dockerfile

# Utilisation de l'image node alpine comme base
FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier `package.json` et `package-lock.json` pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie de tous les fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposition du port 8080 (port par défaut de l'application Vue.js)
EXPOSE 8080

# Commande pour démarrer l'application
CMD ["npm", "run", "serve"]
