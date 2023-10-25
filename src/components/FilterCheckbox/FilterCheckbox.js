import './FilterCheckbox.css';

function FilterCheckbox(){
    return(
        <section className="search-form__short-films">
        <label htmlFor="filter-checkbox" className="search-form__short-films-label">
            <input id="filter-checkbox" type="checkbox" className="search-form__checkbox"/>
            <span></span>
        </label>
        <p className="search-form__short-films-input">Короткометражки</p>
        </section>
)}
export default FilterCheckbox;