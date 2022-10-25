import React, { useState } from 'react';
import './style.css';

function Header() {
  const [search, setSearch] = useState({})
  return(
    <div className="header">
      <nav>
        <h1>Random Movies</h1>
        Search a film
      <input ></input>
      </nav>

    </div>
  )
}

export default Header;