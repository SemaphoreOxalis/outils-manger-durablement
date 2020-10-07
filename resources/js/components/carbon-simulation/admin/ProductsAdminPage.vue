<template>
    <div class="mt-4">
        <h4>Produits</h4>

        <p>ici, vous pouvez renommer, modifier, ajouter ou supprimer des produits</p>

        <div v-for="product in products"
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
            <button class="button alter" @click="addProduct">OK</button>
        </div>

    </div>
</template>

<script>
import ProductsDataBase from "../../../helpers/carbon-simulation/ProductsDataBase";
import CategoriesDataBase from "../../../helpers/carbon-simulation/CategoriesDataBase";
import UnitsDataBase from "../../../helpers/carbon-simulation/UnitsDataBase";
export default {
    mixins: [
        ProductsDataBase,
        CategoriesDataBase,
        UnitsDataBase
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
            }
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
        }
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
