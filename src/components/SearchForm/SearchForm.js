import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  const searchFilm = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="search-form" onSubmit={searchFilm}>
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button" type="submit" />
      </form>
      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
