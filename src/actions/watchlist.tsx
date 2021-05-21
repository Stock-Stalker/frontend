import api from '../api'
import { Stock } from '../types'

export const setWatchlist = (watchlist: Stock[]) => {
    return {
        type: 'SET_WATCHLIST',
        payload: watchlist,
    }
}

export const loadWatchlist = () => {
    return async (dispatch: any) => {
        try {
            const res = await api.get('/api/user/watchlist')
            dispatch(setWatchlist(res.data))
        } catch (error) {
            if (
                typeof error.response !== 'undefined' &&
                error.response.status === 401
            ) {
                localStorage.removeItem('token')
                window.location.href = '/signin'
            }
        }
    }
}
