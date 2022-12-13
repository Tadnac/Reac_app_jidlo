import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Nejlepší ryby a zelenina',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Cesar salát',
    description: 'Klasický cesar s kozím sýrem',
    price: 165,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'Pravá americká klasika',
    price: 300,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Zdravý a zelený',
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;