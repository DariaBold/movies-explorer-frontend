import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

function Profile({ loggedIn, width, onUpdateUser, onSignOut, isLoading, othersFail }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  const [edit, setEdit] = React.useState(false);
  const inputChange = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));
  const [editFirst, setEditFirst] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
    setEdit(false);
    setEditFirst(true)
  }
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, editFirst, {}, false);
    }
  }, [currentUser, editFirst, resetForm]);
  
  function handleEdit(e) {
    setEdit(true);
    values.name = currentUser.name
    values.email = currentUser.email
  }

  return (
    <main>
      <Header loggedIn={loggedIn} widthWindow={width} />
      <section className="profile">
        <h1 className="profile__header">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__form-name">
            Имя
            <input
              required
              className="profile__input"
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              onChange={handleChange}
              disabled={!edit ? "disabled" : ""}
            />
          </label>
          <label className="profile__form-name">
            E-mail
            <input
              required
              className="profile__input"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={values.email || ''}
              onChange={handleChange}
              disabled={!edit || isLoading ? "disabled" : ""}
            />
          </label>
          <span 
            className={`profile__edit-error profile__error ${
              edit ? "profile__error-hidden" : ""
            } ${ othersFail ? "" : "profile__error-no"
            }`}>
            {(othersFail && 'Ошибка редактирования') || (editFirst && 'Данные сохранены') || ''}
            </span>
          {!edit ? (
            <>
              <button
                type="button"
                className={`profile__link`}
                onClick={handleEdit}
              >
                Редактировать
              </button>
              <Link to="/" className="profile__signout" onClick={onSignOut}>
                {" "}
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              <span className="profile__edit-error">
                {errors.name || errors.email}
              </span>
              <button
                type="submit"
                className={`profile__edit ${
                  inputChange ? "profile__edit_disabled" : ""
                }`}
                disabled={`${inputChange || isLoading ? "disabled" : ""}`}
              >
                Сохранить
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default Profile;
