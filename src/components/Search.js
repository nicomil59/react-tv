import React from "react";

const Search = (props) => {
  
  // const [searchTerm, setSearchTerm] = useState('');
  
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.getSearch(searchTerm);
  // }

  const handleChange = e => {
    props.getSearch(e.target.value);
  }
  
  return (
    // <form onSubmit={e => handleSubmit(e)} className="search-container">
    <form className="search-container">
      <input
        type="search"
        name="input-search"
        id="input-search"
        placeholder={props.placeholder}
        onChange={e => handleChange(e)}
      />
      {/* <button type="submit">Rechercher</button> */}
    </form>
  );
};

export default Search;
