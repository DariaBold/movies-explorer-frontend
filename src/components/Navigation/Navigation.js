import { Link } from 'react-router-dom';
import './Navigation.css';
import'../Header/Header.css';
import HeaderBurger from '../HeaderBurger/HeaderBurger';
import React from 'react';


function Navigation({buttonClickOnBurger, onClose, widthWindow}){
    const [isClicked, setIsClicked] = React.useState(false);
    function handleButtonClick() {
        setIsClicked(true);
        buttonClickOnBurger(true);
    }
    function handleClickOnClose() {
        setIsClicked(false);
        onClose(false);
    }
    return(
        <>
        {(widthWindow>769) ? (
        <>
        <div className="header__button">
            <Link to="/movies" className="button button__films">Фильмы</Link>
            <Link to="/saved-movies" className="button button__films button__films-save">Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className="button button__account">Аккаунт</Link>
        </>
        ) :
        (
            <>
            <button className={!isClicked ? "button__burger" : "button__burger button__burger-hide" } onClick={handleButtonClick}></button>
            {isClicked && <HeaderBurger clickOnClose={handleClickOnClose} />}
            </>
        )}
        </>
    )
}
export default Navigation;