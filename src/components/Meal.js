import React from 'react';

const Meal = ({ meal }) => {
  return (
    <div className='meal'>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className='meal-info' data-mealid={meal.idMeal}>
        <h3 className='meal-info-text' data-mealid={meal.idMeal}>
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
};

export default Meal;
