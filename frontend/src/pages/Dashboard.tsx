import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, connect } from 'react-redux';
import Layout from '../components/Layout'
import Watchlist from '../components/Watchlist'
import './Dashboard.css'

interface DashboardState {
    token: string
    watchlist: Array<string>
}

const Dashboard: React.FC = () => {
    const { token, watchlist } = useSelector((state: DashboardState) => state)

    if (!token) {
        return <Redirect to="/signin" />
    }
    return (
        <Layout searchbar={true}>
            <div className="dashboard-container">
                <div className="popular-stocks">
                </div>
                <div className="dashboard-watchlist">
                    <Watchlist
                        watchlist={ watchlist }
                    />
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state: DashboardState) => {
    return {
        token: state.token,
        watchlist: state.watchlist
    };
};
export default connect(mapStateToProps) (Dashboard);
