import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = React.memo(() => (
  <div className="loading-root">
    <div className="spinner" aria-hidden />
  </div>
));

export default LoadingScreen;