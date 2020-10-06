- [Outil Gaspi](#recycle-outil-gaspi-recycle)
  * [Installation](#installation-floppy_disk)
  * [Mise à jour](#mise-à-jour-ambulance)
    + [Mise à jour des textes uniquement](#speech_balloon-mise-à-jour-des-textes-uniquement)
  * [Architecture](#architecture-building_construction)
    + [Configuration](#wrench-configuration)
    + [Authentification](#key-authentification)
    + [Base de données](#card_file_box-base-de-données)
    + [Routes](#vertical_traffic_light-routes)
    + [Back-end](#factory-back-end)
    + [Front-end](#iphone-front-end)
      - [Vues PHP](#vues-php)
      - [Vues Vue.js](#vues-vuejs)
      - [Initialisation de Vue.js](#initialisation-de-vuejs)
    + [Style et polices](#art-style-et-polices)
    + [Divers](#slot_machine-divers)
  * [Détail des fichiers et dossiers](#détail-des-fichiers-et-dossiers-clipboard)
  
  
# :recycle: Outil Gaspi :recycle:
  
  
## Installation :floppy_disk:

* :computer: Dans le terminal du serveur, à la racine, tapez :
    * `git clone https://github.com/SemaphoreOxalis/outil-gaspi outil-gaspi.sc4semadmin.universe.wf` (2e argument = sous-domaine qui hébergera l'appli (par exemple ici `outil-gaspi.sc4semadmin.universe.wf`))

#### :warning: **IMPORTANT** :warning:
* :lock: créer le sous-domaine sur CPanel et faire pointer la racine sur le dossier `/public`.
**Sans cette étape, les internautes auraient accès à TOUT le code source de l'application (logique, base de donnée, configuration, etc...)** :

![exemple](https://github.com/SemaphoreOxalis/outil-CO2-gaspi/blob/master/doc/sous-domaine.jpg?raw=true)

* :computer: Dans le terminal du serveur, tapez :
    * `cd outil-gaspi.sc4semadmin.universe.wf` (Pour vous placer à la racine de l'application)
    * `composer install --optimize-autoloader --no-dev` (installe les dépendances back PHP)
    * `npm install` (installe les dépendances front JS)

* :pencil2: à la racine du sous-domaine (vous devriez voir les dossiers .git, app, bootstrap, config, public, etc...), créez un fichier nommé `.env` et copiez ceci dedans en adaptant `APP_URL` : (ce dossier n'est pas sur votre repository par défaut, car il contient votre configuration)

```
APP_NAME="Outil CO2 Gaspi"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=outil-gaspi.sc4semadmin.universe.wf

LOG_CHANNEL=stack

DB_CONNECTION=sqlite

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

DEBUGBAR_ENABLED=false
```

* :open_file_folder: Dans le dossier database, créez le fichier `database.sqlite` et laissez-le vide (ce fichier contiendra notre base de données)

* :computer: Dans le terminal du serveur, tapez :
    * `php artisan key:generate` (crée une clé de chiffrage unique à l'application pour générer les tokens CSRF et les cookies de session)
    * `php artisan migrate:fresh` (crée les tables de la base de données - tapez 'yes' si on vous le demande)

* :pencil2: Editez le fichier `routes/web.php` :
    * Décommentez la ligne `Auth::routes();`
    * Commentez la ligne `Auth::routes(['register' => false]);`

* :cop: Naviguez jusqu'à l'URL du site (par exemple ici `outil-gaspi.sc4semadmin.universe.wf`), ajoutez `/register` à l'URL et créez un utilisateur (cet utilisateur sera administrateur de l'application et pourra modifier la base de données)

* :pencil2: Ré-éditez le fichier routes/web.php :
    * Re-commentez la ligne `Auth::routes();`
    * Re-décommentez la ligne `Auth::routes(['register' => false]);`
    * Ces 2 instructions permettent d'"interdire" la création de nouvel utilisateur administrateur en désactivant la route `/register`
    * :warning: **Sans cette étape, et bien qu'aucun lien n'apparaisse, il serait possible de visiter l'URL `/register` et de créer un utilisateur administrateur.** Une fois l'utilisateur administrateur créé, n'hésitez pas à vérifiez que cette étape a été correctement effectuée en essayant de vous rendre à nouveau sur l'URL `/register`, vous devriez alors tomber sur une page d'erreur

* :computer: Dans le terminal du serveur, tapez :
    * `php artisan db:seed` (remplit les tables de la base de données avec les valeurs de référence - tapez 'yes' si on vous le demande)
    * `php artisan config:cache` compile toute la configuration de Laravel dans un seul fichier, utile pour l'optimisation des temps de chargement
    * `php artisan view:cache` compile les template Blade pour des soucis de performance
    * `npm run prod` (compile et minifie le Javascript et le CSS de l'application dans le dossier `/public`)
  
  
## Mise à jour :ambulance:

Si le code a été mis à jour sur GitHub, voici la procédure pour mettre à jour l'application en production :

* :computer: Dans le terminal du serveur, tapez :
    * `git fetch --all`
    * `git reset --hard origin/master`
    * `git pull origin master`

* :leftwards_arrow_with_hook: reprendre ensuite la procédure d'installation à partir de l'étape `php artisan config:cache`
  
### :speech_balloon: Mise à jour des textes uniquement 

* :pencil2: éditez à votre guise les textes contenus dans les fichiers situés dans `resources/texts` (la plupart des textes de l'application sont stockés ici, seuls quelques rares textes sont du côté serveur, en PHP (login....))

* :computer: Dans le terminal du serveur, tapez :
      * `npm run prod`
  
  
## Architecture :building_construction:

Le côté back-end en Laravel ne s'occupe que de fournir une sorte d'API pour le front, contenant les données (valeurs de référence) et mettant en place des routes permettant de les récupérer et de les modifier. Il s'occupe également de l'authentification et de l'export .xlsx

La majorité de la logique de l'application est gérée par Vue.js en front-end, qui consommera cette API mise en place.

### :wrench: Configuration

* Le principal fichier de configuration est `.env` à la racine. D'autres options se trouvent dans le dossier `/config`

### :key: Authentification

* Toute l'authentification est gérée de façon traditionnelle par Laravel. Plus d'infos [sur ce lien](https://laravel.com/docs/7.x/authentication)
* La seule modification apportée est la désactivation de la route `/register` que vous avez affectuée lors de l'installation

### :card_file_box: Base de données

* La base de données de l'application se trouve dans `/database/database.sqlite`
* dans le dossier `/database`, vous trouverez 2 autres dossiers utiles à l'application :
    * `/migrations` contient les fichiers responsables de *créer* les tables de la base de données
    * `/seeds` contient les fichiers responsable de *remplir* les tables de la base de données. (C'est ici que se trouvent les valeurs de référence qui sont initialisées à "25%" et "75%" lors de l'installation)

### :vertical_traffic_light: Routes

* Back-end (endpoints de l'API et authentification)
    * Ces routes sont dans le fichier `routes/web.php`
* Front-end (ces routes correspondent à des composants Vue)
    * Elles sont dans le fichier `resources/js/routes.js`

### :factory: Back-end

Ici se trouvent les fichiers principaux constituant notre API
* `app/Http/Controllers/WasteReferenceValuesController.php` s'occupe de récupérer et de modifier les valeurs de référence
* `app/Http/Controllers/ExportController.php` s'occupe de l'export des simulations au format .xlsx

### :iphone: Front-end

#### Vues PHP
La "page" de notre Single-Page-Application est un template Laravel divisé en deux fichiers:
* `resources/views/layout/app.blade.php` ne contient pratiquement que le `header` de la page et s'occupe principalement de charger le CSS et le JAvascript de l'application. Sa balise `body` est vide mais contiendra :
* `resources/views/app.blade.php` qui contient les éléments statiques (liens de navigation, `footer`) et une balise `main` qui sera le 'container' des composants Vue.js qui seront les véritables "pages" de notre application

#### Vues Vue.js
Ce ne sont pas à proprement parler des "vues" mais des composants Vue. Cependant, ils constituent les "pages" au travers desquelles il est possible de naviguer
Elles sont situées dans `resources/js/components` et sont constitués de `Composants.vue`, qui constituent les pages de notre application (chaque composant dispose de son propre template HTML et de sa propre logique sous forme de balise `script`)
Par souci de lisibilité et de factorisation, du code a été extrait de ces composants dans le fichier `resources/js/helpers`, dont voici la structure: (vous pouvez retrouver quel composant utilise quel "helper" en regardant ce qu'il importe)
* `helpers` contient de la logique générale à l'application, utilisée par pratiquement tous les composants (formatage des dates, des nombres, etc...)
    * `waste-simulation` sont des fichiers spécifiques à cet outil de simulation de gaspillage (en prévision du prochain outil)
        * `calculations` regroupe les fichiers s'occupant des calculs effectuées pour les simulations
        * `component-specific` regroupe du code spécifique à certains composants, qui en alourdissaient la lecture
        * `validation` contient la logique responsable de valider ou non les saisies des utilisateurs

#### Initialisation de Vue.js
En plus de ces fichiers, dans `resources/js/`, vous pouvez trouver
* `app.js` ce fichier initialise Vue.js. Concrètement, il "fait le lien" entre la balise `div` d'id `app` dans le template PHP `resources/views/layout/app.blade.php` et le routeur de Vue qui va la "remplir" avec les différents composants. Ce fichier importe:
* `bootstrap.js` qui s'occupe d'initialiser les librairies nécessaires à l'application (axios, jQuery, bootstrap.js...)

### :art: Style et polices
Tout se trouve dans les dossiers `resources/fonts` et `resources/sass`, notamment dans le fichier `resources/sass/app.scss` qui importe les autres fichiers utiles (dont évidemment nos `custom.scss` et `icons.scss`). Tout ceci sera compilé dans le fichier `public/css/app.css` lors de l'exécution du script `npm run prod` lors de la phase d'installation (si elle a été correctement effectuée, le dossier `public` est à la racine du site et les internautes n'ont donc accès qu'à celui-ci)

### :slot_machine: Divers
* :sparkles: Les images se trouvent déjà dans `public/images` 
* :earth_africa: La traduction de messages d'erreurs et système se trouve dans `resources/lang` 
  
  
## Détail des fichiers et dossiers :clipboard:
Les fichiers et dossiers non affichés dans cette liste sont nécessaires à Laravel/Vue mais n'ont pas été modifiés, ou ne devraient pas l'être  
:no_entry: Ce symbole indique que ces fichiers/dossiers ne doivent pas être modifiés  
:warning: Ce symbole indique que ces fichiers/dossiers ne devraient pas être modifiés  
  

* `app` : contient le code back-end de notre API (dont l'authentification gérée par Laravel)
    * `Http/Controllers` : contient plus spécifiquement le code nécessaire à traiter les données de référence et à la fonction export
* :no_entry: `bootstrap` : généré par Laravel, contient le fichier `app.php` qui lance l'application et le dossier `cache` pour optimisation
* :warning: `config` : contient des fichiers de configuration
* :warning: `database` : contient la base de données et la logique ce celle-ci
    * :warning: `migrations` : code pour construire a base de données lors de la commande `php artisan migrate:fresh`
    * :warning: `seeds` : code pour remplir les tables de la base de données lors de la commande `php artisan db:seed`
* `doc` : contient uniquement l'image présente en haut de ce README
* :no_entry: `node_modules` : Contient les dépendances Javascript
* :warning: `public` : Le point d'entrée de notre application. Derrière ce point tout est accessible au navigateur. Une modification ici n'aurait aucun effet, le contenu de ce dossier étant généré à l'installation (sauf `/images`).
    * `images` : Seul ce sous-dossier contient réellement les images affichées par l'application (si vous voulez les modifier, faites-le ici)
* `resources` : contient les vues et le code front-end non compilé
    * `js` : Vue.js et ses Composants, fichiers ressources Javascript, logique front-end
        * `app.js` : initialise Vue et les dépendances JS
        * `routes.js` : routeur vers les "pages"/composants
    * `sass` : Styles
    * `views` : vues Laravel (conteneur de l'application)
* :warning: `routes` : contient les définitions de routes de l'application 
    * `web.php` : routeur back-end Laravel : contient les routes vers notre API et pour l'authentification
* `storage` : Non utilisé. Logs et fichiers envoyés par les utilisateurs
* `tests` : Non utilisé. Contient les fichiers de tests (NDD : J'essaierai de faire du TDD pour la deuxième appli)
* :no_entry: `vendor` : Contient les dépendances PHP
* fichiers à la racine :
    * :warning: `.env` : fichier de configuration général de l'application
    * :warning: `composer.json` : dépendances PHP à installer lors de la commande `composer install`
    * :warning: `package.json` : dépendances JS à installer lors de la commande `npm install`
    * :warning: `webpack.mix.js` : responsable de compiler le CSS et le JS depuis le dossier `resources` dans le dossier `public`
