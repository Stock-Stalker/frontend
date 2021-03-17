import React from 'react'
import LineGraph from '../components/LineGraph'
import arrowUp from '../assets/stockStalkerArrowUp.svg'
import arrowDown from '../assets/stockStalkerArrowDown.svg'

interface Prediction {
    prediction: boolean
}

const StockInfoChart: React.FC<Prediction> = ({ prediction }) => {
    const color = prediction ? 'tertiary' : 'secondary'

    return (
        <>
            <h3 className="company-name">Apple <span className="company-symbol">APPL</span></h3>
            <div className="glass-primary card card-stock">
                <h3>$ 120.34</h3>
                <span>
                    <img width="30px" src={ prediction ? arrowUp : arrowDown } alt="StockStalker Arrow" /> $ 7.84
                    (5.53%)
                </span>
                <div className={`chart glass-${color}`}>
                    <LineGraph isUp={true} />
                </div>
            </div>
        </>
    )
}

export default StockInfoChart
