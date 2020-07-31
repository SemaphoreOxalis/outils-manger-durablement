<template>
    <div>
        <simulation
            v-for="(simulation, index) in simulations"
            v-bind:key="simulation.id"
            v-bind:simulation="simulation"
            v-bind:index="index"
            v-bind:audit-data="auditData"
            @delete-simulation="deleteSimulation"
        >
        </simulation>

        <button class="btn btn-primary btn-lg btn-block py-4 my-2" id="addSimulation" @click="addSimulation">
            <i class="fas fa-plus-circle mr-2"></i>Ajouter une simulation
        </button>

    </div>
</template>

<script>
    import Simulation from "./Simulation";

    export default {
        components: {
            Simulation
        },

        props: [
            'auditData'
        ],

        data() {
            return {
                simulations: [
                    {
                        id: 1,
                        name: 'sim3',
                        dishesNumber: 15000,
                        dishCost: 3,
                        wasteTreatmentCost: 5,
                        foodWasteVolume: 27.2,
                        wasteCostPerDish: 1.15,
                        foodWasteCost: 150,
                        amountOfDishesWasted: 42
                    }
                ],
                counter: 0
            }
        },

        methods: {
            deleteSimulation: function (index) {
                this.simulations.splice(index, 1);
            },

            addSimulation() {
                this.counter = this.simulations.length;
                this.counter++;

                this.simulations.push(
                    {
                        id: this.counter,
                        name: 'sim3',
                        dishesNumber: 15000,
                        dishCost: 3,
                        wasteTreatmentCost: 5,
                        foodWasteVolume: 27.2,
                        wasteCostPerDish: 1.15,
                        foodWasteCost: 150,
                        amountOfDishesWasted: 42
                    }
                );
            }
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
