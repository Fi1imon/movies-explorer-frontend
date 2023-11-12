import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { filterMovies } from "../../utils/moviesInteractions";

const SearchForm = ({ filmsList, setMoviesList }) => {
  const path = useResolvedPath().pathname;
  const [filterOptions, setFilterOptions] = useState({});

  useEffect(() => {
    if(path === '/movies' && localStorage.getItem('filterOptions')) {
      filterMovies({
        setMoviesList,
        filmsList,
        filterOptions: JSON.parse(localStorage.getItem('filterOptions'))
      })
      setFilterOptions(JSON.parse(localStorage.getItem('filterOptions')))
    }
  }, [filmsList])

  const handleChange = (e) => {
    setFilterOptions({...filterOptions, [e.target.name]: e.target.value})
  };

  const searchFilm = (e) => {
    e.preventDefault();

    if(path === '/movies') {
      localStorage.setItem('filterOptions', JSON.stringify(filterOptions))
    }

    if(filmsList) {
      filterMovies({ setMoviesList, filmsList, filterOptions })
    }
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
          isShort={filterOptions.isShortFilm}
          setFilterOptions={ (isShortFilm) => setFilterOptions({...filterOptions, isShortFilm}) }
        />
      </form>
    </>
  );
}

export default SearchForm;
