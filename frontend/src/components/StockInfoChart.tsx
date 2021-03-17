import React from 'react'
import LineGraph from '../components/LineGraph'

const StockInfoChart: React.FC = () => {
    return (
        <>
            <h3 className="company-name">Apple <span className="company-symbol">APPL</span></h3>
            <div className="glass-primary card card-stock">
                <h3>$ 120.34</h3>
                <span>
                    <img src="" alt="StockStalker Arrow Up" /> $ 7.84
                    (5.53%)
                </span>
                <div className="chart glass-tertiary">
                    <LineGraph isUp={true} />
                </div>
            </div>
        </>
    )
}

export default StockInfoChart
