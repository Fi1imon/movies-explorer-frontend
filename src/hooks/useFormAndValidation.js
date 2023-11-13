import { useState, useCallback } from "react";
import { validate } from "email-validator";

export function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  function handleChange(e) {
    const {name, value} = e.target;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage});
    if(name.toLowerCase().includes('email') && e.target.validationMessage === '') {
      if(!validate(value)) {
        setIsValid(false);
        setErrors({ ...errors, [name]: 'Некорректный email' });
      }
    }

    setIsValid(e.target.closest('form').checkValidity());
  }

  const resetForm = useCallback((emptyValues = {}, emptyErrors = {}, newIsValid = false) => {
    setValues(emptyValues);
    setErrors(emptyErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid])

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
