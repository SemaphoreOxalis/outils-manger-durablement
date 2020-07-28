<template>
    <div class="mx-5">
        <div v-if="signedIn">
            <h1>Admin Panel</h1>
            <div v-for="value in values"
                 :key="value.id">

                {{ value.label }}
                <div class="form-group admin">
                    <input class="validity" type="number" v-model="value.value" @change="update(value)" required
                           min="0" max="100" step="0.01"> <span> %</span>
                </div>
            </div>

        </div>
        <div v-else>
            Vous n'avez pas l'autorisation d'être ici
        </div>
    </div>
</template>

<script>
    export default {
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
            },
            update(value) {
                axios.patch('/api/waste-values/' + value.id, {
                    value: value.value
                }).then(response => {
                    flash(response.data);
                }).catch(error => {
                    flash(error.response.data, 'danger');
                });
            }
        }
    }
</script>

<style>
    .admin input:invalid {
        background-color: lightpink;
    }
</style>
