import HeaderCart from '../HeaderCart';
import classes from './Header.module.scss';
import logo from '../../../assets/Logo.png';

import DeliveryHours from './DeliveryHours';
import DeliveryLoc from './DeliveryLoc';
import HeaderUser from '../HeaderUser';

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
        <HeaderUser />
        <HeaderCart onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
