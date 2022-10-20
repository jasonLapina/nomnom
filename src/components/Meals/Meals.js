import AvailableMeals from './AvailableMeals';
import classes from './Meals.module.scss';
const Meals = () => {
  return (
    <section id='meals' className={classes.meals}>
      <div className={classes.heading}>
        <h2>Meals</h2>
        <h4>Craving something? NomNom has it for you!</h4>
      </div>
      <AvailableMeals />
    </section>
  );
};

export default Meals;
