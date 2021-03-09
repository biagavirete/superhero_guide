import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import SearchInput from '../../components/SearchInput';
import GitHubCorner from '../../components/GithubCorner';

const Home = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      async function fetchMyAPI() {
        api.get(`/search/${text}`)
          .then(response => setData(response.data))
      }
      try {
        fetchMyAPI()
      } catch (e) {
        console.log(e)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  console.log(data.results)
  console.log(data)

  return (
    <div className="App">
      <h1>Superhero Guide</h1>
      <p>Superhero search application using the <a href="https://superheroapi.com/" target="_blank">SuperHero API</a>.</p>
      <SearchInput value={text} onChange={(search) => setText(search)} />

      {text && !data.results && (
        <span>Loading...</span>
      )}

      {data.results && (
        <div className="container">
          <ul className="characters-list">
            {data.results.map((character) => (
              <li key={character.id}>
                <div className="card">
                  <div className="content">
                    <h2>{character.id}</h2>
                    <h3>{character.name}</h3>
                    <img src={character.image.url} alt={character.name} />
                    <Link to={`/${character.id}`}>Read more</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <GitHubCorner projectUrl="https://github.com/biagavirete" />
    </div>
  );
}

export default Home;
