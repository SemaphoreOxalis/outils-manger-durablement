<template>
    <div class="d-flex text-center">
        <div class="p-2 w-25">{{ simulation.name }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.dishesNumber }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.dishCost }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.wasteTreatmentCost }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.foodWasteVolume }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.wasteCostPerDish }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.foodWasteCost }}</div>
        <div class="p-2 flex-grow-1">{{ simulation.amountOfDishesWasted }}</div>
        <div class="p-2 flex-grow-0"><i class="fas fa-trash-alt"></i></div>
    </div>
</template>

<script>
    export default {
        props: [
            'simulation'
        ]
    }
</script>
