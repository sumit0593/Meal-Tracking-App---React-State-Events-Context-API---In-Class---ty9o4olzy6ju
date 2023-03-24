import React from 'react'
import '../styles/App.css';
import MealsProvider from './MealsProvider';
import MealsList from './MealsList';
import Counter from './Counter';

const App = () => {

  return (
    <div id="main">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  )
}


export default App;
