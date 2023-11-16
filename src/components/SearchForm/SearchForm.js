import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";


function SearchForm({ handleCheckbox, isChecked, search }) {
  const [filterWords, setFilterWords] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    search(filterWords);
  }
  function handleFilter(e) {
    setFilterWords(e.target.value);
  }
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          name="search"
          value={filterWords ? filterWords : ''}
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
