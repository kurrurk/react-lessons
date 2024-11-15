import Card from "../UI/Card";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem";
import styles from './MealList.module.css';

const MealList = () => {

    const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return <section className={styles.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>        
    </section>
}

export default MealList;