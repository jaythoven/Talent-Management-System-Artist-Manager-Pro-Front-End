import React from 'react'

function Search({handleSearch}) {
  return (
    <div className="titletext left" variant="light">
      <br></br>
      <br></br>
      {/* <div>
        <input type="search" id="form1" class="form-control"/>
        <label class='form-label'>Search</label>
      </div>
      <Button type="button" className="btn btn-primary">
        <i class="fas fa-search"></i>
      </Button> */}
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