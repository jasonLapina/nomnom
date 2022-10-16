import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCart.module.scss';

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.map((item) => item.amount);
  const length = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log(length);
  return (
    <button onClick={props.onClick} className={classes.cart}>
      <span>
        <ion-icon name='bag-handle-outline' />
      </span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default HeaderCart;
