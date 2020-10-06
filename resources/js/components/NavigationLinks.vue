<template>
    <div>
        <router-link
            to="/"
            class="menu-item button icon">
            <span>{{ home }}</span>
        </router-link>

        <router-link
            to="/input"
            class="menu-item button icon">
            <span>{{ new_audit }}</span>
        </router-link>

        <router-link
            v-if="dataInLocalStorage"
            to="/results"
            class="menu-item button icon">
            <span>{{ resume_sim }}</span>
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
