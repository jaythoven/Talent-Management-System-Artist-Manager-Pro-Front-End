import React, {useEffect, useState} from 'react'
import Search from './Search'

function Home() {
  const [search, setSearch] = useState("")


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <br></br>
      <br></br>
      Home
      

    <Search handleSearch={handleSearch} />
    </div>
  )
}

export default Home