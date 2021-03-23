import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, connect } from 'react-redux';
import { AppState } from '../types'
import Layout from '../components/Layout'
import PopularStocks from '../components/PopularStocks'
import Watchlist from '../components/Watchlist'
import './Dashboard.css'

const Dashboard: React.FC = () => {
    const { token } = useSelector((state: AppState) => state)

    if (!token) {
        return <Redirect to="/signin" />
    }
    return (
        <Layout searchbar={true}>
            <div className="dashboard-container">
                <PopularStocks />
                <div className="dashboard-watchlist">
                    <Watchlist />
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        token: state.token,
    };
};
export default connect(mapStateToProps) (Dashboard);
