export function isRequired(value) {
  return value != null && value.trim().length !== 0
}

export function isEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

export function isSelected(value) {
  console.log(value)
  return value !== "default"
}
