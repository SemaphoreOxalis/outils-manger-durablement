<template>
    <div>
        <add-product-pop-up v-if="showAddingModal"
                            :product="this.productAdded"
                            :origins="this.origins"
                            :selected-baskets="this.selectedBaskets"
                            ref="searchBar"
                            @add="addProductToBasket"
                            @exit-without-adding="showAddingModal = false">
        </add-product-pop-up>

        <div class="mb-3">
            <router-link :to="{ name: 'recipes-index'}" tag="span">
                <button class="button">Recettes de Chef</button>
            </router-link>

            <button class="button alter" title="Mode d'emploi" @click="startIntro"><i class="icon icon-info-circle mr-2" id="how-to"></i>Mode d'emploi</button>

            <product-request></product-request>
        </div>

        <div class="search-bar main-search">
            <product-list v-bind:categories="this.categories"
                          v-bind:origins="this.origins"
                          v-bind:products="this.products"
                          v-bind:recipes="this.recipesAsProducts"
                          v-bind:specialProducts="this.specialProducts"
                          v-bind:selected-category-id="this.selectedCategoryId"
                          v-bind:selected-by-category="this.selectedByCategory"
                          v-bind:counters="this.internalCounters"
                          v-bind:show-recipes="true"
                          @filter-products-by-category="filterProductsByCategory"
                          @deselect-category="deselectCategories"
                          @add-product-to-basket="showAddingProductModal">
            </product-list>

            <search-bar :products="this.products"
                        :recipes="this.recipesAsProducts"
                        :specialProducts="this.specialProducts"
                        :focus="this.focusOnSearchBar"
                        :placeholder="'Taper le nom d\'un produit ou d\'une recette'"
                        @search-complete="filterProductsBySearch"
                        @product-chosen="showAddingProductModal"
                        @lose-focus="loseFocusOnSearchBar">
            </search-bar>
        </div>

        <baskets-list v-bind:products="this.products"
                      v-bind:origins="this.origins"
                      v-bind:categories="this.categories"
                      v-bind:equivalences="this.equivalences"
                      v-bind:product-to-add="this.productToAddWithDetails"
                      @selected-baskets="setSelectedBaskets">
        </baskets-list>
    </div>

</template>

<script>
import searchBar from "../../helpers/carbon-simulation/searchBar";
import ProductsDataBase from "../../helpers/carbon-simulation/database/ProductsDataBase";
import CategoriesDataBase from "../../helpers/carbon-simulation/database/CategoriesDataBase";
import UnitsDataBase from "../../helpers/carbon-simulation/database/UnitsDataBase";
import OriginsDataBase from "../../helpers/carbon-simulation/database/OriginsDataBase";
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";
import DataBase from "../../helpers/DataBase";
import RecipesDataBase from "../../helpers/carbon-simulation/database/RecipesDataBase";
import recipesHelper from "../../helpers/carbon-simulation/recipesHelper";
import EquivalencesDataBase from "../../helpers/carbon-simulation/database/EquivalencesDataBase";
const SearchBar = () => import(
    /* webpackChunkName: "js/carbon-simulation/SearchBar" */
    './SearchBar'
    );
const ProductList = () => import(
    /* webpackChunkName: "js/carbon-simulation/ProductList" */
    './ProductList'
    );
const AddProductPopUp = () => import(
    /* webpackChunkName: "js/carbon-simulation/AddProductPopUp" */
    './AddProductPopUp'
    );
const BasketsList = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketsList" */
    './BasketsList'
    );
const ProductRequest = () => import(
    /* webpackChunkName: "js/carbon-simulation/ProductRequest" */
    './ProductRequest'
    );

