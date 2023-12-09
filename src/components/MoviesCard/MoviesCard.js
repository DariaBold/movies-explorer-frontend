import React, { useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ saved, onCardLike, onCardDelete, info }) {
  const [click, setClick] = React.useState(false);
  const { pathname } = useLocation();
  function handleLiked() {
    if (saved.some((elem) => info.id === elem.movieId)) {
      setClick(true);
      onCardLike(info);
    } else {
      setClick(false);
      onCardLike(info);
    }
  }
  function handleDelete() {
    if (saved.some((i) => info.id === i.movieId)) {
      setClick(true);
      onCardDelete(info._id);
    } else {
      setClick(false);
      onCardDelete(info._id);
    }
  }
  useEffect(() => {
    if (pathname === "/movies") {
      setClick(saved.some((i) => info.id === i.movieId));
    }
  }, [saved, info.id, setClick, pathname]);
  return (
    <li className="elements__card">
      <a className="elements__trailerLink" href={info.trailerLink}>
        <img
          className="elements__image"
          alt={info.nameRU}
          src={
            info.image?.url
              ? `https://api.nomoreparties.co/${info.image?.url}`
              : info.image
          }
        />
      </a>
      {pathname === "/saved-movies" && (
        <button
          className="elements__saved elements__onSaved"
          type="button"
          name="saved"
          aria-label="Сохранено"
          onClick={handleDelete}
        ></button>
      )}
      {pathname === "/movies" && (
        <button
          className={` ${click ? "elements__saved" : "elements__save"}`}
          type="button"
          name={` ${click ? "saved" : "save"}`}
          aria-label="Сохранить"
          onClick={handleLiked}
        >
          {click ? "" : "Сохранить"}
        </button>
      )}
      <div className="elements__text">
        <h2 className="elements__title">{info.nameRU}</h2>
        <span className="elements__counter">{`${
          info.duration > 59
            ? `${~~(info.duration / 60)} ч ${
                info.duration % 60 > 0 && info.duration % 60 !== 0
                  ? `${info.duration % 60} мин`
                  : ""
              }`
            : `${info.duration}  мин`
        }`}</span>
      </div>
    </li>
  );
}
export default MoviesCard;
