import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/css/main.css';
import StockDataProvider from './providers/StockDataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StockDataProvider>
      <App />
    </StockDataProvider>
  </React.StrictMode>
);
