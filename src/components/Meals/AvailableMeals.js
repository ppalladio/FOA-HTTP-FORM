import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch(
                'https://react-c749e-default-rtdb.firebaseio.com/meals.json',
            );
            if (!res.ok) {
                throw new Error(" can't get data");
            }
            const resData = await res.json();
            const LoadedMeals = [];
            for (const key in resData) {
                LoadedMeals.push({
                    id: key,
                    name: resData[key].name,
                    description: resData[key].description,
                    price: resData[key].price,
                });
            }
            setMeals(LoadedMeals);
            setLoading(false);
        };

        fetchMeals().catch((error) => {
            setLoading(false);
            setError(error.message);
        });
    }, []);
    if (loading) {
        return <section className={classes.loading}>page is loading</section>;
    }
    if (error) {
        return <section className={classes.error}>{error}</section>;
    }
    const mealsList = meals.map((meal) => (
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
