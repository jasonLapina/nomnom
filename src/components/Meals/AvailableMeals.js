import classes from './AvailableMeals.module.scss';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish, rice and veggies',
    price: 200,
  },
  {
    id: 'm2',
    name: 'Sisig',
    description: 'A german specialty!',
    price: 120,
  },
  {
    id: 'm3',
    name: 'Wagyu',
    description: 'Cheesy, raw, meaty',
    price: 220,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy and delicious',
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, i) => {
    return (
      <li key={i}>
        <h3>{meal.name}</h3>
      </li>
    );
  });
  return (
    <section className={classes.availableMeals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
