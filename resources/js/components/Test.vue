<template>
    <div class="flex">
        <div class="left">
            <div v-for="(product, index) in products">
                <span class="product">
                    {{ index }} : {{ product.name }} -
                    {{ product.category.name }} -
                    kgCO2e/{{ product.unit.unit }} -
                    {{ product.emissionFactor }}
                </span>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: []
            }
        },

        created() {
            this.fetch();
        },

        methods: {
            fetch() {
                axios.get('/api/test').then((response) => {
                    this.products = response.data;
                });
            }
        }
    }
</script>

<style>
    .flex {
        display: flex;
    }

    .left {
        border: 1px black solid;
    }

    .right {
        border: 1px black solid;
        min-height: 100px;
        width: auto;
        min-width: 500px;
    }

    .product {
        border: 1px black solid;
    }
</style>
