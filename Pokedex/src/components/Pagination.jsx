import PropTypes from 'prop-types';

const Pagination = ({ pokemonsPerPage, totalPokemons, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
    let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow);

    if (currentPage - halfMaxPagesToShow <= 0) {
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    }

    if (currentPage + halfMaxPagesToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    return pageNumbers.slice(startPage - 1, endPage).map(number => (
      <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
        <a onClick={() => paginate(number)} href="#!" className="page-link">
          {number}
        </a>
      </li>
    ));
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={handlePreviousPage} href="#!" className="page-link">
            Anterior
          </a>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a onClick={handleNextPage} href="#!" className="page-link">
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pokemonsPerPage: PropTypes.number.isRequired,
  totalPokemons: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
