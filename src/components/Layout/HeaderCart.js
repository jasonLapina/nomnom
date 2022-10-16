import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCart.module.scss';

const HeaderCart = (props) => {
  const [cartHasChanged, setCartHasChanged] = useState(false);
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.map((item) => item.quantity);
  const length = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  useEffect(() => {
    if (length === 0) return;
    // ENSURES ANIMATION WILL NOT PLAY BEFORE CURRENT ANIMATION ENDS //
    if (cartHasChanged) return;
    setCartHasChanged(true);
    const timer = setTimeout(() => {
      setCartHasChanged(false);
      return () => {
        clearTimeout(timer);
      };
    }, 1000);
  }, [length]);

  const cartClass = `${classes.cart} ${cartHasChanged ? classes.bump : ''}`;

  return (
    <button onClick={props.onClick} className={cartClass}>
      <span>
        <ion-icon name='bag-handle-outline' />
      </span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default HeaderCart;
