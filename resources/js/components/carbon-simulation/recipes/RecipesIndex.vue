<template>
    <div>
        <div v-for="recipe in recipes"
             :key="recipe.id"
             class="w-75 border-top border-secondary">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center"><strong>{{ recipe.name }} &nbsp; </strong> {{ recipe.description }}</div>
                <div class="d-flex">
                    <a class="btn-ico alt tool"
                       data-toggle="collapse"
                       :data-target="'#body-' + recipe.id"
                       aria-expanded="false"
                       :aria-controls="'body-' + recipe.id"
                       @click="toggleFullRecipe(recipe.id)">
                        <i :id="'collapse-icon-' + recipe.id" class="icon icon-angle-down"></i>
                    </a>
                    <a @click="" class="btn-ico alt tool pb-1" title="Modifier"><i class="icon ml-2"></i></a>
                    <a @click="" class="btn-ico alt tool" title="Supprimer"></a>
                </div>
            </div>
            <div :class="'collapse w-75 collapse-' + recipe.id"
                 :id="'body-' + recipe.id">
                <ul>
                    <div v-for="product in recipe.products" :key="recipe.id+ '-' + product.id" class="ml-3 d-flex">
                        <p class="w-50"><strong>{{ product.name }} &nbsp; </strong> {{ product.comment }}</p>
                        <p>{{ product.pivot.amount }} {{ product.unit.shortUnit }} - {{ product.pivot.price }} € - {{ product.pivot.origin }}</p>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import RecipesDataBase from "../../../helpers/carbon-simulation/database/RecipesDataBase";
import ProductsDataBase from "../../../helpers/carbon-simulation/database/ProductsDataBase";
export default {
    mixins: [
        RecipesDataBase,
        ProductsDataBase
    ],
    data() {
        return {
            recipes: [],
            products: [],
        }
    },
    computed: {

    },
    created() {
        this.fetchRecipes();
        this.fetchProducts();
    },
    methods: {
        collapseClass: function () {
            return '.collapse-' + this.product.id;
        },
        collapseIconId: function () {
            return '#collapse-icon-' + this.basketId + '-' + this.product.id;
        },
        toggleFullRecipe(id) {
            let collapseClass = '.collapse-' + id;
            let collapseIconId = '#collapse-icon-' + id;

            $(collapseClass).on('show.bs.collapse', function () {
                $(collapseIconId).addClass("reversed");
            }).on('hide.bs.collapse', function () {
                $(collapseIconId).removeClass("reversed");
            });
        },
    }
}
</script>