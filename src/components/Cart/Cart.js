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
            price: item.price / item.quantity,
            quantity: 1,
          });
        };
        // DECREMENTS ITEM'S QUANTITY BY 1
        const removeHandler = () => {
          ctx.removeItem(item);
        };
        // DELETES ITEM FROM CART
        const deleteHandler = () => {
          ctx.deleteItem(item);
        };
        /////////  IF CART IS NOT EMPTY /////////
        return (
          <li key={i}>
            <h3>{item.name}</h3>

            <div className={classes.amount}>
              <p>
                <span>₱</span>
                {item.price}
              </p>
              <p className={classes.quantity}>
                <Button onClick={deleteHandler} className={classes.reduce}>
                  <ion-icon name='trash-outline'></ion-icon>
                </Button>
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
  const orderHandler = () => {
    const location = document.getElementById('location');
    if (location.value.trim().length === 0) {
      alert('Please enter your location');
      props.onHideCart();
    } else {
      props.onOrder();
    }
  };

  /////// IF CART IS EMPTY ///////////
  return (
    <Modal className={classes.cart} onHideModal={props.onHideCart}>
      <h2 className={classes.heading}>Your Cart</h2>
      {cartItems}
      {ctx.items.length == 0 && (
        <p className={classes.noItems}>Add items to your cart 😋</p>
      )}
      <p className={classes.total}>
        total amount: <span>PHP {ctx.totalAmount}</span>
      </p>
      {ctx.items.length !== 0 && (
        <Button onClick={orderHandler} className={classes.btnOrder}>
          Order
        </Button>
      )}
    </Modal>
  );
};

export default Cart;
