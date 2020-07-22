import React from "react";

const Search = (props) => {

  let onChangeHandler = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={onChangeHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
