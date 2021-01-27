import React, { useReducer } from 'react';
import MealReducer from './mealReducer';
import MealContext from './mealContext';

const MealState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(MealReducer, initialState);

  return <MealContext.Provider value={{}}>{children}</MealContext.Provider>;
};
export default MealState;
