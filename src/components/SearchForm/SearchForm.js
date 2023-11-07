import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  const searchFilm = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="search-form" onSubmit={searchFilm}>
        <div className="search-form__container">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" type="submit" />
        </div>
        <FilterCheckbox />
      </form>
    </>
  );
}

export default SearchForm;
