import React, {useEffect, useState} from 'react'
import VenueCard from './VenueCard'

function Venues({showEvents}) {
  const [venues, setVenues] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/venues')
      .then(res => res.json())
      .then(venues => setVenues(venues))
  }, [])


  return (
    <div className="cards">
      <br></br>
      <br></br>      
          {venues.map((venue) => <VenueCard showEvents={showEvents} key={venue.id} venue={venue}/>)}
    </div>
  )
}

export default Venues