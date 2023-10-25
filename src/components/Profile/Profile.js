import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import Header from "../Header/Header";


function Profile({name, email, loggedIn}) {
    function onSignOut() {
        loggedIn = false;
    }
  return (
    <>
    <Header/>
    <section className="profile">
      <p className="profile__header">Привет, {name}!</p>
      <form className="profile__form">
        <label className="profile__form-name">Имя
        <input
          required=""
          className="profile__input"
          id="name"
          name="name"
          type="name"
          value={name}
        />
        </label>
        <label className="profile__form-name">E-mail
        <input
          required=""
          className="profile__input"
          id="email"
          name="email"
          type="email"
          value={email}
        />
        </label>
          <button type="submit" className="profile__link">
          Редактировать
          </button>
          <Link
            to="/signin" className="profile__signout" onClick={onSignOut}> 
              {" "}
              Выйти из аккаунта
            </Link>
      </form>
    </section>
    </>
  );
}

export default Profile;
