<template>
    <div>
        <div>
            <h4 class="mb-5">{{ recipe.name }}</h4>

            <div class="d-flex justify-content-between">
                <div class="form-group w-25">
                    <label for="recipeName">Nom de la recette : </label>
                    <input v-model="recipe.name" type="text" required style="max-width: 350px;" id="recipeName"
                           class="custom-input browser-default">
                    <label for="description">Description : </label>
                    <textarea v-model="recipe.description" type="text" style="max-width: 350px;" id="description"
                              class="custom-input browser-default"></textarea>
                    <label for="author">Auteur : </label>
                    <input v-model="recipe.author" type="text" style="max-width: 350px;" id="author"
                           class="custom-input browser-default">
                </div>
                <div v-if="recipe.products" class="form-group w-75 pl-5">
                    <label class="mb-3">Produits : </label>
                    <ul>
                        <li v-for="(product, index) in recipe.products" :key="recipe.id+ '-' + product.id">
                            <div class="ml-3 d-flex">
                                <p class="w-25 mr-3 mt-auto"><strong>{{ product.name }} &nbsp; </strong> {{ product.comment }}</p>
                                <div class="w-75">
                                    <input type="number"
                                           class="ignore-draggable custom-input browser-default number-field input"
                                           style="max-width: 75px;"
                                           v-model="product.pivot.amount"
                                           min="0" step="1"
                                           required>
                                    <div class="units mr-2">
                                        {{ unit(product) }}
                                        <a class="info-bubble product-info-bubble btn-ico alt tool info" :title="product.unit.unit"></a>
                                    </div>

                                    <input type="number"
                                           class="ignore-draggable custom-input browser-default number-field input"
                                           style="max-width: 75px;"
                                           v-model="product.pivot.price"
                                           min="0" step="1"
                                           required>
                                    <div class="units mr-2">€</div>

                                    <select v-model="product.origin"
                                            :id="'origin-' + recipe.id + '-' + product.id"
                                            class="custom-select input custom-input w-50"
                                            :name="'origin-' + recipe.id + '-' + product.id"
                                            :data-name="'Origine ' + recipe.id + '-' + product.id"
                                            @change="log(product.origin.from)">
                                        <option v-for="origin in origins" :value="origin">
                                            {{ origin.from }}
                                        </option>
                                    </select>

                                    <a class="btn-ico alt tool info-bubble d-inline ml-2"
                                       @click="removeProduct(index)" title="Supprimer ce produit de la recette"></a>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecipesDataBase from "../../../helpers/carbon-simulation/database/RecipesDataBase";
import OriginsDataBase from "../../../helpers/carbon-simulation/database/OriginsDataBase";
import recipesHelper from "../../../helpers/carbon-simulation/recipesHelper";

export default {
    mixins: [
        RecipesDataBase,
        OriginsDataBase,
        recipesHelper,
    ],
    data() {
        return {
            recipe: {},
            origins: [],
        }
    },
    created() {
        this.fetchOrigins();

    },
    async mounted() {
        this.recipe = await this.getRecipeById(this.$attrs.id);
        this.recipe.products.forEach(p => {
            p.origin = this.getOriginObject(p.pivot.origin);
        });
    },
    methods: {
        isEmpty: function(obj) {
            return Object.keys(obj).length === 0;
        },
        unit: function (product) {
            if (product.unit.shortUnit !== 'kg' && product.pivot.amount >= 2) {
                return product.unit.shortUnit + 's';
            }
            return product.unit.shortUnit;
        },
        removeProduct: function(index) {
            this.recipe.products.splice(index, 1);
        },
        log(a) {
            console.log(a);
        },
    }
}
</script>