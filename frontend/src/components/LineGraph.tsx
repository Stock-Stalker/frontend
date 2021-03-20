import React from 'react'
import { Line } from 'react-chartjs-2'

interface Prediction {
    prediction: boolean
    timeFrame: string
    graphData: Array<String>
    baseline: Array<String>
}

const LineGraph: React.FC<Prediction> = ({
    prediction,
    timeFrame,
    graphData,
    baseline,
}) => {
    const color = prediction ? '#7DFAFF' : '#FFAF5C'

    return (
        <Line
            data={{
                labels: graphData,
                datasets: [
                    {
                        label: 'stockData',
                        data: graphData,
                        backgroundColor: ['rgba(0, 0, 0, 0)'],
                        borderColor: [color],
                        borderWidth: 3,
                        pointStyle: 'rectRounded',
                        pointBackgroundColor: color,
                        pointBorderColor: color,
                        pointRadius: '0',
                        pointHoverRadius: '6',
                        fill: '+1',
                    },
                    {
                        label: 'baseline',
                        data: baseline,
                        backgroundColor: ['rgba(0, 0, 0, 0)'],
                        borderColor: ['rgba(255, 255, 255, 0.5)'],
                        borderWidth: 1,
                        pointStyle: 'rectRounded',
                        pointBackgroundColor: color,
                        pointBorderColor: color,
                        pointRadius: '0',
                        pointHoverRadius: '0',
                        borderDash: [10, 5],
                        pointHoverBorderWidth: '0',
                    },
                ],
            }}
            height={300}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
            }}
        />
    )
}

export default LineGraph
