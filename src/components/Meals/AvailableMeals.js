import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import sushi from '../../assets/Meals/sushi.webp';
import tapsilog from '../../assets/Meals/tapsilog.webp';
import burger from '../../assets/Meals/burger.webp';
import salad from '../../assets/Meals/salad.webp';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Nigiri Sushi',
    description: 'Finest fish, rice and veggies',
    price: 200,
    photo: sushi,
  },
  {
    id: 'm2',
    name: 'Tapsilog',
    description: 'A filipinoy specialty!',
    price: 120,
    photo: tapsilog,
  },
  {
    id: 'm3',
    name: 'Wagyu Burger',
    description: 'Cheesy, raw, meaty',
    price: 220,
    photo: burger,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy and delicious',
    price: 180,
    photo: salad,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, i) => {
    return (
      <MealItem
        photo={meal.photo}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.availableMeals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
