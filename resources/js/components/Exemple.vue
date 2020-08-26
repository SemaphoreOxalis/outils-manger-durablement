<template>
    <div>
        <h1>{{ greeting }} World !</h1>
        <composant-enfant></composant-enfant>
    </div>
</template>

<script>
    import ComposantEnfant from './ComposantEnfant.vue'

    export default {
        components: {
            ComposantEnfant
        },
        data() {
            return {
                greeting: 'Hello'
            }
        },
        created() {
            this.faitQuelqueChose();
        },
        methods: {
            faitQuelqueChose() {
                //
            }
        }
    }
</script>

<style scoped>
    .h1 {
        color: papayawhip;
    }
</style>
