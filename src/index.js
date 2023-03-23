import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-purple">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
