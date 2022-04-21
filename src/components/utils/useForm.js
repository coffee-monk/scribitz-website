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

  // element onChange
  // get input vals --> check validations + get errorMsgs --> check input touched
  const changeHandler = event => {
    const newValues = { ...values, [event.target.name]: event.target.value }
    const { isValid, errors } = validate(validations, newValues)
    setValues(newValues)
    setValid(isValid)
    setErrors(errors)
    setTouched({ ...touched, [event.target.name]: true })
  }

  const submitHandler = event => {
    event.preventDefault()
    onSubmit(values)
  }

  return { values, changeHandler, isValid, errors, touched, submitHandler }
}

// VALIDATORS ------- //

export function isRequired(value) {
  console.log(value)
  return value != null && value.trim().length > 0
}

// export function isNumbers(value) {
//   var phoneno = /^\d{10}$/
//   if (inputtxt.value.match(phoneno)) {
//     return true
//   } else {
//     alert("message")
//     return false
//   }
//   return value
// }
