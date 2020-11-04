<template>
    <div class="mt-4">
        <h4>{{ tabs.origins }}</h4>

        <p>{{ howTo.youCanDoStuffWith }} {{ howTo.origins }} {{ howTo.fieldsCantBeNull }}</p>

        <div v-for="origin in origins"
             :key="origin.id">

            <div class="form-group admin">
                <input v-model="origin.from" @change="updateOrigin(origin)" type="text" required
                       class="custom-input browser-default number-field">
                <input v-model="origin.distance" @change="updateOrigin(origin)" type="number" required min="0" step="1"
                       class="custom-input browser-default number-field">
                <input v-model="origin.carbonImpact" @change="updateOrigin(origin)" type="number" required min="0" step="0.00001"
                       class="custom-input browser-default number-field">
                <input v-model="origin.carbonImpactPerKg" @change="updateOrigin(origin)" type="number" required min="0" step="0.00001"
                       class="custom-input browser-default number-field">
                <a @click="deleteOrigin(origin.id)" class="trash-icon">
                    <i class="icon"></i>
                </a>
            </div>
        </div>

        <div class="form-group admin">
            <input v-model="newOrigin.from" type="text" required placeholder="ajouter une origine"
                   class="custom-input browser-default number-field">
            <input v-model="newOrigin.distance" type="number" required min="0" step="1"
                   class="custom-input browser-default number-field">
            <input v-model="newOrigin.carbonImpact" type="number" required min="0" step="0.00001"
                   class="custom-input browser-default number-field">
            <input v-model="newOrigin.carbonImpactPerKg" type="number" required min="0" step="0.00001"
                   class="custom-input browser-default number-field">
            <button class="button alter" @click="addOrigin">{{ okBtn }}</button>
        </div>

    </div>
</template>

<script>
import OriginsDataBase from "../../../helpers/carbon-simulation/database/OriginsDataBase";
import AdminPageText from "../../../../texts/AdminPageText";
import AdminPagesText from "../../../../texts/carbonSimulator/AdminPagesText";
export default {
    mixins: [
        OriginsDataBase,
        AdminPageText,
        AdminPagesText
    ],
    data() {
        return {
            origins: [],
            newOrigin: {
                from: '',
                distance: 0,
                carbonImpact: 0,
                carbonImpactPerKg: 0
            }
        }
    },
    created() {
        this.fetchOrigins();
    },
    methods: {
        refreshOrigins() {
            this.fetchOrigins();
        }
    }
}
</script>

<style>
.trash-icon {
    cursor: pointer;
}
</style>
