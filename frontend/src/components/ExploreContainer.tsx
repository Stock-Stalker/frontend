import React from 'react';
import './ExploreContainer.css';

const ExploreContainer: React.FC= () => {
  return (
    <div className="container">
        <div className="glass-primary ellipse" style={{minHeight: '500px', width: '500px', margin: 'auto', paddingTop: '15%'}}>
          <h1 className="neon-primary">LOREM IPSUM</h1>
          <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </div>
  );
};

export default ExploreContainer;
