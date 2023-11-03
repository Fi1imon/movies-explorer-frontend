import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";

const Logo = ({ className }) => {
  const navigate = useNavigate();

  return (
      <img
        className={className}
        onClick={() => {navigate("/")}}
        src={logo}
        alt="Логотип"
      />
  )
}

export default Logo;
