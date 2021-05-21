import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import { IonIcon } from '@ionic/react'
import { star, starOutline } from 'ionicons/icons'
import api from '../api'
import { AppState, Stock } from '../types'
import { setWatchlist } from '../actions/watchlist'
import './WatchlistToggle.css'

interface WatchlistToggleProps {
    setWatchlist: (watchlist: Stock[]) => void
    symbol: string
    prediction: number
}

const WatchlistToggle: React.FC<WatchlistToggleProps> = (props) => {
    const history = useHistory()
    const { symbol, prediction } = props
    const watchlist = useSelector((state: AppState) =>
        state.watchlist ? state.watchlist.map((item) => item.symbol) : []
    )
    const color =
        prediction === 1 ? 'tertiary' : prediction === 0 ? 'secondary' : 'light'

    async function toggleWatchlist() {
        try {
            const res = await api.patch('/api/user/watchlist', {
                symbol: symbol,
            })
            props.setWatchlist(res.data)
        } catch (error) {
            history.push('/signup')
        }
    }

    return (
        <IonIcon
            icon={watchlist.includes(symbol) ? star : starOutline}
            size="large"
            color={color}
            className="watchlist-toggle"
            onClick={toggleWatchlist}
        />
    )
}

export default connect(null, { setWatchlist })(WatchlistToggle)
