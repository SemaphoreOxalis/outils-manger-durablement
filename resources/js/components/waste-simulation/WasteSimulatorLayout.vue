<template>
    <div>
        <h1 id="title">{{ waste_simulator }}<br>{{ for_collective_restauration }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    import WasteSimulatorLayoutText from "../../../texts/wasteSimulator/WasteSimulatorLayoutText";
    export default {
        mixins: [
            WasteSimulatorLayoutText
        ]
    }
</script>
