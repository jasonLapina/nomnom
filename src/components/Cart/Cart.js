import classes from './Cart.module.scss';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes.cartItems}>
      {ctx.items.map((item, i) => {
        const addHandler = () => {
          ctx.addItem({
            name: item.name,
            //// DIVIDING BY QUANTITY AVOIDS DOUBLE PRICING ///
            price: item.price / item.quantity,
            quantity: 1,
          });
        };

        const removeHandler = () => {
          ctx.removeItem(item);
        };
        return (
          <li key={i}>
            <h3>{item.name}</h3>
            <div className={classes.amount}>
              <p>
                <span>₱</span>
                {item.price}
              </p>
              <p className={classes.quantity}>
                {item.quantity == 1 && (
                  <Button onClick={removeHandler} className={classes.reduce}>
                    <ion-icon name='trash-outline'></ion-icon>
                  </Button>
                )}
                {item.quantity !== 1 && (
                  <Button onClick={removeHandler} className={classes.reduce}>
                    -
                  </Button>
                )}
                <span>x</span> {item.quantity}
                <Button onClick={addHandler}>+</Button>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      <h2>Your Cart</h2>
      {cartItems}
      {ctx.items.length == 0 && (
        <h2 className={classes.noItems}>Add items to your cart!</h2>
      )}
      <p className={classes.total}>
        total amount: <span>PHP {ctx.totalAmount}</span>
      </p>
      <button onClick={props.onHideCart} className={classes.btnClose}>
        x
      </button>
      {ctx.items.length !== 0 && (
        <Button className={classes.btnOrder}>Order</Button>
      )}
    </Modal>
  );
};

export default Cart;
