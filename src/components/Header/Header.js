import { useState } from "react";
import { useNavigate } from "react-router-dom";

import headerMenu from "../../images/headerMenu.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import UnauthorizedHeader from "../UnauthorizedHeader/UnauthorizedHeader";

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [isNavTabOpened, setIsNavTabOpened] = useState(false);
  const openNavTab = () => {
    setIsNavTabOpened(true);
  }

  function renderButtons() {
    if (loggedIn) { return window.innerWidth < 1279 ? (
      <>
        <img className="header__menu" onClick={openNavTab} src={headerMenu} alt="" />
      </>
    ) : (
      <Button
        className="header__account header__button"
        buttonText='Аккаунт'
        buttonType="button"
        handleClick={() => navigate("/profile")}
      />
    )} else { return (
      <div className="header__buttons">
        <Button
          className="header__register header__button"
          buttonText='Регистрация'
          buttonType="button"
          handleClick={() => navigate("/sign-up")}
        />
        <Button
          className="header__login header__button"
          buttonText='Войти'
          buttonType="button"
          handleClick={() => navigate("/sign-in")}
        />
      </div>
    )}
  }
  return (
    loggedIn || window.location.pathname === '/' ? (
      <header className="header">
        <Logo className="header__logo" />
        {loggedIn ? <Navigation
          isOpened={isNavTabOpened}
          setIsOpened={setIsNavTabOpened}
        /> : null}
        {renderButtons()}
      </header>
    ) : (
      <UnauthorizedHeader />
    )
  )
};

export default Header;
