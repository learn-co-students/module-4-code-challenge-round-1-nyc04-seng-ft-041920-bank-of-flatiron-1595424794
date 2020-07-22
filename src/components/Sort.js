import React from "react";

const Sort = (props) => {

  let onChangeHandler = (event) => {
    props.setSort(event.target.name)
  }

  return (
    <div style={{"display": "flex"}}>
        <h5>Sort By:</h5>
        <form>
            <input type="radio" id="category" name="category" value="category" onChange={onChangeHandler} checked={props.selected === "category"}/>
            <label for="category">Category</label><br/>
            <input type="radio" id="description" name="description" value="description" onChange={onChangeHandler} checked={props.selected === "description"}/>
            <label for="description">Description</label><br/>
        </form> 
    </div>

  );
};

export default Sort;
