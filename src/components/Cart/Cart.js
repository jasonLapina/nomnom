import classes from './Cart.module.scss';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item, i) => {
        return (
          <li key={i}>
            <h3 key={i + 1}>{item.name}</h3>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <p className={classes.total}>total amount</p>
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
