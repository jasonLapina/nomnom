import HeaderCart from '../HeaderCart';
import classes from './Header.module.scss';
import logo from '../../../assets/Logo.png';

import DeliveryHours from './DeliveryHours';
import DeliveryLoc from './DeliveryLoc';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href='/'>
        NomNom <img src={logo} alt='nomnom logo' />
      </a>
      <DeliveryLoc />
      <DeliveryHours />
      <div>
        <HeaderCart onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
