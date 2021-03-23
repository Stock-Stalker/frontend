import React from 'react'
import { Link } from 'react-router-dom'
import './WatchlistItem.css'
import arrowUp from '../assets/stockStalkerArrowUp.svg'
import arrowDown from '../assets/stockStalkerArrowDown.svg'

interface WatchlistItemDetails {
    symbol: string
    price: string
    prediction: number
}

const WatchlistItem: React.FC<WatchlistItemDetails> = ({
    symbol,
    price,
    prediction,
}) => {
    const color = prediction === 1 ? 'tertiary' : prediction === 0 ? 'secondary' : 'light'

    return (
        <Link to={`/stock/${symbol}`} key={symbol}>
            <div className={`watchlist-item text-${color}`}>
                <h5>{symbol}</h5>
                <div className="watchlist-item-details">
                    <p className={`text-${color}`}>${ parseFloat(price).toFixed(2) }</p>
                    <span className={`text-${color}`}>
                        <img
                            width="30px"
                            src={prediction === 0 ? arrowDown : arrowUp}
                            alt="StockStalker Arrow"
                        />
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default WatchlistItem
