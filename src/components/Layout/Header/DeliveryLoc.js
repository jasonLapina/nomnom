import { useEffect, useRef, useState, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './DeliveryLoc.module.scss';
const DeliveryLoc = () => {
  const [address, setAdress] = useState(``);
  const addressRef = useRef();

  useEffect(() => {
    const savedAddress = localStorage.getItem('address');
    setAdress(savedAddress);
  }, []);

  const changeHandler = () => {
    const enteredAddress = addressRef.current.value;
    setAdress(enteredAddress);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAddress = addressRef.current.value;
    localStorage.setItem('address', enteredAddress);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={classes['delivery-location-wrapper']}
    >
      <label htmlFor='location'>Deliver where:</label>
      <input
        placeholder='Street, City'
        ref={addressRef}
        onChange={changeHandler}
        value={address}
        type='text'
        id='location'
      />
    </form>
  );
};

export default DeliveryLoc;
