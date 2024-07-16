import { useState } from 'react';

const useSearch = (pokemons) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return { search, handleSearch, filteredPokemons };
};

export default useSearch;
