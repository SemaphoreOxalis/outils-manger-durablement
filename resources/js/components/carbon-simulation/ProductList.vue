<template>
    <div>
        <h3>Produits</h3>
        <div class="flex col-4">
            <div class="left">
                <div v-for="category in categories"
                     :class="getClasses(category.id)"
                     :key="category.id"
                     @click="filterProdByCategory(category.id)">

                    {{ category.name }}

                </div>
            </div>

            <div class="middle">
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
            counter: Number,
            origins: Array,
        },
        data() {
            return {
                internalCounter: 0,
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
                this.internalCounter = this.counter;
                this.$emit('increment-counter');
                this.internalCounter++;
                return {
                    id: this.internalCounter,
                    name: product.name,
                    comment: product.comment,
                    unit: product.unit,
                    category: product.category,
                    origin: this.origins[2], // France par défaut
                    unit_id: product.unit_id,
                    category_id: product.category_id,
                    emissionFactor: product.emissionFactor,
                }
            },
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

.moving {
    background-color: #1f6fb2;
}

.category {
    cursor: pointer;
}

.selected {
    background-color: lime;
}

input {
    width: 50px;
}

select {
    display: inline-block;
    max-width: 200px;
}
</style>
