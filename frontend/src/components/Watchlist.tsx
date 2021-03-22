import React from 'react'
import { useSelector, connect } from 'react-redux';
import WatchlistItem from './WatchlistItem'
import './Watchlist.css'

interface WatchlistState {
    token: string
    watchlist: Array<string>
}

const Watchlist: React.FC = () => {
    const { watchlist } = useSelector((state: WatchlistState) => state)

    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <h4 className="watchlist-heading">Watchlist</h4>
            </div>
            <div className="watchlist">
                <WatchlistItem symbol="ABNB" price={189.23} prediction={true} />
                <WatchlistItem symbol="GM" price={57.93} prediction={true} />
                <WatchlistItem
                    symbol="TSLA"
                    price={690.41}
                    prediction={false}
                />
                <WatchlistItem
                    symbol="VWAGY"
                    price={42.34}
                    prediction={false}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: WatchlistState) => {
    return {
        watchlist: state.watchlist,
    };
};
export default connect(mapStateToProps) (Watchlist);
