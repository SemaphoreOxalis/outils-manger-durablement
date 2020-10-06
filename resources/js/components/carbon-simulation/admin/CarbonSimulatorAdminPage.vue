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
    export default {

    }
</script>

<style>
.admin-subnav {
    text-align: center;
    padding: 10px;
}

.admin-subnav span.router-link-active button.alter {
    background-color: var(--main-color);
}
</style>
