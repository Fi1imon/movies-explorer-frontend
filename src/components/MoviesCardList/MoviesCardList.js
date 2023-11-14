import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies, RenderedMovies, onSaveMovie, onDeleteMovie }) => {

  return (
    <>
      {
        RenderedMovies.length > 0 ?
          <ul className="movies-list">
            {RenderedMovies.map((movie) =>
              movie ? (<MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />) : null
            )}
          </ul> :
          <p className="movies-list__text">{movies.length > 1 && 'Ничего не найдено'}</p>
      }
    </>

  );
}

export default MoviesCardList;
