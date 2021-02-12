import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

const Character = () => {
  const [characterDetails, setCharacterDetails] = useState();

  const params = useParams();

  useEffect(() => {
    api.get(`/${params.id}`)
      .then(response => setCharacterDetails(response.data))
  }, [params.id])

  console.log(characterDetails)


  return (
    <main>
      {
        characterDetails &&
        <div className="character-card">
          <div id="card-content">
            <h2>{characterDetails.name}</h2>
            <img src={characterDetails.image.url} alt={characterDetails.name} />
            <h3>{characterDetails.biography["full-name"]}</h3>
            <p>Publisher: {characterDetails.biography.publisher}</p>
            <p>Alignment: {characterDetails.biography.alignment}</p>
          </div>
        </div>
      }
    </main>
  )
}

export default Character;