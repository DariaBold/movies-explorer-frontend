import React, { useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

export function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "name" && target.validity.patternMismatch) {
      target.setCustomValidity("Некорректное имя");
    } else {
      target.setCustomValidity("");
    }
    if (name === "email") {
      if (!isEmail(value)) {
        target.setCustomValidity("Некорректный email");
      } else {
        target.setCustomValidity("");
      }
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
