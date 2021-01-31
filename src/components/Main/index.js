import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput';
import api from '../../services/api';
import './style.css'

function CharacterDataReactHooks() {
    const [data, setData] = useState({});
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (text) {
            async function fetchMyAPI() {
                let response = await fetch(`${api}/search/${text}`)
                response = await response.json()
                setLoading(true)
                setData(response)
                console.log(response)
            }
            try {
                fetchMyAPI()
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
            setLoading(false)
        }
    }, [text])

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

export default CharacterDataReactHooks;
