import { useState } from "react";

import Input from "../Input/Input";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

const Login = () => {
  const [formValues, setFormValues] = useState({})
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  }

  return (
    <div className="login">
      <AuthenticationForm className="login__form">
        <Input
          type="email"
          id ="email"
          name="email"
          inputLabel="E-mail"
          placeholder="primer@yandex.ru"
          isValid={true}
          value={formValues.email || ""}
          handleChange={handleChange}
          error=""
          errorClassName=""
        />
        <Input
          type="password"
          id ="password"
          name="password"
          inputLabel="Пароль"
          placeholder="Пароль"
          isValid={true}
          value={formValues.password || ""}
          handleChange={handleChange}
          error=""
          errorClassName="input__input_invalid"
        />
  </AuthenticationForm>
    </div>
  )
}

export default Login;
