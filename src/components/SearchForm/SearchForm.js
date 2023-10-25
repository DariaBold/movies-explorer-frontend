import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(){
    return(
        <section className="search">
            <form className="search-form">
                <input className="search-form__input"  type='text' placeholder='Фильм'/>
                <button className="search-form__submit"></button>
            </form>
            <FilterCheckbox/>
        </section>
)}
export default SearchForm;