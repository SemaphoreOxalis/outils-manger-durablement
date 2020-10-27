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
                [255, 99, 132],
                [54, 162, 235],
                [255, 206, 86],
                [75, 192, 192],
                [153, 102, 255],
                [114, 42, 89],
                [42, 12, 241],
                [200, 198, 202],
                [142, 58, 14],
                [10, 246, 158],
                [215, 102, 45],
                [123, 56, 126],
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
                            borderAlign: 'inner',
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
            this.cats.forEach(cat => {
                this.chartData.labels.push(cat.name);
            });
        },
        prepareChartValues() {
            this.clearChartValues();
            this.cats.forEach(cat => {
                this.chartData.values.push(cat.carbonImpact);
                this.chartData.money.push(cat.moneySpent);
            });
        },
        clearChartValues() {
            this.chartData.values = [];
            this.chartData.money = [];
        },
        getColors() {
            this.chartColors.forEach(color => {
                this.chartData.backgroundColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.2)');
                this.chartData.hoverColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.5)');
                this.chartData.colors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)');
            });
        },
        updateChart() {
            this.prepareChartValues();
            if(this.chartViewMoney) {
                this.chart.data.datasets[0].data = this.chartData.money;
            } else {
                this.chart.data.datasets[0].data = this.chartData.values;
            }
            this.chart.update({
                duration: 1000,
                easing: 'easeOutBounce'
            });
        },
    },
}
