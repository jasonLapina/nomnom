import { useEffect, useState } from 'react';
import classes from './DeliveryHours.module.scss';
const DeliveryHours = () => {
  const curHour = new Date().getHours();
  const [isOpen, setIsOpen] = useState(curHour >= 5 && curHour < 24);
  const [deliverTime, setDeliverTime] = useState('');

  const hours = Array.from({ length: 23 - curHour }).map(
    (_, i) => i + curHour + 1
  );

  useEffect(() => {
    if (isOpen) {
      setDeliverTime(
        `Now: (${curHour >= 12 ? `${curHour - 12}PM` : `${curHour}AM`})`
      );
    } else {
      setDeliverTime('Closed. We deliver from 5am to 9pm');
    }
  }, [curHour, isOpen]);

  return (
    <div className={classes['deliveryHours-wrapper']}>
      <label htmlFor='deliverTime'>Deliver when:</label>
      <select
        onChange={(e) => setDeliverTime(e.target.value)}
        className={classes.deliveryHours}
        name='deliverTime'
        id='deliverTime'
      >
        <option value='now'>{deliverTime}</option>
        {isOpen &&
          hours.map((hour, i) => {
            return (
              <option key={i} value={hour}>
                {hour > 11
                  ? `${hour === 12 ? hour : hour - 12}PM`
                  : `${hour}AM`}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default DeliveryHours;
