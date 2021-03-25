import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { Stock } from '../types'
import { IonSearchbar } from '@ionic/react'
import './Searchbar.css'

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [stockList, setStockList] = useState<any[]>([])

    async function loadStockList() {
        try {
            const res: any = await api.get('/api/stock')
            setStockList(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadStockList()
    }, [])

    function filter(comparator: (stock: Stock) => boolean, array: any[]) {
        const result: any[] = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] && comparator(array[i])) {
                result.push(array[i])
            }
        }
        return result
    }

    function searchComparator(stock: Stock) {
        const searchable = stock.companyName
            ? stock.companyName.split('-')[0] + stock.symbol
            : ''
        const searchTerms = searchTerm.toLowerCase().trim().split(' ')
        return searchTerms.every((term) => {
            return searchable.toLowerCase().includes(term)
        })
    }
    const checkFilter = stockList && searchTerm && searchTerm.length > 0
    const filteredStocks = checkFilter
        ? filter(searchComparator, stockList)
        : []

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
                            <Link
                                to={'/stock/' + stock.symbol}
                                key={stock.symbol + index.toString()}
                                onClick={(e) => setSearchTerm('')}>
                                <div className="result">
                                    <span>
                                        {stock.symbol +
                                            ' ' +
                                            stock.companyName.split('-')[0]}
                                    </span>
                                </div>
                            </Link>
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
