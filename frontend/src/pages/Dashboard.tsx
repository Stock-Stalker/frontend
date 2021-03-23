import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, connect } from 'react-redux';
import { AppState } from '../types'
import Layout from '../components/Layout'
import Watchlist from '../components/Watchlist'
import StockEllipse from '../components/StockEllipse'
import './Dashboard.css'

const Dashboard: React.FC = () => {
    const { token } = useSelector((state: AppState) => state)

    if (!token) {
        return <Redirect to="/signin" />
    }
    return (
        <Layout searchbar={true}>
            <div className="dashboard-container">
                <div className="popular-stocks">
                    <h2>Popular Stocks</h2>
                    <StockEllipse
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                    <StockEllipse
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                    <StockEllipse
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                    <StockEllipse
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                    <StockEllipse
                        companyName="Airbnb"
                        symbol="ABNB"
                        price=" 188.79"
                        prediction={1}
                    />
                </div>
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
