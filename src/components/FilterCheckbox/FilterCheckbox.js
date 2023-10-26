import './FilterCheckbox.css';

function FilterCheckbox(){
    return(
        <form className="search-form">
        <label htmlFor="filter-checkbox" className="search-form__short-films-label">
            <input id="filter-checkbox" type="checkbox" className="search-form__checkbox"/>
            <span></span>
        </label>
        <p className="search-form__short-films-input">Короткометражки</p>
        </form>
)}
export default FilterCheckbox;