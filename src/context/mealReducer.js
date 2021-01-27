import { GET_MEALS, GET_MEAL_BY_ID, RANDOM, NO_MEAL } from './types';

const mealReducer = (state, action) => {
  switch (action.type) {
    case GET_MEALS:
    case NO_MEAL:
      return {
        ...state,
        term: action.payload.term,
        meals: action.payload.meals,
        singleMeal: null,
        random: false,
      };
    case GET_MEAL_BY_ID:
      return {
        ...state,
        singleMeal: action.payload,
        random: false,
      };
    case RANDOM:
      return {
        ...state,
        singleMeal: action.payload,
        random: true,
        meals: [],
        term: '',
      };
    default:
      return state;
  }
};

export default mealReducer;
