export default {
    methods: {
        exportSimulations() {
            events.$emit('get-full-simulations-info-for-export');

            this.export.audit = this.auditData;
            this.export.audit.auditDate = this.getAuditDateFromLocalStorage()
            this.export.simulations = this.simulations;

            axios.post('/export', this.export, {
                responseType: 'arraybuffer'
            }).then(response => {
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
