<template>
    <div class="recipe-products w-50 mx-auto">
        <h1 class="text-center my-5">Version {{ version }}</h1>
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
            version: '',
            changelog: `<div class="loader-spinner"></div>`,
        }
    },
    async mounted() {
        this.version = window.App.version;
        this.changelog = await this.fetchContent('Changelog');
    },
}
</script>