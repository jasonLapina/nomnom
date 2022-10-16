import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCart.module.scss';

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);

  return (
    <button onClick={props.onClick} className={classes.cart}>
      <span>
        <ion-icon name='bag-handle-outline' />
      </span>
      <span className={classes.badge}>{ctx.items.length}</span>
    </button>
  );
};

export default HeaderCart;
