import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link onClick={()=> navigate(-1)} className="not-found__button">
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
