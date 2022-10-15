import HeaderCart from './HeaderCart';

const Header = () => {
  return (
    <header>
      <a href='/'>nomnom LOGO</a>
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
