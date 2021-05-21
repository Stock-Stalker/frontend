import React from 'react'
import { useQuery } from 'react-query'
import api from '../api'
import StockEllipse from './StockEllipse'

const PopularStocks: React.FC = () => {
    const fetchStockData = async () => {
        const res = await api.get('/api/stock/popular')
        return res.data
    }

    const { data, isLoading, isError } = useQuery(
        'popularStock',
        fetchStockData,
        {
            refetchOnWindowFocus: false,
            // enabled: false // needed to handle refetchs manually
        }
    )

    if (isLoading) {
        return (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    } else if (isError) {
        return <h3>Something Went Wrong</h3>
    } else {
        return (
            <div className="popular-stocks">
                <h2>Popular Stocks</h2>
                {data &&
                    data.map((stock: any) => {
                        return (
                            <StockEllipse
                                key={stock.symbol}
                                companyName=""
                                symbol={stock.symbol}
                                currentPrice={parseFloat(
                                    stock.currentPrice
                                ).toFixed(2)}
                                prediction={stock.prediction}
                            />
                        )
                    })}
            </div>
        )
    }
}

export default PopularStocks
