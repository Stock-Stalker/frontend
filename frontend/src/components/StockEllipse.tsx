import React from 'react'
import { Link } from 'react-router-dom'
import { Stock } from '../types'
const StockEllipse: React.FC<Stock> = ({
    symbol,
    currentPrice,
    prediction,
}) => {
    const color = prediction === 1 ? 'tertiary' : prediction === 0 ? 'secondary' : 'light'

    return (
        <Link
            className={`glass-${color} ellipse ellipse-stock`}
            to={`/stock/${ symbol }`}
        >
            <h4 className={`text-${color}`}>{ symbol }</h4>
            <p className={`text-${color}`}>${ currentPrice }</p>
            <div className={`bg-desat-${color} pill`}>
                <h5 className={`text-${color}`}>
                    {prediction === 1 ? 'UP' : prediction === 0 ? 'DOWN' : 'HOLD' }
                </h5>
            </div>
        </Link>
    )
}

export default StockEllipse
