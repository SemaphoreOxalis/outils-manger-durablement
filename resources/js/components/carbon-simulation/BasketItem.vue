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
                <button class="button" @click="insertBlock">Insérer un bloc</button>
                <a v-if="contains('prod')" @click="doStuff" class="btn-ico alt tool" title="Modifier cette liste"></a>
                <a v-if="contains('prod')" @click="clearBasket" class="btn-ico alt tool" title="Vider cette liste"><i class="icon icon-times-circle"></i></a>
                <a @click="deleteBasket" class="btn-ico alt tool" title="Supprimer cette liste"></a>
            </div>
        </div>

        <draggable v-model="basket.products"
                   ref="list"
                   class="dragArea basket--products-container my-custom-scrollbar my-custom-scrollbar-primary"
                   :group="{ name: 'draggableProducts', pull: false }"
                   @change="saveBasket"
                   :move="checkIfMovable"
                   filter=".ignore-draggable"
                   :preventOnFilter="false"
                   :animation="150">
            <basket-product v-for="(product, i) in basket.products"
                            v-bind:key="product.id"
                            v-bind:product="product"
                            v-bind:basket-id="basket.id"
                            v-bind:index="i"
                            v-bind:origins="origins"
                            v-bind:isInBlock="isInBlock(i)"
                            v-bind:isEmpty="isEmpty(i)"
                            v-bind:isFirstBlockTitle="isFirstBlockTitle(i)"
                            v-bind:isLastBlockTitle="isLastBlockTitle(i)"
                            @save-changes="saveBasket"
                            @remove-product="removeProduct"
                            @move-block-up="moveBlockUp"
                            @move-block-down="moveBlockDown"
                            @make-recipe="makeRecipe"
                            @empty-block="emptyBlock">
            </basket-product>
        </draggable>

        <basket-result v-if="contains('prod')"
                       :index="index"
                       :basket="basket"
                       :is-first="isFirst"
                       :previous-basket="previousBasket"
                       :first-basket="firstBasket"
                       :compare-to-previous-basket="compareToPreviousBasket"
                       :products="basket.products"
                       :categories="categories"
                       :basket-id="basket.id"
                       :blocks="blocks">
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
        isSelected: Boolean,
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
            // if (this.search) {
            //     return this.searchWithSearchBar(this.basket.products);
            // }
            return this.basket.products;
        },
        productCounter: function () {
            if (this.contains('prod')) {
                return Math.max(...this.basket.products.map(product => {
                    if(product.type === 'prod') {
                        return product.id.substring(5); // "prod-" id prefix is 5 characters long
                    } else { return 0; }
                }));
            } else {
                return 0;
            }
        },
        blockCounter: function () {
            if (this.contains('special')) {
                return Math.max(...this.basket.products.map(product => {
                    if(product.type === 'special') {
                        return product.id.substring(12); // "block-start-" and "block-fnish-" id prefixes are 12 characters long
                    } else { return 0; }
                }));
            } else {
                return 0;
            }
        },
        isFirst() {
            return this.index === 0;
        },
        blocks() {
            return this.getBlocksIndexes();
        },
    },
    created() {
        events.$on('get-internal-counters', this.sendInternalCounter);
        events.$on('insert-block', this.insertBlock);
        events.$on('insert-recipe', this.insertRecipe);
    },
    mounted() {
        this.sendInternalCounter();
    },
    methods: {
        getProductByIx(index) {
            return this.basket.products[index];
        },
        addProduct(product, prepended) {
            if(product.type === 'special') {
                this.basket.products.unshift(product);
            } else {
                let tempProd = {...product};
                if(!tempProd.price) {
                    tempProd.price = 0;
                }
                tempProd.id = ('prod-' + (this.productCounter + 1));
                prepended ? this.basket.products.unshift(tempProd) : this.basket.products.push(tempProd);
                if (!prepended) {
                    this.scrollToBottom();
                }
                this.sendInternalCounter();
                this.incrementProductCounter();
            }
            this.saveBasket();
        },
        removeProduct(productIndex) {
            if(this.basket.products[productIndex].id.includes('start')) {
                this.basket.products.splice(this.getCorrespondingIndex(this.basket.products[productIndex]), 1);
            }
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
            this.saveBasket();
        },
        saveBasket() {
            this.$emit('save-baskets');
        },
        doStuff() {
            this.$emit('do-stuff', this.index);
        },
        contains(type) {
            let result = false;
            if(this.basket.products) {
                this.basket.products.forEach((p) => {
                    if(p.type === type) {
                        result = true;
                    }
                });
            }
            return result;
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
            }, 200);
        },

        insertRecipe(recipe) {
            let id = this.blockCounter + 1;
            if(this.isSelected && this.blocks.length < 11) {
                this.addProduct({ // in reverse order because they're prepended
                    id: 'block-fnish-' + id,
                    name: 'Fin du bloc ' + id,
                    type: 'special',
                });
                recipe.products.forEach(p => {
                    this.addProduct(p, true);
                })
                this.addProduct({
                    id: 'block-start-' + id,
                    name: recipe.name,
                    comment: recipe.comment,
                    type: 'special',
                });
            }
        },

        // BLOCKS STUFF
        checkIfMovable(e, originalE) {
            // Special Logic for blocks
            if(e.draggedContext.element.type === 'special') {
                let dragged = e.draggedContext.element;
                let correspondingIndex = this.getCorrespondingIndex(dragged);
                let prevBlock = this.previousBlockIndex(e.draggedContext.index);
                let nextBlock = this.nextBlockIndex(e.draggedContext.index);

                // prevent block-end before block-start
                if ((dragged.id.includes('start') && e.draggedContext.futureIndex >= correspondingIndex)
                    || (dragged.id.includes('fnish') && e.draggedContext.futureIndex <= correspondingIndex)) {
                    return false;
                }

                // prevent blocks entanglements
                if ((dragged.id.includes('start') && prevBlock === 0)
                    || (dragged.id.includes('fnish') && nextBlock === this.basket.products.length - 1)) {
                    return true;
                }
                if ((dragged.id.includes('start') && e.draggedContext.futureIndex <= prevBlock)
                    || (dragged.id.includes('fnish') && e.draggedContext.futureIndex >= nextBlock)) {
                    return false;
                }
            }
        },
        isFirstBlockTitle(index) {
            if(this.blocks.length) {
                return index === this.blocks[0][0];
            }
            return null;
        },
        isLastBlockTitle(index) {
            if(this.blocks.length) {
                return index === this.blocks[this.blocks.length - 1][0];
            }
            return null;
        },
        insertBlock() {
            let id = this.blockCounter + 1;
            if(this.isSelected && this.blocks.length < 11) {
                this.addProduct({ // in reverse order because they're prepended
                    id: 'block-fnish-' + id,
                    name: 'Fin du bloc ' + id,
                    type: 'special',
                });
                this.addProduct({
                    id: 'block-start-' + id,
                    name: 'Titre du bloc ' + id,
                    type: 'special',
                });
            }
        },
        getBlockIndex(type, number) {
            for (let i = 0; i < this.basket.products.length; i++) {
                if (this.basket.products[i].id.endsWith('block-' + type + '-' + number)) {
                    return i;
                }
            }
        },
        getBlocksIndexes() {
            let blocks  = [];
            for (let i = 0; i < this.basket.products.length; i++) {
                if (this.basket.products[i].id.includes('block-start')) {
                    blocks.push([i, this.getCorrespondingIndex(this.basket.products[i]), this.getBlockNumber(this.basket.products[i])]);
                }
            }
            return blocks;
        },
        getCorrespondingIndex(element) {
            return element.id.includes('start') ? this.getBlockIndex('fnish', this.getBlockNumber(element)) : this.getBlockIndex('start', this.getBlockNumber(element));
        },
        isInBlock(index) {
            let result = -1;
            if (!this.blocks.length) {
                result = -1;
            } else {
                this.blocks.forEach((block) => {
                    if (block[0] < index && index < block[1]) {
                        result =  Number(block[2]);
                    }
                });
            }
            this.basket.products[index].isInBlock = result;
            return result
        },
        isEmpty(blockIndex) {
            return this.getCorrespondingIndex(this.basket.products[blockIndex]) - blockIndex === 1;
        },
        previousBlockIndex(index) {
            let elmts = [];
            let found = 0;
            if(index === 0 || index === 1){
                return 0;
            }
            for (let i = index - 1; i >= 0; i--) {
                elmts.push({id: this.basket.products[i].id, index: i});
            }
            found = elmts.find(e => e.id.includes('fnish'));
            return found ? found.index : 0;
        },
        nextBlockIndex(index) {
            let elmts = [];
            let found = this.basket.products.length - 1;
            if(index === (this.basket.products.length - 1) || index === (this.basket.products.length - 2)){
                return this.basket.products.length - 1;
            }
            for (let i = index + 1; i <= this.basket.products.length - 1; i++) {
                elmts.push({id: this.basket.products[i].id, index: i});
            }
            found = elmts.find(e => e.id.includes('start'));
            return found ? found.index : this.basket.products.length - 1;
        },
        getBlockNumber(block) {
            return block.id.substring(12);
        },
        emptyBlock(blockStart) {
            let end = this.getCorrespondingIndex(blockStart);
            let begin = this.getCorrespondingIndex(this.basket.products[end]);
            for(let i = end - 1; i > begin; i--) {
                this.basket.products.splice(i, 1);
            }
            this.saveBasket();
        },
        moveBlockUp(index) {
            let insertPlace = this.getCorrespondingIndex(this.getProductByIx(this.previousBlockIndex(index)));
            let blockLength = (this.getCorrespondingIndex(this.getProductByIx(index)) - index) + 1;
            let block = this.basket.products.splice(index, blockLength);
            this.basket.products.splice(insertPlace, 0, ...block);
            this.saveBasket();
        },
        moveBlockDown(index) {
            let insertPlace = this.getCorrespondingIndex(this.getProductByIx(this.nextBlockIndex(index))) + 1;
            let blockLength = (this.getCorrespondingIndex(this.getProductByIx(index)) - index) + 1;
            let block = this.basket.products.splice(index, blockLength);
            this.basket.products.splice(insertPlace - blockLength, 0, ...block);
            this.saveBasket();
        },
        makeRecipe(blockStart) {
            let end = this.getCorrespondingIndex(blockStart);
            let begin = this.getCorrespondingIndex(this.basket.products[end]);
            let p = [];
            for(let i = begin + 1; i < end; i++) {
                p.push(this.basket.products[i]);
            }
            let rec = {
                name: blockStart.name,
                products: p,
            };
            this.$router.push({name: 'recipe-create', params : { recipe: rec}});
        }
    }
}
</script>
