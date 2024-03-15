// import React,{useState} from 'react'

// const Pagination = ({total,current,onChange}) => {
 
    
     
//   return (
//     <div>
//         <button style={{backgroundColor:'#27005D',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={current === 1} onClick={() => onChange(current - 1)}>Prev</button>
//         <button style={{backgroundColor:'white',color:'black',width:'40px',marginBottom:'6px'}}>{current}</button>
//         <button style={{backgroundColor:'#27005D',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={current=== 2} onClick={() => onChange(current + 1)}>Next</button>
      
//     </div>
//   )
// }

// export default Pagination

import React from 'react';

const Pagination = ({ total, current, onChange }) => {
  const productsPerPage = 27; // Define the number of products per page
  const totalPages = Math.ceil(total / productsPerPage); // Calculate the total number of pages

  const handlePrev = () => {
    if (current > 1) {
      onChange(current - 1);
    }
  };

  const handleNext = () => {
    if (current < totalPages) {
      onChange(current + 1);
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: '#27005D', color: 'white', width: '60px', borderRadius: '7px', marginBottom: '6px' }}
        disabled={current === 1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button style={{ backgroundColor: 'white', color: 'black', width: '40px', marginBottom: '6px' }}>{current} / {totalPages}</button>

      <button
        style={{ backgroundColor: '#27005D', color: 'white', width: '60px', borderRadius: '7px', marginBottom: '6px' }}
        disabled={current === totalPages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


