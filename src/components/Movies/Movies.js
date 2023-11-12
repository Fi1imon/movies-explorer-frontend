import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import moviesApi from "../../utils/MoviesApi";

const Movies = ({ loggedIn, width, onSaveMovie, onDeleteMovie }) => {
  const [movies, setMovies] = useState([]);
  const [isMoreButtonShown, setIsMoreButtonShown] = useState(true);
  const [loadedFilms, setLoadedFilms] = useState(0);
  const [moviesList, setMoviesList] = useState([]);
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [moviesList, renderedFilms])

  useEffect( () => {
    if (loggedIn) {
      setIsLoading(true)
      moviesApi.getFilms()
        .then((res) => {
          setMovies(res);
          setMoviesList(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }

  }, [loggedIn])

  return (
    <>
      <section className="movies">
        <SearchForm
          filmsList={ movies }
          setMoviesList={ setMoviesList }
        />
        {isLoading ? <Preloader /> : <MoviesCardList
          movies={ renderedFilms }
          onSaveMovie={ onSaveMovie }
          onDeleteMovie={ onDeleteMovie }
        />}
        <MoreMovies
          isButtonShown={ isMoreButtonShown }
          filmsList={moviesList}
          renderedFilms={renderedFilms}
          loadedFilms={loadedFilms}
          setRenderedFilms={setRenderedFilms}
          setLoadedFilms={setLoadedFilms}
          width={width}
        />
      </section>
      <Footer />
    </>
  )
}

export default Movies
