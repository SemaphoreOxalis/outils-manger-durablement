# Outil Gaspi

## Installation

* Dans le terminal du serveur, à la racine, tapez :
    * `git clone https://github.com/SemaphoreOxalis/outil-CO2-gaspi outil-gaspi.sc4semadmin.universe.wf` (2e argument = sous-domaine qui hébergera l'appli (par exemple ici `outil-gaspi.sc4semadmin.universe.wf`))

#### **IMPORTANT**

créer le sous-domaine sur CPanel et faire pointer la racine sur le dossier '/public'.
**Sans cette étape, les internautes auraient accès à TOUT le code source de l'application (logique, base de donnée, configuration, etc...)**

![exemple](https://github.com/SemaphoreOxalis/outil-CO2-gaspi/blob/master/doc/sous-domaine.jpg?raw=true)

* Dans le terminal du serveur, tapez :
    * `cd outil-gaspi.sc4semadmin.universe.wf` (Pour vous placer à la racine de l'application)
    * `composer install` (installe les dépendances back PHP)
    * `npm install` (installe les dépendances front JS)

* à la racine du sous-domaine (vous devriez voir les dossiers .git, app, bootstrap, config, public, etc...), créez un fichier nommé `.env` et copiez ceci dedans en adaptant `APP_URL` : (ce dossier n'est pas sur votre repository par défaut, car il contient votre configuration)

```
APP_NAME="Outil CO2 Gaspi"
APP_ENV=production
APP_KEY=
APP_DEBUG=true
APP_URL=sc4semadmin.universe.wf

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

* Dans le dossier database, créez le fichier `database.sqlite` et laissez-le vide (ce fichier contiendra notre base de données)

* Dans le terminal, tapez :
    * `php artisan key:generate` (crée une clé de chiffrage unique à l'application pour générer les tokens CSRF et les cookies de session)
    * `php artisan storage:link` (crée un lien symbolique entre `storage/app/public` et `public/storage` pour rendre public les assets)
    * `php artisan migrate:fresh` (crée les tables de la base de données)

* Naviguez jusqu'à l'URL du site (par exemple ici `outil-gaspi.sc4semadmin.universe.wf`), ajoutez `/register` à l'URL et créez un utilisateur (cet utilisateur sera administrateur de l'application et pourra modifier la base de données)

* Editez le fichier routes/web.php :
    * Commentez la ligne `Auth::routes();`
    * Décommentez la ligne `Auth::routes(['register' => false]);`
    * Ces 2 instructions permettent d'"interdire" la création de nouvel utilisateur administrateur en désactivent la route `/register`

* Dans le terminal, tapez :
    * `php artisan db:seed` (remplit les tables de la base de données avec les valeurs de référence)
    * `npm run prod` (compile et minifie le Javascript et le CSS de l'application dans le dossier `/public`)