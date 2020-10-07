<template>
    <div class="mt-4">
        <h4>Catégories</h4>

        <p>ici, vous pouvez renommer, ajouter ou supprimer des catégories</p>
        <p><strong>ATTENTION :</strong> supprimer une catégorie supprimera tous les produits associés</p>

        <div v-for="category in categories"
             :key="category.id">

            <div class="form-group admin">
                <input v-model="category.name" @change="updateCategory(category)" type="text" required
                       class="custom-input browser-default number-field">
                <a @click="deleteCategory(category.id)" class="trash-icon">
                    <i class="icon"></i>
                </a>
            </div>
        </div>

        <div class="form-group admin">
            <input v-model="newCategory" type="text" required placeholder="ajouter une catégorie"
                   class="custom-input browser-default number-field">
            <button class="button alter" @click="addCategory">OK</button>
        </div>

    </div>
</template>

<script>
    import CategoriesDataBase from "../../../helpers/carbon-simulation/CategoriesDataBase";
    export default {
        mixins: [
            CategoriesDataBase
        ],
        data() {
            return {
                categories: [],
                newCategory: ''
            }
        },
        created() {
            this.fetchCategories();
        },
        methods: {
            refreshCategories() {
                this.fetchCategories();
            }
        }
    }
</script>

<style>
.trash-icon {
    cursor: pointer;
}
</style>
