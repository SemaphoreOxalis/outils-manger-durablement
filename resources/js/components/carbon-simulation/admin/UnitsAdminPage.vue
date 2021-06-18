<template>
    <div class="mt-4">
        <h4>{{ tabs.units }}</h4>

        <p>{{ howTo.youCanDoStuffWith }} {{ howTo.units }}</p>
        <p><strong>{{ howTo.warning.warning }}</strong> {{ howTo.warning.deletingUnit }}</p>

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
            <button class="button alter" @click="addUnit">{{ okBtn }}</button>
        </div>

    </div>
</template>

<script>
import UnitsDataBase from "../../../helpers/carbon-simulation/database/UnitsDataBase";
import AdminPageText from "../../../../texts/AdminPageText";
import AdminPagesText from "../../../../texts/carbonSimulator/AdminPagesText";
export default {
    mixins: [
        UnitsDataBase,
        AdminPageText,
        AdminPagesText
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
