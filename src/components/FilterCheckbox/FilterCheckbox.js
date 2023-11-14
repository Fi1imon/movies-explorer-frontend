const FilterCheckbox = ({ setFilterOptions, isShort, filter }) => {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          className="filter-checkbox__invisible-checkbox"
          type="checkbox"
          checked={isShort || false}
          onChange={() => setFilterOptions(!isShort)}
          onClick={() => filter(!isShort)}
        />
        <span className="filter-checkbox__visible-checkbox" />
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
