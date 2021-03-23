import React from 'react'
import api from '../api'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Layout from '../components/Layout'
import StockInfoChart from '../components/StockInfoChart'
import StockPredictionEllipse from '../components/StockPredictionEllipse'
import Watchlist from '../components/Watchlist'
import './Stock.css'

interface ParamTypes {
    symbol: string
}

const Stock: React.FC = () => {
    const { symbol } = useParams<ParamTypes>()

    const fetchStockData = async () => {
        const res = await api.get(`/stock/${symbol}`)
        return res.data
    }

    const { data, isLoading, isError } = useQuery(['stock', { symbol } ], fetchStockData)


    if (isLoading) {
        return (
            <Layout searchbar={true}>
                <div className="stock-container">
                    <div className="col-1-2">
                        <div className="lds-ring">
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="lds-ring">
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <Watchlist />
                    </div>
                </div>
            </Layout>
        )
    } else if (isError) {
        return (
            <Layout searchbar={true}>
                <div className="stock-container">
                    <div className="col-1-2">
                        <h3>Something Went Wrong</h3>
                    </div>
                    <div className="col-3">
                        <h3>Something Went Wrong</h3>
                        <Watchlist />
                    </div>
                </div>
            </Layout>
        )
    } else {
        const {
            companyName,
            currentPrice,
            prediction,
            historicalData,
        } = data.stockData
        return (
            <Layout searchbar={true}>
                <div className="stock-container">
                    <div className="col-1-2">
                        <StockInfoChart
                            companyName={ companyName }
                            currentPrice={ currentPrice }
                            prediction={ parseInt(prediction) }
                            historicalData={ historicalData }
                            symbol={ symbol }
                            isLoading={ isLoading }
                            isError={ isError }
                        />
                    </div>
                    <div className="col-3">
                        <StockPredictionEllipse prediction={ parseInt(prediction) } />
                    <Watchlist />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Stock
