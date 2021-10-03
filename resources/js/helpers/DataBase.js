// Intéractions avec la base de donnée

import HTMLSpecialCharsDecoder from "./HTMLSpecialCharsDecoder";

export default {
    mixins: [
        HTMLSpecialCharsDecoder
    ],
    methods: {

        log(message, details = {}) {
            writeLog(message, details).then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        // WASTE HOME-PAGE component
        fetchCountersFromDB() {
            getCountersFromDB().then((response) => {
                this.counters.auditsCounter = response.data[0].value;
                this.counters.simulationsCounter = response.data[1].value;
                this.counters.basketCounter = response.data[2].value;
                this.counters.productsCounter = response.data[3].value;
                this.counters.recipesCounter = response.data[4].value;
            });
        },

        // ADMIN component
        fetchCountersValueFromDB() {
            getCountersFromDB().then((response) => {
                this.counters = response.data;
            });
        },

        updateCounter(counter) {
            patchCounter(counter).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        //INPUT component
        // RESULTS component
        incrementAuditCounter() {
            incrementAC().then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementSimulationCounter() {
            incrementSC().then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementBasketCounter() {
            incrementBC().then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementProductCounter() {
            incrementPC().then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        incrementRecipeCounter() {
            incrementRC().then(response => {
                // console.log(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        //CONTENTS
        fetchContents() {
            getContents().then((response) => {
                this.contents = response.data;
                this.selectedContent = this.contents[0];
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        fetchImages() {
            getImages().then((response) => {
                this.images = response.data;
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        updateContent(content) {
            patchContent(content).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        fetchFooter(type) {
            getFooter(type).then(response => {
                this.footer = this.decode(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        async fetchContent(name) {
            try {
                const {data:response} = await axios.get('/api/contents/' + name);
                return this.decode(response);
            } catch(error) {
                flash(error.response.data, 'danger');
            }
        }
    }
}

function writeLog(message, details) {
    return axios.post('/api/logs', {
        message: message,
        details: details,
    });
}

function getContents() {
    return axios.get('/api/contents');
}

function getImages() {
    return axios.get('/api/images');
}

function patchContent(content) {
    return axios.patch('/api/contents/' + content.id, {
        html_content: content.html_content,
        original: content.original,
    });
}

function getFooter(type) {
    return axios.get('/api/contents/footer/' + type);
}

function getCountersFromDB() {
    return axios.get('/api/counters');
}

function patchCounter(counter) {
    return axios.patch('/api/counters/' + counter.id, {
        value: counter.value
    });
}

function incrementAC() {
    return axios.patch('/api/counters/1/increment');
}

function incrementSC() {
    return axios.patch('/api/counters/2/increment');
}

function incrementBC() {
    return axios.patch('/api/counters/3/increment');
}

function incrementPC() {
    return axios.patch('/api/counters/4/increment');
}

function incrementRC() {
    return axios.patch('/api/counters/5/increment');
}
