import useFetchPokemons from '../hooks/useFetchPokemons';
import useSearch from '../hooks/useSearch';
import usePagination from '../hooks/usePagination';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Home = () => {
  const { pokemons, loading } = useFetchPokemons();
  const { search, handleSearch, filteredPokemons } = useSearch(pokemons);
  const { currentItems, currentPage, paginate, totalPages } = usePagination(filteredPokemons, 20);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <PokemonList pokemons={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
