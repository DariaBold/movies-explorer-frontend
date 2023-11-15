import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ loggedIn, width, onUpdateUser, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isValidName, setIsValidName] = React.useState(true);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorName, setErrorName] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    const regexp = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)?$/;
    if (regexp.test(e.target.value)) {
      setIsValidEmail(true);
      setErrorEmail("");
    } else {
      setIsValidEmail(false);
      setErrorEmail("невалидный email");
    }
  }
  function handleChangeName(e) {
    setName(e.target.value);
    if (e.target.value.length >= 2 && e.target.value.length <= 30) {
      setIsValidName(true);
      setErrorName("");
    } else {
      setIsValidName(false);
      setErrorName("имя меньше 2 знаков");
    }
  }
  function handleEdit(e) {
    setEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
    });
    setEdit(false);
  }
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  console.log(`isValidName=${isValidName}`);
  console.log(`isValidEmail=${isValidEmail}`);
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
              value={name}
              onChange={handleChangeName}
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
              value={email}
              onChange={handleChangeEmail}
              disabled={!edit ? "disabled" : ""}
            />
          </label>
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
                {errorEmail || errorName}
              </span>
              <button
                type="submit"
                className={`profile__edit ${
                  !(isValidEmail && isValidName) ? "profile__edit_disabled" : ""
                }`}
                disabled={`${!(isValidEmail && isValidName) ? "disabled" : ""}`}
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
