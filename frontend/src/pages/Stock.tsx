import React from 'react'
import Layout from '../components/Layout'
import circleHollow from '../assets/Circle_Hollow_Primary.png'
import LineGraph from '../components/LineGraph'
import './Stock.css'

const Stock: React.FC = () => {
    return (
        <Layout searchbar={ true }>
            <div className="container">
                <div className="glass-primary ellipse ellipse-stock">
                    <div className="ellipse-stock-aspect-ratio" />
                    <div className="ellipse-stock-content">
                        <h1>Apple</h1>
                        <p>AAPL</p>
                        <span className="font-weight-bold text-tertiary">StockStalker prediction <br /><label className="pill">UP</label></span>
                    </div>
                </div>
                <div>
                    <div className="glass-primary card card-stock">
                        <h1>$  120.34</h1>
                        <span><img src="" alt="StockStalker Arrow Up" /> $ 7.84 (5.53%)</span>
                        <div className="chart glass-tertiary">
                            <LineGraph />
                        </div>
                    </div>
                    <img className="hollow-primary" src={ circleHollow } alt="Hollow Circle Neon Illustration" />
                </div>
            </div>

        </Layout>
    )
}

export default Stock
