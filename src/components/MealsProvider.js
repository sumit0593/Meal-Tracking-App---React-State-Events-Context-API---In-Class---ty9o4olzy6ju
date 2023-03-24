import React, { useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]

const MealsProvider = () => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = () => {

    }

    return (
        <div>
            
        </div>
    )
};

export default MealsProvider;