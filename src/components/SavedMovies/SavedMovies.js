import { useState, useContext } from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";


const SavedMovies = ({ onDeleteMovie }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const [moviesList, setMoviesList] = useState(savedMovies);

  return (
    <>
      <section className="saved-movies">
        <SearchForm
          films={ savedMovies }
          setFilmsList={ setMoviesList }
        />
        <MoviesCardList
          movies={ savedMovies }
          RenderedMovies={ moviesList }
          onDeleteMovie={ onDeleteMovie }
        />
        <MoreMovies
          isButtonShown={ false }
        />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies
