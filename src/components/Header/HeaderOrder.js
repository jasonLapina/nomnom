import { useContext } from 'react';
import OrderContext from '../../store/order-context';
import Tiptool from '../UI/TipTool';
import classes from './HeaderOrder.module.scss';

const HeaderOrder = (props) => {
  const orderCtx = useContext(OrderContext);
  const { status } = orderCtx;

  return (
    <Tiptool title='Active Order'>
      <button
        className={status !== 0 ? classes.active : ''}
        onClick={props.onClick}
      >
        <ion-icon name='reader-outline' />
        {status !== 0 && <span className={classes.badge}>1</span>}
      </button>
    </Tiptool>
  );
};

export default HeaderOrder;
