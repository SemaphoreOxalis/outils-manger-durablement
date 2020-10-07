export default {
    methods: {
        fetchUnits() {
            getUnits().then((response) => {
                this.units = response.data;
            });
        },

        updateUnit(unit) {
            patchUnit(unit).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addUnit() {
            postUnit(this.newUnit).then(response => {
                this.units.push(response.data);
                this.newUnit = '';
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteUnit(unitId) {
            destroyUnit(unitId).then(response => {
                flash(response.data);
                this.refreshUnits();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

function getUnits() {
    return axios.get('/api/units');
}

function patchUnit(unit) {
    return axios.patch('/api/units/' + unit.id, {
        unit: unit.unit
    });
}

function postUnit(newUnit) {
    return axios.post('/api/units', { unit: newUnit });
}

function destroyUnit(unitId) {
    return axios.delete('/api/units/' + unitId);
}
