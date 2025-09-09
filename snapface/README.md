# Projet Snapface

Ce projet est une application web simple construite avec Angular, permettant aux utilisateurs de partager des "snaps" de visages et de les "snapper" (similaire à un "like").

## Architecture du Projet

Le projet suit une architecture modulaire basée sur les composants et services d'Angular.

-  snapface/
│
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   ├── assets/
│   │   └── snapface-logo.png
│   └── app/
│       ├── app.config.ts
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.scss
│       ├── app.ts
│       │
│       ├── header/
│       │   ├── header.html
│       │   ├── header.scss
│       │   └── header.ts
│       │
│       ├── face-snap/
│       │   ├── face-snap.html
│       │   ├── face-snap.scss
│       │   └── face-snap.ts
│       │
│       ├── face-snap-list/
│       │   ├── face-snap-list.html
│       │   ├── face-snap-list.scss
│       │   └── face-snap-list.ts
│       │
│       ├── single-face-snap/
│       │   ├── single-face-snap.html
│       │   ├── single-face-snap.scss
│       │   └── single-face-snap.ts
│       │
│       ├── landing-page/
│       │   ├── landing-page.html
│       │   ├── landing-page.scss
│       │   └── landing-page.ts
│       │
│       ├── models/
│       │   ├── face-snap.ts
│       │   └── snap-type.type.ts
│       │
│       └── service/
│           └── face-snaps.service.ts

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

### `npm start`

Lance l'application en mode développement.
Ouvrez [http://localhost:4200](http://localhost:4200) pour la voir dans votre navigateur.

L'application se rechargera automatiquement si vous modifiez un des fichiers sources.

### `npm run build`

Compile l'application pour la production dans le répertoire `dist/`.

### `npm test`

Lance le framework de test Karma pour exécuter les tests unitaires.