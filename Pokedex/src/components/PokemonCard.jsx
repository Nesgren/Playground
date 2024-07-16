import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [url]);

  if (!pokemon) return null;

  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={name} />
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonCard;
