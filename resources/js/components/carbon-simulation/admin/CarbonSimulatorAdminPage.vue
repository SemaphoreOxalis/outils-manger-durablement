<template>
    <div>
        <div class="mb-4 admin-subnav">
            <router-link to="/admin/carbon-simulator/products" tag="span">
                <button class="button alter">Produits</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/categories" tag="span">
                <button class="button alter">Catégories</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/units" tag="span">
                <button class="button alter">Unités</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/origins" tag="span">
                <button class="button alter">Origines</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import AdminPageText from "../../../../texts/AdminPageText";
    import AdminPagesText from "../../../../texts/carbonSimulator/AdminPagesText";

    export default {
        mixins: [
            AdminPageText,
            AdminPagesText
        ],
    }
</script>
