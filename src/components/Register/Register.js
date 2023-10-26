import React from "react";
import { Link } from "react-router-dom";
import './Register.css';


function Register({ register }) {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  function onRegister(e) {
    e.preventDefault();
    register(formValue.name, formValue.email, formValue.password);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <main className="register">
      <Link to="/"><div className="register__logo"></div></Link>
      <h1 className="register__header">Добро пожаловать!</h1>
      <form onSubmit={onRegister} className="register__form">
        <label className="register__form-name">Имя
      <input
          required=""
          className="register__input"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          value={formValue.name}
        />
        </label>
        <label className="register__form-name">E-mail
        <input
          required=""
          className="register__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formValue.email}
        />
        </label>
        <label className="register__form-name">Пароль
        <input
          required=""
          id="password"
          className="register__input"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={formValue.password}
        />
        </label>
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Зарегистрироваться
          </button>
        </div>
        <div className="register__signin-container">
          <p className="register__signin-button">
            Уже зарегистрированы?
            <Link to="/signin"  className="register__signin">
              {" "}
              Войти
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;
