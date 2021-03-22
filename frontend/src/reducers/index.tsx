import { combineReducers } from 'redux';
import token from './token';
import watchlist from './watchlist';

export default combineReducers({
    token: token,
    watchlist: watchlist,
});
