// Permet des arrondis qui restent précis
// From https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary

export default {
    methods: {
        roundToOneDecimal(number) {
            return Math.round((number + Number.EPSILON) * 10) / 10;
        },
        roundToTwoDecimal(number) {
            return Math.round((number + Number.EPSILON) * 100) / 100;
        },
        roundToThreeDecimal(number) {
            return Math.round((number + Number.EPSILON) * 1000) / 1000;
        }
    }
}
