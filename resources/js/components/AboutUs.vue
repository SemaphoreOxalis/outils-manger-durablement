<template>
    <div v-html="about"></div>
</template>

<script>
import DataBase from "../helpers/DataBase";
export default {
    mixins: [
        DataBase
    ],
    data() {
        return {
            about: ''
        }
    },
    async mounted() {
        this.about = await this.fetchContent('Mentions Légales');
    }
}
</script>
