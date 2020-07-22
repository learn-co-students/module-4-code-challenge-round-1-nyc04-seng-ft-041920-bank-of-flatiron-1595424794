import React from "react";

const Search = (props) => {
  console.log("Search Props List:", props)
  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={searchBar => {
          // console.log(search.target.value)
          props.handleSearchByDesc(searchBar.target.value)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
