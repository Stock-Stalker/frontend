import React from 'react'
import Layout from '../components/Layout'
import StockInfoChart from '../components/StockInfoChart'
import StockPredictionEllipse from '../components/StockPredictionEllipse'
import './Stock.css'

const Stock: React.FC = () => {
    return (
        <Layout searchbar={true}>
            <div className="container">
                <div className="col-1-2">
                    <StockInfoChart />
                </div>
                <div className="col-3">
                    <StockPredictionEllipse prediction={ true } />
                </div>
            </div>
        </Layout>
    )
}

export default Stock
