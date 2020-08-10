<template>
    <div class="d-flex text-center simulation">
        <div class="p-2 w-25">
            <div>
                <input v-model="simulation.name" @blur="saveChanges">
            </div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.dishesNumber }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.dishCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.wasteTreatmentCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.foodWasteVolume }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.wasteCostPerDish }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.foodWasteCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.amountOfDishesWasted }}</div>

        </div>
        <div class="p-2 flex-grow-0">
            <div>
                <button @click="remove(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'simulation',
            'index',
            'auditData'
        ],

        methods: {
            remove: function(index) {
                this.$emit('delete-simulation', index);
            },

            saveChanges() {
                this.$emit('save-changes');
                flash('Vos modifications ont été sauvegardées');
            }
        }
    }
</script>

<style>
    .simulation {
        cursor: grab;
    }
</style>
