import React from 'react';

const Searchbar=({ searchfield,searchChange})=>{
    return(
        <div>
             <input className='pa3 ba b--green bg-lightest blue'
              type="search" 
              placeholder="searchrobots" 
              onChange={searchChange}
            />
        </div>
       
    );
}

export default Searchbar;