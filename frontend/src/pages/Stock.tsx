import React from 'react'
import Layout from '../components/Layout'
<<<<<<< HEAD
import LineGraph from '../components/LineGraph'
import Watchlist from '../components/Watchlist'
=======
import StockInfoChart from '../components/StockInfoChart'
import StockPredictionEllipse from '../components/StockPredictionEllipse'
>>>>>>> 07928b37fb88a571df576a54d10512c9ea676c14
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
                </div>
            </div>
<<<<<<< HEAD
            <Watchlist />

=======
>>>>>>> 07928b37fb88a571df576a54d10512c9ea676c14
        </Layout>
    )
}

export default Stock
