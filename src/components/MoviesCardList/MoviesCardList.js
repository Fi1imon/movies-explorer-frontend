import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies }) => {

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movieImage={movie.image}
          movieName={movie.nameRU}
          movieDuration={movie.duration}
          movieOwner={movie.owner}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;
