import React, { useEffect, useState } from "react";

const Search = ({ placeholder, getSearch, value }) => {
  const [inputValue, setInputValue] = useState("");

  // Mettre à jour inputValue quand value change (ex: reset)
  useEffect(() => {
    setInputValue(value || ""); // Évite les erreurs si value est undefined
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value); // Met à jour l'input localement
    getSearch(e.target.value); // Remonte la valeur à Series
  };

  return (
    <form className="search-container">
      <input
        type="search"
        name="input-search"
        id="input-search"
        placeholder={placeholder}
        value={inputValue} // Input contrôlé
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
