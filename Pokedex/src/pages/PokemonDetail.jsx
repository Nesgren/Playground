import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(' - ').toUpperCase()}</p>
    </div>
  );
};

export default PokemonDetail;
