import { Link, useResolvedPath } from "react-router-dom";
import Button from "../Button/Button";

const AuthenticationForm = ({ className, handleSubmit, isValid, errMessage, children }) => {
  const path = useResolvedPath().pathname;

  return (
    <>
      <form
        className={`authentication ${className}`}
        onSubmit={handleSubmit}
        noValidate={true}
      >
        {children}
        <p className="authentication__request-error">{errMessage}</p>
        <Button
          className={`authentication__submit-button ${!isValid ? "authentication__submit-button_disabled" : ""}`}
          buttonText={path === "/sign-in" ? "Войти" : "Зарегистрироваться"}
          buttonType="submit"
          isDisabled={!isValid}
        />
        <div className="authentication__container">
          <p className="authentication__text">
            {path === "/sign-in" ? "Ещё не зарегистрированы?" : "Уже зарегистрированы?"}
            <Link to={path === "/sign-in" ? "/sign-up" : "/sign-in"} className="authentication__link">{path === "/sign-in" ? "Регистрация" : "Войти"}</Link>
          </p>
        </div>
      </form>

    </>
  )
}

export default AuthenticationForm;
