import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const res = await fetch(
        'https://nomnom-b7132-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );
      const data = await res.json();

      const arr = Object.entries(data).flat();
      const loadedMeals = arr.filter((entry) => typeof entry !== 'string');
      console.log(loadedMeals);
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal, i) => {
    return (
      <MealItem
        key={i}
        id={meal.id}
        image={meal.image}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.availableMeals}>
      {isLoading && (
        <h1 className={classes.loading}>loading available meals...</h1>
      )}
      {!isLoading && <ul>{mealsList}</ul>}
    </section>
  );
};

export default AvailableMeals;
