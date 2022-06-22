import React, {useState, useEffect} from 'react'
import ArtistCard from './ArtistCard'

function Artists() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then(res => res.json())
      .then(artists => setArtists(artists))
  }, [])

  return (
    <div className="cards">
      <br></br>
      <br></br>
      {artists.map((artist) => <ArtistCard key={artist.id} artist={artist}/>)}
    </div>
  )
}

export default Artists