import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(){
  const loggedIn = false;
    return(
      <header className="header">
        <Link to="/"><div className="header__logo"></div></Link>
          {loggedIn ? (
            <Navigation/>
          ) : (
        <div className="header__button">
        <Link to="/signup" className="button">Регистрация</Link>
        <Link to="/signin" className="button button-green">Войти</Link>
      </div>
      )}
      </header>
    )
}
export default Header;