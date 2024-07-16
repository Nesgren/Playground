import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 20;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <PokemonList pokemons={currentPokemons} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={filteredPokemons.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
