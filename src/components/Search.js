import React from "react";

const Search = (props) => {

  // using higher order function to send name and event.target.value to the parent component
  const handleOnChange = name => event => {
    props.setSearchTerm(name, event.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleOnChange("searchTerm")}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
