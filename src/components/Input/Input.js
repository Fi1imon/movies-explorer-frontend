
const Input = ({
  type, id, name, inputLabel, placeholder, isValid, minLength, maxLength, value, handleChange, error, errorClassName,
               }) => {

  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>{inputLabel}</label>
      <input
        type={type}
        id={id}
        className={`input__input ${isValid ? '' : errorClassName} ${error ? 'input__input_invalid' : ''}`}
        name={name}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        required
      />
      <span
        className={"input__error "}
      >
        {error}
      </span>
    </div>
  )
}

export default Input;
