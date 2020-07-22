import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }


  return (
    <div className="ui large fluid icon input">
      <input
        value={searchTerm}
        onChange={handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
        // onChange={() => {
        //   console.log("Searching...");
        // }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
