<template>
    <div>
        <div v-if="signedIn">
            <h1>Admin Panel</h1>
            <div v-for="value in values"
                 :key="value.id">

                {{ value.key }} - {{ value.value }}

            </div>
        </div>
        <div v-else>
            Vous n'avez pas l'autorisation d'être ici
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'user'
        ],

        data() {
            return {
                values: []
            }
        },

        created() {
            this.fetchWasteReferenceValues();
        },

        computed: {
            signedIn() {
                return window.App.signedIn;
            }
        },

        methods: {
            fetchWasteReferenceValues() {
                axios.get('/api/waste-values').then((response) => {
                    this.values = response.data;
                });
            }
        }
    }
</script>
