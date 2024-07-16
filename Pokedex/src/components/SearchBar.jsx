import PropTypes from 'prop-types';

const SearchBar = ({ search, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={search}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
