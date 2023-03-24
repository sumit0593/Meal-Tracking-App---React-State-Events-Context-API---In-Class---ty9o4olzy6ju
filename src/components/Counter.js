import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
  const { meals } = useContext(MealsContext);

  const remainingMeals = meals.filter((meal) => !meal.ticked).length;

  return (
    <div>
      <h3>Meals Remaining: {remainingMeals}</h3>
    </div>
  );
};

export default Counter;
