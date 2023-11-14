export const addMoreMovies = ({
  filmsList, renderedFilms, loadedFilms, setRenderedFilms, setLoadedFilms, width
}) => {
  if(filmsList.length > renderedFilms.length) {
    if (width > 1137) {
      setRenderedFilms([...renderedFilms, filmsList[loadedFilms], filmsList[loadedFilms + 1], filmsList[loadedFilms + 2]]);
      setLoadedFilms(loadedFilms + 3);
    } else if (width < 1138 && width > 767) {
      setRenderedFilms([...renderedFilms, filmsList[loadedFilms], filmsList[loadedFilms + 1]]);
      setLoadedFilms(loadedFilms + 2);
    } else {
      setRenderedFilms([...renderedFilms, filmsList[loadedFilms], filmsList[loadedFilms + 1]]);
      setLoadedFilms(loadedFilms + 2);
    }
  }
}

export const filterMovies = ({
  setFilmsList, films, filterOptions, path
}) => {
  const filteredMovies = films.filter((movie) => {
    if(filterOptions.filmName && filterOptions.isShortFilm) {
      return movie.nameRU.toLowerCase().includes(filterOptions.filmName.toLowerCase()) && movie.duration <= 40
    } else if(filterOptions.isShortFilm) {
      return movie.duration <= 40
    } else if(filterOptions.filmName) {
      return movie.nameRU.toLowerCase().includes(filterOptions.filmName.toLowerCase())
    }
    return movie
  });

  if(path === '/movies') {
    localStorage.setItem('filterOptions', JSON.stringify(filterOptions));
  }

  setFilmsList(filteredMovies);
}
