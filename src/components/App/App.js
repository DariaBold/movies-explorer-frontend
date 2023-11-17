import React from "react";
import "./App.css";
import Profile from "../Profile/Profile";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const [fail, setFail] = React.useState(false);
  const [othersFail, setOthersFail] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const pathname = useLocation();
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
        .catch((error) =>{
          console.error(`Ошибка получения информации ${error}`);
          localStorage.clear();
        }
        );
    } else {
      setIsCheck(false);
    }
  }, [loggedIn]);
  function handleLogin(email, password) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        setIsCheck(false);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setFail(true);
        console.error(`Ошибка входа ${err}`);
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    api
      .registration(name, email, password)
      .then((data) => {
        handleLogin(email, password)
      })
      .catch((err) => {
        if(err.includes("409")){
          setFail(true);
        } else {
          setOthersFail(true)
        }
        console.error(`Ошибка регистрации ${err}`);
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }
  function handleClose(){
    setFail(false)
    setOthersFail(false)
  }
  function handleUpdateUser(props) {
    setIsLoading(true);
    api
      .setUserInfo(props, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.error(`Ошибка редактирования профиля ${error}`)
      )
      .finally(()=>{
        setIsLoading(false)
      })
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
            navigate(pathname, { replace: true });
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
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} fail={fail} onChangeClose={handleClose} isLoading={isLoading}/>}
            />
            <Route
              path="/signup"
              element={<Register register={handleRegister} fail={fail} onClose={handleClose} othersFail={othersFail}
              isLoading={isLoading}/>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
