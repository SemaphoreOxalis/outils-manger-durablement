export default {
    methods: {
        //ADMIN
        // Va chercher les valeurs de référence depuis la BDD
        fetchWasteReferenceValues() {
            axios.get('/api/waste-values').then((response) => {
                this.values = response.data;
            });
        },

        // Met à jour les valeurs de référence dans la BDD
        update(value) {

            // Appel AJAX
            axios.patch('/api/waste-values/' + value.id, {
                value: value.value

                // Puis feedback visuel
            }).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        //INPUT
        // Va chercher les valeurs de référence depuis la BDD
        fetchWasteReferenceValuesFromDB() {
            axios.get('/api/waste-values').then((response) => {
                //TODO : virer trucs qu'ont rien à faire ici
                localStorage.removeItem('localReferenceValues');

                this.referenceValues.foodLeftoversVolumeInGlobalWaste = response.data[0].value;
                this.referenceValues.actualFoodLeftoversInFoodWaste = response.data[1].value;
            });
        },
    }
}
