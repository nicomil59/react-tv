import React from "react";

const Search = (props) => {
  
  const handleChange = e => {
    props.getSearch(e.target.value);
  }
  
  return (
    <form className="search-container">
      <input
        type="search"
        name="input-search"
        id="input-search"
        placeholder={props.placeholder}
        onChange={e => handleChange(e)}
      />
    </form>
  );
};

export default Search;
