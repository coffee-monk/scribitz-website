import { useState } from "react"

function validate(validations, values) {
  // validations array of functions --> returns true || object with errorMsg
  const errors = validations
    .map(validation => validation(values))
    .filter(validation => typeof validation === "object")
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  }
}

// https://dimitr.im/form-validation-react-hooks
export function useForm(
  initialState = {},
  validations = [],
  onSubmit = () => {}
) {
  // call validate on the initial state to prevent error
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  )
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [isValid, setValid] = useState(initialIsValid)
  const [touched, setTouched] = useState({})
  const [showErrors, setShowErrors] = useState(false)

  // get input vals --> check validations + get errorMsgs --> check input touched
  const changeHandler = event => {
    const newValues = {
      ...values,
      [event.target.name]:
        event.target.type !== "radio"
          ? event.target.checked || event.target.value
          : event.target.value,
    }
    const { isValid, errors } = validate(validations, newValues)
    setValues(newValues)
    setValid(isValid)
    setErrors(errors)
    setTouched({ ...touched, [event.target.name]: true })
    console.log(values)
  }

  const submitHandler = event => {
    event.preventDefault()
    if (isValid) {
      onSubmit(values)
      setShowErrors(true)
    } else {
      setShowErrors(true)
    }
  }

  return {
    values,
    changeHandler,
    isValid,
    errors,
    touched,
    showErrors,
    submitHandler,
  }
}
