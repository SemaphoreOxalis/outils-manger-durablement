<template>
    <div>
        <h3 class="mb-4">Recettes de chef</h3>

        <div v-html="recipesText"></div>

        <router-view></router-view>
    </div>
</template>

<script>
import DataBase from "../../../helpers/DataBase";

export default {
    mixins: [
        DataBase
    ],
    data() {
        return {
            recipesText: `<div class="loader-spinner"></div>`,
        }
    },
    async mounted() {
        this.recipesText = await this.fetchContent('Carbone - Gestion des Recettes de Chef');
    },
}
</script>