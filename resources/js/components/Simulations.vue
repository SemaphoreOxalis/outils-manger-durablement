<template>
    <div>
        <simulation
            v-for="(simulation, index) in simulations"
            v-bind:key="simulation.id"
            v-bind:simulation="simulation"
            v-bind:index="index"
            @delete-simulation="deleteSimulation">
        </simulation>

        <button class="btn btn-primary btn-lg btn-block py-4 my-2" id="addSimulation">
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

        data() {
            return {
                simulations: [
                    {
                        id: 1,
                        name: 'sim1',
                        dishesNumber: 15000,
                        dishCost: 3,
                        wasteTreatmentCost: 5,
                        foodWasteVolume: 27.2,
                        wasteCostPerDish: 1.15,
                        foodWasteCost: 150,
                        amountOfDishesWasted: 42
                    },
                    {
                        id: 2,
                        name: 'sim2',
                        dishesNumber: 15000,
                        dishCost: 3,
                        wasteTreatmentCost: 5,
                        foodWasteVolume: 27.2,
                        wasteCostPerDish: 1.15,
                        foodWasteCost: 150,
                        amountOfDishesWasted: 42
                    }
                ]
            }
        },

        methods: {
            deleteSimulation: function(index) {
                console.log('sims ' + index);
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
