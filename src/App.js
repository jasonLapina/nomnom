import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import FeaturedIn from './components/FeaturedIn/FeaturedIn';
import Hero from './components/Hero/Hero';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Checkout from './components/Cart/Checkout';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(false);
  };

  const showCheckoutHandler = (e) => {
    setCheckoutIsShown(true);
    setCartIsShown(false);
  };

  const checkoutCancelHandler = (e) => {
    e.preventDefault();
    setCheckoutIsShown(false);
    setCartIsShown(true);
  };

  return (
    <Fragment>
      {cartIsShown && (
        <Cart onOrder={showCheckoutHandler} onHideCart={hideCartHandler} />
      )}
      {checkoutIsShown && (
        <Checkout
          onCancel={checkoutCancelHandler}
          onHideCart={hideCartHandler}
        />
      )}

      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <FeaturedIn />
        <Meals />
        <Testimonial />
      </main>
    </Fragment>
  );
}

export default App;
