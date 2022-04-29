import React from 'react';

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
console.log(pageNumbers)
  return (

      <div className='pagination'>
          {pageNumbers.map(number =>(
              <div key={number} className='page-item'>
                  <div onClick={() => paginate(number)} className='page-link'>{number}</div>
              </div>
          ))}
       
      </div>
 
  );
};

export default Paginate;
