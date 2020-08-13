export default {
    methods: {

        // HOME
        getAuditDateFromLocalStorage() {
            return this.formatToFrench(JSON.parse(localStorage.getItem('audit')).auditDate);
        },

        // INPUT
        // Va chercher les valeurs de référence depuis le localStorage
        fetchWasteReferenceValuesFromLocalStorage() {
            return JSON.parse(localStorage.getItem('localReferenceValues'));
        },

        savePersonalValuesToLocalStorage(values) {
            localStorage.setItem('localReferenceValues', values);
        },

        //RESULTS
        clearLocalStorage() {
            localStorage.removeItem('audit');
            localStorage.removeItem('simulations');
        },

        saveAuditToLocalStorage(audit) {
            localStorage.setItem('audit', audit);
        },

        getAuditFromLocalStorage() {
            return JSON.parse(localStorage.getItem('audit'));
        },

        //SIMULATIONS
        getSimulationsFromLocalStorage() {
            return JSON.parse(localStorage.getItem('simulations'));
        },

        deleteSimulationsFromLocalStorage() {
            localStorage.removeItem('simulations');
        },

        saveSimulationsToLocalStorage(sims) {
            localStorage.setItem('simulations', sims);
        }
    },
}
