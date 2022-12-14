import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Checkout from './components/Cart/Checkout';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import ActiveOrder from './components/Orders/ActiveOrder';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [orderIsShown, setOrderIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(false);
    setOrderIsShown(false);
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

  const showOrderHandler = () => {
    setOrderIsShown(true);
  };

  return (
    <Fragment>
      {/* MODALS */}
      {cartIsShown && (
        <Cart onOrder={showCheckoutHandler} onHideCart={hideCartHandler} />
      )}
      {checkoutIsShown && (
        <Checkout
          onCancel={checkoutCancelHandler}
          onHideCart={hideCartHandler}
        />
      )}
      {orderIsShown && <ActiveOrder onHideCart={hideCartHandler} />}

      {/* END OF MODALS */}
      <Header onShowOrder={showOrderHandler} onShowCart={showCartHandler} />
      <main>
        <Hero />

        <Meals />
        <Testimonial />
        <Footer />
      </main>
    </Fragment>
  );
}
export default App;
