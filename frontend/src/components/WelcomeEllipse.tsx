import React from 'react';
import './WelcomeEllipse.css';

const WelcomeEllipse: React.FC= () => {
  return (
    <div className="container">
        <div className="glass-primary ellipse welcome">
            <div className="welcome-aspect-ratio" />
            <div className="welcome-content">
                <h1 className="neon-primary">LOREM IPSUM</h1>
                <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
            </div>
        </div>
    </div>
  );
};

export default WelcomeEllipse;
