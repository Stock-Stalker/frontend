import React from 'react'
import { IonIcon } from '@ionic/react'
import { star, starOutline } from 'ionicons/icons'
import api from '../api'
import './WatchlistToggle.css'

interface WatchlistToggleProps {
    inWatchlist: boolean
    symbol: string
    prediction: boolean
}

const WatchlistToggle: React.FC<WatchlistToggleProps> = ({
    inWatchlist,
    symbol,
    prediction,
}) => {
    const color = prediction ? 'tertiary' : 'secondary'

    async function toggleWatchlist() {
        try {
            await api.patch('/user/watchlist', {
                symbol: symbol,
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <IonIcon
            icon={ inWatchlist ? star : starOutline }
            size="large"
            color={ color }
            className="watchlist-toggle"
            onClick={ toggleWatchlist }
        />
    )
}

export default WatchlistToggle
