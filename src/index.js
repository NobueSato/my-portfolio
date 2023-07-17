import React from 'react';
import App from './App';
import './styles/global.css'; // Import the global CSS file

// the traditional and actual entry point for all node apps
// in React it hass code of what to render and where to render.

// Before
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// After (React18)
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
