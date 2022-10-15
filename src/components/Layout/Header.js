import HeaderCart from './HeaderCart';
import classes from './Header.module.scss';
import logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <a href='/'>
        NomNom <img src={logo} alt='nomnom logo' />
      </a>
      <div>deliver where</div>
      <div>deliver when</div>
      <div>
        1. user 2. favorites
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
