import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import { CartProvider } from './store/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
