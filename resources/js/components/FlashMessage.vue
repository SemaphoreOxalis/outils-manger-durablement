<template>
    <div class="alert alert-flash fade show"
         :class="'alert-' + level"
         role="alert"
         v-show="show"
         v-text="body">
    </div>
</template>

<script>
    export default {

        // propriétés héritées du composant parent
        props: {
            message: String
        },

        // initialisation des propriétés utiles à ce composant
        data() {
            return {
                body: '',
                level: 'success',
                show: false
            }
        },

        // à l'initialisation du composant
        created() {

            // Si on lui passe un message, il le flashe
            if (this.message) {
                this.flash(this.message);
            }

            // écouteur d'évènement, lance la fonction flash lorsqu'il en reçoit
            window.events.$on('flash', data => {
                this.flash(data);
            });
        },

        // fonctions inhérentes à ce composant
        methods: {

            // lance un flash en bas à droite de l'écran
            flash(data) {
                this.body = data.message;

                // possibilité de passer une couleur (danger, warning....) par défaut: success (vert)
                this.level = data.level;

                // affiche le message flash
                this.show = true;

                // le cache au bour de 3s
                this.hide();
            },

            // au bout de 3s, le message flash est caché
            hide() {
                setTimeout(() => {
                    this.show = false;
                }, 6000);
            }
        }
    }
</script>
