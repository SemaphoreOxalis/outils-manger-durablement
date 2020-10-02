<template>
    <div class="mx-5">
        <div v-if="signedIn">
            <h2 class="my-4">Panneau d'administration</h2>
            <p class="mb-4"><strong>Ici, vous pouvez modifier simplement les valeurs de référence utilisées par
                l'application</strong></p>

            <h4>Valeurs de référence</h4>

            <div v-for="value in values"
                 :key="value.id">

                <label>{{ value.label }}</label>
                <div class="form-group admin">
                    <input v-model="value.value" @change="updateRefValue(value)" type="number" required
                           min="0" max="100" step="0.01" class="custom-input browser-default number-field"> <span> %</span>
                </div>
            </div>

            <h4>Compteurs</h4>

            <div v-for="counter in counters"
                 :key="counter.id + 2">

                <label>{{ counter.label }}</label>
                <div class="form-group admin">
                    <input v-model="counter.value" @change="updateCounter(counter)" type="number" required
                           min="0" max="100" step="0.01" class="custom-input browser-default number-field"> <span> %</span>
                </div>
            </div>
        </div>
        <div v-else>
            Vous n'avez pas l'autorisation d'être ici
        </div>
    </div>
</template>

<script>
    // import des fonctions utiles regroupées dans des fichiers 'helpers'
    import DataBase from "../helpers/DataBase";

    export default {

        // déclaration de dépendance à ces bibliothèques de fonctions
        mixins : [
            DataBase
        ],

        // initialisation des données utilisées par le composant
        data() {
            return {
                values: [],
                counters: [],
            }
        },

        // Valeurs calculées à la volée
        computed: {

            // L'utilisateur est-il bien authentifié ?
            signedIn() {
                return window.App.signedIn;
            }
        },

        // A la création du composent (i.e quand on arrive sur la "page")
        created() {

            // Va chercher les valeurs de référence dans la BDD
            this.fetchWasteReferenceValues();
            this.fetchCountersValueFromDB();
        }
    }
</script>
