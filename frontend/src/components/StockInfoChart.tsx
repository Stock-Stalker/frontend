import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../api'
import LineGraph from '../components/LineGraph'
import TimeFrameButtons from '../components/TimeFrameButtons'
import WatchlistToggle from '../components/WatchlistToggle'
import arrowUp from '../assets/stockStalkerArrowUp.svg'
import arrowDown from '../assets/stockStalkerArrowDown.svg'

interface Prediction {
    prediction: boolean
}

interface ParamTypes {
    symbol: string
}

const StockInfoChart: React.FC<Prediction> = ({ prediction }) => {
    const [timeFrame, setTimeFrame] = useState<string>('D')
    const { symbol } = useParams<ParamTypes>()

    const fetchStockData = useCallback(async () => {
        const res = await api.get(`/stocks/${symbol}`)
        return res.data
    }, [])

    const { data, isLoading, isError } = useQuery('weekly', fetchStockData, {
        retry: false,
        staleTime: Infinity,
    })

    if (isLoading) {
        return <h3>Loading...</h3>
    } else if (isError) {
        return <h3>Something Went Wrong</h3>
    } else {
        const timeFrames = ['D']

        const {
            companyName,
            currentPrice,
            historicalData,
            symbol,
        } = data.stockData

        const getTimeFrames = () => {
            switch (true) {
                case historicalData.length > 251:
                    timeFrames.push('W', 'M', '3M', '6M', 'Y')
                    break
                case historicalData.length > 125:
                    timeFrames.push('W', 'M', '3M', '6M')
                    break
                case historicalData.length > 62:
                    timeFrames.push('W', 'M', '3M')
                    break
                case historicalData.length > 20:
                    timeFrames.push('W', 'M')
                    break
                case historicalData.length > 4:
                    timeFrames.push('W')
                    break
            }
        }

        const getGraphData = () => {
            let days
            let baseline: Array<String> = []
            const graphData: Array<String> = []
            switch (timeFrame) {
                case 'D':
                    days = 0
                    for (let i = days; i >= 0; i--) {
                        graphData.push(historicalData[i].open)
                        graphData.push(historicalData[i].close)
                    }
                    baseline = new Array(1)
                    baseline.fill(historicalData[days].open, 0, 1)
                    return { graphData, baseline }
                case 'W':
                    days = 4
                    break
                case 'M':
                    days = 20
                    break
                case '3M':
                    days = 62
                    break
                case '6M':
                    days = 125
                    break
                case 'Y':
                    days = 251
                    break
                default:
                    return { graphData, baseline }
            }
            for (let i = days; i >= 0; i--) {
                graphData.push(historicalData[i].open)
                graphData.push(historicalData[i].close)
            }
            const arraySize = days * 2 + 2
            baseline = new Array(arraySize)
            baseline.fill(historicalData[days].open, 0, arraySize)
            return { graphData, baseline }
        }

        getTimeFrames()

        const { graphData, baseline } = getGraphData()

        const open = graphData[0]
        const close = graphData[graphData.length - 1]

        const isPositive: boolean = +close - +open > 0
        const changeSinceOpen: Number = Math.abs(+(+close - +open).toFixed(2))
        const changePercentage: Number = +(
            (Math.abs(+close - +open) / +open) *
            100
        ).toFixed(2)
        const color = isPositive ? 'tertiary' : 'secondary'

        const watchlist: Array<string> = ['AAPL', 'ABNB', 'TSLA', 'GM']
        return (
            <>
                <h3 className="company-name">
                    {companyName.split('-')[0]}{' '}
                    <span className="company-symbol">{symbol}</span>
                </h3>
                <WatchlistToggle
                    inWatchlist={ watchlist.includes(symbol)}
                    symbol={ symbol }
                    prediction={ isPositive }
                />
                <div className="glass-primary card card-stock">
                    <h3>$ {parseInt(currentPrice).toFixed(2)}</h3>
                    <span className={`text-${color}`}>
                        <img
                            width="30px"
                            src={isPositive ? arrowUp : arrowDown}
                            alt="StockStalker Arrow"
                        />{' '}
                        $ {changeSinceOpen} ({changePercentage}%)
                    </span>
                    <div className={`chart glass-${color}`}>
                        <LineGraph
                            prediction={isPositive}
                            graphData={graphData}
                            baseline={baseline}
                            timeFrame={timeFrame}
                        />
                    </div>
                    <TimeFrameButtons
                        prediction={isPositive}
                        selectedTimeFrame={timeFrame}
                        timeFrames={timeFrames}
                        toggleTimeFrame={(t: string) => setTimeFrame(t)}
                    />
                </div>
            </>
        )
    }
}

export default StockInfoChart
