<template>
    <main class="container">
        <h1 class="header">Simulateur d&#x27;émission carbone pour la restauration collective</h1>
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
