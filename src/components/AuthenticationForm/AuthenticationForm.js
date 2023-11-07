import { Link, useResolvedPath } from "react-router-dom";
import Button from "../Button/Button";

const AuthenticationForm = ({ className, children }) => {
  const path = useResolvedPath().pathname;
 const isLoginPage = () => {
   return path === "/sign-in";
 }

  return (
    <>
      <form className={`authentication ${className}`}>
        {children}
        <Button
          className="authentication__submit-button"
          buttonText={isLoginPage() ? "Войти" : "Зарегистрироваться"}
          buttonType="submit"
        />
        <div className="authentication__container">
          <p className="authentication__text">
            {isLoginPage() ? "Ещё не зарегистрированы?" : "Уже зарегистрированы?"}
            <Link to={isLoginPage() ? "/sign-up" : "/sign-in"} className="authentication__link">{isLoginPage() ? "Регистрация" : "Войти"}</Link>
          </p>
        </div>
      </form>

    </>
  )
}

export default AuthenticationForm;
