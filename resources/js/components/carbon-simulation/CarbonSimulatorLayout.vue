<template>
    <div>
        <h1 id="title">{{ waste_simulator }}<br>{{ for_collective_restauration }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
import CarbonSimulatorLayoutText from "../../../texts/carbonSimulator/CarbonSimulatorLayoutText";
export default {
    mixins: [
        CarbonSimulatorLayoutText
    ]
}
</script>
