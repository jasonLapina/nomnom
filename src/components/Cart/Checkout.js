import classes from './Checkout.module.scss';
import Button from '../UI/Button';
const Checkout = () => {
  return (
    <form>
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
      <Button>Confirm</Button>
    </form>
  );
};

export default Checkout;
