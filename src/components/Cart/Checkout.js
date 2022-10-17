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
    <Modal onHideCart={props.onHideCart}>
      <button onClick={props.onHideCart} className={classes.btnClose}>
        x
      </button>
      <h2 className={classes.heading}>Your Order</h2>
      <div className={classes.checkout}>
        <div className={classes.orders}>
          {items.map((item, i) => {
            return (
              <div key={i}>
                {item.quantity} {item.quantity > 1 ? 'orders' : 'order'} of{' '}
                <span className={classes.itemName}>{item.name}</span> ={' '}
                <span className={classes.itemPrice}>PHP {item.price}</span>
              </div>
            );
          })}
        </div>
        <form>
          <div className={classes.control}>
            <label htmlFor='name'>Name:</label>
            <input placeholder='Your Name' type='text' id='name' />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Contact:</label>
            <input placeholder='+63 ...' type='text' id='contact' />
          </div>
          <div className={`${classes.control} ${classes.payment}`}>
            <label htmlFor='payment'>Pay:</label>
            <select id='payment'>
              <option value='gcash'>Gcash</option>
              <option value='COD'>Cash on delivery</option>
              <option value='kiss'>Kiss on the forehead</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor='note'>Note to rider:</label>
            <input placeholder='Note to rider' type='text' id='note' />
          </div>

          <p className={classes.total}>
            Total amount:{' '}
            <span className={classes['total__amount']}>
              PHP {ctx.totalAmount}
            </span>
          </p>
          <div className={classes.actions}>
            <Button className={classes.cancel} onClick={props.onCancel}>
              Cancel
            </Button>

            <Button>Confirm</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Checkout;
