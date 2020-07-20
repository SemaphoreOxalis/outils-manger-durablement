<template>
    <div class="container">
        <div class="row">
            <div class="left col-5">
                <h3>Produits</h3>
                <div v-for="(product, index) in products">
                <span class="product">
                    {{ index }} : {{ product.name }}
                </span>
                </div>
            </div>
            <div class="right col-5">
                <h3>Liste de courses</h3>

            </div>
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
    }

    .product {
        border: 1px black solid;
    }
</style>
