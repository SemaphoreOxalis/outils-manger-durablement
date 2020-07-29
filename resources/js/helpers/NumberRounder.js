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
