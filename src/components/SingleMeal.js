import React, { useContext } from 'react';
import MealContext from '../context/mealContext';

const SingleMeal = () => {
  const { singleMeal } = useContext(MealContext);
  let ingredient = [];

  for (let i = 1; ingredient.length <= 20; i++) {
    if (singleMeal[`strIngredient${i}`]) {
      ingredient.push(
        `${singleMeal[`strIngredient${i}`]} - ${SingleMeal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  return (
    <div className='single-meal'>
      <div className='single-meal-container'>
        <h1>{singleMeal.strMeal}</h1>
        <img src={singleMeal.strMealThumb} alt={singleMeal.strMeal} />
        <div className='meal-category'>
          {singleMeal.strArea ? <p>{singleMeal.strArea}</p> : ''}
          {singleMeal.strCategory ? <p>{singleMeal.strCategory}</p> : ''}
        </div>
        <div className='main'>
          <p>{singleMeal.strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>
            {ingredient.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
