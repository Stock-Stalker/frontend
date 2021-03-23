import React from 'react'
import { useSelector, connect } from 'react-redux';
import { IonIcon } from '@ionic/react'
import { star, starOutline } from 'ionicons/icons'
import api from '../api'
import { AppState, Stock } from '../types'
import { setWatchlist } from '../actions/watchlist'
import './WatchlistToggle.css'

interface WatchlistToggleProps {
    setWatchlist: (watchlist: Stock[]) => void
    symbol: string
    prediction: boolean
}

const WatchlistToggle: React.FC<WatchlistToggleProps> = (props) => {
    const { symbol, prediction } = props
    const watchlist = useSelector((state: AppState) => state.watchlist ? state.watchlist.map(item => item.symbol) : [])
    const color = prediction ? 'tertiary' : 'secondary'

    async function toggleWatchlist() {
        try {
            const res = await api.patch('/user/watchlist', {
                symbol: symbol,
            })
            props.setWatchlist(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <IonIcon
            icon={ watchlist.includes(symbol) ? star : starOutline }
            size="large"
            color={ color }
            className="watchlist-toggle"
            onClick={ toggleWatchlist }
        />
    )
}

export default connect(null,  { setWatchlist }) (WatchlistToggle);
