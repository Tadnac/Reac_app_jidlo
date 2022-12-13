import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Skvělá jídla, která dovezeme i k Vám</h2>
      <p>
        Vyberte si své jídlo a objednejte
      </p>
      <p>
        Všechna jídla jsou z kvalitních a čerstvých surovin připravovány s láskou našimi kuchaři
      </p>
    </section>
  );
};

export default MealsSummary;