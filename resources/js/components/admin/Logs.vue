<template>
    <div class="recipe-products">
        <h4 class="my-3">Logs</h4>
        <div>
            <button class="button" @click="displaySimpleLog" id="simple-log">Simple (infos)</button>
            <button class="button" @click="displayFullLog" id="full-log">Complet (log de laravel pour debug)</button>
        </div>

        <pre v-html="log" class="logs"></pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            log: `<div class="loader-spinner"></div>`,
            logs: [],
        }
    },
    mounted() {
        this.getLogs().then(response => {
            this.logs = response.data;
            this.displaySimpleLog();
        }).catch(e => {
            flash('Erreur lors du chargement des logs', 'danger');
            this.log = 'Erreur lors du chargement des logs';
        });
    },
    methods: {
        getLogs() {
            return axios.get('/api/logs');
        },
        displaySimpleLog() {
            this.log = this.logs[0];
            $('#simple-log').removeClass('alter');
            $('#full-log').addClass('alter');
        },
        displayFullLog() {
            this.log = this.logs[1];
            $('#full-log').removeClass('alter');
            $('#simple-log').addClass('alter');
        }
    }
}
</script>