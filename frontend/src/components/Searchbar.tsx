import React, { useState, useEffect } from 'react'
import api from '../api'
import { IonSearchbar, IonRouterLink } from '@ionic/react'
import './Searchbar.css'

interface Stock {
    companyName: string
    symbol: string
}
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [stockList, setStockList] = useState<Array<Stock>>([])

    async function loadStockList() {
        try {
            const res: any = await api.get('/stock')
            setStockList(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadStockList()
    }, [])

    const filteredStocks =
        stockList &&
        stockList.filter((stock) => {
            const searchable = stock.companyName.split('-')[0] + stock.symbol
            const searchTerms = searchTerm.toLowerCase().trim().split(' ')
            return searchTerms.every((term) => {
                return searchable.toLowerCase().includes(term)
            })
        })
    return (
        <>
            <IonSearchbar
                type="text"
                placeholder="Search for a stock"
                value={searchTerm}
                onIonChange={(e) =>
                    setSearchTerm(e.detail.value!)
                }></IonSearchbar>
            {searchTerm.length > 0 && (
                <div className="search-results glass-input-primary">
                    {filteredStocks.length > 0 ? (
                        filteredStocks.map((stock, index) => (
                            <IonRouterLink
                                href={'/stock/' + stock.symbol}
                                key={stock.symbol + index.toString()}>
                                <div className="result">
                                    <span>
                                        {stock.symbol +
                                            ' ' +
                                            stock.companyName.split('-')[0]}
                                    </span>
                                </div>
                            </IonRouterLink>
                        ))
                    ) : (
                        <div className="no-result">
                            <span className="text-primary">
                                No results found.
                            </span>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default SearchBar
