import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import "../SavedMovies/SavedMovies.css";

function MoviesCardList({ movies, saved, onCardLike, onCardDelete }) {
  const [isOpenMovies, setIsOpenMovies] = React.useState(0);
  const [count, setCount] = React.useState(() => {});
  function firstCount() {
    if (window.innerWidth > 1280) {
      setIsOpenMovies(3);
      setCount(12);
    } else if (window.innerWidth < 800 && 713 < window.innerWidth) {
      setIsOpenMovies(2);
      setCount(8);
    } else if (window.innerWidth < 713) {
      setIsOpenMovies(2);
      setCount(5);
    }
  }

  function handleClickMore() {
    if (window.innerWidth > 1280) {
      setCount(count + isOpenMovies);
    } else if (window.innerWidth < 800 && 713 < window.innerWidth) {
      setCount(count + isOpenMovies);
    } else if (window.innerWidth < 713) {
      setCount(count + isOpenMovies);
    }
  }
  useEffect(() => {
    firstCount();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleClickMore);
    return () => window.removeEventListener("resize", handleClickMore);
  });
  return (
    <section className="elements">
      {movies.length === 0 ? (
        <p type="text" className="elements__films-no">
          Ничего не найдено
        </p>
      ) : (
        <>
          <ul className="elements__films">
            {movies.slice(0, count).map((info) => {
              return (
                <MoviesCard
                  key={info.id}
                  saved={saved}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                  info={info}
                />
              );
            })}
          </ul>
          <button
            className={`${
              movies.length <= count
                ? "elements__more-hidden elements__more"
                : "elements__more"
            }`}
            type="button"
            name="more"
            aria-label="Еще"
            onClick={handleClickMore}
          >
            Еще
          </button>
        </>
      )}
    </section>
  );
}
export default MoviesCardList;
