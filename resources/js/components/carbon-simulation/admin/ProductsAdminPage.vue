<template>
    <div class="mt-4">
        <h4>{{ tabs.products }}</h4>

        <p>{{ howTo.youCanDoStuffWith }} {{ howTo.products }}</p>

        <input type="text" v-model="search" placeholder="Rechercher un produit.." style="max-width: 350px;">
        <button @click="search=''" style="display: inline-block;">X</button>

        <div v-for="product in filteredProducts"
             :key="product.id">

            <div class="form-group admin">
                <input v-model="product.name" @change="updateProduct(product)" type="text" required style="max-width: 150px;"
                       class="custom-input browser-default number-field">
                <input v-model="product.comment" @change="updateProduct(product)" type="text" style="max-width: 350px;"
                       class="custom-input browser-default number-field">
                <select v-model="product.unit_id" @change="updateProduct(product)">
                    <option v-for="unit in units" v-bind:value="unit.id">
                        {{ unit.unit }}
                    </option>
                </select>
                <select v-model="product.category_id" @change="updateProduct(product)">
                    <option v-for="category in categories" v-bind:value="category.id">
                        {{ category.name }}
                    </option>
                </select>
                <input v-model="product.emissionFactor" @change="updateProduct(product)" type="number" required min="0" step="0.01" style="max-width: 75px;"
                       class="custom-input browser-default number-field">
                <a @click="deleteProduct(product.id)" class="trash-icon">
                    <i class="icon"></i>
                </a>
            </div>
        </div>

        <div class="form-group admin">
            <input v-model="newProduct.name" type="text" required placeholder="ajouter un produit"
                   class="custom-input browser-default number-field">
            <input v-model="newProduct.comment" type="text"
                   class="custom-input browser-default number-field">
            <select v-model="newProduct.unit_id">
                <option v-for="unit in units" v-bind:value="unit.id">
                    {{ unit.unit }}
                </option>
            </select>
            <select v-model="newProduct.category_id">
                <option v-for="category in categories" v-bind:value="category.id">
                    {{ category.name }}
                </option>
            </select>
            <input v-model="newProduct.emissionFactor" type="number" required min="0" step="0.01"
                   class="custom-input browser-default number-field">
            <button class="button alter" @click="addProduct">{{ okBtn }}</button>
        </div>

    </div>
</template>

<script>
import ProductsDataBase from "../../../helpers/carbon-simulation/database/ProductsDataBase";
import CategoriesDataBase from "../../../helpers/carbon-simulation/database/CategoriesDataBase";
import UnitsDataBase from "../../../helpers/carbon-simulation/database/UnitsDataBase";
import searchBar from "../../../helpers/carbon-simulation/searchBar";
import AdminPageText from "../../../../texts/AdminPageText";
export default {
    mixins: [
        ProductsDataBase,
        CategoriesDataBase,
        UnitsDataBase,
        searchBar,
        AdminPageText,
    ],
    data() {
        return {
            products: [],
            categories: [],
            units: [],
            newProduct: {
                name: '',
                unit_id: 0,
                category_id: 0,
                comment: '',
                emissionFactor: 0
            },
            search: '',
        }
    },
    computed: {
        filteredProducts() {
            return this.searchWithSearchBar(this.products);
        }
    },
    created() {
        this.fetchProducts();
        this.fetchCategories();
        this.fetchUnits();
    },
    methods: {
        refreshProducts() {
            this.fetchProducts();
        },
    }
}
</script>

<style>
.trash-icon {
    cursor: pointer;
}
.form-group.admin select {
    display: inline-block;
    max-width: 200px;
}
</style>
