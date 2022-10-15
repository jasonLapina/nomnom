import classes from './HeaderCart.module.scss';
const HeaderCart = () => {
  return (
    <button>
      <span className={classes.icon}>
        <ion-icon name='bag-handle-outline' />
      </span>
      <span className={classes.yourCart}>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCart;
