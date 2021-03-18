import React, { useState } from 'react'
import { IonSearchbar } from '@ionic/react'
import './Searchbar.css'
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
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
