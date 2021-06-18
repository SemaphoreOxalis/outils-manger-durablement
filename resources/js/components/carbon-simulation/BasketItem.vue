<template>
    <div class="basket">
        <div class="basket-header">
            <div class="basket-select custom-control custom-checkbox">
                <input type="checkbox"
                       v-model="basket.isSelected"
                       class="custom-control-input"> <label class="custom-control-label">{{ add_to_this_basket }}</label>
            </div>
            <div class="basket-name">
                <input v-model="basket.name"
                       @change="saveBasket"
                       class="input custom-input browser-default"
                       type="text"
                       required>
                <a @click="copyBasket" class="btn-ico info-bubble" title="Dupliquer cette liste"></a>
            </div>
            <div class="basket-toolbox">
                <input type="search"
                       v-model="search"
                       @input="searchInBasket"
                       class="input tool custom-input browser-default"
                       maxlength="256"
                       name="query"
                       placeholder="chercher dans la liste">
                <a v-if="containsProducts" @click="doStuff" class="btn-ico alt tool info-bubble" title="Modifier cette liste"></a>
                <a v-if="containsProducts" @click="clearBasket" class="btn-ico alt tool info-bubble pb-1" title="Vider cette liste"><strong>✖</strong></a>
                <a @click="deleteBasket" class="btn-ico alt tool info-bubble" title="Supprimer cette liste"></a>
            </div>
        </div>

        <draggable v-model="basket.products"
                   ref="list"
                   class="dragArea basket--products-container my-custom-scrollbar my-custom-scrollbar-primary"
                   :group="{ name: 'draggableProducts', pull: false }"
                   @change="saveBasket"
                   filter=".ignore-draggable"
                   :preventOnFilter="false"
                   :animation="150">
            <basket-product v-for="(product, i) in filteredProducts"
                            v-bind:key="product.id"
                            v-bind:product="product"
                            v-bind:basket-id="basket.id"
                            v-bind:index="i"
                            v-bind:origins="origins"
                            @save-changes="saveBasket"
                            @remove-product="removeProduct">
            </basket-product>
        </draggable>

        <basket-result v-if="containsProducts"
                       :index="index"
                       :basket="basket"
                       :is-first="isFirst"
                       :previous-basket="previousBasket"
                       :first-basket="firstBasket"
                       :compare-to-previous-basket="compareToPreviousBasket"
                       :products="basket.products"
                       :categories="categories"
                       :basket-id="basket.id">
        </basket-result>

    </div>

</template>

<script>
import searchBar from "../../helpers/carbon-simulation/searchBar";
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";
import DataBase from "../../helpers/DataBase";

const BasketProduct = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketProduct" */
    './BasketProduct'
    );
const BasketResult = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketResult" */
    './BasketResult'
    );
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

export default {
    components: {
        BasketProduct,
        BasketResult,
        draggable
    },
    mixins: [
        searchBar,
        BasketSimulatorText,
        DataBase
    ],
    props: {
        basket: Object,
        index: Number,
        origins: Array,
        categories: Array,
        productToAdd: Object,
        previousBasket: Object,
        firstBasket: Object,
        compareToPreviousBasket: Boolean,
    },
    data() {
        return {
            search: '',
        }
    },
    watch: {
        productToAdd(newProduct) {
            if (this.basket.isSelected) {
                this.addProduct(newProduct);
            }
        }
    },
    computed: {
        filteredProducts: function () {
            if (this.search) {
                return this.searchWithSearchBar(this.basket.products);
            }
            return this.basket.products;
        },
        productCounter: function () {
            if (this.basket.products.length > 0) {
                return Math.max(...this.basket.products.map(product => {
                    return product.id.substring(5); // "prod-" id prefix is 5 characters long
                }));
            } else {
                return 0;
            }
        },
        containsProducts: function () {
            return this.basket.products.length > 0;
        },
        isFirst() {
            return this.index === 0;
        },
    },
    created() {
        events.$on('get-internal-counters', this.sendInternalCounter);
    },
    mounted() {
        this.sendInternalCounter();
    },
    methods: {
        addProduct(product) {
            let tempProd = {...product};
            tempProd.id = ('prod-' + (this.productCounter + 1));
            this.basket.products.push(tempProd);
            this.sendInternalCounter();
            this.incrementProductCounter();
            this.saveBasket();
            this.scrollToBottom();
        },
        removeProduct(productIndex) {
            this.basket.products.splice(productIndex, 1);
            this.saveBasket();
        },

        copyBasket() {
            this.$emit('copy-basket', this.basket, this.index);
        },
        deleteBasket() {
            this.$emit('delete-basket', this.basket, this.index, 'delete');
        },
        clearBasket() {
            this.$emit('clear-basket', this.basket, this.index, 'clear');
        },
        saveBasket() {
            this.$emit('save-baskets');
        },
        doStuff() {
            this.$emit('do-stuff', this.index);
        },

        searchInBasket() {
            this.$emit('search-in-basket', this.search, this.index);
        },

        sendInternalCounter() {
            events.$emit('internal-counters', this.index, this.productCounter);
        },
        scrollToBottom() {
            // takes a while to actually update DOM on add
            setTimeout(() => {
                this.$refs.list.$el.scrollTo({
                    top: this.$refs.list.$el.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
        },
    }
}
</script>
