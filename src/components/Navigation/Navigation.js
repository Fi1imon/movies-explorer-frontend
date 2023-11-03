import { useNavigate, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navigation = ({ isOpened, setIsOpened }) => {
  const navigate = useNavigate();
  const closeNavTab = () => {
    setIsOpened(false)
  }

  return (
    window.innerWidth < 1279 ? (
      <section className={`hamburger ${isOpened ? "hamburger_opened" : ""}`}>
        <div className="hamburger__menu">
          <button
            className="hamburger__close-button"
            type="button"
            onClick={closeNavTab}
          />
          <nav className="hamburger__links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hamburger__link ${isActive ? "hamburger__link_active" : ""}`
              }
            >Главная</NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `hamburger__link ${isActive ? "hamburger__link_active" : ""}`
              }
            >Фильмы</NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `hamburger__link ${isActive ? "hamburger__link_active" : ""}`
              }
            >Сохраненные фильмы</NavLink>
          </nav>
          <Button
            className="header__account header__button hamburger__account-button"
            buttonText='Аккаунт'
            buttonType="button"
            handleClick={() => {navigate("/profile")}}
          />
        </div>
      </section>
    ) : (
        <div className="navigation">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >Фильмы</NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >Сохраненные фильмы</NavLink>
        </div>
      )
  )
};

export default Navigation;
