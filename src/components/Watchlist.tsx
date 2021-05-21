import React from 'react'
import { useSelector, connect } from 'react-redux'
import { AppState, Stock } from '../types'
import WatchlistItem from './WatchlistItem'
import './Watchlist.css'

const Watchlist: React.FC = () => {
    const { token, watchlist } = useSelector((state: AppState) => state)
    console.log(watchlist)
    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <h4 className="watchlist-heading">Watchlist</h4>
            </div>
            <div className="watchlist">
                {!token ? (
                    <p>You must be logged in to view your watchlist.</p>
                ) : watchlist.length > 0 ? (
                    watchlist.map((stock: Stock) => (
                        <WatchlistItem
                            key={stock.symbol}
                            symbol={stock.symbol}
                            price={stock.currentPrice}
                            prediction={stock.prediction}
                        />
                    ))
                ) : (
                    <p>You have no items in your watchlist yet.</p>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        watchlist: state.watchlist,
    }
}
export default connect(mapStateToProps)(Watchlist)
