import { useState } from 'react';
import Button from "../Button/Button";

const Profile = ({ setLoggedIn }) => {
  const [user, setUser] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="profile">
      <h1 className="profile__header">Привет, {user.name}!</h1>
      <form className="profile__container" onSubmit={handleSubmit}>
        <div className="profile__items">
          <p className="profile__item profile__item_top">Имя</p>
          <input className="profile__item-value profile__item-value_top" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="profile__items">
          <p className="profile__item">E-mail</p>
          <input className="profile__item-value" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="profile__buttons">
          <Button
            className="profile__button profile__edit"
            buttonText="Редактировать"
            buttonType="submit"
          />
          <Button
            className="profile__button profile__logout"
            buttonText="Выйти из аккаунта"
            buttonType="button"
            handleClick={() => setLoggedIn(false)}
          />
        </div>
      </form>
    </section>
  );
}

export default Profile;
