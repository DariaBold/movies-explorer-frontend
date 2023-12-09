import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm({ handleCheckbox, isChecked, search }) {
  const [filterWords, setFilterWords] = React.useState("");
  const { pathname } = useLocation();
  function handleSubmit(e) {
    e.preventDefault();
    search(filterWords);
  }
  function handleFilter(e) {
    setFilterWords(e.target.value);
  }
  useEffect(() => {
    if (pathname === "/movies" && localStorage.inputwords) {
      setFilterWords(JSON.parse(localStorage.inputwords));
    }
  }, [pathname]);
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          name="search"
          value={filterWords ? filterWords : ""}
          required
          onChange={handleFilter}
        />
        <button className="search-form__submit" type="submit"></button>
      </form>
      <FilterCheckbox handleCheckbox={handleCheckbox} isChecked={isChecked} />
    </div>
  );
}
export default SearchForm;
