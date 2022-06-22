import React from 'react'

function Search({handleSearch}) {
  
  return (
    <div className="titletext left" variant="light">
      <br></br>
      <br></br>
      <label variant="light" className="titletext left" htmlFor="search">Search Events:  </label>
      <input
        variant="light"
        className="titletext" 
        type="text"
        id="search"
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search