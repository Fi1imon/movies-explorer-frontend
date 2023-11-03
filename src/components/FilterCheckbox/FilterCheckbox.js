const FilterCheckbox = () => {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input className="filter-checkbox__invisible-checkbox" type="checkbox" />
        <span className="filter-checkbox__visible-checkbox" />
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
