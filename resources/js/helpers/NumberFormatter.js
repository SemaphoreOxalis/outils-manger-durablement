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
        },

        // from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        separateThousands(number) {
            try {
                console.log(number);
                return number.toLocaleString();
            } catch (e) {
                //
            }
        }
    }
}
