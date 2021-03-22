import React from 'react'
import Layout from '../components/Layout'
import Watchlist from '../components/Watchlist'
import './Dashboard.css'

const Dashboard: React.FC = () => {
    return (
        <Layout searchbar={true}>
            <div className="dashboard-container">
                <div className="popular-stocks">
                </div>
                <div className="dashboard-watchlist">
                    <Watchlist />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
