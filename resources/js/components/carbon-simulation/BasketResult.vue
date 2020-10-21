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
                <p>
                    <strong>Total</strong> :
                    {{ globalProductImpact.impact }} {{ globalProductImpact.unit }} -
                    {{ globalTransportationImpact.impact }} {{ globalTransportationImpact.unit }} -
                    {{ globalCarbonImpact.impact }} {{ globalCarbonImpact.unit }}
                </p>
            </div>

            <div class="tab-pane"
                 :id="basketId + '-money-results'">
                <p v-for="product in products">{{ product.name }} - {{ product.price }} €</p>
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
            }
        },
        created() {
            this.updateResults();
        },
        methods: {
            updateResults() {
                this.getCarbonImpactByCategory();
                this.getGlobalCarbonImpact();
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
