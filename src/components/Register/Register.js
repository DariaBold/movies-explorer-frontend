import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useForm } from "../../hooks/useForm";

function Register({ register, fail, onClose, isLoading, othersFail }) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  function onRegister(e) {
    e.preventDefault();
    register(values.name, values.email, values.password);
  }
  useEffect(() => {
    resetForm();
  }, [resetForm]);
  return (
    <>
    <main className="register">
      <Link to="/">
        <div className="register__logo"></div>
      </Link>
      <h1 className="register__header">Добро пожаловать!</h1>
      <form onSubmit={onRegister} className="register__form" onChange={onClose}>
        <label className="register__form-name">
          Имя
          <input
            required=""
            className="register__input"
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={values.name || ""}
          />
        </label>
        <span name="name" className={errors.name ? "register__span" : "register__span register__span-hidden"}>{errors.name}</span>
        <label className="register__form-name">
          E-mail
          <input
            required
            className="register__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ""}
          />
        </label>
        <span name="email" className={errors.email ? "register__span" : "register__span register__span-hidden"}>{errors.email}</span>
        <label className="register__form-name">
          Пароль
          <input
            required
            id="password"
            className="register__input"
            name="password"
            type="password"
            placeholder="Пароль"
            minLength="8"
            maxLength="30"
            onChange={handleChange}
            value={values.password || ""}
          />
        </label>
        <span name="password" className={
          errors.password||othersFail ? "register__span" : "register__span register__span-hidden"
          }>{errors.password || (othersFail && 'Что-то пошло не так...')}</span>
        <div className="register__button-container">
          <button
            type="submit"
            className={`register__link ${
              !isValid && "register__link_disabled"
            }`}
            disabled={isLoading ? "disabled" : ""}
          >
            Зарегистрироваться
          </button>
        </div>
        <div className="register__signin-container">
          <p className="register__signin-button">
            Уже зарегистрированы?
            <Link to="/signin" className="register__signin">
              {" "}
              Войти
            </Link>
          </p>
        </div>
      </form>
    </main>
    {fail&&(
      <div className="register__container">
        <button
          className="register__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <div className="register__fail">Email уже зарегистрирован</div>
      </div>
    )}
    </>
  );
}

export default Register;
