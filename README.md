# Outil Gaspi

## Installation

* Dans un terminal, tapez :
    * `git clone https://github.com/SemaphoreOxalis/outil-CO2-gaspi outil-gaspi.sc4semadmin.universe.wf` (2e argument = sous-domaine qui hébergera l'appli (par exemple ici outil-gaspi.sc4semadmin.universe.wf))

#### IMPORTANT

créer le sous-domaine sur CPanel et faire pointer la racine sur le dossier '/public'

![exemple](https://github.com/SemaphoreOxalis/outil-CO2-gaspi/blob/master/doc/sous-domaine.jpg?raw=true)

* Dans le terminal, tapez :
    * `cd outil-gaspi.sc4semadmin.universe.wf`
    * `composer install` (installe les dépendances back PHP)
    * `npm install` (installe les dépendances front JS)

* à la racine du sous-domaine (vous devriez voir les dossiers .git, app, bootstrap, config, public, etc...), créez un fichier nommé `.env` et copiez ceci dedans en adaptant `APP_URL` :

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

* Dans le dossier database, créez le fichier `database.sqlite` et laissez-le vide

* Dans le terminal, tapez :
    * `php artisan key:generate`
    * `php artisan storage:link`
    * `php artisan migrate:fresh`

* Naviguez jusqu'à l'URL du site, ajoutez `/register` à l'URL et créez un utilisateur administrateur

* Editez le fichier routes/web.php :
    * Commentez la ligne `Auth::routes();`
    * Décommentez la ligne `Auth::routes(['register' => false]);`

* Dans le terminal, tapez :
    * `php artisan db:seed`
    * `npm run prod`