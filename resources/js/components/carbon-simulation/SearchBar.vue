<template>
    <div class="autocomplete">
        <input type="text"
               v-model="search"
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
                {{ result.name }} - <small>{{ result.comment }}</small>
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
            }
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
        mounted() {
            document.addEventListener('click', this.handleClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.handleClickOutside);
        },
        methods: {
            onChange() {
                this.isOpen = true;
                this.results = this.searchWithSearchBar();
                this.$emit('search-complete', this.results);
            },
            setResult(result) {
                this.chosen = result;
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
                this.setResult(this.results[this.arrowCounter]);
                this.arrowCounter = -1;
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            },
        }
    }
</script>

<style>
.autocomplete {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    /* height: 120px; */
    overflow: auto;
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
}

.autocomplete-result:hover {
    background-color: var(--main-color-darker);
    color: var(--light-grey);
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
    background-color: var(--main-color-darker);
    color: var(--light-grey);
}
</style>
