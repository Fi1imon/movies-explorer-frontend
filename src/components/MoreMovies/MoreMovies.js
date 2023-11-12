import { addMoreMovies } from "../../utils/moviesInteractions";

const MoreMovies = ({
  isButtonShown,
  filmsList,
  renderedFilms,
  loadedFilms,
  setRenderedFilms,
  setLoadedFilms,
  setIsMoreButtonShown,
  width
}) => {

  return (
    <div className="more-movies">
      {isButtonShown ? <button
        type="button"
        className="more-movies__more-button"
        onClick={ () => addMoreMovies({
          filmsList,
          renderedFilms,
          loadedFilms,
          setRenderedFilms,
          setLoadedFilms,
          setIsMoreButtonShown,
          width
        }) }
      >Ещё</button> : null}
    </div>
  )
}

export default MoreMovies;
