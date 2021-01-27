import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MealState from './context/MealState';

ReactDOM.render(
  <React.StrictMode>
    <MealState>
      <App />
    </MealState>
  </React.StrictMode>,
  document.getElementById('root')
);
