import React from 'react';

const Search = () => {
  return (
    <div className='flex'>
      <form className='flex' id='submit'>
        <input type='text' id='search-input' placeholder='Search for meal' />
        <button className='search-btn'>
          <i className='fas fa-search'></i>
        </button>
      </form>
      <button className='random'>
        <i className='fas fa-random'></i>
      </button>
    </div>
  );
};

export default Search;
