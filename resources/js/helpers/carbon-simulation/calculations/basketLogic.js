export default {
    methods: {
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
                let totalCo2 = 0

                this.categories.forEach(category => {
                    this.globalMoneySpend += category.moneySpent;
                    totalCo2 += category.carbonImpact;
                });

                this.globalCO2PerEuro = totalCo2 / this.globalMoneySpend;
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
                return 'tonnes de CO2';
            }
            if (amount >= 1000000) {
                return 'tonne de CO2';
            }
            if (amount >= 1000) {
                return 'kgCO2';
            }
            return 'gCO2';
        },
    }
}