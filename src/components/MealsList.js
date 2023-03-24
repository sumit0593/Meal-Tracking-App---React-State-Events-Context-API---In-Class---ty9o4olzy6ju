import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const MealsList = () => {
  const { meals, tickMeal } = useContext(MealsContext);

  const handleMealClick = (id) => {
    tickMeal(id);
  };

  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              checked={meal.ticked}
              onChange={() => handleMealClick(meal.id)}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
