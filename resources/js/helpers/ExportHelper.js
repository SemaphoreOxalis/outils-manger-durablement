// Helper pour l'export Excel

export default {
    methods: {
        exportSimulations() {

            // Demande aux composants concernés de lui envoyer leurs données complètes
            events.$emit('get-full-simulations-info-for-export');

            // Création de l'objet à envoyer au back-end
            this.export.mode = this.compareToPreviousSim ? 'simulations comparées entre elles' : 'simulations comparées à l\'audit';
            this.export.audit = this.auditData;
            this.export.audit.auditDate = this.getAuditDateFromLocalStorage()
            this.export.simulations = this.simulations;

            // appel AJAX vers le côté Laravel (ExportController.php)
            makeExportAjaxCall(this.export).then(response => {

                //TODO: make it compatible with IE11
                let headers = response.headers;
                let blob = new Blob([response.data], {type: headers['Content-type']});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Rapport" + Date.now() + ".xlsx"
                link.click();
            }).catch(e => {
                console.log(e);
            });
        }
    }
};

function makeExportAjaxCall(exportData) {
    return axios.post('/export-sims', exportData, {
        responseType: 'arraybuffer'
    });
}
