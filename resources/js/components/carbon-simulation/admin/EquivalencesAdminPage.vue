<template>
    <div class="mt-4">
        <h4>Equivalences</h4>

        <p>ici, vous pouvez renommer, ajouter ou supprimer des équivalences</p>

        <div class="my-2 d-flex justify-content-around pr-3">
            <p><strong>Nom</strong></p>
            <p><strong>1 kg de CO2 c'est</strong></p>
            <p><strong>Unité</strong></p>
            <p><strong>Source</strong></p>
        </div>

        <div v-for="equivalence in equivalences"
             :key="equivalence.id">

            <div class="form-group admin">
                <input v-model="equivalence.name" @change="updateEquivalence(equivalence)" type="text" required
                       class="custom-input browser-default number-field">
                <input v-model="equivalence.rate" @change="updateEquivalence(equivalence)" type="number" required min="0" step="0.001"
                       class="custom-input browser-default number-field">
                <input v-model="equivalence.unit" @change="updateEquivalence(equivalence)" type="text" required
                       class="custom-input browser-default number-field">
                <input v-model="equivalence.source" @change="updateEquivalence(equivalence)" type="text"
                       class="custom-input browser-default number-field">
                <a @click="deleteEquivalence(equivalence.id)" class="trash-icon">
                    <i class="icon"></i>
                </a>
            </div>
        </div>

        <div class="form-group admin">
            <input v-model="newEquivalence.name" type="text" required placeholder="ajouter une équivalence"
                   class="custom-input browser-default number-field">
            <input v-model="newEquivalence.rate" type="number" required min="0.001" step="0.001"
                   class="custom-input browser-default number-field">
            <input v-model="newEquivalence.unit" type="text" required
                   class="custom-input browser-default number-field">
            <input v-model="newEquivalence.source" type="text"
                   class="custom-input browser-default number-field">
            <button class="button alter" @click="addEquivalence">OK</button>
        </div>
    </div>
</template>

<script>
import EquivalencesDataBase from "../../../helpers/carbon-simulation/database/EquivalencesDataBase";

export default {
    mixins: [
        EquivalencesDataBase,
    ],
    data() {
        return {
            equivalences: [],
            newEquivalence: {
                name: '',
                rate: 0,
                unit: '',
                source: ''
            }
        }
    },
    created() {
        this.fetchEquivalences();
    },
    methods: {
        refreshEquivalences() {
            this.fetchEquivalences();
        }
    }
}
</script>
