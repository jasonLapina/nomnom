import classes from './HeaderCart.module.scss';
const HeaderCart = () => {
  return (
    <button className={classes.cart}>
      <span>
        <ion-icon name='bag-handle-outline' />
      </span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCart;
