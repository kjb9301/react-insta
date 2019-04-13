import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-header">
        <div className="header-left">
          <input type="text" placeholder="search new tag"/>
        </div>
        <div className="header-right">Cancel</div>
      </div>
      <div className="search-content">

      </div>
    </div>
  );
};

export default Search;