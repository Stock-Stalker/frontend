import api from '../api';
// import axios from 'axios';
interface Stock {
    _id: string
    symbol: string
    companyName: string
}

export const setWatchlist = (watchlist: Array<Stock>) => {
    return {
        type: 'SET_WATCHLIST',
        payload: watchlist
    };
};

export const loadWatchlist = () => {
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    console.log('world')
    return async (dispatch: any) => {
        try {
            const res = await api.get('/user/watchlist')
            dispatch(setWatchlist(res.data));
        } catch (error) {
            if (typeof error.response !== 'undefined' && error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/signin';
            }
        }
    }
    // return (dispatch: any) => {
    //     console.log('!')
    //     api.get('/user/watchlist').then((res: any) => {
    //         return dispatch(setWatchlist(res.data.watchlist));
    //     }).catch((error: any) => {
    //         if (typeof error.response !== 'undefined' && error.response.status === 401) {
    //             localStorage.removeItem('token');
    //             window.location.href = '/signin';
    //         }
    //     })
    // }
}
