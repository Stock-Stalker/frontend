import React from 'react'
import { Line } from 'react-chartjs-2'

interface LineProps {
    isUp: boolean
}

const startValue = 100
const data = [startValue, 90, 80, 75, 80, 90, 100, 110, 120, 130, 140, 145]

const LineGraph: React.FC<LineProps> = ({ isUp }) => {
    const color = isUp ? '#7DFAFF' : '#FFAF5C'
    return (
        <Line
            data={{
                labels: data,
                datasets: [
                    {
                        data: data,
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
                        data: [
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                            startValue,
                        ],
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
                maintainAspctRatio: false,
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
