import classes from './Checkout.module.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';

const Checkout = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkedOut, setHasCheckedOut] = useState(false);
  const [userName, setUserName] = useState(' ');
  const [userContact, setUserContact] = useState('');
  const nameRef = useRef();
  const contactRef = useRef();
  const noteRef = useRef();
  const paymentRef = useRef();
  const nameChangeHandler = () => {
    setUserName(nameRef.current.value);
  };
  const contactChangeHandler = () => {
    setUserContact(contactRef.current.value);
  };
  const ctx = useContext(CartContext);
  const { items, checkout, totalAmount } = ctx;
  // GETTING DELIVERY LOCATION AND TIME
  const deliveryLocation = document.getElementById('location').value;
  const deliveryTime = document.getElementById('deliverTime').value;
  //////CHECKOUT HANDLER
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enteredContact = contactRef.current.value.trim();
    ///VALIDATION
    if (
      +enteredContact[0] === 0 &&
      +enteredContact[1] === 9 &&
      enteredContact.length === 11
    ) {
      const checkoutData = {
        items: items,
        total: totalAmount,
        name: nameRef.current.value,
        address: deliveryLocation,
        time: deliveryTime,
        contact: contactRef.current.value,
        payment: paymentRef.current.value,
        note: noteRef.current.value,
      };
      fetch(
        'https://nomnom-b7132-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
        {
          method: 'POST',
          body: JSON.stringify(checkoutData),
        }
      );
      //////// STORING USER DATA
      const { name, contact, address } = checkoutData;
      const userData = {
        name: name,
        contact: contact,
        address: address,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsSubmitting(false);
      setHasCheckedOut(true);
      // CLEARS USER'S CART ITEMS
      checkout();
      window.location.reload();
    } else {
      alert('Please enter correct contact no. format');
      return;
    }
  };
  /// CHECK IF USER HAS ALREADY CHECKED OUT BEFORE. RETREIVE NAME AND CONTACT TO EASE CHECKOUT PROCESS
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    const { name, contact } = savedUser;
    setUserName(name);
    setUserContact(contact);
  }, []);
  ///////LOADING STATE///////////
  if (isSubmitting)
    return (
      <Modal onHideCart={props.onHideCart}>
        <button onClick={props.onHideCart} className={classes.btnClose}>
          x
        </button>
        <h2>Submitting your order...</h2>
      </Modal>
    );
  ///////CHECKEDOUT STATE///////////
  if (checkedOut)
    return (
      <Modal onHideCart={props.onHideCart}>
        <button onClick={props.onHideCart} className={classes.btnClose}>
          x
        </button>
        <h2>Order submitted!</h2>
      </Modal>
    );
  /////////DEFAULT STATE //////////
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
            Deliver to {deliveryLocation}{' '}
            {deliveryTime === 'now'
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
              onChange={nameChangeHandler}
              value={userName}
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
              onChange={contactChangeHandler}
              value={userContact}
              required
              ref={contactRef}
              placeholder='09...'
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
