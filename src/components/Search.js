import React from "react";

const Search = (props) => {
  console.log("Search Props List:", props)


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={search => {
          // console.log(search.target.value)
          props.searchByDesc(search.target.value)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
