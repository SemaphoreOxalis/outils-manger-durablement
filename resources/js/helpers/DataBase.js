// Intéractions avec la base de donnée

export default {
    methods: {

        // WASTE HOME-PAGE component
        fetchCountersFromDB() {
            getCountersFromDB().then((response) => {
                this.counters.auditsCounter = response.data[0].value;
                this.counters.simulationsCounter = response.data[1].value;
                this.counters.basketCounter = response.data[2].value;
                this.counters.productsCounter = response.data[3].value;
            });
        },

        // ADMIN component
        fetchContent() {
            getContent().then((response) => {
                this.contents = response.data;
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        updateContent(content) {
            patchContent(content).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        fetchCountersValueFromDB() {
            getCountersFromDB().then((response) => {
                this.counters = response.data;
            });
        },

        updateCounter(counter) {
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
        },

        incrementBasketCounter() {
            incrementBC().then(response => {
                console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementProductCounter() {
            incrementPC().then(response => {
                console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },
    }
}

// Situées ici, ces fonctions sont "privées"

function getContent() {
    return axios.get('/api/contents');
}

function patchContent(content) {
    return axios.patch('/api/contents/' + content.id, {
        html_content: content.html_content,
        original: content.original,
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

function incrementBC() {
    return axios.patch('/api/counters/3/increment');
}

function incrementPC() {
    return axios.patch('/api/counters/4/increment');
}
