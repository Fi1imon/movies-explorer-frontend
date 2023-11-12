import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import Input from "../Input/Input";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
    setErrMessage('')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.registrationName,
      email: values.registrationEmail,
      password: values.registrationPassword,
      goMoviesPage: () => navigate('/sign-in'),
      setError: (message) => setErrMessage(message),
    });
  }

  return (
    <div className="register">
      <AuthenticationForm
        className="register__form"
        handleSubmit={handleSubmit}
        isValid={isValid}
        errMessage={errMessage}
      >
        <Input
          type="text"
          id ="reg-name-input"
          name="registrationName"
          inputLabel="Имя"
          placeholder="Имя"
          pattern="^[a-zA-Zа-яёА-ЯЁ\- ]+$"
          value={values.registrationName || ""}
          minLength={2}
          maxLength={30}
          handleChange={handleChange}
          error={errors.registrationName}
          errorClassName="input__input_invalid"
        />
        <Input
          type="email"
          id ="reg-email-input"
          name="registrationEmail"
          inputLabel="E-mail"
          placeholder="primer@yandex.ru"
          value={values.registrationEmail || ""}
          handleChange={handleChange}
          error={errors.registrationEmail}
          errorClassName="input__input_invalid"
        />
        <Input
          type="password"
          id ="reg-password-input"
          name="registrationPassword"
          inputLabel="Пароль"
          placeholder="Пароль"
          value={values.registrationPassword || ""}
          minLength={8}
          maxLength={20}
          handleChange={handleChange}
          error={errors.registrationPassword}
          errorClassName="input__input_invalid"
        />
      </AuthenticationForm>
    </div>
  )
}

export default Register;
