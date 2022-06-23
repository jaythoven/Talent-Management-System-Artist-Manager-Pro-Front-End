import React, {useEffect, useState} from 'react'
import VenueCard from './VenueCard'

function Venues({selectedVenue, events}) {
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
          {venues.map((venue) => 
            <VenueCard 
              selectedVenue={selectedVenue} 
              key={venue.id} 
              venue={venue}
              events={events}
            />
          )}
    </div>
  )
}

export default Venues