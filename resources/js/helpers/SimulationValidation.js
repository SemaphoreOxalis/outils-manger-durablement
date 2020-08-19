export default {
    methods: {

        // RESULTS component
        // Envoi d'une demande aux simulations pour avoir leur validation
        validateSimulations() {
            events.$emit('validate-simulations');
        },

        // Retour de l'envoi de cette demande
        checkValidation(simulationIndex, simulationIsInvalid) {

            // On crée un tableau qui contient, pour chaque simulation, true ou false en fonction d'erreurs éventuelles de saisie
            this.simulationsErrors[simulationIndex] = simulationIsInvalid;
            this.areSimulationsInvalid = this.simulationsErrors.includes(true);
        },


        // SIMULATION component
        // Envoi aux composants parents le résultat de la validation
        validate() {
            events.$emit('validate', this.index, this.isInvalid);
        }
    }
}
