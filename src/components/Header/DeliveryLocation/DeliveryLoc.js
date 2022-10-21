import { useEffect, useRef, useState } from 'react';

import classes from './DeliveryLoc.module.scss';
const DeliveryLoc = () => {
  const [address, setAdress] = useState('');
  const addressRef = useRef();

  useEffect(() => {
    const savedAddress = JSON.parse(localStorage.getItem('userData')).address;
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
      <input
        placeholder='Deliver where: (Street,City)'
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
