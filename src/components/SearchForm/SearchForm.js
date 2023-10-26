import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(){
    return(
        <div className="search">
            <form className="search-form">
                <input className="search-form__input"  type='text' placeholder='Фильм'/>
                <button className="search-form__submit" type="submit"></button>
            </form>
            <FilterCheckbox/>
        </div>
)}
export default SearchForm;