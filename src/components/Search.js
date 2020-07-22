import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
        onChange={(event) => {props.handleSearchOnChange (event.target.value)}}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
