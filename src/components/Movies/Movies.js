import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getMoviesAll } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
function Movies({ width, loggedIn, savedMovies, onCardLike, onCardDelete }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [inputSearch, setInputSearch] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [filterMovies, setFilterMovies] = React.useState([]);
  function filterMoviesByWord(movies, inputWords, isChecked) {
    localStorage.setItem("allmovies", JSON.stringify(movies));
    localStorage.setItem("inputwords", JSON.stringify(inputWords));
    localStorage.setItem("short", JSON.stringify(isChecked));
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

  function search(inputWords) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      getMoviesAll()
        .then((info) => {
          setAllMovies(info);
          setIsChecked(false);
          filterMoviesByWord(info, inputWords, false);
        })
        .catch((error) => {
          console.error(`Ошибка поиска фильмов ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterMoviesByWord(allMovies, inputWords, isChecked);
    }
  }
  function handleCheckbox() {
    if (isChecked === false) {
      setIsChecked(true);
      filterMoviesByWord(allMovies, inputSearch, true);
    } else {
      setIsChecked(false);
      filterMoviesByWord(allMovies, inputSearch, false);
    }
  }
  useEffect(() => {
    if (
      localStorage.allmovies &&
      localStorage.inputwords &&
      localStorage.short
    ) {
      const allMovies = JSON.parse(localStorage.allmovies);
      const inputWords = JSON.parse(localStorage.inputwords);
      const isChecked = JSON.parse(localStorage.short);
      setAllMovies(allMovies);
      setIsChecked(isChecked);
      setInputSearch(inputWords);
      filterMoviesByWord(allMovies, inputWords, isChecked);
    }
  }, []);
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
          <MoviesCardList
            movies={filterMovies}
            saved={savedMovies}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
          <Footer />
        </>
      )}
    </main>
  );
}
export default Movies;
