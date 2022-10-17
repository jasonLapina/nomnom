import classes from './Checkout.module.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Checkout = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;
  console.log(items);

  return (
    <Modal className={classes.modal} onHideCart={props.onHideCart}>
      <button onClick={props.onHideCart} className={classes.btnClose}>
        x
      </button>
      <div className={classes.orders}>
        <h2>Your Order</h2>
        {items.map((item, i) => {
          return (
            <div key={i}>
              {item.quantity} {item.quantity > 1 ? 'orders' : 'order'} of{' '}
              <span className={classes.itemName}>{item.name}</span> ={' '}
              <span className={classes.itemPrice}>
                {item.price * item.quantity}
              </span>
            </div>
          );
        })}
      </div>
      <form className={classes.checkout}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='note'>Note to rider</label>
          <input type='text' id='note' />
        </div>

        <p>
          Total amount of
          <span className={classes.total}>{ctx.totalAmount}</span>
        </p>
        <div className={classes.actions}>
          <Button className={classes.cancel} onClick={props.onCancel}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
