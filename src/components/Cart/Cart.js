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
        return (
          <li key={i}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.amount}</p>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <p className={classes.total}>
        total amount: <span>PHP {ctx.totalAmount}</span>
      </p>
      <div className={classes.actions}>
        <Button className={classes.close} onClick={props.onHideCart}>
          Close
        </Button>
        <Button>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
