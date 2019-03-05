import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.fetchData} action="">
        <input type="text" onChange={props.handleSearch} />
        <button className="primary-button" type="submit">Search</button>
      </form>
    </div>
  )
}


export default SearchBar;
