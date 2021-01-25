import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import api from './services/api';
import './app.css'

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});
      fetch(`${api}/search/${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
          console.log('o que vem', response)
        });
    }

  }, [text]);

  return (
    <div className="App">
      <h1>Superhero Guide</h1>
      <p>Superhero search application using the <a href="https://superheroapi.com/" target="_blank">SuperHero API</a>.</p>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !info.results && (
        <span>Carregando...</span>
      )}

      {info.results && (
        <div className="container">
          <ul className="characters-list">
            {info.results.map((character) => (
              <li key={character.id}>
                <div className="card">
                  <div className="content">
                    <h2>{character.id}</h2>
                    <h3>{character.name}</h3>
                    <img src={character.image.url} alt={character.name} />
                    <a href="#">Read more</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
