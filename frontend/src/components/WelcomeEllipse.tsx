import React from 'react'
import SearchBar from './Searchbar'
import './WelcomeEllipse.css'

const WelcomeEllipse: React.FC = () => {
    return (
        <div className="welcome-container">
            <div className="glass-primary ellipse welcome">
                <div className="welcome-aspect-ratio" />
                <div className="welcome-content">
                    <h3 className="neon-tertiary text-tertiary uppercase">
                        Welcome to stock stalker
                    </h3>
                    <h2 className="neon-tertiary uppercase">
                        Get a prediction
                    </h2>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default WelcomeEllipse
