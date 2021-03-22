export default (state: any = null, action: any) => {
    switch (action.type) {
        case 'SET_WATCHLIST':
            return action.payload;
    }
    return state;
}
