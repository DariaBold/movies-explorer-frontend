import { Link } from 'react-router-dom';
import '../Header/Header.css';
import './HeaderBurger.css';

function HeaderBurger({clickOnClose}){
    return(
    <nav className="header__burger">
        <button className="header__button-close" onClick={clickOnClose}></button>
        <Link to="/" className="button button__films">Главная</Link>
        <Link to="/movies" className="button button__films">Фильмы</Link>
        <Link to="/saved-movies" className="button button__films button__films-save">Сохранённые фильмы</Link>
        <Link to="/profile" className="button button__account">Аккаунт</Link>
    </nav>
    )
}
export default HeaderBurger;