import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search blogs, categories, or tags..."
    />
  </div>
);

export default SearchBar;
