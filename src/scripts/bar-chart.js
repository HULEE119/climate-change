const barChartData = [
    {
        year: 1880,
        levelChanged: -183.31
    },
    {
        year: 1890,
        levelChanged: -160.71
    },
    {
        year: 1900,
        levelChanged: -152.05
    },
    {
        year: 1910,
        levelChanged: -150.95
    },
    {
        year: 1920,
        levelChanged: -138.31
    },
    {
        year: 1930,
        levelChanged: -136.01
    },
    {
        year: 1940,
        levelChanged: -121.68
    },
    {
        year: 1950,
        levelChanged: -92.25
    },
    {
        year: 1960,
        levelChanged: -70.38
    },
    {
        year: 1970,
        levelChanged: -64.75
    },
    {
        year: 1980,
        levelChanged: -37.68
    },
    {
        year: 1990,
        levelChanged: -22.85
    },
    {
        year: 2000,
        levelChanged: -8.35
    },
    {
        year: 2010,
        levelChanged: 44.19
    },
    {
        year: 2020,
        levelChanged: 74.59
    }
]

const ctx = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: barChartData.map(barOption => barOption.year),
        datasets: [{
            label: 'change in sea level (mm) compared to the 1993 - 2008 average',
            data: barChartData.map(barOption => barOption.levelChanged),
            backgroundColor: [
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)',
                'rgba(217, 240, 255, 0.4)'
            ],
            borderColor: [
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)',
                'rgba(70, 191, 223, 1)'
            ],
            borderWidth: 0.5,
            hoverBackgroundColor: [
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)',
                'rgba(217, 240, 255, 0.75)'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(47, 88, 123)',
        }]
    },
    options: {
        defaultFontFamily: "'Bebas Neue', cursive",
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    // display: false
                },
                ticks: {
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 15,
                    fontColor: "#FAF9F9",
                },
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    color: "rgb(191, 219, 247, 0)",
                    zeroLineWidth: 1,
                    zeroLineColor: "#FAF9F9"
                },
                ticks: {
                max: 150.00,
                min: -250.00,
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 12,
                fontColor: "#FAF9F9",
                }
            }]
        },
        legend: {
            display: false
        }
    }
});