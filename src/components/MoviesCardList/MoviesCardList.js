import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect} from "react";

const MoviesCardList = ({ movies, onSaveMovie, onDeleteMovie }) => {

  useEffect(() => {
  }, [])

  return (
    <>
      {
        movies.length > 0 ?
          <ul className="movies-list">
            {movies.map((movie) =>
              movie ? (<MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />) : null
            )}
          </ul> :
          <p className="movies-list__text">Ничего не найдено</p>
      }
    </>

  );
}

export default MoviesCardList;
