import { useState, useContext, useEffect } from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";


const SavedMovies = ({ width, onDeleteMovie }) => {
  const [isMoreButtonShown, setIsMoreButtonShown] = useState(true);
  const savedMovies = useContext(SavedMoviesContext);
  const [moviesList, setMoviesList] = useState([]);
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [loadedFilms, setLoadedFilms] = useState(0);

  useEffect(() => {
    setMoviesList(savedMovies);
  }, [savedMovies])

  useEffect(() => {
    if (width > 1137) {
      setRenderedFilms(moviesList.slice(0, 12));
      setLoadedFilms(12);
    } else if (width < 1138 && width > 767) {
      setRenderedFilms(moviesList.slice(0, 8));
      setLoadedFilms(8);
    } else {
      setRenderedFilms(moviesList.slice(0, 5));
      setLoadedFilms(5);
    }
  }, [moviesList])

  useEffect(() => {
    moviesList.length <= renderedFilms.length ?
      setIsMoreButtonShown(false) :
      setIsMoreButtonShown(true);
  }, [savedMovies, renderedFilms])

  return (
    <>
      <section className="saved-movies">
        <SearchForm
          filmsList={ savedMovies }
          setMoviesList={ setMoviesList }
        />
        <MoviesCardList
          movies={ renderedFilms }
          onDeleteMovie={ onDeleteMovie }
        />
        <MoreMovies
          isButtonShown={ isMoreButtonShown }
          filmsList={ savedMovies }
          renderedFilms={ renderedFilms }
          loadedFilms={ loadedFilms }
          setRenderedFilms={ setRenderedFilms }
          setLoadedFilms={ setLoadedFilms }
          width={ width }
        />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies
