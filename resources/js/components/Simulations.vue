<template>
    <div>
        <simulation
            v-for="simulation in simulations"
            v-bind:key="simulation.id"
            v-bind:simulation="simulation">
        </simulation>
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
        }
    }
</script>

