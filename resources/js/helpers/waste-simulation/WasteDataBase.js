export default {
    methods: {
        // ADMIN component
        // Va chercher les valeurs de référence depuis la BDD
        fetchWasteReferenceValues() {
            getValuesFromDB().then((response) => {
                this.values = response.data;
            });
        },

        // Met à jour les valeurs de référence dans la BDD
        updateRefValue(value) {

            // Appel AJAX
            patchValue(value).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        //INPUT component
        // Va chercher les valeurs de référence depuis la BDD
        fetchWasteReferenceValuesFromDB() {
            getValuesFromDB().then((response) => {
                //TODO : virer trucs qu'ont rien à faire ici

                // On efface les valeurs personnalisée du localStorage
                localStorage.removeItem('localReferenceValues');

                this.referenceValues.foodLeftoversVolumeInGlobalWaste = response.data[0].value;
                this.referenceValues.actualFoodLeftoversInFoodWaste = response.data[1].value;
            });
        },
    }
}

// Situées ici, ces fonctions sont "privées"

function getValuesFromDB() {
    return axios.get('/api/waste-values');
}

function patchValue(value) {
    return axios.patch('/api/waste-values/' + value.id, {
        value: value.value
    });
}
