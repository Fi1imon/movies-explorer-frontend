import { useResolvedPath } from "react-router-dom";

import Logo from "../Logo/Logo";

const UnauthorizedHeader = () => {
  const path = useResolvedPath().pathname;

  return (
    <header className="unauthorized-header">
      <Logo className="unauthorized-header__logo" />
      <h1 className="unauthorized-header__header">
        {path === '/sign-up' ? 'Добро пожаловать!' : 'Рады видеть!'}
      </h1>
    </header>
  )
}

export default UnauthorizedHeader;
