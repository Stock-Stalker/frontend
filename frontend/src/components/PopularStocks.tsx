import React from 'react'
import { useQuery } from 'react-query'
import api from '../api'
// import StockEllipse from './StockEllipse'

const PopularStocks: React.FC = () => {
    const fetchStockData = async () => {
        const res = await api.get('/stock/popular')
        return res.data
    }

    const { data, isLoading, isError } = useQuery('popularStock', fetchStockData)

    if (isLoading) {
        return <h3>Loading...</h3>
    } else if (isError) {
        return <h3>Something Went Wrong</h3>
    } else {
        console.log(typeof data)
        return (
            <div className="popular-stocks">
                <h2>Popular Stocks</h2>
                {/* data.map((stock: any) =>
                    <StockEllipse
                        key={stock}
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                ) */}
            </div>
        )
    }

}

export default PopularStocks
