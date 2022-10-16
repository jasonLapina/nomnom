import { createContext, useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const defaultCart = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems;
    const existingItem = state.items.find(
      (item) => item.name == action.item.name
    );
    if (existingItem) {
      existingItem.price = existingItem.price + action.item.price;
      existingItem.quantity = existingItem.quantity + action.item.quantity;
      updatedItems = state.items;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    if (action.quantity === 1) {
      const updatedItems = state.items.filter(
        (item) => item.name !== action.id
      );

      return {
        items: updatedItems,
        totalAmount: state.totalAmount - action.price * action.quantity,
      };
    } else {
      const updatedItems = state.items;
      /// ATTEMPT

      return {
        items: updatedItems,
        totalAmount: state.totalAmount,
      };
    }
  }

  return defaultCart;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addItemHandler = (item) => {
    dispatchCart({
      type: 'ADD',
      item: { name: item.name, price: item.price, quantity: item.quantity },
    });
  };
  const removeItemHandler = (item) => {
    dispatchCart({
      type: 'REMOVE',
      price: item.price,
      quantity: item.quantity,
      id: item.name,
    });
  };

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
