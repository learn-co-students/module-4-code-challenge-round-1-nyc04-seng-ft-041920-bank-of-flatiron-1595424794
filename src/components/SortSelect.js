import React from "react";

const sortSelect = (props) => {
  //i get a warning for using "selected" in my options
  //i tried the warning suggestions but those didn't seem to work
  //not sure how to correct and still get desired behavior of having a disabled
  //option that still shows up

  //also added amount sort just for fun
  return (
    <div>
        <select onChange={props.getSort}>
            <option disabled="disabled" selected="selected">Sort by:</option>
            <option>category</option>
            <option>description</option>
            <option>amount</option>
        </select>
    </div>
  );
};

export default sortSelect;