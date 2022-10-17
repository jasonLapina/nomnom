import classes from './Checkout.module.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const Checkout = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <button onClick={props.onHideCart} className={classes.btnClose}>
        x
      </button>
      <form className={classes.checkout}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' />
        </div>
        <div className={classes.control}>
          <label htmlFor='City'>City</label>
          <input type='text' id='City' />
        </div>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button>Confirm</Button>
      </form>
    </Modal>
  );
};

export default Checkout;
