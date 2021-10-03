export default {
    methods: {
        async fetchSteps() {
            try {
                const {data:response} = await axios.get('/api/steps/');
                this.steps = response;
            } catch (e) {
                flash(e.response.data, 'danger');
            }
        },

        updateStep(step) {
            patchStep(step).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addStep() {
            this.newStep.index = this.steps.length;
            postStep(this.newStep).then(response => {
                this.steps.push(response.data);
                this.newStep = {};
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteStep(stepId) {
            destroyStep(stepId).then(response => {
                flash(response.data);
                this.refreshSteps();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

async function getSteps() {
    return axios.get('/api/steps');
}

function patchStep(step) {
    return axios.patch('/api/steps/' + step.id, {
        title: step.title,
        text: step.text,
        element: step.element,
        position: step.position,
        index: step.index,
    });
}

function postStep(newStep) {
    return axios.post('/api/steps', {
        title: newStep.title,
        text: newStep.text,
        element: newStep.element,
        position: newStep.position,
        index: newStep.index,
    });
}

function destroyStep(stepId) {
    return axios.delete('/api/steps/' + stepId);
}
