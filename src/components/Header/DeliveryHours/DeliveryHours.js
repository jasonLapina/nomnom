import { useEffect, useState } from 'react';
import classes from './DeliveryHours.module.scss';
const DeliveryHours = () => {
  const curHour = new Date().getHours();
  // eslint-disable-next-line
  const isOpen = curHour >= 5 && curHour < 21;
  const [deliverTime, setDeliverTime] = useState('');
  const hours = Array.from({ length: 21 - curHour }).map(
    (_, i) => i + curHour + 1
  );

  useEffect(() => {
    if (isOpen) {
      const updatedDeliverTime =
        curHour < 11 ? `${curHour}AM` : `${curHour + 12}PM`;
      setDeliverTime(updatedDeliverTime);
    } else {
      setDeliverTime('Closed. Come back 5am to 9pm');
    }
  }, [curHour, isOpen]);

  const renderAvailableHours = hours.map((hour, i) => {
    return (
      <option key={i} value={hour}>
        {hour > 11 ? `${hour === 12 ? hour : hour - 12}PM` : `${hour}AM`}
      </option>
    );
  });

  return (
    <select
      onChange={(e) => setDeliverTime(e.target.value)}
      className={classes.deliveryHours}
      name='deliverTime'
      id='deliverTime'
    >
      <option value='now'>{`Now (${hours[0] - 1}${
        curHour < 11 ? 'AM' : 'PM'
      })`}</option>
      {isOpen && renderAvailableHours}
    </select>
  );
};

export default DeliveryHours;

/*
 `Now: (${
          curHour > 11
            ? `${curHour === 12 ? curHour : curHour - 12}PM`
            : `${curHour}AM`
        })`
*/
