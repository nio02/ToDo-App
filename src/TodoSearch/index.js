import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    const {
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);

    return(
      <div className='searchContainer'>
        <div className='searchBar'>
          <input placeholder="Cortar cebolla" 
          value={searchValue} 
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          ></input>
        </div>
      </div>
    );
}

export { TodoSearch};