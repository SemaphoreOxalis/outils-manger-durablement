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

        fetchCountersValueFromDB() {
            getCountersFromDB().then((response) => {
                this.counters = response.data;
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
