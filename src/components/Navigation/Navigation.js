import { Link } from 'react-router-dom';
import './Navigation.css';
import'../Header/Header.css';


function Navigation(){
    return(
        <>
        <div className="header__button">
            <Link to="/movies" className="button button__films">Фильмы</Link>
            <Link to="/saved-movies" className="button button__films button__films-save">Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className="button button__account">Аккаунт</Link>
        </>
    )
}
export default Navigation;