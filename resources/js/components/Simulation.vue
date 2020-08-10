<template>
    <div :class="getClasses()">
        <div class="p-2 w-25">
            <i class="fa fa-arrows-alt simulation"></i>
            <input v-model="simulation.name" @blur="saveChanges">
            <div>
                <p>{{ this.previousSim }}</p>
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
        'auditData',
        'previousSimulation'
    ],

    computed: {
        isFirst() {
            if(this.index === 0) {
                return true;
            } else {
                return false;
            }
        },
    },

    data() {
      return {
          previousSim: null
      }
    },

    methods: {
        remove: function (index) {
            this.$emit('delete-simulation', index);
        },

        saveChanges() {
            this.$emit('save-changes');
            flash('Vos modifications ont été sauvegardées');
        },

        updateSimulationsValues() {
            this.getPreviousSim();
        },

        getClasses() {
            if (this.isFirst) {
                return [
                    'd-flex',
                    'text-center',
                    'highlighted'
                ]
            } else {
                return [
                    'd-flex',
                    'text-center'
                ]
            }
        },

        getPreviousSim() {
            if(!this.isFirst) {
                this.previousSim = this.previousSimulation.name;
            } else {
                this.previousSim = this.auditData;
            }
        }
    },

    created() {
        this.updateSimulationsValues();
        this.getPreviousSim();

        events.$on('update-simulations-values', this.updateSimulationsValues);
    }
}
</script>

<style>
    .simulation {
        cursor: grab;
    }

    .highlighted {
        background-color: #2fa360;
    }
</style>
