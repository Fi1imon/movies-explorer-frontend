import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  })

  useEffect(() => {
    setIsLoading(true);
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        mainApi.getSavedFilms()
          .then((res) => {
            setSavedMovies(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  }, [isLoggedIn])

  const onRegister = ({ name, email, password, goMoviesPage, setError, setIsValid }) => {
    setIsValid(false);
    mainApi.register({ name, email, password })
      .then(() => {
        mainApi.login({ email, password })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          goMoviesPage();
        })
        .catch((err) => {
        console.log(err);
        })
      })
      .catch((err) => {
        if(err.includes('409')) {
          setError('Пользователь с таким email уже существует.');
        }
        if(err.includes('400')) {
          setError('При регистрации пользователя произошла ошибка.');
        }
        console.log(err);
      })
      .finally(() => setIsValid(true));
  }

  const onLogin = ({ email, password, goMoviesPage, setError, setIsValid }) => {
    setIsValid(false);
    mainApi.login({ email, password })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        goMoviesPage();
      })
      .catch((err) => {
        setError('При авторизации пользователя произошла ошибка.');
        console.log(err);
      })
      .finally(() => setIsValid(true));
  }

  const onLogout = ({ navigate }) => {
    mainApi.logout()
      .then(() => {
        navigate('/');
        setCurrentUser({});
        setIsLoggedIn(false);
        localStorage.removeItem('filterOptions');
        localStorage.removeItem('Movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onPatchUserInfo = ({ name, email, setMessage, setIsValid }) => {
    setIsLoading(true);
    setIsValid(false);
    mainApi.patchUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setMessage({
          isError: false,
          message: 'Успешно!'
        })
      })
      .catch((err) => {
        if(err.includes('409')) {
          setMessage({
            isError: true,
            message: 'Пользователь с таким email уже существует.'
          });
        }
        if(err.includes('400')) {
          setMessage({
            isError: true,
            message: 'При обновлении профиля произошла ошибка.'
          });
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsValid(true);
      });
  }

  const onSaveMovie = (movie) => {
    mainApi.saveFilm(movie)
      .then((movie) => {
        setSavedMovies((savedMovies) => [...savedMovies, movie]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onDeleteMovie = (movieId) => {
    mainApi.deleteFilm({ id: movieId })
      .then(() => {
        setSavedMovies(
          (savedMovies) => savedMovies.filter((movie) => movie.movieId !== movieId)
        );
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <BrowserRouter>
      <div className="page">
        <CurrentUserContext.Provider value={ currentUser }>
        <SavedMoviesContext.Provider value={ savedMovies }>
          {isLoading && <div className="page__loading"><div className="page__spinner" /></div>}
          <Header loggedIn={ isLoggedIn } />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<ProtectedRoute
              loggedIn={ isLoggedIn }
              component={ Movies }
              width={ width }
              onSaveMovie={ onSaveMovie }
              onDeleteMovie={ onDeleteMovie }
            />} />
            <Route path="/saved-movies" element={<ProtectedRoute
              loggedIn={ isLoggedIn }
              component={ SavedMovies }
              width={ width }
              onDeleteMovie={ onDeleteMovie }
            />} />
            <Route path="/profile" element={<ProtectedRoute
              loggedIn={ isLoggedIn }
              component={ Profile }
              onLogout={ onLogout }
              onSubmit={ onPatchUserInfo }
            />} />
            <Route path="/sign-up" element={ !isLoggedIn ? <Register onRegister={ onRegister } /> : <Navigate to="/" /> } />
            <Route path="/sign-in" element={ !isLoggedIn ? <Login onLogin={ onLogin } /> : <Navigate to="/" /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </SavedMoviesContext.Provider>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
