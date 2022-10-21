import HeaderCart from './Cart/HeaderCart';
import classes from './Header.module.scss';
import logo from '../../assets/Logo.png';
import DeliveryHours from './DeliveryHours/DeliveryHours';
import DeliveryLoc from './DeliveryLocation/DeliveryLoc';
import HeaderUser from './User/HeaderUser';
import Orders from './Orders/Orders';
const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href='/'>
        NomNom
        <img src={logo} alt='nomnom logo' />
      </a>
      <div className={classes['time-location-wrapper']}>
        <DeliveryLoc />
        <DeliveryHours />
      </div>
      <div className={classes['userData-wrapper']}>
        <Orders />
        <HeaderUser />
        <HeaderCart onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
