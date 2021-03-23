export interface Stock {
    _id?: string
    companyName: string
    symbol: string
    price: string
    prediction: number
}

export interface AppState {
    token: string
    watchlist: Array<Stock>
}
