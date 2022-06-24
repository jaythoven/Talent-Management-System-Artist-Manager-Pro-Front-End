import React, {useState, useEffect} from 'react'
import ArtistCard from './ArtistCard'
import ArtistForm from './ArtistForm'
import Button from 'react-bootstrap/Button'

function Artists({selectedArtist}) {
  const [artists, setArtists] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then(res => res.json())
      .then(artists => setArtists(artists))
  }, [])

  function handleShow() {
    setShowForm((showForm) => !showForm);
  }

  function handleUpdateArtist(updatedArtist) {
    const updatedArtists = artists.map((artist) => artist.id === updatedArtist.id ? updatedArtist : artist);
    setArtists(updatedArtists);
  }

  return (
    <div className="artist-background">
    <div className="cards">
      <br></br>
      <br></br>
        {artists.map((artist) => 
          <ArtistCard 
          selectedArtist={selectedArtist}
          key={artist.id} 
          artist={artist}
          handleUpdateArtist={handleUpdateArtist}
          />
          )}
    </div>
          {showForm ? <ArtistForm setArtists={setArtists}/> : null}
          <div className="buttonContainer2">
            <Button onClick={handleShow} variant="primary">{showForm ? "Hide Form" : "Add an Artist"}</Button>
          </div>
          <br></br>
      </div>
  )
}

export default Artists