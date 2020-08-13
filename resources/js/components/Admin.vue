<template>
    <div class="mx-5">
        <div v-if="signedIn">
            <h1>Admin Panel</h1>
            <div v-for="value in values"
                 :key="value.id">

                {{ value.label }}
                <div class="form-group admin">
                    <input v-model="value.value" @change="update(value)" type="number" required
                           min="0" max="100" step="0.01"> <span> %</span>
                </div>
            </div>

        </div>
        <div v-else>
            Vous n'avez pas l'autorisation d'être ici
        </div>
    </div>
</template>

<script>
    import DataBase from "../helpers/DataBase";
    export default {

        mixins : [
            DataBase
        ],

        // initialisation des données utilisées par le composant
        data() {
            return {
                values: []
            }
        },

        // A la création du composent (i.e quand on arrive sur la "page")
        created() {

            // Va chercher les valeurs de référence dans la BDD
            this.fetchWasteReferenceValues();
        },

        // Valeurs calculées à la volée
        computed: {

            // L'utilisateur est-il bien authentifié ?
            signedIn() {
                return window.App.signedIn;
            }
        },
    }
</script>

<style>
    .admin input:invalid {
        background-color: lightpink;
    }
</style>
