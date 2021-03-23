import React from 'react'
import { useQuery } from 'react-query'
import api from '../api'
import StockEllipse from './StockEllipse'

const PopularStocks: React.FC = () => {
    const fetchStockData = async () => {
        const res = await api.get('/stock/popular')
        return res.data
    }

    const { data, isLoading, isError } = useQuery('popularStock', fetchStockData, {
            refetchOnWindowFocus: false,
            // enabled: false // needed to handle refetchs manually
        }
    )

    if (isLoading) {
        return <h3>Loading...</h3>
    } else if (isError) {
        return <h3>Something Went Wrong</h3>
    } else {
        console.log(data)
        return (
            <div className="popular-stocks">
                <h2>Popular Stocks</h2>
                { data && data.map((stock: any) => {
                    return (
                        <StockEllipse
                            key={ stock.symbol }
                            companyName=""
                            symbol={ stock.symbol }
                            currentPrice={ stock.currentPrice }
                            prediction={ stock.prediction }
                        />
                    )
                } ) }
            </div>
        )
    }

}

export default PopularStocks
