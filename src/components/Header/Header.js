import { useState } from "react";
import { useNavigate } from "react-router-dom";

import headerMenu from "../../images/headerMenu.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

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
        handleClick={() => {navigate("/profile")}}
      />
    )} else { return (
      <div className="header__buttons display_flex">
        <Button
          className="header__register header__button"
          buttonText='Регистрация'
          buttonType="button"
        />
        <Button
          className="header__login header__button"
          buttonText='Войти'
          buttonType="button"
        />
      </div>
    )}
  }
  return (
    <header className="header display_flex">
      <Logo className="header__logo" />
      <Navigation
        isOpened={isNavTabOpened}
        setIsOpened={setIsNavTabOpened}
      />
      {renderButtons()}
    </header>
  )
};

export default Header;
