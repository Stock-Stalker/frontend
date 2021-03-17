import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IonSearchbar } from '@ionic/react'
import './Searchbar.css'
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [stockList, setStockList] = useState<Array<object>>([])

    async function loadStockList() {
        const res: Array<object> = await axios.get(process.env.REACT_APP_URI + '/stocks')
        setStockList(res)
    }

    useEffect(() => {
        loadStockList()
    }, [])
    console.log(stockList)
    return (
        <IonSearchbar
            type="text"
            placeholder="Search for a stock"
            value={searchTerm}
            onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>
    )
}

export default SearchBar
