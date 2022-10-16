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
        return (
          <li key={i}>
            <h3>{item.name}</h3>
            <div className={classes.amount}>
              <p>
                <span>₱</span>
                {item.price}
              </p>
              <p className={classes.quantity}>
                <Button onClick={addHandler}>+</Button>
                <span>x</span> {item.quantity}
                {item.quantity == 1 && (
                  <Button className={classes.reduce}>
                    <ion-icon name='trash-outline'></ion-icon>
                  </Button>
                )}
                {item.quantity !== 1 && (
                  <Button className={classes.reduce}>-</Button>
                )}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      {ctx.items.length == 0 && (
        <h2 className={classes.noItems}>Add items to your cart!</h2>
      )}
      <p className={classes.total}>
        total amount: <span>PHP {ctx.totalAmount}</span>
      </p>
      <div className={classes.actions}>
        <Button className={classes.close} onClick={props.onHideCart}>
          Close
        </Button>
        {ctx.items.length !== 0 && <Button>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
