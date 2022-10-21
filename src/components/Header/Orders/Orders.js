import { useEffect, useState } from 'react';
import Tiptool from '../../UI/TipTool';
import classes from './Orders.module.scss';

const Orders = () => {
  const [activeOrder, setActiveOrder] = useState({});
  const [isPreparing, setIsPreparing] = useState(false);
  const [isDelivering, setIsDelivering] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [hasArrived, setHasArrived] = useState(false);

  const dummyDuration = 5000;

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('userData'));
    ///// DELETES ORDER FROM LOCAL STORAGE
    if (hasArrived) {
      setActiveOrder({});
    }
    if (storedOrder) {
      setActiveOrder(storedOrder);
      setIsPreparing(true);
      ///PREPARE ENDS, DELIVER STARTS
      setTimeout(() => {
        setIsPreparing(false);
        setIsDelivering(true);
        ///DELIVERY IS NEAR
        setTimeout(() => {
          setIsDelivering(false);
          setIsNear(true);
          ///RIDER HAS ARRIVED
          setTimeout(() => {
            setIsNear(false);
            setHasArrived(true);
          }, dummyDuration);
        }, dummyDuration);
      }, dummyDuration);
    }
  }, [hasArrived]);

  const { address, time } = activeOrder;
  const [showContent, setShowContent] = useState(false);

  const showContentHandler = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className={classes.orders}>
      <Tiptool title='Orders'>
        <button onClick={showContentHandler}>
          <ion-icon name='reader-outline' />
        </button>
      </Tiptool>
      <div
        className={`${classes.content} ${
          showContent ? classes.showContent : ''
        }`}
      >
        <h5>active order:</h5>
        {!address && <p className={classes.noOrder}>No active order 😢</p>}

        {isPreparing && (
          <p className={classes.status}>preparing your order ⏳</p>
        )}
        {isDelivering && (
          <p className={classes.status}>delivering your order 🛵</p>
        )}
        {isNear && <p className={classes.status}>rider is near 🍴</p>}
        {hasArrived && (
          <p className={classes.status}>
            rider has arrived at your location 📌
          </p>
        )}
        {address && <p className={classes.duration}>5-10mins</p>}
      </div>
    </div>
  );
};

export default Orders;
