import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import UnauthorizedHeader from "../UnauthorizedHeader/UnauthorizedHeader";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

import { movies, savedMovies } from "../../utils/constants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setMoviesList(movies);
  }, [])

  return (
    <BrowserRouter>
      <div className="page">
        {isLoggedIn ? <Header
          loggedIn={isLoggedIn}
        /> : <UnauthorizedHeader />}
        <Routes>
          <Route path="/" element={<ProtectedRoute
            loggedIn={isLoggedIn}
            component={Main}
          />} />
          <Route path="/movies" element={<ProtectedRoute
            loggedIn={isLoggedIn}
            component={Movies}
            movies={moviesList}
          />} />
          <Route path="/saved-movies" element={<ProtectedRoute
            loggedIn={isLoggedIn}
            component={SavedMovies}
            movies={savedMovies}
          />} />
          <Route path="/profile" element={<ProtectedRoute
            loggedIn={isLoggedIn}
            component={Profile}
          />} />
          <Route path="/sign-up" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
          <Route path="/sign-in" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
