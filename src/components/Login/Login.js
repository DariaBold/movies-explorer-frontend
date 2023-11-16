import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "../../hooks/useForm";

function Login({ handleLogin, fail, onChangeClose, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  function onLogin(e) {
    e.preventDefault();
    handleLogin(values.email, values.password);
  }
  useEffect(() => {
    resetForm();
  }, [resetForm]);
  return (
    <main className="login">
      <Link to="/">
        <div className="login__logo"></div>
      </Link>
      <h1 className="login__header">Рады видеть!</h1>
      <form onSubmit={onLogin} className="login__form" onChange={onChangeClose}>
        <label className="login__form-name">
          E-mail
          <input
            required
            className="login__input"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ""}
          />
        </label>
        <span name="email" className={errors.email ? "login__span" : "login__span login__span-hidden"}>{errors.email}</span>
        <label className="login__form-name">
          Пароль
          <input
            required
            id="password"
            className="login__input"
            name="password"
            type="password"
            minLength="8"
            maxLength="30"
            placeholder="Пароль"
            onChange={handleChange}
            value={values.password || ""}
          />
        </label>
        <span name="password" 
        className={errors.password ? "login__span" : "login__span login__span-hidden"}>
          {errors.password || (fail && 'Что-то пошло не так...')}
          </span>
        <div className="login__button-container">
          <button
            type="submit"
            className={`login__link ${!isValid && "login__link_disabled"}`}
            disabled={isLoading ? "disabled" : ""}
          >
            Войти
          </button>
        </div>
        <div className="login__signup-container">
          <p className="login__signup-button">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__signup">
              {" "}
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;
