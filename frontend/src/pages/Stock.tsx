import React from 'react'
import Layout from '../components/Layout'
import Watchlist from '../components/Watchlist'
import StockInfoChart from '../components/StockInfoChart'
import StockPredictionEllipse from '../components/StockPredictionEllipse'
import './Stock.css'

const Stock: React.FC = () => {
    const prediction = false
    return (
        <Layout searchbar={true}>
            <div className="container">
                <div className="col-1-2">
                    <StockInfoChart prediction={ prediction } />
                </div>
                <div className="col-3">
                    <StockPredictionEllipse prediction={ prediction } />
                    <Watchlist />
                </div>
            </div>
        </Layout>
    )
}

export default Stock
