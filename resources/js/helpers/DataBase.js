// Intéractions avec la base de donnée

export default {
    methods: {

        // WASTE HOME-PAGE component
        fetchCountersFromDB() {
            getCountersFromDB().then((response) => {
                this.counters.auditsCounter = response.data[0].value;
                this.counters.simulationsCounter = response.data[1].value;
            });
        },

        // ADMIN component
        // Va chercher les valeurs de référence depuis la BDD
        fetchWasteReferenceValues() {
            getValuesFromDB().then((response) => {
                this.values = response.data;
            });
        },

        fetchCountersValueFromDB() {
            getCountersFromDB().then((response) => {
                this.counters = response.data;
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

        updateCounter(counter) {

            // Appel AJAX
            patchCounter(counter).then(response => {
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

        // RESULTS component
        incrementAuditCounter() {
            incrementAC().then(response => {
                console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementSimulationCounter() {
            incrementSC().then(response => {
                console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
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

function getCountersFromDB() {
    return axios.get('/api/counters');
}

function patchCounter(counter) {
    return axios.patch('/api/counters/' + counter.id, {
        value: counter.value
    });
}

function incrementAC() {
    return axios.patch('/api/counters/1/increment');
}

function incrementSC() {
    return axios.patch('/api/counters/2/increment');
}
