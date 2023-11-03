import { useState } from "react";

import Input from "../Input/Input";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

const Register = () => {
  const [formValues, setFormValues] = useState({});
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <section className="register">
      <AuthenticationForm className="register__form">
        <Input
          type="text"
          id ="name"
          name="name"
          inputLabel="Имя"
          placeholder="Имя"
          isValid={true}
          value={formValues.name || ""}
          handleChange={handleChange}
          error=""
          errorClassName=""
        />
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
          isValid={false}
          value={formValues.password || ""}
          handleChange={handleChange}
          error="Что-то пошло не так..."
          errorClassName="input__input_invalid"
        />
      </AuthenticationForm>
    </section>
  )
}

export default Register;
