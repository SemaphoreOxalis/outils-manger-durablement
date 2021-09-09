<template>
    <button class="button alter" id="request-product"><i class="icon icon-plus mr-2"></i>Demande de produit</button>
</template>

<script>
export default {
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
        }
    }
}
</script>