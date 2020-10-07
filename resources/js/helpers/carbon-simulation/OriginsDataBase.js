export default {
    methods: {
        fetchOrigins() {
            getOrigins().then((response) => {
                this.origins = response.data;
            });
        },

        updateOrigin(origin) {
            patchOrigin(origin).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addOrigin() {
            postOrigin(this.newOrigin).then(response => {
                this.origins.push(response.data);
                this.newOrigin = {};
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteOrigin(originId) {
            destroyOrigin(originId).then(response => {
                flash(response.data);
                this.refreshOrigins();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

function getOrigins() {
    return axios.get('/api/origins');
}

function patchOrigin(origin) {
    return axios.patch('/api/origins/' + origin.id, {
        from: origin.from,
        distance: origin.distance,
        carbonImpact: origin.carbonImpact,
        carbonImpactPerKg: origin.carbonImpactPerKg,
    });
}

function postOrigin(newOrigin) {
    return axios.post('/api/origins', {
        from: newOrigin.from,
        distance: newOrigin.distance,
        carbonImpact: newOrigin.carbonImpact,
        carbonImpactPerKg: newOrigin.carbonImpactPerKg,
    });
}

function destroyOrigin(originId) {
    return axios.delete('/api/origins/' + originId);
}
