# Front-end Furious

## Présentation

Tous les assets front sont gérés via gulp.

## Pré-requis : ImageMagick

`sudo apt-get install imagemagick`

## Pré-requis : Nodejs & npm

```
sudo apt-get update
sudo apt-get install nodejs npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

Redémarrer la console ssh pour mettre à jour le cache des versions :
```
node -v
npm -v
```

### Déployer les assets

Requis : `node v5.0.0+` et `npm 3.3.6+`

Dossier `front/` :

```
npm install

sudo npm install -g bower
bower install

sudo npm install -g gulp
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