export default {
    components: {
        SearchBar,
        ProductList,
        AddProductPopUp,
        BasketsList,
        ProductRequest,
    },
    mixins: [
        searchBar,
        ProductsDataBase,
        RecipesDataBase,
        CategoriesDataBase,
        UnitsDataBase,
        OriginsDataBase,
        EquivalencesDataBase,
        BasketSimulatorText,
        DataBase,
        recipesHelper,
    ],
    data() {
        return {
            products: [],
            specialProducts: [],
            recipes: [],
            recipesAsProducts: [],
            categories: [],
            units: [],
            origins: [],
            equivalences: [],

            selectedCategoryId: null,
            selectedByCategory: false,
            selectedBySearchBar: false,

            search: '',

            selectedBaskets: [],
            internalCounters: [],

            showAddingModal: false,
            productAdded: {},
            productToAddWithDetails: {},
            focusOnSearchBar: false,

            howTo: `<div class="loader-spinner"></div>`,
            introJs: {},
            introOptions: {},
            displayIntro: Boolean,
        }
    },

    created() {
        events.$on('internal-counters', this.setInternalCounters);
        this.fetchProducts();
        this.fetchRecipes();
        this.fetchSpecialProducts();
        this.fetchCategories();
        this.fetchUnits();
        this.fetchOrigins();
        this.fetchEquivalences();

        this.getInternalCounters();
        this.displayIntro = !localStorage.hasOwnProperty('baskets');
    },

    async mounted() {
        this.setProductIds();
        this.turnRecipesIntoProducts();
        this.introJs = require("intro.js");
        if(this.displayIntro) {
            let observer = new MutationObserver(() => {         // Only way to actually check if it's rendered without a dirty setTimeout ($nextTick fires too soon)
                if (document.contains(document.querySelector('.results-comment'))) {
                    observer.disconnect();
                    this.startIntro();
                }
            });
            observer.observe(document, {attributes: true, childList: true, subtree:true});
        }
    },

    methods: {
        showAddingProductModal(product) {
            this.getSelectedBaskets();
            if(!this.selectedBaskets.length) {
                alert('Aucune liste sélectionnée');
                return;
            }
            if(product.type === 'special') {
                events.$emit('insert-block');
                return;
            }
            if(product.type === 'recipe') {
                events.$emit('insert-recipe', product);
                return;
            }
            this.loseFocusOnSearchBar();
            this.productAdded = product;
            this.showAddingModal = true;
        },
        addProductToBasket(product) {
            this.showAddingModal = false;
            this.addProductToSelectedBaskets(product);
            this.focusOnSearchBar = true;
        },
        addProductToSelectedBaskets(product) {
            this.productToAddWithDetails = product;
        },

        getSelectedBaskets() {
            events.$emit('send-selected-baskets');
        },
        setSelectedBaskets(baskets) {
            this.selectedBaskets = baskets;
        },

        getInternalCounters() {
            events.$emit('get-internal-counters');
        },
        setInternalCounters(basketI, counter) {
            this.internalCounters[basketI] = counter;
        },
        setProductIds() {
            this.products.forEach(p => {
                p.productId = p.id;
            });
        },
        prepareIntro() {
            this.introOptions = {
                disableInteraction: true,
                nextLabel: "Suivant",
                prevLabel: "Retour",
                doneLabel: "J'ai compris",
                hidePrev: true,
                steps: [{
                    title: 'Mode d\'emploi',
                    intro: ''
                },
                    {
                        element: document.querySelector('.search-bar'),
                        position: 'bottom',
                        intro: 'Commencez par ajouter des produits ou des recettes à votre liste de courses via le menu ou en faisant une recherche'
                    },
                    {
                        element: document.querySelector('.basket-select'),
                        position: 'bottom',
                        intro: 'Les produits et les recettes seront ajoutées à toutes les listes sélectionnées'
                    },
                    {
                        element: document.querySelector('.product-item'),
                        position: 'right',
                        intro: 'Vous pouvez alors modifier les valeurs saisies précédemment'
                    },
                    {
                        element: document.querySelector('.results-container'),
                        position: 'right',
                        intro: 'Vous constaterez alors en temps réel votre bilan carbone résumé sous votre liste'
                    },
                    {
                        element: document.querySelector('.add-basket'),
                        position: 'bottom',
                        intro: 'Vous pouvez ajouter des listes'
                    },
                    {
                        element: document.querySelector('.basket-name-input'),
                        position: 'bottom',
                        intro: 'Les renommer'
                    },
                    {
                        element: document.querySelector('.copy-basket'),
                        position: 'bottom',
                        intro: 'Les dupliquer'
                    },
                    {
                        element: document.querySelector('.empty-basket'),
                        position: 'bottom',
                        intro: 'Les vider de leurs produits'
                    },
                    {
                        element: document.querySelector('.delete-basket'),
                        position: 'bottom',
                        intro: 'Ou les supprimer entièrement'
                    },
                    {
                        element: document.querySelector('.insert-block'),
                        position: 'bottom',
                        intro: 'Vous pouvez insérer dans votre liste un "bloc" que vous pourrez renommer et transformer en Recette de Chef'
                    },
                    {
                        element: document.querySelector('.guests-number'),
                        position: 'up',
                        intro: 'Vous pouvez ajuster le nombre de convives et bénéficier de statistiques par personne'
                    },
                    {
                        element: document.querySelector('.change-equivalence'),
                        position: 'up',
                        intro: 'Vous pouvez également choisir une équivalence carbone plus pertinente'
                    },
                    {
                        element: document.querySelector('.local-save'),
                        position: 'up',
                        intro: 'Ces boutons vous permettent de sauvegarder vos listes sur un fichier que vous pourrez alors stocker sur votre ordinateur ou partager'
                    },
                    {
                        element: document.querySelector('.export-baskets'),
                        position: 'up',
                        intro: 'Enfin, cet outil vous donne la possibilité d\'exporter vos listes au format tableur, qui contiendra tous les détails'
                    },
                    {
                        title: 'C\'est terminé !',
                        intro: 'Nous espérons que cet outil vous sera utile. N\'hésitez pas à nous faire part de vos retours 👍'
                    }]
            };
            this.introJs().setOptions(this.introOptions).start();
        },
        startIntro() {
            $('#body-basket-1-prod-1').addClass('show');
            this.prepareIntro();
        },
    }
}
</script>
