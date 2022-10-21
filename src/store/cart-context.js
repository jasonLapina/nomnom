import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  // DECREMENT ITEM QUANTITY BY 1
  removeItem: () => {},
  checkout: () => {},
  // DELETE ITEM FROM CART
  deleteItem: () => {},
});

const defaultCart = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'CHECKOUT') {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  if (action.type === 'ADD') {
    let updatedItems;
    const existingItem = state.items.find(
      (item) => item.name === action.item.name
    );
    if (existingItem) {
      existingItem.price = existingItem.price + action.item.price;
      existingItem.quantity = existingItem.quantity + action.item.quantity;
      updatedItems = state.items;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = state.totalAmount + action.item.price;
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
      // GET INDEX OF ITEM TO BE REMOVED
      const index = state.items.map((item) => item.name).indexOf(action.id);
      state.items[index].quantity--;
      state.items[index].price =
        state.items[index].price - action.price / action.quantity;

      const updatedItems = state.items;
      return {
        items: updatedItems,
        totalAmount: state.totalAmount - action.price / action.quantity,
      };
    }
  }
  if (action.type === 'DELETE') {
    const updatedItems = state.items.filter((item) => item.name !== action.id);
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - action.price,
    };
  }

  return defaultCart;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addItemHandler = (item) => {
    dispatchCart({
      type: 'ADD',
      item: {
        name: item.name,
        price: item.price * item.quantity,
        quantity: item.quantity,
      },
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

  const deleteHandler = (item) => {
    dispatchCart({
      type: 'DELETE',
      price: item.price,
      quantity: item.quantity,
      id: item.name,
    });
  };

  const checkoutHandler = () => {
    dispatchCart({ type: 'CHECKOUT' });
  };

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    checkout: checkoutHandler,
    deleteItem: deleteHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
