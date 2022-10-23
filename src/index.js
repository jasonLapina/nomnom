import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import { CartProvider } from './store/cart-context';
import { OrderProvider } from './store/order-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </CartProvider>
);
