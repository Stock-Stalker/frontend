import React, { useState, useCallback } from 'react'
import api from '../api'
import LineGraph from '../components/LineGraph'
import TimeFrameButtons from '../components/TimeFrameButtons'
import arrowUp from '../assets/stockStalkerArrowUp.svg'
import arrowDown from '../assets/stockStalkerArrowDown.svg'

interface Prediction {
    prediction: boolean
}

const StockInfoChart: React.FC<Prediction> = ({ prediction }) => {
    const fetchStockData = useCallback(async () => {
        const symbol = 'aapl'
        const res = await api.get(`/stocks/${symbol}`)
        console.log(res.data)
    }, [])

    fetchStockData()

    const color = prediction ? 'tertiary' : 'secondary'
    const [timeFrame, setTimeFrame] = useState<string>('D')
    return (
        <>
            <h3 className="company-name">
                Apple <span className="company-symbol">APPL</span>
            </h3>
            <div className="glass-primary card card-stock">
                <h3>$ 120.34</h3>
                <span className={`text-${color}`}>
                    <img
                        width="30px"
                        src={prediction ? arrowUp : arrowDown}
                        alt="StockStalker Arrow"
                    />{' '}
                    $ 7.84 (5.53%)
                </span>
                <div className={`chart glass-${color}`}>
                    <LineGraph prediction={prediction} />
                </div>
                <TimeFrameButtons
                    prediction={prediction}
                    selectedTimeFrame={timeFrame}
                    toggleTimeFrame={(t: string) => setTimeFrame(t)}
                />
            </div>
        </>
    )
}

export default StockInfoChart
