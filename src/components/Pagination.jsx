import React from 'react';

const Pagination = ({ filmsPerPage, totalFilms, paginate }) => {
  console.log('total films', totalFilms,filmsPerPage,paginate)  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  console.log('pagenumbers pagenumberspagenumbers',pageNumbers)
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;