<template>
    <div>
        <router-link
            to="/"
            class="menu-item button icon">
            <span>Accueil</span>
        </router-link>

        <router-link
            to="/input"
            class="menu-item button icon">
            <span>Nouvelle Simulation</span>
        </router-link>

        <router-link
            v-if="dataInLocalStorage"
            to="/results"
            class="menu-item button icon">
            <span>Reprendre Simulation</span>
        </router-link>
    </div>
</template>

<script>
    export default {
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
