import { createContext, useMemo, useEffect, useState } from 'react';

const OrderContext = createContext({
  items: [],
  time: '',
  address: '',
  status: '',
});

export const OrderProvider = (props) => {
  const [orderStatus, setOrderStatus] = useState(0);
  let activeOrder = useMemo(() => {}, []);
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  //CHECK FOR LATEST ORDER
  useEffect(() => {
    const lastOrder = JSON.parse(localStorage.getItem('orderData'));
    activeOrder = lastOrder;
    if (lastOrder) {
      setOrderStatus(1);
      setTime(activeOrder.time);
      setAddress(activeOrder.address);
    }
  }, [activeOrder]);
  // CHANGE ORDERSTATUS EVERY N SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      if (orderStatus === 4) {
        localStorage.removeItem('orderData');
        setOrderStatus(0);
        return;
      }
      if (orderStatus !== 0) {
        setOrderStatus((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [orderStatus]);
  return (
    <OrderContext.Provider
      value={{
        items: [],
        time: time,
        address: address,
        status: orderStatus,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
