import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { filterMovies } from "../../utils/moviesInteractions";

const SearchForm = ({ films, setFilmsList, getMovies }) => {
  const path = useResolvedPath().pathname;
  const [filterOptions, setFilterOptions] = useState({
    filmName: "",
    isShortFilm: false
  });

  useEffect(() => {
    if(path === '/movies' && localStorage.getItem('filterOptions')) {
      filterMovies({
        setFilmsList,
        films,
        filterOptions: JSON.parse(localStorage.getItem('filterOptions'))
      })
      setFilterOptions(JSON.parse(localStorage.getItem('filterOptions')))
    } else {
      filterMovies({
        setFilmsList,
        films,
        filterOptions
      })
    }
  }, [films])

  const handleChange = (e) => {
    setFilterOptions({...filterOptions, [e.target.name]: e.target.value})
  };

  const searchFilm = (e) => {
    e.preventDefault();

    if(path === '/movies' && films.length < 1) {
      getMovies();
    }
    console.log(films)

      filterMovies({ setFilmsList, films, filterOptions, path });
  };

  return (
    <>
      <form className="search-form" onSubmit={searchFilm}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            name="filmName"
            type="text"
            placeholder="Фильм"
            onChange={handleChange}
            value={filterOptions.filmName || ""}
          />
          <button className="search-form__button" type="submit" />
        </div>
        <FilterCheckbox
          filter={(isShortFilm) => filterMovies({
            setFilmsList,
            films,
            filterOptions: {...filterOptions, isShortFilm},
            path
          })}
          isShort={filterOptions.isShortFilm}
          setFilterOptions={ (isShortFilm) => setFilterOptions({...filterOptions, isShortFilm}) }
        />
      </form>
    </>
  );
}

export default SearchForm;
