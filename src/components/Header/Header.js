import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import React from 'react';

function Header({widthWindow}){
  const loggedIn = false;
  const [isClickedOnBurger, setIsClickedOnBurger] = React.useState(false);
  function handleButtonClickOnBurger() {
    setIsClickedOnBurger(true);
  }
  function handleButtonClickOnClose() {
    setIsClickedOnBurger(false);
};
    return(
      <header className={`header ${ isClickedOnBurger && "header__burger-body"} `}>
        <Link to="/"><div className="header__logo"></div></Link>
          {loggedIn ? (
            <Navigation buttonClickOnBurger={handleButtonClickOnBurger} onClose={handleButtonClickOnClose} widthWindow={widthWindow}/>
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