import Card from '../../UI/Card';
import classes from './MealItem.module.scss';
const MealItem = (props) => {
  return (
    <Card className={classes.card}>
      <li className={classes.mealItem}>
        <img className={classes.img} src={props.photo} alt='delicious meal' />
        <div className={classes.details}>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.cost}>
            <p className={classes.price}>
              <span>₱</span>
              {props.price}
            </p>
            <form>
              <label htmlFor='quantity'>Quantity</label>
              <input
                defaultValue={0}
                min={0}
                max={5}
                step={1}
                id='quantity'
                type='number'
              />
            </form>
          </div>
          <button className={classes.btn}>Add to cart</button>
        </div>
      </li>
    </Card>
  );
};

export default MealItem;