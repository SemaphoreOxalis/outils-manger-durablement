<template>
    <div class="basket-results">

        <div class="nav justify-content-around">
            <a class="nav-link active button alter"
               :href="'#' + basketId + '-carbon-results'"
               data-toggle="tab">Bilan CO2</a>
            <a class="nav-link button alter"
               :href="'#' + basketId + '-money-results'"
               data-toggle="tab">Bilan €</a>
        </div>

        <div class="tab-content">
            <div class="tab-pane active"
                 :id="basketId + '-carbon-results'">
                <p>catégorie - impact produit - impact transport - impact global</p>
                <p v-for="category in categories">
                    {{ category.name }} :
                    {{ category.productFormattedImpact }} {{ category.productImpactUnit }} -
                    {{ category.transportationFormattedImpact }} {{ category.transportationImpactUnit }} -
                    {{ category.carbonFormattedImpact }} {{ category.carbonImpactUnit }}
                </p>
                <hr>
                <p>
                    <strong>Total :</strong>
                    {{ globalProductImpact.impact }} {{ globalProductImpact.unit }} -
                    {{ globalTransportationImpact.impact }} {{ globalTransportationImpact.unit }} -
                    {{ globalCarbonImpact.impact }} {{ globalCarbonImpact.unit }}
                </p>
            </div>

            <div class="tab-pane"
                 :id="basketId + '-money-results'">
                <p>catégorie - montant - CO2 par €</p>
                <p v-for="category in categories">
                    {{ category.name }} :
                    {{ category.moneySpent }} € -
                    {{ category.co2PerEuroFormatted }} {{ category.co2PerEuroUnit }} -
                </p>
                <p>
                    <strong>Total :</strong> {{ globalMoneySpend }} € - {{ globalCO2PerEuroFormatted }} {{ globalCO2PerEuroUnit }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import NumberFormatter from "../../helpers/NumberFormatter";

    export default {
        mixins: [
              NumberFormatter
        ],
        props: {
            products: Array,
            categories: Array,
            basketId: String,
        },
        computed: {

        },
        watch: {
            products: {
                handler: function() {
                    this.updateResults();
                },
                deep: true
            },
        },
        data() {
            return {
                globalProductImpact: {},
                globalTransportationImpact: {},
                globalCarbonImpact: {},

                globalMoneySpend: Number,
                globalCO2PerEuro: Number,
                globalCO2PerEuroFormatted: Number,
                globalCO2PerEuroUnit: String,
            }
        },
        created() {
            this.updateResults();
        },
        methods: {
            updateResults() {
                this.getCarbonImpactByCategory();
                this.getGlobalCarbonImpact();

                this.getMoneyImpactByCategory();
                this.getGlobalMoneyImpact();

                this.$forceUpdate();
            },
            getCarbonImpactByCategory() {
                this.categories.forEach(category => {
                    this.getCarbonImpactFor(category);
                })
            },
            getCarbonImpactFor(category) {
                let categoryProductImpact = 0;
                let categoryTransportationImpact = 0;
                let categoryCarbonImpact = 0;

                let categoryProducts = this.products.filter(product => {
                    return product.category.id === category.id
                });

                categoryProducts.forEach(product => {
                    let productImpact = 0;
                    let transportationImpact = 0;
                    let carbonImpact = 0;

                    productImpact = (product.amount * product.emissionFactor);
                    transportationImpact = (product.amount * product.origin.carbonImpactPerKg);
                    carbonImpact = productImpact + transportationImpact;

                    categoryProductImpact += productImpact;
                    categoryTransportationImpact += transportationImpact;
                    categoryCarbonImpact += carbonImpact;
                });

                category.productImpact = this.roundToThreeDecimal(categoryProductImpact);
                category.transportationImpact = this.roundToThreeDecimal(categoryTransportationImpact);
                category.carbonImpact = this.roundToThreeDecimal(categoryCarbonImpact);

                category.productFormattedImpact = this.divideIfNecessary(categoryProductImpact);
                category.transportationFormattedImpact = this.divideIfNecessary(categoryTransportationImpact);
                category.carbonFormattedImpact = this.divideIfNecessary(categoryCarbonImpact);

                category.productImpactUnit = this.getUnit(categoryProductImpact);
                category.transportationImpactUnit = this.getUnit(categoryTransportationImpact);
                category.carbonImpactUnit = this.getUnit(categoryCarbonImpact);
            },
            getGlobalCarbonImpact() {
                this.categories.forEach(category => {
                    this.globalProductImpact.impact = 0;
                    this.globalTransportationImpact.impact = 0;
                    this.globalCarbonImpact.impact = 0;

                    this.categories.forEach(category => {
                        this.globalProductImpact.impact += category.productImpact;
                        this.globalTransportationImpact.impact += category.transportationImpact;
                        this.globalCarbonImpact.impact += category.carbonImpact;
                    });

                    this.globalProductImpact.unit = this.getUnit(this.globalProductImpact.impact);
                    this.globalTransportationImpact.unit = this.getUnit(this.globalTransportationImpact.impact);
                    this.globalCarbonImpact.unit = this.getUnit(this.globalCarbonImpact.impact);

                    this.globalProductImpact.impact = this.divideIfNecessary(this.globalProductImpact.impact);
                    this.globalTransportationImpact.impact = this.divideIfNecessary(this.globalTransportationImpact.impact);
                    this.globalCarbonImpact.impact = this.divideIfNecessary(this.globalCarbonImpact.impact);
                });
            },

            getMoneyImpactByCategory() {
                this.categories.forEach(category => {
                    this.getMoneyImpactFor(category);
                })
            },
            getMoneyImpactFor(category) {
                let categoryMoneySpent = 0;

                let categoryProducts = this.products.filter(product => {
                    return product.category.id === category.id
                });

                categoryProducts.forEach(product => {
                    let productPrice = parseFloat(product.price);
                    categoryMoneySpent += productPrice;
                });

                category.moneySpent = categoryMoneySpent;
                category.co2PerEuro = category.carbonImpact / categoryMoneySpent;
                category.co2PerEuroFormatted = this.divideIfNecessary(category.co2PerEuro);
                category.co2PerEuroUnit = this.getUnit(category.co2PerEuro) + '/€';
            },
            getGlobalMoneyImpact() {
                this.categories.forEach(category => {
                    this.globalMoneySpend = 0;
                    this.globalCO2PerEuro = 0;

                    this.categories.forEach(category => {
                        this.globalMoneySpend += category.moneySpent;
                        this.globalCO2PerEuro += category.co2PerEuro;
                    });

                    this.globalCO2PerEuroFormatted = this.divideIfNecessary(this.globalCO2PerEuro);
                    this.globalCO2PerEuroUnit = this.getUnit(this.globalCO2PerEuro) + '/€';
                });
            },

            divideIfNecessary(amount) {
                if (amount >= 1000000) {
                    return this.roundToThreeDecimal(amount / 1000000);
                }
                if (amount >= 1000) {
                    return this.roundToThreeDecimal(amount / 1000);
                }
                return this.roundToOneDecimal(amount);
            },
            getUnit(amount) {
                if (amount >= 2000000) {
                    return 'tonnes de CO²';
                }
                if (amount >= 1000000) {
                    return 'tonne de CO²';
                }
                if (amount >= 1000) {
                    return 'kgCO²';
                }
                return 'gCO²';
            }
        },
    }
</script>

<style>
.basket-results {
    width: available;
    border: 1px solid black;
}
</style>
