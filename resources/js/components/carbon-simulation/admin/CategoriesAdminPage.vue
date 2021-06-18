<template>
    <div class="mt-4">
        <h4>{{ tabs.categories }}</h4>

        <p>{{ howTo.youCanDoStuffWith }} {{ howTo.categories }}</p>
        <p><strong>{{ howTo.warning.warning }}</strong> {{ howTo.warning.deletingCategory }}</p>

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
            <button class="button alter" @click="addCategory">{{ okBtn }}</button>
        </div>

    </div>
</template>

<script>
    import CategoriesDataBase from "../../../helpers/carbon-simulation/database/CategoriesDataBase";
    import AdminPageText from "../../../../texts/AdminPageText";
    import AdminPagesText from "../../../../texts/carbonSimulator/AdminPagesText";
    export default {
        mixins: [
            CategoriesDataBase,
            AdminPageText,
            AdminPagesText
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
