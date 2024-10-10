# Allo-Media Livraison

Bienvenue dans le projet **Allo-Media Livraison**, une application web développée avec React pour la gestion des inscriptions, connexions, réinitialisations de mot de passe et déconnexions des utilisateurs. Ce projet inclut également la dockerisation du frontend et du backend pour faciliter le déploiement et la gestion des environnements.

## Table des Matières

- [Contexte du Projet](#contexte-du-projet)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Cloner le Répertoire](#cloner-le-répertoire)
  - [Installer les Dépendances](#installer-les-dépendances)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
  - [Scripts Disponibles](#scripts-disponibles)
- [Dockerisation](#dockerisation)
  - [Dockerfile Frontend](#dockerfile-frontend)
  - [Dockerfile Backend](#dockerfile-backend)
  - [Docker Compose](#docker-compose)
- [Fonctionnalités](#fonctionnalités)
  - [Inscription](#inscription)
  - [Connexion](#connexion)
  - [Modification du Mot de Passe](#modification-du-mot-de-passe)
  - [Déconnexion](#déconnexion)
- [Bibliothèques et Frameworks Requis](#bibliothèques-et-frameworks-requis)
- [Objectifs du Projet](#objectifs-du-projet)
- [Tests](#tests)
- [Contribution](#contribution)
- [Licence](#licence)

## Contexte du Projet

Le projet **Allo-Media Livraison** a pour but de développer une application web complète en utilisant React pour le frontend et une API REST pour le backend. Il inclut des fonctionnalités essentielles comme l'inscription des utilisateurs, la connexion sécurisée avec JWT, la réinitialisation de mot de passe, ainsi que la gestion de la session utilisateur. Le tout est dockerisé afin de simplifier le déploiement et la gestion des environnements.

## Technologies Utilisées

- **React** : Pour le développement de l'interface utilisateur.
- **React Router** : Pour la gestion des routes et de la navigation.
- **Axios** : Pour effectuer des requêtes HTTP vers le backend.
- **React Hook Form**  : Pour la gestion des formulaires.
- **Redux-toolkit** : Pour la gestion de l'état global de l'application.
- **JWT** : Pour l'authentification sécurisée des utilisateurs.
- **Docker** : Pour la dockerisation du frontend et backend.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 20 ou plus)
- [Docker](https://www.docker.com/) (si vous utilisez Docker pour la mise en place)
- Un gestionnaire de paquets comme npm ou yarn

### Cloner le Répertoire

Clonez ce dépôt sur votre machine locale à l'aide de la commande suivante :

```bash  
git clone https://github.com/Bilal-EZ-ZAIM/AlloMedia-Livraison-front
cd AlloMedia-Livraison-front
