import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import GitHubCorner from '../../components/GithubCorner';
import ProgressBar from '../../components/ProgressBar';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Character = () => {
  const [characterDetails, setCharacterDetails] = useState();

  const params = useParams();

  useEffect(() => {
    api.get(`/${params.id}`)
      .then(response => setCharacterDetails(response.data))
  }, [params.id])

  return (
    <>
      <main>
        <div id="back">
          <Link to="/"> <FaArrowCircleLeft size={70} /> </Link></div>
        {
          characterDetails &&
          <div className="character-card">
            <div id="card-content">
              <h2>{characterDetails.name}</h2>
              <div id="img-container">
                <img src={characterDetails.image.url} alt={characterDetails.name} />
              </div>
              <div id="text-container">
                <h3>{characterDetails.biography["full-name"]}</h3>
                <p>Publisher: {characterDetails.biography.publisher}</p>
                <p>Alignment: {characterDetails.biography.alignment}</p>
                <br />
                <p>Gender: {characterDetails.appearance.gender}</p>
                <p>Height: {characterDetails.appearance.height[1]}</p>
                <p>Weight: {characterDetails.appearance.weight[1]}</p>
                <p>Race: {characterDetails.appearance.race}</p>
              </div>
              <div id="power-stats">
                <p>Combat: </p> <ProgressBar value={parseInt(characterDetails.powerstats.combat)} />
                <p>Durability: </p> <ProgressBar value={parseInt(characterDetails.powerstats.durability)} />
                <p>Intelligence: </p> <ProgressBar value={parseInt(characterDetails.powerstats.intelligence)} />
                <p>Power: </p> <ProgressBar value={parseInt(characterDetails.powerstats.power)} />
                <p>Speed: </p> <ProgressBar value={parseInt(characterDetails.powerstats.speed)} />
                <p>Strength: </p> <ProgressBar value={parseInt(characterDetails.powerstats.strength)} />
              </div>
            </div>
          </div>
        }
      </main>
      <GitHubCorner projectUrl="https://github.com/biagavirete" />
    </>
  )
}

export default Character;