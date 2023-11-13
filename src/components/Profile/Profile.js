import { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import  { useFormAndValidation } from "../../hooks/useFormAndValidation";

import Button from "../Button/Button";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

const Profile = ({ onLogout, onSubmit }) => {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { values, handleChange, isValid, setValues, setIsValid } = useFormAndValidation();

  useEffect(() => {
    setValues({
      editName: currentUser.name,
      editEmail: currentUser.email,
    });
  }, [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.editName !== currentUser.name || values.editEmail !== currentUser.email) {
      onSubmit({
        email: values.editEmail,
        name: values.editName,
        setMessage: ({ isError, message }) => {
          isError ?
          setErrMessage(message) :
          setSuccessMessage(message)
        },
        setIsValid: (isValid) => {setIsValid(isValid)}
      });
    }
  }

  return (
    <section className="profile">
      <h1 className="profile__header">Привет, {currentUser.name}!</h1>
      <form className="profile__container" onSubmit={handleSubmit}>
        <div className="profile__items">
          <p className="profile__item profile__item_top">Имя</p>
          <input
            className="profile__item-value profile__item-value_top"
            id="edit-name-input"
            name="editName"
            pattern="^[a-zA-Zа-яёА-ЯЁ\- ]+$"
            value={values.editName || ''}
            onChange={handleChange} />
        </div>
        <div className="profile__items">
          <p className="profile__item">E-mail</p>
          <input
            className="profile__item-value"
            id="edit-email-input"
            name="editEmail"
            value={values.editEmail || ''}
            onChange={handleChange}
          />
        </div>
        <div className="profile__buttons">
          <p className={`profile__request-message ${errMessage !== '' ? 'profile__request-message_error' : 'profile__request-message_success'}`}>{errMessage || successMessage}</p>
          <Button
            className={`profile__button profile__edit ${!isValid || (values.editName === currentUser.name && values.editEmail === currentUser.email) ? 'profile__button_disabled' : ''}`}
            buttonText="Редактировать"
            buttonType="submit"
            isDisabled={!isValid}
          />
          <Button
            className="profile__button profile__logout"
            buttonText="Выйти из аккаунта"
            buttonType="button"
            handleClick={() => onLogout({ navigate })}
          />
        </div>
      </form>
    </section>
  );
}

export default Profile;
