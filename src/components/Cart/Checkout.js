import classes from './Checkout.module.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { useContext, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';

const Checkout = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkedOut, setHasCheckedOut] = useState(false);
  const nameRef = useRef();
  const contactRef = useRef();
  const noteRef = useRef();
  const paymentRef = useRef();

  const ctx = useContext(CartContext);
  const { items, checkout, totalAmount } = ctx;

  // GETTING DELIVERY LOCATION AND TIME
  const deliveryLocation = document.getElementById('location').value;
  const deliveryTime = document.getElementById('deliverTime').value;
  console.log(deliveryLocation);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enteredContact = contactRef.current.value.trim();
    if (
      enteredContact[0] == 0 &&
      enteredContact[1] == 9 &&
      enteredContact.length === 11
    ) {
      const checkoutData = {
        items: items,
        total: totalAmount,
        name: nameRef.current.value,
        payment: paymentRef.current.value,
        note: noteRef.current.value,
        address: deliveryLocation,
      };

      const res = await fetch(
        'https://nomnom-b7132-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
        {
          method: 'POST',
          body: JSON.stringify(checkoutData),
        }
      );
      setIsSubmitting(false);
      setHasCheckedOut(true);
      // CLEARS USER'S CART ITEMS
      checkout();
      // CLOSES CHECKOUT MODAL
    } else {
      alert('Please enter correct contact no. format');
    }
  };

  if (isSubmitting)
    return (
      <Modal onHideCart={props.onHideCart}>
        <button onClick={props.onHideCart} className={classes.btnClose}>
          x
        </button>
        <h2>Submitting your order...</h2>
      </Modal>
    );

  if (checkedOut)
    return (
      <Modal onHideCart={props.onHideCart}>
        <button onClick={props.onHideCart} className={classes.btnClose}>
          x
        </button>
        <h2>Order submitted!</h2>
      </Modal>
    );

  return (
    <Modal onHideCart={props.onHideCart}>
      <button onClick={props.onHideCart} className={classes.btnClose}>
        x
      </button>
      <h2 className={classes.heading}>Checkout</h2>
      <div className={classes.checkout}>
        <div className={classes.orders}>
          <h3>Order summary</h3>
          <span>
            Deliver to: {deliveryLocation}{' '}
            {deliveryTime == 'now'
              ? 'now'
              : `at ${
                  deliveryTime > 11 ? `${deliveryTime}PM` : `${deliveryTime}AM`
                }`}
            .
          </span>

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
        <form action='/' onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='name'>Name:</label>
            <input
              required
              ref={nameRef}
              placeholder='Your Name'
              type='text'
              id='name'
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Contact:</label>
            <input
              required
              ref={contactRef}
              placeholder='09...'
              type='text'
              id='contact'
            />
          </div>
          <div className={`${classes.control} ${classes.payment}`}>
            <label htmlFor='payment'>Payment:</label>
            <select ref={paymentRef} id='payment'>
              <option value='gcash'>Gcash</option>
              <option value='COD'>Cash on delivery</option>
              <option value='kiss'>Forehead kiss</option>
              <option value='soul'>Your soul</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor='note'>Note to rider:</label>
            <input
              ref={noteRef}
              placeholder='Note to rider'
              type='text'
              id='note'
            />
          </div>

          <p className={classes.total}>
            Total amount:{' '}
            <span className={classes['total__amount']}>
              PHP {ctx.totalAmount}
            </span>
          </p>
          <div className={classes.actions}>
            <Button
              type='button'
              className={classes.cancel}
              onClick={props.onCancel}
            >
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
