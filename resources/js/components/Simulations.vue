<template>
    <div>
        <draggable v-model="simulations"
                   class="dragArea"
                   @change="updateSimulationsValues"
                   :animation="150"
        >

            <simulation
                v-for="(simulation, index) in simulations"
                v-bind:key="simulation.id"
                v-bind:simulation="simulation"
                v-bind:index="index"
                v-bind:audit-data="auditData"
                v-bind:previous-simulation="previousSimulation(index)"
                @delete-simulation="deleteSimulation"
                @save-changes="saveChangesToLocalStorage"
            >
            </simulation>

        </draggable>



        <button class="btn btn-primary btn-lg btn-block py-4 my-2" id="addSimulation" @click="addSimulation">
            <i class="fas fa-plus-circle mr-2"></i>Ajouter une simulation
        </button>

    </div>
</template>

<script>
    import Simulation from "./Simulation";
    import draggable from 'vuedraggable'

    export default {
        components: {
            Simulation,
            draggable
        },

        props: [
            'auditData'
        ],

        data() {
            return {
                simulations: [],
                counter: 0
            }
        },

        computed: {

        },

        methods: {
            deleteSimulation: function (index) {
                this.simulations.splice(index, 1);
                this.refreshCounter();
                this.saveChangesToLocalStorage();
                this.updateSimulationsValues();
            },

            updateSimulationsValues() {
                events.$emit('update-simulations-values');
                this.saveChangesToLocalStorage();
            },

            addSimulation() {
                this.counter++;

                this.simulations.push(
                    {
                        id: this.counter,
                        name: 'simulation ' + this.counter,
                        dishesNumber: this.auditData.dishesNumber,
                        dishCost: this.auditData.dishCost,
                        wasteTreatmentCost: this.auditData.wasteTreatmentCost,
                        foodWasteVolume: this.auditData.foodWasteVolume,
                        wasteCostPerDish: this.auditData.wasteCostPerDish,
                        foodWasteCost: this.auditData.foodWasteCost,
                        amountOfDishesWasted: this.auditData.amountOfDishesWasted
                    }
                );
                this.saveChangesToLocalStorage();
            },

            saveChangesToLocalStorage() {
                const sims = JSON.stringify(this.simulations);
                localStorage.setItem('simulations', sims);
            },

            refreshCounter() {
                if (this.simulations.length > 0) {
                    // TODO : change that cos bugs
                    this.counter = this.simulations[this.simulations.length - 1].id;
                } else {
                    this.counter = 0;
                }

            },

            resetSimulations() {
                localStorage.removeItem('simulations');
                this.simulations = [];
                this.counter = 0;
            },

            previousSimulation(index) {
                if(index > 0) {
                    return this.simulations[index -1];
                }
            }
        },

        mounted() {
            if (localStorage.hasOwnProperty('simulations')) {
                this.simulations = JSON.parse(localStorage.getItem('simulations'));
                this.refreshCounter();
            }

            events.$on('reset-simulations', this.resetSimulations);
        }
    }
</script>

<style>
    #addSimulation {
        display: block;
        max-width: 500px;
        margin: auto;
    }
</style>
