import React from 'react'
import Layout from '../components/Layout'
import StockInfoChart from '../components/StockInfoChart'
import './Stock.css'

const Stock: React.FC = () => {
    return (
        <Layout searchbar={true}>
            <div className="container">
                <div className="col-1-2">
                    <StockInfoChart />
                </div>
                <div className="col-3">
                    <div className="glass-tertiary ellipse ellipse-prediction">
                        <h4 className="text-tertiary">StockStalker Prediction:</h4>
                        <div className="glass-tertiary pill">
                            UP
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Stock
