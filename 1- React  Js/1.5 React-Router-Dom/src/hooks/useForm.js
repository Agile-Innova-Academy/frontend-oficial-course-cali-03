import { useState } from "react";

function useForm(initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = ({ target }) => {
    console.log({
      ...formValues,
      [target.name]: target.value,
    })
    setFormValues(
      {
        ...formValues,
        [target.name]: target.value,
      }
    );
  }

  const resetFormValues = () => {
    setFormValues(initialValues);
  }

  return { formValues, handleInputChange, resetFormValues };
}

export default useForm;