# Front and Furious

## Présentation

Tous les assets front-end sont gérés via gulp.

## Pré-requis : ImageMagick

### Linux
`apt-get install imagemagick`

### Mac with Homebrew
```
brew update
brew upgrade
brew install imagemagick
```

### Déployer les assets

Requis : `node v5.0.0` et `npm 3.3.6`

Dossier `frontend/` :

```
npm install
bower install
gulp build --production
```

### Tâches gulp disponibles

```
// Déploiement des fichiers JS
gulp script

// Déploiement des fonts
gulp fonts

// Déploiement des img
gulp img

// Déploiement des svg
gulp img-svg

// Déploiement des css
gulp css

// Déploiement de tous les assets *avec* source mapping des fichiers pour les développements
gulp build

// Déploiment de tous les assets *sans* le source mapping des fichiers pour livraison en production
gulp build --production

// Déploiement des assets à la volé *avec* source mapping des fichiers pour les développements
gulp watch
```

## Crédits

**Back-end and Front-end developer:** [Matthieu SCHNEIDER](https://twitter.com/Matthieusch)