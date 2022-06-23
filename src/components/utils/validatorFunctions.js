// text input ---------------------------------------------
export function isRequired(value) {
  return value != null && value.trim().length !== 0
}

export function isEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

// select input -------------------------------------------
export function isSelected(value) {
  return value !== "default"
}
