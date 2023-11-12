import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import Input from "../Input/Input";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.loginEmail,
      password: values.loginPassword,
      goMoviesPage: () => navigate("/movies"),
      setError: (message) => setErrMessage(message),
    })
  }

  return (
    <div className="login">
      <AuthenticationForm
        className="login__form"
        handleSubmit={handleSubmit}
        isValid={isValid}
        errMessage={errMessage}
      >
        <Input
          type="email"
          id ="login-email-input"
          name="loginEmail"
          inputLabel="E-mail"
          placeholder="primer@yandex.ru"
          isValid={isValid}
          value={values.loginEmail || ""}
          handleChange={handleChange}
          error={errors.loginEmail}
          errorClassName="input__input_invalid"
        />
        <Input
          type="password"
          id ="login-password-input"
          name="loginPassword"
          inputLabel="Пароль"
          placeholder="Пароль"
          isValid={isValid}
          value={values.loginPassword || ""}
          minLength={8}
          maxLength={20}
          handleChange={handleChange}
          error={errors.loginPassword}
          errorClassName="input__input_invalid"
        />
  </AuthenticationForm>
    </div>
  )
}

export default Login;
