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

  // element onChange
  // get input vals --> check validations + get errorMsgs --> check input touched
  const changeHandler = event => {
    const newValues = { ...values, [event.target.name]: event.target.value }
    const { isValid, errors } = validate(validations, newValues)
    setValues(newValues)
    setValid(isValid)
    setErrors(errors)
    setTouched({ ...touched, [event.target.name]: true })
    console.log(values)
  }

  const submitHandler = event => {
    event.preventDefault()
    console.log(errors)
    if (isValid) {
      onSubmit(values)
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
