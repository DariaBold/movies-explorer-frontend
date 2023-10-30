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
    const [windowWidth, setWindowSize] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.onresize = () => {
        setWindowSize(window.innerWidth)
    }
    document.body.classList.add("body");
    
  }, []);
  return (
    <CurrentUserContext.Provider>
    <Routes>
        <Route path="/"
        element={
            <Main width={windowWidth}/>
        }
        />
        <Route path="/movies"
        element={
            <Movies  width={windowWidth}/>
        }
        />
        <Route path="/saved-movies"
        element={
            <SavedMovies  width={windowWidth}/>
        }
        />
        <Route path="/profile"
        element={
            <Profile name="Виталий" email="pochta@yandex.ru"  width={windowWidth}/>
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