<template>
    <div data-hover="" data-delay="0" class="dropdown" id="dropDownList">
        <button class="btn dropdown-toggle search-menu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ajouter un produit
        </button>

        <div class="dropdown-menu" id="productList">
            <div class="row">
                <div class="col-3">
                    <div v-for="category in cats"
                         :class="getClasses(category.id)"
                         :key="category.id"
                         @click="filterProdByCategory(category.id)">
                        <i v-if="category.id === 998" class="icon icon-hat-chef">&nbsp;</i>
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
                             :key="product.id"
                             @click="addProdToBasket(product)">
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
        recipes: Array,
        specialProducts: Array,
        selectedCategoryId: Number,
        selectedByCategory: Boolean,
        origins: Array,
        counters: Array,
        showRecipes: Boolean,
    },
    data() {
        return {
            search: '',
            cats: [],
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
                return (this.products.concat(this.specialProducts).concat(this.recipes)).filter(product => {
                    return product.category_id == this.selectedCategoryId;
                });
            }
            return this.products;
        }
    },
    mounted() {
        events.$on('clear-search-bar', this.clearSearchBar);

        let _self = document.body;
        $(document).on('click', function(e) {
            if ( $(e.target).closest('#dropDownList').length === 0) {
                _self.closable = true;
                document.getElementById('general-footer').click();
            }
        });
        $('#dropDownList')
            .on('click', '.category', function() {
                _self.closable = false;
            })
            .on('click', '.add-product', function() {
                _self.closable = true;
            })
            .on('click', '.product', function() {
                _self.closable = true;
            })
            .on('hide.bs.dropdown', function() {
                return _self.closable;
            })
            .on('hidden.bs.dropdown', () => {
                this.hideProducts();
            })
            .on('show.bs.dropdown', () => {
                this.showProducts();
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
        showProducts() {
            this.cats = JSON.parse(JSON.stringify(this.categories));
            if(this.showRecipes) {
                this.cats.push({name: 'Recettes de chef', id: 998});
                this.cats.push({name: '⭐ Spécial', id: 999});
                this.specialProducts.forEach((p) => {
                    p.category_id = 999;
                });
                this.recipes.forEach((r) => {
                    r.category_id = 998;
                });
            }
        },
        hideProducts() {
            this.cats = [];
        },
        addProductByDrag(product) {
            // events.$emit('get-internal-counters');
            // this.productListInternalCounter = this.getMaxCounter();
            // return {
            //     id: 'basket-product-' + (this.productListInternalCounter + 1),
            //     name: product.name,
            //     comment: product.comment,
            //     unit: product.unit,
            //     category: product.category,
            //     origin: this.origins[2], // France par défaut
            //     unit_id: product.unit_id,
            //     category_id: product.category_id,
            //     emissionFactor: product.emissionFactor,
            //     amount: 1,
            //     price: 1,
            // }
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
