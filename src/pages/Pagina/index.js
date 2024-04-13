import { useState } from 'react';
import './style.css';

function Pagina() {
  const [pokemon, setPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  function loadPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokemon não encontrado!');
        }
        return response.json();
      })
      .then(data => {
        setPokemon(data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon:', error);
        setPokemon(null);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm.trim()) {
      loadPokemon();
    }
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure o pokemon ..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          style={{ width: '300px', height: '40px', fontSize: '16px' }} />
        <button type="Search" style={{ width: '100px', height: '40px', fontSize: '16px' }}>Encontrar</button>
      </form>

      {pokemon && (
        <div className="card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div>Nome: {pokemon.name}</div>
          <div>Nº pokedex: {pokemon.id}</div>
          <div>Peso: {pokemon.weight / 10}kg</div>
          <div>Altura: {pokemon.height / 10}m</div>
        </div>
      )}

    </div>
  );
}

export default Pagina;