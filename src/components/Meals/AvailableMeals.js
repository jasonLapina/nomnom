import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const res = await fetch(
        'https://nomnom2-1e4d7-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!res.ok) {
        throw new Error('Something went wrong 😢');
      }
      const data = await res.json();
      ///////CONVERT JSON OBJECT TO FLATTENED ARRAY FOR BETTER HANDLING
      const arr = Object.entries(data).flat();
      console.log(arr);
      ///////FILTERS OUT THE ID KEY FROM PREVIOUS ARRAY.
      const loadedMeals = arr.filter((entry) => typeof entry !== 'string');
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
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
      {isLoading && !httpError && (
        <h1 className={classes.loading}>loading available meals...</h1>
      )}
      {!isLoading && !httpError && <ul>{mealsList}</ul>}
      {httpError && !isLoading && (
        <h1 className={classes.error}>{httpError}</h1>
      )}
    </section>
  );
};

export default AvailableMeals;
