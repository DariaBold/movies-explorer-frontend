import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import Header from "../Header/Header";


function Profile({name, email, loggedIn, width}) {
    function onSignOut() {
        loggedIn = false;
    }
  return (
    <main>
    <Header loggedIn widthWindow={width}/>
    <section className="profile">
      <h1 className="profile__header">Привет, {name}!</h1>
      <form className="profile__form">
        <label className="profile__form-name">Имя
        <input
          required
          className="profile__input"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={name}
        />
        </label>
        <label className="profile__form-name">E-mail
        <input
          required
          className="profile__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
        />
        </label>
          <button type="submit" className="profile__link">
          Редактировать
          </button>
          <Link
            to="/" className="profile__signout" onClick={onSignOut}> 
              {" "}
              Выйти из аккаунта
            </Link>
      </form>
    </section>
    </main>
  );
}

export default Profile;
