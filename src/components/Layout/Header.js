import HeaderCart from './HeaderCart';
import classes from './Header.module.scss';
import logo from '../../assets/Logo.png';
import { useEffect, useMemo, useState } from 'react';

const Header = (props) => {
  const curHour = new Date().getHours();
  const [deliverTime, setDeliverTime] = useState('');
  const hours = Array.from({ length: 23 - curHour }).map(
    (_, i) => i + curHour + 1
  );

  useEffect(() => {
    if (curHour < 21 || curHour > 5) {
      setDeliverTime(
        `Now: (${curHour >= 12 ? `${curHour - 12}PM` : `${curHour}AM`})`
      );
    } else {
      setDeliverTime('Closed. We deliver from 5am to 9pm');
    }
  }, [curHour]);

  return (
    <header className={classes.header}>
      <a href='/'>
        NomNom <img src={logo} alt='nomnom logo' />
      </a>
      <div>deliver where</div>
      <select name='deliverTime' id='deliverTime'>
        <option value='now'>{deliverTime}</option>
        {hours.map((hour, i) => {
          return (
            <option key={i} value={hour}>
              {curHour >= 12 ? `${hour - 12}PM` : `${hour}AM`}
            </option>
          );
        })}
      </select>

      <ion-icon name='person-outline' />
      <HeaderCart onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
