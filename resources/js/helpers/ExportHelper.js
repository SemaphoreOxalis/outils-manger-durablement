// Helper pour l'export Excel

export default {
    methods: {
        exportSimulations() {

            // Demande aux composants concernés de lui envoyer leurs données complètes
            events.$emit('get-full-simulations-info-for-export');

            // Création de l'objet à envoyer au back-end
            this.export.audit = this.auditData;
            this.export.audit.auditDate = this.getAuditDateFromLocalStorage()
            this.export.simulations = this.simulations;

            // appel AJAX vers le côté Laravel (ExportController.php)
            axios.post('/export', this.export, {
                responseType: 'arraybuffer'
            }).then(response => {

                //TODO: make it compatible with IE11
                let headers = response.headers;
                let blob = new Blob([response.data], {type:headers['Content-type']});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Rapport" + Date.now() + ".xlsx"
                link.click();
            }).catch(e => {
                console.log(e);
            });
        }
    }
}
