import React, { useReducer } from 'react';
import MealReducer from './mealReducer';
import MealContext from './mealContext';
import { GET_MEALS, GET_MEAL_BY_ID, RANDOM, NO_MEAL } from './types';

const MealState = ({ children }) => {
  const initialState = {
    term: '',
    meals: [],
    singleMeal: null,
    random: false,
  };
  const [state, dispatch] = useReducer(MealReducer, initialState);

  const getMeals = async (term) => {
    if (term.trim()) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();
      if (data.meals === null) {
        dispatch({ type: NO_MEAL, payload: { meals: data.meals, term } });
      } else {
        console.log(data);
        dispatch({ type: GET_MEALS, payload: { meals: data.meals, term } });
      }
    }
  };

  const getMealByID = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      dispatch({ type: GET_MEAL_BY_ID, payload: data.meals[0] });
    } catch (err) {
      console.log(err);
    }
  };

  const getRandomMeal = async () => {
    // resultHeading.innerHTML = '';
    // mealsEl.innerHTML = '';
    // singleMeal.innerHTML = '';

    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const data = await res.json();
    dispatch({ type: RANDOM, payload: data.meals[0] });
  };

  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        term: state.term,
        singleMeal: state.singleMeal,
        getMeals,
        getMealByID,
        getRandomMeal,
      }}>
      {children}
    </MealContext.Provider>
  );
};
export default MealState;
