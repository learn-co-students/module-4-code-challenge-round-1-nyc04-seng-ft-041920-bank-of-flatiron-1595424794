import React from "react";

const Search = (props) => {

  // ===> practicing higher order fn <=== (it works)
  // sending name and event.target.value to the parent component to set the new state
  // const handleOnChange = name => event => {
  //   props.setSearchTerm(name, event.target.value)
  // }

  // ===> in this instance this is a more practical approach than using higher order fn <===
  // passing the event.target.value to the parent component to set the new state
  const handleOnChange = event => {
    props.setSearchTerm(event.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => handleOnChange(event)}
        // onChange={handleOnChange("searchTerm")} // using higher order fn <=== (it works)
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
