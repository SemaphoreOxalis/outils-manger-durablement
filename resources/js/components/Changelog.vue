<template>
    <div class="recipe-products w-50 mx-auto">
        <div v-html="changelog"></div>
    </div>
</template>

<script>
import DataBase from "../helpers/DataBase";
export default {
    mixins: [
        DataBase,
    ],
    data() {
        return {
            changelog: `<div class="loader-spinner"></div>`,
        }
    },
    async mounted() {
        this.changelog = await this.fetchContent('Changelog');
    },
}
</script>