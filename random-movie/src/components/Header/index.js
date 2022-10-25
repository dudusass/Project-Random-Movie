import React, { useState } from 'react';
import './style.css';

function Header() {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
 }

  return(
    <div className="search">
      <nav>
        <h1>Random Movies</h1>
      <input
        type="text"
        className="searchTerm" 
        onChange={ handleChange }
        placeholder='Search a film here'
        value={ search } />
        <button type="submit" class="searchButton">
        <i class="fa-solid fa-magnifying-glass"></i>
     </button>
      </nav>

    </div>
  )
}

export default Header;