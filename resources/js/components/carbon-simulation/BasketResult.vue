<template>
    <div class="basket-results">

        <div class="nav justify-content-around">
            <a class="nav-link active button alter"
               :href="'#' + basketId + '-carbon-results'"
               data-toggle="tab">Bilan CO2</a>
            <a class="nav-link button alter"
               :href="'#' + basketId + '-money-results'"
               data-toggle="tab">Bilan €</a>
        </div>

        <div class="tab-content">
            <div class="tab-pane active"
                 :id="basketId + '-carbon-results'">
                <p v-for="product in products">{{ product.name }} - {{ product.emissionFactor }} gCO2/{{ product.shortUnit }}</p>
            </div>
            <div class="tab-pane"
                 :id="basketId + '-money-results'">
                <p v-for="product in products">{{ product.name }} - {{ product.price }} €</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            products: Array,
            basketId: String,
        },
    }
</script>

<style>
.basket-results {
    width: available;
    border: 1px solid black;
}
</style>
