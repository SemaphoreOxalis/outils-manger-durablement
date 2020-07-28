<template>
    <div>
        <div v-if="signedIn">
            <h1>Admin Panel</h1>
            <div v-for="value in values"
                 :key="value.id"
                 class="mx-5">

                {{ value.key }}
                <div class="form-group">
                    <input class="form-control" type="number" v-model="value.value" @focusout="update(value)" required min="0" max="100">
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
                }).then(() => {
                    window.events.$emit('flash', 'Vos modifications ont été enregistrées');
                }).catch(error => {
                   console.log(error.response.data)
                });
            }
        }
    }
</script>
