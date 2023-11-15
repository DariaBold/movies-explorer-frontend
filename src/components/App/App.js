import React from "react";
import "./App.css";
import Profile from "../Profile/Profile";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NotFound from "../NotFound/NotFound";
import * as api from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [windowWidth, setWindowSize] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.onresize = () => {
      setWindowSize(window.innerWidth);
    };
    document.body.classList.add("body");
  }, []);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([
        api.getUserInfo(localStorage.getItem("jwt")),
        api.getMovies(localStorage.getItem("jwt")),
      ])
        .then(([info, infoMovie]) => {
          setCurrentUser(info);
          setSavedMovies(infoMovie.reverse());
          setIsCheck(false);
        })
        .catch((error) =>
          console.error(`Ошибка получения информации ${error}`)
        );
    } else {
      setIsCheck(false);
    }
  }, [loggedIn]);
  function handleLogin(email, password) {
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        setIsCheck(false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(name, email, password) {
    api
      .registration(name, email, password)
      .then((data) => {
        console.log(data);
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUpdateUser(props) {
    api
      .setUserInfo(props, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.error(`Ошибка редактирования профиля ${error}`)
      );
  }
  function handleOnSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("short");
    localStorage.removeItem("inputwords");
    localStorage.removeItem("allmovies");
    setLoggedIn(false);
  }

  function handleCardLike(data) {
    const isLiked = savedMovies.some((i) => data.id === i.movieId);
    const clickMovie = savedMovies.filter((i) => {
      return i.movieId === data.id;
    });
    if (isLiked) {
      handleCardDelete(clickMovie[0]._id);
    } else {
      console.log(data);
      api
        .addMovie(data, localStorage.getItem("jwt"))
        .then((newMovie) => setSavedMovies([newMovie, ...savedMovies]))
        .catch((error) => console.error(`Ошибка добавления лайка ${error}`));
    }
  }
  function handleCardDelete(moviesId) {
    api
      .deleteMovie(moviesId, localStorage.getItem("jwt"))
      .then(() => {
        setSavedMovies(
          savedMovies.filter((i) => {
            return i._id !== moviesId;
          })
        );
      })
      .catch((error) => console.error(`Ошибка удаления лайка ${error}`));
  }
  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setIsCheck(false);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      {isCheck ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/"
              element={<Main width={windowWidth} loggedIn={loggedIn} />}
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isCheck={isCheck}
                  width={windowWidth}
                  savedMovies={savedMovies}
                  loggedIn={loggedIn}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isCheck={isCheck}
                  width={windowWidth}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  onCardDelete={handleCardDelete}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isCheck={isCheck}
                  width={windowWidth}
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleOnSignOut}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login loggedIn={loggedIn} handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Register register={handleRegister} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
