import useFetchPokemons from '../hooks/useFetchPokemons';
import useSearch from '../hooks/useSearch';
import usePagination from '../hooks/usePagination';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Home = () => {
  const { pokemons, loading, error } = useFetchPokemons();
  const { search, handleSearch, filteredPokemons } = useSearch(pokemons);
  const { currentItems, currentPage, paginate, totalPages } = usePagination(filteredPokemons, 24);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      <PokemonList pokemons={currentItems} />
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};

export default Home;
