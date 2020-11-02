<template>
    <div>
        <div class="mb-4 admin-subnav">
            <router-link to="/admin/carbon-simulator/products" tag="span">
                <button class="button alter">{{ tabs.products }}</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/categories" tag="span">
                <button class="button alter">{{ tabs.categories }}</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/units" tag="span">
                <button class="button alter">{{ tabs.units }}</button>
            </router-link>

            <router-link to="/admin/carbon-simulator/origins" tag="span">
                <button class="button alter">{{ tabs.origins }}</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import AdminPageText from "../../../../texts/AdminPageText";

    export default {
        mixins: [
            AdminPageText,
        ],
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
