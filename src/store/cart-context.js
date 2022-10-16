import { createContext, useReducer, useState } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const cartReducer = (state, action) => {
  return;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemHandler = (item) => {
    dispatchCart({ type: 'ADD', value: item });
  };
  const removeItemHandler = (id) => {};

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
