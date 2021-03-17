import React from 'react'
import { Line } from 'react-chartjs-2'

const startValue = 100
const data = [startValue, 90, 80, 70, 80, 90, 100, 110, 120, 130, 140, 145]

const LineGraph: React.FC = () => (
  <Line
    data={{
      labels: data,
      datasets: [
        {
          data: data,
          backgroundColor: [
            'rgba(0, 0, 0, 0)'
          ],
          borderColor: [
            '#65C8FF'
          ],
          borderWidth: 3,
          pointStyle: 'rectRounded',
          pointBackgroundColor: '#65C8FF',
          pointBorderColor: '#65C8FF',
          pointRadius: '0',
          pointHoverRadius: '6'
        },
        {
          data: [startValue, startValue, startValue, startValue, startValue, startValue, startValue, startValue, startValue, startValue, startValue, startValue],
          backgroundColor: [
            'rgba(0, 0, 0, 0)'
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.5)'
          ],
          borderWidth: 1,
          pointStyle: 'rectRounded',
          pointBackgroundColor: '#65C8FF',
          pointBorderColor: '#65C8FF',
          pointRadius: '0',
          pointHoverRadius: '0',
          borderDash: [10,5],
          pointHoverBorderWidth: '0'
        }
      ]
    }}
    height={300}
    width={600}
    options={{
      maintainAspctRatio: false,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false
      },
    }}
  />
)

export default LineGraph
