import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <Button
          className="not-found__button"
          buttonType="button"
          buttonText="Назад"
          handleClick={() => navigate(-1)}
        />
      </div>
    </section>
  )
}

export default NotFound;
