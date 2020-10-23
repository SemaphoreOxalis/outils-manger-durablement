<template>
    <div data-hover="" data-delay="0" class="dropdown" id="dropDownList">
        <button class="btn dropdown-toggle search-menu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ajouter un produit
        </button>

        <div class="dropdown-menu" id="productList">
            <div class="row">
                <div class="col-3">
                    <div v-for="category in categories"
                         :class="getClasses(category.id)"
                         :key="category.id"
                         @click="filterProdByCategory(category.id)">
                        {{ category.name }}
                    </div>
                </div>

                <div class="col-9">
                    <draggable v-model="filteredProducts"
                               class="dragArea list-group grid-list"
                               :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                               :sort="false"
                               chosenClass="moving"
                               :clone="addProductByDrag">

                        <div v-for="product in filteredProducts"
                             class="list-group-item product"
                             :key="product.id">
                                {{ product.name }} <small>{{ product.comment }}</small>
                            <button @click="addProdToBasket(product)" class="btn-ico add-product" data-toggle="modal"></button>
                        </div>

                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from "../../helpers/carbon-simulation/searchBar";
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );
export default {
    components: {
        draggable
    },
    mixins: [
        searchBar
    ],
    props: {
        categories: Array,
        products: Array,
        selectedCategoryId: Number,
        selectedByCategory: Boolean,
        origins: Array,
        counters: Array,
    },
    data() {
        return {
            search: '',
            productListInternalCounter: 0,
        }
    },
    computed: {
        filteredProducts() {
            if(this.search) {
                this.$emit('deselect-category');
                return this.searchWithSearchBar(this.products);
            }
            if(this.selectedByCategory && this.selectedCategoryId != null) {
                return this.products.filter(product => {
                    return product.category.id === this.selectedCategoryId;
                });
            }

            return this.products;
        }
    },
    mounted() {
        console.log('mounted');
        events.$on('clear-search-bar', this.clearSearchBar);

        let _self = document.body;
        $(document).on('click', function(e) {
            if ( $(e.target).closest('#dropDownList').length === 0) {
                console.log('hey');
                _self.closable = true
            }
        });
        $('#dropDownList')
            .on('click', '.category', function() {
                _self.closable = false
            })
            .on('click', '.add-product', function() {
                _self.closable = true
            })
            .on('hide.bs.dropdown', function() {
                return _self.closable
            });
    },
    methods: {
        getClasses(categoryId) {
            return [
                'dropdown-item',
                'list-group-item',
                'category',
                categoryId === this.selectedCategoryId ? 'active' : ''
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
            return {
                id: 'basket-product-' + (this.productListInternalCounter + 1),
                name: product.name,
                comment: product.comment,
                unit: product.unit,
                category: product.category,
                origin: this.origins[2], // France par défaut
                unit_id: product.unit_id,
                category_id: product.category_id,
                emissionFactor: product.emissionFactor,
                amount: 1,
                price: 1,
            }
        },
        clearSearchBar() {
            this.search = '';
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
/*.left {*/
/*    border: 1px black solid;*/
/*    padding: 2px;*/
/*}*/

/*.middle {*/
/*    border: 1px black solid;*/
/*    padding: 2px;*/
/*}*/

/*.product {*/
/*    cursor: grab;*/
/*}*/

/*.category {*/
/*    cursor: pointer;*/
/*}*/

/*.selected,*/
/*.moving {*/
/*    background-color: var(--main-color-darker);*/
/*    color: var(--light-grey);*/
/*}*/

/*input {*/
/*    width: 50px;*/
/*}*/

/*select {*/
/*    display: inline-block;*/
/*    max-width: 200px;*/
/*}*/
</style>
