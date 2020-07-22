import React from "react";

const Search = ( {searchTerm, handleSearchOnChange} ) => {

  const handleInput = (event) => {
    handleSearchOnChange(event.target.value.toLowerCase())
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={searchTerm}
        onChange={handleInput}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
