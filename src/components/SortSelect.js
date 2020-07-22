import React from "react";

const Search = (props) => {
  return (
    <div>
        <select onChange={props.getSort}>
            <option disabled="disabled" selected="selected">Sort by:</option>
            <option>category</option>
            <option>description</option>
        </select>
    </div>
  );
};

export default Search;