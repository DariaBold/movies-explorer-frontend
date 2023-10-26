import React from "react";
import { Link } from "react-router-dom";
import './Login.css';


function Login({ handleLogin }) {
    const [formValue, setFormValue] = React.useState({
      email: "",
      password: "",
    });
    function onLogin(e) {
      e.preventDefault();
      if (!formValue.email || !formValue.password) {
        return;
      }
      handleLogin(formValue.email, formValue.password);
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValue({
        ...formValue,
        [name]: value,
      });
    };
    return (
      <main className="login">
        <Link to="/"><div className="login__logo"></div></Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form onSubmit={onLogin} className="login__form">
        <label className="login__form-name">E-mail
          <input
            required=""
            className="login__input"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={formValue.email}
          />
          </label>
        <label className="login__form-name">Пароль
          <input
            required=""
            id="password"
            className="login__input"
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={formValue.password}
          />
          </label>
          <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
          <div className="login__signup-container">
          <p className="login__signup-button">
          Ещё не зарегистрированы?
            <Link to="/signup"  className="login__signup">
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
