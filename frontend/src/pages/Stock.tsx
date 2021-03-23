import React from 'react'
import Layout from '../components/Layout'
import StockInfoChart from '../components/StockInfoChart'
import StockPredictionEllipse from '../components/StockPredictionEllipse'
import Watchlist from '../components/Watchlist'
import './Stock.css'

const Stock: React.FC = () => {
    const prediction = 2
    return (
        <Layout searchbar={true}>
            <div className="stock-container">
                <div className="col-1-2">
                    <StockInfoChart prediction={prediction} />
                </div>
                <div className="col-3">
                    <StockPredictionEllipse prediction={prediction} />
                    <Watchlist />
                </div>
            </div>
        </Layout>
    )
}

export default Stock
