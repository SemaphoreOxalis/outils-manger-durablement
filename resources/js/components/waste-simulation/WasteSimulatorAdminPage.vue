<template>
    <div class="mt-4">
        <p class="mb-4"><strong>{{ here_you_can_edit_values }}</strong></p>

        <h4>{{ waste_ref_values.title }}</h4>

        <div v-for="value in values"
             :key="value.id">

            <label>{{ value.label }}</label>
            <div class="form-group admin">
                <input v-model="value.value" @change="updateRefValue(value)" type="number" required
                       min="0" max="100" step="0.01" class="custom-input browser-default number-field"> <span> %</span>
            </div>
        </div>
    </div>
</template>

<script>
import AdminPageText from "../../../texts/AdminPageText";
// import des fonctions utiles regroupées dans des fichiers 'helpers'
import DataBase from "../../helpers/DataBase";
import WasteDataBase from "../../helpers/waste-simulation/WasteDataBase";

export default {

    // déclaration de dépendance à ces bibliothèques de fonctions
    mixins: [
        AdminPageText,
        DataBase,
        WasteDataBase
    ],

    // initialisation des données utilisées par le composant
    data() {
        return {
            values: []
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
    }
}
</script>
