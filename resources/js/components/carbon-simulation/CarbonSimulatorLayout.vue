<template>
    <main class="container">
        <div v-html="title"></div>
        <router-view></router-view>
    </main>
</template>

<script>
import DataBase from "../../helpers/DataBase";
export default {
    mixins: [
        DataBase
    ],
    data() {
        return {
            title: ''
        }
    },
    async mounted() {
        this.title = await this.fetchContent('Carbone - Titre');
    }
}
</script>
