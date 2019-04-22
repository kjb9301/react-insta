import React from 'react';
import './SearchList.scss';
import SearchItem from '../SearchItem';

const SearchList = ({search,tagList,handleChange}) => {
  console.log("SearchList")
  const tags = tagList.map(tag => {
    console.log(tag)
    return (
      <SearchItem />
    )
  })
  return (
    <div className="search-wrapper">
      <div className="search-header">
        <div className="header-left">
          <input type="text" name="search" value={search} placeholder="search new tag" onChange={handleChange}/>
        </div>
        <div className="header-right">Cancel</div>
      </div>
      <div className="search-content">
        {tags}
      </div>
    </div>
  );
};

export default SearchList;