import classes from './ActiveOrder.module.scss';
import Modal from '../UI/Modal';
import ProgressBar from './Progressbar';
import { useContext } from 'react';
import OrderContext from '../../store/order-context';

const ActiveOrder = (props) => {
  ///ORDER STATUS IS NUMBER CODED, STARTING FROM 1=PREPARING...
  const orderCtx = useContext(OrderContext);
  const { status, address, time } = orderCtx;
  return (
    <Modal onHideModal={props.onHideCart}>
      <h2>Active Order</h2>
      <div className={classes.orderWrapper}>
        {status !== 0 && (
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
          {status === 0 && 'No active order'}
          {status === 1 && 'Preparing your meal ⌛'}
          {status === 2 && 'Your food is on the way 🛵'}
          {status === 3 && 'Right around the corner 📌'}
          {status === 4 && 'Nomnom is outside your door 🍴'}
        </p>
      </div>
      {status !== 0 && <ProgressBar status={status} />}
    </Modal>
  );
};

export default ActiveOrder;
