<template>
    <div>
        <div v-html="title"></div>
        <router-view></router-view>
    </div>
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
            this.title = await this.fetchContent('Gaspi - Titre');
        }
    }
</script>
