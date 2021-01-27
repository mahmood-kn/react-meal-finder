import { useContext } from 'react';
import Search from './components/Search';
import Meals from './components/Meals';
import MealContext from './context/mealContext';
import SingleMeal from './components/SingleMeal';

function App() {
  const { singleMeal } = useContext(MealContext);
  return (
    <div className='container'>
      <h1>Meal Finder</h1>
      <Search />
      <Meals />
      {singleMeal !== null && <SingleMeal />}
    </div>
  );
}

export default App;
