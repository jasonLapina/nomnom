import { useEffect, useMemo, useState } from 'react';
import classes from './ActiveOrder.module.scss';
import Modal from '../UI/Modal';
import ProgressBar from './Progressbar';

const ActiveOrder = (props) => {
  ///ORDER STATUS IS NUMBER CODED, STARTING FROM 1=PREPARING...
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
        return;
      }
      if (orderStatus !== 0) {
        setOrderStatus((prev) => prev + 1);
        console.log(orderStatus);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [orderStatus]);

  return (
    <Modal onHideModal={props.onHideCart}>
      <h2>Active Order</h2>
      <div className={classes.orderWrapper}>
        {orderStatus !== 0 && (
          <p>
            Deliver to: <span className={classes.address}>{address}</span>{' '}
            <span className={classes.time}>
              {time === 'now'
                ? 'ASAP'
                : `at ${time > 12 ? `${time - 12}PM` : `${time}AM`}`}
            </span>
          </p>
        )}

        <p className={classes.status}>
          {orderStatus === 0 && 'No active order'}
          {orderStatus === 1 && 'Preparing your meal ⌛'}
          {orderStatus === 2 && 'Your food is on the way 🛵'}
          {orderStatus === 3 && 'Right around the corner 📌'}
          {orderStatus === 4 && 'Nomnom is outside your door 🍴'}
        </p>
      </div>
      {orderStatus !== 0 && <ProgressBar status={orderStatus} />}
    </Modal>
  );
};

export default ActiveOrder;
