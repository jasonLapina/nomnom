import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import FeaturedIn from './components/FeaturedIn/FeaturedIn';
import Hero from './components/Hero/Hero';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <FeaturedIn />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
