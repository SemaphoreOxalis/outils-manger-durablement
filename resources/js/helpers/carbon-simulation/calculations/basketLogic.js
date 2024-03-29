export default {
    methods: {
        getCarbonImpactFor(category) {
            let categoryProductImpact = 0;
            let categoryTransportationImpact = 0;
            let categoryCarbonImpact = 0;

            let categoryProducts = this.products.filter(product => {
                if(product.type !== 'special') {
                    return product.category.id === category.id;
                }
            });

            categoryProducts.forEach(product => {
                product.productImpact = (product.amount * product.emissionFactor);
                product.transportationImpact = (product.amount * product.origin.carbonImpactPerKg);
                product.carbonImpact = product.productImpact + product.transportationImpact;

                categoryProductImpact += product.productImpact;
                categoryTransportationImpact += product.transportationImpact;
                categoryCarbonImpact += product.carbonImpact;
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
            this.globalCarbonImpactVariable = 0;

            this.cats.forEach(category => {
                this.globalProductImpact.impact += category.productImpact;
                this.globalTransportationImpact.impact += category.transportationImpact;
                this.globalCarbonImpact.impact += category.carbonImpact;
                this.globalCarbonImpactVariable += category.carbonImpact;
            });

            this.globalProductImpact.unit = this.getUnit(this.globalProductImpact.impact);
            this.globalTransportationImpact.unit = this.getUnit(this.globalTransportationImpact.impact);
            this.globalCarbonImpact.unit = this.getUnit(this.globalCarbonImpact.impact);

            this.globalProductImpact.formatted = this.divideIfNecessary(this.globalProductImpact.impact);
            this.globalTransportationImpact.formatted = this.divideIfNecessary(this.globalTransportationImpact.impact);
            this.globalCarbonImpact.formatted = this.divideIfNecessary(this.globalCarbonImpact.impact);
        },
        getCarbonImpactForBlock(block) {
            let blockProductImpact = 0;
            let blockTransportationImpact = 0;
            let blockCarbonImpact = 0;

            let blockProducts = this.products.filter(product => {
                if(product.type !== 'special') {
                    return product.isInBlock === parseInt(block.number);
                }
            });

            blockProducts.forEach(product => {
                blockProductImpact += product.productImpact;
                blockTransportationImpact += product.transportationImpact;
                blockCarbonImpact += product.carbonImpact;
            });

            block.productImpact = this.roundToThreeDecimal(blockProductImpact);
            block.transportationImpact = this.roundToThreeDecimal(blockTransportationImpact);
            block.carbonImpact = this.roundToThreeDecimal(blockCarbonImpact);

            block.productFormattedImpact = this.divideIfNecessary(blockProductImpact);
            block.transportationFormattedImpact = this.divideIfNecessary(blockTransportationImpact);
            block.carbonFormattedImpact = this.divideIfNecessary(blockCarbonImpact);

            block.productImpactUnit = this.getUnit(blockProductImpact);
            block.transportationImpactUnit = this.getUnit(blockTransportationImpact);
            block.carbonImpactUnit = this.getUnit(blockCarbonImpact);
        },

        getMoneyImpactFor(category) {
            let categoryMoneySpent = 0;

            let categoryProducts = this.products.filter(product => {
                if(product.type !== 'special') {
                    return product.category.id === category.id;
                }
            });

            categoryProducts.forEach(product => {
                let productPrice = parseFloat(product.price);
                categoryMoneySpent += productPrice;
            });

            category.moneySpent = categoryMoneySpent;
            category.co2PerEuro = category.carbonImpact / categoryMoneySpent || 0;
            category.co2PerEuroFormatted = this.divideIfNecessary(category.co2PerEuro);
            category.co2PerEuroUnit = this.getUnit(category.co2PerEuro) + '/€';
        },
        getGlobalMoneyImpact() {
            this.globalMoneySpend = 0;
            this.globalCO2PerEuro = 0;
            let totalCo2 = 0

            this.cats.forEach(category => {
                this.globalMoneySpend += category.moneySpent;
                totalCo2 += category.carbonImpact;
            });

            this.globalCO2PerEuro = totalCo2 / this.globalMoneySpend;
            this.globalCO2PerEuroFormatted = this.divideIfNecessary(this.globalCO2PerEuro);
            this.globalCO2PerEuroUnit = this.getUnit(this.globalCO2PerEuro) + '/€';
        },
        getMoneyImpactForBlock(block) {
            let moneySpent = 0;

            let blockProducts = this.products.filter(product => {
                if(product.type !== 'special') {
                    return product.isInBlock === parseInt(block.number);
                }
            });

            blockProducts.forEach(product => {
                let productPrice = parseFloat(product.price);
                moneySpent += productPrice;
            });

            block.moneySpent = moneySpent;
            block.co2PerEuro = block.carbonImpact / moneySpent || 0;
            block.co2PerEuroFormatted = this.divideIfNecessary(block.co2PerEuro);
            block.co2PerEuroUnit = this.getUnit(block.co2PerEuro) + '/€';
        },

        getDeltasFor(category, index) {
            category.carbonDelta = this.getDelta(category.carbonImpact, this.comparedBasket.results.cats[index].carbonImpact);
            category.moneyDelta = this.getDelta(category.moneySpent, this.comparedBasket.results.cats[index].moneySpent);
        },

        divideIfNecessary(amount) {
            if (amount >= 1000) {
                return this.roundToOneDecimal(amount / 1000);
            }
            return this.roundToOneDecimal(amount);
        },
        getUnit(amount) {
            if (amount >= 1000) {
                return 'T de CO2';
            }
            return 'kgCO2';
        },
    }
}
