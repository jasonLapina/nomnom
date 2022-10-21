import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Tiptool from '../../UI/TipTool';

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
  }, [cartHasChanged, length]);
  const cartClass = `${classes.cart} ${cartHasChanged ? classes.bump : ''}`;
  return (
    <Tiptool title='Cart'>
      <button onClick={props.onClick} className={cartClass}>
        <ion-icon title='' name='bag-handle-outline' />
        <span className={classes.badge}>{length}</span>
      </button>
    </Tiptool>
  );
};

export default HeaderCart;
