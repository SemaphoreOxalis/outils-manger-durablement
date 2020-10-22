<template>
    <div>
        <router-link
            to="/"
            class="menu-item button icon">
            <span>{{ home }}</span>
        </router-link>

        <router-link
            to="/waste-simulator"
            class="menu-item button icon">
            <span>{{ waste_simulator }}</span>
        </router-link>

        <router-link
            to="/waste-simulator/input"
            class="menu-item button icon ml-4">
            <span>{{ new_audit }}</span>
        </router-link>

        <router-link
            v-if="dataInLocalStorage"
            to="/waste-simulator/results"
            class="menu-item button icon ml-4">
            <span>{{ resume_sim }}</span>
        </router-link>

        <router-link
            to="/carbon-simulator"
            class="menu-item button icon">
            <span>{{ carbon_simulator }}</span>
        </router-link>

        <router-link
            to="/carbon-simulator/basket-simulator"
            class="menu-item button icon ml-4">
            <span>{{ resume_basket }}</span>
        </router-link>
    </div>
</template>

<script>
    import NavigationLinksText from "../../texts/NavigationLinksText";

    export default {
        mixins: [
            NavigationLinksText
        ],

        data() {
            return {
                dataInLocalStorage: false
            }
        },

        mounted() {
            this.checkDataInLocalStorage();

            events.$on('check-data-in-local-storage', this.checkDataInLocalStorage);
        },

        methods: {
            checkDataInLocalStorage() {
                this.dataInLocalStorage = localStorage.hasOwnProperty('audit');
            }
        },
    }
</script>
