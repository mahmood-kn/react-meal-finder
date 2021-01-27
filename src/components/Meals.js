import React, { useContext } from 'react';
import MealContext from '../context/mealContext';
import Meal from './Meal';

const Meals = () => {
  const { meals, term, getMealByID } = useContext(MealContext);
  const handleClick = (e) => {
    if (
      e.target.classList.contains('meal-info') ||
      e.target.classList.contains('meal-info-text')
    ) {
      getMealByID(e.target.dataset.mealid);
    }
  };
  return (
    <>
      {meals === null ? (
        <p>"{term}" is not available. Try again!</p>
      ) : (
        meals.length !== 0 && (
          <>
            <p>Your result for search about "{term}" :</p>
            <div className='meals' onClick={handleClick}>
              {meals.map((meal, i) => (
                <Meal meal={meal} key={i} />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
};

export default Meals;
