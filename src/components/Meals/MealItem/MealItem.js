import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './MealItem.module.scss';
import { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
  const quantityInputRef = useRef();
  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (quantityInputRef.current.value == 0) return;
    ctx.addItem({
      name: props.name,
      price: props.price,
      quantity: Number(quantityInputRef.current.value),
    });
  };
  return (
    <Card className={classes.card}>
      <li className={classes.mealItem}>
        {/* <img className={classes.img} src={props.photo} alt='delicious meal' /> */}
        <div className={classes.details}>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.cost}>
            <p className={classes.price}>
              <span>₱</span>
              {props.price}
            </p>
            <form onSubmit={submitHandler}>
              <label htmlFor='quantity'>Qty.</label>
              <input
                placeholder='0'
                ref={quantityInputRef}
                min={0}
                step={1}
                id='quantity'
                type='number'
              />
              <Button className={classes.btn}>Add to cart</Button>
            </form>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
