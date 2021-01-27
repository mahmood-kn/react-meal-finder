import React, { useState, useContext } from 'react';
import MealContext from '../context/mealContext';

const Search = () => {
  const [search, setSearch] = useState('');
  const { getMeals, getRandomMeal } = useContext(MealContext);
  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== '') {
      getMeals(search);
    } else {
      alert('Please fill the field');
    }
    setSearch('');
  };
  return (
    <div className='flex' onSubmit={handleSearch}>
      <form className='flex' id='submit'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search for meal'
        />
        <button className='search-btn'>
          <i className='fas fa-search'></i>
        </button>
      </form>
      <button className='random' onClick={getRandomMeal}>
        <i className='fas fa-random'></i>
      </button>
    </div>
  );
};

export default Search;
