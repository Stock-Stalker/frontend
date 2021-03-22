import React from 'react'
import Layout from '../components/Layout'
import Watchlist from '../components/Watchlist'

const Welcome: React.FC = () => {
    return (
        <Layout searchbar={true}>
            <div className="popular-stocks">
            </div>
            <Watchlist />
        </Layout>
    )
}

export default Welcome
