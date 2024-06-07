import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: '#27005D', color: 'white', width: '60px', borderRadius: '7px', marginBottom: '6px' }}
        disabled={currentPage === 1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button style={{ backgroundColor: 'white', color: 'black', width: '40px', marginBottom: '6px' }}>{currentPage} / {totalPages}</button>
      <button
        style={{ backgroundColor: '#27005D', color: 'white', width: '60px', borderRadius: '7px', marginBottom: '6px' }}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
