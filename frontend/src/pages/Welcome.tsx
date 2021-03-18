import React from 'react'
import Layout from '../components/Layout'
import WelcomeEllipse from '../components/WelcomeEllipse'
import './Welcome.css'

const Welcome: React.FC = () => {
    return (
        <Layout>
            <WelcomeEllipse />
        </Layout>
    )
}

export default Welcome
