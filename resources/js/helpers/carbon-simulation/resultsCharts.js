import Chart from "chart.js";

export default {
    data() {
        return {
            chartData: {
                labels: [],
                values: [],
                money: [],
                backgroundColors: [],
                colors: [],
                hoverColors: [],
            },
            chartColors: [
                [3, 195, 131],
                [170, 217, 98],
                [251, 191, 69],
                [239, 106, 50],
                [237, 3, 69],
                [161, 42, 94],
                [113, 1, 98],
                [70, 10, 75],
                [26, 19, 52],
                [38, 41, 74],
                [1, 84, 90],
                [1, 115, 81],
            ],
        }
    },
    methods: {
        createChart(chartId) {
            this.prepareChartLabels();
            this.prepareChartValues();
            this.getColors();

            let ctx = document.getElementById(chartId).getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: this.chartData.labels,
                    datasets: [
                        {
                            label: '',
                            data: this.chartData.values,
                            backgroundColor: this.chartData.backgroundColors,
                            borderColor: this.chartData.colors,
                            hoverBackgroundColor: this.chartData.hoverColors,
                            borderWidth: 1,
                            hoverBorderWidth: 2,
                            // borderAlign: 'inner',
                        }
                    ]
                },
                options: {
                    animation: {
                        animateRotate: true,
                    },
                },
            });
        },
        prepareChartLabels() {
            this.chartData.labels = [];
            let array = this.listByBlocks ? this.blcks : this.cats;
            array.forEach(key => {
                this.chartData.labels.push(key.name);
            });
        },
        prepareChartValues() {
            let array = this.listByBlocks ? this.blcks : this.cats;
            this.clearChartValues();
            array.forEach(key => {
                this.chartData.values.push(key.carbonImpact);
                this.chartData.money.push(key.moneySpent);
            });
        },
        clearChartValues() {
            this.chartData.values = [];
            this.chartData.money = [];
        },
        getColors() {
            this.chartColors.forEach(color => {
                this.chartData.backgroundColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)');
                this.chartData.hoverColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.3)');
                this.chartData.colors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)');
            });
        },
        updateChart() {
            this.prepareChartLabels();
            this.prepareChartValues();
            setTimeout(() => {
                if(this.chart.data) {
                    this.chart.data.labels = this.chartData.labels;
                    if(this.chartViewMoney) {
                        this.chart.data.datasets[0].data = this.chartData.money;
                    } else {
                        this.chart.data.datasets[0].data = this.chartData.values;
                    }
                    this.chart.update({
                        duration: 1000,
                        easing: 'easeOutBounce'
                    });
                }
            }, 100);
        },
    },
}
