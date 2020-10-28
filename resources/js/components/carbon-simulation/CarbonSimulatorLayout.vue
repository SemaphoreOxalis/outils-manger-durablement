<template>
    <main class="container">
        <h1 class="header">{{ waste_simulator }} <br> {{ for_collective_restauration }}</h1>
        <router-view></router-view>
    </main>
</template>

<script>
import CarbonSimulatorLayoutText from "../../../texts/carbonSimulator/CarbonSimulatorLayoutText";
export default {
    mixins: [
        CarbonSimulatorLayoutText
    ]
}
</script>
