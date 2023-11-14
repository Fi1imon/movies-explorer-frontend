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

    if(Object.keys(values).some((key) => {
      if (name.includes('Email')) {
        return validate(value)
      }
      else if (key.includes('Email')) {
        return  validate(values[key])
      }
    }) &&
        e.target.closest('form').checkValidity()
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
      if (name.includes('Email') && !validate(value)) {
        setErrors({...errors, [name]: 'Некорректный email'});
      }
    }
  }

  const resetForm = useCallback((emptyValues = {}, emptyErrors = {}, newIsValid = false) => {
    setValues(emptyValues);
    setErrors(emptyErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid])

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
