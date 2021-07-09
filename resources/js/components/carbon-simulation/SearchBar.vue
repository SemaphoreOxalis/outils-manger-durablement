<template>
    <div class="autocomplete">
        <input type="search" name="query" id="search"
               class="input search custom-input browser-default"
               v-model="search"
               maxlength="256"
               placeholder="Taper le nom de votre produit"
               ref="searchBar"
               @input="onChange"
               @keydown.down="onArrowDown"
               @keydown.up="onArrowUp"
               @keydown.enter="onEnter">

        <ul class="autocomplete-results"
            v-show="isOpen">

            <li v-for="(result, index) in results"
                :key="index"
                @click="setResult(result)"
                class="autocomplete-result"
                :class="{ 'is-active': index === arrowCounter }">
                {{ result.name }}<small v-if="result.comment"> - {{ result.comment }}</small>
                <span v-if="result.type === 'recipe'" class="ml-5">⭐ Recette de chef</span>
            </li>
        </ul>
    </div>
</template>

<script>
    // from https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component

    import searchBar from "../../helpers/carbon-simulation/searchBar";
    export default {
        mixins: [
            searchBar
        ],
        props: {
            products: {
                type: Array,
                required: false,
                default: () => [],
            },
            specialProducts: {
                type: Array,
                required: false,
                default: () => [],
            },
            recipes: {
                type: Array,
                required: false,
                default: () => [],
            },
            focus: Boolean,
        },
        data() {
            return {
                search: '',
                chosen: {},
                results: [],
                isOpen: false,
                arrowCounter: -1,
            }
        },
        watch: {
            focus: function(newVal, oldVal) {
                if (newVal === true) {
                    this.setFocus();
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.handleClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.handleClickOutside);
        },
        methods: {
            onChange() {
                this.isOpen = true;
                this.results = this.searchWithSearchBar(this.products.concat(this.specialProducts).concat(this.recipes));
                this.$emit('search-complete', this.results);
            },
            setResult(result) {
                this.chosen = { ...result, id: 'chosen_product_' + result.id};
                this.search = '';
                this.isOpen = false;

                this.$emit('product-chosen', this.chosen);
            },
            onArrowDown() {
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter++;
                }
            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter--;
                }
            },
            onEnter() {
                if(this.arrowCounter === -1) {
                    return;
                }
                this.setResult(this.results[this.arrowCounter]);
                this.arrowCounter = -1;
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.search = '';
                    this.isOpen = false;
                    this.arrowCounter = -1;
                    this.$emit('lose-focus', this.chosen);
                }
            },
            setFocus() {
                let self = this;
                Vue.nextTick().then(function () {
                    self.$refs.searchBar.focus();
                });
            },
        }
    }
</script>

<style>

</style>
