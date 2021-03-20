import React from 'react'
import { IonRouterLink } from '@ionic/react'
import './WatchlistItem.css'
import arrowUp from '../assets/stockStalkerArrowUp.svg'
import arrowDown from '../assets/stockStalkerArrowDown.svg'

interface WatchlistItemDetails {
    symbol: string
    price: number
    prediction: boolean
}

const WatchlistItem: React.FC<WatchlistItemDetails> = ({
    symbol,
    price,
    prediction,
}) => {
    const color = prediction ? 'tertiary' : 'secondary'

    return (
        <IonRouterLink href={`/stock/${symbol}`} key={symbol}>
            <div className={`watchlist-item text-${color}`}>
                <h5>{symbol}</h5>
                <div className="watchlist-item-details">
                    <p className={`text-${color}`}>${price}</p>
                    <span className={`text-${color}`}>
                        <img
                            width="30px"
                            src={prediction ? arrowUp : arrowDown}
                            alt="StockStalker Arrow"
                        />
                    </span>
                </div>
            </div>
        </IonRouterLink>
    )
}

export default WatchlistItem
