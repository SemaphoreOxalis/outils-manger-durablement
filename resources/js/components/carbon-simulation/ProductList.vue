<template>
    <div>
        <h3>Produits</h3>
        <div class="row">
            <div class="left col-4">
                <div v-for="category in categories"
                     :class="getClasses(category.id)"
                     :key="category.id"
                     @click="filterProdByCategory(category.id)">

                    {{ category.name }}

                </div>
            </div>

            <div class="middle col-8">
                <draggable v-model="filteredProducts"
                           class="dragArea list-group"
                           :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                           :sort="false"
                           chosenClass="moving"
                           :clone="addProductByDrag">

                    <div v-for="product in filteredProducts"
                         class="list-group-item product"
                         :key="product.id">
                        {{ product.name }}
                        <small>{{ product.comment }}</small>
                        <button @click="addProdToBasket(product)">+</button>
                    </div>

                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );
export default {
    components: {
        draggable
    },
    props: {
        categories: Array,
        filteredProducts: Array,
        selectedCategoryId: Number,
        selectedByCategory: Boolean,
        selectedBySearchBar: Boolean,
        search: String,
        origins: Array,
        counters: Array,
    },
    data() {
        return {
            productListInternalCounter: 0,
        }
    },
    methods: {
        getClasses(categoryId) {
            return [
                'list-group-item',
                'category',
                categoryId === this.selectedCategoryId ? 'selected' : ''
            ];
        },
        filterProdByCategory(categoryId) {
            this.$emit('filter-products-by-category', categoryId);
        },
        addProdToBasket(product) {
            this.$emit('add-product-to-basket', product);
        },
        addProductByDrag(product) {
            events.$emit('get-internal-counters');
            this.productListInternalCounter = this.getMaxCounter();
            console.log(this.productListInternalCounter);
            return {
                id: this.productListInternalCounter + 1,
                name: product.name,
                comment: product.comment,
                unit: product.unit,
                category: product.category,
                origin: this.origins[2], // France par défaut
                unit_id: product.unit_id,
                category_id: product.category_id,
                emissionFactor: product.emissionFactor,
                amount: 0,
                price: 0,
            }
        },
        getMaxCounter() {
            if (this.counters.length > 0) {
                return Math.max(...this.counters);
            } else {
                return 0;
            }
        }
    }
}
</script>

<style>
.left {
    border: 1px black solid;
    padding: 2px;
}

.middle {
    border: 1px black solid;
    padding: 2px;
}

.product {
    cursor: grab;
}

.category {
    cursor: pointer;
}

.selected,
.moving {
    background-color: var(--main-color-darker);
    color: var(--light-grey);
}

input {
    width: 50px;
}

select {
    display: inline-block;
    max-width: 200px;
}
</style>
