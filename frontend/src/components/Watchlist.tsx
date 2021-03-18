import React from 'react'
import WatchlistItem from './WatchlistItem'
import './Watchlist.css'

const Watchlist: React.FC = () => {
    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <h4 className="watchlist-heading">Watchlist</h4>
            </div>
            <div className="watchlist">
                <WatchlistItem symbol="ABNB" price={189.23} prediction={true} />
                <WatchlistItem symbol="GM" price={57.93} prediction={true} />
                <WatchlistItem symbol="TSLA" price={690.41} prediction={false} />
                <WatchlistItem symbol="VWAGY" price={42.34} prediction={false} />
            </div>
        </div>
    )
}

export default Watchlist
