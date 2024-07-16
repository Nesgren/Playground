import { useState, useEffect } from 'react';

const useFetchPokemons = (limit = 151) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      });
  }, [limit]);

  return { pokemons, loading };
};

export default useFetchPokemons;
