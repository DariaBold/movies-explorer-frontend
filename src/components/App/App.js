import React from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';

function App() {
  React.useEffect(() => {
    document.body.classList.add("body");
  }, []);
  return (
    <CurrentUserContext.Provider>
    <Routes>
        <Route path="/"
        element={
            <Main/>
        }
        />
        <Route path="/movies"
        element={
            <Movies/>
        }
        />
        <Route path="/saved-movies"
        element={
            <SavedMovies/>
        }
        />
        <Route path="/profile"
        element={
            <Profile name="Виталий" email="pochta@yandex.ru"/>
        }
        />
        <Route path="/signin"
        element={
            <Login/>
        }
        />
        <Route path="/signup"
        element={
            <Register/>
        }
        />
        <Route path="*"
        element={
            <NotFound/>
        }
        />
    </Routes>
    </CurrentUserContext.Provider>
    
  );
}

export default App;