import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ width, loggedIn, savedMovies, onCardDelete }) {
  const [filterMovies, setFilterMovies] = React.useState(savedMovies);
  const [inputSearch, setInputSearch] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function filterMoviesByWord(movies, inputWords, isChecked) {
    setInputSearch(inputWords);
    setFilterMovies(
      movies.filter((movie) => {
        const inputName = movie.nameRU
          .toLowerCase()
          .includes(inputWords.toLowerCase());
        return isChecked ? inputName && movie.duration <= 40 : inputName;
      })
    );
  }
  function handleCheckbox() {
    setIsLoading(true);
    if (isChecked === false) {
      setIsChecked(true);
      filterMoviesByWord(savedMovies, inputSearch, true);
    } else {
      setIsChecked(false);
      filterMoviesByWord(savedMovies, inputSearch, false);
    }
    setIsLoading(false);
  }
  function search(inputWords) {
    filterMoviesByWord(savedMovies, inputWords, isChecked);
  }
  useEffect(() => {
    if (savedMovies.length !== 0) {
      setIsLoading(true);
      setFilterMovies(savedMovies);
    }
    setIsLoading(false);
    filterMoviesByWord(savedMovies, inputSearch, isChecked);
  }, [inputSearch, isChecked, savedMovies]);
  return (
    <main>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header widthWindow={width} loggedIn={loggedIn} />
          <SearchForm
            handleCheckbox={handleCheckbox}
            isChecked={isChecked}
            search={search}
          />
          <article className="elements">
            <ul className="elements__films">
              {filterMovies.map((info) => {
                return (
                  <MoviesCard
                    key={info._id}
                    onSaved={true}
                    onCardDelete={onCardDelete}
                    saved={savedMovies}
                    info={info}
                  />
                );
              })}
              {filterMovies.length === 0 && (
                <p className={"elements__films-no"} type="text">
                  Вы еще ничего не сохранили
                </p>
              )}
            </ul>
            <button
              className={`"elements__more-hidden elements__more"}`}
              type="button"
              name="more"
              aria-label="Еще"
              hidden={true}
            ></button>
          </article>
          <Footer />
        </>
      )}
    </main>
  );
}
export default SavedMovies;
