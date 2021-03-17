import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IonSearchbar } from '@ionic/react'
import './Searchbar.css'

interface Stock {
    companyName: string,
    symbol: string,
}
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [stockList, setStockList] = useState<Array<Stock>>([])

    async function loadStockList() {
        const res: any = await axios.get(process.env.REACT_APP_URI + '/stocks')
        setStockList(res.data)
    }

    useEffect(() => {
        loadStockList()
    }, [])
    console.log(stockList)

    const filteredStocks = stockList && stockList.filter((stock) => {
        const searchable = stock.companyName.split('-')[0] + stock.symbol;
        const searchTerms = searchTerm.toLowerCase().trim().split(' ');
        return searchTerms.every(term => {
            return searchable.toLowerCase().includes(term);
        });
    });
    return (
        <>
        <IonSearchbar
            type="text"
            placeholder="Search for a stock"
            value={searchTerm}
            onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>
        {searchTerm.length > 0 && <div className="search-results">
            {
                filteredStocks.map(stock => (
                    <span key={stock.symbol}>{stock.symbol + ' ' + stock.companyName.split('-')[0]}</span>
                ))
            }
        </div>}
        </>
    )
}

export default SearchBar
