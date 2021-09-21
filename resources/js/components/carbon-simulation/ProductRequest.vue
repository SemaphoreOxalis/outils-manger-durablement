<template>
    <a class="button alter" id="request-product" href="https://airtable.com/shrUB5eYwhAswzN6j" target="_blank" @click="logProductRequest">
        <i class="icon icon-file-plus mr-2"></i>Demande de produit
    </a>
</template>

<script>
import DataBase from "../../helpers/DataBase";
export default {
    mixins: [
        DataBase,
    ],
    mounted() {
        events.$on('glow', this.glow);
        events.$on('unglow', this.unglow);
    },
    methods: {
        glow() {
            $('#request-product').addClass('glow');
        },
        unglow() {
            $('#request-product').removeClass('glow');
        },
        logProductRequest() {
            this.log('Bouton de requête de produit cliqué');
        }
    }
}
</script>