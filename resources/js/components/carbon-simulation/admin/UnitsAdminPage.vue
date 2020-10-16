<template>
    <div class="mt-4">
        <h4>Unités</h4>

        <p>ici, vous pouvez renommer, ajouter ou supprimer des unités</p>
        <p><strong>ATTENTION :</strong> supprimer une unité supprimera tous les produits associés</p>

        <div v-for="unit in units"
             :key="unit.id">

            <div class="form-group admin">
                <input v-model="unit.unit" @change="updateUnit(unit)" type="text" required
                       class="custom-input browser-default number-field">
                <input v-model="unit.shortUnit" @change="updateUnit(unit)" type="text" required
                       class="custom-input browser-default number-field">
                <a @click="deleteUnit(unit.id)" class="trash-icon">
                    <i class="icon"></i>
                </a>
            </div>
        </div>

        <div class="form-group admin">
            <input v-model="newUnit.unit" type="text" required placeholder="ajouter une unité"
                   class="custom-input browser-default number-field">
            <input v-model="newUnit.shortUnit" type="text" required placeholder="ajouter une unité"
                   class="custom-input browser-default number-field">
            <button class="button alter" @click="addUnit">OK</button>
        </div>

    </div>
</template>

<script>
import UnitsDataBase from "../../../helpers/carbon-simulation/database/UnitsDataBase";
export default {
    mixins: [
        UnitsDataBase
    ],
    data() {
        return {
            units: [],
            newUnit: {
                unit: '',
                shortUnit: '',
            },
        }
    },
    created() {
        this.fetchUnits();
    },
    methods: {
        refreshUnits() {
            this.fetchUnits();
        }
    }
}
</script>

<style>
.trash-icon {
    cursor: pointer;
}
</style>
