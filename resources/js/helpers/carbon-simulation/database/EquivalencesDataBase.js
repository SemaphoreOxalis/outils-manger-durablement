export default {
    methods: {
        fetchEquivalences() {
            getEquivalences().then((response) => {
                this.equivalences = response.data;
            });
        },

        updateEquivalence(equivalence) {
            patchEquivalence(equivalence).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addEquivalence() {
            postEquivalence(this.newEquivalence).then(response => {
                this.equivalences.push(response.data);
                this.newEquivalence = {};
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteEquivalence(equivalenceId) {
            destroyEquivalence(equivalenceId).then(response => {
                flash(response.data);
                this.refreshEquivalences();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

function getEquivalences() {
    return axios.get('/api/equivalences');
}

function patchEquivalence(equivalence) {
    return axios.patch('/api/equivalences/' + equivalence.id, {
        name: equivalence.name,
        rate: equivalence.rate,
        unit: equivalence.unit,
        source: equivalence.source,
    });
}

function postEquivalence(newEquivalence) {
    return axios.post('/api/equivalences', {
        name: newEquivalence.name,
        rate: newEquivalence.rate,
        unit: newEquivalence.unit,
        source: newEquivalence.source,
    });
}

function destroyEquivalence(equivalenceId) {
    return axios.delete('/api/equivalences/' + equivalenceId);
}
