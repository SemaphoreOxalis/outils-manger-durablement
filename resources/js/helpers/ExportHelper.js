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
            makeSimsExportAjaxCall(this.export).then(response => {
                let headers = response.headers;
                let blob = new Blob([response.data], {type: headers['Content-type']});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Rapport-gaspillage_" + Date.now() + ".xlsx"
                link.click();
            }).catch(e => {
                flash('Une erreur est survenue', 'danger');
            });
        },

        exportBaskets() {
            // Création de l'objet à envoyer au back-end
            this.export.mode = this.compareToPreviousBasket ? 'Chaque liste est comparée à la précédente' : 'Les listes sont comparées à la première';
            this.export.baskets = this.baskets;
            this.export.date = this.getBasketsDateFromLocalStorage()

            // appel AJAX vers le côté Laravel (ExportController.php)
            makeBasketsExportAjaxCall(this.export).then(response => {
                let headers = response.headers;
                let blob = new Blob([response.data], {type: headers['Content-type']});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Rapport-carbone_" + Date.now() + ".xlsx"
                link.click();
            }).catch(e => {
                flash('Une erreur est survenue', 'danger');
            });
        },

        saveBaskets(fileName) {
            try {
                let blob = new Blob([JSON.stringify(this.selectedBaskets)], {type: 'text/carbon'});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = fileName + ".carbon";
                link.click();
            } catch(e) {
                console.log(e);
                flash('Une erreur est survenue', 'danger');
            }
        }
    }
};

function makeSimsExportAjaxCall(exportData) {
    return axios.post('/export-sims', exportData, {
        responseType: 'arraybuffer'
    });
}

function makeBasketsExportAjaxCall(exportData) {
    return axios.post('/export-baskets', exportData, {
        responseType: 'arraybuffer'
    });
}
