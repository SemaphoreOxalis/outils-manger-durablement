// Intéractions avec le localStorage

export default {
    methods: {

        // HOME component
        // récupère la date de l'audit et la formatte
        getAuditDateFromLocalStorage() {
            return this.formatToFrench(JSON.parse(localStorage.getItem('audit')).auditDate);
        },

        // INPUT component
        // Va chercher les valeurs de référence depuis le localStorage
        fetchWasteReferenceValuesFromLocalStorage() {
            return JSON.parse(localStorage.getItem('localReferenceValues'));
        },

        // Enregistre les valeurs de référence personnalisées en localStorage
        savePersonalValuesToLocalStorage(values) {
            localStorage.setItem('localReferenceValues', values);
        },

        //RESULTS component
        // efface le localStorage
        clearLocalStorage() {
            localStorage.removeItem('audit');
            localStorage.removeItem('simulations');
            events.$emit('check-data-in-local-storage');
        },

        // Enregistre l'audit en localStorage
        saveAuditToLocalStorage(audit) {
            localStorage.setItem('audit', audit);
            events.$emit('check-data-in-local-storage');
        },

        // Récupère l'audit du localStorage
        getAuditFromLocalStorage() {
            return JSON.parse(localStorage.getItem('audit'));
        },

        //SIMULATIONS component
        // Récupère les simulations du localStorage
        getSimulationsFromLocalStorage() {
            return JSON.parse(localStorage.getItem('simulations'));
        },

        // Efface les simulations du localStorage (pas l'audit)
        deleteSimulationsFromLocalStorage() {
            localStorage.removeItem('simulations');
        },

        // Enregistre les simulations en localStorage
        saveSimulationsToLocalStorage(sims) {
            localStorage.setItem('simulations', sims);
        }
    },
}
